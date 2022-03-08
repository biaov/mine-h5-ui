declare const _default: {
    Validator: {
        validPhone: RegExp;
        validPwd: RegExp;
        validEmail: RegExp;
        validIdcard: RegExp;
        validImgs: RegExp;
        validThousand: RegExp;
        validThousandFloat: RegExp;
    };
    Bind: (dom: EventTarget, event: string, fn: EventListenerOrEventListenerObject, flag?: boolean) => EventTarget;
    Unbind: (dom: EventTarget, event: string, fn: EventListenerOrEventListenerObject, flag?: boolean) => EventTarget;
    IsType: (type: string, value: any) => boolean;
    DeepCopyRA: (arg: any) => any;
    IsLeapyear: (num: number) => boolean;
    FormatTime: (arg?: string | number | Date) => import("./interfaces").FormatTimeBack;
    CountDown: (num: number, format?: string) => import("./interfaces").FormatData;
    Throttle: (fn: import("./types").DTCallback, time?: number) => import("./types").ThrottleBack;
    Debounce: (fn: import("./types").DTCallback, time?: number) => import("./types").DebounceBack;
    FormatThousand: (num: number) => string;
    Locked: (fn: import("./types").LockedCallback, time?: number) => import("./types").LockedBack;
    AddZero: (str: string, float1: number, float2: number) => string;
    Calculation: (num1: number, num2: number) => import("./interfaces").CalculationBack;
    GenerateRandom: () => string;
    Retarder: (time?: number) => Promise<boolean>;
};
export default _default;
