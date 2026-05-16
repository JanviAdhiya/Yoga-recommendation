const BASE_URL = "http://localhost:5000/api/auth";

async function signup() {

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;
    if (email == "" || password == "") {
        alert("Please Fill Up All The Fields")
    }
    else {


        await fetch(BASE_URL + "/signup", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({ name, email, password })

        });

        // alert("Signup successful");

        window.location.href = "login.html";
    }
}



async function login() {

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;
    if (email == "" || password == "") {
        alert("Please Fill Up All The Fields")
    }
    else {
        const res = await fetch(BASE_URL + "/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({ email, password })

        });

        const data = await res.json();

        localStorage.setItem("user", JSON.stringify(data.user));

        window.location.href = "goal.html";
    }


}