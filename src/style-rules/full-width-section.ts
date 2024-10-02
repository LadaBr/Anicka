export const FULL_WIDTH_SECTION = (selector: string = '.full-width') => `
    ${selector} .content-width-container, ${selector}.content-width-container, ${selector}  {
        max-width: unset !important;
    }
    
    ${selector}-no-padding .content-width-container, ${selector}-no-padding  {
        max-width: unset !important;
        padding: 0 !important;
    }
    
    ${selector} .content-width-container > section > .pagelet-wrapper { 
        padding: 0 !important;
    }
`;
