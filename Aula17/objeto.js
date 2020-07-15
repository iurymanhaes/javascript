let amigo = {
    nome:'José',
    peso : 85.4,
    sexo : 'Masculino',
    engondar(p = 0){
        this.peso +=p
    }
}
amigo.engondar(2) 
console.log(`${amigo.nome} pesa ${amigo.peso}Kgs`)
