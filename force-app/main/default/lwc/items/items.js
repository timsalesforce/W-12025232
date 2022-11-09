import { LightningElement } from 'lwc';

export default class Items extends LightningElement {
    items = ['one', 'two', 'three'];

    updateItems() {
        // This wil not work because you are not setting the tracked property
        // but instead are simply updating an element in the array.
        // this.items[1] = this.items[1].toUpperCase();

        // This will work because we are cloning the tracked property (array)
        // changing it as desired, and then assigning the result back to the
        // tracked property.
        const _items = [...this.items];
        _items[1] = _items[1].toUpperCase();
        this.items = _items;
    }
}