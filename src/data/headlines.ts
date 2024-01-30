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
    date: "August 9, 1974",
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
      "Kepler Telescope",
      "James Webb Telescope",
      "Hubble Telescope",
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
    date: "May 29, 1976",
    headline: ["", "Sign", "a", "Pact", "That", "Limits", "Atomic", "Tests"],
    correctAnswer: "U.S. and Soviet",
    answerBank: [
      "U.S. and Canada",
      "Germany and France",
      "U.S. and Soviet",
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
  {
    id: 11,
    date: "March 4, 2013",
    headline: ["Chasing", "the", "Higgs", ""],
    correctAnswer: "Boson",
    answerBank: ["Quark", "Electron", "Boson", "Protein", "Gene"],
    links: {
      article:
        "https://www.nytimes.com/2013/03/05/science/chasing-the-higgs-boson-how-2-teams-of-rivals-at-CERN-searched-for-physics-most-elusive-particle.html",
    },
  },
  {
    id: 12,
    date: "January 4, 1959",
    headline: ["Alaska", "Becomes", "the", "", "State"],
    correctAnswer: "49th",
    answerBank: ["49th", "32nd", "40th", "50th", "48th"],
    links: {
      article:
        "https://archive.nytimes.com/www.nytimes.com/learning/general/onthisday/big/0103.html",
    },
  },
  {
    id: 13,
    date: "January 7, 1919",
    headline: ["", "Dies", "Suddently", "at", "Oyster", "Bay", "Home"],
    correctAnswer: "Theodore Roosevelt",
    answerBank: [
      "MLK Jr.",
      "Abraham Lincoln",
      "Cornelius Vanderbilt",
      "Alexander Hamilton",
      "Theodore Roosevelt",
    ],
    links: {
      article:
        "https://archive.nytimes.com/www.nytimes.com/learning/general/onthisday/big/0106.html",
    },
  },
  {
    id: 14,
    date: "January 10, 2007",
    headline: [
      "Apple,",
      "Hoping",
      "for",
      "Another",
      "iPod,",
      "Introduces",
      "Innovative",
      "",
    ],
    correctAnswer: "Cellphone",
    answerBank: [
      "Tablet",
      "Television",
      "Speaker System",
      "Cellphone",
      "A.I. Assistant",
    ],
    links: {
      article:
        "https://archive.nytimes.com/www.nytimes.com/learning/general/onthisday/big/0106.html",
    },
  },
  {
    id: 15,
    date: "January 20, 1937",
    headline: [
      "",
      "Sets",
      "Record",
      "of",
      "7",
      "1/2",
      "Hours",
      "in",
      "Flight",
      "From",
      "Coast",
    ],
    correctAnswer: "Hughes, Riding Gale",
    answerBank: [
      "Saxon, Riding Bird",
      "Lorenzo, Riding Feather",
      "Jackson, Riding Lightning",
      "Hughes, Riding Gale",
      "Warton, Riding Seafoam",
    ],
    links: {
      article:
        "https://www.nytimes.com/1937/01/20/archives/hughes-riding-gale-sets-record-of-712-hours-in-flight-from-coast.html",
    },
  },
  {
    id: 16,
    date: "January 24, 1973",
    headline: ["", "Accord", "Reached;", "Cease-Fire", "Begins", "Saturday"],
    correctAnswer: "Vietnam",
    answerBank: ["Mali", "Laos", "Vietnam", "France", "Algeria"],
    links: {
      article:
        "https://archive.nytimes.com/www.nytimes.com/learning/general/onthisday/big/0123.html",
    },
  },
  {
    id: 17,
    date: "January 25, 1965",
    headline: ["", "is", "Dead", "at", "90;", "the", "World", "Mourns", "Him"],
    correctAnswer: "Churchill",
    answerBank: [
      "Otis Redding",
      "Churchill",
      "Hemingway",
      "Kennedy",
      "Nat King Cole",
    ],
    links: {
      article:
        "https://archive.nytimes.com/www.nytimes.com/learning/general/onthisday/big/0124.html",
    },
  },
  {
    id: 18,
    date: "January 26, 1915",
    headline: ["", "to", "Pacific", "From", "Atlantic"],
    correctAnswer: "Phone",
    answerBank: [
      "Phone",
      "Railway",
      "Telegraph",
      "Bus Route",
      "Radio Broadcast",
    ],
    links: {
      article:
        "https://www.nytimes.com/1915/01/26/archives/phone-to-pacific-from-the-atlantic-perfect-test-of-transcontinental.html",
    },
  },
];

export default headlines;
