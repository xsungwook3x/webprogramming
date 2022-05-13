// Lorem ipsum dolor sit amet consectetur adipisicing elit.

const reviews = [
    {
        id: 1,
        name:"Jack Smith",
        job: "web developer",
        img: "static/img/profile1.jpeg",
        text: "I am a web Developer."
    },
    {
        id: 2,
        name:"Anna Jones",
        job:"web developer",
        img:"static/img/profile2.jpeg",
        text:"I am a web Developer"
    }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const preBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem =0;

window.addEventListener("DOMContentLoaded" , function(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
})

let showPerson = function(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}

let showNextPerson = function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        curentItem=0
    }
    showPerson(currentItem);
}

let showPreviousPerson = function(){
    currentItem--;
    if(currentItem <0){
        curentItem=review.length-1
    }
    showPerson(currentItem);
}