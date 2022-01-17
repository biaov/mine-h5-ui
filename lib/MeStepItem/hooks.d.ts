import { Props } from './types';
export declare const useHandler: (props: Props) => {
    isActive: import("vue").Ref<boolean>;
    parentProps: import("vue").Ref<Readonly<{
        active: (string | number)[];
        direction: string;
        type: string;
        color: string;
        activeColor: string;
        icon: string;
        activeIcon: string;
    }>>;
};
