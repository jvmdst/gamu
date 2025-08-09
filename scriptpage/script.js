//pegar informações salvasS
const localSave_1938 = localStorage.getItem('Key_10923', 'localSave-2x32sz');

//verificação de informações salvas

if(localSave_1938 == "null" || localSave_1938 == null){localStorage.setItem('Key_10923', 0)};

function UpdateNewRecord(){
    localStorage.setItem('Key_10923', Number(localStorage.getItem('Key_10923', 'localSave-2x32sz')) + 2);
    const localSave_1938 = localStorage.getItem('Key_10923', 'localSave-2x32sz');
    document.getElementById('LevelShowText').textContent = 'gm coin:'+localSave_1938;
    setTimeout(UpdateNewRecord, "1000"); //se você esta vendo este códego me desculpe mais não permitimos isto saia se  sabermos que você esta mexendo ou roubando códego nós vamos lhe abanir
}
UpdateNewRecord();

//atualizar alguns textos
document.getElementById('LevelShowText').textContent = 'gm coin:'+localSave_1938;

const templateGame = document.getElementById('gameScreen');
const templateGame2 = document.getElementById('gameScreen2');
const templateGame3 = document.getElementById('gameScreen3');
const GameTitleCont = document.getElementById('GameTitleCont');

//sarvar jogos publicado em uma ilha

let cg1Cloud = [
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
];

let cg3Cloud = [
    "https://spaces.kiwigames.io/static/games/images/kirka.io-play-online.png<>kirka fps game<>27ixo20",
    "https://img.gamepix.com/games/nightpoint-io/cover/nightpoint-io.png?w=400&ar=16:10<>night point<>62ki309",
    "https://imgs.crazygames.com/games/ev-io/cover_16x9-1702303918732.png?metadata=none&quality=100&width=1200&height=630&fit=crop<>ev fps game<>72Xi23",
    "https://imgs.crazygames.com/games/krunker-io/cover-1591336739727.png?metadata=none&quality=100&width=1200&height=630&fit=crop<>krunker<>3op093",
]

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

let i = 44;
let i2 = 44;
let i3 = 44;

//carregar jogos

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
    titleGame.textContent = localInfo[1];
    imageGame.setAttribute('onclick', "location.href ='view.html?id="+localInfo[2]+"'");
    document.getElementById('cg1').append(newGame)
    if(x >= 2){
        x--
        y++
        i += 42;
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
    titleGame2.textContent = localInfo[1];
    imageGame2.setAttribute('onclick', "location.href ='view.html?id="+localInfo[2]+"'")
    document.getElementById('cg2').append(newGame2)
    if(x2 >= 2){
        x2--
        y2++
        i2 += 42;
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
    titleGame3.textContent = localInfo[1];
    imageGame3.setAttribute('onclick', "location.href ='view.html?id="+localInfo[2]+"'")
    document.getElementById('cg3').append(newGame3)
    if(x3 >= 2){
        x3--
        y3++
        i3 += 42;
        setTimeout(loopUpdateGame3, '200');
    }else{setTimeout(clearConsole, '100000');}
}
setTimeout(loopUpdateGame3, '100');

function clearConsole(){
    console.clear();
}