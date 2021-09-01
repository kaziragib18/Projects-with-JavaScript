const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const countryContainer = document.getElementById('country-container');
const errorDiv = document.getElementById('error');

searchBtn.addEventListener('click', function () {
    const search = searchInput.value;

    if(search === ''){
        errorDiv.innerText= 'Search field can not be empty!'
    }
    //clear when new search/dom
    countryContainer.innerHTML = '';
    // console.log(search);
    const url = `https://restcountries.eu/rest/v2/name/${search}`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
             //clear error messege / error handling
            if (data.status === 404) {
            errorDiv.innerText = 'No Result Found!';
            }
            else{
                errorDiv.innerText = '';
            }

            data.forEach((item) => {
                console.log(item.name);
                const div = document.createElement("div");
                div.classList.add("col-md-3");
                div.innerHTML = `
      <!-- Image -->
      <div class="rounded overflow-hidden border p-2">
        <img src="${item.flag}" class="w-100 img-fluid" alt=""/>
      </div>
      <!-- Body -->
      <div class="py-2 d-flex justify-content-between align-items-center d-md-block text-md-center">

        <h6>${item.name}</h6>

        <button onclick="showDetails('${item.alpha3Code}')" class="btn btn-dark">Learn More</button>
      </div>
      `;
        countryContainer.appendChild(div);
        });
     })
});

