$(document).ready(function(){
  const hasEvent = $('section.existing-content-tile.eventos-home div section').find('article');
  const countEvent = hasEvent.length;

  if (countEvent > 6) {
    hasEvent.slice(6).remove();

    $("section.existing-content-tile.eventos-home div section").append("<div class='todosEventos'><div class='container'><p><a href='https://portalpreprd.metodista.br/Metodista/eventos/'>Ver todos os eventos</a></p></div></div>");
  }

  const eventDescription = $('section.existing-content-tile.eventos-home .documentDescription.description');

  if (countEvent === 0) {
    eventDescription.text("Não há eventos nos próximos dias.").css("display","block");;
  }


});

 /* Vídeo Institucional */
$(document).ready(function() {
  if (window.location.href.indexOf("/institucional") > -1) {

    let videoInstitucional = "<video id='videoInstitucional' autoplay loop muted><source src='https://player.vimeo.com/external/372893009.hd.mp4?s=2a4b369dde2b34ae2b19d2e4368cc0c44d23b964&profile_id=175' type='video/mp4' /></video>"

    $("div.outer-wrapper div.container-fluid.nopadding").append(videoInstitucional);
  }
});

$(function() {
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

// Start of insert news to event
$(document).ready(function(jq) {
  $("#relatedItemBox a").each(function() {
    var url = jq(this).attr("href");

    var seletor = "#parent-fieldname-text";
    $(".hiddenStructure").load(url + " " + seletor);
  });
});
/* End of insert news to event */

/* Start of insert AddThis to news */
$(document).ready(function() {
  // URL
  document.getElementById("url").setAttribute("value", window.location.href);

  // Data e Hora
  var today = new Date();
  var date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;

  document.getElementById("data-e-hora").setAttribute("value", dateTime);

});

$(function() {
  if (!window.location.href.indexOf("noticias-anteriores")) {
    var target_date = new Date("november 24, 2019").getTime();
    var dias, horas, minutos, segundos;
    var regressiva = document.getElementById("regressiva");

    setInterval(function() {
      var current_date = new Date().getTime();
      var segundos_f = (target_date - current_date) / 1000;

      dias = parseInt(segundos_f / 86400);
      segundos_f = segundos_f % 86400;

      document.getElementById("dia").innerHTML = dias;
    }, 1000);
  }
});

jQuery(document).ready(function() {
  jQuery(".mosaic-tile-content a.summary-image img").each(function() {
    var imagem = jQuery(this).attr("src");

    var substr = imagem.split("/thumb");
    var direitos = substr[0] + "/preview";

    jQuery(this).attr({
      src: direitos
    });
  });
});

function mascara(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout("execmascara()", 1);
}

function execmascara() {
  v_obj.value = v_fun(v_obj.value);
}

function mtel(v) {
  v = v.replace(/\D/g, "");
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
  v = v.replace(/(\d)(\d{4})$/, "$1-$2");
  return v;
}

function id(el) {
  return document.getElementById(el);
}

window.onload = function() {
  id("celular").onkeypress =
    function() {
      mascara(this, mtel);
    } || null;
};

/* FLOAT MSG BUTTON */

$(document).ready(function(){
  var element = $('.floating-chat');
var myStorage = localStorage;

if (!myStorage.getItem('chatID')) {
    myStorage.setItem('chatID', createUUID());
}

setTimeout(function() {
    element.addClass('enter');
}, 1000);

element.click(openElement);

function openElement() {
    var messages = element.find('.messages');
    var textInput = element.find('.text-box');
    element.find('>i').hide();
    element.addClass('expand');
    element.find('.chat').addClass('enter');
    var strLength = textInput.val().length * 2;
    textInput.keydown(onMetaAndEnter).prop("disabled", false).focus();
    element.off('click', openElement);
    element.find('.header button').click(closeElement);
    element.find('#sendMessage').click(sendNewMessage);
    messages.scrollTop(messages.prop("scrollHeight"));
}

function closeElement() {
    element.find('.chat').removeClass('enter').hide();
    element.find('>i').show();
    element.removeClass('expand');
    element.find('.header button').off('click', closeElement);
    element.find('#sendMessage').off('click', sendNewMessage);
    element.find('.text-box').off('keydown', onMetaAndEnter).prop("disabled", true).blur();
    setTimeout(function() {
        element.find('.chat').removeClass('enter').show()
        element.click(openElement);
    }, 500);
}

function createUUID() {
    // http://www.ietf.org/rfc/rfc4122.txt
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

function sendNewMessage() {
    var userInput = $('.text-box');
    var newMessage = userInput.html().replace(/\<div\>|\<br.*?\>/ig, '\n').replace(/\<\/div\>/g, '').trim().replace(/\n/g, '<br>');

    if (!newMessage) return;

    messagesContainer.finish().animate({
        scrollTop: messagesContainer.prop("scrollHeight")
    }, 250);
}

function onMetaAndEnter(event) {
    if ((event.metaKey || event.ctrlKey) && event.keyCode == 13) {
        sendNewMessage();
    }
}
})

/* END OF FLOAT MSG BUTTON */
