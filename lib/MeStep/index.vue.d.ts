import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    active: {
        type: PropType<(string | number)[]>;
        required: true;
    };
    direction: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    activeIcon: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    active?: unknown;
    direction?: unknown;
    type?: unknown;
    color?: unknown;
    activeColor?: unknown;
    icon?: unknown;
    activeIcon?: unknown;
} & {
    active: (string | number)[];
    direction: string;
    type: string;
    color: string;
    activeColor: string;
    icon: string;
    activeIcon: string;
} & {}>, {
    direction: string;
    type: string;
    color: string;
    activeColor: string;
    icon: string;
    activeIcon: string;
}>;
export default _default;
