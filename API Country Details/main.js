const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const countryContainer = document.getElementById('country-container');
const countryDetails = document.getElementById("country-details");
const errorDiv = document.getElementById('error');
const spinner = document.getElementById('spinner');

searchBtn.addEventListener('click', function () {
    const search = searchInput.value;

    if (search === '') {
        errorDiv.innerText = 'Search field can not be empty!'
    }
    //clear when new search/dom
    countryContainer.innerHTML = '';
    countryDetails.innerHTML = '';
    // console.log(search);
    const url = `https://restcountries.eu/rest/v2/name/${search}`;

    spinner.classList.remove('d-none');
    fetch(url)
        .then((res) => res.json())
        .then((data) => showData(data));
        // .finally(() => {
        //   searchInput.value === '';
        //   spinner.classList.add('d-none');
        // });
});

function showData(countryArray) {
    //clear error messege / error handling
    //network response tab status/messege check
    if (countryArray.status === 404) {
        errorDiv.innerText = 'No Result Found!';
    }
    else {
        errorDiv.innerText = '';
    }

    countryArray.forEach((item) => {
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
}
function showDetails(alpha3Code) {
  fetch(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`)
    .then((res) => res.json())
    .then((data) => {
      // data -> OBJECT
      // data.currencies -> Array
      // data.currencies[0] -> Object
      // data.currencies[0].name
      console.log(data.currencies[0].name);
      countryDetails.innerHTML = `
        <div class="col-md-12">
            <h1 class="pt-2 fst-italic">${data.name}</h1>
            <p class="fs-5">Capital: ${data.capital}</p>
            <p class="fs-6">Currency Name: ${data.currencies[0].name}</p>
            <p class="fs-6">Currency Symbol: ${data.currencies[0].symbol}</p>
        </div>
      `;
    });
}


