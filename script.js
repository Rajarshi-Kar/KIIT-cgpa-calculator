document.getElementById('cgpaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Define grade points
    const gradePoints = {
        'O': 10,
        'E': 9,
        'A': 8,
        'B': 7,
        'C': 6,
        'D': 5,
        'F': 4
    };

    // Define subjects with their respective credits
    const subjects = [
        { id: 'grade1', credits: 4 }, // DS
        { id: 'grade2', credits: 4 }, // PS
        { id: 'grade3', credits: 4 }, // AFL
        { id: 'grade4', credits: 3 }, // DSD
        { id: 'grade5', credits: 2 }, // STW
        { id: 'grade6', credits: 1 }, // DS(L)
        { id: 'grade7', credits: 1 }  // DSD(L)
    ];

    let totalCredits = 0;
    let weightedGradePoints = 0;

    // Calculate CGPA
    subjects.forEach(subject => {
        const grade = document.getElementById(subject.id).value;
        if (grade && gradePoints[grade] !== undefined) {
            totalCredits += subject.credits;
            weightedGradePoints += gradePoints[grade] * subject.credits;
        }
    });

    const cgpa = totalCredits > 0 ? (weightedGradePoints / totalCredits).toFixed(2) : '0.00';
    
    // Only show the CGPA value if calculated
    if (totalCredits > 0) {
        alert(`Your resultant CGPA is: ${cgpa}`);
    }
});




