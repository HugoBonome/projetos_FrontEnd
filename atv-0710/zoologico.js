class Animal{
    #tipo;
    #nome;
    #som;
    static quantidadeCriada = 0;
    constructor(){
        if(new.target === Animal){
            throw new Error("A classe animal não pode ser instanciada")
        }
    }
    get tipo(){
        return this.#tipo
    }
    get nome(){
        return this.#nome;
    }
    get som(){
        return this.#som;
    }
    set tipo(tipo){
        this.#tipo = tipo;
    }    
    set nome(nome){
        this.#nome = nome;
    }
    set som(som){
        this.#som = som;
    }
    emitirSom(){
        throw new Error('deve ser implementado (metodo)')
    }
    locomover(){
        throw new Error('deve ser implementado (metodo)')
    }
    comer(){
        throw new Error('deve ser implementado (metodo)')
    }
    informarTipo(){
        throw new Error('deve ser implementado (metodo)')
    }
    
    static getQuantidadeCriada(){
        console.log(this.quantidadeCriada)
        return Animal.quantidadeCriada
    }

    static adicionaAnimal(){
        return this.quantidadeCriada++;
    }
}
// let bicho = new Animal()
Animal.getQuantidadeCriada();

class Elefante extends Animal{
    constructor(nome){
        super();
        this.tipo = 'Elefante';
        this.nome = 'valdivia';
        this.som = 'Aqui é palmeiras';
        Animal.adicionaAnimal;
    }
    
    emitirSom(){
        console.log(`${this.nome} faz ${this.som}`)
    }
    locomover(){
        console.log('elefante andando')
    }
    comer(){
        console.log(`O elefante ${this.nome} com sua linda tromba alcança uma folha no alto de uma arvore e se delicia com o frescor da flora africana`)
    }
    informarTipo(){
        console.log('Elephas maximus')
    }
}
let e = new Elefante('Jorge')
Elefante.informarTipo();
Elefante.locomover();
Elefante.comer();
Elefante.emitirSom();
