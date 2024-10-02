import {FULL_WIDTH_SECTION} from "./full-width-section";
import {mediaTablet} from "./utils";

export const NAV_STYLES = `
    .header-container, .homepage-wrapper .header-container { background-color: var(--nav-bg-color); }
    .header-container, .homepage-wrapper .header-container { border-bottom: var(--nav-border); }
    .navbar-toggler-icon i { color: var(--nav-toggle-icon-color); }
    
    .navbar-light .navbar-nav .nav-item.current .nav-link { color: var(--nav-link-color-current, var(--nav-link-color)); border-bottom: 1px solid var(--nav-link-color-current, var(--nav-link-color));}
    .navbar-light .navbar-nav .nav-link:hover { color: var(--nav-link-color-hover, var(--nav-link-color)); border-bottom: 1px solid var(--nav-link-color-hover, var(--nav-link-color));}
    .navbar-light .navbar-nav .nav-link { color: var(--nav-link-color);}

`;

export const NAV_FULL_WIDTH = FULL_WIDTH_SECTION('.navbar')

export const NAV_STICKY = `
    ${mediaTablet(`
        .header-container, .homepage-wrapper .header-container {
            position: sticky !important;
            top: 0;
        }
    `)}
`;
