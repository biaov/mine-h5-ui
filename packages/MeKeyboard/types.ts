/* eslint-disable no-unused-vars */
import { PublicProps } from "~/types";
import { SkinStyleValue } from "./interfaces";

// 当前 vue props
export type Props = PublicProps<{
  visible: boolean;
  skinType: string;
  skinStyle: SkinStyleValue;
  isPadding: boolean;
}>;
