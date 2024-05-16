import { LitElement, css, html} from "lit";
import { new_Music } from "./modules/newMusic";



export class MyMiddleSection extends LitElement {
  
  constructor() {
    super();
  }

  render() {
    return html`
      <div class = middleSection__container>
        <div class = "middleSection__title"></div>
        <div class = "middleSection__image"></div>
        <div class = "middleSection__songTitle"></div>
        <div class = "middleSection__barDuration"></div>
        <div class = "middleSection__bottons"></div>
        <div class = "middleSection__barVolume"></div>
        <div class = "middleSection__deviceReference"></div>
      </div>
    `
  }

  static get styles() {
    return css`
      .middleSection__container{
        display:grid;
        grid-template-rows: .2fr, 2fr, .35fr, .15fr, .45fr, .12fr, .2fr;
        gap: .5em;
        height: 96vh;
        padding: 1em 0;
      }
      .middleSection__title{
        grid-rows: 1/2;
        background: white;
        max-height: 40px;
      }
      .middleSection__image{
        grid-rows: 2/3;
        background: white;
        min-height: 300px;
      }
      .middleSection__songTitle{
        grid-rows: 3/4;
        background: white;
        
      }
      .middleSection__barDuration{
        grid-rows: 4/5;
        background: white;
        max-height: 25px;
        display: flex;
        align-items:center;
        justify-content: center;
      }
      .middleSection__bottons{
        grid-rows: 5/6;
        background: white;
        min-height: 30px;
      }
      .middleSection__barVolume{
        grid-rows: 6/7;
        background: white;
        max-height: 20px;
      }
      .middleSection__deviceReference{
        grid-rows: 7/8;
        background: white;
        max-height: 40px;
      }
    `
  }
}
customElements.define('my-middle-section', MyMiddleSection); 

export class MyRightSection extends LitElement {
  
  constructor() {
    super();
  }

  render() {
    return html`
      <div class = rightSection__container>
        <div class = "rightSection__title"><h1>Track list</h1></div>
        <div class = "rightSection__tools"><box-icon name='repost' color='#908e8e' ></box-icon> <box-icon name='shuffle' color='#908e8e'></box-icon></div>
        <div class = "rightSection__playingNext"><h3>Playing next<h3></div>
        <div class = "rightSection__Songs"><my-track></my-track></div>
      </div>
    `
  }

  static get styles() {
    return css`
      .rightSection__container{
        display: grid;
        grid-template-areas: 
        "title",
        "tools",
        "playingNext",
        "Song";
        grid-template-rows: repeat(4, 1fr);
        height: 96vh;
        padding: 1em 0;
        gap: .1em;
      }
      .rightSection__title{
        grid-areas: "title";
        background: white;
        height: 5vh;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .rightSection__title h1{
        color: #333333;
        font-size: 2.5em;
        margin-left: 10px;
      }
      .rightSection__tools{
        grid-areas: "tools";
        background: white;
        height: 5vh;
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .rightSection__playingNext{
        grid-areas: "playingNext";
        background: white;
        height: 5vh;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .rightSection__Songs{
        grid-areas: "Song";
        background: white;
        height: 80vh;
        overflow: scroll
      }

      .rightSection__Songs::-webkit-scrollbar {
        display: none;
      }
    `
  }
}
customElements.define('my-right-section', MyRightSection); 