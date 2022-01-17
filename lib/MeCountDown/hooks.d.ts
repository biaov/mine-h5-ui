import { Props } from './types';
import { Emits } from './interfaces';
export declare const useCountdown: (props: Props, emit: Emits) => {
    formatAfter: import("vue").Ref<{
        DD?: string | undefined;
        hh?: string | undefined;
        mm?: string | undefined;
        ss?: string | undefined;
        ms?: number | undefined;
    }>;
};
