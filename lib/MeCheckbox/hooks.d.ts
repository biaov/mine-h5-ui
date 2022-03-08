import { Props } from './types';
import { Emits } from './interfaces';
export declare const useHandler: (props: Props, emit: Emits) => {
    isChecked: import("vue").Ref<boolean>;
    iconName: import("vue").Ref<string>;
    handleClick: (e: MouseEvent) => void;
    setStatus: () => void;
};
