// 默认国家数据
const CountryData = [
  {
    name: "A",
    cities: [
      { code: "AR", en: "Argentina", cn: "阿根廷" },
      { code: "AD", en: "Andorra", cn: "安道尔" },
      { code: "AE", en: "United Arab Emirates", cn: "阿联酋" },
      { code: "AF", en: "Afghanistan", cn: "阿富汗" },
      { code: "AG", en: "Antigua & Barbuda", cn: "安提瓜和巴布达" },
      { code: "AI", en: "Anguilla", cn: "安圭拉" },
      { code: "AL", en: "Albania", cn: "阿尔巴尼亚" },
      { code: "AM", en: "Armenia", cn: "亚美尼亚" },
      { code: "AO", en: "Angola", cn: "安哥拉" },
      { code: "AQ", en: "Antarctica", cn: "南极洲" },
      { code: "AS", en: "American Samoa", cn: "美属萨摩亚" },
      { code: "AT", en: "Austria", cn: "奥地利" },
      { code: "AU", en: "Australia", cn: "澳大利亚" },
      { code: "AW", en: "Aruba", cn: "阿鲁巴" },
      { code: "AX", en: "Aland Island", cn: "奥兰群岛" },
      { code: "AZ", en: "Azerbaijan", cn: "阿塞拜疆" }
    ]
  },
  {
    name: "B",
    cities: [
      { code: "BA", en: "Bosnia & Herzegovina", cn: "波黑" },
      { code: "BB", en: "Barbados", cn: "巴巴多斯" },
      { code: "BD", en: "Bangladesh", cn: "孟加拉" },
      { code: "BE", en: "Belgium", cn: "比利时" },
      { code: "BF", en: "Burkina", cn: "布基纳法索" },
      { code: "BG", en: "Bulgaria", cn: "保加利亚" },
      { code: "BH", en: "Bahrain", cn: "巴林" },
      { code: "BI", en: "Burundi", cn: "布隆迪" },
      { code: "BJ", en: "Benin", cn: "贝宁" },
      { code: "BL", en: "Saint Barthélemy", cn: "圣巴泰勒米岛" },
      { code: "BM", en: "Bermuda", cn: "百慕大" },
      { code: "BN", en: "Brunei", cn: "文莱" },
      { code: "BO", en: "Bolivia", cn: "玻利维亚" },
      { code: "BQ", en: "Caribbean Netherlands", cn: "荷兰加勒比区" },
      { code: "BR", en: "Brazil", cn: "巴西" },
      { code: "BS", en: "The Bahamas", cn: "巴哈马" },
      { code: "BT", en: "Bhutan", cn: "不丹" },
      { code: "BV", en: "Bouvet Island", cn: "布韦岛" },
      { code: "BW", en: "Botswana", cn: "博茨瓦纳" },
      { code: "BY", en: "Belarus", cn: "白俄罗斯" },
      { code: "BZ", en: "Belize", cn: "伯利兹" }
    ]
  },
  {
    name: "C",
    cities: [
      { code: "CA", en: "Canada", cn: "加拿大" },
      { code: "CC", en: "Cocos (Keeling) Islands", cn: "科科斯群岛" },
      { code: "CD", en: "Democratic Republic of the Congo", cn: "刚果（金）" },
      { code: "CF", en: "Central African Republic", cn: "中非" },
      { code: "CG", en: "Republic of the Congo", cn: "刚果（布）" },
      { code: "CH", en: "Switzerland", cn: "瑞士" },
      { code: "CI", en: "Cote d'Ivoire", cn: "科特迪瓦" },
      { code: "CK", en: "Cook Islands", cn: "库克群岛" },
      { code: "CL", en: "Chile", cn: "智利" },
      { code: "CM", en: "Cameroon", cn: "喀麦隆" },
      { code: "CN", en: "China", cn: "中国" },
      { code: "CO", en: "Colombia", cn: "哥伦比亚" },
      { code: "CR", en: "Costa Rica", cn: "哥斯达黎加" },
      { code: "CU", en: "Cuba", cn: "古巴" },
      { code: "CV", en: "Cape Verde", cn: "佛得角" },
      { code: "CW", en: "Curacao", cn: "库拉索" },
      { code: "CX", en: "Christmas Island", cn: "圣诞岛" },
      { code: "CY", en: "Cyprus", cn: "塞浦路斯" },
      { code: "CZ", en: "Czech Republic", cn: "捷克" }
    ]
  },
  {
    name: "D",
    cities: [
      { code: "DE", en: "Germany", cn: "德国" },
      { code: "DJ", en: "Djibouti", cn: "吉布提" },
      { code: "DK", en: "Denmark", cn: "丹麦" },
      { code: "DM", en: "Dominica", cn: "多米尼克" },
      { code: "DO", en: "Dominican Republic", cn: "多米尼加" },
      { code: "DZ", en: "Algeria", cn: "阿尔及利亚" }
    ]
  },
  {
    name: "E",
    cities: [
      { code: "EC", en: "Ecuador", cn: "厄瓜多尔" },
      { code: "EE", en: "Estonia", cn: "爱沙尼亚" },
      { code: "EG", en: "Egypt", cn: "埃及" },
      { code: "EH", en: "Western Sahara", cn: "西撒哈拉" },
      { code: "ER", en: "Eritrea", cn: "厄立特里亚" },
      { code: "ES", en: "Spain", cn: "西班牙" },
      { code: "ET", en: "Ethiopia", cn: "埃塞俄比亚" }
    ]
  },
  {
    name: "F",
    cities: [
      { code: "FI", en: "Finland", cn: "芬兰" },
      { code: "FJ", en: "Fiji", cn: "斐济群岛" },
      { code: "FK", en: "Falkland Islands", cn: "马尔维纳斯群岛（福克兰）" },
      { code: "FM", en: "Federated States of Micronesia", cn: "密克罗尼西亚联邦" },
      { code: "FO", en: "Faroe Islands", cn: "法罗群岛" },
      { code: "FR", en: "France", cn: "法国 法国" }
    ]
  },
  {
    name: "G",
    cities: [
      { code: "GA", en: "Gabon", cn: "加蓬" },
      { code: "GB", en: "Great Britain (United Kingdom; England)", cn: "英国" },
      { code: "GD", en: "Grenada", cn: "格林纳达" },
      { code: "GE", en: "Georgia", cn: "格鲁吉亚" },
      { code: "GF", en: "French Guiana", cn: "法属圭亚那" },
      { code: "GG", en: "Guernsey", cn: "根西岛" },
      { code: "GH", en: "Ghana", cn: "加纳" },
      { code: "GI", en: "Gibraltar", cn: "直布罗陀" },
      { code: "GL", en: "Greenland", cn: "格陵兰" },
      { code: "GM", en: "Gambia", cn: "冈比亚" },
      { code: "GN", en: "Guinea", cn: "几内亚" },
      { code: "GP", en: "Guadeloupe", cn: "瓜德罗普" },
      { code: "GQ", en: "Equatorial Guinea", cn: "赤道几内亚" },
      { code: "GR", en: "Greece", cn: "希腊" },
      { code: "GS", en: "South Georgia and the South Sandwich Islands", cn: "南乔治亚岛和南桑威奇群岛" },
      { code: "GT", en: "Guatemala", cn: "危地马拉" },
      { code: "GU", en: "Guam", cn: "关岛" },
      { code: "GW", en: "Guinea-Bissau", cn: "几内亚比绍" },
      { code: "GY", en: "Guyana", cn: "圭亚那" }
    ]
  },
  {
    name: "H",
    cities: [
      { code: "HK", en: "Hong Kong", cn: "香港" },
      { code: "HM", en: "Heard Island and McDonald Islands", cn: "赫德岛和麦克唐纳群岛" },
      { code: "HN", en: "Honduras", cn: "洪都拉斯" },
      { code: "HR", en: "Croatia", cn: "克罗地亚" },
      { code: "HT", en: "Haiti", cn: "海地" },
      { code: "HU", en: "Hungary", cn: "匈牙利" }
    ]
  },
  {
    name: "I",
    cities: [
      { code: "ID", en: "Indonesia", cn: "印尼" },
      { code: "IE", en: "Ireland", cn: "爱尔兰" },
      { code: "IL", en: "Israel", cn: "以色列" },
      { code: "IM", en: "Isle of Man", cn: "马恩岛" },
      { code: "IN", en: "India", cn: "印度" },
      { code: "IO", en: "British Indian Ocean Territory", cn: "英属印度洋领地" },
      { code: "IQ", en: "Iraq", cn: "伊拉克" },
      { code: "IR", en: "Iran", cn: "伊朗" },
      { code: "IS", en: "Iceland", cn: "冰岛" },
      { code: "IT", en: "Italy", cn: "意大利" }
    ]
  },
  {
    name: "J",
    cities: [
      { code: "JE", en: "Jersey", cn: "泽西岛" },
      { code: "JM", en: "Jamaica", cn: "牙买加" },
      { code: "JO", en: "Jordan", cn: "约旦" },
      { code: "JP", en: "Japan", cn: "日本" }
    ]
  },
  {
    name: "K",
    cities: [
      { code: "KE", en: "Kenya", cn: "肯尼亚" },
      { code: "KG", en: "Kyrgyzstan", cn: "吉尔吉斯斯坦" },
      { code: "KH", en: "Cambodia", cn: "柬埔寨" },
      { code: "KI", en: "Kiribati", cn: "基里巴斯" },
      { code: "KM", en: "The Comoros", cn: "科摩罗" },
      { code: "KN", en: "St. Kitts & Nevis", cn: "圣基茨和尼维斯" },
      { code: "KP", en: "North Korea", cn: "朝鲜" },
      { code: "KR", en: "South Korea", cn: "韩国" },
      { code: "KW", en: "Kuwait", cn: "科威特" },
      { code: "KY", en: "Cayman Islands", cn: "开曼群岛" },
      { code: "KZ", en: "Kazakhstan", cn: "哈萨克斯坦" }
    ]
  },
  {
    name: "L",
    cities: [
      { code: "LA", en: "Laos", cn: "老挝" },
      { code: "LB", en: "Lebanon", cn: "黎巴嫩" },
      { code: "LC", en: "St. Lucia", cn: "圣卢西亚" },
      { code: "LI", en: "Liechtenstein", cn: "列支敦士登" },
      { code: "LK", en: "Sri Lanka", cn: "斯里兰卡" },
      { code: "LR", en: "Liberia", cn: "利比里亚" },
      { code: "LS", en: "Lesotho", cn: "莱索托" },
      { code: "LT", en: "Lithuania", cn: "立陶宛" },
      { code: "LU", en: "Luxembourg", cn: "卢森堡" },
      { code: "LV", en: "Latvia", cn: "拉脱维亚" },
      { code: "LY", en: "Libya", cn: "利比亚" }
    ]
  },
  {
    name: "M",
    cities: [
      { code: "MO", en: "Macao", cn: "澳门" },
      { code: "MA", en: "Morocco", cn: "摩洛哥" },
      { code: "MC", en: "Monaco", cn: "摩纳哥" },
      { code: "MD", en: "Moldova", cn: "摩尔多瓦" },
      { code: "ME", en: "Montenegro", cn: "黑山" },
      { code: "MF", en: "Saint Martin (France)", cn: "法属圣马丁" },
      { code: "MG", en: "Madagascar", cn: "马达加斯加" },
      { code: "MH", en: "Marshall islands", cn: "马绍尔群岛" },
      { code: "MK", en: "Republic of Macedonia (FYROM)", cn: "马其顿" },
      { code: "ML", en: "Mali", cn: "马里" },
      { code: "MM", en: "Myanmar (Burma)", cn: "缅甸" },
      { code: "MN", en: "Mongolia", cn: "蒙古国" },
      { code: "MP", en: "Northern Mariana Islands", cn: "北马里亚纳群岛" },
      { code: "MQ", en: "Martinique", cn: "马提尼克" },
      { code: "MR", en: "Mauritania", cn: "毛里塔尼亚" },
      { code: "MS", en: "Montserrat", cn: "蒙塞拉特岛" },
      { code: "MT", en: "Malta", cn: "马耳他" },
      { code: "MU", en: "Mauritius", cn: "毛里求斯" },
      { code: "MV", en: "Maldives", cn: "马尔代夫" },
      { code: "MW", en: "Malawi", cn: "马拉维" },
      { code: "MX", en: "Mexico", cn: "墨西哥" },
      { code: "MY", en: "Malaysia", cn: "马来西亚" },
      { code: "MZ", en: "Mozambique", cn: "莫桑比克" }
    ]
  },
  {
    name: "N",
    cities: [
      { code: "NA", en: "Namibia", cn: "纳米比亚" },
      { code: "NC", en: "New Caledonia", cn: "新喀里多尼亚" },
      { code: "NE", en: "Niger", cn: "尼日尔" },
      { code: "NF", en: "Norfolk Island", cn: "诺福克岛" },
      { code: "NG", en: "Nigeria", cn: "尼日利亚" },
      { code: "NI", en: "Nicaragua", cn: "尼加拉瓜" },
      { code: "NL", en: "Netherlands", cn: "荷兰" },
      { code: "NO", en: "Norway", cn: "挪威" },
      { code: "NP", en: "Nepal", cn: "尼泊尔" },
      { code: "NR", en: "Nauru", cn: "瑙鲁" },
      { code: "NU", en: "Niue", cn: "纽埃" },
      { code: "NZ", en: "New Zealand", cn: "新西兰" }
    ]
  },
  {
    name: "O",
    cities: [{ code: "OM", en: "Oman", cn: "阿曼" }]
  },
  {
    name: "P",
    cities: [
      { code: "PA", en: "Panama", cn: "巴拿马" },
      { code: "PE", en: "Peru", cn: "秘鲁" },
      { code: "PF", en: "French polynesia", cn: "法属波利尼西亚" },
      { code: "PG", en: "Papua New Guinea", cn: "巴布亚新几内亚" },
      { code: "PH", en: "The Philippines", cn: "菲律宾" },
      { code: "PK", en: "Pakistan", cn: "巴基斯坦" },
      { code: "PL", en: "Poland", cn: "波兰" },
      { code: "PM", en: "Saint-Pierre and Miquelon", cn: "圣皮埃尔和密克隆" },
      { code: "PN", en: "Pitcairn Islands", cn: "皮特凯恩群岛" },
      { code: "PR", en: "Puerto Rico", cn: "波多黎各" },
      { code: "PS", en: "Palestinian territories", cn: "巴勒斯坦" },
      { code: "PT", en: "Portugal", cn: "葡萄牙" },
      { code: "PW", en: "Palau", cn: "帕劳" },
      { code: "PY", en: "Paraguay", cn: "巴拉圭" }
    ]
  },
  {
    name: "Q",
    cities: [{ code: "QA", en: "Qatar", cn: "卡塔尔" }]
  },
  {
    name: "R",
    cities: [
      { code: "RE", en: "Réunion", cn: "留尼汪" },
      { code: "RO", en: "Romania", cn: "罗马尼亚" },
      { code: "RS", en: "Serbia", cn: "塞尔维亚" },
      { code: "RU", en: "Russian Federation", cn: "俄罗斯" },
      { code: "RW", en: "Rwanda", cn: "卢旺达" }
    ]
  },
  {
    name: "S",
    cities: [
      { code: "SA", en: "Saudi Arabia", cn: "沙特阿拉伯" },
      { code: "SB", en: "Solomon Islands", cn: "所罗门群岛" },
      { code: "SC", en: "Seychelles", cn: "塞舌尔" },
      { code: "SD", en: "Sudan", cn: "苏丹" },
      { code: "SE", en: "Sweden", cn: "瑞典" },
      { code: "SG", en: "Singapore", cn: "新加坡" },
      { code: "SH", en: "St. Helena & Dependencies", cn: "圣赫勒拿" },
      { code: "SI", en: "Slovenia", cn: "斯洛文尼亚" },
      { code: "SJ", en: "Svalbard and Jan Mayen", cn: "斯瓦尔巴群岛和扬马延岛" },
      { code: "SK", en: "Slovakia", cn: "斯洛伐克" },
      { code: "SL", en: "Sierra Leone", cn: "塞拉利昂" },
      { code: "SM", en: "San Marino", cn: "圣马力诺" },
      { code: "SN", en: "Senegal", cn: "塞内加尔" },
      { code: "SO", en: "Somalia", cn: "索马里" },
      { code: "SR", en: "Suriname", cn: "苏里南" },
      { code: "SS", en: "South Sudan", cn: "南苏丹" },
      { code: "ST", en: "Sao Tome & Principe", cn: "圣多美和普林西比" },
      { code: "SV", en: "El Salvador", cn: "萨尔瓦多" },
      { code: "SX", en: "Sint Maarten", cn: "荷属圣马丁" },
      { code: "SY", en: "Syria", cn: "叙利亚" },
      { code: "SZ", en: "Swaziland", cn: "斯威士兰" }
    ]
  },
  {
    name: "T",
    cities: [
      { code: "TW", en: "Taiwan", cn: "台湾" },
      { code: "TC", en: "Turks & Caicos Islands", cn: "特克斯和凯科斯群岛" },
      { code: "TD", en: "Chad", cn: "乍得" },
      { code: "TF", en: "French Southern Territories", cn: "法属南部领地" },
      { code: "TG", en: "Togo", cn: "多哥" },
      { code: "TH", en: "Thailand", cn: "泰国" },
      { code: "TJ", en: "Tajikistan", cn: "塔吉克斯坦" },
      { code: "TK", en: "Tokelau", cn: "托克劳" },
      { code: "TL", en: "Timor-Leste (East Timor)", cn: "东帝汶" },
      { code: "TM", en: "Turkmenistan", cn: "土库曼斯坦" },
      { code: "TN", en: "Tunisia", cn: "突尼斯" },
      { code: "TO", en: "Tonga", cn: "汤加" },
      { code: "TR", en: "Turkey", cn: "土耳其" },
      { code: "TT", en: "Trinidad & Tobago", cn: "特立尼达和多巴哥" },
      { code: "TV", en: "Tuvalu", cn: "图瓦卢" },
      { code: "TZ", en: "Tanzania", cn: "坦桑尼亚" }
    ]
  },
  {
    name: "U",
    cities: [
      { code: "US", en: "United States of America (USA)", cn: "美国" },
      { code: "UA", en: "Ukraine", cn: "乌克兰" },
      { code: "UG", en: "Uganda", cn: "乌干达" },
      { code: "UM", en: "United States Minor Outlying Islands", cn: "美国本土外小岛屿" },
      { code: "UY", en: "Uruguay", cn: "乌拉圭" },
      { code: "UZ", en: "Uzbekistan", cn: "乌兹别克斯坦" }
    ]
  },
  {
    name: "V",
    cities: [
      { code: "VA", en: "Vatican City (The Holy See)", cn: "梵蒂冈" },
      { code: "VC", en: "St. Vincent & the Grenadines", cn: "圣文森特和格林纳丁斯" },
      { code: "VE", en: "Venezuela", cn: "委内瑞拉" },
      { code: "VG", en: "British Virgin Islands", cn: "英属维尔京群岛" },
      { code: "VI", en: "United States Virgin Islands", cn: "美属维尔京群岛" },
      { code: "VN", en: "Vietnam", cn: "越南" },
      { code: "VU", en: "Vanuatu", cn: "瓦努阿图" }
    ]
  },
  {
    name: "W",
    cities: [
      { code: "WF", en: "Wallis and Futuna", cn: "瓦利斯和富图纳" },
      { code: "WS", en: "Samoa", cn: "萨摩亚" }
    ]
  },
  {
    name: "X",
    cities: []
  },
  {
    name: "Y",
    cities: [
      { code: "YE", en: "Yemen", cn: "也门" },
      { code: "YT", en: "Mayotte", cn: "马约特" }
    ]
  },
  {
    name: "Z",
    cities: [
      { code: "ZA", en: "South Africa", cn: "南非" },
      { code: "ZM", en: "Zambia", cn: "赞比亚" },
      { code: "ZW", en: "Zimbabwe", cn: "津巴布韦" }
    ]
  }
];
export default CountryData;
