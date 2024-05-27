/*3. Create a class called BankAccount with properties accountNumber and balance. 
Add methods called deposit and withdraw that update the balance.*/

class bankAccount
{
    constructor(acntno,balance)
    {
        this.acntno=acntno
        this.balance=balance
    }

    deposit(depo)
    {
        var balance=this.balance+depo
        this.balance=balance
       console.log(balance)
    }

    withdraw(wd)
    {
       var balance=this.balance-wd
       this.balance=balance
        console.log(balance)
    }
}

let praveen= new bankAccount(12345,55000)
praveen.deposit(3000)
praveen.withdraw(1500)
