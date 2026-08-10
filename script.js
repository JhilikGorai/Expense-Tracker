const description = document.querySelector("#desc");
const type = document.querySelector("#type");
const amount = document.querySelector("#amount");
const addBtn = document.querySelector("#add-btn");
const transactionList = document.querySelector("#transaction-list");

let transactions = [];

addBtn.addEventListener("click", () => {
    const newTransaction = {
        description: description.value ,
        type: type.value,
        amount: Number(amount.value),
        date: new Date().toLocaleDateString("en-US")
    };
    transactions.push(newTransaction);
    console.log(transactions);
    description.value = "";
    type.selectedIndex = 0;
    amount.value = "";

    renderTransactions();
    updateSummary();
});

function renderTransactions() {
    const rows = transactions.map((transaction) => {
        return ` <div class="transaction-row">
                    <span>${transaction.description}</span>
                    <span>${transaction.type}</span>
                    <span>${transaction.amount}</span>
                    <span>${transaction.date}</span>
                </div>
        `;
    });
    transactionList.innerHTML = rows.join("");

}
    renderTransactions();

function updateSummary () {
    const income = transactions
    .filter (transaction => transaction.type === "income")
    .reduce ((total, transaction) => total + transaction.amount, 0);

    console.log("Income:" , income);

    const expense = transactions
    .filter (transaction => transaction.type === "expense")
    .reduce ((total, transaction) => total + transaction.amount, 0);

    console.log("Expense:" , expense);

    document.querySelector("#income-amount").textContent = `₹${income}`;
    document.querySelector("#expense-amount").textContent = `₹${expense}`;

    const balance = income - expense ;
    document.querySelector("#balance-amount").textContent = `₹${balance}`;

    
}

