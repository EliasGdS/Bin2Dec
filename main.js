function converter() {
    const nbin = document.getElementById('bnum').value;
    if (nbin === '') return alert('É necessário inserir um número binário para a conversão.');
    if (nbin.length > 8) return alert('Foi excedito o limite de 8 dígitos para a conversão.');

    nbin.split('').map(function(char){
        if (char !== '0' && char !== '1') return alert('O valor inserido não é binário.');
        else{
            const ndec = parseInt(nbin, 2);
            document.getElementById('dnum').value = ndec;
            return true;
        }
    });
}
