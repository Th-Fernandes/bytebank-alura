import { ContaCorrente } from './ContaCorrente.js'
import { Cliente } from './Clients.js'
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

  new Conta({
    agencia: 1001,
    cliente: new Cliente({
      nome: 'Heitor',
      cpf: 12312416390,
    }),
  })
] 

const test = new Conta({
  agencia: 1001,
  cliente: new Cliente({
    nome: 'Heitor',
    cpf: 12312416390,
  }),
})

test._saldo = 9000

console.log(test.sacar(500))
console.log(test)


