(function(){const r=e=>{e=encodeURI(e);return document.getElementById(e).querySelector(".leancloud-visitors-count")};const t=o=>{const e=document.querySelector(".leancloud_visitors");const n=decodeURI(e.id);const s=e.dataset.flagTitle;o("get",`/classes/Counter?where=${encodeURIComponent(JSON.stringify({url:n}))}`).then(e=>e.json()).then(({results:e})=>{if(e.length>0){const t=e[0];r(n).innerText=t.time+1;o("put","/classes/Counter/"+t.objectId,{time:{__op:"Increment",amount:1}}).catch(e=>{console.error("Failed to save visitor count",e)})}else if(CONFIG.leancloud_visitors.security){r(n).innerText="Counter not initialized! More info at console err msg.";console.error("ATTENTION! LeanCloud counter has security bug, see how to solve it here: https://github.com/theme-next/hexo-leancloud-counter-security. \n However, you can still use LeanCloud without security, by setting `security` option to `false`.")}else{o("post","/classes/Counter",{title:s,url:n,time:1}).then(e=>e.json()).then(()=>{r(n).innerText=1}).catch(e=>{console.error("Failed to create",e)})}}).catch(e=>{console.error("LeanCloud Counter Error",e)})};const o=e=>{const t=document.querySelectorAll(".leancloud_visitors");const n=[...t].map(e=>{return decodeURI(e.id)});e("get",`/classes/Counter?where=${encodeURIComponent(JSON.stringify({url:{$in:n}}))}`).then(e=>e.json()).then(({results:e})=>{for(const t of n){const o=e.find(e=>e.url===t);r(t).innerText=o?o.time:0}}).catch(e=>{console.error("LeanCloud Counter Error",e)})};const{app_id:s,app_key:c,server_url:e}=CONFIG.leancloud_visitors;const n=n=>{const e=(e,t,o)=>{return fetch(`${n}/1.1${t}`,{method:e,headers:{"X-LC-Id":s,"X-LC-Key":c,"Content-Type":"application/json"},body:JSON.stringify(o)})};if(CONFIG.page.isPost){if(CONFIG.hostname!==location.hostname)return;t(e)}else if(document.querySelectorAll(".post-title-link").length>=1){o(e)}};let l;if(e){l=e}else if(s.slice(-9)==="-MdYXbMMI"){l=`https://${s.slice(0,8).toLowerCase()}.api.lncldglobal.com`}document.addEventListener("page:loaded",()=>{if(l){n(l)}else{fetch(`https://app-router.leancloud.cn/2/route?appId=${s}`).then(e=>e.json()).then(({api_server:e})=>{n(`https://${e}`)})}})})();