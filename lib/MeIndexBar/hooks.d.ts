import { CityItem, Emits } from './interfaces';
export declare const useScroll: () => {
    curLetter: import("vue").Ref<string>;
    listCont: import("vue").Ref<HTMLDivElement | undefined>;
};
export declare const useBtns: (emit: Emits) => {
    handleLi: (item: CityItem) => void;
};
