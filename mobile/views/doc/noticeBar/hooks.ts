import { getCurrentInstance } from "vue";
import { EventMsg } from "./interfaces";

// 点击项
export const useHandlerClick = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties;
  // 事件提示语
  const eventMsg = Object.freeze<EventMsg>({
    preappend: "你点击了前面的图标",
    append: "你点击了后面的图标"
  });
  // 文本内容
  const listData = Object.freeze([
    {
      label: "基础用法",
      list: [
        "春有百花秋有月，夏有凉风冬有雪。若无闲事挂心头，便是人间好时节。",
        "岁月一点一滴的溜走，在不经意间，快的让我们都来不及在下一个路口挽留。也无法预测人生未知的镜头。",
        "用心聆听，深深呼吸，烟花雨，梨花月，寄一缕风的香魂，远离喧嚣。"
      ]
    },
    {
      label: "滚动方向",
      list: ["花间一壶酒，独酌无相亲。", "举杯邀明月，对影成三人。", "月既不解饮，影徒随我身。", "暂伴月将影，行乐须及春。", "我歌月徘徊，我舞影零乱。", "醒时同交欢，醉后各分散。"],
      scroll: "vertical"
    },
    {
      label: "自定义样式",
      list: "赵客缦胡缨，吴钩霜雪明。银鞍照白马，飒沓如流星。十步杀一人，千里不留行。事了拂衣去，深藏身与名。闲过信陵饮，脱剑膝前横。将炙啖朱亥，持觞劝侯嬴。三杯吐然诺，五岳倒为轻。眼花耳热后，意气素霓生。救赵挥金槌，邯郸先震惊。千秋二壮士，烜赫大梁城。纵死侠骨香，不惭世上英。谁能书阁下，白首太玄经。",
      preappendIcon: "loading_ico",
      preappendColor: "#fff",
      appendIcon: "in_zhengyan",
      appendColor: "#fff",
      height: 50,
      radius: 25,
      background: "linear-gradient(-45deg, rgb(75, 176, 255), rgb(97, 73, 246))",
      color: "#fff"
    }
  ]);
  // 当标签栏改变时
  const onClick = (type: string, index: number) => {
    // 提示语
    const msg = type === "notice" ? `你点击了第 ${index + 1} 个公告` : eventMsg[type];
    $MeToast(msg);
  };

  return { listData, onClick };
};
