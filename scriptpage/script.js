function localFunctionMouse(element){
    element.style = 'filter: invert(20%);';
}

function localFunctionMouse2(element){
    element.style = 'filter: invert(0%);';
}

// Script para o Lazy Loading
document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll("img.lazy");
  const lazyVideos = document.querySelectorAll("video.lazy");

  const lazyLoad = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const item = entry.target;
        item.src = item.dataset.src;
        item.load && item.load(); // Para vídeos
        item.classList.remove("lazy");
        observer.unobserve(item);
      }
    });
  };

  const observer = new IntersectionObserver(lazyLoad, {
    rootMargin: "0px 0px 50px 0px" // Carrega as imagens 50px antes de entrarem na tela
  });

  lazyImages.forEach(img => observer.observe(img));
  lazyVideos.forEach(video => observer.observe(video));
});

console.log("%c pare imediatamente você está em um lugar onde só é permitido developers caso descobrirmos que você está mudando valores e ativando funções sua conta sera banida!!!!", "color: red; font-size: 20px; font-weight: bold;");

function alertPlayGame(){
    if(confirm('está indeciso? vamos jogar um dos melhores jogos da plataforma em pesquisas!') === true){
        window.location.href = 'view.html?id=:;sçç,lsm%20|%20cryzen';
        setTimeout(alertPlayGame, Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000);
    }else{
        alert('se você preferir pode desativar a opção do site te da alertas de tempos aleatórios, ok?');
    }
}

setTimeout(alertPlayGame, Math.floor(Math.random() * (100000000 - 30000 + 1)) + 30000);

const login = localStorage.getItem('LoginPlayer');

if(login){  
    console.log('você esta logado');
}else{
    if(confirm('Me desculpe, mas você não está registado. Não é obrigatório, mas seria o recomendado.') === true){
        window.location.href = 'log-in.html';
    }
}

// definir parametros de url//
const paramsSearch = new URLSearchParams(location.search);
let pesquisaLocal = paramsSearch.get('search');
let tp = paramsSearch.get('tp');

if(tp == 'true'){
    document.getElementById('load1').remove();
    document.getElementById('load2').remove();
}
document.getElementById('inputSearch').addEventListener('change', function(event){
    const pesquisa = document.getElementById('inputSearch').value;
    console.log('o client pesquisou a palavra a seguir: '+pesquisa);
    window.location.href = 'index.html?search='+pesquisa;
});

const loginStats = login.split(":::");
document.getElementById('creatorTxt').textContent = loginStats[0]+' | '+loginStats[2];
if(loginStats[0] == 'joão victor' && loginStats[2] == 8486537){
    document.getElementById('creatorTxt').textContent = loginStats[0]+' ✔🔹 criador | '+loginStats[2];
}
//pegar informações salvas
const localSave_1938 = localStorage.getItem('Key_10923', 'localSave-2x32sz');

//verificar user
const listaDeBan = [
]

if(listaDeBan.includes(loginStats[2])){
    if(confirm('você foi banido, quer tentar entrar novamente?') === true){
        window.location.href = '';
    }else{
        window.location.href = 'https://google.com';
    }
}

//verificar o dispositivo

const userAgent = navigator.userAgent.toLowerCase();
const isAndroid = userAgent.includes('android');
const isIOS = /(iphone|ipad|ipod)/.test(userAgent);
console.log(userAgent+'local_0288402883002:'+isAndroid+' '+isIOS);

if(isIOS == true || isAndroid == true){modMobileOn()};

function modMobileOn(){
    window.innerWidth = '768px';
    window.innerHeight = '414px ';

    //definir objetos

    const barTools = document.getElementById('BarTools');
    const container1 = document.getElementById('containerTypeGames');
    const icon2 = document.getElementById('icon2');
    const icon1 = document.getElementById('icon1');
    const TITL_tle1 = document.getElementById('untitleJs');
    const TITL_tle2 = document.getElementById('GameTitleCont');
    const TITL_tle3 = document.getElementById('untitleGamesFps');
    const TITL_tle4 = document.getElementById('creatorTxt');
    const l2 = document.getElementById('load2');
    const l1 = document.getElementById('load1');

    //arrumar tamanhos e posições

    barTools.style = 'width: 90%; height: 8vh; left: 2.5vh; top: 90%;';
    container1.style = 'height: 88%; left: 1.7vh;';
    icon2.style = 'width: 15%; height: 7.5vh; top: 90%; left: 17%;';
    icon1.style = 'width: 16%; height: 8vh; top: 90%; left: 3%;';
    TITL_tle1.style = 'font-size: 150%; top: 5%;';
    TITL_tle2.style = 'font-size: 150%; top: 50.5%;';
    TITL_tle3.style = 'font-size: 150%; top: 95.5%;';
    TITL_tle4.style.fontSize = '110%';
    TITL_tle4.style.top = '-4%';
    if(tp == null){
        l2.style.backgroundSize = '365.5%';
        l2.style.backgroundPositionX = '60%';
        l1.style.height = '5%';
        l1.style.fontSize = '177%';
        l1.textContent = 'load...';
    }
}

