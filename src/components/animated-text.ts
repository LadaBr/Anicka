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
    selector: 'app-flying-text'
})
export class AnimatedText extends HTMLElement {
    @HostBinding('style.--animate-delay') @Input() delay: string = '';

    constructor() {
        super();
    }

    componentDidMount(): void {
        if (this.parentElement) {
            const siblings = [...this.parentElement.querySelectorAll('app-animated-text')];
            const currentIndex = siblings.indexOf(this);
            this.style.setProperty('--animate-delay', `${currentIndex}s`);
        }
    }
}
