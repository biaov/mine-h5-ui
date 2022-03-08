import { ref, computed, watch, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeStyle, renderList, normalizeClass, withModifiers, renderSlot } from 'vue';

const getSymmPoint = (curPoint, center) => {
    const x = center.x * 2 - curPoint.x;
    const y = center.y * 2 - curPoint.y;
    return { x, y };
};
const getCenterPoint = (curPoint, symmPoint) => {
    const x = (curPoint.x + symmPoint.x) / 2;
    const y = (curPoint.y + symmPoint.y) / 2;
    return { x, y };
};
const angleMutualRadian = (value, type = 'angle') => {
    const ratio = Math.PI / 180;
    return type === 'angle' ? value * ratio : value / ratio;
};
const getRotatePoint = (point, center, angle) => {
    const radian = angleMutualRadian(angle);
    const sin = Math.sin(radian);
    const cos = Math.cos(radian);
    const relativeX = point.x - center.x;
    const relativeY = point.y - center.y;
    const x = relativeX * cos - relativeY * sin + center.x;
    const y = relativeX * sin + relativeY * cos + center.y;
    return { x, y };
};
const northWestResize = ({ symmPoint, curPoint, rect }) => {
    const newCenter = getCenterPoint(curPoint, symmPoint);
    const newPoint = getRotatePoint(curPoint, newCenter, -rect.r);
    const newSymmPoint = getRotatePoint(symmPoint, newCenter, -rect.r);
    const newW = newSymmPoint.x - newPoint.x;
    const newH = newSymmPoint.y - newPoint.y;
    if (newW > 0 && newH > 0) {
        rect.w = Math.round(newW);
        rect.h = Math.round(newH);
        rect.x = Math.round(newPoint.x);
        rect.y = Math.round(newPoint.y);
    }
    return rect;
};
const northResize = ({ startPoint, symmPoint, curPoint, rect }) => {
    const rotatePoint = getRotatePoint(curPoint, startPoint, -rect.r);
    const centerTop = getRotatePoint({
        x: startPoint.x,
        y: rotatePoint.y
    }, startPoint, rect.r);
    const newH = Math.sqrt((centerTop.x - symmPoint.x) ** 2 + (centerTop.y - symmPoint.y) ** 2);
    if (newH > 0) {
        const newCenter = {
            x: centerTop.x - (centerTop.x - symmPoint.x) / 2,
            y: centerTop.y + (symmPoint.y - centerTop.y) / 2
        };
        rect.h = Math.round(newH);
        rect.x = Math.round(newCenter.x - rect.w / 2);
        rect.y = Math.round(newCenter.y - newH / 2);
    }
    return rect;
};
const northEastResize = ({ symmPoint, curPoint, rect }) => {
    const newCenter = getCenterPoint(curPoint, symmPoint);
    const newPoint = getRotatePoint(curPoint, newCenter, -rect.r);
    const newSymmPoint = getRotatePoint(symmPoint, newCenter, -rect.r);
    const newW = newPoint.x - newSymmPoint.x;
    const newH = newSymmPoint.y - newPoint.y;
    if (newW > 0 && newH > 0) {
        rect.w = Math.round(newW);
        rect.h = Math.round(newH);
        rect.x = Math.round(newSymmPoint.x);
        rect.y = Math.round(newPoint.y);
    }
    return rect;
};
const eastResize = ({ startPoint, symmPoint, curPoint, rect }) => {
    const rotatePoint = getRotatePoint(curPoint, startPoint, -rect.r);
    const rightCenter = getRotatePoint({
        x: rotatePoint.x,
        y: startPoint.y
    }, startPoint, rect.r);
    const newW = Math.sqrt((rightCenter.x - symmPoint.x) ** 2 + (rightCenter.y - symmPoint.y) ** 2);
    if (newW > 0) {
        const newCenter = {
            x: rightCenter.x - (rightCenter.x - symmPoint.x) / 2,
            y: rightCenter.y + (symmPoint.y - rightCenter.y) / 2
        };
        rect.w = Math.round(newW);
        rect.x = Math.round(newCenter.x - newW / 2);
        rect.y = Math.round(newCenter.y - rect.h / 2);
    }
    return rect;
};
const southEastResize = ({ symmPoint, curPoint, rect }) => {
    const newCenter = getCenterPoint(curPoint, symmPoint);
    const newPoint = getRotatePoint(symmPoint, newCenter, -rect.r);
    const newSymmPoint = getRotatePoint(curPoint, newCenter, -rect.r);
    const newW = newSymmPoint.x - newPoint.x;
    const newH = newSymmPoint.y - newPoint.y;
    if (newW > 0 && newH > 0) {
        rect.w = Math.round(newW);
        rect.h = Math.round(newH);
        rect.x = Math.round(newPoint.x);
        rect.y = Math.round(newPoint.y);
    }
    return rect;
};
const southResize = ({ startPoint, symmPoint, curPoint, rect }) => {
    const rotatePoint = getRotatePoint(curPoint, startPoint, -rect.r);
    const centerBottom = getRotatePoint({
        x: startPoint.x,
        y: rotatePoint.y
    }, startPoint, rect.r);
    const newH = Math.sqrt((centerBottom.x - symmPoint.x) ** 2 + (centerBottom.y - symmPoint.y) ** 2);
    if (newH > 0) {
        const newCenter = {
            x: centerBottom.x - (centerBottom.x - symmPoint.x) / 2,
            y: centerBottom.y + (symmPoint.y - centerBottom.y) / 2
        };
        rect.h = Math.round(newH);
        rect.x = Math.round(newCenter.x - rect.w / 2);
        rect.y = Math.round(newCenter.y - newH / 2);
    }
    return rect;
};
const southWestResize = ({ symmPoint, curPoint, rect }) => {
    const newCenter = getCenterPoint(curPoint, symmPoint);
    const newPoint = getRotatePoint(symmPoint, newCenter, -rect.r);
    const newSymmPoint = getRotatePoint(curPoint, newCenter, -rect.r);
    const newW = newPoint.x - newSymmPoint.x;
    const newH = newSymmPoint.y - newPoint.y;
    if (newW > 0 && newH > 0) {
        rect.w = Math.round(newW);
        rect.h = Math.round(newH);
        rect.x = Math.round(newSymmPoint.x);
        rect.y = Math.round(newPoint.y);
    }
    return rect;
};
const westResize = ({ startPoint, symmPoint, curPoint, rect }) => {
    const rotatePoint = getRotatePoint(curPoint, startPoint, -rect.r);
    const leftCenter = getRotatePoint({ x: rotatePoint.x, y: startPoint.y }, startPoint, rect.r);
    const newW = Math.sqrt((leftCenter.x - symmPoint.x) ** 2 + (leftCenter.y - symmPoint.y) ** 2);
    if (newW > 0) {
        const newCenter = {
            x: leftCenter.x - (leftCenter.x - symmPoint.x) / 2,
            y: leftCenter.y + (symmPoint.y - leftCenter.y) / 2
        };
        rect.w = Math.round(newW);
        rect.y = Math.round(newCenter.y - rect.h / 2);
        rect.x = Math.round(newCenter.x - newW / 2);
    }
    return rect;
};
const resizeGroup = {
    nw: northWestResize,
    n: northResize,
    ne: northEastResize,
    e: eastResize,
    se: southEastResize,
    s: southResize,
    sw: southWestResize,
    w: westResize
};
const calcSize = (name, option) => {
    return resizeGroup[name](JSON.parse(JSON.stringify(option)));
};

