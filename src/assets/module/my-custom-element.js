// my-custom-element.js
if(!customElements.get('my-custom-element')){
class MyCustomElement extends HTMLElement {

  theContainer = null;
  constructor() {
    console.groupCollapsed('load constructor');
    console.trace();
    console.groupEnd();
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.theContainer = document.createElement('div');
    this.theContainer.textContent = 'Hello from My Custom Element!';
    shadow.appendChild(this.theContainer);

    setTimeout(()=>{

      this.dispatchEvent(new CustomEvent('dataChange', {
        detail: { updated: true },
        bubbles: true,
        composed: true
      }));
    },5000)
  }


  // Define the setter for the "data" property.
  set data(value) {
    this._data = value;

    console.log('data - ', this._data);
    this.theContainer.textContent = this._data.message;
  }


  connectedCallback() {
    // Optionally, dispatch a custom event after the element is connected.
    this.dispatchEvent(new CustomEvent('dataChange', {
      detail: { updated: true },
      bubbles: true,
      composed: true
    }));
  }
}
  console.log('load');
  customElements.define('my-custom-element', MyCustomElement);
}
