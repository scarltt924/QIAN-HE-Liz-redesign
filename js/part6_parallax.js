
let wrap = document.querySelector('.part_index');
let request = null;
let mouse = { x: 0, y: 0 };
let cx = window.innerWidth / 2;
let cy = window.innerHeight / 2;

document.querySelector('.part_index').addEventListener('mousemove', function(event) {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
cancelAnimationFrame(request);
request = requestAnimationFrame(update);
});

function update() {
    dx = mouse.x - cx;
    dy = mouse.y - cy;
    let tiltx = (dy / cy );
    let tilty = - (dx / cx);



  gsap.to("#container dec", 2, {x:-tilty*20, y:-tiltx*20  , rotation:360});
  gsap.to("#container liz", 2, {x:tiltx*-25, y:tilty*-15, rotation:360});
  gsap.to("#container bg", 2, {x:-tilty*20, y:-tiltx*20, rotation:360});

}


window.addEventListener('resize', function(event){
 window.innerWidth / 2;
   window.innerHeight / 2;
});