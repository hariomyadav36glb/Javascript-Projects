// based on month
// 12
    const zodiac = [
        "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
        "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
    ];
//   31 -> Based on date
    const compliments = [
        "You have an amazing smile!",
        "Your positivity is infectious.",
        "You're incredibly kind and thoughtful.",
        "You light up every room you walk into.",
        "You're an inspiration to those around you.",
        "You have a heart of gold.",
        "Your creativity knows no bounds.",
        "You're a fantastic listener.",
        "You always know how to make people feel special.",
        "You're a natural leader.",
        "Your kindness makes the world a better place.",
        "You're full of great ideas.",
        "You're an amazing friend.",
        "Your confidence is inspiring.",
        "You have a great sense of humor.",
        "You bring out the best in others.",
        "You're truly one of a kind.",
        "Your hard work never goes unnoticed.",
        "You're a ray of sunshine.",
        "You make life more fun.",
        "You're so talented at what you do.",
        "You radiate positivity.",
        "Your energy is contagious.",
        "You're an amazing problem solver.",
        "You have a unique and wonderful perspective.",
        "You're a true gem.",
        "You have such a warm and welcoming presence.",
        "You're strong and resilient.",
        "You're a joy to be around.",
        "You make the world brighter just by being in it.",
        "You're an absolute legend!"
    ];

    const victimCards = [
        "You always help others, but no one helps you when you need it.",
        "You always listen to everyone's problems, but no one listens to yours.",
        "You always support others, but they never support you back.",
        "You always put others first, but they never do the same for you.",
        "You always remember everyone's special days, but they forget yours.",
        "You always check on your friends, but no one checks on you.",
        "You always make time for others, but they are always too busy for you.",
        "You always give your best, but no one appreciates it.",
        "You always care for others, but no one truly cares for you.",
        "You always go the extra mile, but people take it for granted.",
        "You always forgive people, but they never value your kindness.",
        "You always stay loyal, but others betray you.",
        "You always understand others, but no one tries to understand you.",
        "You always give second chances, but you never get one.",
        "You always make sacrifices, but people don’t notice.",
        "You always share happiness, but you are left alone in sadness.",
        "You always encourage others, but you never receive encouragement.",
        "You always stand by people in tough times, but they leave when you need them.",
        "You always try to make others happy, but you end up hurting yourself.",
        "You always put in effort, but no one appreciates it."
    ];

    const lifeRecommendations = [
        "Feed a stray dog or cat to spread kindness.",
        "Start your day with gratitude to stay positive.",
        "Drink plenty of water to keep yourself healthy.",
        "Exercise regularly to stay fit and active.",
        "Read a book every month to expand your knowledge.",
        "Spend quality time with family and friends.",
        "Practice mindfulness to reduce stress.",
        "Help someone in need without expecting anything in return.",
        "Smile often, it makes a big difference.",
        "Learn a new skill to keep growing.",
        "Avoid negativity and focus on what makes you happy.",
        "Donate old clothes to those in need.",
        "Plant a tree to contribute to the environment.",
        "Limit screen time and enjoy nature more.",
        "Wake up early to have a productive day.",
        "Listen more, talk less to understand people better.",
        "Be kind to yourself, self-care is important.",
        "Celebrate small achievements to stay motivated.",
        "Apologize when you’re wrong, it strengthens relationships.",
        "Believe in yourself, confidence is key to success.",
        "Eat healthy foods to nourish your body.",
        "Make someone’s day with a kind gesture.",
        "Keep a journal to reflect on your thoughts.",
        "Declutter your space to clear your mind.",
        "Practice deep breathing for relaxation.",
        "Surround yourself with positive people.",
        "Laugh more, it's good for your soul.",
        "Travel to new places and explore different cultures.",
        "Forgive and let go of grudges to find peace.",
        "Do something creative to express yourself."
    ];
    // size 20
    const futurePredictions = [
        "You will become a crorepati one day!",
        "A big opportunity is coming your way soon.",
        "You will travel to your dream destination.",
        "Your hard work will bring you great success.",
        "You will meet someone who will change your life positively.",
        "Unexpected wealth is coming your way.",
        "You will achieve your biggest goal this year.",
        "A new door of happiness will open for you soon.",
        "Your dream job is closer than you think.",
        "You will experience great luck in the near future.",
        "Your talents will get the recognition they deserve.",
        "A life-changing surprise is on its way to you.",
        "You will build a strong and loving relationship.",
        "Your patience will soon be rewarded.",
        "You will inspire many people with your journey.",
        "A big financial breakthrough is coming soon.",
        "Your health and energy will improve dramatically.",
        "You will soon find clarity in your life's purpose.",
        "The universe is aligning everything in your favor.",
        "You will live a happy and fulfilling life."
    ];

    const astroForm = document.getElementById("astroForm");
    astroForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        //  console.log("done");
        const name = document.getElementById('name').value ;
        const date = Number(document.getElementById('date').value);
        const month = Number(document.getElementById('month').value);
        const year = Number(document.getElementById('year').value) ;
        // console.log(name,date,month,year);
        const result = document.getElementById("result");

        const first_message = `Hello ${name} `;
        const second_message = `Your Zodiac sign is ${ zodiac[month-1]}`;
        const third_message = compliments[date-1];
        const idx = Math.floor(Math.random()*20);
        const fourth_message = victimCards[idx];

        const fifth_message =lifeRecommendations[(name.length*date)%30]; 
        
        const six_message =futurePredictions[(date*month*year)%20];
        result.innerText = `${first_message}. ${second_message}. ${third_message}. ${fourth_message}. ${fifth_message}` ;

    })
    
    
    
    
