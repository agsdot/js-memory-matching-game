
$(document).ready(function(){

  var letterTiles = new Array();
  var alphabetarray = new Array("a","b","c","d","e","f","g","h","i","j");

  var tile = '';
  var numOfTiles = 10;

  $('#small_btn').on('click', function(){

    for(var i = 0; i < numOfTiles; i += 1){
      tile += '<li class="tile" id="'+ i +'"><div class="front"></div><div class="back hidden"></div></li>';
    }

    $('#game').html(tile);

    // $('.tile').on('click', function(){
    //   $(this).children(':first').fadeTo('fast', 0);
    //   $(this).children(':last').removeClass('hidden');
    // });

    // $('.tile').on('click','.front', function(){
      // $(this).next().removeClass('hidden');
      // $(this).remove();
      // $(this).sibling().removeClass('hidden');

    // $('.tile').on('click', function(){
    //   $(this).children(':first').fadeTo('fast', 0);
    //   $(this).children(':last').removeClass('hidden');
    // });

    $('.tile').on('click', function(){
      if( ($('.hidden').length)%2 === 0 ){
        console.log("hi");
      $(this).children(':first').fadeTo('fast', 0);
      $(this).children(':last').removeClass('hidden');
      $(this).children(':last').addClass('examining');

      }
      else {
        if( $(this).children(':last').html() === $('.examining').html() ){

            $('.examining').addClass('matched');
            $('.examining').removeClass('examining');

            $(this).children(':first').fadeTo('fast', 0);
            $(this).children(':last').removeClass('hidden');

            $(this).children(':last').addClass('matched');

        }
        else {
          $(this).children(':first').fadeTo('fast', 0);
          $(this).children(':last').removeClass('hidden');
          setTimeout(function(){$(this).children(':last').addClass("hidden");}, 800);
          // setTimeout(function(){$(this).children(':first').fadeIn('fast', 0);}, 800);
          $('.examining').removeClass('examining');


        }

        }

      });




    $('#game li div.back').each(function(){
      var randomnumber = Math.floor(Math.random()*Math.round(numOfTiles/2));
      while (get_occurance_count(randomnumber)) {
        randomnumber = Math.floor(Math.random()*Math.round(numOfTiles/2));
      }
      // console.log(randomnumber);
      // $(this).css("background","url('images/"+randomnumber+".png')").css("background-repeat","no-repeat");
      $(this).html(alphabetarray[randomnumber]);

      letterTiles.push(randomnumber);
    });

    function get_occurance_count(randomnumber){
        var count = 0;
        for ( var i = 0; i < letterTiles.length; i++ ) {
            if(letterTiles[i] == randomnumber)
              count++;
        }
        if(count == 2) return true;
        return false;
    }




  });
});