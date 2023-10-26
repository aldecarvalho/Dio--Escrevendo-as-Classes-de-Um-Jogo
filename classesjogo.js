 class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(tipo){
      let ataque;
      if (this.tipo === 'mago'){
        ataque = 'magia';
      }
      else if( this.tipo === 'guerreiro'){
        ataque = 'espada';
      }
      else if(this.tipo === 'monge'){
        ataque = 'artes marciais';
      }
      else if(this.tipo === 'ninja'){
        ataque = 'shuriken';
      }
     
      return ataque;

    }
  }

const heroi1 = new Heroi("Jiraya", 1000, 'ninja');
const heroi2 = new Heroi("Monge Doido", 10000, 'monge');

console.log(`${heroi1.nome} é um ${heroi1.tipo} e atacou usando ${heroi1.atacar()}`);
console.log(`${heroi2.nome} é um ${heroi2.tipo} atacou usando ${heroi2.atacar()}`);