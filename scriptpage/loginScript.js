
//verificar o dispositivo

const userAgent = navigator.userAgent.toLowerCase();
const isAndroid = userAgent.includes('android');
const isIOS = /(iphone|ipad|ipod)/.test(userAgent);
console.log(userAgent+'local_0288402883002:'+isAndroid+' '+isIOS);
let Mobile = false

if(isIOS == true || isAndroid == true){
    Mobile = true;
    document.getElementById('buttonLogin').style.width = '97%';
    document.getElementById('log-display').style.height = '82%';
};

if(localStorage.getItem('LoginPlayer')){
    window.location.href = 'index.html';
}

document.getElementById('SelectL').addEventListener('change', function(event){
    console.log(document.getElementById('SelectL').value);
});

document.getElementById('buttonLogin').addEventListener('click', function(event){
    const name = document.getElementById('i1').value;
    const password = document.getElementById('i2').value;
    const a2312 = name.split('');
    if(a2312.includes('✔') == true){
        alert('não pode colocar caractéries que apontão ao criador ou admin');
    }else{
        if(a2312.length >= 12){
            alert('o nome tem que te menos de 12 caractérie');
        }else{
            const idPlayer = Math.floor(Math.random() * (100000000000000000 - 10000000 + 1)) + 10000000;
            localStorage.setItem('LoginPlayer', name+':::'+password+':::'+idPlayer+':::'+document.getElementById('SelectL').value+':::'+document.getElementById('inputDate').value);
            window.location.href = 'index.html';
        }
    }
});