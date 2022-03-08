export interface SkinStyleValue {
    bgc: string;
    textBgc: string;
    color: string;
}
export interface Emits {
    (event: 'update:visible', bool: boolean): void;
    (event: 'on-click', num: number): void;
    (event: 'on-delete', e: MouseEvent): void;
    (event: 'on-complate', e: MouseEvent): void;
}
