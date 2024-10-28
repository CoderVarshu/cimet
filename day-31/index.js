import { universityData } from "./universityData.js"


const calculateGPA = (grades) => {

    const assignmentWeight = 0.4;
    const midtermWeight = 0.3;
    const finalWeight = 0.3;

    const assignmentAverage = grades.assignments.reduce((acc, cur) => acc + cur, 0) / grades.assignments.length;
    const weightedAssignments = assignmentAverage * assignmentWeight;
    const weightedMidterm = grades.midterm * midtermWeight;
    const weightedFinal = grades.final * finalWeight;

    const gpa = (weightedAssignments + weightedMidterm + weightedFinal) / 20;

    return gpa.toFixed(2)

}


function getStudentBygpa(universityData) {

    return universityData.departments.flatMap((dept) =>
        dept.courses.flatMap((course) =>
            course.students.flatMap((std) => {
                return (
                    {
                        name: std.name,
                        StudentId: std.studentId,
                        gpa: calculateGPA(std.grades)
                    }
                )
            })
        )
    )
}

function listCoursesWithSchedule(universityData){
  
    return universityData.departments.flatMap((dept) =>
        dept.courses.map((course) =>
           {
            return {
            courseId: course.courseId,
            title: course.title,
            credits: course.credits,
            schedule: course.schedule
        } }
        )
    )

}

function generateFaculty(universityData){
    return universityData.departments.map((dept)=> {
        return {
            departmentName: dept.name,
            departmentId: dept.id,
            faculty: dept.head
        }
    })
}


const data = getStudentBygpa(universityData)

// const data = listCoursesWithSchedule(universityData)

// const data = generateFaculty(universityData)

console.log("Output", data)

