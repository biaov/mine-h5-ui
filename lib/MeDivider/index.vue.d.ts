import { PropType } from 'vue';
import { Line, Text } from './interfaces';
declare const _default: import("vue").DefineComponent<{
    list: {
        type: PropType<string[]>;
        default: () => never[];
    };
    left: {
        type: NumberConstructor;
    };
    right: {
        type: NumberConstructor;
    };
    width: {
        type: NumberConstructor;
    };
    height: {
        type: NumberConstructor;
    };
    origin: {
        type: NumberConstructor;
    };
    line: {
        type: PropType<Line>;
        default: () => {
            radius: number;
            color: string;
            size: number;
        };
    };
    text: {
        type: PropType<Text>;
        default: () => {
            color: string;
            size: number;
        };
    };
}, {
    fieldsetList: import("vue").Ref<{
        text: string;
        deg: number;
    }[]>;
    curLine: import("vue").Ref<{
        radius?: number | undefined;
        color: string;
        size?: number | undefined;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    list?: unknown;
    left?: unknown;
    right?: unknown;
    width?: unknown;
    height?: unknown;
    origin?: unknown;
    line?: unknown;
    text?: unknown;
} & {
    list: string[];
    line: Line;
    text: Text;
} & {
    left?: number | undefined;
    right?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    origin?: number | undefined;
}>, {
    list: string[];
    line: Line;
    text: Text;
}>;
export default _default;
