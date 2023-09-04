
async function getAllCategories() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
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
        <div class="card my-3 position-relative">
            <div class="overlay position-absolute d-flex align-items-center flex-column overflow-hidden">
                <h3>${data[i].strCategory}</h3>
                <p class="text-center">${data[i].strCategoryDescription}</p>
            </div>
            <img src="${data[i].strCategoryThumb}" class="card-img-top" alt="...">
          </div>
    </div>`
}
    $("#demo").html(box);
    $(".card").on("click", function(e) {
        const nodeList = document.querySelectorAll(".card")
        const nodeArray = Array.from(nodeList)
        // console.log(nodeArray);
        const cardIndex = nodeArray.indexOf(this);
        // console.log(cardIndex);
        const catName = data[cardIndex].strCategory;
        console.log(catName);
        navigateToMealDetails(catName);
      });
    
};

function navigateToMealDetails(catName) {
    // Replace the URL with the appropriate URL of your area.html page
    const catUrl = `mealCat.html?name=${catName}`;
    window.location.href = catUrl;
  };


async function startApp() {
    let mealsCategories = await getAllCategories();
    display(mealsCategories.categories);
    console.log(mealsCategories.categories);
    
}
startApp();