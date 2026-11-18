'use strict';
// Chezzy v0.5: Creative Commons films from Wikimedia Commons, with opted-in offline saves.
const films=[
{id:'llamigos',title:'Caminandes: Llamigos',year:'2016',runtime:'2 min 30 sec',genres:['animation','comedy'],tag:'COMEDY SHORT',art:'🦙',artClass:'art-caminandes',subtitle:'Animation · Comedy · Short',description:'Koro the llama and Oti the penguin compete for the last berry in Patagonia. A funny, mostly wordless animated short.',creator:'Blender Foundation',licence:'CC BY 3.0',licenceUrl:'https://creativecommons.org/licenses/by/3.0/',sourceUrl:'https://studio.blender.org/projects/caminandes-3/',commonsFile:'File:Caminandes 3 - Llamigos - Blender Animated Short.webm',commonsUrl:'https://commons.wikimedia.org/wiki/File:Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm',subtitles:'Not available in Chezzy',credit:'© Blender Foundation. Caminandes: Llamigos, CC BY 3.0. The video is served by Wikimedia Commons in a potentially lower-resolution format. Chezzy does not change the film. No endorsement implied.'},
{id:'singularity',title:'Singularity',year:'2026',runtime:'6 min 31 sec',genres:['animation','adventure'],tag:'SPACE ADVENTURE',art:'✦',artClass:'art-singularity',subtitle:'Animation · Sci-fi · Short',description:'A small space creature searches for refuge after a cosmic event engulfs its icy home.',creator:'Blender Foundation',licence:'CC BY 4.0',licenceUrl:'https://creativecommons.org/licenses/by/4.0/',sourceUrl:'https://studio.blender.org/projects/singularity/',commonsFile:'File:SINGULARITY - Blender Open Movie-full movie.webm',commonsUrl:'https://commons.wikimedia.org/wiki/File:SINGULARITY_-_Blender_Open_Movie-full_movie.webm',subtitles:'Not available in Chezzy',credit:'© Blender Foundation. Singularity, CC BY 4.0. The video is served by Wikimedia Commons in a potentially lower-resolution format. Chezzy does not change the film. Blender logos and trademarks are excluded; no endorsement implied.'}
,
{"id":"wingit","title":"Wing It!","year":"2023","runtime":"3 min 58 sec","genres":["animation","comedy","adventure"],"tag":"NEW · COMEDY","art":"🚀","artClass":"art-wingit","subtitle":"Animation · Comedy · Space","description":"A cat and a dog take their very different personalities into a hilarious, cartoony space adventure.","creator":"Blender Foundation","licence":"CC BY 4.0","licenceUrl":"https://creativecommons.org/licenses/by/4.0/","sourceUrl":"https://studio.blender.org/projects/wing-it/","commonsFile":"File:WING IT! - Blender Open Movie-full movie.webm","commonsUrl":"https://commons.wikimedia.org/wiki/File:WING_IT%21_-_Blender_Open_Movie-full_movie.webm","subtitles":"Not available in Chezzy","credit":"© Blender Foundation, Wing It! (2023), Creative Commons Attribution 4.0 (CC BY 4.0). Source: Blender Studio / Wikimedia Commons. The supplied film is unchanged, except Wikimedia Commons may provide a lower-resolution format. Blender logos and trademarks are not used by Chezzy; no endorsement is implied."},
{"id":"coffeerun","title":"Coffee Run","year":"2020","runtime":"3 min 5 sec","genres":["animation","drama"],"tag":"NEW · DRAMA","art":"☕","artClass":"art-coffee","subtitle":"Animation · Drama · Short","description":"A young woman takes a fast-paced journey through memories of a relationship, with coffee never far away.","creator":"Blender Foundation","licence":"CC BY 4.0","licenceUrl":"https://creativecommons.org/licenses/by/4.0/","sourceUrl":"https://studio.blender.org/projects/coffee-run/","commonsFile":"File:Coffee Run - Blender Open Movie-full movie.webm","commonsUrl":"https://commons.wikimedia.org/wiki/File:Coffee_Run_-_Blender_Open_Movie-full_movie.webm","subtitles":"Not available in Chezzy","credit":"© Blender Foundation, Coffee Run (2020), Creative Commons Attribution 4.0 (CC BY 4.0). Source: Blender Studio / Wikimedia Commons. The film itself is unmodified, aside from any lower-resolution playback conversion provided by Wikimedia Commons. Blender logos and trademarks are not used by Chezzy; no endorsement is implied."},
{"id":"spring","title":"Spring","year":"2019","runtime":"7 min 44 sec","genres":["animation","fantasy","adventure"],"tag":"NEW · FANTASY","art":"🌿","artClass":"art-spring","subtitle":"Animation · Fantasy · Adventure","description":"A shepherd girl and her dog encounter ancient spirits and a beautiful, mysterious world as the seasons begin to change.","creator":"Andy Goralczyk / Blender Foundation","licence":"CC BY 4.0","licenceUrl":"https://creativecommons.org/licenses/by/4.0/","sourceUrl":"https://studio.blender.org/projects/spring/","commonsFile":"File:Spring - Blender Open Movie.webm","commonsUrl":"https://commons.wikimedia.org/wiki/File:Spring_-_Blender_Open_Movie.webm","subtitles":"Not available in Chezzy","credit":"© Blender Foundation, Spring (2019), directed by Andy Goralczyk. Creative Commons Attribution 4.0 (CC BY 4.0). Source: Blender Studio / Wikimedia Commons. The film itself is unchanged, except Commons may deliver a lower-resolution transcode. Studio logos and trademarks are excluded; no endorsement is implied."}
,
{"id":"llamadrama","title":"Caminandes: Llama Drama","year":"2013","runtime":"1 min 30 sec","genres":["animation","comedy","caminandes"],"tag":"EPISODE 1","art":"🦙","artClass":"art-llamadrama","subtitle":"Caminandes · Episode 1 · Comedy","description":"Koro the llama tries to cross the road, with increasingly ridiculous results.","creator":"Pablo Vazquez, Beorn Leonard, Francesco Siddi; music and sound by Jan Morgenstern","licence":"CC BY 3.0","licenceUrl":"https://creativecommons.org/licenses/by/3.0/","sourceUrl":"https://studio.blender.org/projects/caminandes-2/","commonsFile":"File:Caminandes- Llama Drama - Short Movie.ogv","commonsUrl":"https://commons.wikimedia.org/wiki/File:Caminandes-_Llama_Drama_-_Short_Movie.ogv","subtitles":"Not available in Chezzy","credit":"© Pablo Vazquez, Beorn Leonard and Francesco Siddi; music and sound by Jan Morgenstern. Cinematic short Caminandes: Llama Drama, CC BY 3.0. Source: Wikimedia Commons. No endorsement implied.","series":"caminandes","episode":1,"posterFile":"File:Caminandes- Llama Drama - Short Movie.ogv","posterPage":"https://commons.wikimedia.org/wiki/File:Caminandes-_Llama_Drama_-_Short_Movie.ogv","posterInfo":"Film frame preview: Pablo Vazquez, Beorn Leonard, Francesco Siddi; CC BY 3.0. Used instead of a separately uploaded cover with disputed licensing."},
{"id":"grandillama","title":"Caminandes: Gran Dillama","year":"2013","runtime":"2 min 26 sec","genres":["animation","comedy","caminandes"],"tag":"EPISODE 2","art":"🦙","artClass":"art-grandillama","subtitle":"Caminandes · Episode 2 · Comedy","description":"Koro spots greener grass across an electric fence, and his stubborn curiosity takes over.","creator":"Blender Foundation; directed by Pablo Vazquez","licence":"CC BY-SA 3.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/3.0/","sourceUrl":"https://studio.blender.org/projects/caminandes-2/","commonsFile":"File:Caminandes - Gran Dillama - Blender Foundation's new Open Movie.webm","commonsUrl":"https://commons.wikimedia.org/wiki/File:Caminandes_-_Gran_Dillama_-_Blender_Foundation%27s_new_Open_Movie.webm","subtitles":"Not available in Chezzy","credit":"© Blender Foundation; directed by Pablo Vazquez. Caminandes: Gran Dillama, CC BY-SA 3.0. Film from Wikimedia Commons. No changes except any low-resolution playback conversion supplied by Commons. ShareAlike applies to adaptations.","series":"caminandes","episode":2,"posterFile":"File:Blender Foundation - Caminandes - Episode 2 - Gran Dillama - Cover thumbnail.png","posterPage":"https://commons.wikimedia.org/wiki/File:Blender_Foundation_-_Caminandes_-_Episode_2_-_Gran_Dillama_-_Cover_thumbnail.png","posterInfo":"Blender Foundation original cover, CC BY 3.0 (separate from film licence). No edits beyond fitting on-screen."}
];

