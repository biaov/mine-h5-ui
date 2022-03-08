import { PublicProps } from '../types';
import { ListItem } from './interfaces';
export declare type Props = PublicProps<{
    list: ListItem[];
    interval: number;
    height: string;
    itemHeight: number;
    distance: number;
    screen: number[];
    remain: number;
}>;
