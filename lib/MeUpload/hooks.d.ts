import { Props } from './types';
import { ListDataItem, Emits } from './interfaces';
export declare const useHandler: (props: Props, emit: Emits) => {
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
};
