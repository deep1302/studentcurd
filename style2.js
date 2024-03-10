// Insert sample academic record
db.academicRecords.insertOne({
  studentID: 1,
  name: "John Doe",
  grades: { math: 90, science: 85, english: 92 },
  subjects: ["math", "science", "english"]
});

// Insert sample co-curricular activity
db.coCurricularActivities.insertOne({
  studentID: 1,
  name: "John Doe",
  activityType: "Sports",
  duration: 2, // in years
  achievements: "Won gold medal in the inter-school sports competition."
});
