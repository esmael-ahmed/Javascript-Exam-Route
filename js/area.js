

async function getAllArea() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    let finalResult = await response.json();
    $(document).ready(function () {
        $(".sk-folding-cube").fadeOut(50, function () {
            $("#loading").fadeOut(50, function () {
                $("body").css("overflow", "auto");
            })
        })
        
    })
    return finalResult;
}

function display(data){
    let box = ``;
    for (let i = 0; i < data.length; i++) {
        box += `<div class="col-md-3">
        <div class="card my-3 text-center">
            <i class="fa-solid fa-house-laptop fs-1"></i>
            <h3>${data[i].strArea}</h3>
        </div>
    </div>`
}
    $("#demo").html(box);
    $(".card").on("click", function(e) {
        const nodeList = document.querySelectorAll(".card")
        const nodeArray = Array.from(nodeList)
        const cardIndex = nodeArray.indexOf(this);
        const areaName = data[cardIndex].strArea;
        console.log(areaName);
        navigateToMealDetails(areaName);
      });
};

function navigateToMealDetails(areaName) {
    // Replace the URL with the appropriate URL of your area.html page
    const areaUrl = `mealByArea.html?name=${areaName}`;
    window.location.href = areaUrl;
};

async function startApp() {
    let areas = await getAllArea();
    display(areas.meals);
    console.log(areas.meals);
    
}
startApp();