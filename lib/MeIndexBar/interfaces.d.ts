export interface CityItem {
    code: string;
    en: string;
    cn: string;
}
export interface ListItem {
    name: string;
    cities: CityItem[];
}
export interface Emits {
    (event: 'on-click', item: CityItem): void;
}
