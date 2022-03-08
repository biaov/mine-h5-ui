import { Props } from './types';
import { Emits } from './interfaces';
export declare const useHandler: (props: Props, emit: Emits) => {
    accordionItemCont: import("vue").Ref<HTMLDivElement | undefined>;
    isShow: import("vue").Ref<boolean>;
    curHeight: import("vue").Ref<number>;
    onClick: (e: MouseEvent) => void;
};
