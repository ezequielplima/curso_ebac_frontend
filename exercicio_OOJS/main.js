function LojaCarros(carro,preco){
    this.carro = carro;
    this.preco = preco;
}

const loja = new LojaCarros("uno", 20000);


function Vendedor(nome){
    this.nome = nome;
    LojaCarros.call(this,loja.carro, loja.preco);
}
const vendedor = new Vendedor("eze");

function Comprador(nome1){
    this.nome1 = nome1;
    LojaCarros.call(this, loja.carro, loja.preco);
    Vendedor.call(this, vendedor.nome)
    this.comprar = function comprar () {
        console.log(`${this.nome1} comprou o carro ${this.carro} por R$${this.preco}`);
    };
}
const cliente2 = new Comprador("Pedro");


console.log(vendedor);
console.log(cliente2);
cliente2.comprar();