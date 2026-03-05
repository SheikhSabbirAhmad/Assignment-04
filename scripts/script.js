let interviewList = [];
let rejectedList = [];
let currentStatus = 'all-filter-btn';

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');
let totalJobs = document.getElementById('totalJobs');

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const allCards = document.getElementById('allCards');

const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');


function calculateCount() {
    const jobCards = allCards.querySelectorAll('.card');
    const totalCards = jobCards.length;

    total.innerText = totalCards;
    totalJobs.innerText = totalCards;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    const existingEmpty = document.getElementById('empty-state');

    if (totalCards === 0 && currentStatus === 'all-filter-btn') {
        if (!existingEmpty) {
            allCards.appendChild(renderEmptyState());
        }
    } else {
        if (existingEmpty) existingEmpty.remove();
    }
}

calculateCount();

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-[#3B82F6]' , 'text-white');
    interviewFilterBtn.classList.remove('bg-[#3B82F6]' , 'text-white');
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]' , 'text-white');

    allFilterBtn.classList.add('bg-[#FFFFFF]' , 'text-[#64748B]');
    interviewFilterBtn.classList.add('bg-[#FFFFFF]' , 'text-[#64748B]');
    rejectedFilterBtn.classList.add('bg-[#FFFFFF]' , 'text-[#64748B]');

    const selected = document.getElementById(id);

    currentStatus = id;

    selected.classList.remove('bg-[#FFFFFF]' , 'text-[#64748B]');
    selected.classList.add('bg-[#3B82F6]' , 'text-white');   //okkk

    if(id === 'interview-filter-btn'){
        allCards.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview()
    }
    else if(id === 'all-filter-btn'){
        allCards.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
    else if(id === 'rejected-filter-btn'){
        allCards.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
    }
}



mainContainer.addEventListener('click', function (event){

     if (event.target.classList.contains('interview-btn')) {

        const card = event.target.closest('.card');

        const jobName = card.querySelector('.jobName').innerText;
        const jobPostName = card.querySelector('.jobPostName').innerText;
        const location = card.querySelector('.location').innerText;
        const notes = card.querySelector('.notes').innerText;

        card.querySelector('.status').innerText = 'Interview';

        const cardInfo = {
            jobName,
            jobPostName,
            location,
            status: 'Interview',
            notes
        };

        if (!interviewList.find(item => item.jobName === jobName)) {
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item => item.jobName !== jobName);

        if (currentStatus === 'rejected-filter-btn') {
            renderRejected();
        }

        calculateCount();
    }

    
    else if (event.target.classList.contains('rejected-btn')) {

        const card = event.target.closest('.card');

        const jobName = card.querySelector('.jobName').innerText;
        const jobPostName = card.querySelector('.jobPostName').innerText;
        const location = card.querySelector('.location').innerText;
        const notes = card.querySelector('.notes').innerText;

        card.querySelector('.status').innerText = 'Rejected';

        const cardInfo = {
            jobName,
            jobPostName,
            location,
            status: 'Rejected',
            notes
        };

        if (!rejectedList.find(item => item.jobName === jobName)) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.jobName !== jobName);

        if (currentStatus === 'interview-filter-btn') {
            renderInterview();
        }

        calculateCount();
    }

    
    else if (event.target.closest('.btn-delete')) {

        const card = event.target.closest('.card');
        const jobName = card.querySelector('.jobName').innerText;

        card.remove();

        interviewList = interviewList.filter(item => item.jobName !== jobName);
        rejectedList = rejectedList.filter(item => item.jobName !== jobName);

        if (currentStatus === 'interview-filter-btn') renderInterview();
        if (currentStatus === 'rejected-filter-btn') renderRejected();

        calculateCount();
    }
})

