export interface Emits {
    (event: 'update:visible', bool: boolean): void;
    (event: 'on-cancel'): void;
}
