import { Props } from './types';
import { Emits } from './interfaces';
export declare const useHandler: (props: Props, emit: Emits) => {
    listData: import("vue").Ref<{
        id: number;
        value: string;
        state: boolean;
    }[]>;
    handleClick: (e: MouseEvent) => void;
};
