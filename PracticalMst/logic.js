const addButton = document.getElementById("addExpense")
const expenseShow = document.getElementById("expenseTotal")
const expenseList = document.getElementById("expenseList")
const expenseName = document.getElementById("expenseName")
const expenseAmt = document.getElementById("expenseInput")
const expenseCategory = document.getElementById("expenseCategory")

let expenseArr = []
let editIndex = -1

function renderExpenses(){

    expenseList.innerHTML = ""

    let totalExpense = 0

    expenseArr.forEach((exp,index)=>{

        totalExpense += exp.amount

        const div = document.createElement("div")

        div.innerHTML = `
        <div style="margin:10px">
        <b>${exp.name}</b> - ₹${exp.amount} - ${exp.category}

        <button onclick="deleteExpense(${index})">Delete</button>
        <button onclick="editExpense(${index})">Update</button>
        </div>
        `

        expenseList.appendChild(div)

    })

    expenseShow.innerHTML = "Total Expense: ₹" + totalExpense
}

addButton.addEventListener("click",()=>{

    const name = expenseName.value
    const amount = Number(expenseAmt.value)
    const category = expenseCategory.value

    if(editIndex === -1){

        expenseArr.push({
            name,
            amount,
            category
        })

    }else{

        expenseArr[editIndex] = {name,amount,category}
        editIndex = -1

        addButton.innerText = "Add Expense"
    }

    expenseName.value = ""
    expenseAmt.value = ""

    renderExpenses()

})

function deleteExpense(index){

    expenseArr.splice(index,1)

    renderExpenses()
}

function editExpense(index){

    const exp = expenseArr[index]

    expenseName.value = exp.name
    expenseAmt.value = exp.amount
    expenseCategory.value = exp.category

    editIndex = index

    addButton.innerText = "Update Expense"
}