<div> 
  <h1 align="center">GalaxyTec - Projeto Front-end👨‍💻</h1> 
</div>

<div>
  <h3 align="center">Site de uma loja de tecnologia.</h3>
</div>

<div align='center'>
	<img src= "https://github.com/WillianOL/lojaTec-landingPage/assets/112639055/3d12efb1-7a9d-42bc-9101-5330438a793a" width='850px'>
</div>

## Ferramentas utilizadas🛠️

<div>
	<p>Para a elaboração do projeto, foram usadas as tecnologias:</p>
</div>

<ul>
 	<li>
  		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> JavaScript
 	</li>
	<br>
	<li> 
		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"> HTML
 	</li>
	<br>
 	<li> 
  		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"> CSS 
 	</li>

</ul>

<div>
	<h2>Sobre o projeto📃</h2>
</div>

<div>
	<p>Esse é um projeto feito inteiramente com HTML, CSS e um pouco de Javascript. Sendo um site de vendas e exposição de tecnologia, de aparelhos tecnologicos. Sua estrutura foi feita inspirada em diversos sites referência na área, como Dell e Samsung.</p>
	<p>Fiz esse projeto com intuito de treinar e aplicar meus conhecimentos em HTML e CSS.</p>
</div>
 
### Acessar projeto ✈

◻<a href="https://willianol.github.io/lojaTec-landingPage/assets/index.html">GalaxyTec - site de Tecnologia</a>

## <img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> JavaScript

### Menu mobile
<div>
	<p>Para fazer o menu mobile para aparelhos menores, foi feito de forma bem simples. Primeiro, o botão foi colocado diretamente no HTML. No CSS, em telas maiores o botão é definido como "display: none" para não aparecer em tela, quando a largura da tela alcança 900px, ele é definido como "display: block".</p>
</div>

#### <img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"> <img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"> HTML & CSS do botão
<div align="center">
	<img align="center" src="https://github.com/WillianOL/lojaTec-landingPage/assets/112639055/9a214d43-f5e3-4d58-9e51-6449928c43ca" width="700px">
	<br>
	<br>
	<img align="center" src="https://github.com/WillianOL/lojaTec-landingPage/assets/112639055/6e54c2aa-7e08-4b1d-8a96-454a8d48c1ac" width="700px">
</div>

&nbsp;

### Variáveis Importantes
<div>
	<p>Para a funcionalidade do menu mobile, primeiro foram criadas as variáveis mais importantes. Que são elas:</p>
	<ul>
		<li><strong>menuMobile</strong> - Armazena o conteiner de todo o menu;</li>
		<li><strong>botaoMobile</strong> - Botão que vai abrir e fechar o menu;</li>
	</ul>
</div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/lojaTec-landingPage/assets/112639055/c3a694a3-4567-4798-abd6-24b4c7f8e078" width="700px">
</div>

&nbsp;

### Abrir e fechar menu

<div>
	<p>Para criar a funcionalidade de abrir e fechar o menu, fiz de forma bem simples. No botão para abrir o menu, que é a variável <strong>botaoMobile</strong>, foi definido um evento de click usando o "addEventListener()" que chamará a função <strong>abrirEFecharMenu()</strong></p>
</div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/lojaTec-landingPage/assets/112639055/77751c4e-95f6-49f6-8779-937e6035ef99" width="700px">
</div>

&nbsp;

<div>
	<p>Com o clique, a função e ativada. A função é responsável por adicionar ou remover a classe “ativo” do elemento HTML que contém os botões de acesso do menu mobile e do botão mobile. Essa classe é responsável por mostrar ou esconder o menu mobile. Fazendo assim, quando o clique for dado no botão o menu apareça, quando outro clique for dado o menu vai fechar.</p>
</div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/lojaTec-landingPage/assets/112639055/425a9488-cadf-47c7-9531-fbaff9f6c417" width="700px">
</div>

&nbsp;

<div>
	<p>A classe ativo no botão mobile foi colcada para fazer a alteração do texto no botão. Isso porque o botão é da biblioteca do google icons, e alterando o conteúdo do botão é possivel mudar sua aparência.</p>
	<p>Para fazer essa alteração, na função "abrirEFecharMenu" utilizei a estrutura condicional IF. Fazendo da sequinte forma: Quando se botaoMobile tiver a classe ativo, troque seu conteúdo por "close", se ela não tiver a classe ativo, troque por "menu". Fazendo a alteração do icone do menu mobile.</p>
</div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/lojaTec-landingPage/assets/112639055/79d2e0da-1ad6-4011-b79c-7956805a9e93" width="700px">
</div>























