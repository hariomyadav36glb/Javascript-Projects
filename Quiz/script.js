
const cricketQuiz = [
    {
      question: "Who is the first cricketer to score 100 centuries in international cricket?",
      options: ["Ricky Ponting", "Sachin Tendulkar", "Jacques Kallis", "Virat Kohli"],
      correctAnswer: "Sachin Tendulkar"
    },
    {
      question: "Which country won the first Cricket World Cup in 1975?",
      options: ["Australia", "West Indies", "England", "India"],
      correctAnswer: "West Indies"
    },
    {
      question: "Who holds the record for the fastest century in ODI cricket?",
      options: ["Corey Anderson", "Shahid Afridi", "AB de Villiers", "Chris Gayle"],
      correctAnswer: "AB de Villiers"
    },
    {
      question: "What is the maximum number of overs allowed per bowler in a T20 match?",
      options: ["2", "3", "4", "5"],
      correctAnswer: "4"
    },
    {
      question: "Who is known as the 'God of Cricket'?",
      options: ["MS Dhoni", "Virat Kohli", "Sachin Tendulkar", "Sunil Gavaskar"],
      correctAnswer: "Sachin Tendulkar"
    },
    {
      question: "Which bowler has taken the most wickets in Test cricket?",
      options: ["Shane Warne", "James Anderson", "Anil Kumble", "Muttiah Muralitharan"],
      correctAnswer: "Muttiah Muralitharan"
    },
    {
      question: "Who was the captain of India during their 1983 World Cup victory?",
      options: ["Kapil Dev", "Sunil Gavaskar", "Ravi Shastri", "Mohinder Amarnath"],
      correctAnswer: "Kapil Dev"
    },
    {
      question: "How many players are there in a cricket team on the field?",
      options: ["9", "10", "11", "12"],
      correctAnswer: "11"
    },
    {
      question: "What is the term used when a batsman is dismissed without scoring any runs?",
      options: ["Duck", "Golden Duck", "Zero", "No-Score"],
      correctAnswer: "Duck"
    },
    {
      question: "Who was the first batsman to score a double century in ODI cricket?",
      options: ["Virender Sehwag", "Rohit Sharma", "Chris Gayle", "Sachin Tendulkar"],
      correctAnswer: "Sachin Tendulkar"
    },
    {
      question: "Which cricket ground is known as the 'Home of Cricket'?",
      options: ["Lord's", "Eden Gardens", "Melbourne Cricket Ground", "Old Trafford"],
      correctAnswer: "Lord's"
    },
    {
      question: "Who holds the record for the highest individual score in a Test match?",
      options: ["Brian Lara", "Don Bradman", "Mahela Jayawardene", "Chris Gayle"],
      correctAnswer: "Brian Lara"
    },
    {
      question: "Which team has won the most ICC Cricket World Cups?",
      options: ["India", "Australia", "West Indies", "England"],
      correctAnswer: "Australia"
    },
    {
      question: "What is the term used for a bowler taking three wickets in consecutive deliveries?",
      options: ["Hat-trick", "Triple Wicket", "Strike-out", "Three-in-a-row"],
      correctAnswer: "Hat-trick"
    },
    {
      question: "Who was the first Indian bowler to take a hat-trick in Test cricket?",
      options: ["Anil Kumble", "Harbhajan Singh", "Kapil Dev", "Javagal Srinath"],
      correctAnswer: "Harbhajan Singh"
    },
    {
      question: "Which country is known as the 'Proteas' in cricket?",
      options: ["South Africa", "New Zealand", "Sri Lanka", "Pakistan"],
      correctAnswer: "South Africa"
    },
    {
      question: "What does LBW stand for in cricket?",
      options: [
        "Leg Before Wicket",
        "Leg Beyond Wicket",
        "Leg Below Wicket",
        "Left Behind Wicket"
      ],
      correctAnswer: "Leg Before Wicket"
    },
    {
      question: "Who was the first player to reach 10,000 runs in Test cricket?",
      options: ["Sunil Gavaskar", "Allan Border", "Sachin Tendulkar", "Brian Lara"],
      correctAnswer: "Sunil Gavaskar"
    },
    {
      question: "Who is the only cricketer to have 400 Test wickets and over 10,000 Test runs?",
      options: ["Jacques Kallis", "Steve Waugh", "Ian Botham", "Kapil Dev"],
      correctAnswer: "Jacques Kallis"
    },
    {
      question: "Which cricketer is known for scoring six sixes in an over in T20 International?",
      options: ["Yuvraj Singh", "Chris Gayle", "Kieron Pollard", "Shahid Afridi"],
      correctAnswer: "Yuvraj Singh"
    }
  ];
  
  function RandomQuestion(){
    const answer  = [];
    

    const data = new Set();

    while(data.size!=5)
    {
        const index = Math.floor(Math.random()*20);
        data.add(cricketQuiz[index]);
    }

    // convert set into array
    return {...data};
  }
  