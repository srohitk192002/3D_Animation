$(document).ready(function () {

    $("#myModal").modal("show");
  
    $("#shortKey").on("click", function () {
        debugger;
      $(".modal-dialog").css("display", "block");
      $('.modal-dialog').fadeIn('slow').delay(1000).hide('slow'); //-------this is for alert section when we click okay btn
      
    })

    
  
    $("#later").on("click", function () {   
        setTimeout(function () {
          $("#myModal").modal("show");
        },10000);
    });
  
  });
  
  
  
  
  
  if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(() => { console.log('Service Worker Registered'); });
  }
  
  // Code to handle install short cut on desktop
  
  let deferredPrompt;
  const addBtn = document.querySelector('#shortKey');
  
  window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  addBtn.addEventListener('click', () => {
   
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
  });