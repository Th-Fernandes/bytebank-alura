import { ContaCorrente } from './ContaCorrente.js'
import { Cliente } from './Clients.js'
import {ContaSalario} from './ContaSalario.js'
import { Conta } from './Conta.js'
import { ContaPoupanca } from './ContaPoupanca.js'


const contas = [
  new ContaCorrente({
    agencia: 1001,
    cliente: new Cliente({
      nome: 'Thiago', 
      cpf: 3289024890890
    }),
    saldoInicial: 900
  }),

  new ContaPoupanca({
    agencia: 1001,
    cliente: new Cliente({
      nome: 'Heitor',
      cpf: 12312416390,
    }),
    saldoInicial: 900
  }),

  new ContaSalario({
    cliente: new Cliente({
      nome: 'Fábio Melo',
      cpf: 9078907907,
    }),
  })
] 


console.log(contas[2])
//console.log(contas[1].sacar(300))
console.log(contas[2].depositar(3500.34))
console.log(contas[2].sacar(350.34))
console.log(contas[2])