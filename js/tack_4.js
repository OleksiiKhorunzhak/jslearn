let input_field = document.querySelector('.input_field input');
let output = document.querySelector('.output_field p .is');

function CheckNumeric(e) {
    if (window.event) // IE
    {
        if ((e.keyCode < 48 || e.keyCode > 57) & e.keyCode != 8 && e.keyCode != 44) {
            event.returnValue = false;
            return false;
        }
    }
    else { // Fire Fox
        if ((e.which < 48 || e.which > 57) & e.which != 8 && e.which != 44) {
            e.preventDefault();
            return false;
        }
    }
}
function sortIt(){

    let number = input_field.value.split(",");

        console.log(number);

        for (let j = 0; j < number.length; j++) {
            for (let i = 0; i < number.length; i++) {
                if (parseInt(number[i]) > parseInt(number[i + 1])) {
                    let AlphaNumber = number[i];
                    number[i] = number[i + 1];
                    number[i + 1] = AlphaNumber;
                }
            }
        }
        output.innerHTML = number.join(', ');
};

