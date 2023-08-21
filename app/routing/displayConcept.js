import { deleteConcept } from "../firebase/firebaseService.js";
import { addSelectConcept } from "./selectConcepts.js";

export const displayConcept = (concept) => {
    
    const boton = document.createElement('button');
    boton.className = concept + ' btn btn-danger';
    boton.name = concept;
    boton.innerHTML = 'Borrar';
    boton.addEventListener('click', (e) => {
        const classConcepts = e.target.className.split(" ");
        deleteConcept(classConcepts[0]);
        e.target.parentNode.remove();
    })
    
    const div2 = document.createElement('div');
    div2.className = 'col-6 form-control'
    div2.innerHTML = concept
    
    const div = document.createElement('div');
    div.className = 'col-md-8 col-8 mb-4'
    div.append(div2);
    div.append(boton);
    
    const conceptList = document.getElementById('conceptList');
    conceptList.append(div);

    // conceptList.innerHTML += `
    // <div class="col-md-8 col-8 mb-4">
    //     <div class="col-6 form-control" >${concept}</div>
    //     <button name="btnDelConcept" class="${concept} btn btn-danger" >Borrar</button>
    // </div>
    // `;
};