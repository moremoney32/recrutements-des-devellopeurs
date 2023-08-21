import {joinCommunityFormController} from "../modules/joinCommunityFormController.mjs";

import {snackbar} from "../widgets/snackbar.mjs";

document.addEventListener("DOMContentLoaded", ()=>{

    document.querySelector("#submit-form").addEventListener("click", (event)=>{

        event.preventDefault();

        const userData = {

             firstName: document.querySelector("#first-name").value,

             lastName: document.querySelector("#last-name").value,

             email: document.querySelector("#email").value,

             password: document.querySelector("#password").value,

             category: document.querySelector("#category").value

        };
        
        joinCommunityFormController(userData).then((result)=>{

             snackbar(document.querySelector("#body"), "icons/info.svg", result, 3000);

       });


    })

});