


const quotes = [
    // Inspirational Quotes
    "The best way to predict the future is to create it. – Peter Drucker",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "It always seems impossible until it’s done. – Nelson Mandela",
    
    // Motivational Quotes
    "Dream big. Start small. Act now. – Robin Sharma",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Opportunities don’t happen, you create them. – Chris Grosser",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    
    // Life Quotes
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    "Life is what happens when you’re busy making other plans. – John Lennon",
    "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
    "Life isn’t about finding yourself. It’s about creating yourself. – George Bernard Shaw",
    
    // Success Quotes
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "The secret of getting ahead is getting started. – Mark Twain",
    "Fall seven times and stand up eight. – Japanese Proverb"
];




   

// setInterval(f,3000);

const btn  = document.querySelector("button");
btn.addEventListener("click",()=>{
    const qt = document.getElementById("q");

    const idx = Math.floor(Math.random()*quotes.length);
        qt.innerHTML=quotes[idx];
})

