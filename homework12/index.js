const body = document.querySelector('body')
const button = document.getElementById('button');
const block = document.createElement('block');
const get_planets = document.getElementById('get_planets');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const BASE_URL = 'https://swapi.dev/api';

let result = fetch(BASE_URL+`/films/2`)
.then((response) => {
  return response.json()
}).then((data) => {
  const people = data.characters;
  people.forEach((item)=>{
     fetch(item)
      .then((response)=>{
    return response.json()})
  .then((result)=>{
      showInfo(result)
    })
  })
  const showInfo = (result) => {
    const div = document.createElement('div');
    div.innerHTML = `
    <h3>${result.name}<h3/>
    <h5>${result.birth_year}<h5/>
    <h5>${result.gender}<h5/>
    `
    body.insertAdjacentElement("afterend",block);
    block.appendChild(div);
    const showInfo2 = ()=>{
      block.style.display = 'flex'
    }
    button.onclick = showInfo2
  }
})
let planetsPage = 1;

function resultation () {
   fetch(BASE_URL+`/planets/?page=${planetsPage}`)
.then((response) => {
  return response.json()
}).then((data) => {
  const planets = data.results;
  planets.map((item)=>{
  showPlanets(item)
  })
})

    const showPlanets = (item) => {
      const span = document.createElement('span');
      span.textContent = item.name;
      get_planets.appendChild(span);
    }
  }

    function pressButton(action) {
      const min = 1;
      const max = 6;
      if(action === 'next'){
          planetsPage++
          if(planetsPage > max) {
              planetsPage = min;
          }
      } else if (action === 'prev') {
          planetsPage--;
          if(planetsPage < min) {
              planetsPage = max;
          }
      } else {
          console.log("error")
          return;
      }
      get_planets.innerHTML = ` `;
      resultation()
    }
  