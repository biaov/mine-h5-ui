export interface FormatData {
    DD?: string;
    hh?: string;
    mm?: string;
    ss?: string;
    ms?: number;
}
export interface IsLocked {
    value?: boolean;
    [key: string]: boolean | undefined;
}
