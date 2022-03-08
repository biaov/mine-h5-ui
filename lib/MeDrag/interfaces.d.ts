import { Ref } from 'vue';
export interface Rect {
    w: number;
    h: number;
    x: number;
    y: number;
    r: number;
}
export interface ListDataItem {
    rect: Rect;
}
export interface AngleToCursorItem {
    start: number;
    end: number;
    cursor: string;
}
export interface Emits {
    (event: 'on-change', list: ListDataItem[], type: string): void;
    (event: 'update:list', list: ListDataItem[]): void;
    (event: 'update:current', index: number): void;
}
export interface Point {
    x: number;
    y: number;
}
export interface Distance {
    distX: number;
    distY: number;
}
export interface Share {
    getCurItem: Ref<Rect>;
    onEmitChange: (type: string) => void;
    onUpdate: () => void;
}
export interface MoveShare extends Share {
    listData: Ref<ListDataItem[]>;
}
export interface ResizeShare extends Share {
    listData: Ref<ListDataItem[]>;
}
export interface RotateShare extends Share {
    getCenterPoint: () => Point;
}
export interface Option {
    startPoint: Point;
    centerPoint: Point;
    symmPoint: Point;
    curPoint: Point;
    rect: Rect;
}
export interface ResizeGroup {
    nw: (option: Option) => Rect;
    n: (option: Option) => Rect;
    ne: (option: Option) => Rect;
    e: (option: Option) => Rect;
    se: (option: Option) => Rect;
    s: (option: Option) => Rect;
    sw: (option: Option) => Rect;
    w: (option: Option) => Rect;
}
