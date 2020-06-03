/*
Copyright 2020 Trent Willis
Adaptation to cover Brazil cases by Thiago J. Xavier

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

const content = `
  <style>
    :host {
      background: hsl(0, 0%, 4%);
      box-sizing: border-box;
      color: hsl(0, 0%, 98%);
      display: block;
      font-family: sans-serif;
      font-size: 16px;
      line-height: 1.5;
      padding: 32px;
      width: 100%;
    }

    .names {
      font-size: 24px;
      margin-bottom: 16px;
    }

    .links {
      color: hsl(0, 0%, 71%);
    }

    p {
      margin: 0;
    }

    .red {
      color: hsl(14, 100%, 53%);
    }

    a {
      color: hsl(0, 0%, 86%);
    }

    a:focus,
    a:hover {
      color: hsl(0, 0%, 98%);
      text-decoration: underline;
    }
  </style>

  <p class="names">
    <strong>Eu estou em solidariedade</strong> com
    <a href="https://pt.wikipedia.org/wiki/Morte_de_Jo%C3%A3o_Pedro" target="_blank" rel="noreferrer">João Pedro</a>,
    <a href="https://brasil.elpais.com/brasil/2019/11/19/politica/1574171033_166751.html" target="_blank" rel="noreferrer">Ágatha Vitória Sales Félix</a>,
    <a href="https://oglobo.globo.com/rio/familia-acusa-policiais-paisana-por-morte-de-menina-de-11-anos-em-triagem-23454570" target="_blank" rel="noreferrer">Jenifer Cilene Gomes</a>,
    <a href="https://noticias.uol.com.br/cotidiano/ultimas-noticias/2019/03/20/pms-acusados-por-familia-de-matar-menino-continuam-patrulhando-ruas-no-rio.htm" target="_blank" rel="noreferrer">Kauan Peixoto</a>,
    <a href="https://odia.ig.com.br/rio-de-janeiro/2019/05/5643146--meu-filho-morreu---diz-pai-de-menino-vitima-de-bala-perdida-na-vila-alianca.html" target="_blank" rel="noreferrer">Kauã Rozário</a>,
    <a href="https://brasil.elpais.com/brasil/2019/11/13/politica/1573659983_196213.html" target="_blank" rel="noreferrer">Kethellen Umbelino de Oliveira Gomes</a>,
    <a href="https://g1.globo.com/rj/rio-de-janeiro/noticia/2019/09/09/menino-de-12-anos-morto-durante-operacao-da-pm-no-chapadao-e-enterrado.ghtml" target="_blank" rel="noreferrer">Kauê Ribeiro dos Santos</a>,
    <a href="https://noticias.uol.com.br/cotidiano/ultimas-noticias/2020/01/10/menina-de-8-anos-morre-no-rj-apos-ser-atingida-em-casa-por-bala-perdida.htm" target="_blank" rel="noreferrer">Anna Carolina de Souza Neves</a>
    e inúmeras outras que foram vítimas do <span class="red">racismo</span> e <span class="red">brutalidade policial</span>.
  </p>

  <p><strong><a href="https://vidasnegrasimportam.carrd.co/" target="_blank" rel="noreferrer">Saiba como <em>você</em> pode ajudar.</a></strong></p>

  <p><small><a href="https://github.com/xavierthiago/i-stand" target="_blank" rel="noreferrer">Adicione em seu <i>website</i>.</a></small></p>
`;

class BlackLives extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = content;
  }
}

customElements.define("black-lives", BlackLives);
