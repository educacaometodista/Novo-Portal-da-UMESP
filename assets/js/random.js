function randombg(){
  var random= Math.floor(Math.random() * 4) + 0;
  var bigSize = ["url('https://portalpreprd.metodista.br/Metodista/++theme++portal-umesp/assets/img/bg/umesp1.jpg')",
                 "url('https://portalpreprd.metodista.br/Metodista/++theme++portal-umesp/assets/img/bg/umesp2.jpg')",
                 "url('https://portalpreprd.metodista.br/Metodista/++theme++portal-umesp/assets/img/bg/umesp3.jpg')",
                 "url('https://portalpreprd.metodista.br/Metodista/++theme++portal-umesp/assets/img/bg/umesp3.jpg')"]
  document.querySelector("body.section-home .outer-wrapper > .container .destaqueshome.mosaic-grid-row-fluid").style.backgroundImage=bigSize[random];
}
