import { Props } from './types';
import { Emits } from './interfaces';
export declare const useMask: (props: Props, emit: Emits) => {
    isShowMask: import("vue").Ref<boolean>;
    isShow: import("vue").Ref<boolean>;
    showMask: () => void;
    hideMask: () => void;
};
export declare const useRadius: ({ position, radius }: Props) => {
    setRadius: import("vue").ComputedRef<string>;
};
