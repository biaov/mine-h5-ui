import { Props } from './types';
import { Emits } from './interfaces';
export declare const useHandMove: () => {
    listData: import("vue").Ref<string[][]>;
    distance: import("vue").Ref<number[]>;
    duration: import("vue").Ref<number>;
    currentValue: string[];
    onTouchstart: (e: TouchEvent, i: number) => void;
    onTouchmove: (e: TouchEvent, i: number) => void;
    onTouchend: (e: TouchEvent, i: number) => void;
    onMousedown: (e: MouseEvent, i: number) => void;
};
export declare const useBtns: (props: Props, emit: Emits, currentValue: string[]) => {
    onCancel: () => void;
    onSure: () => void;
};
