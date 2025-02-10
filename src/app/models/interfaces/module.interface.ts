import { Feature } from "./feature.interface";

export interface Module {
    module?: string;
    name?: string;
    routerLink?: string;
    icon?: string;
    show: boolean;
    features?: Feature[];
};