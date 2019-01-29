/* Naive structued 
const gradeCalc = function (score, totalScore) {
    if (typeof score === 'number' && typeof totalScore === 'number') {
        const percent = (score / totalScore) * 100;
        let letterGrade = '';

        if (percent >= 90) {
            letterGrade = 'A';
        } else if (percent >= 80) {
            letterGrade = 'B';
        } else if (percent >= 70) {
            letterGrade = 'C';
        } else if (percent >= 60) {
            letterGrade = 'D';
        } else {
            letterGrade = 'E';
        }
        return `You got a ${letterGrade} (${percent}%)`
    } else {
        throw Error(`Please provide numbers only`)
    }

} */



// const result = gradeCalc(48, 70);
// console.log(result); //You got a D (68.57142857142857%)

//better structed one

const gradeCalc = function (score, totalScore) {
    if (!(typeof score === 'number' && typeof totalScore === 'number')) {
        throw Error(`Please provide numbers only`)
    }
    const percent = (score / totalScore) * 100;
    let letterGrade = '';

    if (percent >= 90) {
        letterGrade = 'A';
    } else if (percent >= 80) {
        letterGrade = 'B';
    } else if (percent >= 70) {
        letterGrade = 'C';
    } else if (percent >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'E';
    }
    return `You got a ${letterGrade} (${percent}%)`

}
try {
    const result = gradeCalc(48, '70a');
    console.log(result); //You got a D (68.57142857142857%)

} catch (e) {
    console.log(`Please provide numbers only ${e.message}`);
    //Please provide numbers only Please provide numbers only
}