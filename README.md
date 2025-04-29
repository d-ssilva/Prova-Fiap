<h1 align="center">FIAP Avaliação </h1>

<p align="center">Projeto de cunho avaliatório sobre habilidades de Front end, as técnologias utilizadas foram: </p>
<!-- ÍCONES -->
<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" title="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" title="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" title="JavaScript">    
</div>
<!-- ÍCONES -->

<h2 align="center">FUNCIONAMENTO ⚙</h2>
<!-- <h3 align="center">Apenas dois pontos serão ressaltados como um pedido para o teste básico.</h3> -->

<!--<h4>1. FUNCIONAMENTO ⚙</h4>-->
### REQUISITOS:
#### Para testa-lo, utilize o **VSCode** e a extensão Liveserver
- <a href="https://code.visualstudio.com/download">VSCode</a>
- <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">Liveserver</a>

**Justificativa**: Abrindo diretamente pelo *Index.html*, alguns recursos como exemplo: imagens, fonts etc. podem falhar ao carregar devido a ausência de um **Servidor Local**:
<div align="center">
<img src="Assets/documentacao/1-homepage_funcionando.png" width="33%" alt="Liveserver">
<img src="Assets/documentacao/2-homepage_crashando.png" width="33%" alt="Index direto">
</div>

<h2 align="center">RESPONSIVIDADE (412px) 📱</h2>
Seguindo o modelo proposto em Figma, as configurações de responsividade foram setadas minimamente para <b>412px</b>.

<div align="center">
<p align="center">CSS</p>
<img src="Assets/documentacao/3-config_responsividade.png" width="250px" height="125px" align="center" alt="CSS">
<p align="center">Liveserver</p>
<img src="Assets/documentacao/4-config_responsividade_screen.png" width="250px" height="125px" align="center" alt="Liveserver">
</div>

<h2 align="center">Estrutura de Arquivos</h2>
   
#### Por conta do uso de apenas um arquivo CSS e SCRIPT.JS não foi necessário criar uma pasta dedicada dentro de assets.
```bash
.
├── Assets/
│   ├── fonts/
│   ├── imgs/
│   └── svg/
├── index.html
├── style.css 
├── script.js
└── README.md


