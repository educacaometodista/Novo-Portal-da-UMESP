$(function() {
    var header = $("#mainnavigation-wrapper");
    var bodie = $("body");
    if ($(window).width() > 767) {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 149) {
                bodie.addClass("fixedmenu");
            } else {
                bodie.removeClass("fixedmenu");
            }
        });
    }
});

/* Insert news to event */

$(document).ready(function(jq) {
  $("#relatedItemBox a").each(function(){

      var url = jq(this).attr('href');

      var seletor = "#parent-fieldname-text"; 
      $(".hiddenStructure").load(url + " " + seletor) 
      
   });
}) 

/* Insert news to event */

$(function() {
   var target_date = new Date("november 24, 2019").getTime();
    var dias, horas, minutos, segundos;
    var regressiva = document.getElementById("regressiva");

    setInterval(function () {

        var current_date = new Date().getTime();
        var segundos_f = (target_date - current_date) / 1000;

    dias = parseInt(segundos_f / 86400);
        segundos_f = segundos_f % 86400;

        document.getElementById('dia').innerHTML = dias;


    }, 1000); 
});

jQuery(document).ready(function(){ 

jQuery(".mosaic-tile-content a.summary-image img").each(function(){

var imagem = jQuery(this).attr('src');

var substr = imagem.split('/thumb');
var direitos = substr[0] + "/preview";

 jQuery(this).attr({
          src:direitos,
        });

});
});