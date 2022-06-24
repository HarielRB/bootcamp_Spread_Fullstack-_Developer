class ContaBancaria {
    //necessario criar o construtor primeiro
    // os atributos sempre são colocados aqui
    constructor(agencia, numero, tipo, saldo) {
        this._agencia = agencia;
        this._numero = numero;
        this._tipo = tipo;
        this._saldo = saldo;
    }

    // os getters e saldos poss

    get saldo() {
        return this._saldo
    }

    set Atualizarsaldo(valor) {
        this._saldo = valor
    }


    // declarando metodos
    sacar(valor) {
        if (valor > this._saldo || this._saldo === 0) {
            console.log("Operação Negada! Saldo Insuficiente")
        } else {
            this._saldo = this._saldo - valor
            console.log(`Quantia Sacada: R$ ${valor} \nSaldo Atual: R$${this._saldo}`)
        }
        return this._saldo
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        console.log(`Deposito feito com sucesso!\nSaldo Atual: R$ ${this._saldo}`)
        return this._saldo
    }

}

class ContaCorrente extends ContaBancaria {
    //
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, saldo)
        this._cartaoCredito = cartaoCredito;
        this._tipo = "Conta Corrente";
        this._saldo = saldo;
    }

    get CartaoCredito() {
        return this._cartaoCredito
    }

    set cartaoCredito(valor) {
        this.cartaoCredito = valor
    }
}

class ContaPoupanca extends ContaBancaria {
    //
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo)
        this._tipo = "Conta Poupança";
        this._saldo = saldo;
    }


}

class ContaUniversitaria extends ContaBancaria {
    //
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo)
        this._tipo = "Conta Universitaria";
        this._saldo = saldo;
    }

    sacar(valor) {
        if (valor > 500) {
            return "Operação Negada!"
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}

//const minhaConta = new ContaCorrente(1, 211, 7000, true);
//const contaUni = new ContaUniversitaria(2, 333, 3000);

const conta = new ContaBancaria(1, 19832, "Conta Corrente", 1500)