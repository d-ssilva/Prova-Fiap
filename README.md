<h1 align="center">FIAP Avaliação </h1>

<p align="center">Este repositório abriga um projeto de cunho avaliatório sobre habilidades de Front end, as técnologias utilizadas foram: </p>
<!-- ÍCONES -->
<div align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/html.svg" alt="html" width="35" height="35" /> 
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/css.svg" alt="css" width="35" height="35" />
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/javascript.svg" alt="javascript" width="35" height="35" />
</div>
<!-- ÍCONES -->
<h2 align="center" style="margin-top:50px">UTILIZAÇÃO</h2>
<h3 align="center">Apenas dois pontos serão ressaltados como um pedido para o teste básico.</h3>

<h4>1. FUNCIONAMENTO ⚙</h4>
- Para testa-lo, peço para que abram no <b>VSCode</b> e utilizem a extensão <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">Liveserver</a>. Pois abrindo diretamente pelo <span style="color:green">Index.html</span>, alguns parâmetros não funcionam devido a ausência de um <b>Servidor Local</b>:


<div style="display:flex; flex-direction:colum; justify-content: space-around; margin-top:40px; margin-bottom:50px">
<img src="Assets/documentacao/1-homepage_funcionando.png" width="33%" style="border:2px solid green; border-radius:7px; box-shadow: 0px 0px 8px green; margin-right:20px" alt="Liveserver">
<img src="Assets/documentacao/2-homepage_crashando.png" width="33%" style="border:2px solid red; border-radius:7px; box-shadow: 0px 0px 8px red" alt="Index direto">
</div>


---
<h4>2. RESPONSIVIDADE 📱</h4>
- De acordo com o modelo do Figma, as configurações de responsividade foram setadas minimamente a partir de <b style="color:#ED145B" >412px</b>, o site quebrará a partir disso.

<div style="display:flex; flex-direction:row; justify-content: space-around; align-itens:center; margin-top:40px; width:100%; margin-bottom:50px">
<div>
<p align="center" style="font-size:20px">CSS</p>
<img src="Assets/documentacao/3-config_responsividade.png" width="250px" height="125px" style="border:2px solid black;" alt="Liveserver">
</div>
<div>
<p align="center" style="font-size:20px">Liveserver</p>
<img src="Assets/documentacao/4-config_responsividade_screen.png" width="250px" height="125px" style="border:2px solid black;" alt="Liveserver">
</div>
</div>

---
<h4>3. ESTRUTURA DE ARQUIVOS</h4>
Por conta do uso de apenas um arquivo CSS e SCRIPT.JS não vi a necessidade de criar uma pasta dedicada dentro de assets.

|-- Assets/
| |-- fonts/
| |-- imgs/
| |__ svg/
|--- readme.md
|--- index.html
|--- style.css
|___ script.js




