// Til navigaion bar
const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});
// Slutt navigation bar

// JS til favorittlisten
// henter favoritter fra local storage eller en tom array
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // legger til class 'fav' til hver favorite
    favorites.forEach(function(favorite) {
        document.getElementById(favorite).className = 'fav';
    });
    // registrerer click event listener
    document.querySelector('.liste').addEventListener('click', function(e) {
        var id = e.target.id,
            item = e.target,
            index = favorites.indexOf(id);
        // måtte ha med denne for en eller annen grunn, dersom hotellene ikke hadde id funket ikke listen som vi ville
        if (!id) return;
        // hotell er ikke lagt til favoritter
        if (index == -1) {
            favorites.push(id);
            item.className = 'fav';
            // hotell er allerede favoritt
        } else {
            favorites.splice(index, 1);
            item.className = '';
        }
        // lagrer array i local storage
        localStorage.setItem('favorites', JSON.stringify(favorites));
    });

    // local storage lagrer string, det blir her brukt JSON for å stringify slik at hotellene kan bli lagret
    //Slutt JS favliste

//JS til booking
//henter inn knappene
let bestillKnapp = document.getElementById("btnBestill");
let kvittering = document.getElementById("kvittering");

//funksjon som henter inn data for bestillingsknappen
function getHotell() {
    let valgtHotell = "";
    let norWild = document.getElementById("hotell1");
    let storfjord = document.getElementById("hotell2");
    let norefjell = document.getElementById("hotell3");
    let briksdal = document.getElementById("hotell4");
    let gudvangen = document.getElementById("hotell5");
    
    if (norWild.checked) {
            return {
                film: norWild.value,
                pris: norWild.getAttribute("data-pris")
            };
        } else if (storfjord.checked) {
            return {
                film: storfjord.value,
                pris: storfjord.getAttribute("data-pris")
            };
        } else if (norefjell.checked) {
            return {
                film: norefjell.value,
                pris: norefjell.getAttribute("data-pris")
            };
        } else if (briksdal.checked) {
            return {
                film: briksdal.value,
                pris: briksdal.getAttribute("data-pris")
            };
        } else if (gudvangen.checked) {
            return {
                film: gudvangen.value,
                pris: gudvangen.getAttribute("data-pris")
            };
        } else {
            alert("Vennligst velg et hotell!");
            return false;
        }
};

function bestilt() {
    alert("Din bestilling er mottatt")
    
}

//Slutt JS til booking

// JS til kart
// Lagrer koordinatene som konstanter
		const wild = { lat: 69.19882694217213, lng: 17.4579961325449 };
		const storfjord = { lat: 62.46953357100632, lng: 6.62506024510111910 }
		const norefjell = { lat: 60.22691546050356, lng: 9.519865426191632 }
		const briksdal = { lat: 61.66316348001572, lng: 6.822366784545326 }
		const gudvangen = { lat: 60.880906927981954, lng: 6.84154422117251 }
      
		// Bestemmer posisjonen til kartet
      function initMap(sted) {
        const kart = new google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: sted,
        });
       
		  // Bestemmer posisjonen til markøren
        const marker = new google.maps.Marker({
          position: sted,
          map: kart,
        });
      }

// Slutt JS til kart