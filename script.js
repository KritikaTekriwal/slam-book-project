import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc
} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyAjrW7W38paVWTgG6RfERXCkSw5fxp_vuo",
    authDomain: "slam-book-f0d26.firebaseapp.com",
    projectId: "slam-book-f0d26",
    storageBucket: "slam-book-f0d26.firebasestorage.app",
    messagingSenderId: "1022106809668",
    appId: "1:1022106809668:web:f5b8e9d0301e3a66485311"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const form = document.querySelector(".slam-form");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const friendResponse = {

        name:
        document.querySelector("#name").value,

        knownSince:
        document.querySelector("#known").value,

        relation:
        document.querySelector("#relation").value,

        firstImpression:
        document.querySelector("#first-impression").value,

        likeAboutMe:
        document.querySelector("#like").value,

        annoyingHabit:
        document.querySelector("#annoying-habit").value,

        oneWord:
        document.querySelector("#one-word").value,

        secret:
        document.querySelector("#secret").value,

        role:
        document.querySelector("#role").value,

        funniestHabit:
        document.querySelector("#funny").value

    };

    try {

        await addDoc(
            collection(db, "responses"),
            friendResponse
        );

        document.querySelector("#success").textContent =
        "Memory saved successfully 💌";

        form.reset();

        setTimeout(() => {

            document.querySelector("#success").textContent = "";

        }, 3000);

    }

    catch(error) {

        console.log(error);

    }

});