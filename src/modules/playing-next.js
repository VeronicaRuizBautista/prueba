export class playingNext extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = /*html*/`
        <link rel="stylesheet" href="../css/playing_next.css">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>`
    }
    async getAllMusicNext() {
        let data
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            <div class="container">
                <div class="icono"><i class='bx bx-menu-alt-left' style='color:#b9b9b9'  ></i></div>
                <div class="img">
                <img src="${val.img}" alt="">
                </div>
                <div class="texto">
                    <h3>${val.name}</h3>
                    <p>${val.author}</p>
                </div>
                <div class="tiempo">
                    <h3>${val.duration}</h3>
                    <h4>${val.date}</h4>
                </div>
            </div>
            `;
        })
    }
}