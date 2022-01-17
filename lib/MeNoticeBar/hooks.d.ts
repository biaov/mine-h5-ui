import { Props } from './types';
import { Emits } from './interfaces';
export declare const useAnimate: (props: Props) => {
    noticeList: import("vue").Ref<HTMLDivElement | undefined>;
    left: import("vue").Ref<number>;
    listData: import("vue").Ref<string[]>;
    listIndex: import("vue").Ref<number>;
};
export declare const useBtns: (emit: Emits) => {
    onClick: (e: number) => void;
    onClickPreappend: (e: MouseEvent) => void;
    onClickAppend: (e: MouseEvent) => void;
};