//verificação de informações salvas

if(localSave_1938 == "null" || localSave_1938 == null){localStorage.setItem('Key_10923', 0)};

function UpdateNewRecord(){
    localStorage.setItem('Key_10923', Number(localStorage.getItem('Key_10923', 'localSave-2x32sz')) + 2);
    const localSave_1938 = localStorage.getItem('Key_10923', 'localSave-2x32sz');
    document.getElementById('LevelShowText').textContent = 'timer coin:'+localSave_1938;
    setTimeout(UpdateNewRecord, "1000"); //se você esta vendo este códego me desculpe mais não permitimos isto saia se  sabermos que você esta mexendo ou roubando códego nós vamos lhe abanir
}
UpdateNewRecord();

//atualizar alguns textos
document.getElementById('LevelShowText').textContent = 'timer coin:'+localSave_1938;

const templateGame = document.getElementById('gameScreen');
const templateGame2 = document.getElementById('gameScreen2');
const templateGame3 = document.getElementById('gameScreen3');
const GameTitleCont = document.getElementById('GameTitleCont');

document.getElementById('gameImage').addEventListener('mouseenter', function(event){document.getElementById('gameImage').style = 'filter: invert(20%);'});
document.getElementById('gameImage').addEventListener('mouseleave', function(event){document.getElementById('gameImage').style = 'filter: invert(0%);'});

let cg1Cloud = [
    "https://holeonline.io/data/image/posts/hole-io-online-banner1.jpg<>hole<>slIkmd",
    "https://skribbl.io/img/thumbnail.png<>skribbl<>0liJsok",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOihOMFmw-9CxDqekl_hDLs0AoqWYujuOfEg&s<>worms zone<>89nJ23",
    "https://watchdocumentaries.com/wp-content/uploads/smash-karts-game.jpg<>smash karts<>2ax785",
    "https://imgs.crazygames.com/games/krunker-io/cover-1591336739727.png?metadata=none&quality=100&width=1200&height=630&fit=crop<>krunker<>3op093",
    "https://imgs.crazygames.com/diepio/20230629173952/diepio-cover?metadata=none&quality=100&width=1200&height=630&fit=crop<>diep game io<>7Iox23",
    "https://img.gamepix.com/games/nightpoint-io/cover/nightpoint-io.png?w=400&ar=16:10<>night point<>62ki309",
    "https://img.itch.zone/aW1hZ2UvMjY3Mjk5MS8xNTkyOTg5OS5wbmc=/original/ftE9oi.png<>infinite chef<>789is2",
    "https://play-lh.googleusercontent.com/_PYtjNVw6RuhlnI8lUvOLnGHaE-7CNddeqs1xisFyhWbTJaIW2-tEM5E1iAe6tUk8K4<>sand box<>85ji02",
];

//tem que adicionar todos os jogos aqui primeiro

