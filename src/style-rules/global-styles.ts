import {mediaDesktop, mediaTablet} from "./utils";

export const GLOBAL_STYLES = `
    html, body {
        overflow-x: hidden;
    }
    .wm-p-simple-text, .wm-p-file, .wm-p-gallery, .wm-p-contact-form, .wm-p-html, .wm-p-simpleImage, .wm-p-map, .contactPagelet, .wm-p-cta, .wm-l-footer, .wm-p-simple-text p, .wm-p-file p, .wm-p-gallery p, .wm-p-contact-form p, .wm-p-html p, .wm-p-simpleImage p, .wm-p-map p, .contactPagelet p, .wm-p-cta p, .wm-l-footer p, .wm-p-simple-text h1, .wm-p-file h1, .wm-p-gallery h1, .wm-p-contact-form h1, .wm-p-html h1, .wm-p-simpleImage h1, .wm-p-map h1, .contactPagelet h1, .wm-p-cta h1, .wm-l-footer h1, .wm-p-simple-text h2, .wm-p-file h2, .wm-p-gallery h2, .wm-p-contact-form h2, .wm-p-html h2, .wm-p-simpleImage h2, .wm-p-map h2, .contactPagelet h2, .wm-p-cta h2, .wm-l-footer h2, .wm-p-simple-text h3, .wm-p-file h3, .wm-p-gallery h3, .wm-p-contact-form h3, .wm-p-html h3, .wm-p-simpleImage h3, .wm-p-map h3, .contactPagelet h3, .wm-p-cta h3, .wm-l-footer h3, .wm-p-simple-text a, .wm-p-file a, .wm-p-gallery a, .wm-p-contact-form a, .wm-p-html a, .wm-p-simpleImage a, .wm-p-map a, .contactPagelet a, .wm-p-cta a, .wm-l-footer a, .wm-p-simple-text ul, .wm-p-simple-text li, #sw-logo a, .card .card-header, .card .card-title, .card .card-subtitle, .card .card-text, .card .btn.btn-primary, .card .card-footer, h1, h2, h3, p, body, html, input, button, select, textarea, option {
        font-family: var(--font-family, var(--default-font-family)), var(--fallback-font-family, sans-serif);
    }
    
    :root {
        --h1-font-size-default: 56px;
        --h2-font-size-default: 48px;
        --h3-font-size-default: 1.9em;
    }
    
    .wm-p-simple-text h1, h1 {
        font-size: var(--h1-font-size-mobile, var(--h1-font-size-default));
        color: var(--h1-color);
    }
    .wm-p-simple-text h2, h2 {
        font-size: var(--h2-font-size-mobile, var(--h2-font-size-default));
        color: var(--h2-color);
    }
    .wm-p-simple-text h3, h3 {
        font-size: var(--h3-font-size-mobile, var(--h3-font-size-default));
        color: var(--h3-color);
    }
    
    ${mediaTablet(`
         .wm-p-simple-text h1, h1 {
            font-size: var(--h1-font-size-tablet, var(--h1-font-size-default));
        }
        .wm-p-simple-text h2, h2 {
            font-size: var(--h2-font-size-tablet, var(--h2-font-size-default));
        }
        .wm-p-simple-text h3, h3 {
            font-size: var(--h3-font-size-tablet, var(--h3-font-size-default));
        }
    `)}
    
    ${mediaDesktop(`
         .wm-p-simple-text h1, h1 {
            font-size: var(--h1-font-size-desktop, var(--h1-font-size-default));
        }
        .wm-p-simple-text h2, h2 {
            font-size: var(--h2-font-size-desktop, var(--h2-font-size-default));
        }
        .wm-p-simple-text h3, h3 {
            font-size: var(--h3-font-size-desktop, var(--h3-font-size-default));
        }
    `)}
    
`;
