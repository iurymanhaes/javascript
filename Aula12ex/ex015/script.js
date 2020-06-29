function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById(`txtano`)
    var res = window.document.getElementById(`res`)

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`Verifique os dados e ene novamente!`)
    }else{
        var fsex = window.document.getElementsByName(`radse`)


    }

}