let cg2Cloud = [
    "https://watchdocumentaries.com/wp-content/uploads/smash-karts-game.jpg<>smash karts<>2ax785",
    "https://imgs.crazygames.com/games/ev-io/cover_16x9-1702303918732.png?metadata=none&quality=100&width=1200&height=630&fit=crop<>ev fps game<>72Xi23",
    "https://imgs.crazygames.com/games/krunker-io/cover-1591336739727.png?metadata=none&quality=100&width=1200&height=630&fit=crop<>krunker<>3op093",
    "https://imgs.crazygames.com/diepio/20230629173952/diepio-cover?metadata=none&quality=100&width=1200&height=630&fit=crop<>diep game io<>7Iox23",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOihOMFmw-9CxDqekl_hDLs0AoqWYujuOfEg&s<>worms zone<>89nJ23",
    "https://spaces.kiwigames.io/static/games/images/kirka.io-play-online.png<>kirka fps game<>27ixo20",
    "https://img.gamepix.com/games/nightpoint-io/cover/nightpoint-io.png?w=400&ar=16:10<>night point<>62ki309",
    "https://img.itch.zone/aW1hZ2UvMjY3Mjk5MS8xNTkyOTg5OS5wbmc=/original/ftE9oi.png<>infinite chef<>789is2",
    "https://www.coolmathgames.com/sites/default/files/2048_OG-logo.jpg<>2048<>28lid3",
    "https://image.stablediffusionapi.com/?quality=45&Image=https://assets.modelslab.com/generations/b2461e37-8b9d-4c31-a62d-321555a486a9-0.png<>sllides<>20930lo",
    "https://play-lh.googleusercontent.com/_PYtjNVw6RuhlnI8lUvOLnGHaE-7CNddeqs1xisFyhWbTJaIW2-tEM5E1iAe6tUk8K4<>sand box<>85ji02",
    "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2024_5_28_638525253085697115_minecraft-classic_.jpg<>minecraft classic<>10kj45",
    "https://skribbl.io/img/thumbnail.png<>skribbl<>0liJsok",
    "https://img.gamepix.com/games/slow-roads-io/cover/slow-roads-io.png?w=400&ar=16:10<>slow roads<>liIjs15",
    "https://www.stumbleguys.com/og.jpg<>stumble guys - 📱❌ <>oiKmçp",
    "https://imgs.crazygames.com/gobattleio_16x9/20240530091457/gobattleio_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop<>gobattle <>23uMlkc",
    "https://iogames.onl/upload/imgs/mope.io.jpg<>mope<>oLkdioLks",
    "https://cdn.titotu.io/images/games/lordz-io-1280x720.jpg<>Lordz<>>ai(dLox",
    "https://holeonline.io/data/image/posts/hole-io-online-banner1.jpg<>hole<>slIkmd",
    "https://cdn.titotu.io/images/games/cryzen-io-1102x620.jpg<>cryzen<>:;sçç,lsm",
    "https://iogames.onl/upload/imgs/minefun.io.jpg<>mine fun<>LmKsLx02",
    "https://cdn.webgamer.io/games/vectaria-io/vectaria-io.1280x.85pc.webp<>vectaria<>Mknslfj",
    "https://m.media-amazon.com/images/I/A1OGHmQseNL.png<>block blast<>LoGiovs",
    "https://i.ytimg.com/vi/0L885f9nUI8/maxresdefault.jpg<>space waves<>Mloi928",
    "https://imgs.crazygames.com/traffic-rider-vvq_16x9/20250526021507/traffic-rider-vvq_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop<>traffic rider<>lodmmg",
    "https://m.media-amazon.com/images/I/817F73Uj3bL.png<>count master stickman<>029387Lm",
    "https://imgs.crazygames.com/taming-io_16x9/20231110124553/taming-io_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop<>taming - 📱❌<>2lOskms",
    "https://imgs.crazygames.com/games/zombsroyaleio/cover-1587299840102.png?format=auto&quality=70&metadata=none<>zombs royale<>Likdcs",
    "data:image/png;base64,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<>defly<>Loksmmk",
    "https://imgs.crazygames.com/games/yohoho-io/cover-1585071171896.jpg?metadata=none&quality=100&width=1200&height=630&fit=crop<>yohoho<>>0(2.:;^s",
    "https://imgs.crazygames.com/paper-io-2_16x9/20250214024143/paper-io-2_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop<>paper io - 📱❌ <>gaIroa",
];

let cg3Cloud = [
    "https://cdn.titotu.io/images/games/cryzen-io-1102x620.jpg<>cryzen<>:;sçç,lsm",
    "https://spaces.kiwigames.io/static/games/images/kirka.io-play-online.png<>kirka fps game<>27ixo20",
    "https://img.gamepix.com/games/nightpoint-io/cover/nightpoint-io.png?w=400&ar=16:10<>night point<>62ki309",
    "https://imgs.crazygames.com/games/ev-io/cover_16x9-1702303918732.png?metadata=none&quality=100&width=1200&height=630&fit=crop<>ev fps game<>72Xi23",
    "https://imgs.crazygames.com/games/krunker-io/cover-1591336739727.png?metadata=none&quality=100&width=1200&height=630&fit=crop<>krunker<>3op093",
]

function TirarTelaDeLoad(){
    if(!tp == true){
        const l1 = document.getElementById('load1');
        const l2 = document.getElementById('load2');
        l1.remove();
        l2.remove();
    }
}

setTimeout(TirarTelaDeLoad, 6000);

//definir informações a mostras
document.getElementById('GameTitleCont').textContent = cg2Cloud.length+' jogos'

//listas que vão guardar os ids dos gameScreens clonados
let listaDeGame = [];
let listaDeGame2 = [];
let listaDeGame3 = [];

//definir algumas funções especificas 
function onTouchMouse(idElement){
    document.getElementById(idElement).style = "border: 2px solid white";
}

function unOnTouchMouse(idElement){
    document.getElementById(idElement).style = "border: 1px solid white";
}

//valores inportantes para a duplicação dos gameScreens


let x = cg1Cloud.length;
let x2 = cg2Cloud.length;
let x3 = cg3Cloud.length;

let y = 0;
let y2 = 0;
let y3 = 0;

let i = 38;
let i2 = 38;
let i3 = 38;

