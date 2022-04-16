// appending list
var courses = [];
// console.log(courses.length);

// dataset
const genDataset = document.querySelector("#btn-gen");
genDataset.addEventListener("click", () => {
    var dataset = document.getElementById("data-set").value;
    if((dataset == "") || (dataset == null)){
        swal("Oops!", "Please enter the Dataset first.", "error");
    }
    else{
        var timeDisplay = document.querySelector(".time-display");
        timeDisplay.innerHTML = "";

        // console.log(dataset)
        generateRandom(dataset);
    }
})

// generating random dataset
function generateRandom(dataset){
    courses = [];
    for(let i=0; i<dataset; i++){
        let RandID = Math.round(Math.random()*(9999-1000) + 1000);
        let ID = "ID" + RandID;
        let RandNum = Math.round(Math.random()*(1000));

        let element = {};
        element.name = ID;
        element.price = RandNum;
        courses.push(element);
    }

    generateLIST();
}

// generateLIST function
function generateLIST(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";

    courses.forEach(course => {
        const li = document.createElement("li");
        li.classList.add("list-group-item")

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right")
        const price = document.createTextNode(course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    })
}

// button action
const sortButton = document.querySelector("#btn-sort");
sortButton.addEventListener("click", () => {
    var dataset = document.getElementById("data-set").value;
    if((dataset == "") || (dataset == null)){
        swal("Oops!", "Please enter the Dataset first.", "error");
    }
    else if(courses.length == 0){
        swal("Oops!", "Please generate the Dataset first.", "error");
    }
    else{
        let t0 = performance.now();
        courses.sort((a,b) => (a.price - b.price));
        let t1 = performance.now();
        
        generateLIST();
        
        let time = (t1-t0).toFixed(2);
        // console.log(time);
        displayTime(time);

        var details = document.querySelector(".js-detail-target");
        details.innerHTML = '<i class="fa fa-solid fa-caret-right"></i>  ' + '  Sort details';
    }
})

// displaying time

function displayTime(time){
    var timeDisplay = document.querySelector(".time-display");
    timeDisplay.innerHTML = time + " ms";
}