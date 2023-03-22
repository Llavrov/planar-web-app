export const THEME = 'theme';

export function getUrlParams(param: string) {
    try {
        const url = new URL(window.location.href);

        return url.searchParams.get(param);
    } catch (e) {
        console.error(`getUrlParams - ${e}`);
    }
}
