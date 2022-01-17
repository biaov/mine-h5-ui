import { PropType } from 'vue';
import { NativeType } from './types';
declare const _default: import("vue").DefineComponent<{
    nativeType: {
        type: PropType<NativeType>;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        validator: (value: string) => boolean;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}, {
    onClick: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-click"[], "on-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    nativeType?: unknown;
    width?: unknown;
    type?: unknown;
    plain?: unknown;
    disabled?: unknown;
    icon?: unknown;
    color?: unknown;
} & {
    nativeType: NativeType;
    width: string;
    type: string;
    plain: boolean;
    disabled: boolean;
    icon: string;
    color: string;
} & {}> & {
    "onOn-click"?: ((...args: any[]) => any) | undefined;
}, {
    nativeType: NativeType;
    width: string;
    type: string;
    plain: boolean;
    disabled: boolean;
    icon: string;
    color: string;
}>;
export default _default;
