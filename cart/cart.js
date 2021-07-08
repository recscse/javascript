function cartdetail() {
    fetch('http://127.0.0.1:5500/cartData').then(response => console.log(response)).then(data => console.log(data))
}
cartdetail();