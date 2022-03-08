import { Emits } from './interfaces';
export declare const useHandler: (emit: Emits) => {
    cols: import("vue").Ref<number>;
    widthValue: import("vue").Ref<number>;
    borderColor: import("vue").Ref<string>;
    handleClick: (e: MouseEvent) => void;
};
