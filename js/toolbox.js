// Calcul du score
var total = (document.getElementsByClassName('divColonne').length)
var score = total - (document.getElementsByClassName('no-display').length);

function updateScore(){
  // return score;
  console.log('compting');
  if (score == total) {
    $('.dialBox8').remove();
  }
}
setInterval(updateScore, 1000);

// Création de pop-up
function createPopUpWindow(element) {
    $('body').append('<div class ="popup"><div class ="divPopup '+ element +'"><h2></h2><p></p></div>')
  }
// Faire apparaître un élément dans la colonne de droite et le rendre manipulable
function displayColumnElementAndMakeDraggable(element){
  createPopUpWindow(element);
  $('div.popup').click(function(){
    $('div.popup').remove();
  })
  $('div.divColonne.' + element).removeClass('no-display');
  $('div.divColonne.' + element).draggable().css("z-index", "1");
  score++;     
  $('span#score').text(score);  
}

// Définir les combinaisons au moyen de trois parametres :
// 'element' est l'objet sur lequel 'accept' va être droppé pour créer 'result' 
function makeDroppableAndDefineResult(element,accept,result){
  $('div.divColonne.' + element).droppable({
        accept: '.' + accept,
        drop: function(event, ui) {
          displayColumnElementAndMakeDraggable(result);
          makeUndroppable(element);
        },
        over: function(event, ui) {
        $(this)
            .css("z-index", "1")
            .css("transform", "scale(1.5)")
            .css('transition','ease 0.2s');
        },
        out: function(event, ui) {
        $(this)
            .css("z-index", "2")
            .css("transform", "scale(1)").css('transition','');
        }
  })
}

// Enlever la faculté à être droppable à un élément 
function makeUndroppable(element) {
  $('div.divColonne.' + element).droppable({
    accept: ' ',
  });
  $('div.divColonne').attr('style','position: relative; z-index: 1;');
}

// Menu
function createMenu(){
    $('body').append('<div class ="popup nav"></div>');
    $('div.nav').append('<a id="reset" class="button block">Ranger les éléments</a><a id="resume" class="button block">Liste des éléments</a><a id="cv" class="button block">Télécharger mon CV</a><p></p><p class="block">pour en savoir plus sur moi</p><a class="button block" href="https://www.linkedin.com/in/fermin-lopez-amador/" target="_blank">Linkedin</a><a class="button block" href="https://instagram.com/ferminlopez_art" target="_blank">Instagram</a><a  class="button block" href="#" target="_blank">Github</a><p></p><p class="block">pour me contacter</p><a class="button block" href="mailto:ferminlopezamador@gmail.com">Mail</a>');
    $('a#reset').click(function() {
        $('div.divColonne').attr('style','position: relative; z-index: 1;');
    });
    $('#resume').click(function() {
      $('#liste').attr('style','opacity: 1;');
      $('#liste').attr('style','height: 3250px;');
    });
    $('#liste').click(function(){
      $('#liste').attr('style','opacity: 0;');
    })
    $('div.popup').click(function(){
      $('div.popup').remove();
    })
}

// Boite de dialogue
function createDialBox(element){
    $('body').append('<div class="dialBox ' + element + '"><p></p></div>');
}

//interaction page
$('a#menu').click(function() {
  createMenu();
});

$('a#resume').click(function() {
  createList();
});

function changerAnimVisage() {
    var nombre = Math.floor(Math.random() * 4);
    var tableauAnimations = ['moutha','moutho','rolleyes','smile'];
    $('link#ficheAnimationTete').attr('href','css/anim-visage-'+ tableauAnimations[nombre] +'.css');
};
changerAnimVisage();
setInterval(changerAnimVisage,5000);


//SCENARIO
// Début
$('a#buttonIntro').click(function(){
    $('link#cssPrincipal').attr('href','css/style.css');
    createDialBox('dialBox1');
    $('div.dialBox1').append('<a id="dessin" class="button">Récupérer élémént Dessin</a>');
    $('link#ficheAnimationTete').attr('href','css/anim-visage-talk.css');
    $('a#dessin').click(function(){
      displayColumnElementAndMakeDraggable('dessin');
      $('div.dialBox1').remove();
      createDialBox('dialBox2');
      $('link#ficheAnimationTete').attr('href','css/anim-visage-talk.css');
      $('div.dialBox2').append('<a id="formation" class="button">Récupérer élémént Formation</a>');
      $('a#formation').click(function(){
        displayColumnElementAndMakeDraggable('formation');
        $('div.dialBox2').remove()
        makeDroppableDefineResultAndDialBox3('dessin','formation','graphisme');/*Aller à la fonction suivante*/
        $('link#ficheAnimationTete').attr('href','css/anim-visage-talk.css');
      });
    });
});

