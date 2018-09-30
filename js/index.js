const numA = parseFloat(prompt('Enter number A:'));
const numB = parseFloat(prompt('Enter number B:'));
const numC = parseFloat(prompt('Enter number C:'));

function solveEq(numA, numB, numC) {
    const discr = numB * numB - 4 * numA * numC;
    let firstX;
    let secondX;
    let x;
    
    if(discr > 0) {
        firstX = (-numB + Math.sqrt(discr)) / 2 * numA;
        secondX = (-numB - Math.sqrt(discr)) / 2 * numA;
        return 'x1 = ' + firstX + ' x2 = ' + secondX;
    } else if(discr === 0) {
        x = (-numB) / (2 * numA);
        return 'x = ' + x;
    } 
    
    return 'Has no solution';
}

const result = solveEq(numA, numB, numC);

alert(result);