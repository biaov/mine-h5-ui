import { Props } from './types';
import { ListItem, Emits } from './interfaces';
export declare const useShowSheet: (props: Props, emit: Emits) => {
    isShowMask: import("vue").Ref<boolean>;
    isShow: import("vue").Ref<boolean>;
    hideMask: () => void;
};
export declare const useBtns: (emit: Emits) => {
    onLi: (item: ListItem) => void;
    onCancel: (e: MouseEvent) => void;
};
