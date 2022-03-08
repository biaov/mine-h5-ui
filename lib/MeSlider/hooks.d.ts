import { Props } from './types';
import { Emits } from './interfaces';
export declare const useHandler: (props: Props, emit: Emits) => {
    currentValue: import("vue").Ref<number>;
    onTouchstart: (e: TouchEvent) => void;
    onTouchmove: (e: TouchEvent) => void;
    onTouchend: (e: TouchEvent) => void;
    onMousedown: (e: MouseEvent) => void;
};
