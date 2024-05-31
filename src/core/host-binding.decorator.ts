
export const HostBinding = (binding: string) => (target: any, propertyKey: string) => {
    const [type, prop] = binding.split('.');

    switch (type) {
        case 'style':
            let value: any;
            const originalDescriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
            const newDescriptor: PropertyDescriptor = {
                configurable: true,
                enumerable: true,
            };

            newDescriptor.set = function (this: HTMLElement, newValue: any) {
                value = newValue;
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
            const newDescriptorRefSet = newDescriptor.set;

            const originalConnectedCallback = target.connectedCallback || function() {};
            target.connectedCallback = function() {
                originalConnectedCallback.call(this);
                this.style.setProperty(prop, value);
                newDescriptor.set = function (this: HTMLElement, newValue: any) {
                    this.style.setProperty(prop, value);
                    newDescriptorRefSet(newValue);
                };
            };

            Object.defineProperty(target, propertyKey, newDescriptor)
            break;
        default:
            break;
    }
};
