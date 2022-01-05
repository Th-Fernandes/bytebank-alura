import { Conta } from "./Conta.js"

export class ContaPoupanca extends Conta {
  constructor({ agencia, cliente, saldoInicial}) {
    super({
      agencia,
      cliente,
      saldoInicial
    })

    this._agencia = agencia
    this._cliente = cliente
    this._saldo = saldoInicial
  }

  sacar(valor) {
    const taxa = 1.02 //2%
    return super._sacar(valor, taxa)
  }
}