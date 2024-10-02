import {Component} from "../core/component.decorator";
import {HostBinding} from "../core/host-binding.decorator";
import {Input} from "../core/input.decorator";

@Component({
    template: `
        <slot></slot>
        <div class="overlay">
            <slot name="overlay"></slot>
        </div>
    `,
    shadow: true,
    selector: 'app-card',
    style: `
        :host {
            position: relative;
            width: var(--card-width, 100%);
            height: 380px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            
            color: #fbfbfb;
            text-shadow: 0 0 3px black;
            text-align: center;
        }
        
        :host(:hover) .overlay {
            top: 0;
        }
        
        .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 100%;
            left: 0;
            background: var(--card-overlay-color, rgba(0,0,0,0.75));
            transition: top 0.7s ease;
            
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        
        ::slotted(img) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100% !important;
            height: 100% !important;
            z-index: -1;
        }
        
        ::slotted(img) {
            object-fit: cover;
        }
    `,
})
export class Card extends HTMLElement {
    @HostBinding('style.--card-width') @Input() width: string = '';
    @HostBinding('style.--card-overlay-color') @Input() overlayColor: string = '';

}
