const form = document.querySelector("form");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const data = new FormData(form);
    console.log(Array.from(data.keys()),Array.from(data.values()));
})