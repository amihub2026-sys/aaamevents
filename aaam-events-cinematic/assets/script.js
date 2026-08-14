const header=document.querySelector('.site-header');
const menu=document.querySelector('.menu-btn');const links=document.querySelector('.nav-links');
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',scrollY>30));
menu?.addEventListener('click',()=>links?.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links?.classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
window.addEventListener('scroll',()=>document.querySelectorAll('.parallax').forEach(el=>{const r=el.getBoundingClientRect();el.style.transform=`translateY(${r.top*-.035}px)`}));


// Home cinematic background sound control. Browsers require a user gesture before unmuted playback.
const storyVideo=document.querySelector('#globalStoryVideo');
const soundToggle=document.querySelector('#soundToggle');
if(storyVideo&&soundToggle){
  soundToggle.addEventListener('click',async()=>{
    storyVideo.muted=!storyVideo.muted;
    if(!storyVideo.muted){try{await storyVideo.play()}catch(e){storyVideo.muted=true}}
    soundToggle.classList.toggle('on',!storyVideo.muted);
    soundToggle.textContent=storyVideo.muted?'🔊 Sound On':'🔇 Sound Off';
  });
}
