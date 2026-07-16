console.log("TXL Website Loaded!");
const cards = document.querySelectorAll(".member-card");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

cards.forEach(card=>{
    observer.observe(card);
});
const joinBox = document.querySelector(".join-box");

const joinObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            joinBox.classList.add("show");
        }
    });
});

if(joinBox){
    joinObserver.observe(joinBox);
}
const contactBox = document.querySelector(".contact-box");

const contactObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            contactBox.classList.add("show");
        }
    });
});

if(contactBox){
    contactObserver.observe(contactBox);
}