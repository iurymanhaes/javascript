function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem') 

var data = new Date()
var hora = data.getHours()
var mnt = data.getMinutes()

msg.innerHTML = `Agora são ${hora}:${mnt}`

if(hora >= 0 && hora < 12){
    img.src = 'fotomanha.png'
    document.body.style.background = '#11a35a94'
}else if(hora >=12 && hora < 18){
    img.src = 'fototarde.png'
    document.body.style.background = '#a9ac10'
}else{
    img.src = 'fotonoite.png'
    document.body.style.background = '#011652'
}

}