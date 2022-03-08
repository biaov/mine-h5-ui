import { LabelName } from '../MeTabItem/interfaces';
import { Props } from './types';
import { Emits } from './interfaces';
export declare const useInitSlots: (props: Props, emit: Emits) => {
    tabsDom: import("vue").Ref<HTMLDivElement | undefined>;
    tabList: import("vue").Ref<{
        label: string;
        name: string | number;
    }[]>;
    transX: import("vue").Ref<number>;
    duration: import("vue").Ref<number>;
    initTranslateX: () => void;
    curIndex: import("vue").ComputedRef<number>;
    onClick: ({ name }: LabelName) => void;
};
