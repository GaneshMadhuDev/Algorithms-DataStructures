 let quarter4 = [36, 24, 3, 15, 34, 22, 5, 17, 32];

 let quarter3 = [20, 7, 11, 30, 26, 9, 28, 0, 2];

 let quarter2 = [14, 35, 23, 4, 16, 33, 21, 6, 18];

 let quarter1 = [31, 19, 8, 12, 29, 25, 10, 27, 00, 1, 13];

 let allQuadrants = [];

 let dataAngles = {};
    dataAngles[5] = 1*9.5;
    dataAngles[22] = 2*9.5;
    dataAngles[34] = 3*9.5;
    dataAngles[15] = 4*9.5;
    dataAngles[3] = 5*9.5;
    dataAngles[24] = 6*9.5;
    dataAngles[36] = 7*9.5;
    dataAngles[13] = 8*9.5;
    dataAngles[1] = 9*9.5;
    dataAngles[100] = 10*9.5;

    dataAngles[27] = 11*9.5;
    dataAngles[10] = 12*9.5;
    dataAngles[25] = 13*9.5;
    dataAngles[29] = 14*9.5;
    dataAngles[12] = 15*9.5;
    dataAngles[8] = 16*9.5;
    dataAngles[19] = 17*9.5;
    dataAngles[31] = 18*9.5;
    dataAngles[18] = 19*9.5;

    dataAngles[6] = 20*9.5;
    dataAngles[21] = 21*9.5;
    dataAngles[33] = 22*9.5;
    dataAngles[16] = 23*9.5;
    dataAngles[4] = 24*9.5;
    dataAngles[23] = 25*9.5;
    dataAngles[35] = 26*9.5;
    dataAngles[14] = 27*9.5;
    dataAngles[2] = 28*9.5;
    dataAngles[0] = 29*9.5;

    dataAngles[28] = 30*9.5;
    dataAngles[9] = 31*9.5;
    dataAngles[26] = 32*9.5;
    dataAngles[30] = 33*9.5;
    dataAngles[11] = 34*9.5;
    dataAngles[7] = 35*9.5;
    dataAngles[20] = 36*9.5;
    dataAngles[32] = 37*9.5;
    dataAngles[17] = 38*9.5;


 console.log(dataAngles);



 let q4 = new Set(quarter4);
 let q3 = new Set(quarter3);
 let q2 = new Set(quarter2);
 let q1 = new Set(quarter1);

 console.log(q4);
 console.log(q3);
 console.log(q2);
 console.log(q1);

 let dataCollection = [];
 let previousQuadrant = null;
 let previousNumber = null;
 let currentQuadrant = null;

 function findSectionForGivenNumber(givenNumber) {

    allQuadrants = [];

    if (q4.has(givenNumber)) {
        console.log('Given Number ' + givenNumber + ' in Q4');
        currentQuadrant = 'Q4';

        allQuadrants = quarter4.concat(quarter1).concat(quarter2).concat(quarter3);

    }
    if (q3.has(givenNumber)) {
        console.log('Given Number ' + givenNumber + ' in Q3');
        currentQuadrant = 'Q3';

        allQuadrants = quarter3.concat(quarter4).concat(quarter1).concat(quarter2);
    }
    if (q2.has(givenNumber)) {
        console.log('Given Number ' + givenNumber + ' in Q2');
        currentQuadrant = 'Q2';

        allQuadrants = quarter2.concat(quarter3).concat(quarter4).concat(quarter1);
    }
    if (q1.has(givenNumber)) {
        console.log('Given Number ' + givenNumber + ' in Q1');
        currentQuadrant = 'Q1';

        allQuadrants = quarter1.concat(quarter2).concat(quarter3).concat(quarter4);
    }

    let oneDigitAngle = 360 / 38;


    let differenceInAngle =  0 + '*';

    if (previousNumber) {
        differenceInAngle = dataAngles[previousNumber] - dataAngles[givenNumber];
    }





    dataCollection.push({[givenNumber] : currentQuadrant,
    transition : [previousQuadrant] + ' - ' + [currentQuadrant],
    totalAngle : dataAngles[givenNumber],
    differenceInAngle : differenceInAngle});

    previousQuadrant = currentQuadrant;

    previousNumber = givenNumber;

    console.log(dataCollection);

 }


 findSectionForGivenNumber(2);
 findSectionForGivenNumber(20);
 findSectionForGivenNumber(9);
 findSectionForGivenNumber(3);
 findSectionForGivenNumber(19);
 findSectionForGivenNumber(29);
 findSectionForGivenNumber(6);
 findSectionForGivenNumber(23);
 findSectionForGivenNumber(31);
 findSectionForGivenNumber(3);
 findSectionForGivenNumber(14);
 findSectionForGivenNumber(0);
 findSectionForGivenNumber(24);
 findSectionForGivenNumber(18);
 findSectionForGivenNumber(18);

// findSectionForGivenNumber(29);
// findSectionForGivenNumber(24);
// findSectionForGivenNumber(18);
// findSectionForGivenNumber(34);
// findSectionForGivenNumber(15);
// findSectionForGivenNumber(20);
// findSectionForGivenNumber(36);
// findSectionForGivenNumber(20);
// findSectionForGivenNumber(22);
// findSectionForGivenNumber(29);
// findSectionForGivenNumber(13);
// findSectionForGivenNumber(1);
// findSectionForGivenNumber(23);

//findSectionForGivenNumber(12);
//findSectionForGivenNumber(33);
//findSectionForGivenNumber(32);
//findSectionForGivenNumber(13);
//findSectionForGivenNumber(32);
//findSectionForGivenNumber(25);
//findSectionForGivenNumber(4);
//findSectionForGivenNumber(10);
//findSectionForGivenNumber(29);
//findSectionForGivenNumber(0);
//findSectionForGivenNumber(25);
//findSectionForGivenNumber(2);
//findSectionForGivenNumber(13);
//findSectionForGivenNumber(30);
