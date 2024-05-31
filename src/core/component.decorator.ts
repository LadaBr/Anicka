interface ComponentConfig {
    selector:string;
    template: string;
    style?: string;
    shadow?: boolean;
}
type ConstructorTypeOf<T> = new (...args:any[]) => T;
export type ComponentType = {
    _inputs: Record<string, string>;
}

export const Component = (config: ComponentConfig) => (cls: ConstructorTypeOf<any>) => {
    if (!config.template) {
        throw new Error('You need to pass a template for the element');
    }
    const template = document.createElement('template');
    if (config.style) {
        config.template = `<style>${config.style}</style> ${config.template}`;
    }
    const connectedCallback = cls.prototype.connectedCallback || function () {};
    cls.prototype.connectedCallback = function() {
        template.innerHTML = config.template;
        // template.innerHTML = config.template.replace(/{{(.*?)}}/g, (match, key) => {
        //     return this[key.trim()] || "";
        // });
        const clone = document.importNode(template.content, true);
        if (config.shadow) {
            this.attachShadow({mode: 'open'}).appendChild(clone);
        } else {
            this.appendChild(clone);
        }

        if (this.componentWillMount) {
            this.componentWillMount();
        }
        connectedCallback.call(this);
        if (this.componentDidMount) {
            this.componentDidMount();
        }
    };
    const disconnectedCallback = cls.prototype.disconnectedCallback || function () {};
    cls.prototype.disconnectedCallback = function() {
        if (this.componentWillUnmount) {
            this.componentWillUnmount();
        }
        disconnectedCallback.call(this);
        if (this.componentDidUnmount) {
            this.componentDidUnmount();
        }
    };
    cls.prototype.attributeChangedCallback = function (name: string, oldValue: unknown, newValue: unknown) {
        const input = (cls as unknown as ComponentType)._inputs[name];
        if (Object.hasOwn(this, input) || Object.hasOwn(cls.prototype, input)) {
            this[input] = newValue;
        }
    }
    window.customElements.define(config.selector, cls);
};
