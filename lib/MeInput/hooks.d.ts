import { Ref } from 'vue';
import { Props } from './types';
import { Emits } from './interfaces';
export declare const useSms: (props: Props, emit: Emits) => {
    sms: Ref<HTMLDivElement | undefined>;
    handleSMS: (e: MouseEvent) => void;
};
export declare const useIcon: (props: Props, emit: Emits, inputType: Ref<string>) => {
    handleIcon: (e: MouseEvent) => void;
};
export declare const useInput: (props: Props, emit: Emits, sms: Ref<HTMLDivElement | undefined>) => {
    inputLabel: Ref<HTMLDivElement | undefined>;
    inputVal: Ref<string | number>;
    inputType: Ref<string>;
    paddingLeft: Ref<number>;
    paddingRight: Ref<number>;
    isFocus: Ref<boolean>;
    onFocus: (e: FocusEvent) => void;
    onBlur: (e: FocusEvent) => void;
    onChange: (e: Event) => void;
    onInput: (e: Event) => void;
};
