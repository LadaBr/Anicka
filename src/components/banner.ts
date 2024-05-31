import {Component} from "../core/component.decorator";
import {Input} from "../core/input.decorator";
import {HostBinding} from "../core/host-binding.decorator";

@Component({
    template: `<slot></slot><div class="overlay"></div>`,
    style: `
    :host {
        width: 100%;
        position: relative;
        padding: var(--padding);
        
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        overflow: hidden;
        align-items: center;
        justify-content: center;
    }
    
    ::slotted() {
        position: relative;
    }
    
    :host([top]), :host([position*="top"]) {
        justify-content: flex-start;
    }
    :host([middle]), :host([position*="middle"]) {
        justify-content: center;
    }
    :host([bottom]), :host([position*="bottom"]) {
        justify-content: flex-end;
    }
        
    @media (min-width: 767px) {
        :host([left]), :host([position*="left"]) {
            align-items: flex-start;
            padding-left: 96px;
        }
        :host([center]), :host([position*="center"]) {
            align-items: center;
        }
        :host([right]), :host([position*="right"]) {
            align-items: flex-end;
            padding-right: 96px;
        }
    }

    
    .overlay, ::slotted(img), ::slotted(app-carousel) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100% !important;
        height: 100% !important;
    }
    
    .overlay, ::slotted(img) {
        z-index: -1;
    }
    
    ::slotted(img) {
        object-fit: cover;
    }
    
    ::slotted(h1), ::slotted(p), ::slotted(h2), ::slotted(h3), ::slotted(div) {
        position: relative;
    }
    
    .overlay {
        background-color: var(--overlay-color);
    }
    `,
    shadow: true,
    selector: 'app-banner'
})
export class Banner extends HTMLElement {
    @HostBinding('style.height') @Input() height: string = 'auto';
    @HostBinding('style.--overlay-color') @Input() overlayColor: string = '';

    constructor() {
        super();
    }
}
