let interviewList=[]
let rejectedList=[]

let total=document.getElementById('total')
let interviewTotal=document.getElementById('interviewTotal')
let rejectedTotal=document.getElementById('rejectedTotal')
let allCardsSection=document.getElementById('allCards')
let jobCardSection=document.getElementById('jobCards')
let allBtn = document.getElementById('all-btn')
let interviewBtn = document.getElementById('interview-btn')
let rejectedBtn = document.getElementById('rejected-btn')

const mainContainer=document.querySelector('main')



function count(){
    total.innerText=jobCardSection.children.length
    interviewTotal.innerText=interviewList.length
    rejectedTotal.innerText=rejectedList.length
}
count()

function toggleChange(id){
    allBtn.classList.add('bg-gray-300', 'text-blue-800')
    interviewBtn.classList.add('bg-gray-300', 'text-blue-800')
    rejectedBtn.classList.add('bg-gray-300', 'text-blue-800')

    allBtn.classList.remove('bg-blue-800', 'text-white')
    interviewBtn.classList.remove('bg-blue-800', 'text-white')
    rejectedBtn.classList.remove('bg-blue-800', 'text-white')

    console.log(id)

    const selected = document.getElementById(id)

    selected.classList.remove('bg-gray-300','text-blue-800')
    selected.classList.add('bg-blue-800','text-white')
}


