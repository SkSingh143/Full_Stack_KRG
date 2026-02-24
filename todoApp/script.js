

const orderedList = document.getElementById("ol");
const inputBox = document.querySelector("input");
const Button = document.querySelector("button");
let i=0;
Button.addEventListener("click",()=>{
    i++;
   const task = inputBox.value
   const li =document.createElement("li")
    li.setAttribute("id",i)
   const p = document.createElement("p")
   const delButton = document.createElement("button")
   const completeButton =document.createElement("button")
   completeButton.innerText = "complete"
   completeButton.setAttribute("id",`${i}cb`)
   delButton.setAttribute("id",`${i}db`)
   p.setAttribute("li",`${i}p`)
   delButton.innerText="delete"
   p.innerText = task ;
   li.appendChild(p)
   li.appendChild(delButton)
   li.appendChild(completeButton)

   completeButton.addEventListener('click',(e)=>{
     const buttonId = e.target.id
     console.log(buttonId);
     
     const p =document.getElementById(`${buttonId}p`)
     
     console.log(p);
     
     
    //  p.innerHTML=`<strike>${text}</strike>`
     
     
   })
   

   orderedList.appendChild(li)
    inputBox.value =null
})
