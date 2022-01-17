import { PropType } from 'vue';
import { ListItem } from './interfaces';
declare const _default: import("vue").DefineComponent<{
    list: {
        type: PropType<ListItem[]>;
        default: () => {
            name: string;
            cities: {
                code: string;
                en: string;
                cn: string;
            }[];
        }[];
    };
    topHeight: {
        type: StringConstructor;
        default: string;
    };
}, {
    curLetter: import("vue").Ref<string>;
    listCont: import("vue").Ref<HTMLDivElement | undefined>;
    handleLi: (item: import("./interfaces").CityItem) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-click"[], "on-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    list?: unknown;
    topHeight?: unknown;
} & {
    list: ListItem[];
    topHeight: string;
} & {}> & {
    "onOn-click"?: ((...args: any[]) => any) | undefined;
}, {
    list: ListItem[];
    topHeight: string;
}>;
export default _default;
