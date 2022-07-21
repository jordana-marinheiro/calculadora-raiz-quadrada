function calcularRaiz()  {
    let inNumero = document.getElementById('inNumero')
    let outSaida = document.getElementById('outSaida')

    let numero = Number(inNumero.value)

    let raiz = Math.sqrt(numero)

    if (raiz === Math.floor(raiz)) {
        outSaida.innerHTML = `Raiz: ${raiz}`
    } else {
        outSaida.innerHTML = `Não há raiz exata para ${numero}`
  }

}
let btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', calcularRaiz)
