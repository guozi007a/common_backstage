import { ReactElement } from "react";

export interface BreadItemType {
    title: string | ReactElement
}

export type TagProp = {
    path?: string,
    color?: string,
    text: string
}