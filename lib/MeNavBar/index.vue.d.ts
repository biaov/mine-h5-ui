import { PropType } from 'vue';
import { Styles } from './interfaces';
declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    leftArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    leftText: {
        type: StringConstructor;
        default: string;
    };
    rightText: {
        type: StringConstructor;
        default: string;
    };
    styles: {
        type: PropType<Styles>;
        default: () => {
            borderColor: string;
            background: string;
            titleColor: string;
            leftColor: string;
            rightColor: string;
        };
    };
}, {
    onClickLeft: (e: MouseEvent) => void;
    onClickRight: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click-left" | "click-right")[], "click-left" | "click-right", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    leftArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    leftText: {
        type: StringConstructor;
        default: string;
    };
    rightText: {
        type: StringConstructor;
        default: string;
    };
    styles: {
        type: PropType<Styles>;
        default: () => {
            borderColor: string;
            background: string;
            titleColor: string;
            leftColor: string;
            rightColor: string;
        };
    };
}>> & {
    "onClick-left"?: ((...args: any[]) => any) | undefined;
    "onClick-right"?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    leftArrow: boolean;
    leftText: string;
    rightText: string;
    styles: Styles;
}>;
export default _default;
