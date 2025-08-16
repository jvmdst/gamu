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
    document.getElementById('b3').remove();
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
    document.getElementById('NameGameText').style = `    position: absolute;
    top: 32%;
    left: 0%;
    font-size: 225%;
    color: white;`

    //arrumar tamanhos e posições

    barTools.style = 'width: 90%; height: 8vh; left: 2.5vh; top: 90%;';
    icon2.style = 'width: 15%; height: 7.5vh; top: 90%; left: 17%;';
    icon1.style = 'width: 16%; height: 8vh; top: 90%; left: 3%;';
    TITL_tle1.style = 'top: 88%; font-size: 150%;';
    barGame.style = 'top: 80%; width: 90%; left: 2.5vh';
    b2.style = 'left: 10.5vh;';
    b3.style = 'left: 20vh;';
    GFS.style = 'width: 100%; left: 0vh; height: 32vh; top: 0%; border-radius: 0px;';
}

//verificação de informações salvas

if(localSave_1938 == "null" || localSave_1938 == null){localStorage.setItem('Key_10923', 0)};

function UpdateNewRecord(){
    localStorage.setItem('Key_10923', Number(localStorage.getItem('Key_10923', 'localSave-2x32sz')) + 50);
    const localSave_1938 = localStorage.getItem('Key_10923', 'localSave-2x32sz');
    document.getElementById('gmViewTextGameView').textContent = 'gm coin:'+localSave_1938;
    if(Mobile == true){
        document.getElementById('gmViewTextGameView').textContent = 'gm coin:'+localSave_1938+' | vire a tela';
    }
    setTimeout(UpdateNewRecord, "1000"); //se você esta vendo este códego me desculpe mais não permitimos isto saia se  sabermos que você esta mexendo ou roubando códego nós vamos lhe abanir
}
UpdateNewRecord();

const searchParams = new URLSearchParams(location.search);
const id = searchParams.get('id');
const screenGame = document.getElementById('GameFrameScreen');

const idPreparado = id.split(' | ');
document.getElementById('NameGameText').textContent = idPreparado[1];

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
    top: 0vh;
    background-color: rgb(0, 1, 41);`}

        botaoRestart.remove();
    });
    botaoRestart.src = 'imagepage/localIcons/close_fullscreen_103dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.png';
    if(Mobile == true){
        botaoRestart.remove();    
    }
}


function unfullScreen(){
    screenGame.style = `        position: absolute;
    width: 61%;
    height: 65%;
    left: 15vh;
    border-radius: 10px;
    background-color: rgb(0, 1, 41);`  
}

function unfullScreenMobile(){
    screenGame.style = 'width: 100%; left: 0vh; height: 32vh; top: 0%; border-radius: 0%;';
}

//atalhos e teclas
document.addEventListener('keydown', function(event){
    if(event.key === 'f' && tamanhoDeScreen == false){
        fullScreen();
        tamanhoDeScreen = true;
    }
});

//verificar se mudou o eicho do celular
screen.orientation.addEventListener('change', function(event){
    if(screen.orientation.type.includes('landscape')){
        fullScreen();
    }else{
        if(screen.orientation.type.includes('portrait')){
            if( Mobile == true){
                unfullScreenMobile();
            }
        }
    }
});

//verificar o id do jogo e colocar o jogo no fullscreen

let alertMobileSuport = 'desculpe mais o jogo selecionado não tem suporte a seu dispositivo :(';

console.log("%csamos pessoas seguras e confiaveis!", "color: green; font-size: 20px; font-weight: bold;");


if(id == null){
    location.href='index.html';
}else{
    if(idPreparado[0] == '2ax785'){screenGame.src = 'https://smashkarts.io/';};
    if(idPreparado[0] == '3op093'){screenGame.src = 'https://krunker.io';};
    if(idPreparado[0] == '72Xi23'){screenGame.src = 'https://ev.io';};
    if(idPreparado[0] == '7Iox23'){screenGame.src = 'https://diep.io';};
    if(idPreparado[0] == '89nJ23'){screenGame.src = 'https://worms.zone/game/web/';};
    if(idPreparado[0] == '27ixo20'){screenGame.src = 'https://kirka.io/';};
    if(idPreparado[0] == '62ki309'){screenGame.src = 'https://nightpoint.io/';};
    if(idPreparado[0] == '789is2'){screenGame.src = 'https://r74n.com/cook/';};
    if(idPreparado[0] == '85ji02'){screenGame.src = 'https://sandboxels.r74n.com/';};
    if(idPreparado[0] == '10kj45'){screenGame.src = 'https://classic.minecraft.net/';};
    if(idPreparado[0] == '28lid3'){screenGame.src = 'https://2048game.com/pt/';};
    if(idPreparado[0] == '20930lo'){screenGame.src = 'https://sllides.com/';};
    if(idPreparado[0] == '0liJsok'){screenGame.src = 'https://skribbl.io/';};
    if(idPreparado[0] == 'liIjs15'){screenGame.src = 'https://slowroads.io/';};
    if(idPreparado[0] == 'slIkmd'){screenGame.src = 'https://holeio.com/';};
    if(idPreparado[0] == 'oLkdioLks'){screenGame.src = 'https://Mope.io';};
    if(idPreparado[0] == '>ai(dLox'){screenGame.src = 'https://Lordz.io';};
    if(idPreparado[0] == '>0(2.:;^s'){screenGame.src = 'https://yohoho.io/'; if(Mobile == true){alert(alertMobileSuport); window.location.href = 'index.html'}};
    if(idPreparado[0] == ':;sçç,lsm'){screenGame.src = 'https://cryzen.io/play';console.log("não escute isto que foi printado pelo jogo esta plataforma é segura e nunca roubaremos alguma informação tanto que o login é local e não global não podemos saber nem seu nome apenas seu id do site não dos jogos para caso de banimento do site caso faça algo de errado e o sistema saber quem você é.")};
    if(idPreparado[0] == 'LmKsLx02'){screenGame.src = 'https://minefun.io/';};
    if(idPreparado[0] == 'Mknslfj'){screenGame.src = 'https://vectaria.io/home';};
    if(idPreparado[0] == 'Loksmmk'){screenGame.src = 'https://defly.io/';};
    if(idPreparado[0] == 'oiKmçp'){screenGame.src = 'https://www.stumbleguys.com/pt/play'; if(Mobile == true){alert(alertMobileSuport); window.location.href = 'index.html'}};
    if(idPreparado[0] == 'gaIroa'){screenGame.src = 'https://paperio.site/'; if(Mobile == true){alert(alertMobileSuport); window.location.href = 'index.html'}};
}if(idPreparado ===''){location.href='index.html'}