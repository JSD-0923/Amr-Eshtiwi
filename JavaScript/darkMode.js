function darkModeValue(){
    localStorage.setItem('darkMode', JSON.stringify(!JSON.parse(localStorage.getItem('darkMode'))));
}

function darkMode(){
    document.getElementById("body").classList.toggle("body-dark");
    let darkModeflag = JSON.parse(localStorage.getItem('darkMode'));

    if(darkModeflag === false){
        let elements = document.querySelectorAll('.background-dark');
        let texts = document.querySelectorAll('.text-dark');

        elements.forEach(function(element) {
            // Remove the "specific-class" and add the "new-class"
            element.classList.remove('background-dark');
            element.classList.add('background-light');
        });

        texts.forEach(function(text) {
            // Remove the "specific-class" and add the "new-class"
            text.classList.remove('text-dark');
            text.classList.add('text-light');
        });
    }else{
        let elements = document.querySelectorAll('.background-light');
        let texts = document.querySelectorAll('.text-light');

        elements.forEach(function(element) {
            // Remove the "specific-class" and add the "new-class"
            element.classList.remove('background-light');
            element.classList.add('background-dark');
        });

        texts.forEach(function(text) {
            // Remove the "specific-class" and add the "new-class"
            text.classList.remove('text-light');
            text.classList.add('text-dark');
        });
    }

}