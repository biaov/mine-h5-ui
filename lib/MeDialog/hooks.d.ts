import { Props } from './types';
import { Emits } from './interfaces';
export declare const useShow: (props: Props, emit: Emits) => {
    isShowMask: import("vue").Ref<boolean>;
    isShow: import("vue").Ref<boolean>;
    hideMask: () => void;
};
