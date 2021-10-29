/* eslint-disable no-unused-vars */
import { PublicProps } from "../types";
import { ListItem } from "./interfaces";

// 当前 vue props
export type Props = PublicProps<{
  list: ListItem[];
  interval: number;
  height: string;
  itemHeight: number;
  distance: number;
  screen: number[];
  remain: number;
}>;
