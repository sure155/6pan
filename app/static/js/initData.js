const sites = [
  {
    id: 1,
    key: 'okzy',
    name: 'OK 资源网',
    api: 'http://cj.okzy.tv/inc/api.php',
    download: 'http://cj.okzy.tv/inc/apidown.php',
    isActive: 1,
    group: '默认'
  },
  {
    id: 2,
    key: 'bdzy',
    name: '百度云资源',
    api: 'https://cj.apibdzy.com/inc/api.php',
    download: 'https://cj.apibdzy.com/inc/apidown.php',
    isActive: 1,
    group: '默认'
  },
  {
    id: 3,
    key: 'doubanzy',
    name: '豆瓣电影资源',
    api: 'http://v.1988cj.com/inc/api.php',
    download: 'http://v.1988cj.com/inc/apidown.php',
    isActive: 1,
    group: '默认'
  },
  {
    id: 4,
    key: '135zy',
    name: '135 资源网',
    api: 'http://cj.zycjw1.com/inc/api.php',
    download: 'http://cj.zycjw1.com/inc/apidown.php',
    isActive: 1,
    group: '默认'
  },
  {
    id: 5,
    key: 'kuyunzy',
    name: '酷云资源',
    api: 'http://caiji.kuyun98.com/inc/ldg_api.php',
    download: 'http://caiji.kuyun98.com/inc/apidown.php',
    isActive: 1,
    group: '默认'
  },
  {
    id: 6,
    key: 'zuidazy',
    name: '最大资源网',
    api: 'http://www.zdziyuan.com/inc/api.php',
    download: 'http://www.zdziyuan.com/inc/apidown.php',
    isActive: 1,
    group: '默认'
  },
  {
    id: 7,
    key: 'subo988',
    name: '速播资源站',
    api: 'https://www.subo988.com/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 8,
    key: '209zy',
    name: '209 资源',
    api: 'http://cj.1156zy.com/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 9,
    key: 'zuixinzy',
    name: '最新资源',
    api: 'http://api.zuixinapi.com/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 10,
    key: 'kubozy',
    name: '酷播资源',
    api: 'http://api.kbzyapi.com/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 11,
    key: 'yongjiuzy',
    name: '永久资源',
    api: 'http://cj.yongjiuzyw.com/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 12,
    key: '123ku',
    name: '123 资源',
    api: 'http://cj.123ku2.com:12315/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 13,
    key: '88zyw',
    name: '88 影视资源站',
    api: 'http://www.88zyw.net/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 14,
    key: 'wolongzy',
    name: '卧龙资源',
    api: 'http://cj.wlzy.tv/inc/api_mac.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 15,
    key: 'mahuazy',
    name: '麻花资源',
    api: 'https://www.mhapi123.com/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 16,
    key: 'kkzy',
    name: '快快资源',
    api: 'https://api.kkzy.tv/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 17,
    key: '158zy',
    name: '壹伍捌资源网',
    api: 'http://cj.158zyz.net:158/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 18,
    key: 'rrzy',
    name: '人人资源',
    api: 'https://www.rrzyw.cc/api.php/provide/vod/from/rrm3u8/at/xml/',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 19,
    key: 'mokazy',
    name: '魔卡资源网',
    api: 'https://cj.heiyap.com/api.php/provide/vod/at/xml/',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 20,
    key: 'kyzy',
    name: '快影资源站',
    api: 'https://www.kyzy.tv/api.php/kyyun/vod/at/xml/',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 21,
    key: 'solezy',
    name: '搜乐资源网',
    api: 'https://www.caijizy.vip/api.php/provide/vod/at/xml/',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 22,
    key: 'bbkdj',
    name: '步步高顶尖资源网',
    api: 'http://api.bbkdj.com/api',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 23,
    key: '1886zy',
    name: '1886 资源',
    api: 'http://cj.1886zy.co/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 24,
    key: 'mbo',
    name: '秒播资源',
    api: 'http://caiji.mb77.vip/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 25,
    key: '605zy',
    name: '605资源',
    api: 'http://www.605zy.net/inc/seacmsapi.php',
    download: '',
    isActive: 1,
    group: '默认'
  }
]
