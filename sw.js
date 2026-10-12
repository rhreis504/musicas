// Meu Violão: navegação e manifesto sempre pela rede (sem cache persistente).
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",event=>event.waitUntil((async()=>{
  for(const key of await caches.keys())if(key.startsWith("meu-violao-"))await caches.delete(key);
  await self.clients.claim();
})()));
self.addEventListener("fetch",event=>{
 const u=new URL(event.request.url);
 if(u.origin!==self.location.origin)return;
 if(event.request.mode==="navigate" || u.pathname.endsWith("/version.json") || u.pathname.endsWith("/index.html")){
   event.respondWith(fetch(new Request(event.request,{cache:"no-store"})));
 }
});
