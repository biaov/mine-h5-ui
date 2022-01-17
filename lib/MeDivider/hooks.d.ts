import { Props } from './types';
export declare const useHandler: (props: Props) => {
    fieldsetList: import("vue").Ref<{
        text: string;
        deg: number;
    }[]>;
    curLine: import("vue").Ref<{
        radius?: number | undefined;
        color: string;
        size?: number | undefined;
    }>;
};
