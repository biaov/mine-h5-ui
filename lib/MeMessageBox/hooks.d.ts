import { Props } from './types';
import { Emits } from './interfaces';
export declare const useShow: (props: Props, emit: Emits) => {
    isShow: import("vue").Ref<boolean>;
    isDestroy: import("vue").Ref<boolean>;
    inputValue: import("vue").Ref<string>;
    onCancel: () => void;
    onConfirm: () => void;
};
