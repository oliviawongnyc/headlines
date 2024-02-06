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
      "V.R. Headset",
    ],
    links: {
      article: "https://www.nytimes.com/2007/01/10/technology/10apple.html",
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
      "Telegram",
      "Bus Route",
      "Radio Broadcast",
    ],
    links: {
      article:
        "https://www.nytimes.com/1915/01/26/archives/phone-to-pacific-from-the-atlantic-perfect-test-of-transcontinental.html",
    },
  },
  {
    id: 19,
    date: "April 28, 1947",
    headline: [
      "58,339",
      "Acclaim",
      "",
      "in",
      "Rare",
      "Tribute",
      "at",
      "Stadium",
    ],
    correctAnswer: "Babe Ruth",
    answerBank: [
      "Lionel Messi",
      "Wayne Gretzky",
      "Muhammed Ali",
      "Babe Ruth",
      "Michael Jordan",
    ],
    links: {
      article:
        "https://www.nytimes.com/1947/04/28/archives/58339-acclaim-babe-ruth-in-rare-tribute-at-stadium-baseballs-most.html",
    },
  },
  {
    id: 20,
    date: "May 24, 1934",
    headline: [
      "Barrow",
      "and",
      "Woman",
      "are",
      "Slain",
      "by",
      "Police",
      "in",
      "",
      "Trap",
    ],
    correctAnswer: "Louisiana",
    answerBank: [
      "Texas",
      "Louisiana",
      "California",
      "Vancouver",
      "Connecticut",
    ],
    links: {
      article:
        "https://www.nytimes.com/1934/05/24/archives/barrow-and-woman-are-slain-by-police-in-louisiana-trap-bandit-pair.html",
    },
  },
  {
    id: 21,
    date: "March 22, 1963",
    headline: ["", "Which", "Held", "Tough", "Ones", "Closes", "as", "Prison"],
    correctAnswer: "Alcatraz,",
    answerBank: [
      "Sing Sing,",
      "Eastern State Penitentiary,",
      "Fort Delaware,",
      "Pottawattamie County Jail,",
      "Alcatraz,",
    ],
    links: {
      article:
        "https://timesmachine.nytimes.com/timesmachine/1963/03/22/96968423.html?pageNumber=1&smtyp=cur&smid=tw-nytarchives",
    },
  },
  {
    id: 22,
    date: "March 13, 1977",
    headline: [
      "Astronomers",
      "Announce",
      "Satellites",
      "Discovered",
      "Around",
      "",
    ],
    correctAnswer: "Planet Uranus",
    answerBank: [
      "Exoplanet 51 Pegasi b",
      "Planet Uranus",
      "Asteroid, or Comet, Oumuamua",
      "Star Proxima Centauri,",
      "Planet Mars",
    ],
    links: {
      article:
        "https://timesmachine.nytimes.com/timesmachine/1977/03/13/80222509.html?smtyp=cur&smid=tw-nytarchives&pageNumber=44",
    },
  },
  {
    id: 23,
    date: "August 26, 1979",
    headline: ["", "the", "Plastic", "Princess", "of", "Toyland"],
    correctAnswer: "Barbie,",
    answerBank: [
      "Cinderella,",
      "Barbie,",
      "Belle,",
      "Samantha,",
      "Polly Pocket,",
    ],
    links: {
      article:
        "https://timesmachine.nytimes.com/timesmachine/1979/08/26/111192137.html?smid=tw-nytarchives&smtyp=cur&pageNumber=109",
    },
  },
  {
    id: 24,
    date: "March 8, 1974",
    headline: ["Bold", "", "Airport", "to", "be", "Europe's", "Biggest"],
    correctAnswer: "Paris",
    answerBank: ["Copenhagen", "Moscow", "London", "Paris", "Madrid"],
    links: {
      article:
        "https://timesmachine.nytimes.com/timesmachine/1974/03/08/99160033.html?pageNumber=35&smid=tw-nytarchives&smtyp=cur",
    },
  },
  {
    id: 25,
    date: "March 7, 1981",
    headline: [
      "Amid",
      "the",
      "Fuss,",
      "",
      "Says",
      "a",
      "Quiet",
      "'Good",
      "Night'",
    ],
    correctAnswer: "Cronkite",
    answerBank: [
      "Dan Rather",
      "Rick Moranis",
      "Reagan",
      "Margaret Thatcher",
      "Cronkite",
    ],
    links: {
      article:
        "https://timesmachine.nytimes.com/timesmachine/1981/03/07/032255.html?smid=tw-nytarchives&smtyp=cur&pageNumber=47",
    },
  },
  {
    id: 26,
    date: "March 6, 1956",
    headline: [
      "Segregation",
      "Ban",
      "Extended",
      "To",
      "",
      "by",
      "High",
      "Court",
    ],
    correctAnswer: "Colleges",
    answerBank: [
      "Colleges",
      "Movie Theaters",
      "Public Parks",
      "All Employers",
      "Airline Travel",
    ],
    links: {
      article:
        "https://timesmachine.nytimes.com/timesmachine/1956/03/06/86542177.html?smid=tw-nytarchives&smtyp=cur&pageNumber=1",
    },
  },
  {
    id: 27,
    date: "March 31, 1983",
    headline: ["", "Replacement", "for", "LP's?"],
    correctAnswer: "Digital Compact Disks:",
    answerBank: [
      "Digital Compact Disks:",
      "Cassette Tapes:",
      "Vinyl:",
      "Radio:",
      "Streaming:",
    ],
    links: {
      article:
        "https://timesmachine.nytimes.com/timesmachine/1983/03/31/068545.html?pageNumber=61&smtyp=cur&smid=tw-nytarchives",
    },
  },
  {
    id: 28,
    date: "February 17, 1923",
    headline: [
      "",
      "Inner",
      "Tomb",
      "Is",
      "Opened,",
      "Revealing",
      "Undreamed",
      "of",
      "Splendors",
    ],
    correctAnswer: "Tut-Ankh-Amen's",
    answerBank: [
      "Cleopatra's",
      "Napoleon's",
      "Tut-Ankh-Amen's",
      "Medici",
      "St. Anthony's'",
    ],
    links: {
      article:
        "https://timesmachine.nytimes.com/timesmachine/1923/02/17/105847440.html?smtyp=cur&smid=tw-nytarchives&pageNumber=1",
    },
  },
];

export default headlines;
