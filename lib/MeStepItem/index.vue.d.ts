declare const _default: import("vue").DefineComponent<{
    name: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
}, {
    isActive: import("vue").Ref<boolean>;
    parentProps: import("vue").Ref<Readonly<{
        active: (string | number)[];
        direction: string;
        type: string;
        color: string;
        activeColor: string;
        icon: string;
        activeIcon: string;
    }>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
}>>, {}>;
export default _default;
