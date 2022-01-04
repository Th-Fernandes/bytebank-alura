import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta {
  static numeroDeContas = 0

  constructor({agencia, cliente}) {
    super({
      agencia,
      cliente,
      saldoInicial: 0
    })

    ContaCorrente.numeroDeContas++
  }
  //sobrescrevendo o compartamento padrão de sacar da classe pai (Conta)
  sacar(valor) {
    let taxa = 1.1
    return super._sacar(valor, taxa)
  }
}
