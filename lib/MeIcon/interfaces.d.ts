export interface Props {
    name: string;
    color?: string;
    size?: string;
}
export interface Emits {
    (event: 'on-click', e: MouseEvent): void;
}
