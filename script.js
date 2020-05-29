function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')
     
    if (ini.value == 0 || fim.value == 0 || pas.value ==0 ){
    res.innerHTML = ' Impossivel contar! '

    } else {
        res.innerHTML = 'contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if (p <= 0) {
            window.alert('Passo invalido! Considerando passo 1.')
            p = 1
        }

        if (i < f) {
            
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{27A1}`
            }

        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{27A1}` 
            }
        }
        res.innerHTML += `\u{1F3C1}`


    } 
}
