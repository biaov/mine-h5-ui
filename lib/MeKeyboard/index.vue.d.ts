import { PropType } from 'vue';
import { SkinStyleValue } from './interfaces';
declare const _default: import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    skinType: {
        type: StringConstructor;
        default: string;
    };
    skinStyle: {
        type: PropType<SkinStyleValue>;
        default: () => {
            bgc: string;
            textBgc: string;
            color: string;
        };
    };
    isPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    isActive: import("vue").Ref<boolean>;
    onClick: (num: number) => void;
    onDelete: (e: MouseEvent) => void;
    onComplate: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "on-click" | "on-delete" | "on-complate")[], "update:visible" | "on-click" | "on-delete" | "on-complate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    visible?: unknown;
    skinType?: unknown;
    skinStyle?: unknown;
    isPadding?: unknown;
} & {
    visible: boolean;
    skinType: string;
    skinStyle: SkinStyleValue;
    isPadding: boolean;
} & {}> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    "onOn-click"?: ((...args: any[]) => any) | undefined;
    "onOn-delete"?: ((...args: any[]) => any) | undefined;
    "onOn-complate"?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    skinType: string;
    skinStyle: SkinStyleValue;
    isPadding: boolean;
}>;
export default _default;
