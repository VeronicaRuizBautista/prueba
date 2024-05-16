import { LitElement, html, css } from "lit"
export class MyLeftBar extends LitElement {
  
    constructor() {
      super();
    }
  
    render() {
      return html`
        <div class="leftBar__user">
          <a href="#">
            <img src="../">
          </a>
          <a href="#">
            <img src=${userLogo}>
          </a>
        </div>
        <hr>
        <div class="leftBar__options">
          <a href="#">
            <img src=${compassLogo}>
          </a>
          <a href="#">
            <img src=${earphonesLogo}>
          </a>
          <a href="#">
            <img src=${heartLogo}>
          </a>
          <a href="#">
            <img src=${bookLogo}>
          </a>
        </div>
        <div class="leftBar__exit">
          <a href="#">
            <img src=${gearLogo}>
          </a>
          <a href="#">
            <img src=${exitLogo}>
          </a>
        </div>
      `
    }
  
    static get styles() {
      return css`
        :host{
          display:flex;
          flex-direction: column;
          align-items: center;
          /*justify-content: center;*/
          background: gray;
          height: 98vh;
        }
        img{
          width: 2.5em;
          height: auto;
        }
        .leftBar__user{
          display: flex;
          flex-direction: column;
          margin: 2em 0;
        }
        .leftBar__options{
          display: flex;
          flex-direction: column;
          margin-top: 2em;
          gap: 1em
        }
        .leftBar__exit{
          position: absolute;
          bottom: 5em;
          display: flex;
          flex-direction: column;
        }
      `
    }
  }