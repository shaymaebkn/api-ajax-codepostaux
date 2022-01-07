
document.querySelector("#cp").addEventListener('input', function(){
    if (this.value.length == 5 ) {
        let url = 
            `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,
             code,codesPostaux,codedepartement,codeRegion,population&format=json&geometry=centre`;
            
            const xhr = new XMLHttpRequest();

            xhr.open("GET", url, true)
            xhr.onload = function (){
                if (this.status === 200 ){
                    let data = JSON.parse(this.responseText);
                    let affichage = `<ul>`;
                    for (let ville of data){
                        affichage += `<li>  <strong> ${ville.nom}</strong> ,  ${ville.population} habitant </li>`

                   }
                   affichage += `</ul>`;
                   document.querySelector("#ville").innerHTML = affichage;
                
                    }
                    else {
                        alert("Some error occured");
                      }
                    
     }
     xhr.send();
    };
           
});
           








