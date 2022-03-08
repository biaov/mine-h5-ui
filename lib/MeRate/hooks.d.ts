import { Props } from './types';
import { ListDataItem, Emits } from './interfaces';
export declare const useHandler: (props: Props, emit: Emits) => {
    listData: import("vue").Ref<{
        id: number;
        state: boolean;
    }[]>;
    onClick: ({ id, state }: ListDataItem) => void;
};
