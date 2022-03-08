import { PublicProps } from '../types';
import { Option } from './interfaces';
export declare type Props = PublicProps<{
    message: string | number;
    bgColor: string;
    icon: string;
    durction: number;
}>;
export declare type Options = string | number | Option;
