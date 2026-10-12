// Meu Violão — política: HTML/manifesto sempre rede, nunca cache persistente.
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",event=>event.waitUntil((async()=>{
  for(const key of await caches.keys())await caches.delete(key);
  await self.clients.claim();
})()));
self.addEventListener("fetch",event=>{
  const u=new URL(event.request.url);
  if(u.origin!==self.location.origin)return;
  const html=u.pathname.endsWith(".html")||event.request.mode==="navigate";
  const manifest=u.pathname.endsWith("/version.json");
  if(html||manifest){
    event.respondWith(fetch(new Request(event.request,{cache:"no-store"})));
  }
});