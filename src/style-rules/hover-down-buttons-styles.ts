export const hoverDownButtonsStyles = (id: string) => `
    .ctaButton${id} > a {
        transition: transform 0.6s ease;
    }
    
    .ctaButton${id} > a:hover {
        transform: translateY(5px);
    }
`;

export const hoverRightButtonsStyles = (id: string) => `
    .ctaButton${id} > a {
        transition: transform 0.6s ease;
    }
    
    .ctaButton${id} > a:hover {
        transform: translateX(5px);
    }
`;
