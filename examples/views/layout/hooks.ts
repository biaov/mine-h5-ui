import { ref, onMounted } from "vue";
import { ListItem, ForItem } from "./interfaces";
// canvas画图
export const useCanvas = () => {
  const canvas = ref<HTMLCanvasElement>(); // canvas对象
  const d = {
    z: 0, // 层级
    o: 0.8, // 不透明度
    c: "rgba(64,158,255,1)", // 颜色
    n: 99 // 数量
  };
  onMounted(() => {
    const canvasDom = canvas.value!;
    canvasDom.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    canvasDom.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const a = canvasDom.width;
    const c = canvasDom.height;
    let u: Array<ListItem | ForItem>;
    const r = canvasDom.getContext("2d") as CanvasRenderingContext2D;
    const xx = window.requestAnimationFrame;
    const w = Math.random;
    const y: ListItem = {
      x: 0,
      y: 0,
      max: 2e4
    };
    let startTime = 0;
    const s: ForItem[] = [];
    const ii = (time = 0) => {
      !startTime && (startTime = time);
      const diff = time - startTime;
      if (diff > 30) {
        startTime = 0;
        r.clearRect(0, 0, a, c);
        let n;
        let e;
        let t;
        let o;
        let m;
        let l;
        s.forEach((i, x) => {
          for (i.x += i.xa, i.y += i.ya, i.xa *= i.x > a || i.x < 0 ? -1 : 1, i.ya *= i.y > c || i.y < 0 ? -1 : 1, r.fillRect(i.x - 0.5, i.y - 0.5, 1, 1), e = x + 1; e < u.length; e++) {
            n = u[e];
            if (n.x !== null && n.y !== null) {
              o = i.x - n.x;
              m = i.y - n.y;
              l = o * o + m * m;
              if (l < n.max) {
                if (n === y && l >= n.max / 2) {
                  i.x -= 0.03 * o;
                  i.y -= 0.03 * m;
                }
                t = (n.max - l) / n.max;
                r.beginPath();
                r.lineWidth = t / 2;
                r.strokeStyle = d.c as string;
                r.moveTo(i.x, i.y);
                r.lineTo(n.x, n.y);
                r.stroke();
              }
            }
          }
        });
      }
      xx(ii);
    };
    canvasDom.style.cssText = `position:fixed;top:0;left:0;z-index:${d.z};opacity:${d.o}`;
    for (let f = 0; d.n > f; f++) {
      const h = w() * a;
      const g = w() * c;
      const v = 2 * w() - 1;
      const p = 2 * w() - 1;
      s.push({
        x: h,
        y: g,
        xa: v,
        ya: p,
        max: 6e3
      });
    }
    u = [...s, y];
    ii();
  });
  return { canvas };
};
