
'use strict';
// These are official source links. No film media or third-party posters are hosted by Chezzy.
const films=[
  {id:'llamigos',title:'Caminandes: Llamigos',year:'2016',runtime:'2 min 30 sec',youtubeId:'L6mLFxGRFI4',genres:['animation','comedy'],tag:'COMEDY SHORT',art:'🦙',artClass:'art-caminandes',subtitle:'Animation · Comedy · Short',description:'A goofy, mostly wordless animated adventure with a curious llama and a penguin. Perfect for a tiny movie break.',creator:'Blender Foundation',licence:'Creative Commons Attribution (CC BY 3.0)',licenceUrl:'https://creativecommons.org/licenses/by/3.0/',sourceUrl:'https://studio.blender.org/projects/caminandes-3/',subtitles:'Not confirmed',credit:'Caminandes: Llamigos — © Blender Foundation. Original film and source: Blender Studio. Licensed CC BY; this listing uses original Chezzy emoji artwork rather than the film poster.'},
  {id:'singularity',title:'Singularity',year:'2026',runtime:'6 min 31 sec',youtubeId:'l5OZu-IrXpw',genres:['animation','adventure'],tag:'SPACE ADVENTURE',art:'✦',artClass:'art-singularity',subtitle:'Animation · Sci-fi · Short',description:'A beautiful animated science-fiction adventure following a small creature on a surprising journey through space.',creator:'Blender Foundation',licence:'Creative Commons Attribution 4.0 (CC BY 4.0)',licenceUrl:'https://studio.blender.org/projects/singularity/pages/licensing/',sourceUrl:'https://studio.blender.org/projects/singularity/',subtitles:'Not confirmed',credit:'Singularity — © Blender Foundation. Source: Blender Studio. Film content CC BY 4.0; logos and trademarks are excluded. Chezzy does not use those logos.'}
];
const grid=document.getElementById('filmGrid'),empty=document.getElementById('emptyResults'),search=document.getElementById('search'),modal=document.getElementById('detailModal');
let currentFilter='all',primedId=null,lastFocus=null;
function popcorn(parent){
  const flash=document.createElement('span');flash.className='pop-flash';parent.appendChild(flash);
  flash.addEventListener('animationend',()=>flash.remove(),{once:true});
  for(let i=0;i<12;i++){
    const p=document.createElement('span'),a=i*2*Math.PI/12,r=68+(i%4)*28;
    p.className='popcorn-piece';p.textContent=i%4===0?'✦':'🍿';
    p.style.setProperty('--dx',Math.round(Math.cos(a)*r)+'px');
    p.style.setProperty('--dy',Math.round(Math.sin(a)*r)+'px');
    p.style.setProperty('--rot',(i%2?-135:160)+'deg');
    p.style.setProperty('--delay',((i%4)*20)+'ms');
    parent.appendChild(p);p.addEventListener('animationend',()=>p.remove(),{once:true});
  }
  setTimeout(()=>parent.querySelectorAll('.pop-flash,.popcorn-piece').forEach(el=>el.remove()),1700);
}
function makeCard(film){
  const card=document.createElement('article');card.className='film-card';
  const btn=document.createElement('button');btn.type='button';btn.className='film-click';
  btn.setAttribute('aria-label',film.title+'. Tap once for popcorn, twice for details.');
  btn.innerHTML='<div class="card-art '+film.artClass+'"><span class="art-caption">'+film.tag+'</span><span class="art-spark" aria-hidden="true">✦</span><span class="art-character" aria-hidden="true">'+film.art+'</span></div><div class="card-body"><div class="card-top"><span class="card-title">'+film.title+'</span><span class="card-year">'+film.year+'</span></div><div class="card-subtitle">'+film.subtitle+'</div><div class="card-footer"><span class="license-tag">✧ CC BY</span><span class="click-hint">🍿 <span class="hint-text">Tap for popcorn</span></span></div></div>';
  btn.addEventListener('click',()=>{
    if(primedId!==film.id){primedId=film.id;document.querySelectorAll('.hint-text').forEach(t=>t.textContent='Tap for popcorn');btn.querySelector('.hint-text').textContent='Tap again for details';popcorn(btn.querySelector('.card-art'));}
    else{primedId=null;lastFocus=btn;btn.querySelector('.hint-text').textContent='Tap for popcorn';openDetails(film);}
  });
  card.appendChild(btn);return card;
}
function render(){
  const q=search.value.toLowerCase().trim();
  const shown=films.filter(f=>(currentFilter==='all'||f.genres.includes(currentFilter))&&(f.title+' '+f.description+' '+f.subtitle).toLowerCase().includes(q));
  grid.replaceChildren(...shown.map(makeCard));empty.hidden=shown.length!==0;primedId=null;
}
function openDetails(f){
  document.getElementById('detailTitle').textContent=f.title;
  document.getElementById('detailMeta').textContent=f.year+'  •  '+f.runtime+'  •  '+f.genres.join(' / ');
  document.getElementById('detailDescription').textContent=f.description;
  document.getElementById('detailCreator').textContent=f.creator;
  document.getElementById('detailSubtitles').textContent=f.subtitles;
  document.getElementById('detailCredit').textContent=f.credit;
  const lic=document.getElementById('detailLicence');lic.textContent=f.licence+' ↗';lic.href=f.licenceUrl;
  document.getElementById('watchLink').href='https://www.youtube.com/watch?v='+f.youtubeId;
  document.getElementById('studioLink').href=f.sourceUrl;
  document.getElementById('playButton').onclick=()=>openPlayer(f);
  const pic=document.getElementById('detailVisual');pic.className='modal-visual '+f.artClass;pic.querySelector('.modal-art').textContent=f.art;
  modal.hidden=false;document.body.classList.add('modal-open');document.querySelector('.detail-panel').focus();
}
function closeDetails(){modal.hidden=true;document.body.classList.remove('modal-open');if(lastFocus&&lastFocus.isConnected)lastFocus.focus();}

