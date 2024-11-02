enum TipoAnimal {
    BALEIA = "Baleia",
    ELEFANTE = "Elefante"
}

abstract class Animal{
    
    static quantidadeCriada = 0;
    
    constructor(        
        private _tipo: TipoAnimal,
        private _nome: string,
        private _som: string,
    ){}
    get tipo(): string {
        return this._tipo
    }
    get nome(){
        return this._nome;
    }
    get som(){
        return this._som;
    }
    set tipo(tipo: TipoAnimal){
        this._tipo = tipo;
    }    
    set nome(nome: string){
        this._nome = nome;
    }
    set som(som: string){
        this._som = som;
    }
    abstract emitirSom(): void;


    abstract locomover(): void;

    abstract comer(): void;

    abstract informarTipo(): void;
        
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
    constructor(nome: string, tipo: TipoAnimal, som: string){
        super(TipoAnimal.ELEFANTE, nome,'Aqui é palmeiras' )
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
