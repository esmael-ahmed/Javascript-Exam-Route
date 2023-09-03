

const urlParams = new URLSearchParams(window.location.search);
const catName = urlParams.get('name');
console.log(catName);

async function getCatByName(name) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
    let finalResult = await response.json();
    return finalResult;
}

function display(data){
    let box = ``;
    for (let i = 0; i < data.length; i++) {
        box += `<div class="col-md-3">
        <div class="card my-3 position-relative">
            <div class="overlay position-absolute d-flex justify-content-center align-items-center flex-column overflow-hidden">
                <h4 class="text-center">${data[i].strMeal}</h4>
            </div>
            <img src="${data[i].strMealThumb}" class="card-img-top" alt="...">
          </div>
    </div>`
}
    $("#demo").html(box);
    $(".card").on("click", function(e) {
        // console.log($(".card"));
        // const cardsAraary = $(".card");
        const nodeList = document.querySelectorAll(".card")
        const nodeArray = Array.from(nodeList)
        // console.log(nodeArray);
        const cardIndex = nodeArray.indexOf(this);
        // console.log(cardIndex);
        const mealId = data[cardIndex].idMeal;
        navigateToMealDetails(mealId);
      });
    
};

function navigateToMealDetails(mealId) {
    // Replace the URL with the appropriate URL of your area.html page
    const areaUrl = `mealDetails.html?id=${mealId}`;
    window.location.href = areaUrl;
  };


async function startApp(name) {
    let categories = await getCatByName(name);
    display(categories.meals);
    console.log(categories.meals);
    
}
startApp(catName);