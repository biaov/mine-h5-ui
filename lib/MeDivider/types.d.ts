import { PublicProps } from '../types';
import { Line, Text } from './interfaces';
export declare type Props = PublicProps<{
    list: string[];
    line: Line;
    text: Text;
}, {
    left?: number | undefined;
    right?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    origin?: number | undefined;
}>;
