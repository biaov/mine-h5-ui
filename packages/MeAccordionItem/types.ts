/* eslint-disable no-unused-vars */
import { PublicProps } from "~/types";

// 当前 vue props
export type Props = PublicProps<{
  label: string;
  name: string | number;
  borderColor: string;
}>;