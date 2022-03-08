import { PropType } from 'vue';
import { BeforeRead, BfterRead, BeforeDelete } from './types';
import { ListDataItem } from './interfaces';
declare const _default: import("vue").DefineComponent<{
    fileList: {
        type: PropType<ListDataItem[]>;
        default: () => never[];
    };
    preview: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxCount: {
        type: NumberConstructor;
        default: number;
    };
    maxSize: {
        type: NumberConstructor;
        default: number;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    deletable: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeRead: {
        type: PropType<BeforeRead>;
        default: () => () => true;
    };
    afterRead: {
        type: PropType<BfterRead>;
        default: () => () => true;
    };
    beforeDelete: {
        type: PropType<BeforeDelete>;
        default: () => () => true;
    };
}, {
    listData: import("vue").Ref<{
        id: number;
        url: string;
    }[]>;
    curNum: import("vue").Ref<number>;
    isPreview: import("vue").Ref<boolean>;
    onDelete: (e: Event, item: ListDataItem) => void;
    closePreview: () => void;
    onChange: (e: Event) => void;
    onPreview: ({ id }: ListDataItem) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:fileList" | "update:file-list" | "on-change")[], "update:fileList" | "update:file-list" | "on-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    fileList: {
        type: PropType<ListDataItem[]>;
        default: () => never[];
    };
    preview: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxCount: {
        type: NumberConstructor;
        default: number;
    };
    maxSize: {
        type: NumberConstructor;
        default: number;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    deletable: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeRead: {
        type: PropType<BeforeRead>;
        default: () => () => true;
    };
    afterRead: {
        type: PropType<BfterRead>;
        default: () => () => true;
    };
    beforeDelete: {
        type: PropType<BeforeDelete>;
        default: () => () => true;
    };
}>> & {
    "onUpdate:fileList"?: ((...args: any[]) => any) | undefined;
    "onUpdate:file-list"?: ((...args: any[]) => any) | undefined;
    "onOn-change"?: ((...args: any[]) => any) | undefined;
}, {
    fileList: ListDataItem[];
    preview: boolean;
    maxCount: number;
    maxSize: number;
    multiple: boolean;
    deletable: boolean;
    disabled: boolean;
    beforeRead: BeforeRead;
    afterRead: BfterRead;
    beforeDelete: BeforeDelete;
}>;
export default _default;
