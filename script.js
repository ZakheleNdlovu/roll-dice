let dice = document.querySelectorAll(".dice img");
let roll = document.getElementById("roll");
let box = document.getElementById("box");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");


roll.addEventListener("click",()=>{
    let roll_die = Math.floor(Math.random()*6);
    
    switch (roll_die){
        case 0:
            one.style.display = "flex";
            two.style.display = "none";
            three.style.display = "none";
            four.style.display = "none";
            five.style.display = "none";
            six.style.display = "none";
            break
        case 1:
            one.style.display = "none";
            two.style.display = "flex";
            three.style.display = "none";
            four.style.display = "none";
            five.style.display = "none";
            six.style.display = "none";
            break
        case 2:
            one.style.display = "none";
            two.style.display = "none";
            three.style.display = "flex";
            four.style.display = "none";
            five.style.display = "none";
            six.style.display = "none";
            break
        case 3:
            one.style.display = "none";
            two.style.display = "none";
            three.style.display = "none";
            four.style.display = "flex";
            five.style.display = "none";
            six.style.display = "none";
            break
        case 4:
            one.style.display = "noe";
            two.style.display = "none";
            three.style.display = "none";
            four.style.display = "none";
            five.style.display = "flex";
            six.style.display = "none";
            break
        case 5:
            one.style.display = "none";
            two.style.display = "none";
            three.style.display = "none";
            four.style.display = "none";
            five.style.display = "none";
            six.style.display = "flex";
            break
    }
    
})

document.addEventListener("keypress",event => {
    if (event.key === "Enter"){
        let roll_die = Math.floor(Math.random()*6);
        console.log(event.key)
        switch (roll_die){
            case 0:
                one.style.display = "flex";
                two.style.display = "none";
                three.style.display = "none";
                four.style.display = "none";
                five.style.display = "none";
                six.style.display = "none";
                break
            case 1:
                one.style.display = "none";
                two.style.display = "flex";
                three.style.display = "none";
                four.style.display = "none";
                five.style.display = "none";
                six.style.display = "none";
                break
            case 2:
                one.style.display = "none";
                two.style.display = "none";
                three.style.display = "flex";
                four.style.display = "none";
                five.style.display = "none";
                six.style.display = "none";
                break
            case 3:
                one.style.display = "none";
                two.style.display = "none";
                three.style.display = "none";
                four.style.display = "flex";
                five.style.display = "none";
                six.style.display = "none";
                break
            case 4:
                one.style.display = "noe";
                two.style.display = "none";
                three.style.display = "none";
                four.style.display = "none";
                five.style.display = "flex";
                six.style.display = "none";
                break
            case 5:
                one.style.display = "none";
                two.style.display = "none";
                three.style.display = "none";
                four.style.display = "none";
                five.style.display = "none";
                six.style.display = "flex";
                break
        }
    }
})
