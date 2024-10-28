import { universityData } from "./universityData.js";



const calculateGPA = (students) => {

    let totalAssignmentAverage = 0;
    let totalMidterm = 0;
    let totalFinal = 0;

    const assignmentWeight = 0.4;
    const midtermWeight = 0.3;
    const finalWeight = 0.3;

    const gradeDistribution = { A: 0, B: 0, C: 0, D: 0, F: 0 };

    students.forEach((student) => {
        const grades = student.grades;
        const assignmentAverage = grades.assignments.reduce((acc, cur) => acc + cur, 0) / grades.assignments.length;
        const weightedAssignments = assignmentAverage * assignmentWeight;
        const weightedMidterm = grades.midterm * midtermWeight;
        const weightedFinal = grades.final * finalWeight;

        const overallGPA = weightedAssignments + weightedMidterm + weightedFinal;
        totalAssignmentAverage += assignmentAverage;
        totalMidterm += grades.midterm;
        totalFinal += grades.final;

        if (overallGPA >= 90) {
            gradeDistribution.A++;
        } else if (overallGPA >= 80) {
            gradeDistribution.B++;
        } else if (overallGPA >= 70) {
            gradeDistribution.C++;
        } else if (overallGPA >= 60) {
            gradeDistribution.D++;
        } else {
            gradeDistribution.F++;
        }
    });

const totalStd = students.length

const avgGrade = {
    assignments: (totalAssignmentAverage/ totalStd),
    midterm: totalMidterm / totalStd,
    final: totalFinal / totalStd,
    overall: (totalAssignmentAverage / totalStd) * assignmentWeight + (totalMidterm / totalStd ) * midtermWeight + (totalFinal / totalStd) * finalWeight
}

  return { avgGrade, gradeDistribution } 
};


function averageGrade(universityData) {


    return universityData.departments.flatMap((dept) =>
        dept.courses.flatMap((course) => {
            const studentGPAs = calculateGPA(course.students);

            return (
                {
                    CourseName: course.title,
                    CourseId: course.courseId,
                    TotalStudent: course.students.length,
                    averages: studentGPAs
                }
            )
        })
    )
}


const data = averageGrade(universityData)

console.log("data", data)
