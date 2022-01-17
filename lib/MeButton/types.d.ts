import { PublicProps } from '../types';
export declare type NativeType = 'button' | 'submit' | 'reset';
export declare type Props = PublicProps<{
    color: string;
    type: string;
    nativeType: NativeType;
    width: string;
    plain: boolean;
    disabled: boolean;
    icon: string;
}>;
