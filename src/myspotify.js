import {LitElement, css, html} from 'lit';

export class mySpotify extends LitElement{
    static properties= {
      track: {type: String}
    }
    static styles = css`
      .track{
        width: 100%;Mostrar
    `;
    render(){
      return html`
        <iframe 
            src="https://open.spotify.com/embed/track/7HMz8o0m7ASQ3ImFPfhWTY" 
            frameborder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </iframe>

      `
    }
  }
