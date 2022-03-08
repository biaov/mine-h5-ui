import { PropType } from 'vue';
import { ListDataItem } from './interfaces';
declare const _default: import("vue").DefineComponent<{
    current: {
        type: NumberConstructor;
        default: number;
    };
    list: {
        type: PropType<ListDataItem[]>;
        default: () => never[];
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    theme: {
        type: StringConstructor;
        default: string;
    };
    themeText: {
        type: StringConstructor;
        default: string;
    };
    angleRange: {
        type: NumberConstructor;
        default: number;
    };
}, {
    listData: import("vue").Ref<{
        rect: {
            w: number;
            h: number;
            x: number;
            y: number;
            r: number;
        };
    }[]>;
    angleToCursor: readonly import("./interfaces").AngleToCursorItem[];
    getCursor: import("vue").ComputedRef<(i: number) => string>;
    onDelete: () => void;
    onClick: (index: number) => void;
    onTouchstart: (e: TouchEvent) => void;
    onTouchmove: (e: TouchEvent) => void;
    onMousedown: (e: MouseEvent) => void;
    dragRef: import("vue").Ref<HTMLDivElement | undefined>;
    onResizeTouchstart: (e: TouchEvent) => void;
    onResizeTouchmove: (e: TouchEvent, item: import("./interfaces").AngleToCursorItem) => void;
    onResizeMousedown: (e: MouseEvent, item: import("./interfaces").AngleToCursorItem) => void;
    onRotateTouchmove: (e: TouchEvent) => void;
    onRotateMousedown: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-change" | "update:list" | "update:current")[], "on-change" | "update:list" | "update:current", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    current: {
        type: NumberConstructor;
        default: number;
    };
    list: {
        type: PropType<ListDataItem[]>;
        default: () => never[];
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    theme: {
        type: StringConstructor;
        default: string;
    };
    themeText: {
        type: StringConstructor;
        default: string;
    };
    angleRange: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    "onOn-change"?: ((...args: any[]) => any) | undefined;
    "onUpdate:list"?: ((...args: any[]) => any) | undefined;
    "onUpdate:current"?: ((...args: any[]) => any) | undefined;
}, {
    current: number;
    list: ListDataItem[];
    width: string;
    height: string;
    theme: string;
    themeText: string;
    angleRange: number;
}>;
export default _default;