function renderInterview (){
    filterSection.innerHTML = '' ;

    if (interviewList.length === 0) {
        filterSection.appendChild(renderEmptyState());
        return;
    }

    for(let interview of interviewList){
        console.log(interview);

        let div = document.createElement('div');
        div.className = 'card flex justify-between bg-[#FFFFFF] rounded-md p-5 mt-8'
        div.innerHTML = `
        <div>
                    <!-- part--1 -->
                     <div>
                        <h3 class="jobName text-[18px] font-bold text-[#002C5C]">${interview.jobName}</h3>
                        <p class="jobPostName text-[16px] font-semibold text-[#64748B] mt-2">Web Designer & Developer</p>
                        <p class="location text-[14px] font-semibold text-[#64748B] mt-5">Los Angeles, CA . Part-time . $80,000 - $120,000</p>
                     </div>
                     <!-- part--2 -->
                      <div>
                        <P class="status text-[16px] font-semibold text-[#002C5C] bg-[#F8FAFC] w-[120px] rounded-md p-2 mt-3 mb-3">${interview.status}</P>
                        <p class="notes text-[14px] font-semibold text-[#323B49]">Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.</p>
                      </div>
                      <!-- part--3 -->
                       <div class="flex gap-3 mt-5 mb-2">
                        <button class="interview-btn text-[16px] font-bold px-4 py-2 text-[#10B981] border-2 border-green-500 rounded-md bg-transparent cursor-pointer hover:bg-green-200">INTERVIEW</button>
                        <button class="rejected-btn text-[16px] font-bold px-4 py-2 text-[#EF4444] border-2 border-red-500 rounded-md bg-transparent cursor-pointer hover:bg-rose-200">REJECTED</button>
                       </div>
                 </div>
                 <!-- main part--2 -->
                  <div>
                    <button class="btn-delete bg-[#F8FAFC] p-2 rounded-full cursor-pointer hover:bg-red-400"><i class="fa-regular fa-trash-can"></i></button>
                  </div>
        `
        filterSection.appendChild(div);
    }
}

function renderRejected(){
    filterSection.innerHTML = ''

    if (rejectedList.length === 0) {
        filterSection.appendChild(renderEmptyState());
        return;
    }

    for(let rejected of rejectedList){
        console.log(rejected);

        let div = document.createElement('div');
        div.className = 'card flex justify-between bg-[#FFFFFF] rounded-md p-5 mt-8'
        div.innerHTML = `
        <div>
                    <!-- part--1 -->
                     <div>
                        <h3 class="jobName text-[18px] font-bold text-[#002C5C]">${rejected.jobName}</h3>
                        <p class="jobPostName text-[16px] font-semibold text-[#64748B] mt-2">Web Designer & Developer</p>
                        <p class="location text-[14px] font-semibold text-[#64748B] mt-5">Los Angeles, CA . Part-time . $80,000 - $120,000</p>
                     </div>
                     <!-- part--2 -->
                      <div>
                        <P class="status text-[16px] font-semibold text-[#002C5C] bg-[#F8FAFC] w-[120px] rounded-md p-2 mt-3 mb-3">${rejected.status}</P>
                        <p class="notes text-[14px] font-semibold text-[#323B49]">Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.</p>
                      </div>
                      <!-- part--3 -->
                       <div class="flex gap-3 mt-5 mb-2">
                        <button class="interview-btn text-[16px] font-bold px-4 py-2 text-[#10B981] border-2 border-green-500 rounded-md bg-transparent cursor-pointer hover:bg-green-200">INTERVIEW</button>
                        <button class="rejected-btn text-[16px] font-bold px-4 py-2 text-[#EF4444] border-2 border-red-500 rounded-md bg-transparent cursor-pointer hover:bg-rose-200">REJECTED</button>
                       </div>
                 </div>
                 <!-- main part--2 -->
                  <div>
                    <button class="btn-delete bg-[#F8FAFC] p-2 rounded-full cursor-pointer hover:bg-red-400"><i class="fa-regular fa-trash-can"></i></button>
                  </div>
        `
        filterSection.appendChild(div);
    }
}

function renderEmptyState() {
    const div = document.createElement('div');
    div.id = 'empty-state';
    div.className = 'bg-[#FFFFFF] rounded-xl p-20 text-center space-y-5 shadow-sm mt-2';

    div.innerHTML = `
        <img src="./assets/jobs.png" class="mx-auto w-20 opacity-80" />
        <h2 class="text-[24px] font-bold text-[#002C5C]">No Jobs Available</h2>
        <p class="text-[#64748B]">Check back soon for new job opportunities</p>
    `;

    return div;
}