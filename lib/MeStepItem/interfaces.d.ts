import { Ref } from 'vue';
import { Props } from '../MeStep/types';
export interface StepContext {
    name: string;
    parentProps: Ref<Props>;
}
