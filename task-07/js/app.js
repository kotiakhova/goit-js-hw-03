'use strict'

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */
  
  const account = {
    // Текущий баланс счета
    balance: 0,
  
    // История транзакций
    transactions: [],
  
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {

        let obj = {};
        obj.id = this.transactions.length + 1;
        obj.type = type;
        obj.amount = amount;

        return obj;
    },
  
    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.balance = this.balance + amount;
        this.transactions.push(this.createTransaction(amount, 'deposit'));
    },
  
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        this.balance = this.balance - amount;
        this.transactions.push(this.createTransaction(amount, 'withdraw'));
    },
  
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance;
    },
  
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        let result;

        for (let element of this.transactions) {
            for (let key in element) {
                if (element[key] === id) {
                    result = element;
                }
            }
        }
        return result;
    },
  

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {

        let result = 0;

        for (let element of this.transactions) {
            for (let key in element) {
                if (element[key] === type) {
                    result = result + element.amount;
                }
            }
        }
        return result;
    }

  };
