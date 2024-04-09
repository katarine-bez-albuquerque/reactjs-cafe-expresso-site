import { ReactNode } from "react";

export interface IButton {
    name?: string;
    classname?: string;
    onclick?: () => void;
    children?: ReactNode;
}