const playerModal=document.getElementById('playerModal');
const movieFrame=document.getElementById('movieFrame');
function openPlayer(f){
  if(!navigator.onLine){
    alert('You need an internet connection to stream this film. Chezzy itself still works offline!');
    return;
  }
  playerModal.hidden=false;
  modal.inert=true;
  document.getElementById('playerTitle').textContent=f.title;
  document.getElementById('playerYouTube').href='https://www.youtube.com/watch?v='+f.youtubeId;
  // The video is requested only after the person presses Play.
  // This uses YouTube's privacy-enhanced official embed, not a copied film file.
  movieFrame.src='https://www.youtube-nocookie.com/embed/'+f.youtubeId+'?playsinline=1&fs=1&rel=0&autoplay=1';
  document.getElementById('closePlayer').focus();
}
function closePlayer(){
  movieFrame.removeAttribute('src'); // Stop playback and network requests when the player closes.
  playerModal.hidden=true;
  modal.inert=false;
  document.getElementById('playButton').focus();
}
document.getElementById('closePlayer').addEventListener('click',closePlayer);
document.getElementById('closePlayerBackdrop').addEventListener('click',closePlayer);
document.addEventListener('keydown',e=>{
  if(playerModal.hidden)return;
  if(e.key==='Escape'){e.preventDefault();closePlayer();}
  if(e.key==='Tab'){
    const els=[...playerModal.querySelectorAll('button,a[href],iframe')];
    const first=els[0],last=els[els.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  }
});
document.getElementById('closeDetails').addEventListener('click',closeDetails);
modal.querySelector('.modal-backdrop').addEventListener('click',closeDetails);
document.addEventListener('keydown',e=>{if(modal.hidden||!playerModal.hidden)return;if(e.key==='Escape'){closeDetails();return}if(e.key==='Tab'){const els=[...modal.querySelectorAll('button,a[href]')],first=els[0],last=els[els.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{currentFilter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(n=>n.classList.toggle('selected',n===b));render()}));
search.addEventListener('input',render);
function connection(){const off=!navigator.onLine;document.getElementById('connectionStatus').classList.toggle('offline',off);document.getElementById('statusText').textContent=off?'Offline mode':'Ready to explore';}
window.addEventListener('online',connection);window.addEventListener('offline',connection);connection();render();
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(error=>console.warn('Offline mode could not start',error)));}
