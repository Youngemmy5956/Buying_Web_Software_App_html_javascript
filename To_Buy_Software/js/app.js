function buyItem(itemToBuy, nunOfItems, pricePerItem, amount){
    
    const unitPrice = pricePerItem
    let quantity = nunOfItems
    let expenseAmount = quantity * unitPrice
    let balance = amount - expenseAmount
    let keepChange = balance

    console.log(`buy ${quantity} of ${itemToBuy}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Total amount expended: ${expenseAmount}`);
    console.log(`Your balance is ${balance}`);

    // return [expenseAmount, balance]


}

// const someValue = buyItem('cake', 2, 120, 2000);

// console.log(someValue[0]);
buyItem('cake', 3, 11, 1000);