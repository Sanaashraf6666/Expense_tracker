const expenseList = document.getElementById("expense-list");
const totalExpense= document.getElementById("total-expense");
const addExpenseBtn = document.getElementById("add-expense-btn");
const expenseTypeInput = document.getElementById("expense-type");
const expenseDescriptionInput = document.getElementById("expense-description");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseDateInput = document.getElementById("expense-date");
const expenseTimeInput = document.getElementById("expense-time");

addExpenseBtn.addEventListener("click", () => {
    const desc = expenseDescriptionInput.value;
    const amt = expenseAmountInput.value;
    const type = expenseTypeInput.value;
    const date = expenseDateInput.value;
    const time = expenseTimeInput.value;

   if (desc && amt) {
    createExpenseItem(desc, amt, type, date || "-", time || "-");
}

});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addExpenseBtn.click();
  }
});



let total=0
function updateTotal(){
document.getElementById("total-amount").textContent = total;
}
function createExpenseItem(description,amount,type,date,time){
    const listItem = document.createElement("li");  
    listItem.className = "expense-item";
    listItem.innerHTML = `
        <span class="expense-type">${type}</span>
        <span class="expense-description">${description}</span>
        <span class="expense-amount">Rs. ${amount}</span>
        <span class="expense-date">${date}</span>
        <span class="expense-time">${time}</span>
    `;
    expenseList.appendChild(listItem);
    total += parseFloat(amount);
    updateTotal();
}