function toggleSearchBar() {
    var searchInput = document.getElementById('search-input');
    searchInput.classList.toggle('expanded');
  }
  const bar = document.getElementById('bar');
  const nav = document.getElementById('navbar');
  
   if(bar){
    bar.addEventListener('click',()=> {
      nav.classList.add('active'); 
    })
   }
