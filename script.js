function showValue(val) {
    let valueShowed = document.getElementById("displayValue").value //.value untuk menampilkan data dari komponen input type atau text area
    if (valueShowed === "0" && isNaN(val)) { 
        document.getElementById("displayValue").value += val
    } else if (valueShowed === "0") { 
        document.getElementById("displayValue").value = val
    } else if (valueShowed === "0") {
        document.getElementById("displayValue").value = "0" + val; //untuk bisa menampilkan nilai 0 di awal contoh: 0.xxx
    }
    else {
        document.getElementById("displayValue").value += val;
    }
}

function calculation() {
    let valueShowed = document.getElementById("displayValue").value
    try {
        let result = eval(valueShowed)
        document.getElementById("displayValue").value = result
    } catch (error) {
        document.getElementById("displayValue").value = "error!"
    }
}

function clearValue() {
    document.getElementById("displayValue").value = "0"
}

function removeValue() { //remove karakter
    let valueShowed = document.getElementById("displayValue");
    let currentValue = valueShowed.value
    if (currentValue.length > 1) {
        valueShowed.value = currentValue.slice(0, -1);
    } else {
        valueShowed.value = "0";
    }
}
function minusValue() {
    let valueShowed = document.getElementById("displayValue");
    let currentValue = valueShowed.value;
    if (currentValue.startsWith("(-") && currentValue.endsWith(")")) {
        valueShowed.value = currentValue.slice(2, -1); //(2) jumlah karakter yang dikurangkan di awal, (-1) jumlah karakter yang dikurangkan di akhir //slice untuk memangkas
    }
    else if (currentValue.startsWith("-")) {
        valueShowed.value = currentValue.slice(1);
    } else if (currentValue !== "0") {
        valueShowed.value = "(" + "-" + currentValue + ")";
    }

}
