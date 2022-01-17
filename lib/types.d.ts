import type { App } from 'vue';
export declare type SFCWithInstall<T> = T & {
    install(app: App): void;
};
export declare type PublicProps<T, U = {}> = Readonly<T> & U;
