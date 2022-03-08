import { PropType } from 'vue';
import { Model, RuleItem } from './interfaces';
declare const _default: import("vue").DefineComponent<{
    model: {
        type: PropType<Model>;
        default: () => {};
    };
    rules: {
        type: PropType<RuleItem[]>;
        default: () => never[];
    };
}, {
    onSubmit: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-submit"[], "on-submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    model: {
        type: PropType<Model>;
        default: () => {};
    };
    rules: {
        type: PropType<RuleItem[]>;
        default: () => never[];
    };
}>> & {
    "onOn-submit"?: ((...args: any[]) => any) | undefined;
}, {
    model: Model;
    rules: RuleItem[];
}>;
export default _default;
