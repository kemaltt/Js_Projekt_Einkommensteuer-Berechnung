// / ein Einkommen
// x < 9744
// 9744 <= x && x <= 14754
// 14754 <= x && x <= 57918
// 57918 <= x && x <= 274612
// x > 274612


// Zwei Einkommen 
//     (x + y) / 2 < 9744
// 9744 <= x && x <= 14754
// 14754 <= x && x <= 57918
// 57918 <= x && x <= 274612
// x > 274612

let inputZvE = document.getElementById('input-zve');
let input2ZvE = document.getElementById('input-zwei-zve');
let outputEst = document.getElementById('output-est');
let outputNetto = document.getElementById('output-nettoeinkommen');

let radioGrund = document.getElementById('radio-grundtarif');
let radioEhe = document.getElementById('radio-ehetarif');

let divHidden = document.getElementById('div-hidden');
let jahr = document.getElementById('berechnuns-jahr')




const checkLabel = () => {
    if (radioGrund.checked) {
        divHidden.style.display = 'none'
    } else {
        divHidden.style.display = 'block'
    }
}

// const calculate = () => {
//     console.log(jahr.value);
//     if (jahr.value == '2021') {

//     }
// }



// für 2021 ein Gehalt
const calculate = () => {


    if (jahr.value == '2021') {
        if (radioGrund.checked) {
            let inputZveOne = Number(inputZvE.value);
            if (inputZveOne < 9744) {
                outputEst.innerHTML = `0 €`;
                outputNetto.innerHTML = `${inputZveOne} €`
            } else if (9744 <= inputZveOne && inputZveOne <= 14754) {
                let y = (inputZveOne - 9744) / 10000;
                outputEst.innerHTML = Math.floor((995.21 * y + 1400) * y) + ' €';
                let out = Math.floor((995.21 * y + 1400) * y);
                outputNetto.innerHTML = inputZveOne - out + ' €';
            } else if (14754 <= inputZveOne && inputZveOne <= 57918) {
                let z = (inputZveOne - 14753) / 10000;
                outputEst.innerHTML = Math.floor((208.85 * z + 2397) * z + 950.96) + ' €';
                let out2 = Math.floor((208.85 * z + 2397) * z + 950.96);
                outputNetto.innerHTML = inputZveOne - out2 + ' €';
            } else if (57918 < inputZveOne && inputZveOne <= 274612) {
                outputEst.innerHTML = Math.floor((0.42 * inputZveOne - 9136.63)) + ' €';
                let out3 = Math.floor((0.42 * inputZveOne - 9136.63));
                outputNetto.innerHTML = inputZveOne - out3 + ' €';

            } else if (inputZveOne > 274612) {
                outputEst.innerHTML = Math.floor(0.45 * inputZveOne - 17374.99) + ' €';
                let out4 = Math.floor(0.45 * inputZveOne - 17374.99);
                outputNetto.innerHTML = inputZveOne - out4 + ' €';
            }
        } else if (radioEhe.checked) {

            let zvE2 = (Number(inputZvE.value) + Number(input2ZvE.value)) / 2;
            console.log(zvE2);
            if (zvE2 < 9744) {
                outputEst.innerHTML = `0 €`;
                outputNetto.innerHTML = `${zvE2} €`
            } else if (9744 <= zvE2 && zvE2 <= 14754) {
                let y = (zvE2 - 9744) / 10000;
                outputEst.innerHTML = (Math.floor((995.21 * y + 1400) * y)) * 2 + ' €';
                let out = (Math.floor(995.21 * y + 1400) * y) * 2;
                outputNetto.innerHTML = zvE2 * 2 - out + ' €';
            } else if (14754 <= zvE2 && zvE2 <= 57918) {
                let z = (zvE2 - 14753) / 10000;
                outputEst.innerHTML = (Math.floor((208.85 * z + 2397) * z + 950.96)) * 2 + ' €';
                let out2 = (Math.floor((208.85 * z + 2397) * z + 950.96)) * 2;
                outputNetto.innerHTML = zvE2 * 2 - out2 + ' €';
            } else if (57918 < zvE2 && zvE2 <= 274612) {
                outputEst.innerHTML = (Math.floor((0.42 * zvE2 - 9136.63))) * 2 + ' €';
                let out3 = (Math.floor((0.42 * zvE2 - 9136.63))) * 2;
                outputNetto.innerHTML = zvE2 * 2 - out3 + ' €';

            } else if (zvE2 > 274612) {
                outputEst.innerHTML = (Math.floor(0.45 * zvE2 - 17374.99)) * 2 + ' €';
                let out4 = (Math.floor(0.45 * zvE2 - 17374.99)) * 2;
                outputNetto.innerHTML = zvE2 * 2 - out4 + ' €';
            }

        }
    } else if (jahr.value == '2020') {
        if (radioGrund.checked) {
            let inputZveOne = Number(inputZvE.value);
            if (inputZveOne < 9408) {
                outputEst.innerHTML = `0 €`;
                outputNetto.innerHTML = `${inputZveOne} €`
            } else if (9409 <= inputZveOne && inputZveOne <= 14532) {
                let y = (inputZveOne - 9408) / 10000;
                outputEst.innerHTML = Math.floor((972.87 * y + 1400) * y) + ' €';
                let out = Math.floor((972.87 * y + 1400) * y);
                outputNetto.innerHTML = inputZveOne - out + ' €';
            } else if (14533 <= inputZveOne && inputZveOne <= 57051) {
                let z = (inputZveOne - 14532) / 10000;
                outputEst.innerHTML = Math.floor((212.02 * z + 2397) * z + 972.76) + ' €';
                let out2 = Math.floor((212.02 * z + 2397) * z + 972.79);
                outputNetto.innerHTML = inputZveOne - out2 + ' €';
            } else if (57052 < inputZveOne && inputZveOne <= 270500) {
                outputEst.innerHTML = Math.floor((0.42 * inputZveOne - 9136.63)) + ' €';
                let out3 = Math.floor((0.42 * inputZveOne - 9136.63));
                outputNetto.innerHTML = inputZveOne - out3 + ' €';

            } else if (inputZveOne > 270501) {
                outputEst.innerHTML = Math.floor(0.45 * inputZveOne - 17078.74) + ' €';
                let out4 = Math.floor(0.45 * inputZveOne - 17078.74);
                outputNetto.innerHTML = inputZveOne - out4 + ' €';
            }
        } else if (radioEhe.checked) {

            let zvE2 = (Number(inputZvE.value) + Number(input2ZvE.value)) / 2;
            console.log(zvE2);
            if (zvE2 < 9408) {
                outputEst.innerHTML = `0 €`;
                outputNetto.innerHTML = `${zvE2} €`
            } else if (9409 <= zvE2 && zvE2 <= 14532) {
                let y = (zvE2 - 9408) / 10000;
                outputEst.innerHTML = (Math.floor((972.87 * y + 1400) * y)) * 2 + ' €';
                let out = (Math.floor(972.87 * y + 1400) * y) * 2;
                outputNetto.innerHTML = zvE2 * 2 - out + ' €';
            } else if (14533 <= zvE2 && zvE2 <= 57051) {
                let z = (zvE2 - 14532) / 10000;
                outputEst.innerHTML = (Math.floor((212.02 * z + 2397) * z + 972.76)) * 2 + ' €';
                let out2 = (Math.floor((212.02 * z + 2397) * z + 972.76)) * 2;
                outputNetto.innerHTML = zvE2 * 2 - out2 + ' €';
            } else if (57052 < zvE2 && zvE2 <= 270500) {
                outputEst.innerHTML = (Math.floor((0.42 * zvE2 - 9136.63))) * 2 + ' €';
                let out3 = (Math.floor((0.42 * zvE2 - 9136.63))) * 2;
                outputNetto.innerHTML = zvE2 * 2 - out3 + ' €';

            } else if (zvE2 > 270501) {
                outputEst.innerHTML = (Math.floor(0.45 * zvE2 - 17078.74)) * 2 + ' €';
                let out4 = (Math.floor(0.45 * zvE2 - 17078.74)) * 2;
                outputNetto.innerHTML = zvE2 * 2 - out4 + ' €';
            }

        }


    }




}