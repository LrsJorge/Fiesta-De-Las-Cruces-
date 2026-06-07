// ─── CRUCES ───────────────────────────────────────────────
const CRUCES = [
  {n:"Cruz de San José",i:"⛪",d:"La más antigua, desde 1886. Encabeza todas las procesiones y es el símbolo espiritual de la festividad."},
  {n:"Cruz de Arenillas",i:"🏜️",d:"La segunda más antigua (~1920). Al final se traslada a Río Seco en una peregrinación de 2 horas con sus devotos."},
  {n:"Cruz de Pescadores — Chancayllo",i:"🐟",d:"Representa a los pescadores del pueblo. Una de las tres cruces de pescadores que unen el mar y la fe."},
  {n:"Cruz de Pescadores — Huacho",i:"⚓",d:"Proveniente de Huacho, une a los pueblos hermanos de la costa norte de Lima en esta celebración."},
  {n:"Cruz de Pescadores — Chancay",i:"🌊",d:"Representa a los pescadores de Chancay, enriqueciendo la festividad con distintas comunidades costeras."},
  {n:"Cruz de San Pedro",i:"🗝️",d:"Se incorporó en 2001. Su Santo Madero fue donado por Candelaria, tradición de donación entre cruces."},
  {n:"Cruz de La Capilla",i:"🕌",d:"Su Santo Madero fue donado por Arenillas. Representa el núcleo espiritual del pueblo."},
  {n:"Cruz de San Cayetano",i:"⭐",d:"Se integró a mediados de los 50. Su ingreso marcó el inicio del crecimiento de la festividad."},
  {n:"Cruz de La Candelaria",i:"🕯️",d:"Ingresó en 1979. Sus coloridos listones y devoción la hacen una de las más queridas."},
  {n:"Cruz de Nazareno",i:"🙏",d:"Incorporada en 1988. Manto morado con bordados dorados. Sus flores son donadas por fieles de todo el país."},
  {n:"Cruz de 4 de Junio",i:"📅",d:"La más reciente. Representa al centro poblado 4 de Junio y ya ha conquistado el corazón de los devotos."},
  {n:"Cruz del Colegio",i:"🏫",d:"Representa al IE Daniel Alcides Carrión. Alumnos y docentes participan en la festividad y el desfile."},
  {n:"Cruz de Los Gladiolos",i:"🌸",d:"Lleva el nombre de la hermosa flor. Una de las más espectaculares con flores y listones multicolores."}
];

// ─── GALERÍA ──────────────────────────────────────────────
const GALERIA = [
  {key:"IMG_CAPILLA",  n:"Las cruces en la capilla",     d:"Las Santísimas Cruces adornan la capilla de Chancayllo con sus coloridos listones y flores antes de las procesiones."},
  {key:"IMG_ARENILLAS",n:"Cruz de Arenillas",            d:"La segunda más antigua (~1920). Sus listones son renovados cada año. Al cierre se lleva a Río Seco."},
  {key:"IMG_NAZARENO", n:"Cruz de Nazareno",             d:"Con su manto morado y bordados dorados, una de las más veneradas. Sus flores son donadas por devotos de todo el país."},
  {key:"IMG_4JUNIO",   n:"Cruz de 4 de Junio",           d:"La más reciente. Representa al centro poblado 4 de Junio y ya ha conquistado el corazón de los fieles."},
  {key:"IMG_CASTILLO", n:"Castillo pirotécnico",         d:"El espectacular castillo de 10 pisos iluminando el cielo de Chancayllo en la víspera de fiesta."},
  {key:"IMG_VERBENA",  n:"Verbena y baile",              d:"La gran verbena trae artistas, cómicos y orquestas nacionales. El pueblo baila marinera y música tradicional."},
  {key:"IMG_PROCESION",n:"Procesión de las cruces",      d:"Las cruces recorren las calles principales acompañadas de bandas. Los devotos las siguen en acto de fe."},
  {key:"IMG_RIOSECO",  n:"Despedida en Río Seco",        d:"El martes final, las cruces de Arenillas y Pescadores van a su lugar de reposo en la playa de Río Seco."},
  {key:"IMG_IGLESIA",  n:"Capilla de Chancayllo",        d:"El corazón espiritual. Punto de partida de todas las procesiones y misas durante los 4 días."}
];

