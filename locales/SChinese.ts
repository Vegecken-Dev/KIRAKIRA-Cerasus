const SChinese = {
	welcome: "欢迎",
	home: "首页",
	anime: "动画",
	music: "音乐",
	otomad: "音MAD",
	content: "内容",
	search: "搜索",
	button: "按钮",
	buttonDisabled: "按钮被禁用",
	buttonClicked: "我被单击了 呜呜呜~",
	confetti: "五彩纸屑",
	send: "发送",
	showAlert: "显示警告框",
	toggleSwitch: "切换开关",
	on: "开",
	off: "关",
	onDisabled: "禁用 开",
	offDisabled: "禁用 关",
	animatedBackground: "动态背景",
	settings: "设置",
	light: "浅色主题",
	dark: "深色主题",
	system: "跟随系统",
	pink: "萌妹粉",
	sky: "天空蓝",
	blue: "智乃蓝",
	green: "千夜绿",
	orange: "心爱橙",
	purple: "理世紫",
	custom: "自定义",
	checkbox: "复选框",
	searchSettings: "搜索设置",
	appearance: "外观",
	theme: "主题",
	palette: "个性色",
	language: "语言",
	tag: "标签",
	all: "全部",
	video: "视频",
	images: "图片",
	logoHidden: "LOGO隐藏",
	logoHalf: "LOGO半显示",
	logoShow: "LOGO全显示",
	comments: "评论",
	uploadersLovinIt: "UP主爱啦",
	finish: "操作成功完成",
	youKnowTooMuch: "你知道的太多了。",
	myAccount: "我的账号",
	information: "个人资料",
	myLog: "我的记录",
	privacy: "隐私和安全",
	bindEmail: "绑定邮箱",
	changePassword: "修改密码",
	accountLinking: "关联社交平台",
	blocklist: "黑名单",
	player: "播放",
	danmaku: "弹幕",
	preference: "偏好",
	accessibility: "无障碍",
	about: "关于",
	technology: "科技",
	game: "游戏",
	synthetical: "综合",
	userSettings: "用户设置",
	appSettings: "应用设置",
} as const;

export default SChinese;
export type LocaleWithDefaultValue = typeof SChinese;
export type LocaleIdentifiers = Record<keyof typeof SChinese, string>;
