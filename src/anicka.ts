import {bootstrap} from "./bootstrap";
import {Banner} from "./components/banner";
import {Stripe} from "./components/stripe";
import {VARIABLES} from "./style-rules/variables";
import {FULL_WIDTH_SECTION} from "./style-rules/full-width-section";
import {GLOBAL_STYLES} from "./style-rules/global-styles";
import {NAV_FONT} from "./style-rules/nav-font";
import {NAV_STYLES} from "./style-rules/nav-styles";
import {BUTTONS_STYLES} from "./style-rules/buttons-styles";
import {LINK_STYLES} from "./style-rules/link-styles";
import {FOOTER_STYLES} from "./style-rules/footer-styles";
import {CONTACT_PAGELET_STYLES} from "./style-rules/contact-pagelet-styles";
import {FORM_STYLES} from "./style-rules/form-styles";
import {LI_STYLES} from "./style-rules/li-styles";
import {ORDER_STYLES} from "./style-rules/order-styles";
import {GALLERY_STYLES} from "./style-rules/gallery-styles";
import {BETTER_CARD_STYLES} from "./style-rules/better-card-styles";
import {DOUBLE_COLOR_BG_STYLES} from "./style-rules/double-color-bg-styles";
import {VERTICAL_CENTER_COLS_STYLES} from "./style-rules/vertical-center-cols-styles";
import {Notification} from "./components/notification";
import {FA_CSS} from "./style-rules/fa";
import {Card} from "./components/card";
import {AnimatedText} from "./components/animated-text";
import {Carousel} from "./components/carousel";

bootstrap({
    components: [
        Banner,
        Stripe,
        Notification,
        Card,
        AnimatedText,
        Carousel,
    ],
    importedRules: [
        FA_CSS
    ],
    styleRules: [
        VARIABLES,
        FULL_WIDTH_SECTION(),
        GLOBAL_STYLES,
        NAV_FONT,
        NAV_STYLES,
        BUTTONS_STYLES,
        LINK_STYLES,
        FOOTER_STYLES,
        CONTACT_PAGELET_STYLES,
        FORM_STYLES,
        LI_STYLES,
        ORDER_STYLES,
        GALLERY_STYLES,
        BETTER_CARD_STYLES,
        DOUBLE_COLOR_BG_STYLES,
        VERTICAL_CENTER_COLS_STYLES,
    ]
});
