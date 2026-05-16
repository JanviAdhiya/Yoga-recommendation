const container = document.getElementById("asanaContainer");

async function loadAsanas() {

    const res = await fetch("http://localhost:5000/api/poses");

    const asanas = await res.json();
    
    asanas.forEach(asana => {

        container.innerHTML += `

<div class="pose-card">

<img src="${asana.image || 'https://piyushbelwe.netlify.app/img/first.svg'}">

<div class="pose-content">

<h3>${asana.name}</h3>

<p>${asana.description}</p>

</div>

</div>

`;

    });

}

loadAsanas();