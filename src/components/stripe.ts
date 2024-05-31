import {Component} from "../core/component.decorator";
import {Input} from "../core/input.decorator";
import {HostBinding} from "../core/host-binding.decorator";

@Component({
    template: `<div class="polygon"><div class="content"><slot></slot></div></div>`,
    style: `
    :host {
        --angle: var(--degree);
        --polygon-x-y-1: 0 0;
        --polygon-x-y-2: 100% 0;
        --polygon-x-y-3: var(--percentage) 100%;
        --polygon-x-y-4: 0% 100%;
        --percentage: calc(tan(var(--angle))* 100%);
        --reverse: 1;
        --content-pos: 50%;
        
        width: var(--width);
        height: var(--height);
        left: 0;
        position: absolute;
    }
    
    :host([shadow]) {
        filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, .5));
    }
    
    .polygon {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        background: var(--background);
        width: inherit;
        height: inherit;
        clip-path: polygon(var(--polygon-x-y-1), var(--polygon-x-y-2), var(--polygon-x-y-3), var(--polygon-x-y-4));
    }
    
    :host([top]), :host(:not([bottom])) {
        top: 0;
    }
    
    :host([bottom]) {
        bottom: 0;
    }
    :host([fixed]) {
        position: fixed;
    }
    
    :host([left]:not([bottom])), :host([left][top]) {
        left: 0;
        --reverse: -1;
        --content-pos: -50%;
    }
    
    :host([right]), :host([right][top]) {
        right: 0;
        left: unset;
        --content-pos: -50%;
        --polygon-x-y-1: 100% 0;
        --polygon-x-y-2: 100% 100%;
        --polygon-x-y-3: calc(100% - var(--percentage)) 100%;
        --polygon-x-y-4: 0 0;
    }
    
    :host([right][triangle]) {
        --content-pos: -50%;
        --reverse: 1;
    }
    
    :host([right][triangle][bottom]) {
        --reverse: -1;
        --content-pos: 50%;
    }
    
    :host([left][bottom]), :host([bottom]:not([right])) {
        --angle: calc(45deg - var(--degree));
        --polygon-x-y-1: 0 0;
        --polygon-x-y-2: calc(100% - var(--percentage)) 0;
        --polygon-x-y-3:  100% 100%;
        --polygon-x-y-4: 0 100%;
    }
    
    :host([right][bottom]) {
        --angle: calc(0deg + var(--degree));
        --polygon-x-y-1: calc(100% - var(--percentage)) 0;
        --polygon-x-y-2: 100% 0;
        --polygon-x-y-3: 100% 100%;
        --polygon-x-y-4: 0 100%;
    }
    
    :host([triangle]) {
        --triangle-width: var(--triangle, var(--width));
        --triangle-height: var(--triangle, var(--height));
        width: var(--triangle-width);
        height: var(--triangle-height);
        --triangle-angle: atan2(var(--triangle-height), var(--triangle-width));
        --degree: 0deg !important;
    }
    
    :host([triangle]) {
        --degree: 0deg !important;
    }
    
    .content {
        transform: rotate(calc(var(--reverse) * var(--triangle-angle))) translateY(var(--content-pos));
        height: calc(var(--triangle-width) / 2);
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    `,
    shadow: true,
    selector: 'app-stripe'
})
export class Stripe extends HTMLElement {
    @HostBinding('style.--width') @Input() width: string = 'var(--tablet)';
    @HostBinding('style.--height') @Input() height: string = '100%';
    @HostBinding('style.--triangle') @Input() triangle: string = '';
    @HostBinding('style.--background') @Input() color: string = 'white';
    @HostBinding('style.--degree') protected degStyle: string = '';

    @Input() set angle(deg: number | string) {
        this.degStyle = `${Number(deg)}deg`;
    };

    constructor() {
        super();
        this.angle = 35;
    }
    public componentDidMount(): void {
        if (this.parentElement && !this.parentElement.style.position) {
            this.parentElement.style.setProperty('position', 'relative');
        }
    }
}
