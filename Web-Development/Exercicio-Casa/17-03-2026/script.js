/*console.log("Juan")
console.info('informação')
console.warn("Aviso")
console.error("erro")

let texto = "Olá"
console.log("nome ="+ " " + texto+ " " + "tipo:" + typeof(texto))

let numero = 43
("nome ="+ " " + numero + " " + "tipo:" + typeof(numero))

let isComplete = false
console.log("numero="+ isComplete+ "tipo"+ typeof(isComplete))

let SemValor=undefined
console.log("numero="+ SemValor+ "tipo"+ typeof(SemValor))

let nulo=null
console.log("nulo="+ nulo+ "tipo"+ typeof(nulo))

let uniqueId = symbol ("id")
console.log(typeof
(uniqueId))
console.log(uniqueId)

let bigNumero = 93490293480293409238n 
console.log("bigNumero=" + bigNumero+ "tipo"+ typeof(bigNumero))

let task = {
    //Propriedade 1
  id: 1,
  //Propriedade 2
  title: "Aprender JavaScript",
  //Propriedade 3
  completed: false,
  //Propriedade 4 (duas propriedades 4,5)
  assignee: {
    name: "João",
    //Propriedade 5
    email: "joao@example.com"
  },
  toggleComplete() {
    this.completed = !this.completed;
  }
};

let tasks = [{
    //Propriedade 1
  id: 1,
  //Propriedade 2
  title: "Aprender JavaScript",
  //Propriedade 3
  completed: false,
  //Propriedade 4 (duas propriedades 4,5)
  assignee: {
    name: "João",
    //Propriedade 5
    email: "joao@example.com"
  },
  toggleComplete() {
    this.completed = !this.completed;
  }}]*/

    let hoje = new Date()
    console.log(hoje)

    let amanha = new Date ("17-03-2026")
    console.log (amanha)

    //valida o numero digitado como no numero de telefone
    let pattern = /^\+55\(\d{2}\)\d{4,5}\-\d{4}$/;
console.log(pattern.test("+55(11)92299-0899")); // true
console.log(pattern.test("+55(11)2299-0899"));  // false

console.log(Number("42"))
console.log("42")
console.lob(parseInt("42"))
console.lob(parseFloat("42.2"))

let a = 10
let b = 3

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000
        
let contador = 0;
console.log(++contador); // 1 (pré-incremento)
console.log(contador++); // 1 (pós-incremento, agora contador = 2)
        