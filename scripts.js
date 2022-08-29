/*
const app = document.getElementById('root');

const logo = document.createElement('img');

logo.src = './images/logo.png';

const container = document.createElement('div');    
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();

 request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

 request.onload = function () {

     var data = JSON.parse(this.response);

     if (request.status >= 200 && request.status < 400){
        
        data.forEach(film => {

            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = film.title;
            
            const p = document.createElement('p');
            p.textContent = film.description;

            container.appendChild(card);

            card.appendChild(h1);

            card.appendChild(p);
    
        });
     }
     else{

    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);

    }

    
 } 

 request.send();
*/

const app = document.getElementById('root');

const logo = document.createElement('img');

logo.src = './images/logo.png';

const container = document.createElement('div');    
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

fetch('https://ghibliapi.herokuapp.com/films')
.then(Response => Response.json())
.then((data) => {
    let movie = data;

    movie.forEach(film => {

        const card = document.createElement('div');

        card.setAttribute('class', 'card');

        const h1 = document.createElement('h1');
        h1.textContent = film.title;

        const p = document.createElement('p');
        p.textContent = film.description;

        container.appendChild(card);

        card.appendChild(h1);

        card.appendChild(p);
    });

    
})

.catch(console.log('error' + status))

 