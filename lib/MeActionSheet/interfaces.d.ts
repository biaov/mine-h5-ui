export interface ListItem {
    id?: number | string;
    label: string;
    [key: string]: number | string | undefined;
}
export interface Emits {
    (event: 'update:visible', bool: boolean): void;
    (event: 'on-change', item: ListItem): void;
    (event: 'on-cancel', item: MouseEvent): void;
}
