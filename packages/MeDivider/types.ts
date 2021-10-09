/* eslint-disable no-unused-vars */
import { PublicProps } from "~/types";
import { Line, Text } from "./interfaces";

// 当前 vue props
export type Props = PublicProps<
  {
    list: string[];
    line: Line;
    text: Text;
  },
  {
    left?: number | undefined;
    right?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    origin?: number | undefined;
  }
>;
