import {FA_CSS} from "../style-rules/fa";

export const faInclude = (container: HTMLElement | ShadowRoot) => {
    const existingCssLink = document.head.querySelector<HTMLLinkElement>('[href*="css/all.min.css"]');
    if (existingCssLink) {
        container.appendChild(existingCssLink.cloneNode());
    } else {
        const style = document.createElement('style');
        style.textContent = FA_CSS;
        container.appendChild(style);
    }
}
