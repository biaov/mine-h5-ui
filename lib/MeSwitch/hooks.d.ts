import { Props } from './types';
import { Emits } from './interfaces';
export declare const useHandler: (props: Props, emit: Emits) => {
    isActived: import("vue").Ref<boolean>;
    background: import("vue").Ref<string>;
    handleClick: (e: MouseEvent) => void;
};
