function gradeType(studScore) {
    let gradeLevel;
    switch (true) {
        case (studScore >= 95):
            gradeLevel = "A+"
            break
        case (studScore >= 80):
            gradeLevel = "A"
            break
        case (studScore >= 60):
            gradeLevel = "B"
            break
        case (studScore >= 40):
            gradeLevel = "C"
            break
        default:
            console.log("No Grade")
    }
    return gradeLevel;
}
let score = 95

console.log("Student Score ", score,  "Grade is " , gradeType(score),)