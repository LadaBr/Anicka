import {FORM_BUTTON_HOVER_DOWN, FORM_BUTTON_HOVER_RIGHT, FORM_SOFTEN_STYLES} from "./style-rules/form-styles";
import {cardHover, cardShadow, cardsSameHeight, CardStyles, cardStyles} from "./style-rules/card-styles";
import {zoomImageStyles} from "./style-rules/zoom-image-styles";
import {hoverDownButtonsStyles, hoverRightButtonsStyles} from "./style-rules/hover-down-buttons-styles";
import {NAV_FULL_WIDTH, NAV_STICKY} from "./style-rules/nav-styles";
import {GALLERY_NO_GAP} from "./style-rules/gallery-styles";

declare global {
    const config: AnickaConfig | undefined;
}

interface BorderConfig {
    color?: string;
    width?: string;
    radius?: string;
}

interface ButtonConfig {
    border?: BorderConfig;
    background?: string;
    color?: string;
    hover?: {
        background?: string;
        color?: string;
        borderColor?: string;
        down?: boolean;
        right?: boolean;
    }
}

interface CardConfig {
    shadow?: boolean;
    hover?: boolean;
    styles?: CardStyles;
    sameHeight?: number[];
}

interface HConfig {
    color?: string;
    fontSize?: string;
    fontSizeTablet?: string;
    fontSizeDesktop?: string;
}

export interface AnickaConfig {
    font?: string;
    navigation?: {
        colors?: {
            background?: string;
            menuIcon?: string;
            link?: string;
        };
        font?: string;
        noBorder?: boolean;
        fullWidth?: boolean;
        sticky?: boolean;
    };
    buttons?: {
        button1?: ButtonConfig;
        button2?: ButtonConfig;
    };
    link?: {
        color?: string;
        decoration?: string;
    };
    footer?: {
        bgColor?: string;
        color?: string;
    };
    contactPagelet?: {
        color?: string;
    };
    form?: {
        button?: ButtonConfig;
        inputs?: ButtonConfig;
        label?: {
            color?: string;
            fontSize?: string;
        };
        soften?: boolean;
        gdpr?: string;
    },
    card?: CardConfig;
    cards?: Record<string, CardConfig>;
    li: {
        content?: string;
        color?: string;
    };
    zoomImage?: string[];
    gallery?: {
        noGap?: boolean;
    };
    h1?: HConfig;
    h2?: HConfig;
    h3?: HConfig;
}

export interface BootstrapConfig {
    components: typeof HTMLElement[];
    styleRules?: string[];
    importedRules?: string[];
}



