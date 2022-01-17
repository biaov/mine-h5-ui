export declare const useHandMove: () => {
    hidden: import("vue").Ref<HTMLDivElement | undefined>;
    maxDistance: import("vue").Ref<number>;
    currentValue: import("vue").Ref<number>;
    isActive: import("vue").Ref<boolean>;
    onTouchstart: (e: TouchEvent) => void;
    onTouchmove: (e: TouchEvent) => void;
    onTouchend: (e: TouchEvent) => void;
    onMousedown: (e: MouseEvent) => void;
};
