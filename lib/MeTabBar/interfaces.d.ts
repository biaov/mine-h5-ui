export interface ListItem {
    text: string;
    state: boolean;
    icon?: string;
    dot?: string;
    badge?: string;
    img?: string;
    imgSelected?: string;
}
export interface Emits {
    (event: 'on-change', item: ListItem): void;
}
