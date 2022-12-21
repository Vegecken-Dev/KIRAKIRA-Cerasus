import { NuxtColorMode } from "./types";

function script(): void;
function script(autoCall: false): NuxtColorMode;
function script(autoCall = true) {
	const isSystemDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
	const lastColorMode_str = window.localStorage.getItem("nuxt-color-mode");
	const colorMode: NuxtColorMode = {
		theme: "system",
		palette: "pink",
	};
	try {
		const error = new TypeError("数据类型错误。");
		if (!lastColorMode_str) throw error;
		const lastColorMode = JSON.parse(lastColorMode_str) as Partial<NuxtColorMode>;
		if (Object.prototype.toString.call(lastColorMode) !== "[object Object]") throw error;
		type Keys = keyof NuxtColorMode;
		for (const key of Object.keys(colorMode) as Keys[])
			(colorMode as Record<Keys, string>)[key] = lastColorMode[key] || colorMode[key];
	} catch (error) { }
	let theme = colorMode.theme;
	if (theme === "system") theme = isSystemDark() ? "dark" : "light";
	document.documentElement.className = colorMode.palette;
	if (theme === "dark") document.documentElement.classList.add(theme);
	if (autoCall === true) window.localStorage.setItem("nuxt-color-mode", JSON.stringify(colorMode));
	else return colorMode;
}

export default script;