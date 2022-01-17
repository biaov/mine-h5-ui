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
    FormatTime: (arg?: string | number | Date) => {
        Y: string;
        M: string;
        D: string;
        w: string;
        h: string;
        m: string;
        s: string;
        date: string;
        time: string;
        datetime: string;
    };
    CountDown: (num: number, format?: string) => import("./interfaces").FormatData;
    Throttle: (fn: import("./types").DTCallback, time?: number) => (e: Event) => void;
    Debounce: (fn: import("./types").DTCallback, time?: number) => (e: Event) => void;
    FormatThousand: (num: number) => string;
    Locked: (fn: import("./types").LockedCallBack, time?: number) => (e?: Event | undefined) => void;
    AddZero: (str: string, float1: number, float2: number) => string;
    Calculation: (num1: number, num2: number) => {
        add: () => number;
        subtract: () => number;
        multiply: () => number;
        divide: () => number;
    };
    GenerateRandom: () => string;
    Retarder: (time?: number) => Promise<boolean>;
};
export default _default;
