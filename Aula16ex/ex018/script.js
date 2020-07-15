let num = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100 ){
        return true
    }else{
        return false
        }

}

function inLista(n , l){
    if(l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
        }

}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
            valores.push(Number(num.value))
            let item = window.document.createElement('option')
            item.text = `Valor ${num.value} adicionado.`
            lista.appendChild(item)
            res.innerHTML = ''
        }else{
            window.alert('Valor inválido ou já encontrado na lista.')
        }
        num.value = ''
        num.focus()

}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total  = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let i in valores){
            soma += valores[i]
            if(valores[i] > maior)
                maior = valores[i]
            if(valores[i] < menor)
            menor = valores[i]
        }

        media = soma / total

        res.innerHTML = ''
        res.innerHTML +=`<p>Quantidade de números cadastrados : ${total}</p>`
        res.innerHTML += `<p> O maior número da lista é : ${maior}</p>`
        res.innerHTML += `<p>O menor número da lista é : ${menor} </p>`
        res.innerHTML += `A soma de todos os valores da lista : ${soma}`
        res.innerHTML += `<p>A média dos números da lista é : ${media}</p>`
    }
}