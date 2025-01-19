javascript:(function(){const popup=document.createElement('div');popup.style.cssText='position:fixed;top:20px;right:20px;width:300px;max-height:80vh;background:white;padding:15px;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,0.1);z-index:9999;overflow-y:auto;';const links=[...document.getElementsByTagName('a')].map(a=>a.href).filter(url=>url&&url.startsWith('http'));const closeBtn=document.createElement('button');closeBtn.style.cssText='float:right;border:none;background:none;font-size:20px;cursor:pointer;';closeBtn.textContent='×';closeBtn.addEventListener('click',()=>popup.remove());const copyBtn=document.createElement('button');copyBtn.style.cssText='width:100%;padding:8px;margin:10px 0;background:#0078D4;color:white;border:none;border-radius:4px;cursor:pointer;';copyBtn.textContent='Copy All';copyBtn.addEventListener('click',async()=>{await navigator.clipboard.writeText(linkList.innerText);copyBtn.textContent='Copied!';setTimeout(()=>copyBtn.textContent='Copy All',1000)});const title=document.createElement('h3');title.style.marginTop='0';title.textContent=`Found ${links.length} Links`;const linkList=document.createElement('div');linkList.innerHTML=links.map(url=>`<div style="margin:5px 0;word-break:break-all;"><a href="${url}" target="_blank">${url}</a></div>`).join('');popup.appendChild(closeBtn);popup.appendChild(title);popup.appendChild(copyBtn);popup.appendChild(linkList);document.body.appendChild(popup);})();