const IsType = (type, value) => Object.prototype.toString.call(value).slice(8, -1) === type;
const DeepCopyRA = (arg) => {
    const newValue = IsType('Object', arg)
        ? {}
        : IsType('Array', arg)
            ? []
            : IsType('Date', arg)
                ? new arg.constructor(+arg)
                : IsType('RegExp', arg) || IsType('Error', arg)
                    ? new arg.constructor(arg)
                    : arg;
    if (IsType('Object', arg) || IsType('Array', arg)) {
        Object.keys(arg).forEach(key => {
            newValue[key] = DeepCopyRA(arg[key]);
        });
    }
    return newValue;
};

const useHandler = (props, emit) => {
    const listData = ref([]);
    const angleToCursor = Object.freeze([
        { start: 338, end: 23, cursor: 'nw' },
        { start: 23, end: 68, cursor: 'n' },
        { start: 68, end: 113, cursor: 'ne' },
        { start: 113, end: 158, cursor: 'e' },
        { start: 158, end: 203, cursor: 'se' },
        { start: 203, end: 248, cursor: 's' },
        { start: 248, end: 293, cursor: 'sw' },
        { start: 293, end: 338, cursor: 'w' }
    ]);
    const getCurItem = computed(() => listData.value[props.current]?.rect);
    const getCursor = computed(() => (i) => {
        const { r } = getCurItem.value || {};
        if (!r)
            return '';
        const len = angleToCursor.length;
        const index = angleToCursor.findIndex(({ start, end }, j) => (j ? r > start && r < end : r < end || r > start));
        let newI = index + i;
        newI >= len && (newI -= len);
        return `new-${angleToCursor[newI].cursor}`;
    });
    const onEmitChange = (type) => {
        emit('on-change', listData.value, type);
    };
    const onUpdate = () => {
        emit('update:list', listData.value);
    };
    const onDelete = () => {
        listData.value.splice(props.current, 1);
        onUpdate();
        onEmitChange('delete');
    };
    const onClick = (index) => {
        emit('update:current', index);
    };
    watch(() => props.list, (value) => {
        listData.value = DeepCopyRA(value);
    }, { deep: true, immediate: true });
    return {
        listData,
        angleToCursor,
        getCursor,
        onDelete,
        onClick,
        getCurItem,
        onEmitChange,
        onUpdate
    };
};
const useMove = (props, share) => {
    const { listData, getCurItem, onEmitChange, onUpdate } = share;
    let startPoint;
    let startRect;
    const getDistance = (point) => {
        const diffX = point.x - startPoint.x;
        const diffY = point.y - startPoint.y;
        const distX = startRect.x + diffX;
        const distY = startRect.y + diffY;
        return { distX, distY };
    };
    const onTouchstart = (e) => {
        const { clientX, clientY } = e.changedTouches[0];
        startPoint = { x: clientX, y: clientY };
        startRect = { ...getCurItem.value };
    };
    const onTouchmove = (e) => {
        const { clientX, clientY } = e.changedTouches[0];
        const { distX, distY } = getDistance({ x: clientX, y: clientY });
        listData.value[props.current].rect.x = distX;
        listData.value[props.current].rect.y = distY;
        onEmitChange('translate');
        onUpdate();
    };
    const onMousedown = (e) => {
        const { clientX, clientY } = e;
        startPoint = { x: clientX, y: clientY };
        startRect = { ...getCurItem.value };
        document.onmousemove = (ev) => {
            const { distX, distY } = getDistance({ x: ev.clientX, y: ev.clientY });
            listData.value[props.current].rect.x = distX;
            listData.value[props.current].rect.y = distY;
            onEmitChange('translate');
            onUpdate();
        };
        document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
    return { onTouchstart, onTouchmove, onMousedown };
};
const useResize = (props, share) => {
    const { listData, getCurItem, onEmitChange, onUpdate } = share;
    let startPoint;
    let centerPoint;
    let symmPoint;
    const dragRef = ref();
    const getDragRect = computed(() => dragRef.value?.getBoundingClientRect());
    const getCenterPoint = () => {
        const { x: px, y: py } = getDragRect.value;
        const { w, h, x: ex, y: ey } = getCurItem.value;
        const x = w / 2 + ex + px;
        const y = h / 2 + ey + py;
        return { x, y };
    };
    const onResizeTouchstart = (e) => {
        const { clientX, clientY } = e.changedTouches[0];
        startPoint = { x: clientX, y: clientY };
        centerPoint = getCenterPoint();
        symmPoint = getSymmPoint(startPoint, centerPoint);
    };
    const onResizeTouchmove = (e, item) => {
        const { clientX, clientY } = e.changedTouches[0];
        const curPoint = { x: clientX, y: clientY };
        const resultRect = calcSize(item.cursor, { startPoint, centerPoint, symmPoint, curPoint, rect: getCurItem.value });
        const { x, y } = getDragRect.value;
        resultRect.x -= x;
        resultRect.y -= y;
        listData.value[props.current].rect = resultRect;
        onUpdate();
        onEmitChange('resize');
    };
    const onResizeMousedown = (e, item) => {
        const { clientX, clientY } = e;
        startPoint = { x: clientX, y: clientY };
        centerPoint = getCenterPoint();
        symmPoint = getSymmPoint(startPoint, centerPoint);
        document.onmousemove = (ev) => {
            const curPoint = { x: ev.clientX, y: ev.clientY };
            const resultRect = calcSize(item.cursor, { startPoint, centerPoint, symmPoint, curPoint, rect: getCurItem.value });
            const { x, y } = getDragRect.value;
            resultRect.x -= x;
            resultRect.y -= y;
            Object.assign(listData.value[props.current].rect, resultRect);
            onUpdate();
            onEmitChange('resize');
        };
        document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
    return { dragRef, onResizeTouchstart, onResizeTouchmove, onResizeMousedown, getCenterPoint };
};
const useRotate = (props, share) => {
    const { getCurItem, getCenterPoint, onUpdate, onEmitChange } = share;
    const getAngleAlign = (angle) => [0, 90, 180, 270, 360, angle].find(deg => Math.abs(angle - deg) < props.angleRange);
    const getRotate = (point) => {
        const center = getCenterPoint();
        if (point.x === center.x) {
            return point.y >= center.y ? 0 : 180;
        }
        if (point.y === center.y) {
            return point.x < center.x ? 90 : 270;
        }
        const x = point.x - center.x;
        const y = point.y - center.y;
        let angle = (Math.atan(Math.abs(x / y)) / Math.PI) * 180;
        if (x < 0 && y < 0) {
            angle = 180 - angle;
        }
        else if (x > 0 && y < 0) {
            angle += 180;
        }
        else if (x > 0 && y > 0) {
            angle = 360 - angle;
        }
        return getAngleAlign(angle);
    };
    const onRotateTouchmove = (e) => {
        const { clientX, clientY } = e.changedTouches[0];
        getCurItem.value.r = getRotate({ x: clientX, y: clientY });
        onUpdate();
        onEmitChange('rotate');
    };
    const onRotateMousedown = () => {
        document.onmousemove = e => {
            const { clientX, clientY } = e;
            getCurItem.value.r = getRotate({ x: clientX, y: clientY });
            onUpdate();
            onEmitChange('rotate');
        };
        document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
    return { onRotateTouchmove, onRotateMousedown };
};

var script = defineComponent({
    name: 'MeDrag',
    emits: ['on-change', 'update:list', 'update:current'],
    props: {
        current: {
            type: Number,
            default: -1
        },
        list: {
            type: Array,
            default: () => []
        },
        width: {
            type: String,
            default: '300px'
        },
        height: {
            type: String,
            default: '300px'
        },
        theme: {
            type: String,
            default: '#f56c6c'
        },
        themeText: {
            type: String,
            default: '#fff'
        },
        angleRange: {
            type: Number,
            default: 5
        }
    },
    setup(props, { emit }) {
        const { listData, angleToCursor, getCursor, onDelete, onClick, getCurItem, onEmitChange, onUpdate } = useHandler(props, emit);
        const share = { getCurItem, onEmitChange, onUpdate };
        const { onTouchstart, onTouchmove, onMousedown } = useMove(props, { ...share, listData });
        const { dragRef, onResizeTouchstart, onResizeTouchmove, onResizeMousedown, getCenterPoint } = useResize(props, { ...share, listData });
        const { onRotateTouchmove, onRotateMousedown } = useRotate(props, { ...share, getCenterPoint });
        return {
            listData,
            angleToCursor,
            getCursor,
            onDelete,
            onClick,
            onTouchstart,
            onTouchmove,
            onMousedown,
            dragRef,
            onResizeTouchstart,
            onResizeTouchmove,
            onResizeMousedown,
            onRotateTouchmove,
            onRotateMousedown
        };
    }
});

const _hoisted_1 = ["onClick"];
const _hoisted_2 = ["onTouchmove", "onMousedown"];
const _hoisted_3 = /*#__PURE__*/createElementVNode("i", { class: "iconfont icon-baseline-close-px" }, null, -1 /* HOISTED */);
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = /*#__PURE__*/createElementVNode("i", { class: "iconfont icon-loading_flat" }, null, -1 /* HOISTED */);
const _hoisted_6 = [
  _hoisted_5
];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 拖拽 "),
    createElementVNode("div", {
      class: "me-drag",
      ref: "dragRef",
      style: normalizeStyle(`width:${_ctx.width};height:${_ctx.height};`),
      onClick: _cache[10] || (_cache[10] = $event => (_ctx.onClick(-1)))
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listData, (item, index) => {
        return (openBlock(), createElementBlock("div", {
          key: index,
          class: normalizeClass(["item", { active: index === _ctx.current }]),
          style: normalizeStyle(`top:${item.rect.y}px;left:${item.rect.x}px;width:${item.rect.w}px;height:${item.rect.h}px;transform:rotate(${item.rect.r}deg);--theme:${_ctx.theme};--themeText:${_ctx.themeText};`),
          onTouchstart: _cache[7] || (_cache[7] = (...args) => (_ctx.onTouchstart && _ctx.onTouchstart(...args))),
          onTouchmove: _cache[8] || (_cache[8] = (...args) => (_ctx.onTouchmove && _ctx.onTouchmove(...args))),
          onMousedown: _cache[9] || (_cache[9] = (...args) => (_ctx.onMousedown && _ctx.onMousedown(...args))),
          onClick: withModifiers($event => (_ctx.onClick(index)), ["stop"])
        }, [
          createCommentVNode(" 缩放按钮 "),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.angleToCursor, (it, i) => {
            return (openBlock(), createElementBlock("div", {
              class: normalizeClass(["u-resize", [it.cursor, _ctx.getCursor(i)]]),
              key: it.cursor,
              onTouchstart: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.onResizeTouchstart && _ctx.onResizeTouchstart(...args)), ["stop"])),
              onTouchmove: withModifiers($event => (_ctx.onResizeTouchmove($event, it)), ["stop"]),
              onTouchend: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"])),
              onMousedown: withModifiers($event => (_ctx.onResizeMousedown($event, it)), ["stop"])
            }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_2))
          }), 128 /* KEYED_FRAGMENT */)),
          createCommentVNode(" 删除按钮 "),
          createElementVNode("div", {
            class: "u-delete flex-center",
            onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.onDelete && _ctx.onDelete(...args)))
          }, _hoisted_4),
          createCommentVNode(" 旋转按钮 "),
          createElementVNode("div", {
            class: "u-rotate flex-center",
            onTouchstart: _cache[3] || (_cache[3] = withModifiers(() => {}, ["stop"])),
            onTouchmove: _cache[4] || (_cache[4] = withModifiers((...args) => (_ctx.onRotateTouchmove && _ctx.onRotateTouchmove(...args)), ["stop"])),
            onTouchend: _cache[5] || (_cache[5] = withModifiers(() => {}, ["stop"])),
            onMousedown: _cache[6] || (_cache[6] = withModifiers((...args) => (_ctx.onRotateMousedown && _ctx.onRotateMousedown(...args)), ["stop"]))
          }, _hoisted_6, 32 /* HYDRATE_EVENTS */),
          renderSlot(_ctx.$slots, "default", {
            item: item,
            index: index
          })
        ], 46 /* CLASS, STYLE, PROPS, HYDRATE_EVENTS */, _hoisted_1))
      }), 128 /* KEYED_FRAGMENT */))
    ], 4 /* STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeDrag/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeDrag = script;

export { InMeDrag as default };
