function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById(`txtano`)
    var res = window.document.getElementById(`res`)

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`Verifique os dados e ene novamente!`)
    }else{
        var fsex = window.document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = window.document.createElement (`img`)
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            genero = `Homem`
                if(idade >= 0 && idade <= 10){
                    genero = 'Criança'   
                    img.setAttribute('src','foto-bebe-masc.jpg')

                }else if(idade < 21){
                    genero = 'Adolescente'   
                    img.setAttribute('src','foto-jovem-m.jpg')

                }else if(idade < 50){
                    genero = 'Adulto'   
                    img.setAttribute('src','foto-adulto-m.jpg')

                }else{
                    genero = 'Idoso'   
                    img.setAttribute('src','foto-idoso-m.jpg')

                }                        
        }else if(fsex[1].checked){
            genero = `Mulher`
            if(idade >= 0 && idade <= 10){
                genero = 'Criança'   
                img.setAttribute('src','foto-bebe-femi.jpg')

            }else if(idade < 21){
                genero = 'Adolescente'   
                img.setAttribute('src','foto-jovem-f.jpg')

            }else if(idade < 50){
                genero = 'Adulta'   
                img.setAttribute('src','foto-adulto-f.jpg')

            }else{
                genero = 'Idosa'   
                img.setAttribute('src','foto-idoso-f.jpg')

            }    
        
        }    
        res.style.textAlign = `center`
        res.innerHTML = (`Detectamos ${genero} com ${idade}`)
        res.appendChild(img)
    }

}