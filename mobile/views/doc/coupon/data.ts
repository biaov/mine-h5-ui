export default [
  {
    label: '基础用法',
    width: '80%',
    height: '100px'
  },
  {
    label: '带边框',
    width: '80%',
    height: '100px',
    border: '1px dashed rgba(0,0,0,0.2)'
  },
  {
    label: '镂空圆的大小',
    width: '80%',
    height: '100px',
    circleSize: '26px'
  },
  {
    label: '镂空圆的横向位置',
    width: '80%',
    height: '100px',
    circleX: '50%'
  },
  {
    label: '渐变背景',
    width: '80%',
    height: '100px',
    background: 'linear-gradient(90deg, #FF8536, #FF435E)'
  },
  {
    label: '外层渐变背景',
    width: '80%',
    height: '100px',
    circleX: '80px',
    outWidth: `${globalThis.innerWidth - 30}px`,
    circleBg: 'linear-gradient(-45deg, #FF8536, #f56c6c)'
  }
]
