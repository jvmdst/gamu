if(localStorage.getItem('LoginPlayer')){
    window.location.href = 'index.html';
}

document.getElementById('buttonLogin').addEventListener('click', function(event){
    const name = document.getElementById('i1').value;
    const password = document.getElementById('i2').value;
    const a2312 = name.split('');
    if(a2312.includes('✔') == true){
        alert('não pode colocar caractéries que apontão ao criador ou admin');
    }else{
        const idPlayer = Math.floor(Math.random() * (100000000000000000 - 800000 + 1)) + 800000;
        localStorage.setItem('LoginPlayer', name+':::'+password+':::'+idPlayer);
        window.location.href = 'index.html';
    }
});