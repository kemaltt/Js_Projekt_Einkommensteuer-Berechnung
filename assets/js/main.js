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

const calculate = () => {
    if (inputZvE.value == '' || radioEhe.checked && inputZvE.value == '' || radioEhe.checked && input2ZvE.value == '') {
        alert('Gib bitte einen Wert ein!');
        outputEst.innerHTML = '';
        outputNetto.innerHTML = '';
        return
    }

    if (jahr.value == '2021') { // für 2021 ein Gehalt---------------------------------------------------
        if (radioGrund.checked) {
            let inputZveOne = Number(inputZvE.value);
            if (inputZveOne < 9744) {
                outputEst.innerHTML = `0 €`;
                outputNetto.innerHTML = `${inputZveOne} €`
            } else if (9744 <= inputZveOne && inputZveOne <= 14754) {
                let y = (inputZveOne - 9744) / 10000;
                outputEst.innerHTML = Math.floor((995.21 * y + 1400) * y) + ' €';
                let out = Math.floor((995.21 * y + 1400) * y);
                outputNetto.innerHTML = (inputZveOne - out).toFixed(2) + ' €';
            } else if (14754 <= inputZveOne && inputZveOne <= 57918) {
                let z = (inputZveOne - 14753) / 10000;
                outputEst.innerHTML = Math.floor((208.85 * z + 2397) * z + 950.96) + ' €';
                let out2 = Math.floor((208.85 * z + 2397) * z + 950.96);
                outputNetto.innerHTML = (inputZveOne - out2).toFixed(2) + ' €';
            } else if (57918 < inputZveOne && inputZveOne <= 274612) {
                outputEst.innerHTML = Math.floor((0.42 * inputZveOne - 9136.63)) + ' €';
                let out3 = Math.floor((0.42 * inputZveOne - 9136.63));
                outputNetto.innerHTML = (inputZveOne - out3).toFixed(2) + ' €';

            } else if (inputZveOne > 274612) {
                outputEst.innerHTML = Math.floor(0.45 * inputZveOne - 17374.99) + ' €';
                let out4 = Math.floor(0.45 * inputZveOne - 17374.99);
                outputNetto.innerHTML = (inputZveOne - out4).toFixed(2) + ' €';
            }
        } else if (radioEhe.checked) { //zweites Gehalt für 2021 --------------------------------------------

            let zvE2 = (Number(inputZvE.value) + Number(input2ZvE.value)) / 2;
            console.log(zvE2);
            if (zvE2 < 9744) {
                outputEst.innerHTML = `0 €`;
                outputNetto.innerHTML = `${zvE2} €`
            } else if (9744 <= zvE2 && zvE2 <= 14754) {
                let y = (zvE2 - 9744) / 10000;
                outputEst.innerHTML = (Math.floor((995.21 * y + 1400) * y)) * 2 + ' €';
                let out = (Math.floor(995.21 * y + 1400) * y) * 2;
                outputNetto.innerHTML = (zvE2 * 2 - out).toFixed(2) + ' €';
            } else if (14754 <= zvE2 && zvE2 <= 57918) {
                let z = (zvE2 - 14753) / 10000;
                outputEst.innerHTML = (Math.floor((208.85 * z + 2397) * z + 950.96)) * 2 + ' €';
                let out2 = (Math.floor((208.85 * z + 2397) * z + 950.96)) * 2;
                outputNetto.innerHTML = (zvE2 * 2 - out2).toFixed(2) + ' €';
            } else if (57918 < zvE2 && zvE2 <= 274612) {
                outputEst.innerHTML = (Math.floor((0.42 * zvE2 - 9136.63))) * 2 + ' €';
                let out3 = (Math.floor((0.42 * zvE2 - 9136.63))) * 2;
                outputNetto.innerHTML = (zvE2 * 2 - out3).toFixed(2) + ' €';

            } else if (zvE2 > 274612) {
                outputEst.innerHTML = (Math.floor(0.45 * zvE2 - 17374.99)) * 2 + ' €';
                let out4 = (Math.floor(0.45 * zvE2 - 17374.99)) * 2;
                outputNetto.innerHTML = (zvE2 * 2 - out4).toFixed(2) + ' €';
            }

        }
    } else if (jahr.value == '2020') { // für 2020 ein Gehalt-----------------------------------------------------
        if (radioGrund.checked) {
            let inputZveOne = Number(inputZvE.value);
            if (inputZveOne < 9408) {
                outputEst.innerHTML = `0 €`;
                outputNetto.innerHTML = `${inputZveOne} €`
            } else if (9409 <= inputZveOne && inputZveOne <= 14532) {
                let y = (inputZveOne - 9408) / 10000;
                outputEst.innerHTML = Math.floor((972.87 * y + 1400) * y) + ' €';
                let out = Math.floor((972.87 * y + 1400) * y);
                outputNetto.innerHTML = (inputZveOne - out).toFixed(2) + ' €';
            } else if (14533 <= inputZveOne && inputZveOne <= 57051) {
                let z = (inputZveOne - 14532) / 10000;
                outputEst.innerHTML = Math.floor((212.02 * z + 2397) * z + 972.76) + ' €';
                let out2 = Math.floor((212.02 * z + 2397) * z + 972.79);
                outputNetto.innerHTML = (inputZveOne - out2).toFixed(2) + ' €';
            } else if (57052 < inputZveOne && inputZveOne <= 270500) {
                outputEst.innerHTML = Math.floor((0.42 * inputZveOne - 9136.63)) + ' €';
                let out3 = Math.floor((0.42 * inputZveOne - 9136.63));
                outputNetto.innerHTML = (inputZveOne - out3).toFixed(2) + ' €';

            } else if (inputZveOne > 270501) {
                outputEst.innerHTML = Math.floor(0.45 * inputZveOne - 17078.74) + ' €';
                let out4 = Math.floor(0.45 * inputZveOne - 17078.74);
                outputNetto.innerHTML = (inputZveOne - out4).toFixed(2) + ' €';
            }
        } else if (radioEhe.checked) { //zweites Gehalt für 2020 --------------------------------------------

            let zvE2 = (Number(inputZvE.value) + Number(input2ZvE.value)) / 2;
            console.log(zvE2);
            if (zvE2 < 9408) {
                outputEst.innerHTML = `0 €`;
                outputNetto.innerHTML = `${zvE2} €`
            } else if (9409 <= zvE2 && zvE2 <= 14532) {
                let y = (zvE2 - 9408) / 10000;
                outputEst.innerHTML = (Math.floor((972.87 * y + 1400) * y)) * 2 + ' €';
                let out = (Math.floor(972.87 * y + 1400) * y) * 2;
                outputNetto.innerHTML = (zvE2 * 2 - out).toFixed(2) + ' €';
            } else if (14533 <= zvE2 && zvE2 <= 57051) {
                let z = (zvE2 - 14532) / 10000;
                outputEst.innerHTML = (Math.floor((212.02 * z + 2397) * z + 972.76)) * 2 + ' €';
                let out2 = (Math.floor((212.02 * z + 2397) * z + 972.76)) * 2;
                outputNetto.innerHTML = (zvE2 * 2 - out2).toFixed(2) + ' €';
            } else if (57052 < zvE2 && zvE2 <= 270500) {
                outputEst.innerHTML = (Math.floor((0.42 * zvE2 - 9136.63))) * 2 + ' €';
                let out3 = (Math.floor((0.42 * zvE2 - 9136.63))) * 2;
                outputNetto.innerHTML = (zvE2 * 2 - out3).toFixed(2) + ' €';

            } else if (zvE2 > 270501) {
                outputEst.innerHTML = (Math.floor(0.45 * zvE2 - 17078.74)) * 2 + ' €';
                let out4 = (Math.floor(0.45 * zvE2 - 17078.74)) * 2;
                outputNetto.innerHTML = (zvE2 * 2 - out4).toFixed(2) + ' €';
            }

        }


    } else if (jahr.value == '2019') { // für 2019 ein Gehalt-----------------------------------------------------
        if (radioGrund.checked) {
            let inputZveOne = Number(inputZvE.value);
            if (inputZveOne < 9168) {
                outputEst.innerHTML = `0 €`;
                outputNetto.innerHTML = `${inputZveOne} €`
            } else if (9169 <= inputZveOne && inputZveOne <= 14254) {
                let y = (inputZveOne - 9168) / 10000;
                outputEst.innerHTML = Math.floor((980.14 * y + 1400) * y) + ' €';
                let out = Math.floor((980.14 * y + 1400) * y);
                outputNetto.innerHTML = (inputZveOne - out).toFixed(2) + ' €';
            } else if (14555 <= inputZveOne && inputZveOne <= 55960) {
                let z = (inputZveOne - 14254) / 10000;
                outputEst.innerHTML = Math.floor((216.16 * z + 2397) * z + 965.58) + ' €';
                let out2 = Math.floor((216.16 * z + 2397) * z + 965.58);
                outputNetto.innerHTML = (inputZveOne - out2).toFixed(2) + ' €';
            } else if (55961 < inputZveOne && inputZveOne <= 265326) {
                outputEst.innerHTML = Math.floor((0.42 * inputZveOne - 8780.90)) + ' €';
                let out3 = Math.floor((0.42 * inputZveOne - 8780.90));
                outputNetto.innerHTML = (inputZveOne - out3).toFixed(2) + ' €';

            } else if (inputZveOne > 265327) {
                outputEst.innerHTML = Math.floor(0.45 * inputZveOne - 16740.68) + ' €';
                let out4 = Math.floor(0.45 * inputZveOne - 16740.68);
                outputNetto.innerHTML = (inputZveOne - out4).toFixed(2) + ' €';
            }
        } else if (radioEhe.checked) { //zweites Gehalt für 2019 --------------------------------------------

            let zvE2 = (Number(inputZvE.value) + Number(input2ZvE.value)) / 2;
            console.log(zvE2);
            if (zvE2 < 9168) {
                outputEst.innerHTML = `0 €`;
                outputNetto.innerHTML = `${zvE2} €`
            } else if (9169 <= zvE2 && zvE2 <= 14254) {
                let y = (zvE2 - 9168) / 10000;
                outputEst.innerHTML = (Math.floor((980.14 * y + 1400) * y)) * 2 + ' €';
                let out = (Math.floor(980.14 * y + 1400) * y) * 2;
                outputNetto.innerHTML = (zvE2 * 2 - out).toFixed(2) + ' €';
            } else if (14555 <= zvE2 && zvE2 <= 55960) {
                let z = (zvE2 - 14254) / 10000;
                outputEst.innerHTML = (Math.floor((216.16 * z + 2397) * z + 965.58)) * 2 + ' €';
                let out2 = (Math.floor((216.16 * z + 2397) * z + 965.58)) * 2;
                outputNetto.innerHTML = (zvE2 * 2 - out2).toFixed(2) + ' €';
            } else if (55961 < zvE2 && zvE2 <= 265326) {
                outputEst.innerHTML = (Math.floor((0.42 * zvE2 - 8780.90))) * 2 + ' €';
                let out3 = (Math.floor((0.42 * zvE2 - 8780.90))) * 2;
                outputNetto.innerHTML = (zvE2 * 2 - out3).toFixed(2) + ' €';

            } else if (zvE2 > 265327) {
                outputEst.innerHTML = (Math.floor(0.45 * zvE2 - 16740.68)) * 2 + ' €';
                let out4 = (Math.floor(0.45 * zvE2 - 16740.68)) * 2;
                outputNetto.innerHTML = (zvE2 * 2 - out4).toFixed(2) + ' €';
            }

        }
    }




}