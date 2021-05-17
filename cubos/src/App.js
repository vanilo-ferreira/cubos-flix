import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="barraDeNavegacao">
        <div className="alinhamentoBarraDeNavegacao">


          <img src="./assets/images/logo.svg" alt=" " />

          <div>
            <input type="text" className="pesquisarFilmes" placeholder="Pesquise filmes..." />
          </div>

          <div className="alinhamentoIconeETexto">
            <img src="../assets/images/logo.svg" />
            <img src="bg-promotion.svg" />
            <p>Favoritos</p>
          </div>

          <div className="alinhamentoIconeETexto">
            <img src="../assets/images/logo.svg" />
            <p>Promoção</p>
          </div>

          <div className="alinhamentoIconeETexto">
            <p>Bem Vindo Dina</p>
            <img src="../assets/images/logo.svg"></img>
          </div>

        </div>


      </div>

      <div className="conteudo">

        <div className="lateralEsquerda">

          <div className="cupom">

            <div className="chamadaCupom">
              <p>APROVEITE AGORA</p>
              <div className="alinhamentoIconeETexto"> <img src="../assets/images/logo.svg" />
                <p className="textoCupom ">CUPOM: HTMLNAOELINGUAGEM</p>
              </div>
            </div>

            <div className="cronometro">
              <p>FINALIZA EM:</p>
              <div className="alinhamentoIconeETexto"> <img src="../assets/images/logo.svg" />
                <p className="relogio">RELÓGIO</p>
              </div>
            </div>

          </div>

          <div className="textoFilmes">
            <h1>Top Filmes</h1>
          </div>

          <div className="textoFilmes">
            <h1>Filmes</h1>

            <div className="categorias">

              <div className="caixaFiltro">
                <p className="textoFiltro">Todos</p>
              </div>

              <div className="caixaFiltro">
                <p className="textoFiltro">Ação</p>
              </div>

              <div className="caixaFiltro">
                <p className="textoFiltro">Romance</p>
              </div>

              <div className="caixaFiltro">
                <p className="textoFiltro">Ficção Científica</p>
              </div>

              <div className="caixaFiltro">
                <p className="textoFiltro">Terros</p>
              </div>




            </div>

          </div>
        </div>

        <div className="lateralDireita">

          <div className="caixaSacola">
            <p className="barraSacola textoSacola">Sacola</p>
            <p className="textoSacola">Sua sacola está vazia</p>
            <p>Adicione filmes agora</p>
            <img src="../assets/images/person-illustration.svg"></img>
            <div>
              <p className="textoInput">Insira seu cupom</p>
              <input type="text" id="inputCupom" placeholder="Cupom de desconto" />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
