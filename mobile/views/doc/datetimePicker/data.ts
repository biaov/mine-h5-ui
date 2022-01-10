export default [
  {
    id: 1,
    label: '基础用法',
    title: '单击选择年月日',
    type: 'data',
    value: '',
    visible: false
  },
  {
    id: 2,
    label: '选择年月',
    title: '单击选择年月',
    type: 'year-month',
    value: '',
    visible: false
  },
  {
    id: 3,
    label: '选择月日',
    title: '单击选择月日',
    type: 'month-day',
    value: '',
    visible: false
  },
  {
    id: 4,
    label: '选择时间',
    title: '单击选择时间',
    type: 'time',
    value: '',
    visible: false
  },
  {
    id: 5,
    label: '选择完整时间',
    title: '单击选择完整时间',
    type: 'datetime',
    value: '',
    visible: false
  },
  {
    id: 6,
    label: '自定义时间区间',
    title: '单击选择完整时间',
    value: 'datetime',
    visible: false,
    minDate: new Date('1990-08-08 08:08'),
    maxDate: new Date('2040-08-08 08:08')
  }
]
