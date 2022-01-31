function searchShow(query) {
  const url = `https://api.tvmaze.com/search/shows?q=${query}`
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const results = data.map(api => api.show.name);
      // console.log("data found");
      // console.log(results);
      showResults(results)

      //remove error message 
      document.getElementById("error").innerHTML = "";
    })
    .catch((error) => {
      document.getElementById("error").innerHTML = error;
      showResults([])
    })
}
// searchShow("welcome")

//show searched movies on list
function showResults(results) {
  const list = document.getElementById("searchList");
  //clear list before appending all search result
  list.innerHTML = "";
  results.forEach(result => {
    const element = document.createElement("li")
    element.innerText = result;
    list.appendChild(element);
  });
}

let seachTimeoutToken = 0

window.onload = () => {
  const searchText = document.getElementById("searchField");
  searchText.onkeyup = (e) => {
    clearTimeout(seachTimeoutToken);
    // console.log(searchText.value);

    //remove spaces from begining and ending of the string
    if (searchText.value.trim().length === 0) {
      return
    }

    seachTimeoutToken = setTimeout(() => {
      searchShow(searchText.value);
    }, 400)
  }
}

