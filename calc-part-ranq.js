/*Entendendo o Desafio
 
Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! 
Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. 
Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no 
GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎
 
Neste repositório, insira todos os links e arquivos necessários para seu projeto, 
seja um arquivo de banco de dados ou um link para o template no Figma.
 
Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" 
no repositório dele para organizar suas alterações e evoluções mantendo 
uma referência direta ao código-fonte original.
 
Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como 
parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, 
o saldo de Rankeadas deve ser feito através do calculo 
(vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 */
let saldoVitorias;
let nivel;
let herois = [
       {nome: 'Homem De Ferro', vitorias: 100, derrotas: 1},
       {nome: "Homem Aranha", vitorias: 200, derrotas: 5},
       {nome: "Mulher Maravilha", vitorias: 90, derrotas: 10},
       {nome: "Super Man", vitorias: 30, derrotas: 1},
       {nome: "Hulk", vitorias: 50, derrotas: 2},
       {nome: "Batman", vitorias: 20, derrotas: 0},
       {nome: "Aquaman", vitorias: 90, derrotas: 30},
       {nome: "Capitão América", vitorias: 90, derrotas: 20},
       {nome: "Homem Formigua", vitorias: 50, derrrotas: 10},
       {nome: "Formiga Atômica", vitorias: 90, derrotas: 0}
];

for(i=0; i<=herois.length; i++){
saldoVitorias = herois[i]["vitorias"] - herois[i]["derrotas"];

if(saldoVitorias <= 10){
    nivel = "Ferro";
}
else if(saldoVitorias > 10 && saldoVitorias <= 20){
    nivel = "Bronze";
}
else if(saldoVitorias > 20 && saldoVitorias <= 50){
    nivel = "Prata"
}
else if(saldoVitorias > 50 && saldoVitorias <= 80) {
    nivel = "Ouro";
}
else if(saldoVitorias > 80 && saldoVitorias <= 90){
    nivel = "Diamante";
}
else if(saldoVitorias > 90 && saldoVitorias <= 100){
    nivel = "Lendário";
}
else{
    nivel = "Imortal";
}
console.log(`O Herói ${herois[i]["nome"]} tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`)

}