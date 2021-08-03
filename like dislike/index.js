let count = 0;
function like() {
    count++;
    console.log(count);
    document.getElementById('counter').innerHTML = count;

}
function dislike() {
    if (count >=1) {
        count = count - 1;
        console.log('dislike is : ' + count);
        document.getElementById('counter').innerHTML = count;
    }
        
}