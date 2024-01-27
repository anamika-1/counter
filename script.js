let count = 0;

function updateCounter(){
    document.querySelector(".counter-machine").textContent = `${count}`;
}

function increaseCount(){
    count++;
    document.querySelector(".counter").style.borderColor = "#25baa3";
    updateCounter();

}

function decreaseCount(){
    count--;
    document.querySelector(".counter").style.borderColor = "#122c28";
    updateCounter();
}

