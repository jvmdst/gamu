if(localStorage.getItem('LoginPlayer')){
    window.location.href = 'index.html';
}

document.getElementById('buttonLogin').addEventListener('click', function(event){
    const name = document.getElementById('i1').value;
    const password = document.getElementById('i2').value;
    localStorage.setItem('LoginPlayer', name+':::'+password);
    window.location.href = 'index.html';
});