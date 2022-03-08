import { Props } from './types';
import { Emits } from './interfaces';
export declare const useSearch: (props: Props, emit: Emits) => {
    inputVal: import("vue").Ref<string>;
    onKeypress: (e: KeyboardEvent) => void;
    onFocus: (e: FocusEvent) => void;
    onBlur: (e: FocusEvent) => void;
    onInput: (e: Event) => void;
    onChange: (e: Event) => void;
};
export declare const useBtns: (emit: Emits) => {
    onClean: () => void;
    handleBtn: () => void;
};
