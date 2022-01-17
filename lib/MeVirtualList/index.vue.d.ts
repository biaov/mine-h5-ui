import { PropType } from 'vue';
import { ListItem } from './interfaces';
declare const _default: import("vue").DefineComponent<{
    list: {
        type: PropType<ListItem[]>;
        default: () => never[];
    };
    interval: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    distance: {
        type: NumberConstructor;
        default: number;
    };
    screen: {
        type: PropType<number[]>;
        default: () => number[];
    };
    remain: {
        type: NumberConstructor;
        default: number;
    };
}, {
    scrollBarHeight: import("vue").Ref<number>;
    scrollTranslateY: import("vue").Ref<number>;
    renderData: import("vue").ComputedRef<{
        [x: string]: any;
    }[]>;
    onScroll: (e: Event) => void;
    setItemRef: (el: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | Element | null, index: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-load-more"[], "on-load-more", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    list?: unknown;
    interval?: unknown;
    height?: unknown;
    itemHeight?: unknown;
    distance?: unknown;
    screen?: unknown;
    remain?: unknown;
} & {
    list: ListItem[];
    interval: number;
    height: string;
    itemHeight: number;
    distance: number;
    screen: number[];
    remain: number;
} & {}> & {
    "onOn-load-more"?: ((...args: any[]) => any) | undefined;
}, {
    list: ListItem[];
    interval: number;
    height: string;
    itemHeight: number;
    distance: number;
    screen: number[];
    remain: number;
}>;
export default _default;
