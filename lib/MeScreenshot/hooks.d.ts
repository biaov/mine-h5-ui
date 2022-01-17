import { Props } from './types';
import { Emits } from './interfaces';
export declare const useHandler: (props: Props, emit: Emits) => {
    screenshotRef: import("vue").Ref<HTMLDivElement | undefined>;
    onClick: (e: MouseEvent) => void;
};