//definit les interactions et lance une dialbox3
function makeDroppableDefineResultAndDialBox3(element,accept,result){
  $('div.divColonne.' + element).droppable({
        accept: '.' + accept,
        drop: function(event, ui) {
          displayColumnElementAndMakeDraggable(result);
          makeUndroppable(element);
          $('link#ficheAnimationTete').attr('href','css/anim-visage-talk.css');
          createDialBox3();/*Aller à la fonction suivante*/
        },
        over: function(event, ui) {
        $(this)
            .css("z-index", "1")
            .css("transform", "scale(1.5)")
            .css('transition','ease 0.2s');
        },
        out: function(event, ui) {
        $(this)
            .css("z-index", "2")
            .css("transform", "scale(1)").css('transition','');
        }
  })
}

// Boite de dialogue3
function createDialBox3(){
  $('body').append('<div class="dialBox dialBox3"><p></p></div>');
  $('div.dialBox3').append('<a id="photoshop" class="button">Récupérer élémént Photoshop</a>');
  $('div.dialBox3').append('<a id="illustrator" class="button">Récupérer élémént Illustrator</a>');
  $('div.dialBox3').append('<a id="indesign" class="button">Récupérer élémént InDesign</a>'); 
  
  $('#indesign').click(function(){
    displayColumnElementAndMakeDraggable('indesign');
    $('#indesign').remove()
  });
  $('#photoshop').click(function(){
    displayColumnElementAndMakeDraggable('photoshop');
    $('#photoshop').remove()
  });
  $('#illustrator').click(function(){
    displayColumnElementAndMakeDraggable('illustrator');
    makeDroppableAndDefineResultDesVect('dessin','illustrator','dessin-vectoriel');/*Aller à la fonction suivante*/
    $('#illustrator').remove()
  });
}

function makeDroppableAndDefineResultDesVect(element,accept,result){
  $('div.divColonne.' + element).droppable({
        accept: '.' + accept,
        drop: function(event, ui) {
          displayColumnElementAndMakeDraggable(result);
          makeUndroppable(element);
          $('.dialBox3').remove();
          $('link#ficheAnimationTete').attr('href','css/anim-visage-talk.css');
          createDialBox('dialBox4');
          $('div.dialBox4').append('<a id="digital" class="button">Récupérer élémént Digital</a>');
          $('#digital').click(function(){
            displayColumnElementAndMakeDraggable('digital');
            $('#div.dialBox4').remove();
            makeDroppableDefineResultAndDialBox5('formation','digital');/*Aller à la fonction suivante*/
            $('#digital').remove();
          });
        },
        over: function(event, ui) {
        $(this)
            .css("z-index", "1")
            .css("transform", "scale(1.5)")
            .css('transition','ease 0.2s');
        },
        out: function(event, ui) {
        $(this)
            .css("z-index", "2")
            .css("transform", "scale(1)").css('transition','');
        }
  })
}

function makeDroppableDefineResultAndDialBox5(element,accept){
  $('div.divColonne.' + element).droppable({
        accept: '.' + accept,
        drop: function(event, ui) {
          makeUndroppable(element);
          $('.dialBox4').remove();
          $('link#ficheAnimationTete').attr('href','css/anim-visage-talk.css');
          createDialBox45();/*Aller à la fonction suivante*/
        },
        over: function(event, ui) {
        $(this)
            .css("z-index", "1")
            .css("transform", "scale(1.5)")
            .css('transition','ease 0.2s');
        },
        out: function(event, ui) {
        $(this)
            .css("z-index", "2")
            .css("transform", "scale(1)").css('transition','');
        }
  })
}

// Boite de dialogue45
function createDialBox45(){
  $('link#ficheAnimationTete').attr('href','css/anim-visage-talk.css');
  $('body').append('<div class="dialBox dialBox4-5"><p></p></div>');
  $('div.dialBox4-5').append('<a id="ux" class="button">Récupérer élémént ux</a>');
  $('div.dialBox4-5').append('<a id="developpement" class="button">Récupérer élémént développement</a>');
  
  $('#ux').click(function(){
    displayColumnElementAndMakeDraggable('ux');
    $('#ux').remove()
  });
  
  $('#developpement').click(function(){
    displayColumnElementAndMakeDraggable('developpement');
    makeDroppableAndDefineResultDev('formation','developpement');/*Aller à la fonction suivante*/
    $('#developpement').remove();
  });
}

function makeDroppableAndDefineResultDev(element,accept){
  $('div.divColonne.' + element).droppable({
        accept: '.' + accept,
        drop: function(event, ui) {
          makeUndroppable(element);
          $('.dialBox4-5').remove();
          $('link#ficheAnimationTete').attr('href','css/anim-visage-talk.css');
          createDialBox5();/*Aller à la fonction suivante*/
        },
        over: function(event, ui) {
        $(this)
            .css("z-index", "1")
            .css("transform", "scale(1.5)")
            .css('transition','ease 0.2s');
        },
        out: function(event, ui) {
        $(this)
            .css("z-index", "2")
            .css("transform", "scale(1)").css('transition','');
        }
  })
}

