export interface Params {
    cols: number;
    borderColor: string;
}
export interface GridContext {
    name: string;
    params: Params;
}
export interface Emits {
    (event: 'on-click', e: MouseEvent): void;
}
