import { PublicProps } from '../types';
import { Option } from './interfaces';
export declare type OnOk = (arg?: string) => void;
export declare type OnOff = () => void;
export declare type HookFn = OnOk | OnOff;
export declare type Props = PublicProps<{
    tips: string;
    type: string;
    message: string;
    html: string;
    cancelButtonText: string;
    confirmButtonText: string;
    onOk: OnOk;
    onOff: OnOff;
}>;
export declare type CurOption = Option & {
    onAction?: (arg: string) => void;
};
export declare type MessageBoxFn = (option: Option) => Promise<string | undefined>;
