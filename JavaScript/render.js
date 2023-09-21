function render(){
    let darkModeflag = JSON.parse(localStorage.getItem('darkMode')); //retreive the status of dark mode from local storge
    console.log(darkModeflag)
    if(darkModeflag === true){
        darkMode();
    }
}