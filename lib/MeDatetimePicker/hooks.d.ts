import { Props } from './types';
import { Emits } from './interfaces';
export declare const useHandMove: (props: Props) => {
    show: import("vue").Ref<number[]>;
    currentValue: number[];
    listData: import("vue").Ref<{
        id: number;
        list: number | number[];
    }[]>;
    distance: import("vue").Ref<number[]>;
    duration: import("vue").Ref<number>;
    filterNumber: import("vue").ComputedRef<(num: number) => string | number>;
    onTouchstart: (e: TouchEvent, i: number) => void;
    onTouchmove: (e: TouchEvent, i: number) => void;
    onTouchend: (e: TouchEvent, i: number) => void;
    onMousedown: (e: MouseEvent, i: number) => void;
};
export declare const useBtns: (props: Props, emit: Emits, currentValue: number[]) => {
    onCancel: () => void;
    onSure: () => void;
};