export const bootstrap = (config: BootstrapConfig, document: Document = globalThis.document) => {
    const styleElement = document.createElement('style');
    // @ts-ignore
    const anickaConfig: AnickaConfig = globalThis.config || {};
    const configImportedRules = config.importedRules || [];
    const configStyleRules = config.styleRules || [];
    const configStyles: string[] = [];
    const configVariables: string[] = [];
    if (anickaConfig?.font) {
        configVariables.push(`--font-family: ${anickaConfig.font};`);
    }
    if (anickaConfig?.navigation?.font) {
        configVariables.push(`--nav-font-family: ${anickaConfig.navigation.font};`);
    }
    if (anickaConfig?.navigation?.noBorder) {
        configVariables.push(`--nav-border: 0;`);
    }
    if (anickaConfig?.navigation?.fullWidth) {
        configStyleRules.push(NAV_FULL_WIDTH);
    }
    if (anickaConfig?.navigation?.sticky) {
        configStyleRules.push(NAV_STICKY);
    }
    const configNavColors = anickaConfig?.navigation?.colors;
    if (configNavColors?.background) {
        configVariables.push(`--nav-bg-color: ${configNavColors.background};`);
    }
    if (configNavColors?.menuIcon) {
        configVariables.push(`--nav-toggle-icon-color: ${configNavColors.menuIcon};`);
    }
    if (configNavColors?.link) {
        configVariables.push(`--nav-link-color: ${configNavColors.link};`);
    }

    if (anickaConfig?.buttons?.button1?.hover?.down) {
        configStyleRules.push(hoverDownButtonsStyles(''));
    }
    if (anickaConfig?.buttons?.button2?.hover?.down) {
        configStyleRules.push(hoverDownButtonsStyles('2'));
    }
    if (anickaConfig?.buttons?.button1?.hover?.right) {
        configStyleRules.push(hoverRightButtonsStyles(''));
    }
    if (anickaConfig?.buttons?.button2?.hover?.right) {
        configStyleRules.push(hoverRightButtonsStyles('2'));
    }

    for (const [index, button] of [
        anickaConfig?.buttons?.button1,
        anickaConfig?.buttons?.button2,
        anickaConfig?.form?.button,
        anickaConfig?.form?.inputs,
    ].entries()) {
        const number = index + 1;
        if (!button) continue;
        if (button.border?.color) {
            configVariables.push(`--button-${number}-border-color: ${button.border.color};`);
        }
        if (button.border?.width) {
            configVariables.push(`--button-${number}-border-width: ${button.border.width};`);
        }
        if (button.border?.radius) {
            configVariables.push(`--button-${number}-border-radius: ${button.border.radius};`);
        }
        if (button.background) {
            configVariables.push(`--button-${number}-bg-color: ${button.background};`);
        }
        if (button.color) {
            configVariables.push(`--button-${number}-color: ${button.color};`);
        }
        if (button.hover?.background) {
            configVariables.push(`--button-${number}-hover-bg-color: ${button.hover.background};`);
        }
        if (button.hover?.color) {
            configVariables.push(`--button-${number}-hover-color: ${button.hover.color};`);
        }
        if (button.hover?.borderColor) {
            configVariables.push(`--button-${number}-hover-border-color: ${button.hover.borderColor};`);
        }
    }
    if (anickaConfig?.link?.color) {
        configVariables.push(`--link-color: ${anickaConfig.link.color};`);
    }
    if (anickaConfig?.link?.decoration) {
        configVariables.push(`--link-decoration: ${anickaConfig.link.decoration};`);
    }

    if (anickaConfig?.footer?.bgColor) {
        configVariables.push(`--footer-bg-color: ${anickaConfig.footer.bgColor};`);
    }
    if (anickaConfig?.footer?.color) {
        configVariables.push(`--footer-color: ${anickaConfig.footer.color};`);
    }

    if (anickaConfig?.contactPagelet?.color) {
        configVariables.push(`--contact-pagelet-color: ${anickaConfig.contactPagelet.color};`);
    }

    if (anickaConfig?.form?.label?.color) {
        configVariables.push(`--form-label-color: ${anickaConfig.form.label.color};`);
    }
    if (anickaConfig?.form?.label?.fontSize) {
        configVariables.push(`--form-label-font-size: ${anickaConfig.form.label.fontSize};`);
    }
    if (anickaConfig?.form?.soften) {
        configStyleRules.push(FORM_SOFTEN_STYLES);
    }
    if (anickaConfig?.form?.gdpr) {
        configVariables.push(`--form-anchor-color: ${anickaConfig.form.gdpr};`);
    }

    if (anickaConfig?.form?.button?.hover?.right) {
        configStyleRules.push(FORM_BUTTON_HOVER_RIGHT);
    }
    if (anickaConfig?.form?.button?.hover?.down) {
        configStyleRules.push(FORM_BUTTON_HOVER_DOWN);
    }

    if (anickaConfig?.gallery?.noGap) {
        configStyleRules.push(GALLERY_NO_GAP);
    }

    const cardConfig = (className: string, config: CardConfig) => {
        if (config.shadow) {
            configStyleRules.push(cardShadow(className));
        }
        if (config.hover) {
            configStyleRules.push(cardHover(className));
        }
        if (config.styles) {
            configStyleRules.push(cardStyles(className, config.styles));
        }
        if (config.sameHeight?.length) {
            for (const columns of config.sameHeight) {
                configStyleRules.push(cardsSameHeight(className, columns));
            }
        }
    }

    if (anickaConfig?.card) {
        cardConfig('', anickaConfig.card);
    }

    if (anickaConfig?.cards) {
        for (const [key, value] of Object.entries(anickaConfig.cards)) {
            cardConfig(`.${key}`, value);
        }
    }

    if (anickaConfig?.li?.content) {
        configVariables.push(`--li-content: ${anickaConfig.li.content};`);
    }
    if (anickaConfig?.li?.color) {
        configVariables.push(`--li-color: ${anickaConfig.li.color};`);
    }

    if (anickaConfig?.zoomImage) {
        for (const item of anickaConfig.zoomImage) {
            zoomImageStyles(item);
        }
    }

    for (const [index, h] of [anickaConfig?.h1, anickaConfig?.h2, anickaConfig?.h3].entries()) {
        if (!h) continue;
        if (h.fontSize) {
            configVariables.push(`--h${index}-font-size-mobile: ${h.fontSize};`);
        }
        if (h.fontSizeTablet) {
            configVariables.push(`--h${index}-font-size-tablet: ${h.fontSizeTablet};`);
        }
        if (h.fontSizeDesktop) {
            configVariables.push(`--h${index}-font-size-desktop: ${h.fontSizeDesktop};`);
        }
        if (h.color) {
            configVariables.push(`--h${index}-color: ${h.color};`);
        }
    }

    configStyles.push(
        ...configImportedRules,
    `:root {
        ${configVariables.join('\n')}
    }`, ...configStyleRules);

    styleElement.textContent = `${configStyles.join('\n')}`;

    document.head.appendChild(styleElement);
}
