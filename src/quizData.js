// quizData.js

const quizData = [
  // CLOUD (5)
  {
    id: 1,
    topic: "Cloud",
    question: "Which AWS service is primarily used for object storage?",
    options: ["EC2", "Lambda", "S3", "RDS"],
    answer: "S3",
  },
  {
    id: 2,
    topic: "Cloud",
    question: "Which of these is a serverless compute service?",
    options: ["EC2", "Lambda", "ECS", "EKS"],
    answer: "Lambda",
  },
  {
    id: 3,
    topic: "Cloud",
    question: "What does IAM stand for in AWS?",
    options: [
      "Identity and Access Management",
      "Internet Account Management",
      "Instance Access Module",
      "Internal Access Manager",
    ],
    answer: "Identity and Access Management",
  },
  {
    id: 4,
    topic: "Cloud",
    question: "Which AWS database is fully managed and NoSQL?",
    options: ["RDS", "DynamoDB", "Redshift", "Aurora"],
    answer: "DynamoDB",
  },
  {
    id: 5,
    topic: "Cloud",
    question: "What is the main benefit of using Availability Zones?",
    options: [
      "Lower storage cost",
      "Higher CPU performance",
      "Improved fault tolerance and redundancy",
      "Faster DNS lookup",
    ],
    answer: "Improved fault tolerance and redundancy",
  },

  // DSA (5)
  {
    id: 6,
    topic: "DSA",
    question: "What is the time complexity of binary search on a sorted array?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)",
  },
  {
    id: 7,
    topic: "DSA",
    question:
      "Which data structure is best suited for implementing a BFS (Breadth‑First Search)?",
    options: ["Stack", "Queue", "Priority Queue", "Set"],
    answer: "Queue",
  },
  {
    id: 8,
    topic: "DSA",
    question: "Which of these sorting algorithms is NOT comparison based?",
    options: ["Merge Sort", "Quick Sort", "Heap Sort", "Counting Sort"],
    answer: "Counting Sort",
  },
  {
    id: 9,
    topic: "DSA",
    question: "What is the worst‑case time complexity of Quick Sort?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
    answer: "O(n²)",
  },
  {
    id: 10,
    topic: "DSA",
    question: "Which data structure is used to implement recursion internally?",
    options: ["Queue", "Stack", "Array", "Graph"],
    answer: "Stack",
  },

  // Programming / Technical (5)
  {
    id: 11,
    topic: "Programming",
    question: "Which language is primarily used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS",
  },
  {
    id: 12,
    topic: "Programming",
    question:
      "In JavaScript, which keyword is used to declare a block‑scoped variable?",
    options: ["var", "let", "const", "static"],
    answer: "let",
  },
  {
    id: 13,
    topic: "Programming",
    question: "What does REST stand for in web APIs?",
    options: [
      "Representational State Transfer",
      "Remote Execution Service Transfer",
      "Resource State Transmission",
      "Request Event Streaming Transport",
    ],
    answer: "Representational State Transfer",
  },
  {
    id: 14,
    topic: "Programming",
    question: "Which HTTP status code indicates that a resource was not found?",
    options: ["200", "301", "404", "500"],
    answer: "404",
  },
  {
    id: 15,
    topic: "Programming",
    question: "Which of these best describes Git?",
    options: [
      "A programming language",
      "A distributed version control system",
      "A web server",
      "A database",
    ],
    answer: "A distributed version control system",
  },
];

export default quizData;
