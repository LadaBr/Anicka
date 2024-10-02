import {Component} from "../core/component.decorator";
import {Input} from "../core/input.decorator";
import {faInclude} from "../core/fa-include";

@Component({
    template: `
        <div class="slide-container">
            <slot></slot>
        </div>
        <div class="overlay">
            <div class="left">
                <button class="arrow">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
            </div>
            <div class="middle">
                <div class="items"></div>
            </div>
            <div class="right">
                <button class="arrow">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    `,
    shadow: true,
    selector: 'app-carousel',
    style: `
        :host {
           height: 100%;
           width: 100%;
        }
        .arrow {
            all: unset;
            padding: 16px;
            font-size: 56px;
            color: #e9e9e9;
            opacity: 0.3;
            cursor: pointer;
            transition: all .3s ease-in-out;
            text-shadow: 0 0 3px black;
        }
        
        .arrow:hover {
            opacity: 0.9;
        }
        
        .slide-container {
            display: flex;
            height: 100%;
            width: 100%;
            
            transition: transform .6s ease-in-out;
            transform: translateX(var(--carousel-slide));
        }
        ::slotted(img) {
            object-fit: cover;
            flex: 0 0 100%;
            max-width: 100%;
            margin: 0 !important;
        }
        
        .overlay {
            display: flex;
            height: 100%;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            position: absolute;
            top: 0;
            left: 0;
        }
        
        .left, .right, .middle {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
        }
        
        .right {
            justify-content: flex-end;
        }
        
        .middle {
            align-items: flex-end;
            justify-content: center;
        }
        
        .items {
            padding: 16px;
            display: flex;
            gap: 6px;
        }
        
        .item {
            all: unset;
            height: 8px;
            width: 24px;
            background-color: #e9e9e9;
            opacity: 0.3;
            border-radius: 4px;
            box-shadow: 0 0 1px black;
            cursor: pointer;
            transition: all .3s ease-in-out;
        }
        
        .item:hover, .item.active  {
            opacity: 0.8;
        }
        
        :host(:not([controls])) .items, :host(:not([controls])) .arrow {
            display: none;
        }
    `,
})
export class Carousel extends HTMLElement {

    private intervalNum: number = 5000;

    @Input() set interval(value: string) {
        this.intervalNum = Number(value);
        this.startSliding();
    }

    private slideIndex = 0;
    private slideContainer?: HTMLSlotElement | null;
    private intervalId?: number | Timer;
    private slideItems: HTMLButtonElement[] = [];

    get slides() {
        return this.slideContainer ? [...this.slideContainer.assignedElements()] : [];
    }

    componentDidMount(): void {
        if (this.shadowRoot) faInclude(this.shadowRoot);
        this.slideContainer = this.shadowRoot?.querySelector('.slide-container slot');
        if (!this.intervalId) {
            this.startSliding();
        }
        const buttonLeft = this.shadowRoot?.querySelector<HTMLButtonElement>('.left button');
        const buttonRight = this.shadowRoot?.querySelector<HTMLButtonElement>('.right button');

        if (buttonLeft) {
            buttonLeft.onclick = () => this.setNextSlide(-1, true);
        }
        if (buttonRight) {
            buttonRight.onclick = () => this.setNextSlide(1, true);
        }

        const itemsContainer = this.shadowRoot?.querySelector('.items');
        if (itemsContainer && this.slideContainer) {
            this.slideContainer.addEventListener('slotchange', (event) => {
                this.slideItems = [];
                itemsContainer.innerHTML = '';
                for (const [index, slide] of this.slides.entries()) {
                    const slideItem = document.createElement('button');
                    slideItem.classList.add('item');
                    slideItem.onclick = () => this.setSlide(index, true);
                    itemsContainer.appendChild(slideItem);
                    this.slideItems.push(slideItem);
                }
                this.setSlide(0);
            });

        }
    }

    componentDidUnmount() {
        this.stopSliding();
    }

    startSliding() {
        this.stopSliding();
        if (!this.slideContainer) return;
        this.intervalId = setInterval(() => {
            this.setNextSlide();
        }, this.intervalNum);
    }

    stopSliding() {
        clearInterval(this.intervalId);
    }

    setSlide(index: number, resetInterval = false) {
        this.slideItems.forEach(v => v.classList.remove('active'));
        this.slideItems[index].classList.add('active');
        this.style.setProperty('--carousel-slide', `${index * -100}%`);
        if (resetInterval) {
            this.startSliding();
        }
    }

    setNextSlide(index: number = 1, resetInterval = false) {
        const slides = this.slides;
        const maxIndex = slides.length - 1;
        const newIndex = this.slideIndex + index;
        this.slideIndex = newIndex > maxIndex ? 0 : newIndex < 0 ? maxIndex : newIndex;
        this.setSlide(this.slideIndex, resetInterval);
    }
}
