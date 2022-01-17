export interface Styles {
    borderColor: string;
    background: string;
    titleColor: string;
    leftColor: string;
    rightColor: string;
}
export interface Emits {
    (event: 'click-left', e: MouseEvent): void;
    (event: 'click-right', e: MouseEvent): void;
}
