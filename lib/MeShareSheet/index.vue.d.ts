import { PropType } from 'vue';
import { ListItem } from './interfaces';
declare const _default: import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    tips: {
        type: StringConstructor;
        default: string;
    };
    list: {
        type: PropType<ListItem[]>;
        required: true;
        validator: (value: ListItem[]) => boolean;
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
    tips: {
        type: StringConstructor;
        default: string;
    };
    list: {
        type: PropType<ListItem[]>;
        required: true;
        validator: (value: ListItem[]) => boolean;
    };
}>> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    "onOn-change"?: ((...args: any[]) => any) | undefined;
    "onOn-cancel"?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    tips: string;
}>;
export default _default;
