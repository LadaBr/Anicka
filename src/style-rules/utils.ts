import {MEDIA_DESKTOP, MEDIA_MOBILE, MEDIA_TABLET} from "./const";

export const media = (size: string, content: string) => `
    @media (min-width: ${size}) {
        ${content}
    }
`;

export const mediaMobile = (content: string) => media(MEDIA_MOBILE, content);
export const mediaTablet = (content: string) => media(MEDIA_TABLET, content);
export const mediaDesktop = (content: string) => media(MEDIA_DESKTOP, content);
