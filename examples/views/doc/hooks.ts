import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { PostMessage } from "@/utils/functions";
import { PostMessageReturn } from "@/utils/types";

// 改变路由
export const useChangeRouter = () => {
  const route = useRoute();
  let postMessage: PostMessageReturn; // 发送消息对象
  // frame跳转
  const navigateTo = (path: string) => {
    // console.log(path, "--path");
    postMessage.send(path);
  };
  onBeforeRouteUpdate(({ path }) => {
    navigateTo(path);
  });
  // 改变frame的router
  const changeFrameRouter = (frame: HTMLIFrameElement) => {
    postMessage = PostMessage(frame.contentWindow as Window);
    navigateTo(route.path);
  };
  return { changeFrameRouter };
};
