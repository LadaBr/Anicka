import {mediaDesktop, mediaMobile, mediaTablet} from "./utils";

export const VARIABLES = `
    :root {
        --default-font-family: 'Poppins';
        --tablet: 768px;
        --desktop: 1024px;
        --padding: 16px;
        --padding-mobile: 16px;
        --padding-tablet: 32px;
        --padding-desktop: 48px;
    }
    
    ${mediaTablet(`
        :root {
            --padding: 32px;
            --padding-mobile: 16px;
            --padding-tablet: 32px;
            --padding-desktop: 48px;
        }
    `)}
    
    ${mediaDesktop(`
        :root {
            --padding: 48px;
            --padding-mobile: 16px;
            --padding-tablet: 32px;
            --padding-desktop: 48px;
        }
    `)}
`;
