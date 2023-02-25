// step 1: fetch the api 
const loadData = searchText => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
        .then(response => response.json())
        .then(data => displayMeals(data.meals))
}


const displayMeals = meals => {
    const mealContainer = document.getElementById('meals-container');
    mealContainer.innerHTML = ``;
    if(meals){
    for (const meal of meals) {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
        `
        mealContainer.appendChild(div);
    }

    }
    else{
        mealContainer.innerHTML = `
        <h1 class="text font-bold">Data not found</h1>
        `;
    }
}

document.getElementById('search-input').addEventListener('keyup',(e)=>{
    loadData(e.target.value);
})




loadData('fish');