var JEAB={S:{0:[1110,1560],1:[690,1560],2:[690,1560],3:[690,1560],4:[690,1560],5:[690,1680],6:[1020,1680]},
ROWS:[['Lundi – Jeudi','11h30 – 02h00',[1,2,3,4]],['Vendredi','11h30 – 04h00',[5]],['Samedi','17h00 – 04h00',[6]],['Dimanche','18h30 – 02h00',[0]]],
now:function(){var p=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Paris',weekday:'short',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date()),o={};p.forEach(function(x){o[x.type]=x.value});return{d:{Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6}[o.weekday],m:(+o.hour%24)*60+(+o.minute)}},
fmt:function(m){m=m%1440;return String(Math.floor(m/60)).padStart(2,'0')+'h'+String(m%60).padStart(2,'0')},
status:function(){var n=JEAB.now(),S=JEAB.S,td=S[n.d],pv=S[(n.d+6)%7],open=false,until=0;
 if(n.m>=td[0]&&n.m<td[1]){open=true;until=td[1]}else if(pv[1]>1440&&n.m+1440<pv[1]){open=true;until=pv[1]}
 return{open:open,until:until,next:td[0]>n.m?td[0]:S[(n.d+1)%7][0],day:n.d,text:open?"Ouvert maintenant · jusqu'à "+JEAB.fmt(until):'Fermé · ouvre à '+JEAB.fmt(td[0]>n.m?td[0]:S[(n.d+1)%7][0])}}};
JEAB.reserve=function(form,out,copy,get){var msg='';form.addEventListener('submit',function(e){e.preventDefault();msg=get();out.textContent=msg;out.classList.add('show');copy.style.display='inline-flex'});
 copy.addEventListener('click',function(){try{navigator.clipboard.writeText(msg).then(function(){copy.textContent='Copié ✓'},function(){copy.textContent='Sélectionnez le texte ci-dessus'})}catch(e){copy.textContent='Sélectionnez le texte ci-dessus'}})};
