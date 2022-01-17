export interface ListItem {
    [key: string]: any;
}
export interface Emits {
    (event: 'on-load-more'): void;
}
