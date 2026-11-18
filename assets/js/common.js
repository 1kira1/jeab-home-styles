(function(){
  var C=window.JEAB_CONFIG||{},$$=function(s){return[].slice.call(document.querySelectorAll(s))};
  /* contact placeholders */
  $$('[data-cfg]').forEach(function(e){var k=e.dataset.cfg,v=C[k];
    if(e.tagName==='A'){e.href=v?(k==='phone'?'tel:'+v.replace(/\s/g,''):k==='email'?'mailto:'+v:v):'#contact'}
    if(!e.hasAttribute('data-keep'))e.textContent=v?(k==='instagram'?'Instagram':v):'À renseigner'});
  /* hours */
  $$('#hr').forEach(function(el){el.innerHTML=JEAB.ROWS.map(function(r){return '<div class="hr" data-d="'+r[2].join(',')+'"><b>'+r[0]+'</b><s></s><span>'+r[1]+'</span></div>'}).join('')});
  function st(){var s=JEAB.status();
    $$('[data-st]').forEach(function(e){e.classList.remove('op','cl2');e.classList.add(s.open?'op':'cl2');var t=e.querySelector('.t');if(t)t.textContent=s.text});
    $$('.hr').forEach(function(r){r.classList.toggle('now',r.dataset.d.split(',').indexOf(String(s.day))>-1)})}
  st();setInterval(st,60000);
  /* reveal */
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  $$('.rv').forEach(function(e){io.observe(e)});
  /* mobile nav */
  var b=document.getElementById('burger'),m=document.getElementById('menu');
  if(b&&m){b.addEventListener('click',function(){m.classList.toggle('on')});m.addEventListener('click',function(e){if(e.target.tagName==='A')m.classList.remove('on')})}
})();
