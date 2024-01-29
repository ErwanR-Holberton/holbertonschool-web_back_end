export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  return listOfStudents.filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades.find((grade) => grade.studentId === student.id);
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: grades ? grades.grade : 'N/A',
      };
    });
}
