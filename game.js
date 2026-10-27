/* ====== بيانات اللعبة: عدّلي الأسماء والملفات من هنا ====== */
const ANIMALS=[['cat','قطة'],['sheep','خروف'],['duck','بطة'],['bird','عصفور']]
  .map(([id,ar])=>({id,ar,snd:['mp3','mp4','m4a','wav'].map(e=>'sounds/'+id+'.'+e)}));
const OBJECTS=[['elephant','فيل'],['donkey','حمار'],['car','سيارة']].map(([id,ar])=>({id,ar}));
const PRAISE=['برافو!','أحسنت!','شاطر!'];

/* ====== الرسومات ====== */
const P={
cat:'<circle cx="50" cy="58" r="30" fill="#f6a44b"/><path d="M24 40L28 14L45 32ZM76 40L72 14L55 32Z" fill="#f6a44b"/><circle cx="40" cy="54" r="4" fill="#333"/><circle cx="60" cy="54" r="4" fill="#333"/><path d="M45 66Q50 72 55 66" stroke="#333" fill="none" stroke-width="3"/><path d="M8 60H30M8 70H30M70 60H92M70 70H92" stroke="#333" stroke-width="2"/>',
sheep:'<rect x="34" y="78" width="7" height="16" fill="#444"/><rect x="60" y="78" width="7" height="16" fill="#444"/><g fill="#fff" stroke="#bbb" stroke-width="2"><circle cx="28" cy="48" r="18"/><circle cx="50" cy="38" r="20"/><circle cx="72" cy="48" r="18"/><circle cx="36" cy="66" r="18"/><circle cx="64" cy="66" r="18"/></g><ellipse cx="50" cy="58" rx="15" ry="18" fill="#4a4a4a"/><circle cx="44" cy="54" r="3.5" fill="#fff"/><circle cx="56" cy="54" r="3.5" fill="#fff"/>',
duck:'<ellipse cx="45" cy="68" rx="32" ry="22" fill="#ffd84a"/><circle cx="68" cy="38" r="18" fill="#ffd84a"/><path d="M82 38L98 44L82 50Z" fill="#ff8a1f"/><circle cx="70" cy="33" r="3.5" fill="#333"/><path d="M30 66Q45 82 60 66" stroke="#e5b400" fill="none" stroke-width="3"/>',
bird:'<path d="M20 60L2 48L6 70Z" fill="#2a7fc0"/><ellipse cx="48" cy="58" rx="30" ry="22" fill="#4aa8e8"/><circle cx="72" cy="40" r="15" fill="#4aa8e8"/><path d="M85 38L98 43L85 47Z" fill="#ffc21f"/><circle cx="74" cy="37" r="3.5" fill="#333"/><ellipse cx="46" cy="60" rx="14" ry="9" fill="#2a7fc0"/>',
elephant:'<rect x="40" y="70" width="12" height="22" fill="#7d8b99"/><rect x="68" y="70" width="12" height="22" fill="#7d8b99"/><ellipse cx="60" cy="58" rx="34" ry="26" fill="#9aa8b6"/><circle cx="32" cy="46" r="20" fill="#9aa8b6"/><path d="M20 56Q8 70 14 90" stroke="#9aa8b6" stroke-width="12" fill="none" stroke-linecap="round"/><circle cx="44" cy="52" r="12" fill="#b9c4cf"/><circle cx="28" cy="40" r="3.5" fill="#333"/>',
donkey:'<ellipse cx="30" cy="20" rx="8" ry="18" fill="#8a6a4f" transform="rotate(-15 30 20)"/><ellipse cx="70" cy="20" rx="8" ry="18" fill="#8a6a4f" transform="rotate(15 70 20)"/><ellipse cx="50" cy="52" rx="24" ry="30" fill="#8a6a4f"/><ellipse cx="50" cy="74" rx="18" ry="14" fill="#e9d9c4"/><circle cx="40" cy="46" r="4" fill="#222"/><circle cx="60" cy="46" r="4" fill="#222"/><circle cx="44" cy="74" r="2.5" fill="#444"/><circle cx="56" cy="74" r="2.5" fill="#444"/>',
car:'<path d="M6 62L16 40H62L78 62Z" fill="#ff6b4a"/><rect x="2" y="58" width="96" height="22" rx="8" fill="#e8472a"/><path d="M22 44H38V58H16ZM42 44H58L68 58H42Z" fill="#cfeefc"/><circle cx="26" cy="80" r="11" fill="#333"/><circle cx="74" cy="80" r="11" fill="#333"/><circle cx="26" cy="80" r="4" fill="#ccc"/><circle cx="74" cy="80" r="4" fill="#ccc"/>',
bag:'<path d="M38 28V18H62V28" stroke="#6b3f1d" stroke-width="6" fill="none"/><rect x="10" y="28" width="80" height="60" rx="10" fill="#c9792f"/><rect x="10" y="50" width="80" height="6" fill="#6b3f1d"/><rect x="44" y="46" width="12" height="14" rx="3" fill="#ffd84a"/><circle cx="26" cy="72" r="7" fill="#1f9fbf"/><path d="M68 66L74 80L62 80Z" fill="#3db36b"/>'};
const art=(id,c='')=>`<svg viewBox="0 0 100 100" class="art ${c}">${P[id]}</svg>`;
const pencil=(len,col)=>{const x=200-len;return `<svg viewBox="0 0 200 40" class="pen"><path d="M${x+30} 8L${x} 20L${x+30} 32Z" fill="#f2d2a0"/><rect x="${x+30}" y="8" width="${len-40}" height="24" fill="${col}"/><rect x="190" y="8" width="10" height="24" rx="3" fill="#f28ab2"/></svg>`};
const light=(on)=>`<svg viewBox="0 0 100 200" class="art light"><rect x="14" y="4" width="72" height="192" rx="22" fill="#2b3440"/><circle cx="50" cy="52" r="26" fill="${on==='red'?'#ff3b30':'#5a3b3b'}"/><circle cx="50" cy="100" r="26" fill="#5a5a3b"/><circle cx="50" cy="148" r="26" fill="${on==='green'?'#2fd05a':'#2f5a3b'}"/></svg>`;

