export const FORM_STYLES = `
    form input[type="submit"] {
        border-style: solid;
        border-width: var(--button-3-border-width, 1px);
        border-color: var(--button-3-border-color);
        border-radius: var(--button-3-border-radius);
        color: var(--button-3-color);
        background-color: color: var(--button-3-bg-color);
    }
    
    form input[type="submit"]:hover {
        color: var(--button-3-hover-color);
        border-color: var(--button-3-hover-border-color);
        background-color: color: var(--button-3-hover-bg-color);
    }
    
    .wm-p-contact-form input, .wm-p-contact-form textarea {
        border-style: solid;
        border-width: var(--button-4-border-width, 1px);
        border-color: var(--button-4-border-color, #dbdbdb);
        border-radius: var(--button-4-border-radius);
    }
        
    .wm-p-contact-form label {
        font-size: var(--form-label-font-size, 14px);
        color: var(--form-label-color, #666);
    }
    
    .wm-p-contact-form a {
        color: var(--form-anchor-color);
    }
`;

export const FORM_BUTTON_HOVER_DOWN = `
    form input[type="submit"] {
        transition: transform 0.6s ease;
    }
    
    form input[type="submit"]:hover {
        transform: translateY(5px);
    }
`;
export const FORM_BUTTON_HOVER_RIGHT = `
    form input[type="submit"] {
        transition: transform 0.6s ease;
    }
    
    form input[type="submit"]:hover {
        transform: translateX(5px);
    }
`;

export const FORM_SOFTEN_STYLES = `
    .wm-p-contact-form input, .wm-p-contact-form textarea {
        padding: 8px;
        margin-top: 0px;
        margin-bottom: 0px;
    }
        
    .wm-p-contact-form label {
        margin-bottom: 2px;
        margin-top: 8px;
    }
        
    .wm-p-contact-form form input[type="submit"] {
        padding: 8px 0px;
        margin-top:24px;
    }
`;
