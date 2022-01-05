export class Conta {
  constructor({ agencia, cliente, saldoInicial}) {
    if(this.constructor == Conta) throw new Error('Você não pode instanciar um objeto com essa classe pois ela é abstrata.')
    
    this._agencia = agencia
    this._cliente = cliente
    this._saldo = saldoInicial    
  }

  set cliente(novoValor){
    if(novoValor instanceof Cliente){
        this._cliente = novoValor;
    }
  }

  get cliente(){
      return this._cliente;
  }

  get saldo(){
    return this._saldo
  }
  //método abstrato
  sacar(valor) {
    throw new Error('Não é possível utilizar métodos abstrattos. Defina o método diretamente na classe')
  }

  _sacar(valor, taxa) {
    if(valor < 0) return`não é possível realizar saque de valor negativo`

    if(this._saldo >= valor) {
      this._saldo -= valor * taxa
      console.log(`saque de R$ ${valor} efetuado com sucesso`)
      return valor * taxa
    }
  }

  depositar(valor) {
    if(valor <= 0) {
      return`não é possível realizar depósito de valor negativo.`
    }
    
    this._saldo += valor
    return `depósito de R$${valor} efetuado com sucesso.`
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor)

    if( typeof valorSacado == "number") {
      conta.depositar(valorSacado)
    }
  }
}