// Verified Caminandes series data; movie art has its own, separately recorded licence.
Object.assign(films.find(f=>f.id==='llamigos'),{
 series:'caminandes',episode:3,genres:['animation','comedy','caminandes'],
 posterFile:'File:Blender Foundation - Caminandes - Episode 3 - Llamigos - Cover thumbnail.png',
 posterPage:'https://commons.wikimedia.org/wiki/File:Blender_Foundation_-_Caminandes_-_Episode_3_-_Llamigos_-_Cover_thumbnail.png',
 posterInfo:'Official Blender Foundation Llamigos cover, CC BY 4.0 (the film is separately CC BY 3.0). Cropped only for layout.'
});
const posterUrls=new Map();
async function loadPosters(){
 const list=films.filter(f=>f.posterFile);
 try{
  const url=new URL('https://commons.wikimedia.org/w/api.php');
  url.search=new URLSearchParams({
   action:'query',prop:'imageinfo',iiprop:'url',iiurlwidth:'720',
   titles:list.map(f=>f.posterFile).join('|'),format:'json',formatversion:'2',origin:'*'
  }).toString();
  const res=await fetch(url.toString(),{mode:'cors',credentials:'omit'});
  if(!res.ok)return;
  const data=await res.json();
  for(const p of (data.query&&data.query.pages)||[]){
   const film=list.find(f=>f.posterFile.replace(/_/g,' ')===p.title.replace(/_/g,' '));
   const thumb=p.imageinfo&&p.imageinfo[0]&&p.imageinfo[0].thumburl;
   if(film&&thumb&&thumb.startsWith('https://upload.wikimedia.org/'))posterUrls.set(film.id,thumb);
  }
  document.querySelectorAll('[data-poster-film]').forEach(el=>{
   const film=list.find(f=>f.id===el.dataset.posterFilm);
   if(film)showPoster(el,film);
  });
 }catch(e){console.info('Offline mode: thumbnails are optional',e);}
}
function showPoster(element,film){
 if(!film.posterFile)return;
 element.dataset.posterFilm=film.id;
 const url=posterUrls.get(film.id);
 if(!url||element.querySelector('.movie-poster'))return;
 const img=document.createElement('img');
 img.className='movie-poster';img.alt='';img.loading='lazy';
 img.src=url;
 img.addEventListener('load',()=>element.classList.add('has-photo'),{once:true});
 img.addEventListener('error',()=>img.remove(),{once:true});
 element.insertBefore(img,element.firstChild);
}

