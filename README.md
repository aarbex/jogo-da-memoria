# jogo-da-memoria

## Descrição

O jogo da memória é um clássico jogo formado por peças que apresentam uma figura em um dos lados. Cada figura se repete em duas peças diferentes. O objetivo do jogo é encontrar os pares, utilizando sua capacidade de memorização de suas posições.

## Pontuação

1 estrela por encontrar todos os pares;
2 estrelas por encontrar todos os pares em até 18 movimentos.
3 estrelas por encontrar todos os pares em até 12 movimentos.

## Como Jogar

Para começar o jogo, as peças são postas com as figuras voltadas para baixo, para que não possam ser vistas. O jogador participante deve virar duas cartas. Caso as figuras sejam iguais, o par de cartas recebe um novo estilo de cores para sinalizar que foi encontrado. Se forem cartas diferentes, estas serão viradas novamente, para que seja realizada uma nova tentativa. O jogo termina quando o jogador tiver encontrado todos os pares.

## Desafio
Encontrar todos os pares com a menor quantidade de movimentos e menor tempo.

## Informações Adicionais
O Projeto possui um arquivo index.html, contendo a estrutura da página e um arquivo de estilo CSS generalizado (css/app.css). Logo, para que haja modificação do projeto e possibilite alterações visíveis, devem ser realizadas alterações nesses arquivos, salvá-los e visualizar a renderização nas páginas exibidas localmente.

Para iniciar o projeto, deve-se acessar o arquivo index.html, sendo esse o principal arquivo, responsável por realizar as chamadas à vários métodos, dispostos em arquivos organizados em pasta especifica.

As funcionalidades interativas, que dão vida a página, como movimentos e animações, são controladas pelo arquivo js/app.js e js/sweet-alert.js. Já a estilização cores, tamanhos e etc, são geridas pelo arquivo css/app.css. O arquivo index.html, que é a página principal, faz a chamada dos outros arquivos e respectivos métodos, além de conter os metadados do jogo. O programa também utiliza o framework JQuery para facilitar a manipulação do DOM.

## Dependências
Para que funcione corretamente e de maneira otimizada e estilizada, alguns frameworks e repositórios externos foram utilizados nesse projeto.
Para facilitar a manipulação do DOM, utilizamos o JQuery, através ds arquivos js/jquery.js e js/jquery-3.3.1.min.js, bem como o Sweet-Alert, através do arquivo js/sweet-alert.js.
Para estilização da página, utilizamos repositórios externos, como o Animate, através do link https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css, o Font-Awesome, através do link https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css e o Google Fonts, através do link https://fonts.googleapis.com/css?family=Coda. 
Essas referências são essenciais para o bom funcionamento do jogo.

