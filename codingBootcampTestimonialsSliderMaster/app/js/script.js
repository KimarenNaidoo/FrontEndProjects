const person = document.querySelector(".image");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const profile = document.getElementById("profile");
const quote = document.getElementById("quote");
const name1 = document.getElementById("name");
const position = document.getElementById("position");

prev.addEventListener("click" ,function(){
   
    if(person.classList.contains("tanya")){
        console.log("tanya");
        profile.src = "images/image-john.jpg";
        person.classList.remove("tanya");
        person.classList.add("john");
        quote.innerHTML = "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
        name1.innerHTML = "John Tarkpor";  
        position.innerHTML = "Junior Front-end Developer";   
    }
    else{
        console.log("john");
        profile.src = "images/image-tanya.jpg";
        person.classList.remove("john");
        person.classList.add("tanya");
        quote.innerHTML = "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"
        name1.innerHTML = "Tanya Sinclair";
        position.innerHTML = "UX Engineer";
    }
});

next.addEventListener("click", function(){
    if(person.classList.contains("tanya")){
        console.log("tanya");
        profile.src = "images/image-john.jpg";
        person.classList.remove("tanya");
        person.classList.add("john");
        quote.innerHTML = "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
        name1.innerHTML = "John Tarkpor";
        position.innerHTML = "Junior Front-end Developer"; 
    }
    else{
        console.log("john");
        profile.src = "images/image-tanya.jpg";
        person.classList.remove("john");
        person.classList.add("tanya");
        quote.innerHTML = "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"
        name1.innerHTML = "Tanya Sinclair";
        position.innerHTML = "UX Engineer";
    }
});