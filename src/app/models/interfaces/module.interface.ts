import { Children } from "./children.interface";

export interface Module {
    name: string;
    routerLink?: string;
    icon?: string;
    show: boolean;
    features?: Children[];
};