(function(){
  var r=document.documentElement,b=document.getElementById('theme');
  try{var t=localStorage.getItem('theme');if(t)r.setAttribute('data-theme',t)}catch(e){}
  b.addEventListener('click',function(){
    var dark=r.getAttribute('data-theme')?r.getAttribute('data-theme')==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
    var n=dark?'light':'dark';r.setAttribute('data-theme',n);
    try{localStorage.setItem('theme',n)}catch(e){}
  });
  var links=[].slice.call(document.querySelectorAll('nav a'));
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){links.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id)})}
  })},{rootMargin:'-40% 0px -55% 0px'});
  document.querySelectorAll('section[id],#home').forEach(function(s){io.observe(s)});
  if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
    var drops=[].slice.call(document.querySelectorAll('.hero h1,.hero .role,.hero .sum,.hero .cta,.marq,section h2,#about p,.photo,.group h3,.chip,.proj,.ach .card,.edu-row,.cc,.contact p,.links a'));
    r.classList.add('js');
    drops.forEach(function(d){d.classList.add('drop')});
    var rain=new IntersectionObserver(function(es,o){
      var vis=es.filter(function(e){return e.isIntersecting});
      vis.forEach(function(e,i){
        e.target.style.setProperty('--d',((i%12)*0.07).toFixed(2)+'s');
        e.target.classList.add('in');o.unobserve(e.target);
        setTimeout(function(){e.target.style.removeProperty('--d')},2200);
      });
    },{rootMargin:'0px 0px -8% 0px',threshold:0.05});
    drops.forEach(function(d){rain.observe(d)});
  }
  var tt=document.getElementById('totop');
  function sc(){tt.classList.toggle('show',window.scrollY>400)}
  window.addEventListener('scroll',sc,{passive:true});sc();
  tt.addEventListener('click',function(){window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'})});
})();

