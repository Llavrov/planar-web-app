import { getUrlParams, THEME } from "@/utils/getUrlParams";
export const THEME_LIGHT = "light";

export function getTheme() {
  const theme = getUrlParams(THEME) ?? THEME_LIGHT;
}
