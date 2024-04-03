
let counter = 0;
let imgId = 1;

gsap.timeline()
    .set('.ring', { rotationY:0, cursor:'grab' }) //set initial rotationY so the parallax jump happens off screen
    .set('.img',  { // apply transform rotations to each image
      rotateY: (i)=> i*-36,
      transformOrigin: '50% 50% 500px',
      z: -500,
    //   backgroundPosition:(i)=>getBgPos(i),
      backfaceVisibility:'hidden'
    })    
    .from('.img', {
      duration:1.5,
      y:200,
      opacity:0,
      stagger:0.1,
      ease:'expo'
    })
    // .add(()=>{
    //   $('.btn').on('click', function(){
       
    //   });
    // }, '-=0.5')
  

    $('.next-btn').on('click', function(){
        counter += 36;
        imgId += 1;
        if(imgId > 10){
            imgId = 1;
        } 
        gsap.to('.ring', { rotationY: counter});
        
        let current = document.getElementById(`${imgId}`);
        // alert(current);
        
        gsap.to('.img', {opacity:(i,t)=>(t==current)? 1:0.5, ease:'power3'})
    });

    $('.prev-btn').on('click', function(){
        counter -= 36;
        imgId -= 1;
        if(imgId < 1){
            imgId = 10;
        }
        
        gsap.to('.ring', { rotationY: counter});
        
        let current = document.getElementById(`${imgId}`);
        // alert(current);
        
        gsap.to('.img', {opacity:(i,t)=>(t==current)? 1:0.5, ease:'power3'})
    });
