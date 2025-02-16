import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.fancy = false;
    this.title = 'Free Hug';
    this.image = 'https://i.etsystatic.com/18796893/r/il/f8534f/4724835275/il_fullxfull.4724835275_kwbm.jpg';
    this.description = 'A hug for a rough day';
    this.affirmationsLink = 'https://www.thegoodtrade.com/features/positive-affirmations-morning-routine/';
    this.detailsLink = 'https://hax.psu.edu';
    this.info = "The teddy bear loves you!"
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      
      :host([fancy]) .bkg {
        background-color: pink;
        color: green;

}

      .bkg {
      background-color:#ccb7e5;
      width: 350px;
      }

      img
      {
          padding:0px 5px 0px 5px;
        width:340px;
        height:250px;
      }
      h1{
        text-align:center;
        color:#30106b;
      }
      p{
        margin: 0px;
        font-size:20px;
        text-align:center;
        color:#30106b;
      }

      .positive{
        margin: 15px 4px 10px 50px;
        font-size:23px;
        color:#30106b;
        width:250px;
        height:50px;
        background-color:#e6d1f2;
        border-color:#30106b;
        border-radius:40px;
        
      }

      button{
        margin: 15px 10px 20px 140px;
        font-size:15px;
        color:#30106b;
        width:60px;
        height:30px;
        background-color:#e6d1f2;
        border-color:#30106b;
        border-radius:20px;
      }
      a {
        text-decoration: none;
      }
    `;
  }
  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    
    return html`
    <div>${this.title}</div>
  
    <div class="bkg">
        <h1>${this.title}</h1>
        <img src="${this.image}" alt="Image">
        <p>${this.description}</p>
        <slot></slot>
        <!-- put this in your render method where you had details -->
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
          <div>
         <slot>${this.info}</slot>
         <a href="${this.detailsLink}" target="_blank">
          <button class="details">Details</button>
          </a>
          </div>
          
          </details>
          
        <a href="${this.affirmationsLink}" target="_blank">
          <button class="positive">Positive Affirmations</button>
        
        
        </a>
      </div>
    
    
    
    
    `;
    
  }

  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true },
      title: { type: String },
      image: { type: String },
      description: { type: String },
      affirmationsLink: { type: String },
      detailsLink: { type: String },
      info: {type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
