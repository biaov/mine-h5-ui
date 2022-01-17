import { PropType } from 'vue';
import { ListItem } from './interfaces';
declare const _default: import("vue").DefineComponent<{
    list: {
        type: PropType<ListItem[]>;
        required: true;
    };
    borderColor: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    colorSelected: {
        type: StringConstructor;
        default: string;
    };
}, {
    onClick: (item: ListItem) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-change"[], "on-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    list?: unknown;
    borderColor?: unknown;
    background?: unknown;
    color?: unknown;
    colorSelected?: unknown;
} & {
    list: ListItem[];
    borderColor: string;
    background: string;
    color: string;
    colorSelected: string;
} & {}> & {
    "onOn-change"?: ((...args: any[]) => any) | undefined;
}, {
    borderColor: string;
    background: string;
    color: string;
    colorSelected: string;
}>;
export default _default;
