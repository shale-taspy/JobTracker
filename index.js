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
let filterSection = document.getElementById('filtered-section')



function count(){
    total.innerText=jobCardSection.children.length
    interviewTotal.innerText=interviewList.length
    rejectedTotal.innerText=rejectedList.length
}
count()

function toggleChange(id){
    //After click any button add the BG
    allBtn.classList.add('bg-gray-300', 'text-blue-800')
    interviewBtn.classList.add('bg-gray-300', 'text-blue-800')
    rejectedBtn.classList.add('bg-gray-300', 'text-blue-800')
    //After click any button remove the BG
    allBtn.classList.remove('bg-blue-800', 'text-white')
    interviewBtn.classList.remove('bg-blue-800', 'text-white')
    rejectedBtn.classList.remove('bg-blue-800', 'text-white')
    //Button color changing
    console.log(id)

    const selected = document.getElementById(id)

    selected.classList.remove('bg-gray-300','text-blue-800')
    selected.classList.add('bg-blue-800','text-white')
}

mainContainer.addEventListener('click',(e)=>{
    console.log(e.target.classList.contains('interview-button'))
   if(e.target.classList.contains('interview-button')){
    let parentInfo = e.target.parentNode.parentNode
   let title = parentInfo.querySelector('.title').innerText
   let role = parentInfo.querySelector('.role').innerText
   let workInfo = parentInfo.querySelector('.workInfo').innerText
   let status = parentInfo.querySelector('.status').innerText
   let description = parentInfo.querySelector('.description').innerText
    
    let allInfo = {
        title,
        role,
        workInfo,
        status,
        description
    }
    let cardExist = interviewList.find(item => item.title == allInfo.title)

    if(!cardExist){
        interviewList.push(allInfo)
        
    }
    
    
    renderInterviewList()
   }
})

function renderInterviewList(){
   
    filterSection.innerHTML = "";

    for(interview of interviewList){
        console.log(interview)
        let div = document.createElement('div')
        div.className = "shadow pt-5 mt-4"
        div.innerHTML=`
        
        <div class="pl-6 ">
                    <h1 class="text-3xl font-semibold text-[#002C5C] title">Basepoint Labs</h1>
                <p class="text-[#64748B] text-base font-medium pt-2 role">Frontend Developer</p>
                <p class="text-base font-medium text-[#64748B] pt-2.5 workInfo">Remote · Full-Time · €30k – €40k / year</p>
                <button class="text-cyan-600 bg-cyan-50 px-3 py-2 mt-5 font-semibold status">NOT APPLIED</button>
                <p class="text-base font-medium mt-3 text-[#64748B] description">Build responsive user interfaces and improve overall user experience.</p>

                <div class="flex gap-5 pb-7 pt-6">
                    <button class="px-3 py-2 text-green-600 font-semibold text-base border border-green-600 rounded-md hover:bg-green-700 hover:text-white cursor-pointer transition ease-in-out hover:scale-105">INTERVIEW</button>
                    <button class="px-3 py-2 text-red-600 font-semibold border border-red-600 rounded-md text-base cursor-pointer hover:bg-red-600 hover:text-white transition ease-in-out hover:scale-105">REJECTED</button>
                    <button class="px-3 py-2 text-black font-semibold border border-black rounded-md text-base cursor-pointer hover:bg-black hover:text-white transition ease-in-out hover:scale-105">Delete</button>
                </div>
                </div>
        
        
        
        
        `
    }
    
}



