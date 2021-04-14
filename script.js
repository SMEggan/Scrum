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

// get favorites from local storage or empty array
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // add class 'fav' to each favorite
    favorites.forEach(function(favorite) {
        document.getElementById(favorite).className = 'fav';
    });
    // register click event listener
    document.querySelector('.liste').addEventListener('click', function(e) {
        var id = e.target.id,
            item = e.target,
            index = favorites.indexOf(id);
        // return if target doesn't have an id (shouldn't happen)
        if (!id) return;
        // item is not favorite
        if (index == -1) {
            favorites.push(id);
            item.className = 'fav';
            // item is already favorite
        } else {
            favorites.splice(index, 1);
            item.className = '';
        }
        // store array in local storage
        localStorage.setItem('favorites', JSON.stringify(favorites));
    });

    // local storage stores strings so we use JSON to stringify for storage and parse to get out of storage