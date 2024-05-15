import { LitElement, html, css } from "lit";
import { MyElement } from "./my-element";
import { newMusic } from "./top-chart";
import { playingNext } from "./modules/playing-next";

class myGrid extends LitElement {

    static styles = css`
    .main{
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: 80px 1fr 1.5fr 1fr;
        grid-template-rows: 1fr;
    }

    .main__aside{
        background: #2B2D42;
        padding: 10px;
        display: grid;Discover new Music/
        grid-template-rows: 130px 1fr 130px
    }
    .aside__profile{
        border-bottom: 1px solid gray
    }
    .aside__buttons{
        
    }
    .aside__exit{
        
    }

    .main__section1 .tituloh1 {
        margin: 25px;
        margin-top:5px;
        font-size:4.4vw
    }
    .main__section1 h2 {
        margin: 20px;
        font-size:1.5vw
    }
    @media (max-width: 849px){
        .main{
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 80px;
        }
        .aside__profile{
            display: none
        }
        .aside__exit{
            display: none
        }

        .main__section1Discover {
            display: none
        }
        .main__section2{
            display: none
        }
    }
    `

    render(){
        return html`
        <main class="main">
            <aside class="main__aside">
                <article class="aside__profile"></article>
                <article class="aside__buttons">
                </article>
                <article class="aside__exit"></article>
            </aside>
            <section class="main__section1">
                <h1 class="tituloh1">Discover new Music</h1>
                <h2>Top-Chart</h2>
                <new-music class="new-music">hi</new-music>
            </section>
            <section class="main__section2">
                <my-element><my-element/>
            </section>
            <section class="main__section3">
                <h1 class="tituloh1">Track-list</h1>
                <playing-next></playing-next>
            </section>
        </main>
        `
    }
}

customElements.define("my-grid" , myGrid)
customElements.define('my-element', MyElement);
customElements.define("new-music", newMusic)
customElements.define("playing-next", playingNext)