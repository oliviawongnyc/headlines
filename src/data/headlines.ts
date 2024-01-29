export interface Headline {
  date: string;
  headline: string[];
  correctAnswer: string;
  answerBank: string[];
}

const headlines: Headline[] = [
  {
    date: "July 21, 1969",
    headline: ["Man", ""],
    correctAnswer: "Walks on Moon",
    answerBank: [
      "Patents Laser Technology",
      "Walks on Moon",
      "Discovers Quasars",
      "Maps the Human Genome",
      "Uncovers Cosmic Microwave Background Radiation",
    ],
  },
  {
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
  },
  {
    date: "April 16, 1912",
    headline: ["", "Sinks"],
    correctAnswer: "Titanic",
    answerBank: [
      "Titanic",
      "USS Arizona",
      "RMS Lusitania",
      "The Mary Rose",
      "Endurance",
    ],
  },
  {
    date: "May 8, 1980",
    headline: ["World Health Organization Declares", "", "Eradicated"],
    correctAnswer: "Smallpox",
    answerBank: ["Polio", "Measles", "Strep Throat", "the Flu", "Smallpox"],
  },
  {
    date: "October 10, 2014",
    headline: ["Nobel Peace Prize Awarded to", ""],
    correctAnswer: "Malala Yousafzai",
    answerBank: [
      "Jimmy Carter",
      "Al Gore",
      "Malala Yousafzai",
      "Barack Obama",
      "The National Dialogue Quartet",
    ],
  },
  {
    date: "February 11, 1990",
    headline: ["", "Released"],
    correctAnswer: "Mandela",
    answerBank: [
      "McCain",
      "Terry Anderson",
      "Amanda Knox",
      "Mandela",
      "Brittney Griner",
    ],
  },
  {
    date: "April 24, 1990",
    headline: ["", "Launched"],
    correctAnswer: "Hubble Space Telescope",
    answerBank: [
      "Gaia",
      "Kepler Space Telescope",
      "James Webb Space Telescope",
      "Hubble Space Telescope",
      "XMM-Newton",
    ],
  },
  {
    date: "December 4, 1967",
    headline: ["First Successful", ""],
    correctAnswer: "Heart Transplant",
    answerBank: [
      "Hip Replacement",
      "Heart Transplant",
      "Corneal Transplant",
      "Gastric Bypass Surgery",
      "Aortic Aneurysm Repair",
    ],
  },
  {
    date: "July 31, 1991",
    headline: ["", "Sign Nuclear Arms Reduction Treaty"],
    correctAnswer: "U.S. and Soviet Union",
    answerBank: [
      "U.S. and Canada",
      "Germany and France",
      "U.S. and Soviet Union",
      "India and Japan",
      "South Africa and Brazil",
    ],
  },
  {
    date: "August 25, 1944",
    headline: ["Allies Liberate", ""],
    correctAnswer: "Paris",
    answerBank: ["Auckland", "Paris", "Athens", "Luxembourg", "Oslo"],
  },
];

export default headlines;
