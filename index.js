let interviewList=[]
let rejectedList=[]

let total=document.getElementById('total')
let interviewTotal=document.getElementById('interviewTotal')
let rejectedTotal=document.getElementById('rejectedTotal')
let allCardsSection=document.getElementById('allCards')
let jobCardSection=document.getElementById('jobCards')

const mainContainer=document.querySelector('main')


function count(){
    total.innerText=jobCardSection.children.length
    interviewTotal.innerText=interviewList.length
    rejectedTotal.innerText=rejectedList.length
}
count()

let button = document.getElementById("button-interview")

