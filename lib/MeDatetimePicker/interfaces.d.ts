export interface TypeIds {
    'year-month': number[];
    'month-day': number[];
    time: number[];
    datetime: number[];
    [key: string]: number[];
}
export interface ListDataItem {
    id: number;
    list: number | number[];
}
export interface Emits {
    (event: 'update:modelValue', str: string): void;
    (event: 'on-cancel'): void;
    (event: 'on-sure', arr: number[]): void;
}
