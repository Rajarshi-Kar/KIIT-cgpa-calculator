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

    // Define credits for each subject
    const dsCredits = 4;
    const psCredits = 4;
    const aflCredits = 4;
    const dsdCredits = 3;
    const stwCredits = 2;
    const ind4Credits = 2;
    const dslCredits = 1;
    const dsdlCredits = 1;

    // Calculate total credits and weighted grades
    const totalCredits = dsCredits + psCredits + aflCredits + dsdCredits + stwCredits + ind4Credits + dslCredits + dsdlCredits;
    const weightedGradesSum = (dsGrade * dsCredits) + (psGrade * psCredits) + (aflGrade * aflCredits) +
                              (dsdGrade * dsdCredits) + (stwGrade * stwCredits) + (ind4Grade * ind4Credits) +
                              (dslGrade * dslCredits) + (dsdlGrade * dsdlCredits);

    // Calculate CGPA
    const cgpa = weightedGradesSum / totalCredits;

    // Display CGPA in a popup
    alert(`Your resultant CGPA is: ${cgpa.toFixed(2)}`);
}





