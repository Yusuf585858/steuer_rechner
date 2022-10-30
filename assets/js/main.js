//let wahl = "radio1";
document.getElementById("outputNB").innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro";
document.getElementById("BN").innerHTML = "Bruttobetrag (Endpreis)";
let satz = 1.19;
let output2 = document.getElementById("output2");
//let output1 = document.getElementById("output1");

const change = (value) => {
    wahl = value;

    if (value == "radio1") {
        document.getElementById("outputNB").innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro";
        document.getElementById("BN").innerHTML = "Bruttobetrag (Endpreis)";
    } else if (value == "radio2") {
        document.getElementById("outputNB").innerHTML = "Bruttobetrag (Preis mit Mehrwertsteuer) in Euro";
        document.getElementById("BN").innerHTML = "Nettobetrag";

    };
    //return wahl;

};

const prozent = (value) => {


    if (value == "satz1") {
        satz = 1.19;
    }
    else if (value == "satz2") {
        satz = 1.07;
    }
    console.log(satz);
    //return satz;
};

const berechnen = () => {
    let input = Number(document.getElementById("betrag").value);
    //let radio1 = document.getElementById("radio1");
    let output2 = document.getElementById("output2");
    console.log(input);
    let output1 = document.getElementById("output1");
    if (wahl == "radio1") {
        output2 = input * satz;
        output1 = output2 - input;
        document.getElementById("output2").innerHTML = output2.toFixed(2) + "€";
        document.getElementById("output1").innerHTML = output1.toFixed(2) + "€";
    } else if (wahl == "radio2") {
        output2 = input / satz;
        output1 = input - output2;
        document.getElementById("output2").innerHTML = output2.toFixed(2) + "€";
        document.getElementById("output1").innerHTML = output1.toFixed(2) + "€";
    }




};








/* if (wahl == "radio1") {
    output2 = input * satz;
    document.getElementById("output2").innerHTML = output2;
} else if (wahl == "radio2") {
    output2 = input / satz;
    document.getElementById("output2").innerHTML = output2;
} */