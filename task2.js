const arr = [1, 5, 12, 4, 3];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;
document.write('Ответ: ', average);