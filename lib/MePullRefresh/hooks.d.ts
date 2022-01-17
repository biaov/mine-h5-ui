import { Props } from './types';
import { Emits } from './interfaces';
export declare const useHandMove: (props: Props, emit: Emits) => {
    activeState: import("vue").Ref<number>;
    transY: import("vue").Ref<number>;
    scale: import("vue").Ref<number>;
    showValue: import("vue").Ref<number>;
    duration: import("vue").Ref<number>;
    onTouchstart: (e: TouchEvent) => void;
    onTouchmove: (e: TouchEvent) => void;
    onTouchend: (e: TouchEvent) => void;
    onMousedown: (e: MouseEvent) => void;
    onMousemove: (e: MouseEvent) => void;
    onMouseup: (e: MouseEvent) => void;
};
