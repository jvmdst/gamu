//pegar informações salvasS
const localSave_1938 = localStorage.getItem('Key_10923', 'localSave-2x32sz');

//verificar o dispositivo

const userAgent = navigator.userAgent.toLowerCase();
const isAndroid = userAgent.includes('android');
const isIOS = /(iphone|ipad|ipod)/.test(userAgent);
console.log(userAgent+'local_0288402883002:'+isAndroid+' '+isIOS);
let Mobile = false

if(isIOS == true || isAndroid == true){
    modMobileOn();
    Mobile = true;
};

function modMobileOn(){
    window.innerWidth = '768px';
    window.innerHeight = '414px ';

    //definir objetos

    const barTools = document.getElementById('BarTools');
    const icon2 = document.getElementById('icon2');
    const icon1 = document.getElementById('icon1');
    const TITL_tle1 = document.getElementById('gmViewTextGameView');
    const barGame  = document.getElementById('BarOpitionsGame');
    const b1 = document.getElementById('b1');
    const b2 = document.getElementById('b2');
    const b3 = document.getElementById('b3');
    const GFS = document.getElementById('GameFrameScreen');

    //arrumar tamanhos e posições

    barTools.style = 'width: 90%; height: 8vh; left: 2.5vh; top: 90%;';
    icon2.style = 'width: 15%; height: 7.5vh; top: 90%; left: 17%;';
    icon1.style = 'width: 16%; height: 8vh; top: 90%; left: 3%;';
    TITL_tle1.style = 'top: 70%; font-size: 150%;';
    barGame.style = 'top: 80%; width: 90%; left: 2.5vh';
    b2.style = 'left: 10.5vh;';
    b3.style = 'left: 20vh;';
    GFS.style = 'width: 96%; left: 1vh; height: 32vh; top: 1%;';
}

//verificação de informações salvas

if(localSave_1938 == "null" || localSave_1938 == null){localStorage.setItem('Key_10923', 0)};

function UpdateNewRecord(){
    localStorage.setItem('Key_10923', Number(localStorage.getItem('Key_10923', 'localSave-2x32sz')) + 50);
    const localSave_1938 = localStorage.getItem('Key_10923', 'localSave-2x32sz');
    document.getElementById('gmViewTextGameView').textContent = 'gm coin:'+localSave_1938;
    setTimeout(UpdateNewRecord, "1000"); //se você esta vendo este códego me desculpe mais não permitimos isto saia se  sabermos que você esta mexendo ou roubando códego nós vamos lhe abanir
}
UpdateNewRecord();

const searchParams = new URLSearchParams(location.search);
const id = searchParams.get('id');
const screenGame = document.getElementById('GameFrameScreen');

let tamanhoDeScreen = false;

function fullScreen(){
    screenGame.style = "left: 0vh; top: 0vh; width: 100%; height: 100%; position: fixed; border-radius: 0px;";
    const botaoRestart = document.createElement('input');
    botaoRestart.style = `    width: 8vh;
    height: 8vh;
    position: fixed;
    background-color: rgb(0, 1, 49);
    border-radius: 10px;
    border: 1px solid white;`
    document.getElementById('cotainer').appendChild(botaoRestart);
    botaoRestart.type = 'image';
    botaoRestart.addEventListener('click', function(event){
        screenGame.style = 'width: 96%; left: 1vh; height: 32vh; top: 1%;';

    if(Mobile == false){        tamanhoDeScreen = false;
        screenGame.style = `        position: absolute;
    width: 61%;
    height: 65%;
    left: 15vh;
    border-radius: 10px;
    background-color: rgb(0, 1, 41);`}

        botaoRestart.remove();
    });
    botaoRestart.src = 'imagepage/localIcons/close_fullscreen_103dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.png'
}


function unfullScreen(){
    screenGame.style = `        position: absolute;
    width: 61%;
    height: 65%;
    left: 15vh;
    border-radius: 10px;
    background-color: rgb(0, 1, 41);`  
}

//atalhos e teclas
document.addEventListener('keydown', function(event){
    if(event.key === 'f' && tamanhoDeScreen == false){
        fullScreen();
        tamanhoDeScreen = true;
    }
});

//verificar o id do jogo e colocar o jogo no fullscreen

if(id == null){
    location.href='index.html';
}else{
    if(id == '2ax785'){screenGame.src = 'https://smashkarts.io/';};
    if(id == '3op093'){screenGame.src = 'https://krunker.io';};
    if(id == '72Xi23'){screenGame.src = 'https://ev.io';};
    if(id == '7Iox23'){screenGame.src = 'https://diep.io';};
    if(id == '89nJ23'){screenGame.src = 'https://worms.zone/game/web/';};
    if(id == '27ixo20'){screenGame.src = 'https://kirka.io/';};
    if(id == '62ki309'){screenGame.src = 'https://nightpoint.io/';};
    if(id == '789is2'){screenGame.src = 'https://r74n.com/cook/';};
    if(id == '85ji02'){screenGame.src = 'https://sandboxels.r74n.com/';};
    if(id == '10kj45'){screenGame.src = 'https://classic.minecraft.net/';};
    if(id == '28lid3'){screenGame.src = 'https://2048game.com/pt/';};
    if(id == '20930lo'){screenGame.src = 'https://sllides.com/';};
    if(id == '0liJsok'){screenGame.src = 'https://skribbl.io/';};
    if(id == 'liIjs15'){screenGame.src = 'https://slowroads.io/';};
}if(id ===''){location.href='index.html'}