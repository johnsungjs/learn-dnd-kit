import { CSSProperties } from "react";

export interface HtmlValues {
  openingTag: string;
  closingTag: string;
  value: string;
  style: CSSProperties | undefined;
}

export interface DataDraggable {
  title: string;
  content: HtmlValues;
}
