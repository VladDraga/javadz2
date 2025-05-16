// // 1

// const user1 = {
//   name: "Vlad",
//   age: 18,
//   hobby: "chess",
//   premium: true,
// }

// const { name, age, hobby, premium } = user1
// console.log(name, age, hobby, premium);

// // 2

// const user = {
//     name: "Vlad",
//     age: 18,
//     city: "Kiyv",
//     height: 180,
// }

// // const { name, age, city, height} = user;
// // console.log(name, age, city, height);

// // 3

// const work = {
//     vlad: 20,
//     mukola: 50,
//     lev: 100,
//     nazar: 110,
//     vlad2: 54,
//     david: 70,
// }

// // const { vlad, mukola, lev, nazar, vlad2, david} = work;
// // console.log(vlad, mukola, lev, nazar, vlad2, david);

// // 4

// const salary = {
//     vlad: 2000,
//     mukola: 5000,
//     lev: 10000,
//     nazar: 11000,
//     vlad2: 5400,
//     david: 7000,
// }

// const { vlad, mukola, lev, nazar, vlad2, david} = salary;
// console.log(vlad, mukola, lev, nazar, vlad2, david);

// // 5

// const massiv1Product = [
//     {
//         name: "apple",
//         price: 124,
//         count: 5,
//         weight: "2kg",
//     },
//     {
//         name: "banana",
//         price: 150,
//         count: 7,
//         weight: "4kg",
//     },
//     {
//         name: "strawbery",
//         price: 240,
//         count: 37,
//         weight: "3kg",
//     }
// ]

// const [ Apple, Banana, Strawbery ] = massiv1Product;
// console.log(Apple, Banana, Strawbery);



// Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
const account = {
  balance: 0, // Поточний баланс рахунку
    transactions: [],  // Історія транзакцій
    countId: 1,

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */

    createTransaction(amount, type) { // {amount: amount, type: type, id: id}
        const newTransactions = {
            amount: amount,
            type: type,
            id: this.countId,
        };
        this.countId += 1;
        return newTransactions;
  }, 
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
    deposit(amount) { // метод який додає грошу
        this.balance += amount; // плюсує гроші
        const transaction = this.createTransaction(amount, "deposit"); // створюємо об'єкт транзакції
        this.transactions.push(transaction) // запушили до масиву наш об'єкт транзакцій
  },
  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Недостатньо коштів для зняття");
            return;
        }
      this.balance -= amount; // мінусує гроші
        const transaction = this.createTransaction(amount, "withdraw"); // створюємо об'єкт транзакції
        this.transactions.push(transaction) // запушили до масиву наш об'єкт транзакцій
  },
  /*
   * Метод повертає поточний баланс
   */
    getBalance() {
      return this.balance
  },
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
    getTransactionDetails(id) {
        for (let i = 0; i < this.transactions.length; i += 1){
            const transaction = this.transactions[i];
            if (transaction.id === id) {
                return transaction
            }
        };
        return null
  },
  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
    getTransactionTotal(type) {
        let total = 0;
        for (let i = 0; i < this.transactions.length; i += 1){
            const transaction = this.transactions[i];
            if (transaction.type === type) {
                total += transaction.amount
            }
        };
        return total
  },
};

account.deposit(1000);
console.log("Ваш баланс після поповнення дорівнює: ", account.getBalance());
account.withdraw(500);
console.log("Ваш баланс після зняття дорівнює: ", account.getBalance());
account.deposit(10000);
console.log("Ваш баланс після поповнення дорівнює: ", account.getBalance());
account.withdraw(1500);
console.log("Ваш баланс після зняття дорівнює: ", account.getBalance());
account.deposit(1000);
console.log("Ваш баланс після поповнення дорівнює: ", account.getBalance());
account.withdraw(5500);
console.log("Ваш баланс після зняття дорівнює: ", account.getBalance());
const totalDepositTransactions = account.getTransactionTotal("deposit");
console.log("Загальна сума поповненнь дорівнює: ", totalDepositTransactions);
const totalWithdrawTransactions = account.getTransactionTotal("withdraw");
console.log("Загальна сума зняття дорівнює: ", totalWithdrawTransactions);
const detailsTransaction = account.getTransactionDetails(3);
console.log("Деталі транзакції", detailsTransaction);







