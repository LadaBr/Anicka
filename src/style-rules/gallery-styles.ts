export const GALLERY_STYLES = [1,2,3,4,5,6,7,8,9,10].map(i => `
    .specific-gallery-${i} .sw-gallery-wrapper.with-4-items .sw-gallery-item {
        width: ${100 / i}%;
    }
`).join('\n');

export const GALLERY_NO_GAP = `
    figure.sw-gallery-item {
        padding: 0;
    }
`;
