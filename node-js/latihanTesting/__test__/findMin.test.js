// function findMin(a, b, c) {
//     if (a < b && a < c ) {
//         return a;
//     } else if (b < a && b < c) {
//         return b;
//     } else {
//         return c;
//     }
// } a not the answer

// function findMin(a, b, c) {
//     let minValue = a;

//     if (a < b) {
//         minValue = a;
//     } else {
//         minValue = b;
//     }
//     if (c < minValue) {
//         minValue = c;
//     }

//     return minValue;
// } b not the answer

// function findMin(a, b, c) {
//     if (a < b) {
//         if (a < c) {
//             return a;
//         } else {
//             return c;
//         }
//     } else if (b < a) {
//         if (b < c) {
//             return b;
//         } else {
//             return c;
//         }
//     } else {
//         return c;
//     }
// } c is not the answer

function findMin(a, b, c) {
    let minValue = 0;

    if (a < b) {
        minValue = a;
    } else if (b < c) {
        minValue = b;
    } else {
        minValue = c;
    }

    return minValue;
}

test('should return the minimum number between 3 arguments', () => {
    expect(findMin(1, 2, 3)).toEqual(1);
    expect(findMin(5, 1, 2)).toEqual(1);
    expect(findMin(102, 404, 48)).toEqual(48);
    expect(findMin(-1, 0, -1)).toEqual(-1);
    expect(findMin(2, 2, 2)).toEqual(2);
});