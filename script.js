function calculateCGPA() {
    // Define grade mappings
    const gradePoints = {
        'O': 10,
        'E': 9,
        'A': 8,
        'B': 7,
        'C': 6,
        'D': 5,
        'F': 0
    };

    // Get the letter grades for each subject
    const dsGrade = document.getElementById('ds').value.toUpperCase();
    const psGrade = document.getElementById('ps').value.toUpperCase();
    const aflGrade = document.getElementById('afl').value.toUpperCase();
    const dsdGrade = document.getElementById('dsd').value.toUpperCase();
    const stwGrade = document.getElementById('stw').value.toUpperCase();
    const ind4Grade = document.getElementById('ind4').value.toUpperCase();
    const dslGrade = document.getElementById('dsl').value.toUpperCase();
    const dsdlGrade = document.getElementById('dsdl').value.toUpperCase();

    // Convert letter grades to grade points, defaulting to 0 for invalid entries
    const getGradePoint = (grade) => gradePoints[grade] || 0;

    // Calculate total credits and weighted grades
    const totalCredits = 21; // Adjust if needed
    const weightedGradesSum = (getGradePoint(dsGrade) * 4) +
                              (getGradePoint(psGrade) * 4) +
                              (getGradePoint(aflGrade) * 4) +
                              (getGradePoint(dsdGrade) * 3) +
                              (getGradePoint(stwGrade) * 2) +
                              (getGradePoint(ind4Grade) * 2) +
                              (getGradePoint(dslGrade) * 1) +
                              (getGradePoint(dsdlGrade) * 1);

    // Calculate CGPA
    const cgpa = weightedGradesSum / totalCredits;

    // Display CGPA in the result div
    document.getElementById('result').textContent = `Your resultant CGPA is: ${cgpa.toFixed(2)}`;
}








