
let counter = 0;
let imgId = 1;


gsap.timeline()
    .set('.ring', { rotationY:0}) //set initial rotationY so the parallax jump happens off screen
    .set('.img',  { // apply transform rotations to each image
      rotateY: (i)=> i*-36,
      transformOrigin: '50% 50% 500px',
      z: -500,
      backfaceVisibility:'hidden'
    })    
    .from('.img', {
      duration:1,
      y:200,
      opacity:0,
      stagger:0.1,
      ease:'expo'
    });
  

$('.next-btn').on('click', function(){
    counter += 36;
    imgId += 1;
    if(imgId > 10){
        imgId = 1;
    } 
    animation(counter, imgId);
});

$('.prev-btn').on('click', function(){
    counter -= 36;
    imgId -= 1;
    if(imgId < 1){
        imgId = 10;
    }
    animation(counter, imgId);
});


function animation(counter, imgId){
    gsap.to('.ring', { rotationY: counter});
    let current = document.getElementById(`${imgId}`);
    gsap.to('.img', {opacity:(i,t)=>(t==current)? 1:0.5, ease:'power3'});
}