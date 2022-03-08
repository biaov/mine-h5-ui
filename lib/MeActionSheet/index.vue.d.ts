import { PropType } from 'vue';
import { ListItem } from './interfaces';
declare const _default: import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    list: {
        type: PropType<ListItem[]>;
        required: true;
        validator: (value: ListItem[]) => boolean;
    };
    index: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
}, {
    isShowMask: import("vue").Ref<boolean>;
    isShow: import("vue").Ref<boolean>;
    hideMask: () => void;
    onLi: (item: ListItem) => void;
    onCancel: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "on-change" | "on-cancel")[], "update:visible" | "on-change" | "on-cancel", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    list: {
        type: PropType<ListItem[]>;
        required: true;
        validator: (value: ListItem[]) => boolean;
    };
    index: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    "onOn-change"?: ((...args: any[]) => any) | undefined;
    "onOn-cancel"?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    index: string;
    label: string;
}>;
export default _default;