// Boite de dialogue5
function createDialBox5(){
  $('body').append('<div class="dialBox dialBox5"><p></p></div>');
  $('div.dialBox5').append('<a id="html5" class="button">Récupérer élémént HTML5</a>');
  $('div.dialBox5').append('<a id="css3" class="button">Récupérer élémént CSS3</a>');
  $('div.dialBox5').append('<a id="javascript" class="button">Récupérer élémént Javascript</a>'); 
  
  $('#html5').click(function(){
    displayColumnElementAndMakeDraggable('html5');
    $('#html5').remove()
  });
  $('#css3').click(function(){
    displayColumnElementAndMakeDraggable('css3');
    $('#css3').remove()
  });
  $('#javascript').click(function(){
    displayColumnElementAndMakeDraggable('javascript');
    makeDroppableAndDefineResultBoot('css3','javascript');/*Aller à la fonction suivante*/
    $('#javascript').remove();
  });
}

function makeDroppableAndDefineResultBoot(element,accept){
  $('div.divColonne.' + element).droppable({
        accept: '.' + accept,
        drop: function(event, ui) {
          displayColumnElementAndMakeDraggable('bootstrap');
          makeUndroppable(element);
          $('.dialBox5').remove();
          $('link#ficheAnimationTete').attr('href','css/anim-visage-talk.css');
          createDialBox6();/*Aller à la fonction suivante*/
        },
        over: function(event, ui) {
        $(this)
            .css("z-index", "1")
            .css("transform", "scale(1.5)")
            .css('transition','ease 0.2s');
        },
        out: function(event, ui) {
        $(this)
            .css("z-index", "2")
            .css("transform", "scale(1)").css('transition','');
        }
  })
}

// Boite de dialogue6
function createDialBox6(){
  $('body').append('<div class="dialBox dialBox6"><p></p></div>');
  $('div.dialBox6').append('<a id="framework" class="button">Récupérer élémént framework</a>');
  
  $('#framework').click(function(){
    displayColumnElementAndMakeDraggable('framework');
    makeDroppableDefineResultAndDialBox7('javascript','framework');/*Aller à la fonction suivante*/
    $('#framework').remove();
  });
}
function makeDroppableDefineResultAndDialBox7(element,accept){
  $('div.divColonne.' + element).droppable({
        accept: '.' + accept,
        drop: function(event, ui) {
          makeUndroppable(element);
          $('.dialBox6').remove();
          $('link#ficheAnimationTete').attr('href','css/anim-visage-talk.css');
          createDialBox7();/*Aller à la fonction suivante*/
        },
        over: function(event, ui) {
        $(this)
            .css("z-index", "1")
            .css("transform", "scale(1.5)")
            .css('transition','ease 0.2s');
        },
        out: function(event, ui) {
        $(this)
            .css("z-index", "2")
            .css("transform", "scale(1)").css('transition','');
        }
  })
}

// Boite de dialogue7
function createDialBox7(){
  $('body').append('<div class="dialBox dialBox7"><p></p></div>');
  $('div.dialBox7').append('<a id="jquery" class="button">Récupérer élémént Jquery</a>');
  $('div.dialBox7').append('<a id="react" class="button">Récupérer élémént react</a>');
  $('div.dialBox7').append('<a id="angular" class="button">Récupérer élémént Angular</a>'); 
  
  $('#jquery').click(function(){
    displayColumnElementAndMakeDraggable('jquery');
    $('#jquery').remove()
  });
  $('#react').click(function(){
    displayColumnElementAndMakeDraggable('react');
    $('#react').remove()
  });
  $('#angular').click(function(){
    displayColumnElementAndMakeDraggable('angular');
    makeDroppableAndDefineResultBack('javascript','formation');/*Aller à la fonction suivante*/
    $('#angular').remove();
  });
}

function makeDroppableAndDefineResultBack(element,accept){
  $('div.divColonne.' + element).droppable({
        accept: '.' + accept,
        drop: function(event, ui) {
          displayColumnElementAndMakeDraggable('serveur');
          makeUndroppable(element);
          $('.dialBox7').remove();
          $('link#ficheAnimationTete').attr('href','css/anim-visage-talk.css');
          createDialBox8();/*Aller à la fonction suivante*/
        },
        over: function(event, ui) {
        $(this)
            .css("z-index", "1")
            .css("transform", "scale(1.5)")
            .css('transition','ease 0.2s');
        },
        out: function(event, ui) {
        $(this)
            .css("z-index", "2")
            .css("transform", "scale(1)").css('transition','');
        }
  })
}

// Boite de dialogue8
function createDialBox8(){
  $('body').append('<div class="dialBox dialBox8"><p></p></div>');
  $('div.dialBox8').append('<a id="mongodb" class="button">Récupérer élémént mongodb</a>');
  $('div.dialBox8').append('<a id="nodejs" class="button">Récupérer élémént nodejs</a>');
  
  $('#mongodb').click(function(){
    displayColumnElementAndMakeDraggable('mongodb');
    $('#mongodb').remove()
  });
  $('#nodejs').click(function(){
    displayColumnElementAndMakeDraggable('nodejs');
    $('#nodejs').remove()
  });
}




