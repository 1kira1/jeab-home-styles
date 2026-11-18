/* Lazy-play muted loop videos: play when visible, pause when offscreen; static poster if reduced-motion. */
(function(){
  var vs=[].slice.call(document.querySelectorAll('video[data-v]')),rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
  vs.forEach(function(v){v.muted=true;v.loop=true;v.playsInline=true;v.setAttribute('playsinline','');v.preload='metadata'});
  if(rm)return;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){var v=e.target;if(e.isIntersecting){var p=v.play();if(p&&p.catch)p.catch(function(){})}else v.pause()})},{threshold:.2});
  vs.forEach(function(v){io.observe(v)});
})();
