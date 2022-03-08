import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    list: {
        type: PropType<string | string[]>;
        required: true;
    };
    scroll: {
        type: StringConstructor;
        default: string;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    preappendIcon: {
        type: StringConstructor;
        default: string;
    };
    preappendColor: {
        type: StringConstructor;
        default: string;
    };
    appendIcon: {
        type: StringConstructor;
        default: string;
    };
    appendColor: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    radius: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}, {
    noticeList: import("vue").Ref<HTMLDivElement | undefined>;
    left: import("vue").Ref<number>;
    listData: import("vue").Ref<string[]>;
    listIndex: import("vue").Ref<number>;
    onClick: (e: number) => void;
    onClickPreappend: (e: MouseEvent) => void;
    onClickAppend: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-click" | "on-click:preappend" | "on-click:append")[], "on-click" | "on-click:preappend" | "on-click:append", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    list: {
        type: PropType<string | string[]>;
        required: true;
    };
    scroll: {
        type: StringConstructor;
        default: string;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    preappendIcon: {
        type: StringConstructor;
        default: string;
    };
    preappendColor: {
        type: StringConstructor;
        default: string;
    };
    appendIcon: {
        type: StringConstructor;
        default: string;
    };
    appendColor: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    radius: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onOn-click"?: ((...args: any[]) => any) | undefined;
    "onOn-click:preappend"?: ((...args: any[]) => any) | undefined;
    "onOn-click:append"?: ((...args: any[]) => any) | undefined;
}, {
    scroll: string;
    loop: boolean;
    delay: number;
    preappendIcon: string;
    preappendColor: string;
    appendIcon: string;
    appendColor: string;
    height: number;
    radius: string | number;
    background: string;
    color: string;
}>;
export default _default;
