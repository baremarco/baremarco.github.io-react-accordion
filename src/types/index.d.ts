import { SyntheticEvent } from "react";
export type TStatus = "on" | "off";

export interface IAccordionProps {
  id: string;
  title: string;
  subtitle: string;
  status: TStatus;
  expanded: boolean;
  onChange: (event: SyntheticEvent, isExpanded: boolean) => void;
  description?: string;
}

export interface INodeProps {
  id: string;
  title: string;
  subtitle: string;
  status: TStatus;
  description?: string;
}

export enum EStatus {
  on = "ONLINE",
  off = "OFFLINE"
}
