let input = document.querySelector('#text')
let searchBtn = document.querySelector('#search');
let delBtn = document.querySelector('#delete')
let div2 = document.querySelector('#div')


function addGif(response) {
    let div = document.createElement('div')
    let numResults = response.data.length 
    let randomIdx = Math.floor(Math.random() * numResults)
    div.classList.add('col-md-4')
    div.classList.add('col-12')
    div.innerHTML =`<img src='${response.data[randomIdx].images.original.url}' >`
    div2.append(div)
}

searchBtn.addEventListener('click', async function(evt) {
    evt.preventDefault()

    let searchTerm = input.value;
    input.value = ''


    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: 'A8nunv31LfWBLNghSaFv7KxgeLI1fHoF'
    }
  });
  addGif(response.data);
}
)
delBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    div2.innerHTML = ''

})
