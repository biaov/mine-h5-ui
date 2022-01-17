import { Emits } from './interfaces';
export declare const useImgEvent: (emit: Emits) => {
    onClick: (e: MouseEvent) => void;
    onLoad: (e: Event) => void;
    onError: (e: Event) => void;
};
