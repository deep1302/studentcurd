// Insert another academic record
db.academicRecords.insertOne({
    studentID: 2,
    name: "Jane Smith",
    grades: { math: 95, science: 88, english: 94 },
    subjects: ["math", "science", "english"]
  });
  
  // Insert another co-curricular activity
  db.coCurricularActivities.insertOne({
    studentID: 2,
    name: "Jane Smith",
    activityType: "Music",
    duration: 3, // in years
    achievements: "Performed in the school band at the annual function."
  });
  