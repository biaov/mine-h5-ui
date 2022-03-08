import { Props } from './types';
import { AngleToCursorItem, Emits, Point, MoveShare, ResizeShare, RotateShare } from './interfaces';
export declare const useHandler: (props: Props, emit: Emits) => {
    listData: import("vue").Ref<{
        rect: {
            w: number;
            h: number;
            x: number;
            y: number;
            r: number;
        };
    }[]>;
    angleToCursor: readonly AngleToCursorItem[];
    getCursor: import("vue").ComputedRef<(i: number) => string>;
    onDelete: () => void;
    onClick: (index: number) => void;
    getCurItem: import("vue").ComputedRef<{
        w: number;
        h: number;
        x: number;
        y: number;
        r: number;
    }>;
    onEmitChange: (type: string) => void;
    onUpdate: () => void;
};
export declare const useMove: (props: Props, share: MoveShare) => {
    onTouchstart: (e: TouchEvent) => void;
    onTouchmove: (e: TouchEvent) => void;
    onMousedown: (e: MouseEvent) => void;
};
export declare const useResize: (props: Props, share: ResizeShare) => {
    dragRef: import("vue").Ref<HTMLDivElement | undefined>;
    onResizeTouchstart: (e: TouchEvent) => void;
    onResizeTouchmove: (e: TouchEvent, item: AngleToCursorItem) => void;
    onResizeMousedown: (e: MouseEvent, item: AngleToCursorItem) => void;
    getCenterPoint: () => Point;
};
export declare const useRotate: (props: Props, share: RotateShare) => {
    onRotateTouchmove: (e: TouchEvent) => void;
    onRotateMousedown: () => void;
};
