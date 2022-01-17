import { Props } from './types';
import { Emits } from './interfaces';
export declare const useHandler: (emit: Emits) => {
    onClick: (num: number) => void;
    onDelete: (e: MouseEvent) => void;
    onComplate: (e: MouseEvent) => void;
};
export declare const usePadding: (props: Props, emit: Emits) => {
    isActive: import("vue").Ref<boolean>;
};
