
const allButtons = document.querySelectorAll(".line-one");
const display = document.querySelector(".input form input");

for (let button of allButtons){
    button.addEventListener("click", (e) => {
        let buttonInnervalue = e.target.textContent;
        
        if (buttonInnervalue === "DE") {
            display.value = display.value.substring(0, display.value.length - 1);
        } else if (buttonInnervalue === "AC") {
            display.value = "";
        } else if (buttonInnervalue === "=") {
            if(display.value){
                try{
                    display.value = eval(display.value);
                }
                catch(error){
                    alert("Invalid Calculation")
                }
            }else {
                alert("Please add some value")
            }
        } else {
            display.value += buttonInnervalue;
        }
    });
}