const $=id=>document.getElementById(id);
const grid=$('filmGrid'),search=$('search'),modal=$('detailModal'),player=$('playerModal'),video=$('movieVideo');
const save=$('saveButton'),remove=$('removeButton'),exportBtn=$('exportButton'),offlineStatus=$('offlineStatus'),playerMessage=$('playerMessage');
let filter='all',primed=null,lastFocus=null,selected=null,blobUrl=null,busy=false,detailToken=0,playToken=0;
const sources=new Map();
const DB='chezzy-films-v1',STORE='films',MAX=170*1024*1024;
const say=text=>{offlineStatus.textContent=text;};
const mb=n=>(n/1048576).toFixed(1)+' MB';

function pop(parent){
 const glow=document.createElement('span');glow.className='pop-flash';parent.appendChild(glow);setTimeout(()=>glow.remove(),900);
 for(let i=0;i<12;i++){const p=document.createElement('span'),a=i*Math.PI/6,r=60+(i%4)*29;p.className='popcorn-piece';p.textContent=i%4===0?'✦':'🍿';p.style.setProperty('--dx',Math.round(Math.cos(a)*r)+'px');p.style.setProperty('--dy',Math.round(Math.sin(a)*r)+'px');p.style.setProperty('--rot',(i%2?-135:160)+'deg');p.style.setProperty('--delay',((i%4)*20)+'ms');parent.appendChild(p);setTimeout(()=>p.remove(),1300);}
}
function card(f){
 const c=document.createElement('article'),b=document.createElement('button');c.className='film-card';b.className='film-click';b.type='button';
 b.setAttribute('aria-label',f.title+'. Tap once for popcorn, again for details.');
 b.innerHTML='<div class="card-art '+f.artClass+'"><span class="art-caption">'+f.tag+'</span><span class="art-spark">✦</span><span class="art-character">'+f.art+'</span></div><div class="card-body"><div class="card-top"><span class="card-title">'+f.title+'</span><span class="card-year">'+f.year+'</span></div><div class="card-subtitle">'+f.subtitle+'</div><div class="card-footer"><span class="license-tag">✧ '+f.licence+'</span><span class="click-hint">🍿 <span class="hint-text">Tap for popcorn</span></span></div></div>';
 showPoster(b.querySelector('.card-art'),f);
 b.addEventListener('click',()=>{if(primed!==f.id){primed=f.id;document.querySelectorAll('.hint-text').forEach(t=>t.textContent='Tap for popcorn');b.querySelector('.hint-text').textContent='Tap again for details';pop(b.querySelector('.card-art'));}else{primed=null;lastFocus=b;openDetails(f);}});
 c.appendChild(b);return c;
}
function render(){
 const q=search.value.toLowerCase().trim(),overview=filter==='all'&&!q;
 const section=$('caminandes'),featured=$('caminandesGrid');
 if(section&&featured){
  section.hidden=!overview;
  if(overview)featured.replaceChildren(...films.filter(f=>f.series==='caminandes').sort((a,b)=>a.episode-b.episode).map(card));
 }
 const shown=films.filter(f=>(filter==='all'||f.genres.includes(filter))&&(f.title+' '+f.subtitle+' '+f.description).toLowerCase().includes(q)&&(!overview||f.series!=='caminandes'));
 grid.replaceChildren(...shown.map(card));$('emptyResults').hidden=shown.length!==0;primed=null;
}
function openDB(){return new Promise((resolve,reject)=>{if(!('indexedDB' in window)){reject(new Error('Browser offline storage is unavailable.'));return;}const r=indexedDB.open(DB,1);r.onupgradeneeded=()=>{if(!r.result.objectStoreNames.contains(STORE))r.result.createObjectStore(STORE,{keyPath:'id'});};r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error||new Error('Storage unavailable.'));r.onblocked=()=>reject(new Error('Close other Chezzy tabs and try again.'));});}
async function getSaved(id){const db=await openDB();return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readonly'),r=tx.objectStore(STORE).get(id);r.onsuccess=()=>resolve(r.result||null);r.onerror=()=>reject(r.error);tx.oncomplete=()=>db.close();tx.onerror=()=>db.close();});}
async function putSaved(row){const db=await openDB();return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(row);tx.oncomplete=()=>{db.close();resolve();};tx.onerror=()=>{db.close();reject(tx.error||new Error('Not enough storage.'));};tx.onabort=()=>{db.close();reject(tx.error||new Error('Save aborted.'));};});}
async function dropSaved(id){const db=await openDB();return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).delete(id);tx.oncomplete=()=>{db.close();resolve();};tx.onerror=()=>{db.close();reject(tx.error||new Error('Could not remove.'));};});}
async function refresh(f,token){try{const saved=await getSaved(f.id);if(token!==detailToken||selected!==f)return;save.hidden=!!saved;remove.hidden=!saved;exportBtn.hidden=!saved;say(saved?'✓ Saved for offline · '+mb(saved.size)+' (browser may clear it).':'Not saved yet. Save once on Wi-Fi to watch offline.');}catch(e){if(token!==detailToken||selected!==f)return;save.hidden=false;remove.hidden=true;exportBtn.hidden=true;say('Offline saving unavailable: '+e.message);}}
function openDetails(f){
 selected=f;const token=++detailToken;
 $('detailTitle').textContent=f.title;$('detailMeta').textContent=f.year+' • '+f.runtime+' • '+f.genres.join(' / ');
 $('detailDescription').textContent=f.description;$('detailCreator').textContent=f.creator;
 $('detailSubtitles').textContent=f.subtitles;$('detailCredit').textContent=f.credit;
 $('detailLicence').textContent=f.licence+' ↗';$('detailLicence').href=f.licenceUrl;
 $('commonsLink').href=f.commonsUrl;$('studioLink').href=f.sourceUrl;
 const v=$('detailVisual');v.className='modal-visual '+f.artClass;v.querySelector('.modal-art').textContent=f.art;
 v.querySelectorAll('.movie-poster').forEach(img=>img.remove());
 v.classList.remove('has-photo');v.removeAttribute('data-poster-film');
 showPoster(v,f);
 const note=$('detailArtwork'),link=$('detailArtworkLink');
 if(note&&link){
  note.hidden=!f.posterFile;link.hidden=!f.posterFile;
  note.textContent=f.posterInfo||'Creator artwork, see original source.';
  link.href=f.posterPage||f.commonsUrl;
 }
 modal.hidden=false;document.body.classList.add('modal-open');document.querySelector('.detail-panel').focus();
 say('Checking offline storage…');save.disabled=busy;refresh(f,token);
}
function closeDetails(){if(!player.hidden)closePlayer();modal.hidden=true;document.body.classList.remove('modal-open');if(lastFocus&&lastFocus.isConnected)lastFocus.focus();}
function pickVideo(data){
 const list=(data.derivatives||[]).filter(d=>d&&typeof d.src==='string'&&d.src.startsWith('https://upload.wikimedia.org/'));
 const ios=/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
 const vp9=!!video.canPlayType('video/webm; codecs="vp9, opus"')||!!video.canPlayType('video/webm');
 const qt=list.find(d=>/\.360p\.mpeg4\.mov(?:[?#]|$)/.test(d.src));
 const w480=list.find(d=>/\.480p\.vp9\.webm(?:[?#]|$)/.test(d.src));
 const w240=list.find(d=>/\.240p\.vp9\.webm(?:[?#]|$)/.test(d.src));
 const chosen=(ios&&qt)?qt:(vp9&&w480)?w480:qt||(vp9&&w240);
 if(!chosen)throw new Error('No suitable small video version was returned by Wikimedia Commons.');
 return {src:chosen.src,mime:/\.mov(?:[?#]|$)/.test(chosen.src)?'video/quicktime':'video/webm',label:/\.mov/.test(chosen.src)?'360p':'480p'};
}
async function sourceFor(f){
 if(sources.has(f.id))return sources.get(f.id);
 const promise=(async()=>{
  const url=new URL('https://commons.wikimedia.org/w/api.php');
  url.search=new URLSearchParams({action:'query',prop:'videoinfo',viprop:'url|derivatives',titles:f.commonsFile,format:'json',formatversion:'2',origin:'*'}).toString();
  const response=await fetch(url.toString(),{mode:'cors',credentials:'omit'});
  if(!response.ok)throw new Error('Unable to contact Wikimedia Commons.');
  const data=await response.json();
  const info=(data.query&&data.query.pages||[]).find(p=>p.videoinfo&&p.videoinfo.length)?.videoinfo[0];
  if(!info)throw new Error('Movie data is unavailable.');
  return pickVideo(info);
 })();
 sources.set(f.id,promise);
 try{return await promise;}catch(e){sources.delete(f.id);throw e;}
}
function release(){video.pause();video.removeAttribute('src');video.load();if(blobUrl){URL.revokeObjectURL(blobUrl);blobUrl=null;}}
async function openPlayer(f){
 const token=++playToken;player.hidden=false;modal.inert=true;$('playerTitle').textContent=f.title;$('playerCommons').href=f.commonsUrl;
 playerMessage.textContent='Preparing film…';video.setAttribute('aria-label',f.title);
 try{
  const saved=await getSaved(f.id).catch(()=>null);
  if(token!==playToken||player.hidden)return;
  if(saved&&saved.blob){
    blobUrl=URL.createObjectURL(saved.blob);video.src=blobUrl;
    playerMessage.textContent='✓ Using the saved offline film. Tap ▶ to play.';
  }else{
    if(!navigator.onLine){playerMessage.textContent='Offline: Save this film while connected first.';return;}
    const src=await sourceFor(f);
    if(token!==playToken||player.hidden)return;
    video.src=src.src;playerMessage.textContent='Streaming from Wikimedia Commons in '+src.label+'. Tap ▶ to play.';
  }
  video.load();video.play().catch(()=>{});
 }catch(e){playerMessage.textContent='Could not load the film: '+e.message+' Use the source link to see other formats.';}
}
function closePlayer(){++playToken;release();player.hidden=true;modal.inert=false;if(!modal.hidden)$('playButtonNative').focus();}
async function saveOffline(){
 const f=selected;if(!f||busy)return;busy=true;save.disabled=true;remove.disabled=true;
 try{
  if(!navigator.onLine)throw new Error('Connect to Wi-Fi first.');
  say('Finding a small downloadable version…');
  const src=await sourceFor(f);
  say('Downloading '+f.title+'… keep Chezzy open.');
  const r=await fetch(src.src,{mode:'cors',credentials:'omit'});
  if(!r.ok||r.type==='opaque')throw new Error('Browser could not download this film from Commons.');
  const expected=Number(r.headers.get('Content-Length')||0);
  if(expected>MAX)throw new Error('File exceeds the offline size limit.');
  let total=0,blob;
  if(r.body&&r.body.getReader){
    const reader=r.body.getReader(),chunks=[];
    while(true){const {done,value}=await reader.read();if(done)break;total+=value.byteLength;if(total>MAX){await reader.cancel();throw new Error('File is too large to save.');}chunks.push(value);if(selected===f)say('Downloading… '+mb(total)+(expected?' / '+mb(expected):''));}
    blob=new Blob(chunks,{type:src.mime});
  }else{blob=await r.blob();if(blob.size>MAX)throw new Error('File is too large to save.');blob=new Blob([blob],{type:src.mime});}
  if(blob.size<1024)throw new Error('Downloaded file is empty.');
  say('Saving '+mb(blob.size)+' in your iPad browser…');
  await putSaved({id:f.id,blob,mime:src.mime,size:blob.size,source:src.src,date:Date.now()});
  if(navigator.storage&&navigator.storage.persist)navigator.storage.persist().catch(()=>{});
  if(selected===f)say('✓ Saved for offline. You can watch without Wi-Fi!');
 }catch(e){if(selected===f)say('Could not save: '+e.message+' You can use the Commons source link.');}
 finally{
  busy=false;save.disabled=false;remove.disabled=false;
  if(selected===f){const msg=offlineStatus.textContent;await refresh(f,detailToken);if(msg.startsWith('Could not save:'))say(msg);}
 }
}
async function removeSaved(){const f=selected;if(!f||busy)return;try{await dropSaved(f.id);await refresh(f,detailToken);say('Offline copy removed.');}catch(e){say('Could not remove: '+e.message);}}
async function exportFile(){
 const f=selected;if(!f)return;
 try{
  const row=await getSaved(f.id);if(!row)throw new Error('Save for offline first.');
  const url=URL.createObjectURL(row.blob),a=document.createElement('a');
  a.href=url;a.download=f.id+(row.mime==='video/quicktime'?'.mov':'.webm');
  document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);
  say('Your iPad should offer Downloads / Files. Saving there is more durable than browser storage.');
 }catch(e){say('Download to Files failed: '+e.message);}
}
video.addEventListener('error',()=>{if(!player.hidden)playerMessage.textContent='This video format might not be supported on your iPad. Try the Commons source link for another format.';});
$('playButtonNative').addEventListener('click',()=>{if(selected)openPlayer(selected);});
save.addEventListener('click',saveOffline);remove.addEventListener('click',removeSaved);exportBtn.addEventListener('click',exportFile);
$('closeDetails').addEventListener('click',closeDetails);
modal.querySelector('.modal-backdrop').addEventListener('click',closeDetails);
$('closePlayer').addEventListener('click',closePlayer);
$('closePlayerBackdrop').addEventListener('click',closePlayer);
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'){if(!player.hidden)closePlayer();else if(!modal.hidden)closeDetails();}
 if(e.key!=='Tab')return;
 const box=!player.hidden?player:!modal.hidden?modal:null;if(!box)return;
 const focusable=[...box.querySelectorAll('button:not([hidden]):not(:disabled),a[href],video[controls]')];
 if(!focusable.length)return;
 if(e.shiftKey&&document.activeElement===focusable[0]){e.preventDefault();focusable[focusable.length-1].focus();}
 else if(!e.shiftKey&&document.activeElement===focusable[focusable.length-1]){e.preventDefault();focusable[0].focus();}
});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(n=>n.classList.toggle('selected',n===b));render();}));
search.addEventListener('input',render);
function connection(){const offline=!navigator.onLine;$('connectionStatus').classList.toggle('offline',offline);$('statusText').textContent=offline?'Offline catalogue':'Ready to watch';}
window.addEventListener('online',connection);window.addEventListener('offline',connection);connection();render();loadPosters();
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js?v=6').catch(e=>console.warn('Offline website unavailable:',e)));
