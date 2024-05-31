export const zoomImageStyles = (className: string) => {
    return `
        ${className} { overflow:hidden; }
        ${className} .section-background { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -webkit-animation: zoomin 18s ease-in infinite; animation: zoomin 18s ease-in infinite; transition: all 1.75s ease-in-out; overflow: hidden; }
        @-webkit-keyframes zoomin{0%{transform:scale(1)}50%{transform:scale(1.2)}100%{transform:scale(1)}}@keyframes zoomin{0%{transform:scale(1)}50%{transform:scale(1.2)}100%{transform:scale(1)}}
    `;
};
