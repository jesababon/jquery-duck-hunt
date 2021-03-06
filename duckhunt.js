$(function () {
  // I'll do some of the work for you, first I will grab the <body></body>
  const $body = $('body');

  // 1. Create a <div> with the class "duck" and add it to the body.

  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)  

  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left". Create
  // a function `moveDuck` that takes a duck object as an argument and sets the
  // "top" and "left" CSS properties.
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

  // 4. Try making the duck move to a different location every second

  function moveDuck() {
    //flap ducks wings
     setInterval(function () {
       $('.duck').toggleClass("flap");
     }, 250);


    //move duck around screen
    $('.duck').animate(1, function () {

      let left = Math.random() * window.innerWidth;
      let top = Math.random() * window.innerHeight;
      $('.duck').css({
        left: left,
        top: top,
      });


      function randomPosition(){
        $('.duck').each(function(){
          $(this).css({
            'top': Math.random()*window.innerHeight,
            'left': Math.random()*window.innerWidth,
          });
        });

      } randomPosition();

      //set duck starting position
      

      // if(Math.random() > 0.5){
      //   $('.duck').removeClass('shot').show().addClass('left');
      // }
      // else{
      //   $('.duck').removeClass('shot').show().addClass('right');
      // }
      });
    }

  // moveDuck();

  // 5. Congratulations! Move on to part 2!

  // ---------------------------- PART 2 ---------------------------------

  // 6. Things are getting a bit messy. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object

  function createDuck() {
    //moved duck creation here
    $('body').append('<div class="duck"></div>');
    $('.body').css('position', 'relative');
    //moved moveDuck function here
    setInterval(moveDuck, 1000);} //had to set moveDuck intervals as a callback
  
  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function
    function manyDucks() {
    let duckFlock = [];
      for (let i = 0; i < 5; i++) {

      createDuck();

    }
  
}

manyDucks();



  // 8. Uh oh, our ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations and in your `moveDuck()` function;


  //COULD NOT GET PAST RANDOMIZING DUCKS. REFERRED TO CLASSMATE NOTES FOR ENDING.

  // 9. Keep going! Move onto part 3!

  // --------------------------- PART 3 ------------------------------------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!

const div = document.querySelectorAll('div');
let gotHim = 0;

  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second)

  function shoot(){
    div.forEach(element =>
      {
        element.addEventListener("click", function(event){
          event.target.classList.toggle("shot");
          setInterval(function remove(){
            event.target.remove();
          }, 250);
          gotHim +=1;
          setTimeout(checkForWinner, 500);

        });
      }
    );
  }

  shoot();

  function checkForWinner(){
    if(gotHim === 5){
      alert("Winner Winner Duck Dinner"
      );
    }
  }

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. If not, alert "YOU WIN!"

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying

  // FIN. You win 1 trillion tokens.  Play the day away!
});

