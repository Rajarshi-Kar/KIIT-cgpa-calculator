function calculateCGPA() {
    // Get the values for each subject
    const dsGrade = parseFloat(document.getElementById('ds').value) || 0;
    const psGrade = parseFloat(document.getElementById('ps').value) || 0;
    const aflGrade = parseFloat(document.getElementById('afl').value) || 0;
    const dsdGrade = parseFloat(document.getElementById('dsd').value) || 0;
    const stwGrade = parseFloat(document.getElementById('stw').value) || 0;
    const ind4Grade = parseFloat(document.getElementById('ind4').value) || 0;
    const dslGrade = parseFloat(document.getElementById('dsl').value) || 0;
    const dsdlGrade = parseFloat(document.getElementById('dsdl').value) || 0;

    // Calculate total credits and weighted grades
    const totalCredits = 21;
    const weightedGradesSum = (dsGrade * 4) + (psGrade * 4) + (aflGrade * 4) +
                              (dsdGrade * 3) + (stwGrade * 2) + (ind4Grade * 2) +
                              (dslGrade * 1) + (dsdlGrade * 1);

    // Calculate CGPA
    const cgpa = weightedGradesSum / totalCredits;

    // Display CGPA in a popup
    alert(`Your resultant CGPA is: ${cgpa.toFixed(2)}`);
}







