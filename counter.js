class CounterButton extends HTMLElement {
  constructor() {
    super();

    // Create Shadow DOM for encapsulation
    this.attachShadow({ mode: 'open' });

    // Component state
    this.count = 0;

    // Initial structure
    this.shadowRoot.innerHTML = `
      <style>
        button {
          background-color: #4caf50;
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

  // Called when component is added to the page
  connectedCallback() {
    this.button = this.shadowRoot.querySelector('button');
    this.display = this.shadowRoot.querySelector('span');

    
    this.button.addEventListener('click', () => {
      this.count++;
      this.display.textContent = this.count;
      document.title = `Clicked ${this.count} times`;
    });
  }
}


customElements.define('counter-button', CounterButton);
