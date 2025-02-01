// my-custom-element.js
class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const container = document.createElement('div');
    container.textContent = 'Hello from My Custom Element!';
    shadow.appendChild(container);
  }
}

customElements.define('my-custom-element', MyCustomElement);
