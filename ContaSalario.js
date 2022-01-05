import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
  constructor({cliente}) {
    super({
      agencia: 100,
      cliente,
      saldoInicial: 0
    })
  }

  sacar(valor) {
    let taxa = 1.01 // 1%
    return super._sacar(valor, taxa)
  }
}