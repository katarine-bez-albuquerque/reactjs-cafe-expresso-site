import { Ref } from "react";
import { ICafe } from "./cafe";

export interface INossoMenu {
    data: ICafe[];
    leftButton: () => void;
    rightButton: () => void;
    carousel: Ref<any>;
}