export interface ListItem {
    icon: string;
    color: string;
    value: string | number;
}
export interface Emits {
    (event: 'update:visible', bool: boolean): void;
    (event: 'on-change', e: ListItem): void;
    (event: 'on-cancel', e: MouseEvent): void;
}
