import { Props } from './types';
import { Emits } from './interfaces';
export declare const useHandMove: (props: Props, emit: Emits) => {
    swiperDom: import("vue").Ref<HTMLDivElement | undefined>;
    dots: import("vue").Ref<number>;
    dotIndex: import("vue").Ref<number>;
    currentValue: import("vue").Ref<number>;
    isActive: import("vue").Ref<boolean>;
    onTouchstart: (e: TouchEvent) => void;
    onTouchmove: (e: TouchEvent) => void;
    onTouchend: (e: TouchEvent) => void;
    onMousedown: (e: MouseEvent) => void;
};
