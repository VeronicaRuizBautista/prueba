import { LitElement, html, css } from "lit"
import infinitLogo from './storage/img/infinitLogo.svg';
import userLogo from './storage/img/userLogo.svg';
import brujula from './storage/img/brujula.svg';
import earphonesLogo from './storage/img/earphonesLogo.svg';
import heartLogo from './storage/img/heartLogo.svg';
import bookLogo from './storage/img/bookLogo.svg';
import gearLogo from './storage/img/gearLogo.svg';
import exitLogo from './storage/img/exitLogo.svg';

export class MyLeftBar extends LitElement {
  
    constructor() {
      super();
    }
  
    render() {
      return html`
      <div class="leftBar__user">
          <a href="#">
          <img src="${infinitLogo}" alt="Infinit Logo">
          </a>
          <a href="#">
            <img src="${userLogo}" alt="userLogo">
          </a>
        </div>
        <hr>
        <div class="leftBar__options">
          <a href="#">
            <img src="${brujula}">
          </a>
          <a href="#">
            <img src="${earphonesLogo}">
          </a>
          <a href="#">
            <img src="${heartLogo}">
          </a>
          <a href="#">
            <img src="${bookLogo}">
          </a>
        </div>
        <div class="leftBar__exit">
          <a href="#">
            <img src="${gearLogo}">
          </a>
          <a href="#">
            <img src="${exitLogo}">
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

          height: 50vh;
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