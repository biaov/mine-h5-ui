/* eslint-disable no-unused-vars */
import { PublicProps } from "../types";

// 当前 vue props
export type Props = PublicProps<{
  visible: boolean;
  modal: boolean;
  position: string;
  closeable: boolean;
  radius: string;
}>;
