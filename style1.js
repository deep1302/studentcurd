// Academic Records Collection Schema
db.createCollection("academicRecords", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["studentID", "name", "grades", "subjects"],
      properties: {
        studentID: { bsonType: "int" },
        name: { bsonType: "string" },
        grades: { bsonType: "object" },
        subjects: { bsonType: "array" },
        // Add any other academic information fields as needed
      }
    }
  }
});

// Co-curricular Activities Collection Schema
db.createCollection("coCurricularActivities", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["studentID", "name", "activityType", "duration"],
      properties: {
        studentID: { bsonType: "int" },
        name: { bsonType: "string" },
        activityType: { bsonType: "string" },
        duration: { bsonType: "int" },
        achievements: { bsonType: "string" },
        // Add any other co-curricular activity fields as needed
      }
    }
  }
});
