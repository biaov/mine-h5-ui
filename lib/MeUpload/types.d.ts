import { PublicProps } from '../types';
import { ListDataItem } from './interfaces';
export declare type BeforeRead = (item: File[]) => boolean;
export declare type BfterRead = (arr: File[]) => boolean;
export declare type BeforeDelete = (item: ListDataItem) => boolean;
export declare type Props = PublicProps<{
    fileList: ListDataItem[];
    preview: boolean;
    maxCount: number;
    maxSize: number;
    multiple: boolean;
    deletable: boolean;
    disabled: boolean;
    beforeRead: BeforeRead;
    afterRead: BfterRead;
    beforeDelete: BeforeDelete;
}>;
