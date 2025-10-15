class CounterButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.count = 0;

    this.shadowRoot.innerHTML = `
      <style>
        button {
          background-color: #f313e8ff;
          color: white;
          font-size: 16px;
          padding: 10px 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }
        span {
          font-weight: bold;
          margin-left: 10px;
        }
      </style>
      <button>Clicked <span>0</span> times</button>
    `;
  }

  connectedCallback() {
    this.button = this.shadowRoot.querySelector('button');
    this.display = this.shadowRoot.querySelector('span');

    this.button.addEventListener('click', () => {
      this.count++;
      this.display.textContent = this.count;
      
    });
  }
}

customElements.define('counter-button', CounterButton);