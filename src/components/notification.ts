import {Component} from "../core/component.decorator";
import {FA_CSS} from "../style-rules/fa";
import {HostBinding} from "../core/host-binding.decorator";
import {Input} from "../core/input.decorator";

@Component({
    template: `
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class="content">
            <slot></slot>
        </div>
        <button class="hide" onclick="this.style.display = 'none'">
            <slot name="close"><i class="fa-solid fa-xmark"></i></slot>
        </button>
    `,
    shadow: true,
    selector: 'app-notification',
    style: `
        ${FA_CSS}
        :host {
            position: fixed;
            bottom: 0;
            padding: calc(var(--padding) / 2) var(--padding);
            padding-top: 8px;
            background: var(--notification-bg-color, white);
            border-radius: var(--notification-border-radius);
            margin: 8px;
            overflow: hidden;
        }
        
        :host([left]) {
            left: 0;
        }
        
        :host([right]), :host(:not([left])) {
            right: 0;
        }
        
        button {
            all: unset;
            cursor: pointer;
            position: absolute;
            right: 0;
            top: 0;
            padding: 16px;
        }
        
        :host([shadow]) {
            box-shadow: 0px 0px 8px rgba(0, 0, 0, .3);
        }
    `,
})
export class Notification extends HTMLElement {
    @HostBinding('style.--notification-bg-color') @Input() background: string = '';
    @HostBinding('style.--notification-border-radius') @Input() radius: string = '';

    componentDidMount() {
        const button = this.shadowRoot?.querySelector<HTMLButtonElement>('.hide');
        if (button) {
            button.onclick = () => {
                this.style.display = 'none';
            }
        }
    }
}
