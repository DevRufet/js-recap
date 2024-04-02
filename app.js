let total = 1000
let trueorfalse = true
while (trueorfalse) {
    emeliyyat()
    let goinput = daxiletme()
    switch (goinput) {
        case 1:
            let cash = daxiledeceyinizmebleg()
            if (!Number(cash)) {
                errorMessage()
            }
            else {
                total += cash
                totalMessage()
            }
            break;
        case 2:
            let without = mexaricedeceyinizmebleg()
            if (without < total && Number(without)) {
                total -= without
                totalMessage()
            }
            else if (!Number(without)) {
                errorMessage()
            }
            else {
                errorMessageBalans()
            }
            break;
        case 3:
            totalMessage()
            break;
        default:
            errorMessageemeliyyat()
            break;
    }
}

function totalMessage() {
    alert(total)
}

function errorMessageemeliyyat() {
    alert("Duzgun emeliyyat daxil edin")
}

function errorMessageBalans() {
    alert("Balansinizda kifayet qeder mebleg yoxdur")
}

function errorMessage() {
    alert("Xahis edirik reqem daxil edin")
}

function mexaricedeceyinizmebleg() {
    return Number(prompt("Cekeceyiniz meblegi daxil edin:"))
}

function daxiledeceyinizmebleg() {
    return Number(prompt("Daxil edeceyiniz meblegi yazin"))
}

function daxiletme() {
    return Number(prompt("Edeceyiniz emeliyyati secin: \n1.Karta medaxil daxil etmek \n2.Kartdan mexaric cixarmaq \n3.Kartdaki meblegi gostermek"))
}

function emeliyyat() {
    trueorfalse = confirm("Emeliyyati davam etdirmek isteyirsiniz?")
}
