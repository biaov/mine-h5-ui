export interface Emits {
    (event: 'on-end'): void;
    (event: 'on-progress', time: number): void;
}
