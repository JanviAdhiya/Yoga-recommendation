const goal = localStorage.getItem("goal");

const user = JSON.parse(localStorage.getItem("user"));

let sessionId = null;

async function loadFlow() {

    const res = await fetch(`http://localhost:5000/api/flow/${goal}`);

    const data = await res.json();

    const container = document.getElementById("flowContainer");

    data.flow.forEach((pose, index) => {

        container.innerHTML += `

<div class="pose-card" style="margin:0px;width:100%;">
<img src="${pose.image || 'https://piyushbelwe.netlify.app/img/first.svg'}">
<div class="pose-content">

<h3>${index + 1}. ${pose.name}</h3>

<p style="font-family:'manrope';">${pose.description}</p>

</div>

</div>

`;

    });

    startSession();

}



async function startSession() {

    const res = await fetch("http://localhost:5000/api/session/start", {

        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({

            userId: user._id,

            goal: goal

        })

    });

    const data = await res.json();

    sessionId = data.session._id;

}



async function completeSession() {

    await fetch("http://localhost:5000/api/session/complete", {

        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({

            sessionId: sessionId

        })

    });

    // alert("Session completed");

    window.location.href = "index.html";

}

loadFlow();