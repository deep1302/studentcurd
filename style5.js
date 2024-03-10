// Update an academic record
db.academicRecords.updateOne(
    { studentID: 1 },
    { $set: { grades: { math: 92, science: 87, english: 94 } } }
  );
  
  // Update a co-curricular activity
  db.coCurricularActivities.updateOne(
    { studentID: 1 },
    { $set: { achievements: "Participated in the national level sports competition." } }
  );
  