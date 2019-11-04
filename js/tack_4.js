let input_field = document.querySelector('.input_field input');
let output = document.querySelector('.output_field p');

$(input_field).keyup(function (e) {

    console.log(input_field.value);
    let number = [];

    for (let j = 0; j < number.length; j++) {
        for (let i = 0; i < number.length; i++) {
            if (number[i] > number[i + 1]) {
                let AlphaNumber = number[i];
                number[i] = number[i + 1];
                number[i + 1] = AlphaNumber;
            }

        }
    }
    output.innerHTML = number;
});

