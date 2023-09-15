const loadAiUniverse = async () =>{
    const res = await fetch("https://openapi.programming-hero.com/api/ai/tools")
 const data = await res.json();
 const allUniverse = data.data.tools;
//  console.log(allUniverse);
 displayUniverse(allUniverse);
}

 displayUniverse = (allUniverse) => {

    const universeContainer = document.getElementById("universe-container");
  allUniverse.forEach(universe => {
    console.log(universe);
    // Now create a div into universeContainer

    const universeCard = document.createElement("div");
    universeCard.classList = `card p-10 bg-gray-400 shadow-xl`;
    universeCard.innerHTML = `
    <figure><img src= "${universe?.image}"alt="Shoes" /></figure>
       <div class="card-body">
        <h2 class="card-title"></h2>
        <h1 class ="text-xl font-bold">Features</h1>
        <p><span>1.</span> ${universe.features[0]}</p>
        <p><span>2.</span> ${universe.features[1]}</p>
        <p><span>3.</span> ${universe.features[2]}</p>

        <hr class ="mt-4">
        <h2 class ="text-xl font-bold">${universe.name}</h2>
        <div class="flex justify-between">
        <p><span><i class="fa-regular fa-calendar-days"></i></span> ${universe.published_in}</p>
        <span class = "bg-gray-200 rounded-full w-[40px] h-[30px] mx-auto text-center text-xl  "><i class="fa-solid fa-arrow-right"></i></span>
        </div>
        </div>
        </div>

    `;

    // append the div into universeContainer

    universeContainer.appendChild(universeCard);
  });
 }
 
loadAiUniverse()