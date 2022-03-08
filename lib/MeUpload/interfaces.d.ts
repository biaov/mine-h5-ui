export declare type ListDataItem = {
    id: number;
    url: string;
};
export interface Emits {
    (event: 'update:fileList', list: ListDataItem[]): void;
    (event: 'update:file-list', list: ListDataItem[]): void;
    (event: 'on-change', list: ListDataItem[]): void;
}