function loopUpdateGame(){
    const newGame = templateGame.cloneNode(true);
    newGame.id = 'GameScreen/'+Math.random();
    listaDeGame.push(newGame.id);
    newGame.style.left = i+'vh';
    const imageGame = newGame.querySelector('#gameImage');
    const titleGame = newGame.querySelector('#gameTitle');

    let localInfo = cg1Cloud[y].split('<>');
    console.log('grup1:/'+localInfo[1]);

    //definir propiedades
    imageGame.src = localInfo[0];
    imageGame.class = "imageGame lazy";
    titleGame.textContent = localInfo[1];
    imageGame.setAttribute('onclick', "if(confirm('quer entrar no "+localInfo[1]+"')){location.href ='view.html?id="+localInfo[2]+" | "+localInfo[1]+"'}");
    document.getElementById('cg1').append(newGame)
    if(x >= 2){
        x--
        y++
        i += 36;
        setTimeout(loopUpdateGame, '200');
    }else{setTimeout(clearConsole, '100000')}
}

setTimeout(loopUpdateGame, '100');

function loopUpdateGame2(){
    const newGame2 = templateGame2.cloneNode(true);
    newGame2.id = 'GameScreen/'+Math.random();
    listaDeGame.push(newGame2.id);
    newGame2.style.left = i2+'vh';
    const imageGame2 = newGame2.querySelector('#gameImage2');
    const titleGame2 = newGame2.querySelector('#gameTitle2');

    let localInfo = cg2Cloud[y2].split('<>');
    console.log('grup2:/'+localInfo[1]);

    //definir propiedades
    imageGame2.src = localInfo[0];
    imageGame2.class = "imageGame lazy";
    titleGame2.textContent = localInfo[1];
    imageGame2.setAttribute('onclick', "if(confirm('quer entrar no "+localInfo[1]+"')){location.href ='view.html?id="+localInfo[2]+" | "+localInfo[1]+"'}");
    document.getElementById('cg2').append(newGame2);
    if(pesquisaLocal){
        document.getElementById('GameTitleCont').textContent = 'resultado da pesquisa'
        const sdp = pesquisaLocal.split('');
        console.log(sdp);
        const lis = localInfo[1].split('');
        if(sdp[0] == lis[0] && sdp[1] == lis[1] && sdp[2] == lis[2]){
            console.log('ok '+localInfo[1]);
        }else{
            newGame2.remove();
            i2 -= 36;
        }
    }

    if(x2 >= 2){
        x2--
        y2++
        i2 += 36;
        setTimeout(loopUpdateGame2, '200');
    }else{setTimeout(clearConsole, '100000');}
}
setTimeout(loopUpdateGame2, '100');

function clearConsole(){
    console.clear();
}

function loopUpdateGame3(){
    const newGame3 = templateGame3.cloneNode(true);
    newGame3.id = 'GameScreen/'+Math.random();
    listaDeGame3.push(newGame3.id);
    newGame3.style.left = i3+'vh';
    const imageGame3 = newGame3.querySelector('#gameImage3');
    const titleGame3 = newGame3.querySelector('#gameTitle3');

    let localInfo = cg3Cloud[y3].split('<>');
    console.log('grup3:/'+localInfo[1]);

    //definir propiedades
    imageGame3.src = localInfo[0];
    imageGame3.class = "imageGame lazy";
    titleGame3.textContent = localInfo[1];
    imageGame3.setAttribute('onclick', "if(confirm('quer entrar no "+localInfo[1]+"')){location.href ='view.html?id="+localInfo[2]+" | "+localInfo[1]+"'}")
    document.getElementById('cg3').append(newGame3);
    if(x3 >= 2){
        x3--
        y3++
        i3 += 36;
        setTimeout(loopUpdateGame3, '200');
    }else{setTimeout(clearConsole, '100000');}
}
setTimeout(loopUpdateGame3, '100');

function clearConsole(){
    console.clear();
}

document.addEventListener('keydown', function(event){
    if(event.key === 'q' || event.key === 'Q'){
        document.getElementById('backgroundMusic').remove();
    }
});

//verificação

console.log('___verificação de funções___')
if(loginStats){console.log('login esta ok!')}
if(listaDeBan){console.log('funcionalidade de banimento ok!')}

document.addEventListener('keydown', function(event){
    if(event.key == 'Alt'){
        const codeFree = prompt('escreva o seu códego, não tem? veja no nosso instagram ou youtube!');
        if(codeFree == '30Gamus'){const u = 200; localStorage.setItem('Key_10923', Number(localStorage.getItem('Key_10923', 'localSave-2x32sz')) + u); alert('voçê recebeu a recompença de '+u+' timers coin')}
        if(codeFree == 'player5'){const u = 500; localStorage.setItem('Key_10923', Number(localStorage.getItem('Key_10923', 'localSave-2x32sz')) + u); alert('voçê recebeu a recompença de '+u+' timers coin')}
    }
});