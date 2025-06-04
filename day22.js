let activeSessions = 4;

if (activeSessions === 0) {
  console.log("System is idle.");
} else if (activeSessions < 4) {
  console.log("System is active.");
} else {
  console.log("System overload. Shutting down terminal.");
}
db.posts.insertOne({
  title: "Bio-Digital Debris",
  author: "VoidPunkXero",
  tags: ["tech", "waste", "ritual"],
  published: true,
  views: 777,
  comments: [
    { user: "Jane", text: "You’re clearly hallucinating." },
    { user: "DrillaKIlla", text: "lmfaoo what did I just read" }
  ]
})

