import { ComponentPublicInstance } from 'vue';
import { Props } from './types';
import { Emits } from './interfaces';
export declare const useHandler: (props: Props, emit: Emits) => {
    scrollBarHeight: import("vue").Ref<number>;
    scrollTranslateY: import("vue").Ref<number>;
    renderData: import("vue").ComputedRef<{
        [x: string]: any;
    }[]>;
    onScroll: (e: Event) => void;
    setItemRef: (el: Element | ComponentPublicInstance | null, index: number) => void;
};
