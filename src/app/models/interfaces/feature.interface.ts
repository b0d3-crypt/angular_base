import { Children } from "./children.interface";

export interface Feature {
    name: string;
    icon: string;
    show: boolean;
    children?: Children[];
}