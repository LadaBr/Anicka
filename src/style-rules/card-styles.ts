export interface CardStyles {
    header?: {
        background?: string;
        color?: string;
    };
    button?: {
        background?: string;
        color?: string;
        border?: string;
        hover?: {
            background?: string;
            color?: string;
        };
    };
}

export const cardStyles = (className: string = '', styles?: CardStyles) => {
    const variables: string[] = [];

    if (styles?.header?.background) {
        variables.push(`--card-header-bg-color: ${styles?.header?.background}`);
    }
    if (styles?.header?.color) {
        variables.push(`--card-header-color: ${styles?.header?.color}`);
    }

    if (styles?.button?.background) {
        variables.push(`--card-button-bg-color: ${styles?.button?.background}`);
    }
    if (styles?.button?.border) {
        variables.push(`--card-button-border-color: ${styles?.button?.border}`);
    }
    if (styles?.button?.color) {
        variables.push(`--card-button-color: ${styles?.button?.color}`);
    }

    if (styles?.button?.hover?.background) {
        variables.push(`--card-button-hover-bg-color: ${styles?.button?.hover?.background}`);
    }
    if (styles?.button?.hover?.color) {
        variables.push(`--card-button-hover-color: ${styles?.button?.hover?.color}`);
    }

    return `
        ${className || ':root'} {
            ${variables.join('\n')}
        }
        
        ${className} .card .card-header {
            background: var(--card-header-bg-color);
            color: var(--card-header-color);
        }
    
        ${className} .card .btn.btn-primary {
            background-color: var(--card-button-bg-color);
            border-color: var(--card-button-border-color);
            color: var(--card-button-color);
        }
        
        ${className} .card .btn.btn-primary:hover {
            background-color: var(--card-button-hover-bg-color);
            color: var(--card-button-hover-color);
        }
    `;
};

export const cardShadow = (className: string = '') => {
    return `${className} .card { box-shadow: 5px 5px 18px #888888; }`;
}

export const cardHover = (className: string = '') => {
    return `
        ${className} .card { border: 0; border-radius: 5px; box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); transition: all 0.7s ;}
        ${className} .card:hover { animation-duration: 0.25s; box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); }
    `;
};

export const cardsSameHeight = (className: string = '', columns: number = 3) => {
    const num = 12 / columns;
    return `
        ${className} .col-md-${num}>section,
        ${className} .col-md-${num} .pagelet-wrapper,
        ${className} .col-md-${num} .pagelet-wrapper-inner,
        ${className} .col-md-${num} .card {
            height:100%;
        }
        ${className} .col-md-${num} section.new-proposal {
            height:auto;
        }
        
        ${className} .col-md-${num} {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-direction: column;
                    flex-direction: column;
        }
        
        ${className} .col-md-${num} .card-body {
            display:-webkit-box;
            display:-ms-flexbox;
            display:flex;
            -webkit-box-orient:vertical;
            -webkit-box-direction:normal;
            -ms-flex-direction:column;
            flex-direction:column;
        }
        
        ${className} .col-md-${num} .card .btn-primary {
            margin-top: auto;
            width: 150px;
            margin-left: auto;
            margin-right: auto;
        }
    `;
};
