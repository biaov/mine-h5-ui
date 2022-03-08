import { PublicProps } from '../types';
import { ListDataItem } from './interfaces';
export declare type Props = PublicProps<{
    current: number;
    list: ListDataItem[];
    width: string;
    height: string;
    theme: string;
    themeText: string;
    angleRange: number;
}>;
export declare type CalcSizeName = 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w';
