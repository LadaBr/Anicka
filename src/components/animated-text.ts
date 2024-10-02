import {Component} from "../core/component.decorator";
import {Input} from "../core/input.decorator";
import {HostBinding} from "../core/host-binding.decorator";

@Component({
    template: `<slot></slot>`,
    style: `
        :host {
            --animate-duration: 1s;
            --animate-delay: 0s;
            --animate-repeat: 1;
            --animated-text-start-position: -2000px;
            display: block;
        }
               
        :host {
            animation-duration: var(--animate-duration);
            animation-fill-mode: both;
            animation-delay: var(--animate-delay);
            animation-name: backInLeft;
        }
        
        :host([right]) {
            --animated-text-start-position: 2000px;
        }
        
        @keyframes backInLeft {
            0% {
                transform: translateX(var(--animated-text-start-position)) scale(.7);
                opacity: 0;
            }
        
            80% {
                transform: translateX(0) scale(.7);
                opacity: .7
            }
        
            to {
                -webkit-transform: scale(1);
                transform: scale(1);
                opacity: 1
            }
        }
    `,
    shadow: true,
    selector: 'app-animated-text'
})
export class AnimatedText extends HTMLElement {

    @Input() set delay(delay: number | string) {
        this.delayNum = Number(delay);
        this.delayStyle = `${this.delayNum}s`;
    };

    protected delayNum?: number;
    @HostBinding('style.--animate-delay') protected delayStyle: string = '';

    constructor() {
        super();
    }

    componentDidMount(): void {
        if (this.parentElement) {
            const siblings = [...this.parentElement.querySelectorAll('app-animated-text')];
            const currentIndex = siblings.indexOf(this);
            if (currentIndex === 0) return;
            const previousSibling = siblings[currentIndex - 1];
            const previousSiblingDelayAttr = previousSibling.getAttribute('delay');
            const previousDelay = previousSiblingDelayAttr ? Number(previousSiblingDelayAttr) : 0;
            const delay = previousDelay + (this.delayNum === undefined ? 1 : this.delayNum);
            this.setAttribute('delay', delay.toString());
            this.style.setProperty('--animate-delay', `${delay}s`);
        }
    }
}