// ─── INIT ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function(){
  initEstrellas();
  initCruces();
  initGaleria();
  initContador();
});

function initEstrellas(){
  const sc = document.getElementById('stars-c');
  if(!sc) return;
  for(let i=0;i<28;i++){
    const s=document.createElement('div');
    s.className='star';
    s.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*3}s;animation-duration:${1.5+Math.random()*2}s`;
    sc.appendChild(s);
  }
}

function initCruces(){
  const cg = document.getElementById('cg');
  if(!cg) return;
  CRUCES.forEach(function(c){
    const d=document.createElement('div');
    d.className='cc';
    d.innerHTML='<div class="cc-i">'+c.i+'</div><div class="cc-n">'+c.n+'</div>';
    d.onclick=function(){
      document.querySelectorAll('.cc').forEach(function(x){x.classList.remove('sel');});
      this.classList.add('sel');
      const b=document.getElementById('cinfo');
      b.style.display='block';
      b.innerHTML='<strong style="color:#d4a574">'+c.i+' '+c.n+'</strong><br><br>'+c.d;
      b.scrollIntoView({behavior:'smooth',block:'nearest'});
    };
    cg.appendChild(d);
  });
}

function initGaleria(){
  const gg = document.getElementById('gg');
  if(!gg) return;
  GALERIA.forEach(function(img){
    const src = (typeof IMAGENES !== 'undefined' && IMAGENES[img.key]) ? IMAGENES[img.key] : '';
    const d=document.createElement('div');
    d.className='gi';
    d.innerHTML='<img src="'+src+'" alt="'+img.n+'"><div class="gi-lbl">'+img.n+'</div>';
    d.onclick=function(){
      document.getElementById('gbig-img').src=src;
      document.getElementById('gbig-t').textContent=img.n;
      document.getElementById('gbig-d').textContent=img.d;
      const big=document.getElementById('gbig');
      big.classList.add('show');
      big.scrollIntoView({behavior:'smooth',block:'nearest'});
    };
    gg.appendChild(d);
  });
}

function cerrarGal(){
  document.getElementById('gbig').classList.remove('show');
}

function initContador(){
  function upd(){
    const meta=new Date('2026-06-19T22:00:00'), now=new Date(), diff=meta-now;
    if(diff<=0){document.getElementById('cd').textContent='¡YA!';return;}
    document.getElementById('cd').textContent=Math.floor(diff/86400000);
    document.getElementById('ch').textContent=String(Math.floor((diff%86400000)/3600000)).padStart(2,'0');
    document.getElementById('cm').textContent=String(Math.floor((diff%3600000)/60000)).padStart(2,'0');
    document.getElementById('cs').textContent=String(Math.floor((diff%60000)/1000)).padStart(2,'0');
  }
  upd(); setInterval(upd,1000);
}

// ─── FUNCIONES GLOBALES ───────────────────────────────────
function tab(id,btn){
  document.querySelectorAll('.panel').forEach(function(p){p.classList.remove('on');});
  document.querySelectorAll('.tab').forEach(function(t){t.classList.remove('on');});
  document.getElementById(id).classList.add('on');
  btn.classList.add('on');
}

function animCruz(el){
  el.style.transform='scale(1.5) rotate(20deg)';
  el.style.color='#d4a574';
  setTimeout(function(){el.style.transform='';el.style.color='';},500);
}

function animFlor(el){
  el.style.transform='scale(2) rotate(-20deg)';
  setTimeout(function(){el.style.transform='';},400);
}

function boom(){
  const c=document.getElementById('fuegos');
  const e=['🎆','✨','🌟','💥','🎇','⭐','🌠','🎉','🎊','💫'];
  c.innerHTML='';
  for(let i=0;i<18;i++){
    setTimeout(function(){
      const s=document.createElement('span');
      s.className='fp';
      s.textContent=e[Math.floor(Math.random()*e.length)];
      s.style.animationDelay=(Math.random()*.7)+'s';
      s.style.fontSize=(1.1+Math.random()*.9)+'rem';
      c.appendChild(s);
      setTimeout(function(){s.remove();},1500);
    },i*80);
  }
}
