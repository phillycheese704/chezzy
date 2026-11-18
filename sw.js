// Chezzy v3: network-first for site code to prevent old JS disabling new features.
// Only first-party assets are cached. The viewer can save selected movies in IndexedDB, but the service worker never downloads them.
const CACHE='chezzy-shell-v5';
const SHELL=['./','./index.html','./styles.css?v=5','./app-v4.js?v=5','./manifest.webmanifest','./icon.svg'];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(
    keys.filter(key=>key.startsWith('chezzy-shell-')&&key!==CACHE).map(key=>caches.delete(key))
  )).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin||!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
  // Use fresh content whenever online. The last working files remain available offline.
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    try{
      const response=await fetch(event.request);
      if(response.ok&&response.type==='basic')await cache.put(event.request,response.clone());
      return response;
    }catch(error){
      return (await cache.match(event.request,{ignoreSearch:true})) ||
        (event.request.mode==='navigate'?await cache.match('./index.html'):undefined) ||
        Response.error();
    }
  })());
});
