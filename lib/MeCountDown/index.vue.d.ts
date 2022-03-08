declare const _default: import("vue").DefineComponent<{
    time: {
        type: NumberConstructor;
        required: true;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    isStart: {
        type: BooleanConstructor;
        default: boolean;
    };
    isSuspend: {
        type: BooleanConstructor;
        default: boolean;
    };
    isReset: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    formatAfter: import("vue").Ref<{
        DD?: string | undefined;
        hh?: string | undefined;
        mm?: string | undefined;
        ss?: string | undefined;
        ms?: number | undefined;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-end" | "on-progress")[], "on-end" | "on-progress", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    time: {
        type: NumberConstructor;
        required: true;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    isStart: {
        type: BooleanConstructor;
        default: boolean;
    };
    isSuspend: {
        type: BooleanConstructor;
        default: boolean;
    };
    isReset: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onOn-end"?: ((...args: any[]) => any) | undefined;
    "onOn-progress"?: ((...args: any[]) => any) | undefined;
}, {
    format: string;
    isStart: boolean;
    isSuspend: boolean;
    isReset: boolean;
}>;
export default _default;