/* ====== أدوات ====== */
const $=s=>document.querySelector(s);
const shuffle=a=>a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);
let steps=[],i=0,stars=0,praise=0;

function build(){
  stars=0;i=0;steps=[];
  shuffle(ANIMALS).forEach(a=>steps.push({t:'١) خمّن الحيوان',q:'مين ده؟',type:'animal',a}));
  OBJECTS.forEach(o=>steps.push({t:'٢) إيه ده؟',q:'إيه ده؟',type:'object',o}));
  shuffle(['long','short']).forEach(k=>steps.push({t:'٣) طويل ولا قصير؟',q:k==='long'?'فين الطويل؟':'فين القصير؟',type:'len',k}));
  shuffle(['red','green']).forEach(c=>steps.push({t:'٤) إشارة المرور',q:c==='red'?'الأحمر معناه إيه؟':'الأخضر معناه إيه؟',type:'light',c}));
}

/* ====== الشاشات ====== */
function welcome(){
  $('#app').innerHTML=`<h1>رحلة البحث عن الكنز</h1>${art('bag','top')}<h2>يلا نبدأ الرحلة!</h2><button class="big" id="go">ابدأ</button>`;
  $('#go').onclick=()=>{build();show()};
}

function show(){
  const s=steps[i]; if(!s)return end();
  let top='',ch=[];
  if(s.type==='animal'){
    top=`<button class="sound" id="snd">🔊 اسمع الصوت</button>`;
    const others=shuffle(ANIMALS.filter(x=>x.id!==s.a.id)).slice(0,2);
    ch=shuffle([s.a,...others]).map(x=>({h:art(x.id)+x.ar,ok:x.id===s.a.id}));
  }
  if(s.type==='object') top=`<div class="top">${art(s.o.id)}</div><div class="word" id="word"></div><button class="sound" id="rev">اعرف الاسم</button>`;
  if(s.type==='len') ch=shuffle([{h:pencil(200,'#ffc21f'),ok:s.k==='long'},{h:pencil(90,'#3db36b'),ok:s.k==='short'}]);
  if(s.type==='light'){
    top=`<div class="top">${light(s.c)}</div>`;
    ch=shuffle([{h:'✋ قف',ok:s.c==='red'},{h:'🚶 امشي',ok:s.c==='green'}]);
  }
  $('#app').innerHTML=`<header><span>${s.t}</span><span>⭐ ${stars}</span></header><h2>${s.q}</h2>${top}
  <div class="choices">${ch.map((c,n)=>`<button class="choice" data-n="${n}">${c.h}</button>`).join('')}</div>
  <div id="fb" aria-live="polite"></div><button class="big" id="next" hidden>التالي ◀</button>`;
  $('#next').onclick=()=>{i++;show()};
  if(s.type==='animal') $('#snd').onclick=()=>{
    (async()=>{let err='';
      for(const u of s.a.snd){try{try{await new Audio(u).play()}catch(x){const v=document.createElement('video');v.src=u;await v.play()}return}catch(e){err=e.name+' | '+u}}
      $('#fb').className='try';$('#fb').textContent='الصوت مش شغال ('+err+')';
    })();
  };
  if(s.type==='object') $('#rev').onclick=()=>{
    $('#word').textContent=s.o.ar;$('#rev').hidden=true;correct('');
  };
  document.querySelectorAll('.choice').forEach(b=>b.onclick=()=>{
    const c=ch[b.dataset.n];
    if(c.ok){b.classList.add('right');
      document.querySelectorAll('.choice').forEach(x=>x.disabled=true);
      correct(s.type==='light'?(s.c==='red'?'الأحمر = قف ✋':'الأخضر = امشي 🚶'):'');
    }else{b.classList.add('wrong');b.disabled=true;
      $('#fb').className='try';$('#fb').textContent='حاول تاني!';}
  });
}

function correct(extra){
  stars++;
  const fb=$('#fb');fb.className='';
  fb.innerHTML=`<span class="star">⭐</span> ${PRAISE[praise++%PRAISE.length]} ${extra}`;
  $('#next').hidden=false;
  document.querySelector('header span:last-child').textContent='⭐ '+stars;
}

function end(){
  $('#app').innerHTML=`<h1>أحسنت!</h1><h2>خلصنا الرحلة بنجاح!</h2><div class="stars">${'⭐'.repeat(stars)}</div><button class="big" id="again">العب مرة تانية</button>`;
  $('#again').onclick=()=>{build();show()};
}

welcome();
