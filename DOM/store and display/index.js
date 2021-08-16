function getFormValue() {
    event.preventDefault();
    let x = document.getElementById('form1');
    for (let i = 0; i < x.length; i++){
        if (x.elements[i].value!='Submit')
    {  
      console.log(x.elements[i].value);
     }  
    }
}