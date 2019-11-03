let number = [9, 7, 8, 16, 22, 6, 5, 2];

for (let j = 0; j < number.length; j++) {
    for (let i = 0; i < number.length; i++) {
        if (number[i] > number[i + 1]) {
            let AlphaNumber = number[i];
            number[i] = number[i + 1];
            number[i + 1] = AlphaNumber;
        }

    }
}
document.write(number);