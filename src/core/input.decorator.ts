function camelToKebab(camelCase: string): string {
    return camelCase.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}


export const Input = () => (target: any, propertyKey: string) => {
    if (!target.constructor.observedAttributes) {
        target.constructor.observedAttributes = [];
    }
    if (!target.constructor._inputs) {
        target.constructor._inputs = {};
    }
    if (!target.constructor._attributes) {
        target.constructor._attributes = {};
    }
    const attribute = camelToKebab(propertyKey);
    target.constructor._inputs[attribute] = propertyKey;
    target.constructor._attributes[propertyKey] = attribute;
    target.constructor.observedAttributes.push(attribute);
    const originalConnectedCallback = target.connectedCallback || function() {};
    target.connectedCallback = function() {
        originalConnectedCallback.call(this);

        const originalDescriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
        const newDescriptor: PropertyDescriptor = {
            configurable: true,
            enumerable: true,
        };
        let value: any;
        newDescriptor.set = function (this: HTMLElement, newValue: any) {
            value = newValue;
            if (value !== newValue) {
                this.setAttribute(target.constructor._attributes[propertyKey], newValue);
            }
            if (originalDescriptor?.set) {
                originalDescriptor.set(newValue);
            }
        };
        newDescriptor.get = () => {
            if (originalDescriptor?.get) {
                return originalDescriptor.get();
            } else {
                return value;
            }
        };
        Object.defineProperty(this, propertyKey, newDescriptor)
    }

};
