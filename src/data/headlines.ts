export interface Headline {
  id: number;
  date: string;
  headline: string[];
  correctAnswer: string;
  answerBank: string[];
  links: { article: string };
}

const headlines: Headline[] = [
  {
    id: 1,
    date: "July 21, 1969",
    headline: ["Men", ""],
    correctAnswer: "Walk on Moon",
    answerBank: [
      "Patent Laser Technology",
      "Walk on Moon",
      "Discover Quasars",
      "Map the Human Genome",
      "Uncover Cosmic Microwave Background Radiation",
    ],
    links: {
      article:
        "https://archive.nytimes.com/www.nytimes.com/learning/general/onthisday/big/0720.html",
    },
  },
  {
    id: 2,
    date: "August 8, 1974",
    headline: ["", "Resigns"],
    correctAnswer: "Nixon",
    answerBank: [
      "Ford",
      "Indira Gandhi",
      "Steve Jobs",
      "Nixon",
      "Elizabeth II",
    ],
    links: {
      article:
        "https://archive.nytimes.com/www.nytimes.com/learning/general/onthisday/big/0808.html",
    },
  },
  {
    id: 3,
    date: "April 15, 1912",
    headline: ["", "Sinks", "Four", "Hours", "After", "Hitting", "Iceberg"],
    correctAnswer: "Titanic",
    answerBank: [
      "Titanic",
      "USS Arizona",
      "RMS Lusitania",
      "The Mary Rose",
      "Endurance",
    ],
    links: {
      article:
        "https://archive.nytimes.com/www.nytimes.com/learning/general/onthisday/big/0415.html",
    },
  },
  {
    id: 4,
    date: "September 29, 1975",
    headline: [
      "Global",
      "War",
      "on",
      "",
      "Expected",
      "to",
      "be",
      "Won",
      "in",
      "'76",
    ],
    correctAnswer: "Smallpox",
    answerBank: ["Polio", "Measles", "Climate Change", "Influenza", "Smallpox"],
    links: {
      article:
        "https://www.nytimes.com/1975/09/29/archives/new-jersey-pages-global-war-on-smallpox-expected-to-be-won-in-76.html",
    },
  },
  {
    id: 5,
    date: "December 10, 2014",
    headline: [
      "",
      "and",
      "Kailash",
      "Satyarthi",
      "Collect",
      "Nobel",
      "Peace",
      "Prizes",
    ],
    correctAnswer: "Malala Yousafzai",
    answerBank: [
      "Jimmy Carter",
      "Al Gore",
      "Malala Yousafzai",
      "Barack Obama",
      "The National Dialogue Quartet",
    ],
    links: {
      article:
        "https://www.nytimes.com/2014/12/11/world/europe/malala-yousafzai-kailash-satyarthi-nobel-peace-prize.html",
    },
  },
  {
    id: 6,
    date: "February 11, 1990",
    headline: ["", "to", "Go", "Free", "Today"],
    correctAnswer: "Mandela",
    answerBank: [
      "McCain",
      "Terry Anderson",
      "Amanda Knox",
      "Mandela",
      "Brittney Griner",
    ],
    links: {
      article:
        "https://www.nytimes.com/1990/02/11/world/south-africa-s-new-era-mandela-go-free-today-de-klerk-proclaims-ending-chapter.html",
    },
  },
  {
    id: 7,
    date: "June 28, 1990",
    headline: ["", "Loses", "Large", "Part", "of", "Optical", "Ability"],
    correctAnswer: "Hubble Telescope",
    answerBank: [
      "Gaia",
      "Kepler Space Telescope",
      "James Webb Space Telescope",
      "Hubble Space Telescope",
      "XMM-Newton",
    ],
    links: {
      article:
        "https://www.nytimes.com/1990/06/28/us/hubble-telescope-loses-large-part-of-optical-ability.html",
    },
  },
  {
    id: 8,
    date: "December 4, 1967",
    headline: ["First", "Successful", ""],
    correctAnswer: "Heart Transplant",
    answerBank: [
      "Hip Replacement",
      "Heart Transplant",
      "Corneal Transplant",
      "Gastric Bypass Surgery",
      "Aortic Aneurysm Repair",
    ],
    links: {
      article: "https://www.documentcloud.org/documents/413652-nyt-19690721",
    },
  },
  {
    id: 9,
    date: "July 31, 1991",
    headline: ["", "Sign", "Nuclear", "Arms", "Reduction", "Treaty"],
    correctAnswer: "U.S. and Soviet Union",
    answerBank: [
      "U.S. and Canada",
      "Germany and France",
      "U.S. and Soviet Union",
      "India and Japan",
      "South Africa and Brazil",
    ],
    links: {
      article: "https://www.documentcloud.org/documents/413652-nyt-19690721",
    },
  },
  {
    id: 10,
    date: "August 25, 1944",
    headline: ["Allies", "Liberate", ""],
    correctAnswer: "Paris",
    answerBank: ["Auckland", "Paris", "Athens", "Luxembourg", "Oslo"],
    links: {
      article: "https://www.documentcloud.org/documents/413652-nyt-19690721",
    },
  },
];

export default headlines;
