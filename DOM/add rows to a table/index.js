function insertRow() {
    var row = document.getElementById('sampletable').insertRow(0);
    let y= row.insertCell(0);
    let z = row.insertCell(1);
    y.innerHTML = "New Cell1";
    z.innerHTML = "New Cell2";
    
}