function e(){window.API_URL=`https://luxor-backend-production.up.railway.app`;let e=window.API_URL;(function(e){let t={check:`<svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg>`,x:`<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>`,xCircle:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M15 9l-6 6M9 9l6 6"/></svg>`,info:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>`,warn:`<svg viewBox="0 0 24 24"><path d="M12 3l10 18H2L12 3z"/><path d="M12 9v5M12 18h.01"/></svg>`,clock:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>`,shield:`<svg viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>`,bagCheck:`<svg viewBox="0 0 24 24"><path d="M5 7h14l-1 13H6L5 7z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/><path d="M9 13l2 2 4-4"/></svg>`,plane:`<svg viewBox="0 0 24 24"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>`,arrowDown:`<svg viewBox="0 0 24 24"><path d="M12 3v12"/><path d="M6 9l6 6 6-6"/><path d="M3 21h18"/></svg>`,arrowUp:`<svg viewBox="0 0 24 24"><path d="M12 21V9"/><path d="M6 15l6-6 6 6"/><path d="M3 3h18"/></svg>`,wallet:`<svg viewBox="0 0 24 24"><path d="M3 7h18v12H3z"/><path d="M16 13h2"/><path d="M3 7l3-3h12l3 3"/></svg>`,coins:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,trendUp:`<svg viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>`,mail:`<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/></svg>`,lock:`<svg viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>`,logout:`<svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>`,edit:`<svg viewBox="0 0 24 24"><path d="M11 4H4v16h16v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,copy:`<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,qr:`<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3M21 14v3M14 21h3"/></svg>`,chat:`<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"/></svg>`,gift:`<svg viewBox="0 0 24 24"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,spinner:`<div class="lx-spinner"></div>`};function n(e){return e==null?``:String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}let r=null,i=[];function a(){return r&&document.body.contains(r)?r:(r=document.createElement(`div`),r.className=`lx-overlay`,r.setAttribute(`role`,`dialog`),r.setAttribute(`aria-modal`,`true`),document.body.appendChild(r),r.addEventListener(`click`,e=>{if(e.target!==r)return;let t=i[i.length-1];t&&t.dismissible!==!1&&t.close()}),r)}function o(e,t){let n=a();if(n.innerHTML=``,n.appendChild(e),requestAnimationFrame(()=>n.classList.add(`show`)),i.length===0)try{document.body.dataset.lxOverflowOrig===void 0&&(document.body.dataset.lxOverflowOrig=document.body.style.overflow||``),document.body.style.overflow=`hidden`}catch{}let r={el:e,dismissible:t.dismissible!==!1,close(e){let a=i.indexOf(r);if(a>=0&&i.splice(a,1),i.length===0){n.classList.remove(`show`),setTimeout(()=>{n.classList.contains(`show`)||(n.innerHTML=``)},250);try{let e=document.body.dataset.lxOverflowOrig;document.body.style.overflow=e===void 0?``:e,delete document.body.dataset.lxOverflowOrig}catch{}}else{let e=i[i.length-1];n.innerHTML=``,n.appendChild(e.el)}if(t.onClose)try{t.onClose(e)}catch{}r._resolve&&r._resolve(e)}};return i.push(r),r}document.addEventListener(`keydown`,e=>{if(e.key!==`Escape`)return;let t=i[i.length-1];t&&t.dismissible!==!1&&t.close()});function s(e){e||={};let n=document.createElement(`div`);if(n.className=`lx-modal`+(e.wide?` lx-modal--wide`:``)+(e.tone?` lx-modal--`+e.tone:``),e.html&&(n.innerHTML=e.html),e.dismissible!==!1&&!e.noClose){let e=document.createElement(`button`);e.className=`lx-close`,e.type=`button`,e.setAttribute(`aria-label`,`Close`),e.innerHTML=t.x,e.addEventListener(`click`,()=>r.close(null)),n.appendChild(e)}let r=o(n,e);if(e.render)try{e.render(n,r)}catch(e){console.error(`[Modal.show render]`,e)}return n.querySelectorAll(`[data-lx-close]`).forEach(e=>{e.addEventListener(`click`,()=>r.close(e.getAttribute(`data-lx-close`)||null))}),r}function c(e){let t=i[i.length-1];t&&t.close(e)}function l(e){return e||={},new Promise(r=>{let i=e.tone||``,a=e.icon||{ok:`check`,warn:`clock`,err:`xCircle`,info:`info`}[i]||`info`,o=s({html:`
        <div class="lx-body">
          <div class="lx-hero">
            <div class="lx-icon ${i?`lx-icon--`+i:``}">${t[a]||t.info}</div>
            <div>
              <h3 class="lx-title">${n(e.title||`Notice`)}</h3>
              ${e.message?`<p class="lx-sub">${e.html?e.message:n(e.message).replace(/\n/g,`<br>`)}</p>`:``}
            </div>
          </div>
          <div class="lx-actions lx-actions--end">
            <button type="button" class="lx-btn lx-btn--primary" data-lx-ok style="flex:0 0 auto;min-width:120px">
              ${n(e.okText||`OK`)}
            </button>
          </div>
        </div>`,tone:i,dismissible:e.dismissible!==!1,onClose:()=>r()});o._resolve=r,o.el.querySelector(`[data-lx-ok]`).addEventListener(`click`,()=>o.close(!0))})}function u(e){return e||={},new Promise(r=>{let i=!!e.danger,a=e.tone||(i?`err`:``),o=e.icon||(i?`warn`:`info`),c=a?`lx-icon--`+a:``,l=i?`lx-btn--danger`:`lx-btn--primary`,u=s({html:`
        <div class="lx-body">
          <div class="lx-hero">
            <div class="lx-icon ${c}">${t[o]||t.info}</div>
            <div>
              <h3 class="lx-title">${n(e.title||`Are you sure?`)}</h3>
              ${e.message?`<p class="lx-sub">${e.html?e.message:n(e.message).replace(/\n/g,`<br>`)}</p>`:``}
            </div>
          </div>
          <div class="lx-actions">
            <button type="button" class="lx-btn lx-btn--secondary" data-lx-cancel>
              ${n(e.cancelText||`Cancel`)}
            </button>
            <button type="button" class="lx-btn ${l}" data-lx-ok>
              ${n(e.okText||`Confirm`)}
            </button>
          </div>
        </div>`,tone:a,dismissible:e.dismissible!==!1,onClose:e=>r(e===!0)});u._resolve=e=>r(e===!0),u.el.querySelector(`[data-lx-ok]`).addEventListener(`click`,()=>u.close(!0)),u.el.querySelector(`[data-lx-cancel]`).addEventListener(`click`,()=>u.close(!1))})}function f(e){return e||={},new Promise(r=>{let i=!!e.multiline,a=i?`<textarea class="lx-textarea" data-lx-input placeholder="${n(e.placeholder||``)}">${n(e.value||``)}</textarea>`:`<input class="lx-input" type="${n(e.type||`text`)}" data-lx-input placeholder="${n(e.placeholder||``)}" value="${n(e.value||``)}" />`,o=s({html:`
        <div class="lx-body">
          <div class="lx-hero">
            <div class="lx-icon">${t.edit}</div>
            <div>
              <h3 class="lx-title">${n(e.title||`Input`)}</h3>
              ${e.message?`<p class="lx-sub">${n(e.message)}</p>`:``}
            </div>
          </div>
          <div class="lx-field">
            ${e.label?`<label class="lx-field-label">${n(e.label)}</label>`:``}
            ${a}
          </div>
          <div class="lx-actions">
            <button type="button" class="lx-btn lx-btn--secondary" data-lx-cancel>
              ${n(e.cancelText||`Cancel`)}
            </button>
            <button type="button" class="lx-btn lx-btn--primary" data-lx-ok>
              ${n(e.okText||`OK`)}
            </button>
          </div>
        </div>`,dismissible:e.dismissible!==!1,onClose:e=>r(e)});o._resolve=r;let c=o.el.querySelector(`[data-lx-input]`);setTimeout(()=>{try{c.focus(),c.select&&c.select()}catch{}},50);let l=()=>{let t=(c.value||``).trim();if(e.required&&!t){c.style.borderColor=`var(--lx-err)`,c.focus();return}o.close(t)};o.el.querySelector(`[data-lx-ok]`).addEventListener(`click`,l),o.el.querySelector(`[data-lx-cancel]`).addEventListener(`click`,()=>o.close(null)),c.addEventListener(`keydown`,e=>{e.key===`Enter`&&!i&&(e.preventDefault(),l())})})}function p(e){return new Promise(r=>{let i=e.sold_mode===`guaranteed`||e.tone===`info`,a=i?` lx-sale--info`:``,s=i?`Guarantee honored`:`Item sold`,c=i?`Your protection paid off`:`Profit credited`,l=i?`info`:`gold`,u=Number(e.principal_usd)||0,f=Number(e.payout_usd)||0,p=Number(e.profit_usd==null?f-u:e.profit_usd),m=Number(e.return_percent)||0,h=Number(e.days_held)||0,g=e=>`$`+Math.round(Math.abs(e)).toLocaleString(),_=i?`Guaranteed`:`Realized profit`,v=e.queue_total&&e.queue_total>1?`${e.queue_position||1} of ${e.queue_total}`:``,y=i&&e.sold_below_market,b=i?t.shield:t.bagCheck,x=document.createElement(`div`);x.className=`lx-sale`+a,x.innerHTML=`
        <div class="lx-sale-band">
          <div class="lx-sale-mark">${b}</div>
        </div>
        <div class="lx-sale-body">
          <p class="lx-sale-eyebrow">${n(s)}</p>
          <h3 class="lx-sale-title">${n(c)}</h3>
          <div class="lx-sale-amount"><span class="sign">${p>=0?`+`:`−`}</span>${g(p)}</div>
          <p class="lx-sale-meta">${n(e.item_name||`Item`)}${h>0?` · held <span class="${l}">${h} day${h===1?``:`s`}</span>`:``} · <span class="${l}">${m>=0?`+`:``}${m.toFixed(1)}%</span></p>
          <div class="lx-sale-divider"></div>
          <div class="lx-sale-rows">
            <div class="lx-row"><span class="l">Your investment</span><span class="v">${g(u)}</span></div>
            <div class="lx-row"><span class="l">Payout</span><span class="v">${g(f)}</span></div>
            <div class="lx-row lx-row--total"><span class="l">${n(_)}</span><span class="v v--${l}">${p>=0?`+`:`−`}${g(p)}</span></div>
          </div>
          ${y?`
            <div class="lx-note lx-note--info" style="margin-top:14px;text-align:left">
              ${t.info}
              <span>Item couldn't be sold at full profit. As promised, we honored your guarantee — the platform covered the difference from its own funds.</span>
            </div>
          `:``}
          ${v?`<div class="lx-sale-counter">${v}</div>`:``}
          <div class="lx-sale-actions">
            <button type="button" class="lx-btn lx-btn--secondary" data-lx-details>View details</button>
            <button type="button" class="lx-btn lx-btn--primary" data-lx-got-it>Got it</button>
          </div>
        </div>
      `;let S=o(x,{dismissible:!1,onClose:e=>r(e)});S._resolve=r,x.querySelector(`[data-lx-got-it]`).addEventListener(`click`,()=>S.close(`got_it`)),x.querySelector(`[data-lx-details]`).addEventListener(`click`,()=>S.close(`details`))})}let m=null;function h(){return m&&document.body.contains(m)?m:(m=document.createElement(`div`),m.className=`lx-toast-stack`,m.setAttribute(`aria-live`,`polite`),document.body.appendChild(m),m)}let g={success:`ok`,ok:`ok`,error:`err`,err:`err`,warn:`warn`,warning:`warn`,info:`info`},_={ok:t.check,err:t.xCircle,warn:t.warn,info:t.info};function v(e){if(!e)return;let r=h(),i=g[e.type]||`info`,a=Math.max(1500,Math.min(2e4,e.duration||4e3)),o=document.createElement(`div`);o.className=`lx-toast lx-toast--`+i,o.innerHTML=`
      <div class="lx-toast-icon">${_[i]}</div>
      <div class="lx-toast-content">
        ${e.title?`<p class="lx-toast-title">${n(e.title)}</p>`:``}
        ${e.message?`<p class="lx-toast-msg">${e.html?e.message:n(e.message)}</p>`:``}
      </div>
      <button type="button" class="lx-toast-close" aria-label="Close">${t.x}</button>
      <div class="lx-toast-bar"><div class="lx-toast-bar-fill" style="animation-duration:${a}ms"></div></div>
    `,r.appendChild(o);let s=!1,c=()=>{s||(s=!0,o.classList.add(`leaving`),setTimeout(()=>{try{o.remove()}catch{}},220))};return o.querySelector(`.lx-toast-close`).addEventListener(`click`,c),setTimeout(c,a),{close:c,el:o}}let y={show:s,close:c,alert:l,confirm:u,prompt:f,saleNotification:p,icons:t,esc:n},b={show:v};e.Modal=y,e.Toast=b,e.LX_showToastNew=function(e,t,n,r){return v({type:e,title:t,message:n,html:!0,duration:r})},e.LX_confirmActionNew=function(e){return e||={},u({title:e.title,message:e.msg,okText:e.okText,cancelText:e.cancelText,danger:e.danger,html:e.html})}})(window);try{let e=localStorage.getItem(`luxor_theme`);(e===`light`||e===`dark`)&&(document.documentElement.dataset.theme=e)}catch{}let t=JSON.parse(sessionStorage.getItem(`luxor_user`)||`{"fn":"User","ln":"","plan":"","rate":"","tier":0,"amt":0}`);try{let e=JSON.parse(sessionStorage.getItem(`luxor_user`)||`{}`);!t.login&&e.login&&(t.login=e.login),t.login||=sessionStorage.getItem(`luxor_login`)||``,t.login&&sessionStorage.setItem(`luxor_login`,t.login)}catch{}let n=[],r={watches:`watch`,watch:`watch`,bags:`bag`,bag:`bag`,sneakers:`sneaker`,snkr:`sneaker`,clothing:`fashion`,fashion:`fashion`,jewelry:`jewelry`,electronics:`electronics`,electronic:`electronics`,other:`diamond`,art:`art`,wine:`wine`,coin:`coin`,coins:`coin`},i={watches:`watch`,bags:`bag`,sneakers:`snkr`,clothing:`fashion`,coins:`coin`};function a(e){let t=Number(e.purchase_price||0),n=Number(e.guaranteed_return||0),a=Number(e.expected_return||0),o=Number(e.return_period_days||30),s=Number(e.available_fraction===void 0?100:e.available_fraction),c=Number(e.total_raised||0),l=Math.max(0,Math.min(100,100-s)),u=(e.category||`other`).toLowerCase(),f=i[u]||u,p=r[u]||r[f]||`diamond`,m=window.LX&&LX.iconHTML?LX.iconHTML(p,22,`lx-i`):``,h=Number(e.slots_total||e.total_slots||20),g=Number(e.price_per_slot||(h>0?t/h:t)),_=e.slots_available===void 0?Math.round(s/100*h):Number(e.slots_available),v=e.slots_sold===void 0?h-_:Number(e.slots_sold),y=`PREMIUM`;return l>70?y=`HOT`:o<=14?y=`FAST SELL`:t>3e4&&(y=`RARE`),{id:Number(e.id),cat:f,ico:m,name:e.name||`Item`,brand:e.brand||``,desc:e.description||``,image_url:e.image_url||``,price:t,funded:l,available_fraction:s,total_raised:c,slots_total:h,price_per_slot:g,slots_available:_,slots_sold:v,ret:[n,a],days:[Math.max(1,Math.floor(o*.5)),o],inv:v,min:g,badge:y,likes:0,views:0,closes:o*24,price_history:Array.isArray(e.price_history)?e.price_history:[],countdown_ends_at:e.countdown_ends_at||null,pool_closed_at:e.pool_closed_at||null,countdown_days:e.countdown_days||null}}async function o(){try{let t=await(await fetch(e+`/api/items`)).json();t&&t.ok&&Array.isArray(t.items)?(n=t.items.map(a),console.log(`[marketplace] loaded`,n.length,`items`)):n=[]}catch(e){console.warn(`[marketplace] load failed:`,e),n=[]}try{V(window._currentCat||`all`)}catch{}try{R()}catch{}}let s={positions:[],myItems:[],favorites:[],balance:0,free:0,wallet:0,txs:[],savedWallet:``};function c(){return sessionStorage.getItem(`luxor_token`)||``}function l(){let e=c();return e?{Authorization:`Bearer `+e}:{}}async function u(t,n){n||={};let r=Object.assign({},n.headers||{},l());n.body&&!r[`Content-Type`]&&(r[`Content-Type`]=`application/json`);let i=await fetch(e+t,Object.assign({},n,{headers:r}));if(i.status===401)throw sessionStorage.removeItem(`luxor_token`),sessionStorage.removeItem(`luxor_user`),sessionStorage.removeItem(`luxor_login`),location.href=`index.html`,Error(`Session expired`);return i}let f=JSON.parse(sessionStorage.getItem(`luxor_state2`)||`null`);f&&(s=Object.assign(s,f));try{let e=JSON.parse(localStorage.getItem(`luxor_favorites`)||`[]`);Array.isArray(e)&&(s.favorites=e)}catch{s.favorites=s.favorites||[]}s.wallet=0,s.balance=0,s.positions=[],s.myItems=[],s.closedItems=[],s._serverTotal=null,s.lockedBalance=0,s.lockedUnlockedAt=null,s.referralBalance=0,s.refTier=`bronze`,s.refTotalLifetime=0,s.welcomeBonusReceived=!1,s.couponRedeemedId=null,s.unlockProgress=null;function p(){try{sessionStorage.setItem(`luxor_state2`,JSON.stringify(s))}catch{}}let m={queue:[],active:!1,inFlight:!1};async function h(){if(!m.inFlight){m.inFlight=!0;try{let e=await u(`/api/sale-notifications/unread`);if(!e.ok)return;let t=await e.json().catch(()=>({}));if(t.ok&&Array.isArray(t.notifications)&&t.notifications.length){let e=new Set(m.queue.map(e=>e.id));t.notifications.forEach(t=>{e.has(t.id)||m.queue.push(t)}),m.active||g()}}catch(e){console.warn(`[sale-notif] fetch failed:`,e)}finally{m.inFlight=!1}}}function g(){if(!m.queue.length){m.active=!1;return}m.active=!0;let e=m.queue[0];_(e)}function _(e){let t=m.queue.length,n=t>1?{queue_position:1,queue_total:t}:{};Modal.saleNotification({item_name:e.item_name||`Item`,days_held:Number(e.days_held)||0,principal_usd:Number(e.principal_usd)||0,payout_usd:Number(e.payout_usd)||0,profit_usd:e.profit_usd==null?Number(e.payout_usd)-Number(e.principal_usd):Number(e.profit_usd),return_percent:Number(e.return_percent)||0,sold_mode:e.sold_mode,sold_below_market:!!e.sold_below_market,...n}).then(t=>{t===`details`?v(e.id,!0,e.item_id):v(e.id,!1)})}async function v(e,t,n){if(u(`/api/sale-notifications/`+encodeURIComponent(e)+`/mark-read`,{method:`POST`}).catch(e=>console.warn(`[sale-notif] mark-read failed:`,e)),m.queue.shift(),t){y(),m.active=!1,m.queue=[],b(n);return}m.queue.length?setTimeout(()=>g(),200):(y(),m.active=!1)}function y(){let e=document.getElementById(`saleNotifModal`);e&&e.classList.remove(`show`)}function b(e){try{let t=document.querySelector(`a[data-target="items"]`)||document.querySelector(`[data-target="items"]`);t&&t.click(),setTimeout(()=>{window._itemsFilter=`sold`,document.querySelectorAll(`[data-items-tab]`).forEach(e=>{e.classList.toggle(`active`,e.dataset.itemsTab===`sold`)}),document.querySelectorAll(`[data-items-tab-m]`).forEach(e=>{e.classList.toggle(`active`,e.dataset.itemsTabM===`sold`)});try{L()}catch(e){console.warn(`[sn] renderMyItems failed:`,e)}setTimeout(()=>{let t=document.querySelector(`.my-item-card[data-item-row-id="${e}"]`);t&&(t.scrollIntoView({behavior:`smooth`,block:`center`}),t.style.transition=`box-shadow .3s`,t.style.boxShadow=`0 0 0 2px var(--gold)`,setTimeout(()=>{t.style.boxShadow=``},2e3))},200)},100)}catch(e){console.warn(`[sn] goToItem failed:`,e)}}window._snFetch=h;function x(){return(s.favorites||[]).map(e=>typeof e==`object`?e.id:e)}function S(e){if(!e)return 0;let t=e.expected_return==null?e.retMax==null?Array.isArray(e.ret)&&e.ret[1]!=null?e.ret[1]:Array.isArray(e.ret)&&e.ret[0]!=null?e.ret[0]:0:e.retMax:e.expected_return;return Number(t)||0}function C(e){if(!e)return 0;let t=e.guaranteed_return==null?e.retMin==null?Array.isArray(e.ret)&&e.ret[0]!=null?e.ret[0]:0:e.retMin:e.guaranteed_return;return Number(t)||0}function w(e){return x().includes(Number(e))}function T(e){let t=typeof e==`object`?e.id:e;return n.find(e=>e.id===Number(t))||(typeof e==`object`?{id:e.id,name:e.name||`Unknown item`,ico:e.ico||(window.LX&&LX.iconHTML?LX.iconHTML(`diamond`,22,`lx-i`):``),image_url:e.image_url||``,desc:e.desc||`Item no longer available`,price:e.price||0,funded:e.funded||100,ret:e.ret||[0,0],days:e.days||[1,1],inv:e.inv||0,min:e.min||0,badge:`CLOSED`,closes:0,cat:e.cat||`other`,slots_total:0,slots_available:0,_archived:!0}:null)}(async function(){let e=t.login||sessionStorage.getItem(`luxor_login`);if(!e||e===`unknown`){console.warn(`[balance] no userLogin — redirect to login`),location.href=`index.html`;return}console.log(`[balance] loading for:`,e);try{let n=await u(`/api/user/`+encodeURIComponent(e));if(!n.ok)console.error(`[balance] /api/user/`+e+` returned `+n.status);else{let r=await n.json().catch(e=>(console.error(`[balance] JSON parse failed:`,e),{}));if(r.ok&&r.user){if(s.wallet=Number(r.user.wallet_balance)||0,s.balance=Number(r.user.balance)||0,t.has_first_deposit_bonus=r.user.has_first_deposit_bonus||!1,s.totalDeposited=Number(r.user.total_deposited)||0,s.lockedBalance=Number(r.user.locked_balance)||0,s.lockedUnlockedAt=r.user.locked_unlocked_at||null,s.referralBalance=Number(r.user.referral_balance)||0,s.refTier=(r.user.ref_tier||`bronze`).toLowerCase(),s.refTotalLifetime=Number(r.user.ref_total_earned_lifetime)||0,s.welcomeBonusReceived=!!r.user.welcome_bonus_received,s.couponRedeemedId=r.user.coupon_redeemed_id||null,s.unlockProgress=r.user.unlock_progress||null,r.user.ref_code){t.ref_code=r.user.ref_code;try{sessionStorage.setItem(`luxor_user`,JSON.stringify(t))}catch{}try{let e=document.getElementById(`refCode`);e&&(e.textContent=t.ref_code);let n=document.getElementById(`mRefCode`);n&&(n.textContent=t.ref_code)}catch{}}sessionStorage.setItem(`luxor_login`,e),console.log(`[balance] loaded — wallet:`,s.wallet,`locked:`,s.lockedBalance,`refBal:`,s.referralBalance,`tier:`,s.refTier);try{F()}catch(e){console.warn(`[balance] updateUI failed:`,e)}try{typeof D==`function`&&D()}catch{}p()}else console.warn(`[balance] response missing ok/user:`,r)}}catch(e){console.error(`[balance] /api/user error:`,e)}await Promise.all([ie().catch(e=>console.warn(`[loadPoolPositions]:`,e)),ae().catch(e=>console.warn(`[loadMyItems]:`,e)),o().catch(e=>console.warn(`[loadMarketplaceItems]:`,e)),re().catch(e=>console.warn(`[loadTransactionsFromBackend]:`,e)),E().catch(e=>console.warn(`[loadBalanceSummary]:`,e))]);try{F()}catch(e){console.error(`[balance] final updateUI failed:`,e)}try{typeof X==`function`&&X()}catch{}try{typeof D==`function`&&D()}catch{}try{typeof z==`function`&&z()}catch{}try{typeof L==`function`&&L()}catch{}try{typeof h==`function`&&h()}catch(e){console.warn(`[balance] _snFetch failed:`,e)}console.log(`[balance] initial load complete`)})(),window._lastWallet=null,window._lastTxCount=0;async function E(){let e=t.login||sessionStorage.getItem(`luxor_login`);if(!e)return null;try{let t=await u(`/api/user/`+encodeURIComponent(e)+`/balance-summary`);if(!t.ok)return null;let n=await t.json(),r=n&&(n.total_balance===void 0?n.total:n.total_balance);if(!n||r==null)return null;s._serverTotal=Number(r)||0;let i=n.components||{},a=i.wallet_balance===void 0?n.wallet:i.wallet_balance,o=i.locked_balance===void 0?n.locked:i.locked_balance,c=i.referral_balance===void 0?n.referral:i.referral_balance;return a!=null&&(s.wallet=Number(a)||0),o!=null&&(s.lockedBalance=Number(o)||0),c!=null&&(s.referralBalance=Number(c)||0),n}catch(e){return console.warn(`[balance-summary] fetch failed:`,e),null}}window.loadBalanceSummary=E;function D(){let e=Number(s.lockedBalance)||0,t=[`dBonusLockedCard`,`mBonusLockedCard`].map(e=>document.getElementById(e)).filter(Boolean);if(e<=0){t.forEach(e=>{e.style.display=`none`});return}t.forEach(e=>{e.style.display=``}),[`dBonusLockedAmount`,`mBonusLockedAmount`].forEach(t=>{let n=document.getElementById(t);n&&(n.textContent=`$`+Math.round(e).toLocaleString())});let n=s.unlockProgress||{},r=n.trigger_1||{},i=n.trigger_2||{},a=e=>`$`+Math.round(Number(e)||0).toLocaleString(),o=Number(r.deposit_current)||0,c=Number(r.deposit_required)||50,l=Math.min(100,Math.round(o/c*100)),u=Number(r.invest_hours_held)||0,f=Number(r.invest_hours_required)||24,p=Math.min(100,Math.round(u/f*100)),m=Number(i.qualified_referrals)||0,h=Number(i.required_referrals)||3,g=Math.min(100,Math.round(m/h*100)),_=e=>e?`<svg viewBox="0 0 24 24" fill="none" stroke="#27ae60" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;flex-shrink:0"><circle cx="12" cy="12" r="10" fill="rgba(39,174,96,.15)" stroke="#27ae60"/><path d="M8 12l3 3 5-6"/></svg>`:`<svg viewBox="0 0 24 24" fill="none" stroke="#f1c40f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;flex-shrink:0;opacity:.5"><circle cx="12" cy="12" r="10" stroke-dasharray="2 2"/></svg>`,v=`
    <!-- TRIGGER 1: Свой путь -->
    <div style="margin-bottom:14px;padding:12px;background:rgba(0,0,0,.25);border-radius:8px;border:1px solid rgba(241,196,15,.15)">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <span style="font-family:'Bebas Neue',sans-serif;font-size:11px;letter-spacing:2px;color:#f1c40f;font-weight:700">PATH 1 · YOUR ACTIVITY</span>
        ${r.completed?`<span style="font-size:10px;color:#27ae60;font-weight:700;letter-spacing:1px">✓ DONE</span>`:``}
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;font-size:12px">
        ${_(!!r.deposit_ok)}
        <span style="flex:1;color:${r.deposit_ok?`var(--t)`:`var(--t2)`}">Deposit ≥ ${a(c)}</span>
        <span style="font-family:'Space Mono',monospace;font-size:11px;color:var(--t3);white-space:nowrap">${a(o)} / ${a(c)}</span>
      </div>
      <div style="height:4px;background:var(--bg3);border-radius:2px;overflow:hidden;margin-bottom:8px">
        <div style="height:100%;background:${r.deposit_ok?`#27ae60`:`#f1c40f`};width:${l}%;transition:width .4s ease"></div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;font-size:12px">
        ${_(!!r.invest_ok)}
        <span style="flex:1;color:${r.invest_ok?`var(--t)`:`var(--t2)`}">Hold investment ≥ 24h</span>
        <span style="font-family:'Space Mono',monospace;font-size:11px;color:var(--t3);white-space:nowrap">${u.toFixed(1)}h / ${f}h</span>
      </div>
      <div style="height:4px;background:var(--bg3);border-radius:2px;overflow:hidden">
        <div style="height:100%;background:${r.invest_ok?`#27ae60`:`#f1c40f`};width:${p}%;transition:width .4s ease"></div>
      </div>
    </div>

    <!-- TRIGGER 2: Рефералы -->
    <div style="padding:12px;background:rgba(0,0,0,.25);border-radius:8px;border:1px solid rgba(241,196,15,.15)">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <span style="font-family:'Bebas Neue',sans-serif;font-size:11px;letter-spacing:2px;color:#f1c40f;font-weight:700">PATH 2 · REFERRALS</span>
        ${i.completed?`<span style="font-size:10px;color:#27ae60;font-weight:700;letter-spacing:1px">✓ DONE</span>`:``}
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;font-size:12px">
        ${_(m>=h)}
        <span style="flex:1;color:${m>=h?`var(--t)`:`var(--t2)`}">Invite ${h} qualified friends</span>
        <span style="font-family:'Space Mono',monospace;font-size:11px;color:var(--t3);white-space:nowrap">${m} / ${h}</span>
      </div>
      <div style="height:4px;background:var(--bg3);border-radius:2px;overflow:hidden;margin-bottom:8px">
        <div style="height:100%;background:${m>=h?`#27ae60`:`#f1c40f`};width:${g}%;transition:width .4s ease"></div>
      </div>
      <div style="font-size:10px;color:var(--t3);line-height:1.4">A friend is "qualified" once they unlock their own bonus (deposit ≥ ${a(c)} + 24h hold).</div>
    </div>
  `;[`dBonusUnlockProgress`,`mBonusUnlockProgress`].forEach(e=>{let t=document.getElementById(e);t&&(t.innerHTML=v)})}window.updateBonusUI=D;function O(){}window.updateReferralPendingUI=O;async function k(){let e=t.login||sessionStorage.getItem(`luxor_login`);if(!e)return;let n=null,r=null;if(await Promise.all([u(`/api/user/`+encodeURIComponent(e)).then(e=>e.ok?e.json():null).then(e=>{n=e}).catch(e=>console.warn(`[poll-balance] user error:`,e)),u(`/api/user/`+encodeURIComponent(e)+`/transactions`).then(e=>e.ok?e.json():null).then(e=>{r=e}).catch(e=>{}),ie().catch(e=>{}),ae().catch(e=>{}),E().catch(e=>{})]),n&&n.ok&&n.user){let e=Number(n.user.wallet_balance)||0,r=window._lastWallet;if(r!==null&&e!==r){let t=e-r,n=typeof fmtMoney==`function`?fmtMoney:e=>`$`+Math.round(e).toLocaleString();if(t>0)try{Y(`success`,`Balance updated`,`<b style="color:var(--green)">+`+n(t)+`</b> credited to your wallet.`)}catch{}else if(t<0)try{Y(`warn`,`Balance updated`,n(t)+` deducted from wallet.`)}catch{}}s.wallet=e,window._lastWallet=e,t.has_first_deposit_bonus=n.user.has_first_deposit_bonus||!1,s.totalDeposited=Number(n.user.total_deposited)||0}if(Array.isArray(r)){if(r.length>window._lastTxCount&&window._lastTxCount>0)try{await re()}catch{}window._lastTxCount=r.length}try{F()}catch{}try{typeof X==`function`&&X()}catch{}try{typeof L==`function`&&L()}catch{}try{typeof h==`function`&&h()}catch{}}setTimeout(()=>{window._lastWallet=s.wallet||0,window._lastTxCount=(s.txs||[]).length,setInterval(()=>{k().catch(e=>console.warn(`[poll-balance] failed:`,e)),A().catch(e=>{})},3e4),console.log(`[balance] polling started (30s interval)`)},5e3),window._support={lastUnread:0,messages:[],initialPollDone:!1};async function A(){if(t!==void 0&&t.login||sessionStorage.getItem(`luxor_login`))try{let e=await u(`/api/support/unread-count`);if(!e.ok)return;let t=await e.json();if(!t||!t.ok)return;let n=Number(t.unread)||0;if([`dSupportBadge`].forEach(e=>{let t=document.getElementById(e);t&&(n>0?(t.textContent=n>99?`99+`:String(n),t.style.display=``):t.style.display=`none`)}),window._support.initialPollDone&&n>window._support.lastUnread){let e=n-window._support.lastUnread;try{Y(`success`,`New message from support`,`You have <b>${e}</b> new ${e===1?`message`:`messages`}. <a onclick="navTo(\'support\')" style="color:var(--gold);text-decoration:underline;cursor:pointer">Open chat</a>`,7e3)}catch{}}window._support.lastUnread=n,window._support.initialPollDone=!0}catch{}}async function ee(){if(t!==void 0&&t.login||sessionStorage.getItem(`luxor_login`))try{let e=await u(`/api/support/messages`);if(!e.ok)return;let t=await e.json();if(!t||!t.ok)return;window._support.messages=t.messages||[],j(),window._support.lastUnread=0,[`dSupportBadge`].forEach(e=>{let t=document.getElementById(e);t&&(t.style.display=`none`)})}catch(e){console.warn(`[support] load failed:`,e)}}function j(){let e=window._support.messages||[],t=e.length===0?`<div class="empty-chat"><div class="ic"></div><div>No messages yet.</div><div style="margin-top:6px;opacity:.7">Start the conversation by typing below.</div></div>`:e.map(e=>{let t=e.created_at?new Date(e.created_at).toLocaleString():``;return`<div class="msg ${e.sender===`admin`?`admin`:`user`}">${(e.text||``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\n/g,`<br>`)}<div class="time">${t}</div></div>`}).join(``);[`dSupportMessages`,`mSupportMessages`].forEach(e=>{let n=document.getElementById(e);n&&(n.innerHTML=t,n.scrollTop=n.scrollHeight)})}async function te(){let e=document.getElementById(`dSupportInput`),t=document.getElementById(`mSupportInput`),n=(e?.value||t?.value||``).trim();if(!n){try{Y(`warn`,`Empty message`,`Type something before sending.`)}catch{}return}if(n.length>4e3){try{Y(`error`,`Too long`,`Maximum 4000 characters per message.`)}catch{}return}let r=document.getElementById(`dSupportSend`),i=document.getElementById(`mSupportSend`);[r,i].forEach(e=>{e&&(e.disabled=!0,e.textContent=`...`)}),window._support.messages.push({id:`tmp-`+Date.now(),sender:`user`,text:n,created_at:new Date().toISOString()}),j();try{let r=await u(`/api/support/send`,{method:`POST`,body:JSON.stringify({text:n})}),i=await r.json().catch(()=>({}));if(!r.ok||!i.ok){window._support.messages=window._support.messages.filter(e=>!String(e.id).startsWith(`tmp-`)),j();let e={empty_message:`Cannot send empty message.`,message_too_long:`Maximum 4000 characters per message.`},t=i&&i.error||i&&i.detail&&i.detail.error||`unknown`;try{Y(`error`,`Failed to send`,e[t]||`Please try again.`)}catch{}return}e&&(e.value=``),t&&(t.value=``),e&&(e.style.height=`42px`),t&&(t.style.height=`42px`),await ee()}catch(e){console.error(`[support] send error:`,e),window._support.messages=window._support.messages.filter(e=>!String(e.id).startsWith(`tmp-`)),j();try{Y(`error`,`Network error`,`Could not send. Check connection.`)}catch{}}finally{[r,i].forEach(e=>{e&&(e.disabled=!1,e.textContent=`SEND`)})}}async function ne(){document.body.insertAdjacentHTML(`beforeend`,`
    <div id="supportArchiveModal" style="position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:300;display:flex;align-items:center;justify-content:center;padding:20px;animation:fadeIn .2s">
      <div style="background:var(--card);border:1px solid var(--bd);border-radius:14px;padding:0;max-width:560px;width:100%;max-height:85vh;display:flex;flex-direction:column;overflow:hidden">
        <div style="padding:18px 20px;border-bottom:1px solid var(--bd);display:flex;justify-content:space-between;align-items:center">
          <div style="font-family:'Bebas Neue',sans-serif;font-size:18px;letter-spacing:2px;color:var(--gold)">CHAT ARCHIVE</div>
          <button onclick="document.getElementById('supportArchiveModal').remove()" style="background:transparent;border:none;color:var(--t3);font-size:22px;cursor:pointer;padding:0 4px">&times;</button>
        </div>
        <div id="supportArchiveBody" style="padding:18px 20px;overflow-y:auto;flex:1">
          <div style="text-align:center;color:var(--t3);padding:30px">Loading...</div>
        </div>
      </div>
    </div>
  `);try{let e=await u(`/api/support/history`),t=await e.json().catch(()=>({})),n=document.getElementById(`supportArchiveBody`);if(!n)return;if(!e.ok||!t.ok){n.innerHTML=`<div style="text-align:center;color:var(--red);padding:30px">Failed to load archive.</div>`;return}let r=t.sessions||[];if(r.length===0){n.innerHTML=`
        <div style="text-align:center;padding:40px 20px">
          <div class="lx-i lx-i--32" style="margin-bottom:10px;opacity:.5;color:var(--gold);display:flex;justify-content:center"><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z'/></svg></div>
          <div style="color:var(--t2);font-size:14px;margin-bottom:6px">No archived chats yet.</div>
          <div style="color:var(--t3);font-size:12px">Closed conversations will appear here.</div>
        </div>`;return}n.innerHTML=r.map((e,t)=>{let n=e.closed_at?new Date(e.closed_at).toLocaleString():`—`,r=e.messages.length,i=e.messages[0],a=i?(i.text||``).replace(/[<>&"]/g,e=>({"<":`&lt;`,">":`&gt;`,"&":`&amp;`,'"':`&quot;`})[e]).slice(0,80):``;return`
        <div style="background:var(--bg2);border:1px solid var(--bd);border-radius:10px;margin-bottom:10px;overflow:hidden;transition:border .2s">
          <div onclick="document.getElementById('archMsgs_${t}').classList.toggle('open')" style="padding:12px 14px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:10px">
            <div style="flex:1;min-width:0">
              <div style="font-size:11px;color:var(--gold);font-weight:700;letter-spacing:.5px;margin-bottom:2px">SESSION · ${r} messages</div>
              <div style="font-size:11px;color:var(--t3)">Closed ${n}</div>
              <div style="font-size:12px;color:var(--t2);margin-top:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a}${a.length>=80?`...`:``}</div>
            </div>
            <span style="color:var(--t3);font-size:18px">▾</span>
          </div>
          <div id="archMsgs_${t}" class="arch-session" style="display:none;padding:0 14px 14px;border-top:1px solid var(--bd);max-height:300px;overflow-y:auto">
            ${e.messages.map(e=>{let t=e.sender===`user`,n=e.created_at?new Date(e.created_at).toLocaleString():``,r=(e.text||``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\n/g,`<br>`);return`<div style="display:flex;justify-content:${t?`flex-end`:`flex-start`};margin:8px 0">
                <div style="max-width:75%;padding:8px 12px;border-radius:10px;font-size:13px;line-height:1.4;word-wrap:break-word;${t?`background:var(--gold);color:#0a0a0a`:`background:var(--bg3);color:var(--t);border:1px solid var(--bd)`}">
                  ${r}
                  <div style="font-size:9px;opacity:.6;margin-top:3px;font-family:monospace">${n}</div>
                </div>
              </div>`}).join(``)}
          </div>
        </div>
      `}).join(``)}catch(e){console.error(`[support] archive error:`,e);let t=document.getElementById(`supportArchiveBody`);t&&(t.innerHTML=`<div style="text-align:center;color:var(--red);padding:30px">Network error.</div>`)}}window.supportShowArchive=ne,(function(){if(typeof P!=`function`)return;let e=P;window.navTo=function(t){if(e.apply(this,arguments),t===`support`)try{ee()}catch{}}})(),[`dSupportInput`,`mSupportInput`].forEach(e=>{let t=document.getElementById(e);t&&t.addEventListener(`keydown`,function(e){e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),te())})}),console.log(`[stage12] Support chat loaded`);async function re(){let e=t.login||sessionStorage.getItem(`luxor_login`);if(e)try{let t=await(await u(`/api/user/`+encodeURIComponent(e)+`/transactions`)).json();if(!Array.isArray(t))return;let n=t.map(e=>{let t=+(e.amount_usd||e.amount||0),n=e.type===`withdrawal`?`-`:e.type===`deposit`||e.type===`bonus`||e.type===`admin_bonus`?`+`:``,r=({deposit:`Deposit`,withdrawal:`Withdrawal`,bonus:`Bonus`,admin_bonus:`Admin bonus`}[e.type]||e.type)+` `+n+`$`+Math.round(t).toLocaleString()+(e.crypto_currency?` (`+e.crypto_currency+`)`:``),i=e.created_at?new Date(e.created_at):new Date;return{desc:r,time:isNaN(i.getTime())?``:i.toLocaleString(),status:e.status===`completed`?`done`:e.status===`rejected`?`rejected`:`processing`,_amount:t,_type:e.type}});s.txs=n;try{z()}catch{}try{ue()}catch{}}catch(e){console.warn(`loadTransactions error:`,e)}}async function ie(){let e=t.login||sessionStorage.getItem(`luxor_login`);if(e)try{let t=await(await u(`/api/pool/positions/`+encodeURIComponent(e))).json();if(t&&t.ok&&Array.isArray(t.positions)){s.positions=t.positions;try{fe()}catch{}try{F()}catch{}}}catch(e){console.warn(`loadPoolPositions failed:`,e)}}async function ae(){let e=t.login||sessionStorage.getItem(`luxor_login`);if(e)try{let t=await(await u(`/api/items/my/`+encodeURIComponent(e))).json();if(t&&t.ok&&Array.isArray(t.purchases)){s.myItems=t.purchases.map(e=>({id:e.item_id,purchase_id:e.id,name:e.name,ico:``,image_url:e.image_url||``,invested:e.invested,pct:e.pct,status:e.status,ret:e.ret,retMin:e.retMin,retMax:e.retMax,guaranteed:e.guaranteed_return,daysTotal:e.return_period_days,purchaseDate:e.purchaseDate,sold_at:e.sold_at,sold_mode:e.sold_mode,sold_percent:e.sold_percent,payout_usd:e.payout_usd,return_percent:e.return_percent,days_held:e.days_held,sale_tag:e.sale_tag,desc:``})),s.closedItems=s.myItems.filter(e=>e.status!==`active`);try{L()}catch{}try{F()}catch{}}}catch(e){console.warn(`loadMyItems failed:`,e)}}let M={day:86400,week:604800,month:2592e3};function N(e){let t=Number(e.earned||e.earned_usd)||0,n=Number(e.amount||e.amount_usd)||0,r=Number(e.rate_pct)||0,i=M[e.period||`day`]||86400;if(!e.last_accrual_at)return t;let a;try{a=new Date(e.last_accrual_at).getTime()}catch{return t}if(!a||isNaN(a))return t;let o=Math.max(0,(Date.now()-a)/1e3)/i,s=r/100*n*o;return t+Math.min(s,r/100*n*2)}function oe(e){let t=M[e.period||`day`]||86400;if(!e.last_accrual_at)return t;let n;try{n=new Date(e.last_accrual_at).getTime()}catch{return t}if(!n||isNaN(n))return t;let r=(Date.now()-n)/1e3;return Math.max(0,t-r)}function se(e){if(e<=0)return`soon`;let t=Math.floor(e/86400),n=Math.floor(e%86400/3600),r=Math.floor(e%3600/60);return t>0?t+`d `+n+`h`:n>0?n+`h `+r+`m`:r+`m`}function ce(e){let t=Date.now(),n=e.purchaseDate?typeof e.purchaseDate==`string`?new Date(e.purchaseDate).getTime():e.purchaseDate:t,r=Math.max(0,(t-n)/(1e3*60*60*24)),i=Math.max(1,e.daysTotal||30),a=Math.min(1,r/i),o=Math.max(0,i-r),s=Number(e.guaranteed||e.retMin||0),c=Number(e.retMax||e.ret||0),l=e.invested*s/100,u=e.invested*c/100,f=0;return e.status&&e.status!==`active`&&e.payout_usd!==void 0&&e.payout_usd!==null&&(f=Number(e.payout_usd)-Number(e.invested)),{daysElapsed:r,daysLeft:o,daysTotal:i,progress:a,guaranteed:s,guaranteedUsd:l,expected:c,expectedUsd:u,expectedEarned:l,expectedEarnedMax:u,currentEarned:f,expectedPct:c}}function P(e){document.querySelectorAll(`.d-screen`).forEach(e=>e.classList.remove(`show`));let t=document.getElementById(`ds-`+e);t&&t.classList.add(`show`),document.querySelectorAll(`.d-side .nav-item`).forEach(e=>e.classList.remove(`active`));let n={detail:`market`,poolDetail:`pools`}[e]||e,r=document.querySelector(`.d-side .nav-item[data-target="`+n+`"]`);if(r){r.classList.add(`active`);let e=r.closest(`.nav-submenu`);e&&e.parentElement.classList.add(`open`)}document.querySelectorAll(`.m-screen`).forEach(e=>e.classList.remove(`show`));let i=document.getElementById(`ms-`+e);i&&i.classList.add(`show`),document.querySelectorAll(`.m-bottom .nv`).forEach(e=>e.classList.remove(`active`));let a={dash:`dash`,pools:`pools`,market:`market`,items:`items`,more:`more`,detail:`market`,favs:`more`,referral:`more`,settings:`more`,trade:`more`,insights:`more`,manager:`more`,poolDetail:`pools`,smart:`more`}[e]||`more`,o=document.querySelector(`.m-bottom .nv[data-nav-target="`+a+`"]`);if(o&&o.classList.add(`active`),e===`referral`)try{Ne()}catch{}if(e===`settings`)try{Be()}catch{}if(e===`smart`)try{jt()}catch(e){console.error(`Smart Invest render failed:`,e)}if(e===`calc`)try{qt()}catch(e){console.error(`Profit Calculator render failed:`,e)}if(e===`txs`)try{z()}catch{}if(e===`pools`)try{let e=Array.isArray(s.positions)&&s.positions.filter(e=>!e.status||e.status===`active`).length>0?`positions`:`invest`;document.querySelectorAll(`[data-pool-tab]`).forEach(t=>t.classList.toggle(`active`,t.dataset.poolTab===e)),document.querySelectorAll(`[data-pool-sub]`).forEach(t=>t.classList.toggle(`hidden`,t.dataset.poolSub!==e)),document.querySelectorAll(`[data-pool-tab-m]`).forEach(t=>t.classList.toggle(`active`,t.dataset.poolTabM===e)),document.querySelectorAll(`[data-pool-sub-m]`).forEach(t=>t.classList.toggle(`hidden`,t.dataset.poolSubM!==e))}catch(e){console.warn(`[pools auto-tab]`,e)}let c=document.querySelector(`.d-content`);c&&(c.scrollTop=0),window.scrollTo(0,0)}document.querySelectorAll(`.d-side .nav-item[data-target]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),P(e.dataset.target)})}),document.getElementById(`dnav-more-toggle`)?.addEventListener(`click`,()=>{document.querySelector(`.d-side .nav-more`)?.classList.toggle(`open`)});function F(){let e=Number(s.wallet)||0,n=Number(s.lockedBalance)||0,r=Number(s.referralBalance)||0,i=(Array.isArray(s.positions)?s.positions:[]).filter(e=>!e.status||e.status===`active`),a=(Array.isArray(s.myItems)?s.myItems:[]).filter(e=>!e.status||e.status===`active`),o=i.reduce((e,t)=>e+(Number(t.amount||t.amount_usd)||0),0),c=i.reduce((e,t)=>e+N(t),0),l=a.reduce((e,t)=>e+(Number(t.invested||t.amount_paid_usd)||0),0),u=e+n+r+o+c+l,f=typeof s._serverTotal==`number`&&!isNaN(s._serverTotal)?s._serverTotal:u,p=i.reduce((e,t)=>{let n=Number(t.rate_pct||0)/100,r=t.period||`day`,i=r===`day`?365*n:r===`week`?52*n:12*n;return e+(Number(t.amount||t.amount_usd)||0)*i},0),m=a.reduce((e,t)=>{let n=Number(t.retMax||t.expected_return||t.ret||0)/100;return e+(Number(t.invested||t.amount_paid_usd)||0)*n},0),h=Number(s.totalDeposited)||0,g=s.myItems.filter(e=>e.status!==`active`&&e.payout_usd!==void 0&&e.payout_usd!==null).reduce((e,t)=>e+(Number(t.payout_usd)-Number(t.invested)),0),_,v;h>0?(_=f-h,v=_/h*100):(_=c+g,v=o+l>0?_/(o+l)*100:0);let y=typeof fmtMoney==`function`?fmtMoney:(e,t)=>{t||={};let n=Math.round(Number(e)||0);return t.sign&&n>0?`+$`+n.toLocaleString():n<0?`-$`+Math.abs(n).toLocaleString():`$`+n.toLocaleString()},b=e=>document.getElementById(e);typeof G==`function`?(G(`dBalAmount`,f),G(`mBalAmount`,f)):(b(`dBalAmount`)&&(b(`dBalAmount`).textContent=y(f)),b(`mBalAmount`)&&(b(`mBalAmount`).textContent=y(f))),[`dBalAmount`,`mBalAmount`].forEach(e=>{let t=b(e);t&&t.classList.contains(`lx-bal-loading`)&&t.classList.remove(`lx-bal-loading`)});let x=_>=0?`▲`:`▼`,S=y(_,{sign:!0}),C=x+` `+S+` (`+(v>=0?`+`:``)+v.toFixed(2)+`%) all time`;b(`dBalDelta`)&&(b(`dBalDelta`).textContent=C,b(`dBalDelta`).className=`delta`+(_<0?` neg`:``)),b(`mBalDelta`)&&(b(`mBalDelta`).textContent=C,b(`mBalDelta`).className=`delta`+(_<0?` neg`:``));let w=typeof W==`function`,T=p+m;w?([`dStatEarned`,`mStatEarned`].forEach(e=>{let t=b(e);t&&W(t,_,{fmtOpts:{sign:!0}})}),[`dStatExpected`,`mStatExpected`].forEach(e=>{let t=b(e);t&&W(t,T,{fmtOpts:{sign:!0}})})):(b(`dStatEarned`)&&(b(`dStatEarned`).textContent=y(_,{sign:!0})),b(`mStatEarned`)&&(b(`mStatEarned`).textContent=y(_,{sign:!0})),b(`dStatExpected`)&&(b(`dStatExpected`).textContent=y(T,{sign:!0})),b(`mStatExpected`)&&(b(`mStatExpected`).textContent=y(T,{sign:!0})));let E=o,D=s.positions.reduce((e,t)=>{let n=Number(t.amount||t.amount_usd)||0,r=Number(t.rate_pct)||0,i=t.period||`day`,a=i===`day`?365:i===`week`?52:12;return e+r/100*n*a},0),O=E>0?D/E*100:0;w?[`dStatAPY`,`mStatAPY`].forEach(e=>{let t=b(e);t&&W(t,O,{formatter:e=>e.toFixed(0)+`%`,duration:700})}):(b(`dStatAPY`)&&(b(`dStatAPY`).textContent=O.toFixed(0)+`%`),b(`mStatAPY`)&&(b(`mStatAPY`).textContent=O.toFixed(0)+`%`));let k=t.fn||t.login||`User`;b(`dGreetName`)&&(b(`dGreetName`).textContent=k),b(`mGreetName`)&&(b(`mGreetName`).textContent=k),b(`dUserName`)&&(b(`dUserName`).textContent=k),b(`dUserAvatar`)&&(b(`dUserAvatar`).textContent=(k[0]||`U`).toUpperCase());try{le(f)}catch{}try{je()}catch{}try{fe()}catch{}try{L()}catch{}try{R()}catch{}try{z()}catch{}try{ue()}catch{}try{Me()}catch{}b(`dPoolsBadge`)&&(b(`dPoolsBadge`).textContent=s.positions.length),b(`mPoolsBadge`)&&(b(`mPoolsBadge`).textContent=s.positions.length);let A=s.myItems.filter(e=>e.status===`active`).length;b(`dItemsBadge`)&&(b(`dItemsBadge`).textContent=A),b(`mItemsBadge`)&&(b(`mItemsBadge`).textContent=A)}function le(e){let t=Number(e)||0,n,r;t>=25e3?(n=`BLACK`,r=`vip-black`):t>=5e3?(n=`GOLD`,r=`vip-gold`):(n=`BRONZE`,r=`vip-bronze`),window._vipTier={label:n,cls:r,total:t};let i=e=>document.getElementById(e);[`dGreetPlan`,`dUserPlan`,`mGreetPlan`].forEach(e=>{let t=i(e);t&&(t.textContent=n,t.classList.remove(`vip-bronze`,`vip-gold`,`vip-black`),t.classList.add(r))})}function ue(){let e=[`dFirstBonus`,`mFirstBonus`].map(e=>document.getElementById(e)).filter(Boolean);if(e.length){if(t.has_first_deposit_bonus===!1){e.forEach(e=>e.classList.add(`hidden`));return}if((Number(s.totalDeposited)||0)>0){e.forEach(e=>e.classList.add(`hidden`));return}if((s.txs||[]).some(e=>{let t=e.desc||e.type||``;return/deposit/i.test(t)&&e.status!==`rejected`})){e.forEach(e=>e.classList.add(`hidden`));return}e.forEach(e=>e.classList.remove(`hidden`))}}function de(e){let t=Number(e.amount||e.amount_usd)||0,n=N(e),r=n>(Number(e.earned||e.earned_usd)||0)+.001,i=e.rate||(e.rate_pct?e.rate_pct+`%/`+(e.period||`day`):`—`),a=e.id,o=M[e.period||`day`]||86400,s=oe(e),c=Math.max(0,Math.min(100,(o-s)/o*100)),l=se(s),u=`+$`+n.toFixed(2)+(r?`<span class="live-tag" style="display:inline-flex;align-items:center;gap:4px"><span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#6FA776"></span>live</span>`:``);return`<div class="position-card" data-pool-row-plan="${e.plan}" onclick="openPoolPositionDetail(${a})">
    <div class="pos-row"><span class="pos-label">Plan</span><span class="pos-value">${e.plan}</span></div>
    <div class="pos-row"><span class="pos-label">Invested</span><span class="pos-value">$${t.toLocaleString()}</span></div>
    <div class="pos-row"><span class="pos-label">Rate</span><span class="pos-gold">${i}</span></div>
    <div class="pos-row"><span class="pos-label">Earned</span><span class="pos-green" id="liveEarned-${a}">${u}</span></div>
    <div class="next-payout">
      <div class="nph"><span>Next payout</span><span class="pgold" id="nextPayout-${a}">${l}</span></div>
      <div class="pbar"><div class="pf" id="payoutBar-${a}" style="width:${c}%"></div></div>
    </div>
    <div class="withdraw-row" onclick="event.stopPropagation()">
      <button class="details-btn" onclick="openPoolPositionDetail(${a})">DETAILS</button>
      <button class="withdraw-btn" onclick="withdrawFromPool(${a})">EXIT $${Math.round(t+n).toLocaleString()}</button>
    </div>
  </div>`}function fe(){let e=s.positions.length?s.positions.map(de).join(``):`<div class="empty-state">No active positions. Invest in a pool to start earning.</div>`;[`poolPositionsList`,`poolPositionsListM`].forEach(t=>{let n=document.getElementById(t);n&&(n.innerHTML=e)});let t={};s.positions.forEach(e=>{let n=e.plan||`Unknown`;t[n]||(t[n]={plan:n,count:0,principal:0,live:0,positions:[]}),t[n].count+=1,t[n].principal+=Number(e.amount||e.amount_usd)||0,t[n].live+=N(e),t[n].positions.push(e)});let n=Object.values(t),r={Platinum:0,Gold:1,Silver:2};n.sort((e,t)=>(r[e.plan]??99)-(r[t.plan]??99));let i=n.length?n.map(e=>{let t=e.plan===`Platinum`?`◆`:e.plan===`Gold`?`★`:`●`,n=e.count>1?`${e.count} positions`:`1 position`;return`<div class="row" onclick="goToPoolPositions('${e.plan}')">
          <div class="ic">${t}</div>
          <div class="info"><div class="n">${e.plan} Pool</div><div class="s">${n}</div></div>
          <div class="v"><div class="a">$${Math.round(e.principal).toLocaleString()}</div><div class="d">+$${e.live.toFixed(2)}</div></div>
        </div>`}).join(``):`<div class="empty-state">No active pools yet.<br><a onclick="navTo('pools')" style="color:var(--gold);cursor:pointer">→ Browse pools</a></div>`;if([`dPoolsList`,`mPoolsList`].forEach(e=>{let t=document.getElementById(e);t&&(t.innerHTML=i)}),[`poolsSummary`,`poolsSummaryM`].forEach(e=>{let t=document.getElementById(e);if(t){if(s.positions.length===0){t.classList.add(`hidden`);return}t.classList.remove(`hidden`)}}),s.positions.length){let e=s.positions.reduce((e,t)=>e+(Number(t.amount||t.amount_usd)||0),0),t=s.positions.reduce((e,t)=>e+N(t),0),n=e+t,r=s.positions.reduce((e,t)=>{let n=Number(t.amount||t.amount_usd)||0,r=Number(t.rate_pct)||0,i=t.period||`day`,a=i===`day`?365:i===`week`?52:12;return e+r/100*n*a},0),i=e>0?r/e*100:0,a=(e,t)=>{let n=document.getElementById(e);n&&(n.textContent=t)};a(`poolsTotalValue`,`$`+Math.round(n).toLocaleString()),a(`poolsTotalValueM`,`$`+Math.round(n).toLocaleString()),a(`poolsTotalSub`,s.positions.length+` active position`+(s.positions.length>1?`s`:``)),a(`poolsTotalSubM`,s.positions.length+` active`),a(`poolsTotalEarned`,`+$`+t.toFixed(2)),a(`poolsTotalEarnedM`,`+$`+t.toFixed(2)),a(`poolsTotalAPY`,`Avg APY `+i.toFixed(0)+`%`),a(`poolsTotalAPYM`,`Avg `+i.toFixed(0)+`%`)}}function pe(){document.hidden||s.positions.forEach(e=>{let t=e.id;if(!t)return;let n=document.getElementById(`liveEarned-`+t),r=document.getElementById(`nextPayout-`+t),i=document.getElementById(`payoutBar-`+t);if(n){let t=N(e),r=t>(Number(e.earned||e.earned_usd)||0)+.001;n.innerHTML=`+$`+t.toFixed(2)+(r?`<span class="live-tag" style="display:inline-flex;align-items:center;gap:4px"><span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#6FA776"></span>live</span>`:``)}if(r&&(r.textContent=se(oe(e))),i){let t=M[e.period||`day`]||86400,n=oe(e),r=Math.max(0,Math.min(100,(t-n)/t*100));i.style.width=r+`%`}})}typeof window<`u`&&!window._positionsTicker&&(window._positionsTicker=setInterval(pe,1e3));function I(e,t){t||={};let n=Array.isArray(e.image_urls)&&e.image_urls.length>0?e.image_urls.filter(e=>e&&typeof e==`string`&&e.trim()):e.image_url?[e.image_url]:[],r=(e.name||``).replace(/"/g,`&quot;`),i=e.ico||(window.LX&&LX.iconHTML?LX.iconHTML(`diamond`,22,`lx-i`):``);if(n.length===0)return`<span class="emoji">${i}</span>`;if(n.length===1||t.noCarousel)return`<span class="emoji" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:0">${i}</span><img src="${n[0]}" alt="${r}" style="position:relative;z-index:1" onerror="this.style.display='none'">`;let a=`gal_${e.id}_${Math.random().toString(36).slice(2,8)}`,o=n.map((e,t)=>`<img src="${e}" alt="${r} #${t+1}" data-idx="${t}" class="gal-img${t===0?` active`:``}" style="${t===0?``:`display:none`}" onerror="this.style.display='none'">`).join(``),s=n.map((e,t)=>`<button type="button" class="gal-dot${t===0?` active`:``}" data-idx="${t}" onclick="event.stopPropagation();_galGo('${a}', ${t})"></button>`).join(``);return`
    <div class="gal-wrap" id="${a}" data-count="${n.length}">
      ${o}
      <button type="button" class="gal-nav gal-prev" onclick="event.stopPropagation();_galStep('${a}', -1)" aria-label="Previous">‹</button>
      <button type="button" class="gal-nav gal-next" onclick="event.stopPropagation();_galStep('${a}', 1)" aria-label="Next">›</button>
      <div class="gal-dots">${s}</div>
    </div>
  `}window._galGo=function(e,t){let n=document.getElementById(e);if(!n)return;let r=n.querySelectorAll(`.gal-img`),i=n.querySelectorAll(`.gal-dot`),a=r.length;if(a===0)return;let o=(t%a+a)%a;r.forEach((e,t)=>{t===o?(e.style.display=``,e.classList.add(`active`)):(e.style.display=`none`,e.classList.remove(`active`))}),i.forEach((e,t)=>e.classList.toggle(`active`,t===o)),n.dataset.cur=o},window._galStep=function(e,t){let n=document.getElementById(e);if(!n)return;let r=parseInt(n.dataset.cur||`0`,10);window._galGo(e,r+t)};function L(){let e=[`sold_guaranteed`,`sold_profit`],t=[`early_exit`],n=(()=>{let e=e=>`${e.item_id||e.id}_${e.status}`,t={};return s.myItems.forEach(n=>{let r=e(n);if(!t[r])t[r]={...n,_purchase_ids:[n.id],_count:1};else{let e=t[r];e.invested=(Number(e.invested)||0)+(Number(n.invested)||0),e.pct=(Number(e.pct)||0)+(Number(n.pct)||0),n.payout_usd!=null&&(e.payout_usd=(Number(e.payout_usd)||0)+(Number(n.payout_usd)||0)),e._purchase_ids.push(n.id),e._count++}}),Object.values(t)})(),r=n.length,i=n.filter(e=>e.status===`active`).length,a=n.filter(e=>t.includes(e.status)).length,o=n.filter(t=>e.includes(t.status)).length,c=(e,t)=>{let n=document.getElementById(e);n&&(n.textContent=`(`+t+`)`)};c(`cntAll`,r),c(`cntActive`,i),c(`cntSelling`,a),c(`cntSold`,o),c(`cntAllM`,r),c(`cntActiveM`,i),c(`cntSellingM`,a),c(`cntSoldM`,o);let l=window._itemsFilter||`all`,u=l===`all`?n:l===`active`?n.filter(e=>e.status===`active`):l===`sold`?n.filter(t=>e.includes(t.status)):l===`selling`?n.filter(e=>t.includes(e.status)):n.filter(e=>e.status===l),f=u.length?u.map((e,t)=>{let n=ce(e),r={active:`ACTIVE`,sold_guaranteed:`SOLD · GUARANTEED`,sold_profit:`SOLD · PROFIT`,early_exit:`EXITED EARLY`},i={active:`s-active`,sold_guaranteed:`s-sold`,sold_profit:`s-sold`,early_exit:`s-exit`},a=n.daysLeft<1?`Selling soon`:`~`+Math.ceil(n.daysLeft)+` days left`,o=e.status!==`active`,s=o?`ACTUAL PAYOUT`:`EXPECTED RETURNS`,c=+e.invested||0,l=n.expectedUsd||0,u=o&&e.payout_usd?+e.payout_usd-c:0,f=o?e.payout_usd?+e.payout_usd:c:c+l,p=o?`Sold — already credited`:`When item is sold`,m=`$`+Math.round(f).toLocaleString(),h=o?u:l,g=h>=0?`+`:`−`,_=h>=0?`var(--green)`:`var(--red)`,v=`$${Math.round(c).toLocaleString()} <span style="color:${_};font-weight:700">${g}$${Math.round(Math.abs(h)).toLocaleString()}</span>`,y=o&&u<0?`red`:``,b=o?`Actual return`:`Expected return`,x=o?c>0?(u/c*100).toFixed(1):`0.0`:n.expectedPct||0,S=o&&u<0?``:`+`,C=o?x:n.guaranteed,w=!o||u>=0?`+`:``,T=o&&u<0?` roi-loss`:``,E=o?`ROI`:`MIN. ROI`,D=!!(e.image_url&&e.image_url.trim()),O=e.ico||(window.LX&&LX.iconHTML?LX.iconHTML(`diamond`,54,`lx-i`):`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" style="width:42px;height:42px;color:rgba(229,198,116,.32)"><path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-7z"/></svg>`),k=D?`<img src="${e.image_url}" alt="${(e.name||``).replace(/"/g,`&quot;`)}" loading="lazy">`:`<div class="mi-fallback">${O}</div>`,A=e._count>1?`<div class="mi-buys">×${e._count} BUYS</div>`:``,ee=!window._miEverRendered&&t<8?`--mi-delay:${t*60}ms`:`--mi-delay:0ms;animation:none`;return`<div class="my-item-card" data-item-row-id="${e.item_id||e.id}" style="${ee}">
      <div class="mi-hero${D?``:` no-image`}">
        ${k}
        <div class="mi-status ${i[e.status]||`s-active`}">${r[e.status]||(e.status||``).toUpperCase()}</div>
        <div class="mi-roi${T}">
          <div class="roi-l">${E}</div>
          <div class="roi-v">${w}${C}%</div>
        </div>
        ${A}
        <div class="mi-title-overlay">
          <div class="mi-name">${e.name||`Item`}</div>
          <div class="mi-share">${(+e.pct).toFixed(2)}% share · invested $${Math.round(c).toLocaleString()}</div>
        </div>
      </div>
      <div class="mi-body">
        <div class="mi-earn">
          <div class="me-h">
            <span class="me-l">${s}</span>
            ${o?``:`<span class="me-days">${a}</span>`}
          </div>
          <div class="me-num ${y}">${m}</div>
          <div class="me-bd">${v}</div>
          <div class="me-lab">${p}</div>
          ${o?``:`<div class="mi-pbar">
            <div class="mi-pbar-track"><div class="mi-pbar-fill" style="width:${Math.max(2,n.progress*100)}%"></div></div>
            <div class="mi-pbar-meta"><span>Day ${Math.floor(n.daysElapsed)}</span><span><b>${Math.round(n.progress*100)}%</b></span><span>Day ${n.daysTotal}</span></div>
          </div>`}
        </div>

        <div class="mi-rows">
          <div class="mi-cell">
            <div class="mc-l">Guaranteed Min</div>
            <div class="mc-v gold">+${n.guaranteed}%</div>
          </div>
          <div class="mi-cell">
            <div class="mc-l">${b}</div>
            <div class="mc-v ${u<0?`red`:`green`}">${S}${x}%</div>
          </div>
        </div>

        <div class="mi-learn"><a onclick="event.stopPropagation();showItemEarningsInfo()">ⓘ Learn more about returns</a></div>

        ${o?``:`<div class="mi-actions">
          <button class="mi-sell" onclick="sellNow(${e.id})">SELL NOW −10%</button>
          <button class="mi-view" onclick="openItemDetail(${e.item_id||e.id})">VIEW DETAILS</button>
        </div>
        <div class="mi-foot">Early exit: receive 90% of invested amount instantly</div>`}
      </div>
    </div>`}).join(``):`<div class="empty-state">No items in this category.</div>`;[`dMyItemsList`,`mMyItemsList`].forEach(e=>{let t=document.getElementById(e);t&&(t.innerHTML=f)}),window._miEverRendered=!0;let p=s.myItems.filter(e=>e.status===`active`),m={};p.forEach(e=>{let t=e.item_id||e.id;m[t]||(m[t]={item_id:t,name:e.name||`Item`,ico:e.ico||(window.LX&&LX.iconHTML?LX.iconHTML(`diamond`,22,`lx-i`):``),image_url:e.image_url||``,count:0,totalInvested:0,totalExpected:0,totalGuaranteed:0,guaranteedPct:0,sample:e});let n=ce(e);m[t].count+=1,m[t].totalInvested+=+e.invested||0,m[t].totalExpected+=n.expectedEarnedMax||0,m[t].totalGuaranteed+=n.guaranteedUsd||0,m[t].guaranteedPct=n.guaranteed});let h=Object.values(m),g=h.length?h.map(e=>{let t=e.image_url&&e.image_url.trim()?`<img src="${e.image_url}" alt="">`:e.ico,n=e.count>1?`${e.count} positions · $${Math.round(e.totalInvested).toLocaleString()}`:`1 position · $${Math.round(e.totalInvested).toLocaleString()}`,r=e.totalInvested+e.totalExpected;return`<div class="row" onclick="goToMyItem(${e.item_id})">
      <div class="ic">${t}</div>
      <div class="info"><div class="n">${e.name}</div><div class="s">${n}</div></div>
      <div class="v"><div class="a">$${Math.round(r).toLocaleString()}</div><div class="d gold">+${e.guaranteedPct}% min guaranteed</div></div>
    </div>`}).join(``):`<div class="empty-state">No items yet.<br><a onclick="navTo('market')" style="color:var(--gold);cursor:pointer">→ Browse marketplace</a></div>`;[`dItemsList`,`mItemsList`].forEach(e=>{let t=document.getElementById(e);t&&(t.innerHTML=g)})}function R(){[`dFavsList`,`mFavsList`].forEach(e=>{let t=document.getElementById(e);if(t){if(!s.favorites.length){t.innerHTML=`<div class="dmp-empty"><svg class="lx"><use href="#i-fav"/></svg><h3 style="font-family:Bebas Neue,sans-serif;font-size:18px;letter-spacing:2px;margin-bottom:6px">NO FAVORITES YET</h3><p style="font-size:12px">Tap <svg style="width:1em;height:1em;vertical-align:-2px;display:inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-4.5-9-10c-1-3 1-7 5-7 2 0 3 1 4 3 1-2 2-3 4-3 4 0 6 4 5 7-2 5.5-9 10-9 10z"/></svg> on any item in the Marketplace to save it here.</p></div>`;return}t.innerHTML=s.favorites.map(t=>{let n=T(t);if(!n)return``;let r=n._archived,i=r?``:`onclick="openItemDetail(${n.id})"`,a=r?` fav-archived`:``,o=r?`<div class="closed-badge">CLOSED</div>`:``,s=e===`mFavsList`,c=S(n),l=c>0?`+`+c+`%`:``;return s?`<div class="vc-m-card${a}" ${i} style="position:relative">
          <div class="pic">${I(n,{noCarousel:!0})}${o}</div>
          <div class="body">
            <div class="cat">${n.cat||``}</div>
            <div class="name">${n.name}</div>
            <div class="price">$${(+n.price||0).toLocaleString()}</div>
            ${l?`<div style="margin-top:8px;padding:7px 0 0;display:flex;justify-content:space-between;align-items:center;gap:6px"><span style="font-size:10px;letter-spacing:1.4px;color:var(--t3);font-family:'Space Mono',monospace;font-weight:600">EXPECTED</span><span style="font-family:'Bebas Neue',sans-serif;font-size:19px;color:#27ae60;font-weight:700;letter-spacing:.3px;line-height:1">${l}</span></div>`:``}
          </div>
        </div>`:`<div class="dmp-card${a}" ${i} style="position:relative">
          <div class="img">${I(n,{noCarousel:!0})}${o}</div>
          <div class="body">
            <div class="cat">${n.cat||``}</div>
            <div class="name">${n.name}</div>
            <div class="pr"><div><div class="l">PRICE</div><div class="v gold">$${(+n.price||0).toLocaleString()}</div></div></div>
            ${l?`<div style="margin-top:10px;padding:8px 0 0;display:flex;justify-content:space-between;align-items:center;gap:6px"><span style="font-size:11px;letter-spacing:1.6px;color:var(--t3);font-family:'Space Mono',monospace;font-weight:600">EXPECTED</span><span style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:#27ae60;font-weight:700;letter-spacing:.4px;line-height:1">${l}</span></div>`:``}
          </div>
        </div>`}).join(``)}})}function me(e,t){let n=e.desc&&(/deposit/i.test(e.desc)||/\+\$/.test(e.desc))&&!/withdraw/i.test(e.desc),r=/withdraw/i.test(e.desc),i=n?`green`:r?`red`:``,a=n?`↓`:r?`↑`:`•`,o=e.status===`processing`?`pending`:e.status===`rejected`?`rejected`:`done`,s=e.status===`processing`?`Processing`:e.status===`rejected`?`Rejected`:`Completed`,c=(e.desc||``).match(/[+\-]?\$[\d,.]+/),l=c?c[0]:``,u=l.startsWith(`+`)?`green`:l.startsWith(`-`)?`red`:`gold`;return`<div class="row" onclick="showReceipt(${t})">
    <div class="ic ${i}">${a}</div>
    <div class="info"><div class="n">${(e.desc||``).replace(/[+\-]?\$[\d,.]+/,``).trim()||e.desc}</div><div class="s">${e.time||``}</div></div>
    <div class="v ${u}">${l}</div>
    <div class="st ${o}">${s}</div>
  </div>`}function z(){let e=s.txs.length,t=`<div class="empty-state">No transactions yet.</div>`,n=s.txs.slice(0,5),r=n.length?n.map((e,t)=>me(e,t)).join(``):t,i=document.getElementById(`dTxList`);i&&(i.innerHTML=r);let a=!!window._mTxExpanded,o=a?s.txs:s.txs.slice(0,3),c=o.length?o.map((e,t)=>me(e,t)).join(``):t,l=document.getElementById(`mTxList`);if(l){let t=c;if(e>3){let n=a?`HIDE`:`SHOW MORE (${e-3})`;t+=`<button class="m-tx-toggle" onclick="toggleMTx()" type="button">${n}</button>`}l.innerHTML=t,l.classList.toggle(`m-tx-expanded`,a)}let u=document.getElementById(`dTxViewAll`);u&&(u.style.display=e>5?``:`none`);let f=document.getElementById(`mTxViewAll`);f&&(f.style.display=e>3?``:`none`);let p=s.txs.length?s.txs.map((e,t)=>me(e,t)).join(``):t;[`dTxAllList`,`mTxAllList`].forEach(e=>{let t=document.getElementById(e);t&&(t.innerHTML=p)})}window.toggleMTx=function(){window._mTxExpanded=!window._mTxExpanded,z()},window._currentCat=`all`,window._mkFilters=window._mkFilters||{cats:new Set,brands:new Set,priceMin:null,priceMax:null};function he(){let e=window._mkFilters;return e.cats.size>0||e.brands.size>0||e.priceMin!=null||e.priceMax!=null}function ge(){let e=he();[`mFilterDot`,`dFilterDot`].forEach(t=>{let n=document.getElementById(t);n&&(n.style.display=e?``:`none`)}),[`mFilterResetLink`,`dFilterResetLink`].forEach(t=>{let n=document.getElementById(t);n&&(n.style.display=e?t.startsWith(`m`)?`flex`:``:`none`)})}function _e(){window._mkFilters={cats:new Set,brands:new Set,priceMin:null,priceMax:null},window._currentCat=`all`,window._currentBrand=`all`,document.querySelectorAll(`#mCats .cat, #dCats .cat`).forEach(e=>{e.classList.toggle(`active`,e.dataset.cat===`all`)}),ge();try{V(`all`)}catch{}typeof Y==`function`&&Y(`success`,`Filters reset`,``)}window.resetMarketFilters=_e,window.openMarketFilterSheet=function(){let e=[{key:`watch`,name:`Watches`},{key:`bag`,name:`Bags`},{key:`art`,name:`Art`},{key:`wine`,name:`Wine`},{key:`jewelry`,name:`Jewelry`},{key:`coin`,name:`Coins`},{key:`snkr`,name:`Sneakers`},{key:`fashion`,name:`Fashion`}],t=new Set;(window.ITEMS||[]).forEach(e=>{let n=(e.brand||``).trim();n&&t.add(n)});let n=Array.from(t).sort(),r=(window.ITEMS||[]).map(e=>Number(e.price_per_slot||0)).filter(e=>e>0),i=r.length?Math.floor(Math.min(...r)):0,a=r.length?Math.ceil(Math.max(...r)):1e4,o=window._mkFilters,s=o.priceMin==null?i:o.priceMin,c=o.priceMax==null?a:o.priceMax;q(`
    <div class="filt-sheet">
      <div class="filt-head">
        <div class="filt-title">FILTERS</div>
      </div>

      <div class="filt-section">
        <div class="filt-label">CATEGORY <span class="filt-sublbl">multi-select</span></div>
        <div class="filt-chips">${e.map(e=>`<button type="button" class="filt-chip ${o.cats.has(e.key)?`on`:``}" data-fcat="${e.key}">${e.name}</button>`).join(``)}</div>
      </div>

      <div class="filt-section">
        <div class="filt-label">BRAND <span class="filt-sublbl">multi-select</span></div>
        <div class="filt-chips filt-chips-scroll">${n.length?n.map(e=>`<button type="button" class="filt-chip ${o.brands.has(e)?`on`:``}" data-fbrand="${e.replace(/"/g,`&quot;`)}">${e}</button>`).join(``):`<div style="font-size:11px;color:var(--t3);padding:8px 0">No brands available yet.</div>`}</div>
      </div>

      <div class="filt-section">
        <div class="filt-label">PRICE PER SLOT</div>
        <div class="filt-price-row">
          <div class="filt-price-cell">
            <span class="filt-price-lbl">Min $</span>
            <input type="number" id="fltPriceMin" value="${s}" min="${i}" max="${a}" step="50">
          </div>
          <div class="filt-price-arr">—</div>
          <div class="filt-price-cell">
            <span class="filt-price-lbl">Max $</span>
            <input type="number" id="fltPriceMax" value="${c}" min="${i}" max="${a}" step="50">
          </div>
        </div>
        <div class="filt-price-hint">Range: $${i.toLocaleString()} – $${a.toLocaleString()}</div>
      </div>

      <div class="filt-actions">
        <button type="button" class="filt-btn filt-btn-ghost" onclick="_filterSheetReset()">RESET</button>
        <button type="button" class="filt-btn filt-btn-primary" onclick="_filterSheetApply()">APPLY</button>
      </div>
    </div>`,{wide:!0}),setTimeout(()=>{document.querySelectorAll(`[data-fcat]`).forEach(e=>{e.addEventListener(`click`,()=>e.classList.toggle(`on`))}),document.querySelectorAll(`[data-fbrand]`).forEach(e=>{e.addEventListener(`click`,()=>e.classList.toggle(`on`))})},50)},window._filterSheetReset=function(){document.querySelectorAll(`[data-fcat], [data-fbrand]`).forEach(e=>e.classList.remove(`on`));let e=document.getElementById(`fltPriceMin`);e&&(e.value=e.min);let t=document.getElementById(`fltPriceMax`);t&&(t.value=t.max)},window._filterSheetApply=function(){let e=new Set;document.querySelectorAll(`[data-fcat].on`).forEach(t=>e.add(t.dataset.fcat));let t=new Set;document.querySelectorAll(`[data-fbrand].on`).forEach(e=>t.add(e.dataset.fbrand));let n=document.getElementById(`fltPriceMin`),r=document.getElementById(`fltPriceMax`),i=n?parseFloat(n.value):NaN,a=r?parseFloat(r.value):NaN;if(isNaN(i)&&(i=null),isNaN(a)&&(a=null),i!=null&&a!=null&&i>a){typeof Y==`function`&&Y(`warn`,`Invalid range`,`Min should be ≤ Max`);return}n&&i===parseFloat(n.min)&&(i=null),r&&a===parseFloat(r.max)&&(a=null),window._mkFilters={cats:e,brands:t,priceMin:i,priceMax:a},e.size===0?window._currentCat=`all`:e.size===1?window._currentCat=Array.from(e)[0]:window._currentCat=`multi`,document.querySelectorAll(`#mCats .cat, #dCats .cat`).forEach(t=>{e.size===0?t.classList.toggle(`active`,t.dataset.cat===`all`):t.classList.toggle(`active`,e.has(t.dataset.cat))}),J(),V(window._currentCat)};let ve=`luxor_ref_guide_seen`;window.openReferralFromCTA=function(){localStorage.getItem(ve)===`1`?P(`referral`):showReferralGuide({firstTime:!0})},window.showReferralGuide=function(e){q(`
    <div class="ref-guide">
      <div class="ref-guide-hero">
        <div class="ref-guide-eyebrow">REFERRAL PROGRAM</div>
        <div class="ref-guide-title">EARN<br>WITHOUT INVESTING</div>
        <div class="ref-guide-slogan">
          <div class="rgs-line"><span class="rgs-icon">💰</span> <span class="rgs-text"><b>We earn</b> when more people join Luxor</span></div>
          <div class="rgs-line"><span class="rgs-icon">🎁</span> <span class="rgs-text"><b>Your friend earns</b> a 5% welcome bonus</span></div>
          <div class="rgs-line"><span class="rgs-icon">📈</span> <span class="rgs-text"><b>You earn</b> 10% from every deposit they make</span></div>
        </div>
        <div class="ref-guide-sub">Three sides win. Refer once — earn for life.</div>
      </div>

      <div class="ref-guide-section">
        <div class="ref-guide-h">SIMPLE EXAMPLE</div>
        <div class="ref-story">
          <div class="ref-story-row">
            <div class="ref-story-avatar">😎</div>
            <div class="ref-story-text"><b>You</b> send your invite link to your friend <b>Mike</b>.</div>
          </div>
          <div class="ref-story-arrow">↓</div>
          <div class="ref-story-row">
            <div class="ref-story-avatar">🙋</div>
            <div class="ref-story-text">Mike signs up and deposits <b>$1,000</b>.</div>
          </div>
          <div class="ref-story-arrow">↓</div>
          <div class="ref-story-row ref-story-row--win">
            <div class="ref-story-avatar">💵</div>
            <div class="ref-story-text"><b>You instantly get $100</b><br><span class="ref-story-note">(10% of his deposit, credited to your referral balance)</span></div>
          </div>
          <div class="ref-story-arrow">↓</div>
          <div class="ref-story-row ref-story-row--win">
            <div class="ref-story-avatar">🎁</div>
            <div class="ref-story-text"><b>Mike gets $50 welcome bonus</b><br><span class="ref-story-note">(5% extra on his deposit — a thank-you for joining through you)</span></div>
          </div>
          <div class="ref-story-arrow">↓</div>
          <div class="ref-story-row ref-story-row--big">
            <div class="ref-story-avatar">🚀</div>
            <div class="ref-story-text"><b>Bonus chain reaction:</b> Mike invites his friend <b>Anna</b> who deposits <b>$2,000</b>.<br>· Mike earns <b>$200</b><br>· <b>You earn another $60</b> just because Mike is your referral (Level 2 bonus, available at Silver+)</div>
          </div>
        </div>
      </div>

      <div class="ref-guide-section">
        <div class="ref-guide-h">THE RULES (3 THINGS TO KNOW)</div>
        <div class="ref-rules">
          <div class="ref-rule">
            <div class="ref-rule-ic">①</div>
            <div class="ref-rule-text"><b>Friend must deposit at least $100</b> for you to earn the bonus.<br><span class="ref-rule-note">Below that — they're just signed up, no commission yet.</span></div>
          </div>
          <div class="ref-rule">
            <div class="ref-rule-ic">②</div>
            <div class="ref-rule-text"><b>You earn 10% from every deposit they make</b> — not just the first. Every top-up they do later — you get 10% again.<br><span class="ref-rule-note">Forever. No expiry.</span></div>
          </div>
          <div class="ref-rule">
            <div class="ref-rule-ic">③</div>
            <div class="ref-rule-text"><b>More referrals = higher tier = bigger commissions + cash bonuses</b>.<br><span class="ref-rule-note">Tiers are lifetime — once you reach Gold, you never fall back to Silver.</span></div>
          </div>
        </div>
      </div>

      <div class="ref-guide-section">
        <div class="ref-guide-h">YOUR EARNING POTENTIAL</div>
        <div class="ref-tier-grid">
          <div class="ref-tier-card"><div class="rgt-name" style="color:#9b9b9b">STARTER</div><div class="rgt-need">1–4 friends</div><div class="rgt-amt"><b>10%</b> from L1</div><div class="rgt-bonus">—</div></div>
          <div class="ref-tier-card"><div class="rgt-name" style="color:#7BC384">SILVER</div><div class="rgt-need">5+ friends</div><div class="rgt-amt"><b>10% + 5%</b> L1+L2</div><div class="rgt-bonus">—</div></div>
          <div class="ref-tier-card ref-tier-card--gold"><div class="rgt-name" style="color:#E5C674">GOLD</div><div class="rgt-need">15+ friends</div><div class="rgt-amt"><b>10/7/3%</b> 3 levels</div><div class="rgt-bonus">+ $250 unlock bonus</div></div>
          <div class="ref-tier-card ref-tier-card--diamond"><div class="rgt-name" style="color:#7AAEEC">DIAMOND</div><div class="rgt-need">30+ friends</div><div class="rgt-amt"><b>10/7/5/3%</b> 4 levels</div><div class="rgt-bonus">+ $1,500 unlock bonus</div></div>
        </div>
        <div class="ref-tier-hint">"L1" = your direct invites. "L2" = friends of your friends. Diamond earns 4 levels deep.</div>
      </div>

      <div class="ref-guide-section">
        <div class="ref-guide-h">REAL NUMBERS</div>
        <div class="ref-numbers">
          <div class="ref-num-row"><span class="ref-num-lbl">Mike deposits $1,000</span><span class="ref-num-val">→ you get <b>$100</b></span></div>
          <div class="ref-num-row"><span class="ref-num-lbl">Mike deposits another $5,000 next month</span><span class="ref-num-val">→ you get <b>$500</b></span></div>
          <div class="ref-num-row"><span class="ref-num-lbl">5 friends each deposit $2,000</span><span class="ref-num-val">→ you earn <b>$1,000</b> + Silver tier</span></div>
          <div class="ref-num-row ref-num-row--big"><span class="ref-num-lbl">15 friends, average $3,000 each</span><span class="ref-num-val">→ you earn <b>$4,500</b> + Gold tier + <b>$250</b> bonus</span></div>
        </div>
      </div>

      <div class="ref-guide-section">
        <div class="ref-guide-h">FAQ</div>
        <div class="ref-guide-faq">
          <details><summary>When does the money arrive in my wallet?</summary><p>Right when your friend deposits — money lands in your <b>referral balance</b> instantly. After 7 days it auto-unlocks and you can withdraw it or move to your main wallet.</p></details>
          <details><summary>Do I lose my tier if friends stop being active?</summary><p>No. Once you reach a tier — it stays with you forever.</p></details>
          <details><summary>Can I invite my own second account?</summary><p>No — we detect self-referrals via IP and behavior. Your account will be flagged and bonuses voided.</p></details>
          <details><summary>Is there a maximum I can earn?</summary><p>None. Some users earn more from referrals than from investing.</p></details>
        </div>
      </div>

      <div class="ref-guide-actions">
        <button class="filt-btn filt-btn-primary ref-guide-cta" onclick="_completeRefGuide()">${e&&e.firstTime?`GO TO MY DASHBOARD →`:`GOT IT`}</button>
      </div>
    </div>`,{wide:!0})},window._completeRefGuide=function(){try{localStorage.setItem(ve,`1`)}catch{}J(),setTimeout(()=>P(`referral`),50)},window.showRefHowItWorks=function(){showReferralGuide({firstTime:!1})},window.showVipModal=function(){let e=Number(s.wallet)||0,t=Number(s.lockedBalance)||0,n=Number(s.referralBalance)||0,r=(Array.isArray(s.positions)?s.positions:[]).filter(e=>!e.status||e.status===`active`),i=(Array.isArray(s.myItems)?s.myItems:[]).filter(e=>!e.status||e.status===`active`),a=r.reduce((e,t)=>e+(Number(t.amount||t.amount_usd)||0),0),o=r.reduce((e,t)=>{try{return e+(typeof N==`function`?N(t):0)}catch{return e}},0),c=i.reduce((e,t)=>e+(Number(t.invested||t.amount_paid_usd)||0),0),l=e+t+n+a+o+c,u=typeof s._serverTotal==`number`&&!isNaN(s._serverTotal)?s._serverTotal:l,f,p,m,h,g;u>=25e3?(f=`black`,p=`BLACK`,m=null,h=null,g=100):u>=5e3?(f=`gold`,p=`GOLD`,m=`BLACK`,h=25e3,g=Math.min(100,(u-5e3)/2e4*100)):(f=`bronze`,p=`BRONZE`,m=`GOLD`,h=5e3,g=Math.min(100,u/5e3*100));let _=h?`Add <b>$${(h-u).toLocaleString(void 0,{maximumFractionDigits:0})}</b> to reach <b>${m}</b>`:`You’ve reached the highest VIP tier. Enjoy the perks.`;q(`
    <div class="vip-modal">
      <div class="vip-modal-hero">
        <div class="vip-modal-eyebrow">LUXOR VIP CLUB</div>
        <div class="vip-modal-title">${p} TIER</div>
        <div class="vip-modal-current">Your portfolio: <b>$${Math.round(u).toLocaleString()}</b></div>
        <div class="vip-modal-progress">
          <div class="vip-modal-progress-h">
            <span>${p}</span>
            <span><b>${g.toFixed(0)}%</b></span>
            <span>${m||p}</span>
          </div>
          <div class="vip-modal-progress-bar">
            <div class="vip-modal-progress-fill" style="width:${g}%"></div>
          </div>
          <div class="vip-modal-progress-msg">${_}</div>
        </div>
      </div>

      ${[{key:`bronze`,name:`BRONZE`,range:`$0 – $4,999`,perks:[`Standard support`,`Access to all basic pools (Silver / Gold / Platinum)`,`Referral rewards`,`Weekly market insights`]},{key:`gold`,name:`GOLD`,range:`$5,000 – $24,999`,perks:[`Personal Manager access`,`Early access to new investments`,`Faster withdrawals (priority queue)`,`Exclusive pools with higher rates`,`Priority support`,`Higher referral bonuses`]},{key:`black`,name:`BLACK`,range:`$25,000+`,perks:[`Dedicated personal manager`,`Private investment opportunities`,`VIP-only marketplace deals`,`Highest referral rewards`,`Concierge service`,`Priority exits & liquidity`,`Exclusive analytics & reports`,`Physical luxury gift: <b>Chrome Hearts</b> or <b>Louis Vuitton</b> ($2,000 value)`]}].map(e=>`
        <div class="vip-tier-card ${e.key===f?`is-current`:``}">
          <div class="vip-tier-card-h">
            <div>
              <div class="vip-tier-card-name ${e.key}">${e.name}</div>
              <div class="vip-tier-card-req">From <b>${e.range}</b> portfolio</div>
            </div>
            ${e.key===f?`<div class="vip-tier-card-current-tag">CURRENT</div>`:``}
          </div>
          <ul class="vip-tier-perks">
            ${e.perks.map(e=>`<li>${e}</li>`).join(``)}
          </ul>
        </div>
      `).join(``)}

      <div style="margin-top:14px;padding:12px 14px;background:rgba(229,198,116,.06);border-left:3px solid var(--gold);border-radius:6px;font-size:11.5px;color:var(--t3);line-height:1.6">
        <b style="color:var(--gold)">\u24D8</b> Tier is calculated automatically from your total portfolio (available balance + invested in pools and items). Updates in real time as your portfolio grows.
      </div>

      <div style="margin-top:18px">
        <button onclick="closeModal()" style="display:block;width:100%;padding:14px;background:linear-gradient(135deg,#C9A84C,#E5C674);color:#0a0a0a;border:none;border-radius:10px;font-family:'Bebas Neue',sans-serif;font-size:14px;letter-spacing:2px;font-weight:700;cursor:pointer;transition:all .2s">GOT IT</button>
      </div>
    </div>`,{wide:!0})},window.showPoolsHowItWorks=function(){q(`
    <div class="pools-howit">
      <div class="pools-howit-hero">
        <div class="pools-howit-eyebrow">INVESTMENT POOLS</div>
        <div class="pools-howit-title">HOW POOLS WORK</div>
        <div class="pools-howit-sub">Invest alongside other Luxor members in a curated basket of luxury items. Earn fixed returns, share the upside, exit when you want.</div>
      </div>

      <div class="pools-howit-grid">
        <div class="pools-howit-card">
          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
          <div class="h">FIXED PROFIT SHARE</div>
          <div class="b">Each pool tier pays a <b>guaranteed fixed return</b> — 0.5% daily (Silver), 3% weekly (Gold), or 15% monthly (Platinum). Your earnings accrue automatically.</div>
        </div>

        <div class="pools-howit-card">
          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
          <div class="h">PROPORTIONAL OWNERSHIP</div>
          <div class="b">Your share equals <b>your stake ÷ total pool size</b>. Bigger investment = bigger ownership and bigger share of the profits when items sell.</div>
        </div>

        <div class="pools-howit-card">
          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></svg></div>
          <div class="h">REAL YIELD</div>
          <div class="b">Returns come from <b>actual resale of luxury items</b> — watches, bags, art. Our team selects what flips fastest. No tokens, no smoke.</div>
        </div>

        <div class="pools-howit-card">
          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.2-8.5"/><polyline points="21 4 21 12 13 12"/></svg></div>
          <div class="h">FLEXIBLE EXITS</div>
          <div class="b">Pools auto-close at the end of each cycle and your principal + earnings return to your wallet. You can also <b>request early exit</b> for a small fee.</div>
        </div>

        <div class="pools-howit-card">
          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></div>
          <div class="h">DIVERSIFICATION</div>
          <div class="b">One pool = many items. If a single piece sells slow, others compensate. <b>Risk is spread</b> across the entire basket — not bet on one item.</div>
        </div>

        <div class="pools-howit-card">
          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
          <div class="h">SAFER THAN SINGLES</div>
          <div class="b">Buying one fraction of one item depends on that item selling. Pools <b>spread your money across all items</b> in the tier — lower volatility, smoother returns.</div>
        </div>
      </div>

      <div style="padding:14px;background:rgba(229,198,116,.06);border-left:3px solid var(--gold);border-radius:6px;font-size:12px;color:var(--t3);line-height:1.6;margin-bottom:18px">
        <b style="color:var(--gold)">ⓘ</b> The fixed rate is what we commit to pay you. If our team beats the market by a wide margin, the upside stays with the platform — but your floor is locked.
      </div>

      <button class="pools-howit-cta" onclick="closeModal()">GOT IT — LET'S INVEST</button>
    </div>`,{wide:!0})};function ye(){if(window._vipTier&&typeof window._vipTier.total==`number`)return window._vipTier.total;let e=Number(s.wallet)||0,t=Number(s.lockedBalance)||0,n=Number(s.referralBalance)||0,r=Array.isArray(s.positions)?s.positions:[],i=Array.isArray(s.myItems)?s.myItems:[],a=r.filter(e=>!e.status||e.status===`active`).reduce((e,t)=>e+(Number(t.amount||t.amount_usd)||0),0),o=i.filter(e=>!e.status||e.status===`active`).reduce((e,t)=>e+(Number(t.invested||t.amount_paid_usd)||0),0),c=e+t+n+a+o;return typeof s._serverTotal==`number`&&!isNaN(s._serverTotal)?s._serverTotal:c}function B(e){let n=t&&t.login||sessionStorage.getItem(`luxor_login`)||`anon`;return`luxor_excl_`+e+`_`+n}function be(){try{let e=localStorage.getItem(B(`request`));if(!e)return null;let t=JSON.parse(e),n=Number(t&&t.ends_at_ms)||0;return n>Date.now()?n:(localStorage.removeItem(B(`request`)),null)}catch{return null}}function xe(e){try{localStorage.setItem(B(`request`),JSON.stringify({ends_at_ms:e}))}catch{}}function Se(){try{return localStorage.getItem(B(`gift`))}catch{return null}}function Ce(e){try{localStorage.setItem(B(`gift`),e)}catch{}}window.renderExclusivePool=function(e){let t=e===`m`?`mExclusiveContent`:`dExclusiveContent`,n=document.getElementById(t);if(!n)return;let r=ye(),i=r>=25e3;if(r<5e3){n.innerHTML=`
      <div class="excl-locked-hero">
        <div class="lock-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg></div>
        <div class="eyebrow">VIP MEMBERS ONLY</div>
        <div class="title">EXCLUSIVE POOLS</div>
        <div class="desc">Available to investors with <b>$5,000+</b> total portfolio. Higher rates, hand-picked deals, and secret bonuses you won't find in standard tiers.</div>

        <div class="excl-perks">
          <div class="perk">
            <div class="pi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></svg></div>
            <div class="pl"><b>Higher rates</b><br>up to 25%/month</div>
          </div>
          <div class="perk">
            <div class="pi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
            <div class="pl"><b>Secret bonuses</b><br>members-only drops</div>
          </div>
          <div class="perk">
            <div class="pi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-7z"/></svg></div>
            <div class="pl"><b>Priority deals</b><br>before public launch</div>
          </div>
        </div>

        <div style="font-size:12px;color:var(--t3);margin-bottom:14px">You\u2019re <b style="color:#E5C674">$${(5e3-r).toLocaleString(void 0,{maximumFractionDigits:0})}</b> away from unlocking</div>

        <div class="excl-cta-row">
          <button class="excl-cta-primary" onclick="openDepositMethod()">TOP UP BALANCE</button>
          <button class="excl-cta-secondary" onclick="showVipModal()">VIEW VIP TIERS</button>
        </div>
      </div>
    `;return}let a=be();if(a){let t=()=>{let t=a-Date.now();if(t<=0){try{localStorage.removeItem(B(`request`))}catch{}renderExclusivePool(e);return}let r=Math.floor(t/36e5),i=Math.floor(t%36e5/6e4),o=Math.floor(t%6e4/1e3),s=n.querySelector(`.excl-countdown-clock`);s&&(s.innerHTML=`
          <div class="ck-cell"><div class="ck-v">${String(r).padStart(2,`0`)}</div><div class="ck-l">HOURS</div></div>
          <div class="ck-cell"><div class="ck-v">${String(i).padStart(2,`0`)}</div><div class="ck-l">MINUTES</div></div>
          <div class="ck-cell"><div class="ck-v">${String(o).padStart(2,`0`)}</div><div class="ck-l">SECONDS</div></div>
        `)};n.innerHTML=`
      <div class="excl-unlocked-hero">
        <div class="excl-countdown-box">
          <div class="check-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
          <div class="ct-h">REQUEST RECEIVED</div>
          <div class="ct-d">Your personal pool is being prepared.<br>It will be available in your account within <b style="color:#E5C674">24 hours</b>.</div>
          <div class="excl-countdown-clock"></div>
          <div style="font-size:10.5px;color:var(--t3);letter-spacing:.5px;margin-top:6px">You\u2019ll get a notification when it\u2019s ready</div>
        </div>
      </div>
      ${i?we():``}
    `,t(),window._exclCountdownTimer&&clearInterval(window._exclCountdownTimer),window._exclCountdownTimer=setInterval(t,1e3),i&&Te(n);return}let o=i?`BLACK`:`GOLD`;n.innerHTML=`
    <div class="excl-unlocked-hero">
      <div class="crown-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l4 5 5-7 5 7 4-5v11H3z"/></svg></div>
      <div style="font-family:'Space Mono',monospace;font-size:10px;letter-spacing:3px;color:var(--t3);margin-bottom:6px">VIP <span style="color:${i?`#fff`:`#E5C674`}">${o}</span> ACCESS UNLOCKED</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:30px;letter-spacing:2.5px;color:#E5C674;line-height:1.1;margin-bottom:10px">YOUR PERSONAL POOL</div>
      <div style="font-size:13px;color:var(--t2);line-height:1.6;max-width:440px;margin:0 auto 6px">Hand-picked items, <b style="color:#E5C674">${i?`up to 25% / month`:`up to 18% / month`}</b>, with concierge support. Each personal pool is curated by our team based on your preferences.</div>

      <div class="excl-stats-row">
        <div class="st-cell"><div class="st-l">YOUR TIER</div><div class="st-v">${o}</div></div>
        <div class="st-cell"><div class="st-l">PORTFOLIO</div><div class="st-v">$${Math.round(r).toLocaleString()}</div></div>
        <div class="st-cell"><div class="st-l">TARGET RATE</div><div class="st-v">${i?`20-25%`:`12-18%`}</div></div>
      </div>

      <div class="excl-cta-row">
        <button class="excl-cta-primary" onclick="requestExclusivePool('${e}')">REQUEST PERSONAL POOL</button>
        <button class="excl-cta-secondary" onclick="showVipModal()">VIEW VIP BENEFITS</button>
      </div>
    </div>
    ${i?we():``}
  `,i&&Te(n)};function we(){let e=Se();return`
    <div class="excl-gift-block" data-gift-block>
      <div class="eyebrow">BLACK TIER EXCLUSIVE</div>
      <div class="title">CHOOSE YOUR GIFT</div>
      <div class="sub">As a Black-tier member, claim a <b>$2,000 luxury gift</b> from one of our partners. Shipped worldwide, no charge.</div>
      <div class="excl-gift-options">
        <div class="excl-gift-card${e===`chrome_hearts`?` selected`:``}" data-gift="chrome_hearts">
          <div class="gn">CHROME HEARTS</div>
          <div class="gd">Cross-pendant or<br>signature jewelry</div>
        </div>
        <div class="excl-gift-card${e===`lv`?` selected`:``}" data-gift="lv">
          <div class="gn">LOUIS VUITTON</div>
          <div class="gd">Wallet, belt, or<br>small leather goods</div>
        </div>
      </div>
      ${e?`<div style="text-align:center;margin-top:12px;font-size:11.5px;color:#27ae60;font-weight:700;letter-spacing:.5px">✓ Selected. Our concierge will contact you for delivery.</div>`:``}
    </div>
  `}function Te(e){e.querySelectorAll(`.excl-gift-card`).forEach(n=>{n.addEventListener(`click`,()=>{let r=n.dataset.gift;if(!r)return;Ce(r);try{u(`/api/exclusive-pool/select-gift`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({user_login:t.login,gift:r})}).catch(()=>{})}catch{}try{window.Toast&&Toast.show({type:`ok`,title:`Gift selected`,message:r===`lv`?`Louis Vuitton — our concierge will reach out for delivery.`:`Chrome Hearts — our concierge will reach out for delivery.`})}catch{}let i=e.id===`mExclusiveContent`?`m`:`d`;renderExclusivePool(i)})})}window.showBonusUnlockModal=function(){let e=Number(s.lockedBalance)||0,t=s.unlockProgress||{},n=t.trigger_1||{},r=t.trigger_2||{},i=Math.min(Number(n.deposit_current)||0,Number(n.deposit_required)||50),a=Number(n.deposit_required)||50,o=Math.min(100,Math.round(i/a*100)),c=Number(n.invest_hours_held)||0,l=Number(n.invest_hours_required)||24,u=Math.min(100,Math.round(c/l*100)),f=Number(r.qualified_referrals)||0,p=Number(r.required_referrals)||3,m=Math.min(100,Math.round(f/p*100)),h=o>=100&&u>=100,g=m>=100,_=e=>e?`<svg viewBox="0 0 24 24" fill="none" stroke="#27ae60" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;flex-shrink:0"><polyline points="20 6 9 17 4 12"/></svg>`:`<div style="width:14px;height:14px;border:1.5px solid var(--t3);border-radius:50%;flex-shrink:0"></div>`;q(`
    <div style="font-family:'Inter',system-ui,sans-serif">
      <div style="text-align:center;padding:24px 18px 22px;background:linear-gradient(135deg,rgba(229,198,116,.1),rgba(201,168,76,.02));border-radius:14px;margin-bottom:18px;border:1px solid rgba(229,198,116,.25)">
        <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#E5C674,#C9A84C);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;box-shadow:0 8px 22px rgba(229,198,116,.35);color:#0a0a0a">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:30px;height:30px"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
        </div>
        <div style="font-family:'Space Mono',monospace;font-size:10px;letter-spacing:3px;color:var(--t3);margin-bottom:6px">REFERRAL WELCOME BONUS</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:34px;letter-spacing:2.5px;color:#E5C674;line-height:1;margin-bottom:8px">$${Math.round(e).toLocaleString()}</div>
        <div style="font-size:13px;color:var(--t2);line-height:1.55;max-width:400px;margin:0 auto">
          Your bonus is <b style="color:#E5C674">already part of your balance</b>.<br>
          You can <b>invest it</b> right now. To <b>withdraw</b> it, complete <u>any one</u> of the conditions below.
        </div>
      </div>

      <div style="font-family:'Space Mono',monospace;font-size:10px;letter-spacing:2.5px;color:var(--t3);text-align:center;margin-bottom:12px">UNLOCK BY ANY ONE OPTION</div>

      <!-- OPTION 1 -->
      <div style="padding:16px;background:${h?`linear-gradient(135deg,rgba(46,204,113,.08),transparent)`:`var(--bg2)`};border:1px solid ${h?`rgba(46,204,113,.4)`:`var(--bd)`};border-radius:12px;margin-bottom:10px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:30px;height:30px;border-radius:8px;background:rgba(229,198,116,.14);border:1px solid rgba(229,198,116,.3);display:flex;align-items:center;justify-content:center;color:#E5C674;font-family:'Bebas Neue',sans-serif;font-size:14px;font-weight:700">1</div>
            <div style="font-family:'Bebas Neue',sans-serif;font-size:15px;letter-spacing:1.2px;color:var(--t)">DEPOSIT &amp; INVEST</div>
          </div>
          ${h?`<span style="padding:3px 9px;background:rgba(46,204,113,.15);color:#27ae60;border:1px solid rgba(46,204,113,.4);border-radius:10px;font-size:9.5px;letter-spacing:1.2px;font-weight:700">✓ DONE</span>`:``}
        </div>
        <!-- Sub-step A -->
        <div style="display:flex;align-items:center;gap:10px;padding:8px 0;font-size:12.5px">
          ${_(o>=100)}
          <div style="flex:1">Deposit at least <b style="color:var(--t)">$${a}</b></div>
          <div style="font-family:'Space Mono',monospace;font-size:11px;color:${o>=100?`#27ae60`:`var(--t3)`}">$${Math.round(i).toLocaleString()} / $${a}</div>
        </div>
        <div style="height:4px;background:rgba(255,255,255,.05);border-radius:3px;overflow:hidden;margin-bottom:8px"><div style="height:100%;width:${o}%;background:linear-gradient(90deg,#C9A84C,#27ae60);border-radius:3px;transition:width .6s"></div></div>
        <!-- Sub-step B -->
        <div style="display:flex;align-items:center;gap:10px;padding:8px 0;font-size:12.5px">
          ${_(u>=100)}
          <div style="flex:1">Hold an investment for <b style="color:var(--t)">${l}h</b></div>
          <div style="font-family:'Space Mono',monospace;font-size:11px;color:${u>=100?`#27ae60`:`var(--t3)`}">${c.toFixed(1)}h / ${l}h</div>
        </div>
        <div style="height:4px;background:rgba(255,255,255,.05);border-radius:3px;overflow:hidden"><div style="height:100%;width:${u}%;background:linear-gradient(90deg,#C9A84C,#27ae60);border-radius:3px;transition:width .6s"></div></div>
      </div>

      <div style="text-align:center;font-family:'Space Mono',monospace;font-size:10px;letter-spacing:2px;color:var(--t3);margin:6px 0">— OR —</div>

      <!-- OPTION 2 -->
      <div style="padding:16px;background:${g?`linear-gradient(135deg,rgba(46,204,113,.08),transparent)`:`var(--bg2)`};border:1px solid ${g?`rgba(46,204,113,.4)`:`var(--bd)`};border-radius:12px;margin-bottom:18px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:30px;height:30px;border-radius:8px;background:rgba(229,198,116,.14);border:1px solid rgba(229,198,116,.3);display:flex;align-items:center;justify-content:center;color:#E5C674;font-family:'Bebas Neue',sans-serif;font-size:14px;font-weight:700">2</div>
            <div style="font-family:'Bebas Neue',sans-serif;font-size:15px;letter-spacing:1.2px;color:var(--t)">INVITE FRIENDS</div>
          </div>
          ${g?`<span style="padding:3px 9px;background:rgba(46,204,113,.15);color:#27ae60;border:1px solid rgba(46,204,113,.4);border-radius:10px;font-size:9.5px;letter-spacing:1.2px;font-weight:700">✓ DONE</span>`:``}
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding:8px 0;font-size:12.5px">
          ${_(m>=100)}
          <div style="flex:1">Invite <b style="color:var(--t)">${p} active</b> friends (each must deposit $100+)</div>
          <div style="font-family:'Space Mono',monospace;font-size:11px;color:${m>=100?`#27ae60`:`var(--t3)`}">${f} / ${p}</div>
        </div>
        <div style="height:4px;background:rgba(255,255,255,.05);border-radius:3px;overflow:hidden"><div style="height:100%;width:${m}%;background:linear-gradient(90deg,#C9A84C,#27ae60);border-radius:3px;transition:width .6s"></div></div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
        <button onclick="closeModal();navTo('referral')" style="padding:13px;background:transparent;color:var(--t);border:1px solid var(--bd2);border-radius:9px;font-family:'Bebas Neue',sans-serif;font-size:12px;letter-spacing:1.5px;cursor:pointer;font-weight:700;transition:all .2s">INVITE FRIENDS</button>
        <button onclick="closeModal();openDepositMethod()" style="padding:13px;background:linear-gradient(135deg,#C9A84C,#E5C674);color:#0a0a0a;border:none;border-radius:9px;font-family:'Bebas Neue',sans-serif;font-size:12px;letter-spacing:1.5px;cursor:pointer;font-weight:700;transition:all .2s">DEPOSIT NOW</button>
      </div>

      <div style="padding:11px 13px;background:rgba(229,198,116,.05);border-left:3px solid #E5C674;border-radius:5px;font-size:11px;color:var(--t3);line-height:1.55;margin-top:6px">
        <b style="color:#E5C674">\u24D8</b> Anti-abuse: bonus auto-unlocks once verified. Self-referrals, multi-accounts and instant withdrawals are detected automatically — flagged accounts forfeit the bonus.
      </div>
    </div>
  `,{wide:!0})},window.requestExclusivePool=function(e){xe(Date.now()+1440*60*1e3);try{u(`/api/exclusive-pool/request`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({user_login:t.login})}).then(e=>e&&e.json&&e.json()).then(t=>{if(t&&t.ok&&t.ends_at){let n=new Date(t.ends_at).getTime();isNaN(n)||xe(n),renderExclusivePool(e)}}).catch(()=>{})}catch{}q(`
    <div style="text-align:center;padding:8px">
      <div style="width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,#27ae60,#2ecc71);display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(46,204,113,.35)">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:36px;height:36px"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:26px;letter-spacing:2.5px;color:#27ae60;margin-bottom:8px">REQUEST RECEIVED</div>
      <div style="font-size:14px;color:var(--t2);line-height:1.6;max-width:380px;margin:0 auto 18px">
        Tomorrow your <b style="color:#E5C674">exclusive personal pool</b> will be available in your account.<br><br>
        Our team is curating items based on your portfolio. You’ll get a notification within <b>24 hours</b>.
      </div>
      <button onclick="closeModal()" class="excl-cta-primary" style="margin:0 auto;display:block;min-width:200px">GOT IT</button>
    </div>
  `),setTimeout(()=>renderExclusivePool(e),100)};function Ee(e){window._currentCat=e,e===`all`?window._mkFilters.cats=new Set:window._mkFilters.cats=new Set([e]),V(e)}function V(e){e||=`all`,window._currentCat=e;let t=window._mkFilters||{cats:new Set,brands:new Set,priceMin:null,priceMax:null},r=n.slice();if(t.cats&&t.cats.size>0?r=r.filter(e=>t.cats.has(e.cat)):e!==`all`&&(r=r.filter(t=>t.cat===e)),t.brands&&t.brands.size>0)r=r.filter(e=>{let n=(e.brand||``).toLowerCase();for(let e of t.brands)if(e.toLowerCase()===n)return!0;return!1});else{let e=window._currentBrand||`all`;e!==`all`&&(r=r.filter(t=>(t.brand||``).toLowerCase()===e.toLowerCase()))}t.priceMin!=null&&(r=r.filter(e=>Number(e.price_per_slot||0)>=t.priceMin)),t.priceMax!=null&&(r=r.filter(e=>Number(e.price_per_slot||0)<=t.priceMax)),ge();try{_updateBrandChips(e)}catch{}let i=e=>{if(e.pool_closed_at)return`<div class="ctdn closed" style="position:absolute;top:8px;left:8px;background:rgba(0,0,0,.85);color:#e74c3c;border:1px solid #e74c3c;padding:3px 8px;border-radius:4px;font-size:10px;font-weight:700;letter-spacing:1px;z-index:5"><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' style='width:11px;height:11px;vertical-align:-1px'><rect x='4' y='11' width='16' height='10' rx='2'/><path d='M8 11V7a4 4 0 1 1 8 0v4'/></svg> POOL CLOSED</div>`;if(!e.countdown_ends_at)return``;let t=new Date(e.countdown_ends_at).getTime()-Date.now();if(t<=0)return`<div class="ctdn expired" style="position:absolute;top:8px;left:8px;background:rgba(0,0,0,.85);color:#e74c3c;border:1px solid #e74c3c;padding:3px 8px;border-radius:4px;font-size:10px;font-weight:700;letter-spacing:1px;z-index:5"><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' style='width:11px;height:11px;vertical-align:-1px'><circle cx='12' cy='13' r='8'/><path d='M12 9v4l3 2'/><path d='M5 3L2 6M19 3l3 3'/></svg> ENDED</div>`;let n=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5),i=Math.floor(t%36e5/6e4),a;a=n>0?`${n}d ${r}h`:r>0?`${r}h ${i}m`:`${i}m`;let o=t<72e5?`#e67e22`:t<864e5?`#f1c40f`:`#27ae60`;return`<div class="ctdn" style="position:absolute;top:8px;left:8px;background:rgba(0,0,0,.85);color:${o};border:1px solid ${o};padding:3px 8px;border-radius:4px;font-size:10px;font-weight:700;letter-spacing:.5px;z-index:5;font-family:'SF Mono',Menlo,monospace"><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' style='width:11px;height:11px;vertical-align:-1px'><circle cx='12' cy='12' r='9'/><path d='M12 7v5l3 2'/></svg> ${a}</div>`},a=document.getElementById(`dMkGrid`);if(a)if(r.length)a.innerHTML=r.map(e=>{let t=S(e),n=t>0?`+`+t+`%`:``,r=e.slots_total||20,a=e.slots_sold||0,o=w(e.id),s=e.brand&&e.brand.trim()?e.brand:e.name||`Item`,c=e.brand&&e.brand.trim()?e.name:``;return`<div class="dmp-card" data-mk-id="${e.id}" onclick="openItemDetail(${e.id})">
          <div class="img">${I(e,{noCarousel:!0})}
            ${i(e)}
            <div class="fav ${o?`on`:``}" onclick="event.stopPropagation();toggleFav(${e.id},this)">${o?window.LX&&LX.iconHTML?LX.iconHTML(`heartFill`,16):`<3`:window.LX&&LX.iconHTML?LX.iconHTML(`heart`,16):``}</div>
          </div>
          <div class="body">
            <div class="cat">${e.cat||``}</div>
            <div class="name" style="font-weight:800">${s}</div>
            ${c?`<div class="item-subline" style="font-size:11px;color:var(--t3);margin-top:2px;line-height:1.3;word-break:break-word">${c}</div>`:``}
            <div class="pr">
              <div><div class="l">PRICE</div><div class="v gold">$${(+e.price||0).toLocaleString()}</div></div>
              <div style="text-align:right"><div class="l">PER SLOT</div><div class="v t-light">$${Math.round(e.price_per_slot||0).toLocaleString()}</div></div>
            </div>
            <div class="slots"><span data-slots-count>${a}/${r}</span><div class="pb"><div class="f" data-funded-bar style="width:${e.funded||0}%;transition:width .6s ease-out"></div></div></div>
            ${n?`<div class="ret-corner" style="margin-top:10px;padding:8px 0 0;display:flex;justify-content:space-between;align-items:center;gap:6px"><span style="font-size:11px;letter-spacing:1.6px;color:var(--t3);font-family:'Space Mono',monospace;font-weight:600">EXPECTED</span><span style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:#27ae60;font-weight:700;letter-spacing:.4px;line-height:1">${n}</span></div>`:``}
          </div>
        </div>`}).join(``);else{let e=!n||!n.length;a.innerHTML=`<div class="dmp-empty"><svg class="lx"><use href="#i-market"/></svg>
        <h3 style="font-family:Bebas Neue,sans-serif;font-size:18px;letter-spacing:2px;margin-bottom:6px">${e?`NO ITEMS YET`:`NO ITEMS IN CATEGORY`}</h3>
        <p style="font-size:12px">${e?`Check back soon — new items added regularly.`:`Try a different category.`}</p></div>`}let o=document.getElementById(`dMkCount`);o&&(o.textContent=r.length+` ITEM`+(r.length===1?``:`S`));let s=document.getElementById(`mMkGrid`);s&&(r.length?s.innerHTML=r.map(e=>{let t=S(e),n=t>0?`+`+t+`%`:``,r=e.slots_total||20,a=e.slots_sold||0,o=w(e.id),s=e.brand&&e.brand.trim()?e.brand:e.name||`Item`,c=e.brand&&e.brand.trim()?e.name:``;return`<div class="vc-m-card" data-mk-id="${e.id}" onclick="openItemDetail(${e.id})">
          <div class="pic">${I(e,{noCarousel:!0})}
            ${i(e)}
            <div class="fav ${o?`on`:``}" onclick="event.stopPropagation();toggleFav(${e.id},this)">${o?window.LX&&LX.iconHTML?LX.iconHTML(`heartFill`,16):`<3`:window.LX&&LX.iconHTML?LX.iconHTML(`heart`,16):``}</div>
          </div>
          <div class="body">
            <div class="cat">${e.cat||``}</div>
            <div class="name" style="font-weight:800">${s}</div>
            ${c?`<div class="item-subline" style="font-size:10px;color:var(--t3);margin-top:1px;line-height:1.3;word-break:break-word">${c}</div>`:``}
            <div class="price">$${(+e.price||0).toLocaleString()}</div>
            <div class="price-sub">$${Math.round(e.price_per_slot||0).toLocaleString()}/slot</div>
            <div class="slots"><span data-slots-count>${a}/${r}</span><div class="pb"><div class="f" data-funded-bar style="width:${e.funded||0}%;transition:width .6s ease-out"></div></div></div>
            ${n?`<div class="ret-corner" style="margin-top:8px;padding:7px 0 0;display:flex;justify-content:space-between;align-items:center;gap:6px"><span style="font-size:10px;letter-spacing:1.4px;color:var(--t3);font-family:'Space Mono',monospace;font-weight:600">EXPECTED</span><span style="font-family:'Bebas Neue',sans-serif;font-size:19px;color:#27ae60;font-weight:700;letter-spacing:.3px;line-height:1">${n}</span></div>`:``}
          </div>
        </div>`}).join(``):s.innerHTML=`<div class="vc-m-empty"><svg class="lx"><use href="#i-market"/></svg><h3 style="font-family:Bebas Neue,sans-serif;font-size:16px;letter-spacing:2px;margin-bottom:6px">${!n||!n.length?`NO ITEMS`:`NO MATCHES`}</h3><p style="font-size:11px">Check back soon.</p></div>`);let c=document.getElementById(`mMkCount`);c&&(c.textContent=r.length+` ITEM`+(r.length===1?``:`S`))}document.querySelectorAll(`#dCats .cat`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`#dCats .cat`).forEach(t=>t.classList.toggle(`active`,t===e)),document.querySelectorAll(`#mCats .cat`).forEach(t=>t.classList.toggle(`active`,t.dataset.cat===e.dataset.cat)),Ee(e.dataset.cat)})}),document.querySelectorAll(`#mCats .cat`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`#mCats .cat`).forEach(t=>t.classList.toggle(`active`,t===e)),document.querySelectorAll(`#dCats .cat`).forEach(t=>t.classList.toggle(`active`,t.dataset.cat===e.dataset.cat)),Ee(e.dataset.cat)})});function De(e){let t=e===`mobile`?`m`:`d`;return{wrap:document.getElementById(t+`FSlider`),fill:document.getElementById(t+`FFill`),thumb:document.getElementById(t+`FThumb`),manual:document.getElementById(t+`FManual`),amt:document.getElementById(t+`FAmt`),sub:document.getElementById(t+`FSub`),pay:document.getElementById(t+`FPay`),get:document.getElementById(t+`FGet`),profit:document.getElementById(t+`FProfit`),guar:document.getElementById(t+`FGuar`),btn:document.getElementById(t+`BuyBtn`),slots:document.getElementById(t+`FSlots`)}}function H(e){return`$`+Math.round(e).toLocaleString()}function U(e,t){let n=De(e);if(!n.wrap)return;let r=Number(n.wrap.dataset.max)||1,i=Number(n.wrap.dataset.per)||0,a=Number(n.wrap.dataset.rmax)||0,o=Number(n.wrap.dataset.rmin)||0;t=Math.max(1,Math.min(r,Math.round(t||1)));let s=r<=1?100:(t-1)/(r-1)*100;n.fill&&(n.fill.style.width=s+`%`),n.thumb&&(n.thumb.style.left=s+`%`);let c=t*i,l=Math.round(c*(1+a/100)),u=l-c,f=Math.round(c*(1+o/100));n.amt&&(n.amt.textContent=H(l)),n.sub&&(n.sub.textContent=`at ${t} slot${t>1?`s`:``} · ${H(c)} invested`),n.pay&&(n.pay.textContent=H(c)),n.get&&(n.get.textContent=H(l)),n.profit&&(n.profit.textContent=`+`+H(u)+` profit`),n.guar&&(n.guar.textContent=H(f)),n.btn&&(n.btn.textContent=`BUY ${t} SLOT${t>1?`S`:``} — ${H(c)}`),n.slots&&(n.slots.value=String(t)),n.manual&&document.activeElement!==n.manual&&(n.manual.value=String(t))}function Oe(e){let t=De(e);if(!t.wrap||t.wrap.dataset.fInit===`1`)return;t.wrap.dataset.fInit=`1`;let n=Number(t.wrap.dataset.max)||1;function r(r){let i=t.wrap.getBoundingClientRect(),a=r.touches&&r.touches[0]?r.touches[0].clientX:r.clientX;if(a===void 0)return;let o=Math.max(0,Math.min(1,(a-i.left)/i.width));U(e,n<=1?1:1+o*(n-1))}let i=!1,a=e=>{i=!0,t.thumb&&t.thumb.classList.add(`dragging`),r(e),e.preventDefault()},o=e=>{i&&r(e)},s=()=>{i=!1,t.thumb&&t.thumb.classList.remove(`dragging`)};t.wrap.addEventListener(`mousedown`,a),document.addEventListener(`mousemove`,o),document.addEventListener(`mouseup`,s),t.wrap.addEventListener(`touchstart`,a,{passive:!1}),document.addEventListener(`touchmove`,o,{passive:!0}),document.addEventListener(`touchend`,s),U(e,1)}function ke(e,t){let n=parseInt(e.value,10);isNaN(n)||U(t,n)}window.fSliderInit=Oe,window.fSliderManual=ke;function Ae(e,t,n){let r=t===`mobile`?`m`:`d`;if(document.getElementById(r+`FSlider`)){U(t,e);return}let i=n.slots_available===void 0?n.slots_total||20:n.slots_available,a=n.price_per_slot||n.price/(n.slots_total||20),o=Math.round(e*a),s=Math.round(o*(1+S(n)/100)),c=Math.round(o*(1+C(n)/100)),l=e/i*100,u=e=>document.getElementById(r+e);u(`V5Fill`)&&(u(`V5Fill`).style.width=l+`%`),u(`V5FillLabel`)&&(u(`V5FillLabel`).textContent=e+` SLOT`+(e>1?`S`:``)),u(`V5Manual`)&&(u(`V5Manual`).value=e),u(`V5Invest`)&&(u(`V5Invest`).innerHTML=`$`+o.toLocaleString()+`<small>USD</small>`),u(`V5Pay`)&&(u(`V5Pay`).textContent=`$`+o.toLocaleString()),u(`V5Get`)&&(u(`V5Get`).textContent=`$`+s.toLocaleString()),u(`V5GuarBack`)&&(u(`V5GuarBack`).textContent=`$`+c.toLocaleString()),u(`V5Slots`)&&(u(`V5Slots`).value=e);let f=t===`mobile`?document.getElementById(`mBuyBtn`):document.getElementById(`dBuyBtn`);f&&(f.textContent=`BUY `+e+` SLOT`+(e>1?`S`:``)+` — $`+o.toLocaleString())}function je(){try{typeof $==`function`&&$()}catch{}}[`dGraphTabs`,`mGraphTabs`].forEach(e=>{let t=document.getElementById(e);t&&t.querySelectorAll(`.p`).forEach(e=>{e.addEventListener(`click`,()=>{t.querySelectorAll(`.p`).forEach(t=>t.classList.toggle(`active`,t===e)),e.dataset.period,je()})})});function Me(){[`diversifyTip`,`mDiversifyTip`].forEach(e=>{let t=document.getElementById(e);if(!t)return;if(s.myItems.length===0){t.innerHTML=`Start investing to get personalized diversification tips based on your portfolio.`;return}let r={};s.myItems.forEach(e=>{let t=n.find(t=>t.id===e.id);t&&(r[t.cat]=(r[t.cat]||0)+e.invested)});let i=Object.values(r).reduce((e,t)=>e+t,0);if(i<=0){t.innerHTML=`Make a purchase to see diversification analysis.`;return}let a=Object.entries(r).sort((e,t)=>t[1]-e[1])[0],o=(a[1]/i*100).toFixed(0),c={watch:`Watches`,bag:`Bags`,fashion:`Fashion`,snkr:`Sneakers`,jewelry:`Jewelry`,wine:`Wine`,coin:`Coins`,art:`Art`};t.innerHTML=o>60?`Your portfolio is <strong>${o}% in ${c[a[0]]||a[0]}</strong>. Consider diversifying with other categories to reduce risk.`:`Good diversification! Your largest category is ${c[a[0]]||a[0]} at ${o}%.`})}async function Ne(){if(t.login||sessionStorage.getItem(`luxor_login`))try{let e=await u(`/api/referrals/my-dashboard`);if(!e.ok){console.warn(`my-dashboard failed:`,e.status);return}let n=await e.json();if(!n||!n.ok)return;let r=(e,t)=>{let n=document.getElementById(e);n&&(n.textContent=t)},i=(e,t)=>{let n=document.getElementById(e);n&&(n.innerHTML=t)},a=n.user||{},o=n.balance||{},s=n.network||{},c=n.milestones||[],l=n.recent_earnings||[],f=n.flags||{};window.__lk3Data={recent:l},a.ref_code&&(t.ref_code=a.ref_code);let p=a.ref_link?location.protocol+`//`+location.host+a.ref_link:a.ref_code?location.protocol+`//`+location.host+`/?ref=`+a.ref_code:``;p&&[`lk3InviteLink`,`mLk3InviteLink`].forEach(e=>r(e,p));let m=(a.tier||`starter`).toUpperCase();r(`lk3TierName`,m),r(`mLk3TierName`,m),r(`lk3ActiveL1`,a.active_referrals_l1||0),r(`mLk3ActiveL1`,a.active_referrals_l1||0),r(`lk3NetTotal`,s.total||0),r(`mLk3NetTotal`,s.total||0),r(`lk3NetTotal2`,s.total||0),r(`mLk3NetTotal2`,s.total||0);let h=a.tier_progress||{};if(h.next_tier){r(`lk3NextTier`,h.next_tier.toUpperCase()),r(`mLk3NextTier`,h.next_tier.toUpperCase()),r(`lk3ProgressCount`,`${h.current} / ${h.needed}`),r(`mLk3ProgressCount`,`${h.current} / ${h.needed}`);let e=Math.min(100,h.pct||0),t=document.getElementById(`lk3ProgressFill`);t&&(t.style.width=e+`%`);let n=document.getElementById(`mLk3ProgressFill`);n&&(n.style.width=e+`%`);let a=h.remaining||0,o=a>0?`Bring <b>${a}</b> more active referral${a===1?``:`s`} to unlock next tier.`:`You qualified — tier promotion at next recalculation.`;i(`lk3ProgressMsg`,o),i(`mLk3ProgressMsg`,o)}else{let e=document.getElementById(`lk3TierProgress`);e&&(e.innerHTML=`<div style="text-align:center;font-family:Bebas Neue,sans-serif;font-size:14px;letter-spacing:2px;color:#E5C674">★ MAX TIER ★</div>`);let t=document.getElementById(`mLk3TierProgress`);t&&(t.innerHTML=`<div style="text-align:center;font-family:Bebas Neue,sans-serif;font-size:14px;letter-spacing:2px;color:#E5C674">★ MAX TIER ★</div>`)}r(`lk3BalAvailable`,`$`+Number(o.available||0).toLocaleString(`en-US`,{minimumFractionDigits:2,maximumFractionDigits:2})),r(`mLk3BalAvailable`,`$`+Number(o.available||0).toLocaleString(`en-US`,{minimumFractionDigits:2,maximumFractionDigits:2})),r(`lk3BalHold`,`$`+Number(o.in_hold||0).toLocaleString(`en-US`,{minimumFractionDigits:0,maximumFractionDigits:0})),r(`mLk3BalHold`,`$`+Number(o.in_hold||0).toLocaleString(`en-US`,{minimumFractionDigits:0,maximumFractionDigits:0})),r(`lk3BalLifetime`,`$`+Number(o.lifetime_earned||0).toLocaleString(`en-US`,{minimumFractionDigits:0,maximumFractionDigits:0})),r(`mLk3BalLifetime`,`$`+Number(o.lifetime_earned||0).toLocaleString(`en-US`,{minimumFractionDigits:0,maximumFractionDigits:0})),r(`lk3Bal30d`,`$`+Number(o.last_30d||0).toLocaleString(`en-US`,{minimumFractionDigits:0,maximumFractionDigits:0})),r(`mLk3Bal30d`,`$`+Number(o.last_30d||0).toLocaleString(`en-US`,{minimumFractionDigits:0,maximumFractionDigits:0}));let g=(o.available||0)>0;[`lk3BtnTransfer`,`mLk3BtnTransfer`].forEach(e=>{let t=document.getElementById(e);t&&(t.disabled=!g)});let _={l1:`Direct · 10% deposit`,l2:`Children · varies`,l3:`Grandchildren · varies`,l4:`Great-grand · varies`},v={l1:`L1`,l2:`L2`,l3:`L3`,l4:`L4`},y=n.rates&&n.rates.deposit&&n.rates.deposit[a.tier]||{},b=``;if([`l1`,`l2`,`l3`,`l4`].forEach((e,t)=>{let n=s[e]||0,r=t+1,i=y[r]||0,a=i>0,o=[`lk3-net-tag`,`lk3-net-tag--${e}`].join(` `),c=[`lk3-net-num`,a&&r===1?`lk3-net-num--gold`:a?``:`lk3-net-num--muted`].filter(Boolean).join(` `),l=a?`${_[e].split(` · `)[0]} · ${(i*100).toFixed(0)}% deposit`:`Locked at ${m}`;b+=`
        <div class="lk3-net-row">
          <span class="${o}">${v[e]}</span>
          <span class="lk3-net-name">${l}</span>
          <span class="${c}">${n}</span>
        </div>`}),i(`lk3NetRows`,b),i(`mLk3NetRows`,b),c.length){let e=c.map(e=>{let t=!!e.paid_at,n=`lk3-ms-card`+(t?` paid`:``),r=t?e.withdrawn_to_main_at?`WITHDRAWN`:`AVAILABLE`:`IN HOLD`;return`
          <div class="${n}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="color:${t?`#7BC384`:`#E5C674`}"><path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-7z"/></svg>
            <span class="lk3-ms-card-name">${(e.tier||``).toUpperCase()}</span>
            <span class="lk3-ms-card-amt">+$${Number(e.amount_usd||0).toLocaleString(`en-US`,{minimumFractionDigits:0,maximumFractionDigits:0})}</span>
            <span class="lk3-ms-card-st">${r}</span>
          </div>`}).join(``);[`lk3Milestones`,`mLk3Milestones`].forEach(t=>{let n=document.getElementById(t);n&&(n.innerHTML=e,n.style.display=`flex`)})}else [`lk3Milestones`,`mLk3Milestones`].forEach(e=>{let t=document.getElementById(e);t&&(t.style.display=`none`)});if(Fe(`all`),document.getElementById(`dRefCtaSub`)){let e=`$`+Number(o.available||0).toLocaleString(`en-US`,{minimumFractionDigits:0,maximumFractionDigits:0}),t=`$`+Number(o.in_hold||0).toLocaleString(`en-US`,{minimumFractionDigits:0,maximumFractionDigits:0});r(`dRefCtaAvail`,e),r(`dRefCtaHold`,t),r(`dRefCtaTier`,m)}let x=document.getElementById(`dRefCtaRow`);x&&(x.style.display=`grid`);try{Pe(l,o)}catch(e){console.warn(`renderRefChart:`,e)}let S=document.getElementById(`dRefNotification`);S&&(S.style.display=(f.referral_program_seen,`none`));try{Pe(d)}catch(e){console.warn(`ref chart failed`,e)}}catch(e){console.warn(`loadReferrals failed:`,e)}}function Pe(e){let t=e&&Array.isArray(e.recent)?e.recent:[],n=Number(e&&e.user&&e.user.lifetime_earned)||0,r=new Date;r.setHours(0,0,0,0);let i=Array(30).fill(0),a=0,o=0;t.forEach(e=>{let t=e.created_at||e.frozen_at||e.unlocked_at;if(!t)return;let n=new Date(t);if(isNaN(n.getTime()))return;n.setHours(0,0,0,0);let s=Math.floor((r-n)/(24*3600*1e3));if(s>=0&&s<30){let t=Number(e.amount_usd||e.amount||0);i[29-s]+=t,a+=t,o++}});let s=document.getElementById(`refChartTotal`);s&&(s.textContent=`$`+n.toLocaleString(void 0,{maximumFractionDigits:2}));let c=document.getElementById(`refChartPeriodVal`);c&&(c.textContent=`$`+a.toLocaleString(void 0,{maximumFractionDigits:2}));let l=document.getElementById(`refChartCount`);l&&(l.textContent=o);let u=document.getElementById(`refEarningsCanvas`),f=document.getElementById(`refChartEmpty`);if(!u)return;if(i.every(e=>e===0)){f&&(f.style.display=``),u.style.display=`none`;return}f&&(f.style.display=`none`),u.style.display=``;let p=[],m=0;for(let e of i)m+=e,p.push(m);let h=u.getContext(`2d`),g=u.width,_=u.height;h.clearRect(0,0,g,_);let v=Math.max(...p);if(v<=0)return;let y=g-16,b=_-12-14,x=y/29,S=e=>12+(1-e/v)*b,C=p.map((e,t)=>({x:8+t*x,y:S(e)})),w=h.createLinearGradient(0,0,0,_);w.addColorStop(0,`rgba(123,195,132,.32)`),w.addColorStop(1,`rgba(123,195,132,0)`),h.beginPath(),h.moveTo(C[0].x,_-14),h.lineTo(C[0].x,C[0].y);for(let e=1;e<C.length;e++){let t=C[e-1],n=C[e],r=(t.x+n.x)/2;h.bezierCurveTo(r,t.y,r,n.y,n.x,n.y)}h.lineTo(C[C.length-1].x,_-14),h.closePath(),h.fillStyle=w,h.fill(),h.beginPath(),h.moveTo(C[0].x,C[0].y);for(let e=1;e<C.length;e++){let t=C[e-1],n=C[e],r=(t.x+n.x)/2;h.bezierCurveTo(r,t.y,r,n.y,n.x,n.y)}h.strokeStyle=`#7BC384`,h.lineWidth=2.2,h.lineJoin=`round`,h.lineCap=`round`,h.stroke();let T=C[C.length-1];h.beginPath(),h.arc(T.x,T.y,4,0,Math.PI*2),h.fillStyle=`#7BC384`,h.fill(),h.strokeStyle=`#fff`,h.lineWidth=1.5,h.stroke()}function Fe(e){let t=(window.__lk3Data||{recent:[]}).recent||[];if(e===`frozen`?t=t.filter(e=>e.status===`frozen`):e===`unlocked`?t=t.filter(e=>e.status===`unlocked`):e===`withdrawn`?t=t.filter(e=>e.status===`withdrawn`):e===`L1`?t=t.filter(e=>e.level===1):e===`L2`?t=t.filter(e=>e.level===2):e===`L3`?t=t.filter(e=>e.level===3):e===`L4`&&(t=t.filter(e=>e.level===4)),t.length===0){[`lk3Feed`,`mLk3Feed`].forEach(e=>{let t=document.getElementById(e);t&&(t.innerHTML=`
      <div class="lk3-empty">
        <div class="lk3-empty-ic">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <div class="lk3-empty-h">NO COMMISSIONS YET</div>
        <div class="lk3-empty-d">Share your invite link with friends. When they make their first deposit of <b>$100+</b>, you'll start earning here.</div>
      </div>`)});return}let n=t.map(e=>{`${e.level}`;let t=e.status===`unlocked`,n=e.status===`withdrawn`,r=[`lk3-card`,e.status].join(` `),i=[`lk3-lvl`,`lk3-lvl--l${e.level}`].join(` `),a=[`lk3-stat`,`lk3-stat--${e.status}`].join(` `),o=e.status.toUpperCase(),s=n||t?`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>`:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,c;c=e.event===`deposit`?`Referral <b>${e.source_anon||e.source_login||``}</b> deposited <b>$${Number(e.source_amount_usd||0).toLocaleString(`en-US`,{maximumFractionDigits:0})}</b>`:e.event===`pool_accrual`?`Referral <b>${e.source_anon||``}</b> earned profit <b>$${Number(e.source_amount_usd||0).toLocaleString(`en-US`,{maximumFractionDigits:0})}</b>`:e.event===`item_sale`?`Referral <b>${e.source_anon||``}</b> sold item · profit <b>$${Number(e.source_amount_usd||0).toLocaleString(`en-US`,{maximumFractionDigits:0})}</b>`:`${e.event} · ${e.source_anon||``}`;let l=e.created_at?new Date(e.created_at).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):``,u=``;u=e.event===`deposit`?`${(e.tier||``).toLowerCase()} tier · ${e.rate_pct}% deposit commission`:`${(e.tier||``).toLowerCase()} · ${e.rate_pct}% profit-share`;let f=``;if(e.status===`frozen`&&e.hold_until){let t=new Date(e.hold_until).getTime(),n=Math.max(0,t-Date.now()),r=10080*60*1e3,i=r-n,a=Math.min(100,Math.max(0,i/r*100)),o=Math.floor(n/(1440*60*1e3)),s=Math.floor(n%(1440*60*1e3)/(3600*1e3)),c=new Date(t).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`});f=`
        <div class="lk3-timer">
          <span class="lk3-timer-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
          </span>
          <div class="lk3-timer-bar"><div class="lk3-timer-bar-fill" style="width:${a}%"></div></div>
          <span class="lk3-timer-text">${o>0?`UNLOCKS IN ${o}D ${s}H · ${c}`:`UNLOCKS TODAY (${s}H)`}</span>
        </div>`}return`
      <div class="${r}">
        <div class="lk3-card-icon">${s}</div>
        <div class="lk3-card-body">
          <div class="lk3-card-tags">
            <span class="${i}">LEVEL ${e.level}</span>
            <span class="${a}">${o}</span>
          </div>
          <div class="lk3-card-title">${c}</div>
          <div class="lk3-card-meta">${l} · ${u}</div>
          ${f}
        </div>
        <div class="lk3-card-amount">
          <div class="lk3-card-amount-val">+$${Number(e.earned_usd||0).toLocaleString(`en-US`,{minimumFractionDigits:2,maximumFractionDigits:2})}</div>
          <div class="lk3-card-amount-pct">${e.rate_pct}% × $${Number(e.source_amount_usd||0).toLocaleString(`en-US`,{maximumFractionDigits:0})}</div>
        </div>
      </div>`}).join(``);[`lk3Feed`,`mLk3Feed`].forEach(e=>{let t=document.getElementById(e);t&&(t.innerHTML=n)})}document.addEventListener(`click`,function(e){let t=e.target.closest(`.lk3-fchip`);if(!t)return;let n=t.dataset.filter;if(!n)return;let r=t.closest(`.lk3-filters`);r&&(r.querySelectorAll(`.lk3-fchip`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`)),Fe(n)});function Ie(){let e=document.getElementById(`lk3InviteLink`)?.textContent||document.getElementById(`mLk3InviteLink`)?.textContent||``;if(!e||e.includes(`loading`))return;let t=`https://t.me/share/url?url=`+encodeURIComponent(e)+`&text=Earn%20passive%20income%20on%20Luxor%20%E2%80%94%20fractional%20luxury%20investing.%20Join%20through%20my%20invite%3A`;window.open(t,`_blank`,`noopener,noreferrer`)}window.lk3ShareTelegram=Ie;function Le(){let e=document.getElementById(`lk3InviteLink`)?.textContent||document.getElementById(`mLk3InviteLink`)?.textContent||``;if(!e||e.includes(`loading`))return;let t=`Earn passive income on Luxor — fractional luxury investing. Join: `+e,n=`https://api.whatsapp.com/send?text=`+encodeURIComponent(t);window.open(n,`_blank`,`noopener,noreferrer`)}window.lk3ShareWhatsApp=Le,window.openAllRanksModal=function(){q(`
    <div class="ranks-modal">
      <div class="ranks-head">
        <div class="ranks-title">RANK SYSTEM</div>
        <div class="ranks-sub">More friends → higher rank → bigger commissions + cash bonuses.<br>Tiers are <b>lifetime</b> — once unlocked, never falls back.</div>
      </div>
      <div class="ranks-body">${[{key:`starter`,name:`STARTER`,color:`#9b9b9b`,need:`1–4 active friends`,summary:`Bring 1+ friend`,reward:`Get 10% from every deposit they make`,example:`Your friend deposits $1,000<br>→ <b style="color:#27ae60">You earn $100</b>`,perks:[`Earn from Level 1 (your direct friends)`,`Personal referral code`,`Tier never falls`]},{key:`silver`,name:`SILVER`,color:`#7BC384`,need:`5+ active friends`,summary:`Bring 5 friends`,reward:`Get 10% from your friends + 5% from their friends`,example:`Friend deposits $1,000 → <b style="color:#27ae60">$100</b><br>Friend's friend deposits $1,000 → <b style="color:#27ae60">$50</b>`,perks:[`10% from L1 + 5% from L2`,`Faster support priority`,`Tier never falls`]},{key:`gold`,name:`GOLD`,color:`#E5C674`,need:`15+ active friends`,summary:`Bring 15 friends`,reward:`Earn from 3 levels deep + $250 cash bonus`,example:`L1: $1,000 → <b style="color:#27ae60">$100</b><br>L2: $1,000 → <b style="color:#27ae60">$70</b><br>L3: $1,000 → <b style="color:#27ae60">$30</b><br>+ <b style="color:#E5C674">$250</b> one-time unlock bonus`,perks:[`10% / 7% / 3% from 3 levels`,`+ $250 milestone bonus on unlock`,`Profit-share enabled`,`Personal manager access`]},{key:`diamond`,name:`DIAMOND`,color:`#7AAEEC`,need:`30+ active friends`,summary:`Bring 30 friends`,reward:`Maximum tier — 4 levels deep + $1,500 cash bonus`,example:`L1: $1,000 → <b style="color:#27ae60">$100</b><br>L2: $1,000 → <b style="color:#27ae60">$70</b><br>L3: $1,000 → <b style="color:#27ae60">$50</b><br>L4: $1,000 → <b style="color:#27ae60">$30</b><br>+ <b style="color:#7AAEEC">$1,500</b> one-time unlock bonus`,perks:[`10% / 7% / 5% / 3% from 4 levels`,`+ $1,500 milestone bonus`,`Highest profit-share`,`VIP dedicated manager`,`Custom payout schedule`]}].map(e=>`
    <div class="ranks-card" style="border-left:3px solid ${e.color}">
      <div class="ranks-card-h">
        <div class="ranks-card-name" style="color:${e.color}">${e.name}</div>
        <div class="ranks-card-need">${e.need}</div>
      </div>
      <div class="ranks-card-tldr">
        <div class="rct-step"><span class="rct-num">①</span> <b>${e.summary}</b></div>
        <div class="rct-step"><span class="rct-num">②</span> <b>${e.reward}</b></div>
      </div>
      <div class="ranks-card-example">
        <div class="rce-lbl">REAL EXAMPLE</div>
        <div class="rce-text">${e.example}</div>
      </div>
      <ul class="ranks-card-perks">
        ${e.perks.map(e=>`<li>${e}</li>`).join(``)}
      </ul>
    </div>
  `).join(``)}</div>
      <div class="ranks-foot">
        <div class="ranks-foot-note"><b>Active friend</b> = someone who deposited at least $100. Money credits instantly, withdrawable after 7-day hold.</div>
        <button class="ranks-close-btn" onclick="closeModal()">GOT IT</button>
      </div>
    </div>`,{wide:!0})};let Re=!1,ze=null;async function Be(){let e=t.login||sessionStorage.getItem(`luxor_login`);if(e)try{let t=await u(`/api/user/`+encodeURIComponent(e)+`/settings`);if(!t.ok)return;let n=await t.json();if(!n||!n.ok)return;let r=(e,t)=>{let n=document.getElementById(e);n&&(n.value=t)},i=(e,t)=>{let n=document.getElementById(e);n&&(n.checked=!!t)};r(`setLogin`,n.login||``),r(`mSetLogin`,n.login||``),r(`setEmail`,n.email||``),r(`mSetEmail`,n.email||``),r(`setCurrency`,n.display_currency||`USD`),r(`mSetCurrency`,n.display_currency||`USD`),r(`setLanguage`,n.language||`en`),r(`mSetLanguage`,n.language||`en`),r(`setTimezone`,n.timezone||`UTC`),r(`mSetTimezone`,n.timezone||`UTC`),i(`setNotifEmail`,n.notif_email),i(`mSetNotifEmail`,n.notif_email),i(`setNotifMarketing`,n.notif_marketing),i(`mSetNotifMarketing`,n.notif_marketing),i(`setWithdraw2FA`,n.withdraw_2fa_enabled),i(`mSetWithdraw2FA`,n.withdraw_2fa_enabled),[`setEmailVerifiedBadge`,`mSetEmailVerifiedBadge`].forEach(e=>{let t=document.getElementById(e);t&&(t.classList.add(`show`),n.email_verified?(t.textContent=`VERIFIED`,t.classList.add(`ok`),t.classList.remove(`no`)):(t.textContent=`NOT VERIFIED`,t.classList.add(`no`),t.classList.remove(`ok`)))}),Re=!0}catch(e){console.warn(`loadSettings failed:`,e)}}async function Ve(e,n){if(!Re)return;let r=t.login||sessionStorage.getItem(`luxor_login`);r&&(clearTimeout(ze),ze=setTimeout(async()=>{try{let t={};t[e]=n;let i=await u(`/api/user/`+encodeURIComponent(r)+`/settings`,{method:`POST`,body:JSON.stringify(t)}),a=await i.json(),o=document.getElementById(`settingsStatus`);if(!i.ok||!a.ok){let e=a&&a.detail&&a.detail.error||a&&a.error||`unknown`;o&&(o.className=`err`,o.textContent=`Error: `+e,setTimeout(()=>o.textContent=``,3e3)),Be();return}o&&(o.className=`ok`,o.textContent=`Saved`,setTimeout(()=>o.textContent=``,2e3))}catch(e){console.warn(`updateSettingField failed:`,e)}},300))}document.querySelectorAll(`[data-pool-tab]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.poolTab;document.querySelectorAll(`[data-pool-tab]`).forEach(e=>e.classList.toggle(`active`,e.dataset.poolTab===t)),document.querySelectorAll(`[data-pool-sub]`).forEach(e=>e.classList.toggle(`hidden`,e.dataset.poolSub!==t))})}),document.querySelectorAll(`[data-pool-tab-m]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.poolTabM;if(document.querySelectorAll(`[data-pool-tab-m]`).forEach(e=>e.classList.toggle(`active`,e.dataset.poolTabM===t)),document.querySelectorAll(`[data-pool-sub-m]`).forEach(e=>e.classList.toggle(`hidden`,e.dataset.poolSubM!==t)),t===`history`)try{Cn()}catch{}})}),window.switchPoolTabM=function(e){if(document.querySelectorAll(`[data-pool-tab-m]`).forEach(t=>t.classList.toggle(`active`,t.dataset.poolTabM===e)),document.querySelectorAll(`[data-pool-sub-m]`).forEach(t=>t.classList.toggle(`hidden`,t.dataset.poolSubM!==e)),e===`history`)try{Cn()}catch{}},document.querySelectorAll(`[data-items-tab]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.itemsTab;document.querySelectorAll(`[data-items-tab]`).forEach(e=>e.classList.toggle(`active`,e.dataset.itemsTab===t)),window._itemsFilter=t;try{L()}catch{}})}),document.querySelectorAll(`[data-items-tab-m]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.itemsTabM;document.querySelectorAll(`[data-items-tab-m]`).forEach(e=>e.classList.toggle(`active`,e.dataset.itemsTabM===t)),window._itemsFilter=t;try{L()}catch{}})}),document.addEventListener(`click`,()=>{document.getElementById(`bellDrop`)?.classList.remove(`show`)});try{setInterval(()=>{if(s.myItems.length>0)try{L()}catch{}},1e4)}catch{}window.addEventListener(`load`,()=>{setTimeout(()=>{try{Ne()}catch{}},1500)}),console.log(`[snap2] full JS loaded`),window._lxAnims=window._lxAnims||{};function W(e,t,n){if(!e)return;window._lxAnims||(window._lxAnims={}),n||={};let r=typeof fmtMoney==`function`?e=>fmtMoney(e,n.fmtOpts||{}):(e,t)=>{t||={};let r=Math.round(Number(e)||0);return(n.fmtOpts||{}).sign&&r>0?`+$`+r.toLocaleString():r<0?`-$`+Math.abs(r).toLocaleString():`$`+r.toLocaleString()},i=Number(t)||0,a=e.textContent||``,o=parseFloat(a.replace(/[^\d.\-]/g,``)),s=isNaN(o)?i:o;if(Math.abs(i-s)<.5){e.textContent=r(i);return}let c=e.id||`_anim_`+(e._lxAnimKey=e._lxAnimKey||Math.random());window._lxAnims[c]&&cancelAnimationFrame(window._lxAnims[c]);let l=performance.now(),u=e=>1-(1-e)**3;function f(t){let n=Math.min(1,(t-l)/400);e.textContent=r(s+(i-s)*u(n)),n<1?window._lxAnims[c]=requestAnimationFrame(f):delete window._lxAnims[c]}window._lxAnims[c]=requestAnimationFrame(f)}function G(e,t,n){let r=document.getElementById(e);r&&W(r,t,n)}window.animateBalanceTo=W,window.animateById=G,window.LX=window.LX||{},LX.icons=Object.assign({},window.Modal&&Modal.icons||{},{watch:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="6"/><path d="M12 9v3l2 2"/><path d="M9 4h6M9 20h6"/></svg>`,bag:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>`,sneaker:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 17l4-2 3-7 4 1 1 4 7 3v3H2v-2z"/><path d="M9 8l3-3"/></svg>`,jewelry:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6-6 6 6-6 12L6 9z"/><path d="M6 9h12M10 9l2-6M14 9l-2-6"/></svg>`,fashion:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4l-4 3-4-3-5 4 3 4v9h12v-9l3-4-5-4z"/></svg>`,electronics:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></svg>`,art:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg>`,wine:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8v6a4 4 0 0 1-8 0V2z"/><path d="M12 12v8M9 22h6"/></svg>`,coin:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 9h4a2 2 0 0 1 0 4h-4M9 9v8M9 13h5"/></svg>`,diamond:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6-6 6 6-6 12L6 9z"/><path d="M6 9h12"/></svg>`,star:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-7z"/></svg>`,starFill:`<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-7z"/></svg>`,heart:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-4.5-9-10c-1-3 1-7 5-7 2 0 3 1 4 3 1-2 2-3 4-3 4 0 6 4 5 7-2 5.5-9 10-9 10z"/></svg>`,heartFill:`<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 21s-7-4.5-9-10c-1-3 1-7 5-7 2 0 3 1 4 3 1-2 2-3 4-3 4 0 6 4 5 7-2 5.5-9 10-9 10z"/></svg>`,archive:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="5" rx="1"/><path d="M5 8v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8"/><path d="M9 12h6"/></svg>`,scroll:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 0 1-4 0V5a2 2 0 0 0-4 0v2h4"/><path d="M14 9h4M14 13h4"/></svg>`,target:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>`,chart:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><rect x="6" y="11" width="3" height="8"/><rect x="11" y="6" width="3" height="13"/><rect x="16" y="14" width="3" height="5"/></svg>`,shieldFill:`<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z"/></svg>`,sparkle:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M5 19l4-4M15 9l4-4"/></svg>`,sun:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`,moon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,message:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"/></svg>`,warnTri:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l10 18H2L12 3z"/><path d="M12 9v5M12 18h.01"/></svg>`}),LX.iconHTML=function(e,t,n){let r=LX.icons[e]||LX.icons.diamond,i=t?` style="width:${t}px;height:${t}px"`:``,a=n?` class="${n}"`:``;return r.replace(`<svg `,`<svg${a}${i} `)},(function(){if(document.getElementById(`lx-icons-style`))return;let e=document.createElement(`style`);e.id=`lx-icons-style`,e.textContent=`
    .lx-i{ display:inline-flex; align-items:center; justify-content:center; vertical-align:middle; }
    .lx-i svg{ width: 1em; height: 1em; }
    .lx-i--16 svg{ width:16px; height:16px; }
    .lx-i--20 svg{ width:20px; height:20px; }
    .lx-i--24 svg{ width:24px; height:24px; }
    .lx-i--32 svg{ width:32px; height:32px; }
  `,document.head.appendChild(e)})();let K=null;window._lxLegacyModalCtx=window._lxLegacyModalCtx||null;function q(e,t){try{if(K){try{K.close(null)}catch{}K=null}}catch{if(window._lxLegacyModalCtx){try{window._lxLegacyModalCtx.close(null)}catch{}window._lxLegacyModalCtx=null}}let n=!!(t&&t.wide),r=t&&t.tone||``,i=`<div class="lx-body lx-legacy-body">${e}</div>`,a=Modal.show({html:i,wide:n,tone:r,dismissible:!(t&&t.persistent)});try{K=a}catch{}return window._lxLegacyModalCtx=a,a}function J(){let e=null;try{e=K}catch{e=window._lxLegacyModalCtx}if(e){try{e.close(null)}catch{}try{K=null}catch{}window._lxLegacyModalCtx=null}let t=document.getElementById(`mainOverlay`);t&&t.classList.remove(`show`)}window._dep={amount:0,useBonus:!1,currency:null,depositId:null,paymentData:null,timerInt:null,pollInt:null};let He={"USDT-TRC20":{name:`USDT`,network:`TRON (TRC20)`,sym:`₮`,warn:`TRON network only`,color:`#26A17B`,icon:`<svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#26A17B"/><path d="M17.92 17.38v-.01c-.11.01-.69.04-1.97.04-1.02 0-1.74-.03-2-.04v.01c-3.91-.17-6.83-.85-6.83-1.66 0-.81 2.92-1.49 6.83-1.66v2.65c.26.02 1 .06 2.02.06 1.22 0 1.84-.05 1.95-.06v-2.65c3.9.17 6.81.85 6.81 1.66 0 .81-2.91 1.49-6.81 1.66m0-3.59v-2.37h5.43V7.79H8.66v3.62h5.43v2.37c-4.41.2-7.74 1.08-7.74 2.13 0 1.05 3.32 1.92 7.74 2.13v7.6h3.83v-7.6c4.41-.21 7.73-1.08 7.73-2.13 0-1.05-3.32-1.92-7.73-2.13" fill="#fff"/></svg>`},"USDT-ERC20":{name:`USDT`,network:`Ethereum (ERC20)`,sym:`₮`,warn:`Ethereum network only`,color:`#26A17B`,icon:`<svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#26A17B"/><path d="M17.92 17.38v-.01c-.11.01-.69.04-1.97.04-1.02 0-1.74-.03-2-.04v.01c-3.91-.17-6.83-.85-6.83-1.66 0-.81 2.92-1.49 6.83-1.66v2.65c.26.02 1 .06 2.02.06 1.22 0 1.84-.05 1.95-.06v-2.65c3.9.17 6.81.85 6.81 1.66 0 .81-2.91 1.49-6.81 1.66m0-3.59v-2.37h5.43V7.79H8.66v3.62h5.43v2.37c-4.41.2-7.74 1.08-7.74 2.13 0 1.05 3.32 1.92 7.74 2.13v7.6h3.83v-7.6c4.41-.21 7.73-1.08 7.73-2.13 0-1.05-3.32-1.92-7.73-2.13" fill="#fff"/></svg>`},BTC:{name:`Bitcoin`,network:`Bitcoin`,sym:`₿`,warn:`Bitcoin network only`,color:`#F7931A`,icon:`<svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#F7931A"/><path d="M22.94 14.13c.32-2.13-1.31-3.27-3.53-4.04l.72-2.89-1.76-.44-.7 2.81-1.4-.33.71-2.83-1.76-.44-.72 2.89c-.38-.09-.75-.17-1.11-.25v-.01l-2.42-.6-.47 1.88s1.31.3 1.28.32c.71.18.84.65.82 1.02l-1.97 7.9c-.09.22-.31.55-.81.43.02.03-1.28-.32-1.28-.32l-.87 2.01 2.29.57c.42.11.84.22 1.25.32l-.73 2.92 1.76.44.72-2.89c.48.13.95.25 1.4.36l-.72 2.88 1.76.44.73-2.92c3 .57 5.26.34 6.21-2.37.77-2.18-.04-3.44-1.61-4.27 1.15-.26 2.01-1.02 2.24-2.59zm-4.01 5.64c-.55 2.18-4.21 1-5.4.71l.96-3.86c1.19.3 5 .89 4.44 3.15zm.55-5.67c-.5 1.98-3.55 1.97-4.54 1.72l.87-3.5c.99.25 4.18.71 3.66 1.78z" fill="#fff"/></svg>`},ETH:{name:`Ethereum`,network:`Ethereum (ERC20)`,sym:`Ξ`,warn:`Ethereum network only`,color:`#627EEA`,icon:`<svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#627EEA"/><path d="M16.498 4v8.87l7.497 3.35z" fill="#fff" fill-opacity=".602"/><path d="M16.498 4L9 16.22l7.498-3.35z" fill="#fff"/><path d="M16.498 21.968v6.027L24 17.616z" fill="#fff" fill-opacity=".602"/><path d="M16.498 27.995v-6.028L9 17.616z" fill="#fff"/><path d="M16.498 20.573l7.497-4.353-7.497-3.348z" fill="#fff" fill-opacity=".2"/><path d="M9 16.22l7.498 4.353v-7.701z" fill="#fff" fill-opacity=".602"/></svg>`},TON:{name:`Toncoin`,network:`TON`,sym:`◆`,warn:`TON network only`,color:`#0098EA`,icon:`<svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#0098EA"/><path d="M22.21 10.05H9.79c-2.28 0-3.73 2.46-2.58 4.45L14.81 27.4c.5.87 1.76.87 2.27 0l7.6-12.91c1.16-1.99-.29-4.44-2.47-4.44m-7.4 12.86l-1.66-3.21-3.99-7.13c-.27-.46.07-1.05.62-1.05h5.03zm6.66-10.34l-3.99 7.13-1.66 3.21V11.51h5.03c.55 0 .89.59.62 1.06" fill="#fff"/></svg>`}};window._depFlow=window._depFlow||{region:null,method:null};function Ue(){q(`
    <div class="dep-method-hero">
      <div class="dep-method-h">FUND ACCOUNT</div>
      <div class="dep-method-sub">Choose your preferred deposit method.<br>Your funds become available within minutes.</div>
    </div>

    <div class="mcard gold" onclick="_depGoCrypto()">
      <div class="mtop">
        <div class="mstag">PREFERRED METHOD</div>
        <div class="mic">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9 9h6"/><path d="M9 12h6"/><path d="M9 15h4"/></svg>
        </div>
      </div>
      <div class="mname">CRYPTOCURRENCY</div>
      <div class="mmeta">
        <div class="mcell">
          <div class="mlbl">ACCEPTS</div>
          <div class="mv">USDT · BTC · ETH · TON</div>
        </div>
        <div class="mcell right">
          <div class="mlbl">PROCESSING</div>
          <div class="mv">INSTANT · 0% FEE</div>
        </div>
      </div>
    </div>

    <div class="mcard dark" onclick="_depGoCard()">
      <div class="mtop">
        <div class="mstag">ALTERNATIVE</div>
        <div class="mic">
          <svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 11h20"/></svg>
        </div>
      </div>
      <div class="mname">BANK CARD</div>
      <div class="mmeta">
        <div class="mcell">
          <div class="mlbl">ACCEPTS</div>
          <div class="mv">VISA · MASTERCARD</div>
        </div>
      </div>
    </div>

    <div class="dep-method-foot">All transactions are secured by 256-bit encryption</div>
  `,{wide:!0})}window.openDepositMethod=Ue;function We(){J(),setTimeout(()=>rt(),80)}window._depGoCrypto=We;function Ge(){J(),setTimeout(()=>Ke(),80)}window._depGoCard=Ge;function Ke(){q(`
    <div class="cs-block">
      <div class="cs-icon">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
      </div>
      <div class="cs-h">COMING SOON</div>
      <div class="cs-d">Card deposits are temporarily unavailable. <b>Crypto is faster, cheaper, and available right now.</b></div>
    </div>

    <div class="dep-actions">
      <button class="dep-btn dep-btn-gold" onclick="_depGoCrypto()">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9 9h6"/><path d="M9 12h6"/><path d="M9 15h4"/></svg>
        PAY WITH CRYPTO
      </button>
      <button class="dep-btn dep-btn-out" onclick="openHowToBuyWizard()">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        HOW TO BUY CRYPTO
      </button>
      <button class="dep-btn dep-btn-ghost" onclick="_depOpenSupport()">
        <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        CHAT WITH SUPPORT
      </button>
    </div>
  `,{wide:!0})}window.openCardComingSoon=Ke;function qe(){J(),setTimeout(()=>P(`support`),100)}window._depOpenSupport=qe;function Je(){q(`
    <div class="wiz-hero">
      <div class="wiz-stag">STEP 1 OF 3</div>
      <div class="wiz-h">WHERE ARE<br>YOU <span class="gold">FROM?</span></div>
      <div class="wiz-sub">We'll show you the best methods to buy crypto in your region.</div>
    </div>

    <div class="region-grid">
      <div class="region-card" onclick="_depSelectRegion('usa')">
        <div class="region-ic"><svg viewBox="0 0 24 24"><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></svg></div>
        <div class="region-name">USA</div>
        <div class="region-sub">United States</div>
      </div>
      <div class="region-card" onclick="_depSelectRegion('eu')">
        <div class="region-ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2v20"/><path d="M2 12h20"/><path d="M5 5l14 14"/><path d="M19 5L5 19"/></svg></div>
        <div class="region-name">EUROPE</div>
        <div class="region-sub">EU · UK · CH</div>
      </div>
      <div class="region-card" onclick="_depSelectRegion('asia')">
        <div class="region-ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12c5 0 5 4 10 4s5-4 10-4"/><path d="M2 12c5 0 5-4 10-4s5 4 10 4"/></svg></div>
        <div class="region-name">ASIA</div>
        <div class="region-sub">South-East · India</div>
      </div>
      <div class="region-card" onclick="_depSelectRegion('other')">
        <div class="region-ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/></svg></div>
        <div class="region-name">OTHER</div>
        <div class="region-sub">Worldwide</div>
      </div>
    </div>

    <div style="margin-top:24px">
      <button class="dep-btn dep-btn-ghost" onclick="_depOpenSupport()">
        <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        CHAT WITH SUPPORT
      </button>
    </div>
  `,{wide:!0})}window.openHowToBuyWizard=Je;function Ye(e){window._depFlow.region=e,Qe()}window._depSelectRegion=Ye;let Xe={usa:{label:`USA`,sub:`Best methods for the United States — choose what you have.`,methods:[{key:`usa-applepay`,name:`Apple Pay`,desc:`Fastest. Works with Touch/Face ID. ~1% fee`,tag:`INSTANT`,icon:`apple`},{key:`usa-debit`,name:`Debit / Credit Card`,desc:`Visa or Mastercard. ~1.5% fee`,icon:`card`},{key:`usa-ach`,name:`ACH Bank Transfer`,desc:`Cheapest method. 1–3 business days`,tag:`CHEAPEST`,icon:`bank`},{key:`usa-cashapp`,name:`Cash App`,desc:`Built-in BTC purchase, instant`,icon:`phone`}]},eu:{label:`EUROPE`,sub:`Best methods for EU, UK, Switzerland.`,methods:[{key:`eu-sepa`,name:`SEPA Bank Transfer`,desc:`Cheapest in EU. 1 business day`,tag:`CHEAPEST`,icon:`bank`},{key:`eu-card`,name:`Visa / Mastercard`,desc:`Instant but ~2% fee`,icon:`card`},{key:`eu-applepay`,name:`Apple Pay / Google Pay`,desc:`Fastest. ~2% fee`,tag:`INSTANT`,icon:`apple`},{key:`eu-revolut`,name:`Revolut`,desc:`In-app crypto if you have Revolut`,icon:`phone`}]},asia:{label:`ASIA`,sub:`Methods that work across South-East Asia, India, and the rest.`,methods:[{key:`asia-p2p`,name:`P2P Bank Transfer`,desc:`Most popular. Local bank to seller, escrow protected`,tag:`POPULAR`,icon:`bank`},{key:`asia-card`,name:`Card`,desc:`Visa/Mastercard. Some banks block crypto — try P2P if it fails`,icon:`card`},{key:`asia-wallet`,name:`E-Wallet (GCash, Paytm)`,desc:`Local e-wallets via P2P escrow`,icon:`phone`},{key:`asia-cash`,name:`Cash (Local)`,desc:`Cash deposit via P2P sellers in your city`,icon:`cash`}]},other:{label:`WORLDWIDE`,sub:`Universal methods that work almost everywhere.`,methods:[{key:`other-card`,name:`Visa / Mastercard`,desc:`Universally accepted. ~2-3% fee`,icon:`card`},{key:`other-p2p`,name:`P2P (Any local method)`,desc:`Bank, e-wallet, cash — find a seller`,tag:`UNIVERSAL`,icon:`users`},{key:`other-bank`,name:`Bank Wire Transfer`,desc:`International SWIFT wire. 1-3 days`,icon:`bank`},{key:`other-support`,name:`Contact Support`,desc:`We'll personally help you find a way`,tag:`PERSONAL`,icon:`chat`}]}},Ze={apple:`<svg viewBox="0 0 24 24"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>`,card:`<svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 11h20"/></svg>`,bank:`<svg viewBox="0 0 24 24"><path d="M3 21h18"/><path d="M3 10l9-7 9 7"/><path d="M5 10v11"/><path d="M19 10v11"/><path d="M9 14v3"/><path d="M12 14v3"/><path d="M15 14v3"/></svg>`,phone:`<svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>`,cash:`<svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>`,users:`<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,chat:`<svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`};function Qe(){let e=Xe[window._depFlow.region];if(!e)return;let t=e.methods.map((e,t)=>`
    <div class="dep-method-item ${t===0?`featured`:``}" onclick="_depSelectMethod('${e.key}')">
      <div class="dmi-ic">${Ze[e.icon]||``}</div>
      <div class="dmi-body">
        <div class="dmi-name">${e.name}${e.tag?`<span class="dmi-tag">${e.tag}</span>`:``}</div>
        <div class="dmi-desc">${e.desc}</div>
      </div>
      <div class="dmi-arr"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg></div>
    </div>
  `).join(``);q(`
    <div class="wiz-hero">
      <div class="wiz-stag">STEP 2 OF 3 · ${e.label}</div>
      <div class="wiz-h">HOW DO YOU<br>WANT TO <span class="gold">PAY?</span></div>
      <div class="wiz-sub">${e.sub}</div>
    </div>
    <div class="dep-method-list">${t}</div>
    <div style="margin-top:18px">
      <button class="dep-btn dep-btn-ghost" onclick="openHowToBuyWizard()">
        <svg viewBox="0 0 24 24"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
        CHANGE REGION
      </button>
    </div>
    <div style="margin-top:8px">
      <button class="dep-btn dep-btn-ghost" onclick="_depOpenSupport()">
        <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        CAN'T FIND MY METHOD — CHAT
      </button>
    </div>
  `,{wide:!0})}window.openMethodList=Qe;function $e(e){window._depFlow.method=e,tt(e)}window._depSelectMethod=$e;let et={"usa-applepay":{title:`USA · Apple Pay`,via:`via Coinbase`,summary:[{l:`TIME`,v:`~5 minutes`,cls:`green`},{l:`FEE`,v:`~1% (Coinbase)`},{l:`PROVIDER`,v:`COINBASE`}],steps:[{title:`Install Coinbase`,body:`Download <b>Coinbase</b> from the App Store. It's the most popular regulated crypto exchange in the US — they handle KYC, your card details, and conversion.`,img:``},{title:`Sign up & verify`,body:`Create an account with your <b>email</b>, then verify your <b>phone</b> and your <b>identity</b> by photographing your driver's license or passport. Verification usually takes 5–15 minutes.`,tip:`Verification is required by US law (KYC). Your data stays with Coinbase, not with us.`,img:``},{title:`Tap "Buy", choose USDT`,body:`In Coinbase, tap the <b>Buy</b> button. In the search field type <code>USDT</code> (Tether) — it's the most stable coin pegged to USD. Enter the dollar amount you want to deposit (e.g. <code>$1,000</code>).`,tip:`<b>Why USDT?</b> Its price never moves — $1 USDT always equals ~$1. You won't lose money on price swings.`,img:``},{title:`Pay with Apple Pay`,body:`Choose <b>Apple Pay</b> as the payment method, then confirm with <b>Face ID / Touch ID</b>. The USDT will appear in your Coinbase wallet within seconds.`,img:``},{title:`Send USDT to Luxor`,body:`Inside Coinbase, tap <b>Send</b>, choose <b>USDT</b>, paste your <b>Luxor TRC20 deposit address</b> (we'll show it in the next step). Choose the <b>TRON (TRC20)</b> network — it's the cheapest.`,tip:`<b>CRITICAL:</b> Use TRC20 network only. ERC20 has a $5–15 fee, TRC20 fee is ~$1.`,img:``},{title:`Done — funds arrive in 1–5 minutes`,body:`After Coinbase confirms, you'll see the deposit on Luxor within 1–5 minutes. The funds appear in your <b>main wallet</b> ready to invest.`,tip:`You only need to verify on Coinbase once. Future top-ups take ~30 seconds.`}]},"usa-debit":{title:`USA · Debit Card`,via:`via Coinbase or MoonPay`,summary:[{l:`TIME`,v:`~5 minutes`,cls:`green`},{l:`FEE`,v:`~1.5%`},{l:`PROVIDER`,v:`COINBASE / MOONPAY`}],steps:[{title:`Install Coinbase or MoonPay`,body:`Download <b>Coinbase</b>. Most regulated US exchange. Alternative: <b>MoonPay</b> if Coinbase isn't available in your state.`,img:``},{title:`Sign up & verify identity`,body:`Create account with email + phone. Verify your <b>identity</b> with a photo of your driver's license. Approval usually instant or up to 15 minutes.`,tip:`KYC is mandatory for all US crypto purchases. This is one-time.`,img:``},{title:`Add your debit card`,body:`In Coinbase: <b>Settings → Payment methods → Add card</b>. Enter card number, expiry, CVV. Coinbase will charge $0.01 to verify.`,img:``},{title:`Buy USDT`,body:`Tap <b>Buy</b>, search <code>USDT</code>, enter amount. Choose your <b>Card</b> as payment. Confirm — coins appear in seconds.`,tip:`Choose USDT, not USD-Coin or other "stablecoins". USDT works everywhere.`,img:``},{title:`Send to Luxor (TRC20)`,body:`Tap <b>Send</b> → choose USDT → paste your <b>Luxor TRC20 address</b> → select <b>TRON (TRC20)</b> network → confirm.`,tip:`<b>Use TRC20 network</b> — fee is ~$1. ERC20 costs $5–15.`,img:``},{title:`Funds arrive in minutes`,body:`Coinbase processes the transfer in 1–5 minutes. Your Luxor balance updates automatically.`}]},"usa-ach":{title:`USA · ACH Bank Transfer`,via:`via Coinbase or Kraken`,summary:[{l:`TIME`,v:`1–3 business days`},{l:`FEE`,v:`~$0 (Kraken)`,cls:`green`},{l:`PROVIDER`,v:`COINBASE / KRAKEN`}],steps:[{title:`Why ACH?`,body:`<b>ACH bank transfer is the cheapest way</b> to buy crypto in the US. Trade-off: takes 1–3 business days versus instant for cards. Best for larger deposits ($1,000+).`},{title:`Install Kraken or Coinbase`,body:`<b>Kraken</b> has zero ACH fees. <b>Coinbase</b> is faster but ~1% fee. Both are regulated and safe.`,img:``},{title:`Sign up & verify`,body:`Email + phone + ID verification. ID approval usually takes 5–30 minutes.`,img:``},{title:`Link your bank`,body:`In Kraken/Coinbase: <b>Funding → Add bank account</b>. Use Plaid integration (just log in to your bank) or manually enter <b>routing + account numbers</b>.`,tip:`Plaid is faster and safer — no need to type numbers manually.`,img:``},{title:`Initiate ACH deposit`,body:`Tap <b>Deposit USD via ACH</b>, enter amount. Funds arrive in your USD wallet in <b>1–3 business days</b>. (Coinbase Instant: 1 hour for ~1.5% fee.)`,img:``},{title:`Buy USDT, send to Luxor`,body:`Once USD arrives: <b>Buy USDT</b> → <b>Withdraw → TRC20 → paste Luxor address → send</b>. Funds appear on Luxor in 1–5 minutes after the on-chain confirmation.`}]},"usa-cashapp":{title:`USA · Cash App`,via:`native Cash App BTC`,summary:[{l:`TIME`,v:`~3 minutes`,cls:`green`},{l:`FEE`,v:`~2% (Cash App)`},{l:`COIN`,v:`BTC ONLY`}],steps:[{title:`Why Cash App?`,body:`If you already have <b>Cash App</b>, it's the fastest path — buy and send <b>BTC</b> right inside the app. No new exchange account needed.`,tip:`Cash App only supports BTC, not USDT. We accept BTC on Luxor.`},{title:`Top up your Cash App balance`,body:`If your Cash App balance is empty: tap <b>Money → Add Cash → enter amount → Add</b>. Money pulls from your linked bank or debit card.`,img:``},{title:`Buy Bitcoin`,body:`Tap <b>Bitcoin tab → Buy → enter dollar amount → Confirm</b>. BTC is added to your Cash App Bitcoin wallet.`,img:``},{title:`Withdraw BTC to Luxor`,body:`Tap the <b>Bitcoin tab → Withdraw Bitcoin → paste your Luxor BTC address → confirm</b>.`,tip:`Cash App will show a network fee — accept it. Total fee ~2% incl. spread.`,img:``},{title:`BTC arrives at Luxor in ~10 minutes`,body:`Bitcoin needs network confirmation — usually 6 blocks (~60 minutes), but Luxor credits after the first confirmation (~10 min).`}]},"eu-sepa":{title:`Europe · SEPA Transfer`,via:`via Bitstamp or Kraken`,summary:[{l:`TIME`,v:`1 business day`},{l:`FEE`,v:`~€0 (Bitstamp)`,cls:`green`},{l:`PROVIDER`,v:`BITSTAMP / KRAKEN`}],steps:[{title:`Install Bitstamp or Kraken`,body:`<b>Bitstamp</b> is European, regulated in Luxembourg, very low fees. <b>Kraken</b> works too. Both accept SEPA.`,img:``},{title:`Sign up & verify`,body:`Email + ID verification (passport or national ID). Approval takes ~10–30 minutes.`,img:``},{title:`Get SEPA deposit details`,body:`In Bitstamp/Kraken: <b>Deposit → EUR → SEPA</b>. Copy the <b>IBAN</b>, <b>BIC</b>, and <b>reference code</b> (very important — the code matches the deposit to your account).`,tip:`<b>Always include the reference code</b>. Without it your deposit may be lost or delayed by a week.`,img:``},{title:`Send SEPA from your bank`,body:`Open your bank app (e.g. Revolut, N26, Wise, regular bank). Make a normal SEPA transfer with the IBAN and code from step 3. Money arrives at the exchange in <b>1 business day</b> (sometimes same day).`,img:``},{title:`Buy USDT`,body:`Once EUR arrives: <b>Trade → EUR/USDT → Buy</b>. EUR is converted to USDT at market rate.`,img:``},{title:`Withdraw USDT to Luxor (TRC20)`,body:`<b>Withdraw → USDT → TRON network → paste Luxor address → confirm</b>. Funds arrive on Luxor in 1–5 minutes.`,tip:`Use TRC20 network — fee ~$1. ERC20 fee ~$5–15.`}]},"eu-card":{title:`Europe · Card`,via:`via Binance or MoonPay`,summary:[{l:`TIME`,v:`~5 minutes`,cls:`green`},{l:`FEE`,v:`~2%`},{l:`PROVIDER`,v:`BINANCE / MOONPAY`}],steps:[{title:`Install Binance`,body:`Download <b>Binance</b>. World's largest exchange, fully regulated in EU. Alternative: <b>MoonPay</b> for instant card-to-crypto without an exchange account.`,img:``},{title:`Sign up & verify`,body:`Email + phone + identity (passport or ID + selfie). Verification ~10–20 minutes.`,img:``},{title:`Buy USDT with card`,body:`Tap <b>Buy Crypto → Card → choose USDT → enter amount → enter card details → confirm with 3D-Secure</b>. USDT lands in your account in seconds.`,img:``},{title:`Withdraw to Luxor`,body:`Tap <b>Wallet → Withdraw → USDT → TRC20 network → paste Luxor address → confirm</b>.`,tip:`Always TRC20. Fee is ~$1 vs $5–15 on ERC20.`,img:``},{title:`Funds arrive in minutes`,body:`Binance processes withdrawals in 5–10 minutes after security check. Your Luxor balance updates automatically.`}]},"eu-applepay":{title:`Europe · Apple Pay / Google Pay`,via:`via MoonPay`,summary:[{l:`TIME`,v:`~3 minutes`,cls:`green`},{l:`FEE`,v:`~2% (MoonPay)`},{l:`PROVIDER`,v:`MOONPAY`}],steps:[{title:`Why MoonPay?`,body:`<b>MoonPay</b> is the fastest path with Apple Pay/Google Pay in EU. No exchange account needed — they handle everything in one app.`},{title:`Open moonpay.com`,body:`On your phone, open <b>moonpay.com</b> in Safari/Chrome (or download the MoonPay app).`,img:``},{title:`Choose USDT, enter amount`,body:`Select <b>You buy: USDT (Tron)</b>, enter the amount in EUR. MoonPay will show you exactly how much USDT you receive.`,img:``},{title:`Enter your wallet address`,body:`<b>This is the most important step.</b> Paste your <b>Luxor USDT TRC20 address</b> — MoonPay sends crypto directly there, you never hold it yourself.`,tip:`Double-check the address. Sending to wrong address = funds lost forever.`,img:``},{title:`Pay with Apple Pay`,body:`Quick KYC if it's your first time (selfie + ID). Then tap <b>Pay with Apple Pay</b>, confirm with Face ID. Done.`,img:``},{title:`Funds arrive in 5 minutes`,body:`MoonPay processes the payment, then sends the USDT directly to your Luxor address. Total time: 3–10 minutes.`}]},"eu-revolut":{title:`Europe · Revolut`,via:`native Revolut crypto`,summary:[{l:`TIME`,v:`~3 minutes`,cls:`green`},{l:`FEE`,v:`~1.5% (Revolut)`},{l:`PROVIDER`,v:`REVOLUT`}],steps:[{title:`Why Revolut?`,body:`If you already use <b>Revolut</b>, you can buy crypto right inside the app. No KYC needed (already done at Revolut signup).`},{title:`Open Crypto tab`,body:`In Revolut: <b>Wealth → Crypto → search USDT</b>.`,img:``},{title:`Buy USDT`,body:`Tap <b>Buy</b>, enter amount in EUR, confirm. USDT is added to your Revolut crypto wallet (held by Revolut, not on chain).`,tip:`<b>Heads up:</b> Revolut crypto is "synthetic" — they hold the actual coins. To withdraw to Luxor you need to use the Withdraw feature.`,img:``},{title:`Withdraw USDT to Luxor`,body:`Open USDT in Revolut → <b>Withdraw → External wallet → paste Luxor TRC20 address → choose TRC20 network → confirm</b>.`,tip:`Some Revolut Standard plans don't allow crypto withdrawal. Upgrade to Premium or use bank transfer to Bitstamp instead.`,img:``},{title:`Funds arrive at Luxor`,body:`Revolut withdrawal takes 5–30 minutes. Once on chain, Luxor credits in 1–5 minutes.`}]},"asia-p2p":{title:`Asia · P2P Bank Transfer`,via:`via Binance P2P`,summary:[{l:`TIME`,v:`~10 minutes`,cls:`green`},{l:`FEE`,v:`~0%`,cls:`green`},{l:`PROVIDER`,v:`BINANCE P2P`}],steps:[{title:`Why P2P?`,body:`<b>P2P</b> = peer-to-peer. You buy USDT directly from another person via Binance escrow. <b>No card needed</b>, often <b>0% fee</b>, and works around bank crypto blocks.`,tip:`P2P is the most popular way in Asia for a reason. Safer than direct bank-to-exchange because Binance holds the USDT in escrow.`},{title:`Install Binance`,body:`Download <b>Binance app</b>. Sign up with email + phone + ID verification (~10 min).`,img:``},{title:`Open P2P, find a seller`,body:`In Binance: <b>P2P → Buy → USDT</b>. Filter by:<br>• <b>your local currency</b> (PHP, INR, IDR, VND, etc.)<br>• <b>your bank</b> (GCash, Paytm, Maya, etc.)<br>• <b>seller rating ≥ 95%</b><br>Pick a seller with the best rate.`,img:``},{title:`Place order, send money`,body:`Tap <b>Buy</b>, enter amount. Binance will show seller's <b>bank account / e-wallet details</b>. Send the exact amount via your bank app. <b>Use the reference number Binance gives you.</b>`,tip:`<b>Critical:</b> Use the exact reference. Don't send extra money. Don't send less.`,img:``},{title:`Confirm payment in app`,body:`Once your bank shows the transfer is sent, tap <b>"Mark as paid"</b> in Binance. Seller verifies and releases USDT to your wallet (5–15 minutes).`,tip:`<b>Never release USDT until your money arrives.</b> Always mark as paid only after you actually sent it.`,img:``},{title:`Withdraw USDT to Luxor`,body:`<b>Wallet → Withdraw → USDT → TRC20 → paste Luxor address → confirm</b>. Funds arrive in 1–5 minutes.`,img:``}]},"asia-card":{title:`Asia · Card Payment`,via:`via Binance or OKX`,summary:[{l:`TIME`,v:`~5 minutes`,cls:`green`},{l:`FEE`,v:`~2%`},{l:`PROVIDER`,v:`BINANCE / OKX`}],steps:[{title:`A note on cards in Asia`,body:`<b>Some Asian banks block crypto card transactions.</b> If your card is rejected, switch to P2P (it always works).`,tip:`India: most cards blocked, use P2P. Indonesia/Philippines: cards usually work.`},{title:`Install Binance or OKX`,body:`Both are major exchanges. <b>OKX</b> sometimes works better in Asia for card payments. Sign up + KYC (~10 min).`,img:``},{title:`Buy USDT with card`,body:`<b>Buy Crypto → Card → choose USDT → amount → card details → 3D-Secure code</b>. If rejected → try a different card or switch to P2P method.`,img:``},{title:`Withdraw to Luxor`,body:`<b>Wallet → Withdraw → USDT → TRC20 → Luxor address → confirm</b>. Arrives in 1–5 minutes.`}]},"asia-wallet":{title:`Asia · E-Wallet`,via:`via Binance P2P`,summary:[{l:`TIME`,v:`~10 minutes`,cls:`green`},{l:`FEE`,v:`~0%`,cls:`green`},{l:`PROVIDER`,v:`BINANCE P2P`}],steps:[{title:`E-wallets work via P2P`,body:`<b>GCash</b> (PH), <b>Paytm</b> (IN), <b>OVO</b> (ID), <b>TrueMoney</b> (TH), <b>MoMo</b> (VN) etc. all work through Binance P2P with sellers who accept e-wallets.`},{title:`Open Binance P2P`,body:`In Binance: <b>P2P → Buy → USDT → Filter by your e-wallet</b> (e.g. GCash). Choose seller with rating ≥95%.`,img:``},{title:`Place order, pay via e-wallet`,body:`Tap <b>Buy</b>, enter amount. Get seller's e-wallet phone number, send via your e-wallet app with the reference number.`,tip:`Some sellers want you to send a screenshot of payment. Take one before you confirm.`,img:``},{title:`Mark as paid, get USDT`,body:`Tap <b>"Mark as paid"</b> in Binance. Seller releases USDT in 5–15 minutes.`,img:``},{title:`Withdraw USDT to Luxor`,body:`<b>Wallet → Withdraw → USDT → TRC20 → Luxor address → confirm</b>. Arrives in 1–5 min.`}]},"asia-cash":{title:`Asia · Cash Deposit`,via:`via Binance P2P`,summary:[{l:`TIME`,v:`~30 minutes`},{l:`FEE`,v:`~0–2%`},{l:`METHOD`,v:`IN-PERSON / CASH-IN`}],steps:[{title:`Cash works via P2P`,body:`Some sellers accept cash deposits at <b>convenience stores</b>, <b>banks</b>, or <b>in-person</b>. Most common in Philippines, Vietnam, Indonesia.`},{title:`Open P2P, find cash seller`,body:`In Binance P2P: <b>filter payment method = "Cash deposit", "7-Eleven", or your local cash-in option</b>.`,img:``},{title:`Follow seller instructions`,body:`Each seller has their own instructions. Could be:<br>• Deposit cash at a 7-Eleven with their reference<br>• Drop cash at a bank branch<br>• Meet in person<br><b>Read seller terms carefully.</b>`,img:``},{title:`Verify and confirm`,body:`Once seller confirms cash received, USDT is released to your wallet.`,img:``},{title:`Withdraw to Luxor`,body:`<b>Wallet → Withdraw → USDT → TRC20 → Luxor address</b>.`}]},"other-card":{title:`Worldwide · Card`,via:`via Binance or Bybit`,summary:[{l:`TIME`,v:`~5 minutes`,cls:`green`},{l:`FEE`,v:`~2-3%`},{l:`PROVIDER`,v:`BINANCE / BYBIT`}],steps:[{title:`Install Binance or Bybit`,body:`<b>Binance</b> works in most countries. If blocked, try <b>Bybit</b>. Both are top-5 exchanges with global reach.`,img:``},{title:`Sign up & KYC`,body:`Email + phone + ID + selfie. Approval ~10-30 minutes.`,img:``},{title:`Buy USDT with your card`,body:`<b>Buy Crypto → Card → USDT → amount → card details → 3D-Secure</b>. If declined, try another card or check card crypto restrictions with your bank.`,img:``},{title:`Withdraw to Luxor`,body:`<b>Wallet → Withdraw → USDT → TRC20 → Luxor address → confirm</b>. Arrives in 1–5 minutes.`,tip:`TRC20 always — fee ~$1. ERC20 costs $5–15.`}]},"other-p2p":{title:`Worldwide · P2P`,via:`via Binance P2P`,summary:[{l:`TIME`,v:`~10 minutes`},{l:`FEE`,v:`~0%`,cls:`green`},{l:`PROVIDER`,v:`BINANCE P2P`}],steps:[{title:`P2P works almost everywhere`,body:`Binance P2P has sellers in 150+ countries supporting hundreds of payment methods (banks, e-wallets, cash, gift cards, etc.). It's the most universal way to buy crypto.`},{title:`Install Binance, open P2P`,body:`Download Binance, sign up with KYC. Tap <b>P2P → Buy → USDT → filter by your country and payment method</b>.`,img:``},{title:`Choose a trusted seller`,body:`Look for: <b>≥95% completion rate</b>, <b>1000+ orders</b>, <b>blue check verification</b>. Pick the best price.`,tip:`Don't go for the absolute cheapest — go for <b>reliable</b>. Save $0.50, lose $500 to a scam.`,img:``},{title:`Place order, pay, mark as paid`,body:`Place order → see seller's payment details → send money via your method → tap <b>"Mark as paid"</b> → seller releases USDT.`,img:``},{title:`Withdraw USDT to Luxor`,body:`<b>Wallet → Withdraw → USDT → TRC20 → Luxor address</b>. Done.`}]},"other-bank":{title:`Worldwide · Bank Wire`,via:`via Bybit or KuCoin`,summary:[{l:`TIME`,v:`1–3 business days`},{l:`FEE`,v:`$10–50 SWIFT`},{l:`PROVIDER`,v:`BYBIT / KUCOIN`}],steps:[{title:`Bank wire is for larger amounts`,body:`<b>SWIFT bank wire</b> has $10–50 fees, takes 1–3 business days, but works internationally for any amount. Best for deposits over $10,000.`},{title:`Install Bybit or KuCoin, KYC`,body:`Both accept international wires. Sign up + KYC (~30 min).`,img:``},{title:`Get wire details`,body:`<b>Deposit → USD → Wire transfer</b>. Copy the bank name, IBAN/account number, SWIFT code, and <b>reference code</b>.`,img:``},{title:`Send wire from your bank`,body:`Visit your bank or use online banking. Send international SWIFT wire with the details from step 3. <b>Always include the reference code.</b>`,tip:`Without the reference code, your wire may be returned (and you pay double the fees).`,img:``},{title:`Wait, then buy USDT`,body:`Wire arrives in 1–3 business days. Then: <b>Trade → USD/USDT → buy</b>.`,img:``},{title:`Withdraw to Luxor`,body:`<b>Wallet → Withdraw → USDT → TRC20 → Luxor address</b>.`}]},"other-support":{title:`Worldwide · Personal Help`,via:`via Luxor support`,summary:[{l:`TIME`,v:`Same day`},{l:`FEE`,v:`Free help`,cls:`green`},{l:`PROVIDER`,v:`LUXOR SUPPORT`}],steps:[{title:`When to use this`,body:`If none of the standard methods work in your country, our support team will help you personally. Common cases: sanctioned countries, banking restrictions, unique local methods.`},{title:`Open support chat`,body:`Tap the button below to open our support chat. Tell them:<br>• Your <b>country</b><br>• What payment method you have (bank, e-wallet, cash)<br>• How much you want to deposit`,tip:`The more details you give us, the faster we can help.`},{title:`We'll respond within hours`,body:`Our team responds within <b>24 hours</b>, usually faster. We'll find a way that works for you.`},{title:`Follow our personalized guide`,body:`Based on your situation, we'll send a step-by-step guide tailored to your country and payment method.`}]}};function tt(e){let t=et[e];if(!t){q(`<div style="padding:30px 20px;text-align:center;color:var(--t3)">Manual not yet written. <button class="dep-btn dep-btn-out" style="margin-top:14px;max-width:240px" onclick="_depOpenSupport()">Chat with support</button></div>`,{wide:!0});return}let n=Xe[window._depFlow.region]||{label:``},r=(t.summary||[]).map(e=>`<div class="sum-row"><span class="l">${e.l}</span><span class="v ${e.cls||``}">${e.v}</span></div>`).join(``),i=(e,t)=>e===t.length-1,a=(t.steps||[]).map((e,n,r)=>`
    <div class="step-c">
      <div class="step-h">
        <div class="step-num ${i(n,r)?`done`:``}">${i(n,r)?`✓`:(n+1).toString().padStart(2,`0`)}</div>
        <div class="step-title">${e.title}</div>
      </div>
      <div class="step-body">${e.body}</div>
      ${e.img?`<div class="step-img-wrap"><img src="${e.img}" alt="Step ${n+1}" loading="lazy"></div>`:e.img===``?`<div class="step-img-wrap">${nt(e,n,t)}</div>`:``}
      ${e.tip?`<div class="step-tip">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        <div>${e.tip}</div>
      </div>`:``}
    </div>
  `).join(``);q(`
    <div class="manual-hero">
      <div class="manual-stag">
        <span>STEP 3 OF 3</span><span class="arr">·</span>
        <span>${n.label}</span><span class="arr">→</span>
        <span>${t.via||``}</span>
      </div>
      <div class="manual-h">${t.title.split(` · `).map((e,t)=>t===1?`<span class="gold">${e}</span>`:e).join(` · `)}</div>
    </div>

    <div class="summary-card">${r}</div>

    <div class="steps">${a}</div>

    <button class="dep-btn dep-btn-gold" onclick="_depGoCrypto()">
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9 9h6"/><path d="M9 12h6"/><path d="M9 15h4"/></svg>
      START DEPOSIT NOW
    </button>

    <div class="support-card">
      <div class="support-h">NEED HELP?</div>
      <div class="support-d">Stuck on a step? Our team will guide you through it personally — usually within an hour.</div>
      <button class="dep-btn dep-btn-out" onclick="_depOpenSupport()">
        <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        CHAT WITH SUPPORT
      </button>
    </div>

    <div style="margin-top:10px">
      <button class="dep-btn dep-btn-ghost" onclick="openMethodList()">
        <svg viewBox="0 0 24 24"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
        BACK TO METHODS
      </button>
    </div>
  `,{wide:!0})}window.openManualScreen=tt;function nt(e,t,n){let r=((e.title||``)+` `+(e.body||``)+` `+(e.tip||``)+` `+(n&&n.title||``)).toLowerCase(),i=`generic`;/install|download|app store|google play/.test(r)?i=`install`:/sign\s?up|verify|kyc|identity|passport|driver|selfie/.test(r)?i=`verify`:/apple\s?pay|face\s?id|touch\s?id/.test(r)||/google\s?pay/.test(r)?i=`applepay`:/cash\s?app|bitcoin\s+tab/.test(r)?i=`cashapp`:/revolut/.test(r)?i=`revolut`:/sepa|iban|bic|reference\s+code/.test(r)?i=`sepa`:/ach|routing|plaid|bank account|link.*bank/.test(r)?i=`bank`:/add (your )?(debit|credit)?\s?card|card details|3d.?secure|cvv/.test(r)?i=`card`:/\bbuy\b.*(usdt|crypto|bitcoin)|buy.*tether|tap.*buy|search.*usdt|enter (the )?amount/.test(r)?i=`buy`:/withdraw|send.*(to luxor|usdt|btc)|paste.*address|trc20|tron|network/.test(r)?i=`send`:/funds? arriv|deposit.*credit|appears? on luxor|done.*minutes|confirmation/.test(r)?i=`arrived`:/why|trade.?off|cheapest|best for/.test(r)&&(i=`why`);let a=`<div class="si-stage"><div class="si-stage-dot"></div><div class="si-stage-txt">STEP ${(t+1).toString().padStart(2,`0`)}</div></div>`,o={install:`
      <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
        <!-- phone frame -->
        <rect x="140" y="20" width="120" height="200" rx="18" fill="#0a0a0a" stroke="#E5C674" stroke-width="1.5"/>
        <rect x="148" y="34" width="104" height="155" rx="3" fill="#13110d"/>
        <circle cx="200" cy="205" r="6" fill="none" stroke="#E5C674" stroke-width="1.3" opacity=".55"/>
        <!-- app icon -->
        <rect x="172" y="80" width="56" height="56" rx="13" fill="url(#g1)"/>
        <text x="200" y="118" font-family="Bebas Neue, sans-serif" font-size="32" fill="#0a0a0a" text-anchor="middle" font-weight="700">$</text>
        <!-- download arrow -->
        <circle cx="200" cy="155" r="11" fill="rgba(229,198,116,.15)" stroke="#E5C674" stroke-width="1.2"/>
        <path d="M196 152v6M200 152v6M204 152v6" stroke="#E5C674" stroke-width="1.3" stroke-linecap="round"/>
        <path d="M194 158l6 6 6-6" fill="none" stroke="#E5C674" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- sparkles -->
        <g opacity=".55">
          <circle cx="100" cy="60" r="2" fill="#E5C674"/>
          <circle cx="310" cy="80" r="3" fill="#E5C674"/>
          <circle cx="80" cy="160" r="2.5" fill="#E5C674"/>
          <circle cx="320" cy="170" r="2" fill="#E5C674"/>
        </g>
        <defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F0D78A"/><stop offset="1" stop-color="#C9A84C"/></linearGradient></defs>
      </svg>`,verify:`
      <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
        <!-- ID card -->
        <rect x="80" y="55" width="170" height="110" rx="10" fill="#1a1612" stroke="#E5C674" stroke-width="1.4"/>
        <circle cx="115" cy="98" r="18" fill="rgba(229,198,116,.18)" stroke="#E5C674" stroke-width="1.2"/>
        <circle cx="115" cy="92" r="6" fill="#E5C674" opacity=".75"/>
        <path d="M101 110a14 14 0 0 1 28 0" stroke="#E5C674" stroke-width="1.2" fill="none" opacity=".75"/>
        <rect x="148" y="80" width="86" height="5" rx="2" fill="#E5C674" opacity=".55"/>
        <rect x="148" y="92" width="60" height="4" rx="2" fill="#E5C674" opacity=".3"/>
        <rect x="148" y="103" width="74" height="4" rx="2" fill="#E5C674" opacity=".3"/>
        <rect x="148" y="125" width="86" height="3" rx="1.5" fill="#E5C674" opacity=".25"/>
        <rect x="148" y="133" width="70" height="3" rx="1.5" fill="#E5C674" opacity=".25"/>
        <!-- check badge -->
        <circle cx="280" cy="155" r="26" fill="rgba(46,204,113,.18)" stroke="#27ae60" stroke-width="1.6"/>
        <path d="M270 155l7 7 13-13" stroke="#27ae60" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- scanner line -->
        <line x1="80" y1="115" x2="250" y2="115" stroke="#E5C674" stroke-width="1" opacity=".7" stroke-dasharray="3 3"/>
      </svg>`,applepay:`
      <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
        <!-- phone -->
        <rect x="155" y="22" width="90" height="180" rx="14" fill="#0a0a0a" stroke="#E5C674" stroke-width="1.4"/>
        <rect x="161" y="34" width="78" height="136" rx="2" fill="#13110d"/>
        <!-- card on screen -->
        <rect x="170" y="55" width="60" height="38" rx="5" fill="url(#gpcard)"/>
        <rect x="174" y="62" width="14" height="9" rx="1.5" fill="#0a0a0a" opacity=".5"/>
        <rect x="174" y="80" width="24" height="3" rx="1" fill="#0a0a0a" opacity=".55"/>
        <rect x="174" y="86" width="34" height="3" rx="1" fill="#0a0a0a" opacity=".4"/>
        <text x="200" y="115" font-family="-apple-system, sans-serif" font-size="9" fill="#E5C674" text-anchor="middle" font-weight="600">Pay</text>
        <text x="200" y="128" font-family="-apple-system, sans-serif" font-size="14" fill="#fff" text-anchor="middle" font-weight="700">$1,000</text>
        <!-- face id -->
        <rect x="178" y="138" width="44" height="20" rx="4" fill="rgba(229,198,116,.15)" stroke="#E5C674" stroke-width="1"/>
        <text x="200" y="152" font-family="-apple-system, sans-serif" font-size="7" fill="#E5C674" text-anchor="middle" font-weight="600">FACE ID ✓</text>
        <!-- finger / touch -->
        <g transform="translate(280 130)">
          <circle r="22" fill="rgba(229,198,116,.12)" stroke="#E5C674" stroke-width="1.4" stroke-dasharray="4 3"/>
          <circle r="10" fill="rgba(229,198,116,.3)"/>
          <circle r="4" fill="#E5C674"/>
        </g>
        <defs><linearGradient id="gpcard" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F0D78A"/><stop offset="1" stop-color="#C9A84C"/></linearGradient></defs>
      </svg>`,cashapp:`
      <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
        <rect x="150" y="20" width="100" height="190" rx="14" fill="#0a0a0a" stroke="#27ae60" stroke-width="1.4"/>
        <rect x="156" y="32" width="88" height="144" rx="2" fill="#0d1410"/>
        <!-- BTC tab icon -->
        <circle cx="200" cy="80" r="22" fill="rgba(247,147,26,.2)" stroke="#f7931a" stroke-width="1.4"/>
        <text x="200" y="89" font-family="-apple-system, sans-serif" font-size="22" fill="#f7931a" text-anchor="middle" font-weight="700">₿</text>
        <text x="200" y="125" font-family="-apple-system, sans-serif" font-size="9" fill="#27ae60" text-anchor="middle" font-weight="700">BUY BITCOIN</text>
        <text x="200" y="142" font-family="-apple-system, sans-serif" font-size="13" fill="#fff" text-anchor="middle" font-weight="700">$500</text>
        <rect x="166" y="152" width="68" height="18" rx="9" fill="#27ae60"/>
        <text x="200" y="164" font-family="-apple-system, sans-serif" font-size="8" fill="#0a0a0a" text-anchor="middle" font-weight="800">CONFIRM</text>
      </svg>`,revolut:`
      <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
        <rect x="150" y="20" width="100" height="190" rx="14" fill="#0a0a0a" stroke="#3a7bd5" stroke-width="1.4"/>
        <rect x="156" y="32" width="88" height="144" rx="2" fill="#0a0e18"/>
        <text x="200" y="60" font-family="-apple-system, sans-serif" font-size="11" fill="#3a7bd5" text-anchor="middle" font-weight="800">REVOLUT</text>
        <rect x="170" y="75" width="60" height="38" rx="6" fill="rgba(58,123,213,.18)" stroke="#3a7bd5" stroke-width="1"/>
        <text x="200" y="92" font-family="-apple-system, sans-serif" font-size="7" fill="#3a7bd5" text-anchor="middle" font-weight="600">CRYPTO</text>
        <text x="200" y="106" font-family="-apple-system, sans-serif" font-size="11" fill="#fff" text-anchor="middle" font-weight="700">USDT</text>
        <rect x="170" y="125" width="60" height="20" rx="10" fill="#3a7bd5"/>
        <text x="200" y="138" font-family="-apple-system, sans-serif" font-size="8" fill="#fff" text-anchor="middle" font-weight="800">EXCHANGE</text>
      </svg>`,bank:`
      <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
        <!-- bank building -->
        <g transform="translate(110 60)">
          <rect x="0" y="50" width="100" height="60" fill="#1a1612" stroke="#E5C674" stroke-width="1.4"/>
          <polygon points="-8,50 50,8 108,50" fill="#1a1612" stroke="#E5C674" stroke-width="1.4"/>
          <rect x="14" y="58" width="6" height="40" fill="#E5C674" opacity=".55"/>
          <rect x="32" y="58" width="6" height="40" fill="#E5C674" opacity=".55"/>
          <rect x="50" y="58" width="6" height="40" fill="#E5C674" opacity=".55"/>
          <rect x="68" y="58" width="6" height="40" fill="#E5C674" opacity=".55"/>
          <rect x="86" y="58" width="6" height="40" fill="#E5C674" opacity=".55"/>
        </g>
        <!-- arrow → -->
        <g transform="translate(245 138)">
          <path d="M0 0h35M30 -6l8 6-8 6" stroke="#E5C674" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <!-- crypto coin -->
        <g transform="translate(310 138)">
          <circle r="22" fill="rgba(229,198,116,.18)" stroke="#E5C674" stroke-width="1.4"/>
          <text x="0" y="6" font-family="-apple-system, sans-serif" font-size="16" fill="#E5C674" text-anchor="middle" font-weight="800">$</text>
        </g>
      </svg>`,sepa:`
      <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
        <rect x="65" y="50" width="270" height="125" rx="10" fill="#1a1612" stroke="#E5C674" stroke-width="1.3"/>
        <text x="80" y="78" font-family="Space Mono, monospace" font-size="9" fill="#E5C674" font-weight="700" letter-spacing="1.5">SEPA TRANSFER</text>
        <line x1="80" y1="86" x2="320" y2="86" stroke="#E5C674" stroke-width=".8" opacity=".4"/>
        <text x="80" y="105" font-family="Space Mono, monospace" font-size="8" fill="#888" letter-spacing=".8">IBAN</text>
        <text x="80" y="119" font-family="Space Mono, monospace" font-size="11" fill="#fff" letter-spacing=".5">DE89 3704 0044 0532 0130 00</text>
        <text x="80" y="138" font-family="Space Mono, monospace" font-size="8" fill="#888" letter-spacing=".8">REFERENCE</text>
        <text x="80" y="152" font-family="Space Mono, monospace" font-size="11" fill="#E5C674" letter-spacing=".5" font-weight="700">USR-A8FK9-DEPOSIT</text>
        <rect x="78" y="143" width="172" height="13" rx="2" fill="none" stroke="#E5C674" stroke-width="1" stroke-dasharray="2 2" opacity=".7"/>
      </svg>`,card:`
      <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
        <rect x="80" y="60" width="240" height="135" rx="14" fill="url(#gcard)" stroke="rgba(0,0,0,.2)" stroke-width="1"/>
        <rect x="98" y="92" width="36" height="26" rx="4" fill="rgba(0,0,0,.45)"/>
        <rect x="100" y="100" width="32" height="3" rx="1.5" fill="rgba(229,198,116,.6)"/>
        <rect x="100" y="106" width="22" height="3" rx="1.5" fill="rgba(229,198,116,.4)"/>
        <text x="98" y="155" font-family="Space Mono, monospace" font-size="14" fill="#0a0a0a" font-weight="700" letter-spacing="2.5">•••• 4242</text>
        <text x="98" y="175" font-family="Space Mono, monospace" font-size="9" fill="rgba(0,0,0,.6)" font-weight="600">VALID 12/28</text>
        <text x="270" y="175" font-family="-apple-system, sans-serif" font-size="11" fill="#0a0a0a" font-weight="800" text-anchor="end">VISA</text>
        <!-- chip glow -->
        <circle cx="116" cy="105" r="20" fill="rgba(0,0,0,.08)"/>
        <defs><linearGradient id="gcard" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F0D78A"/><stop offset="1" stop-color="#C9A84C"/></linearGradient></defs>
      </svg>`,buy:`
      <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
        <!-- USDT coin -->
        <circle cx="200" cy="112" r="55" fill="rgba(38,161,123,.18)" stroke="#26a17b" stroke-width="1.6"/>
        <circle cx="200" cy="112" r="42" fill="none" stroke="#26a17b" stroke-width=".8" opacity=".5"/>
        <text x="200" y="120" font-family="-apple-system, sans-serif" font-size="32" fill="#26a17b" text-anchor="middle" font-weight="800">₮</text>
        <!-- amount input -->
        <rect x="100" y="180" width="200" height="28" rx="6" fill="#1a1612" stroke="#E5C674" stroke-width="1.2"/>
        <text x="200" y="199" font-family="Space Mono, monospace" font-size="14" fill="#E5C674" text-anchor="middle" font-weight="700">$1,000.00</text>
        <!-- sparks -->
        <g opacity=".7">
          <path d="M85 70l5 5M90 70l-5 5" stroke="#E5C674" stroke-width="1.2" stroke-linecap="round"/>
          <path d="M310 60l5 5M315 60l-5 5" stroke="#E5C674" stroke-width="1.2" stroke-linecap="round"/>
          <path d="M75 155l5 5M80 155l-5 5" stroke="#E5C674" stroke-width="1.2" stroke-linecap="round"/>
        </g>
      </svg>`,send:`
      <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
        <!-- exchange wallet -->
        <g transform="translate(40 80)">
          <rect width="80" height="60" rx="8" fill="#1a1612" stroke="#888" stroke-width="1.2"/>
          <text x="40" y="22" font-family="Space Mono, monospace" font-size="7" fill="#888" text-anchor="middle">EXCHANGE</text>
          <text x="40" y="42" font-family="-apple-system, sans-serif" font-size="13" fill="#fff" text-anchor="middle" font-weight="700">USDT</text>
        </g>
        <!-- network arrow -->
        <g transform="translate(130 110)">
          <path d="M0 0h140" stroke="#E5C674" stroke-width="2.2" fill="none" stroke-linecap="round"/>
          <path d="M134 -7l8 7-8 7" stroke="#E5C674" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="50" y="-14" width="42" height="22" rx="11" fill="#1a1612" stroke="#E5C674" stroke-width="1.2"/>
          <text x="71" y="0" font-family="Space Mono, monospace" font-size="9" fill="#E5C674" text-anchor="middle" font-weight="700">TRC20</text>
          <!-- moving packet -->
          <circle cx="71" cy="-2" r="3" fill="#E5C674" opacity=".9">
            <animate attributeName="cx" values="6;134;6" dur="2.4s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values=".2;1;.2" dur="2.4s" repeatCount="indefinite"/>
          </circle>
        </g>
        <!-- Luxor wallet -->
        <g transform="translate(280 80)">
          <rect width="80" height="60" rx="8" fill="rgba(229,198,116,.12)" stroke="#E5C674" stroke-width="1.4"/>
          <text x="40" y="22" font-family="Space Mono, monospace" font-size="7" fill="#E5C674" text-anchor="middle" font-weight="700">LUXOR</text>
          <text x="40" y="42" font-family="-apple-system, sans-serif" font-size="13" fill="#fff" text-anchor="middle" font-weight="700">$ + ₮</text>
        </g>
        <!-- address hint -->
        <text x="200" y="180" font-family="Space Mono, monospace" font-size="8" fill="#666" text-anchor="middle">TXn4...9bGq · paste your address</text>
      </svg>`,arrived:`
      <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="112" r="55" fill="rgba(46,204,113,.15)" stroke="#27ae60" stroke-width="2"/>
        <circle cx="200" cy="112" r="42" fill="rgba(46,204,113,.2)"/>
        <path d="M178 112l16 16 28-28" stroke="#27ae60" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- pulse rings -->
        <circle cx="200" cy="112" r="68" fill="none" stroke="#27ae60" stroke-width="1" opacity=".4">
          <animate attributeName="r" values="55;82;55" dur="2.2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values=".5;0;.5" dur="2.2s" repeatCount="indefinite"/>
        </circle>
        <text x="200" y="195" font-family="-apple-system, sans-serif" font-size="11" fill="#27ae60" text-anchor="middle" font-weight="700" letter-spacing="2">FUNDS RECEIVED</text>
      </svg>`,why:`
      <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="112" r="48" fill="rgba(229,198,116,.12)" stroke="#E5C674" stroke-width="1.6"/>
        <text x="200" y="128" font-family="Bebas Neue, sans-serif" font-size="56" fill="#E5C674" text-anchor="middle" font-weight="700">?</text>
        <g opacity=".7">
          <circle cx="120" cy="55" r="4" fill="#E5C674"/>
          <circle cx="285" cy="50" r="3" fill="#E5C674"/>
          <circle cx="100" cy="170" r="3" fill="#E5C674"/>
          <circle cx="305" cy="175" r="4" fill="#E5C674"/>
        </g>
      </svg>`,generic:`
      <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
        <rect x="120" y="55" width="160" height="115" rx="10" fill="#1a1612" stroke="#E5C674" stroke-width="1.4"/>
        <circle cx="200" cy="98" r="18" fill="rgba(229,198,116,.18)" stroke="#E5C674" stroke-width="1.4"/>
        <text x="200" y="105" font-family="Bebas Neue, sans-serif" font-size="20" fill="#E5C674" text-anchor="middle" font-weight="700">${(t+1).toString().padStart(2,`0`)}</text>
        <line x1="135" y1="135" x2="265" y2="135" stroke="#E5C674" stroke-width=".8" opacity=".35"/>
        <line x1="135" y1="148" x2="240" y2="148" stroke="#E5C674" stroke-width=".8" opacity=".25"/>
        <line x1="135" y1="160" x2="220" y2="160" stroke="#E5C674" stroke-width=".8" opacity=".2"/>
      </svg>`};return`<div class="step-illu">${a}<div class="si-art">${o[i]||o.generic}</div></div>`}window._genStepIllustration=nt;function rt(){window._dep.timerInt&&clearInterval(window._dep.timerInt),window._dep.pollInt&&clearInterval(window._dep.pollInt),window._dep={amount:0,useBonus:!1,currency:null,depositId:null,paymentData:null,timerInt:null,pollInt:null};let e=Number(s.totalDeposited)||0;t&&t.has_first_deposit_bonus===!0&&e===0?q(`<div style="text-align:center;margin-bottom:14px">
      <div class="stag">STEP 1 OF 3</div>
      <h3 style="font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:2px">Deposit options</h3>
      <p style="font-size:11px;color:var(--t3);margin-top:4px">You qualify for a first deposit bonus</p>
    </div>
    <div style="display:grid;gap:10px;margin-bottom:10px">
      <div onclick="depSetBonus(true)" style="padding:16px;background:linear-gradient(135deg,var(--gold),var(--gold2));color:#0a0a0a;border-radius:10px;cursor:pointer;text-align:center;position:relative">
        <div style="position:absolute;top:8px;right:10px;font-size:9px;font-weight:700;background:#0a0a0a;color:var(--gold);padding:3px 8px;border-radius:3px;letter-spacing:1px">RECOMMENDED</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:20px;letter-spacing:2px;margin-bottom:4px">WITH BONUS +5%</div>
        <div style="font-size:11px;font-weight:600;opacity:.85">Get +5% extra on deposits of $500 or more</div>
        <div style="font-size:10px;font-weight:700;margin-top:6px">Example: $1,000 → $1,050</div>
      </div>
      <div onclick="depSetBonus(false)" style="padding:16px;background:var(--bg2);border:1px solid var(--bd);border-radius:10px;cursor:pointer;text-align:center;transition:border .2s" onmouseover="this.style.borderColor='var(--gold)'" onmouseout="this.style.borderColor='var(--bd)'">
        <div style="font-family:'Bebas Neue',sans-serif;font-size:18px;letter-spacing:2px;margin-bottom:2px">REGULAR DEPOSIT</div>
        <div style="font-size:10px;color:var(--t3)">Deposit any amount · No bonus</div>
      </div>
    </div>
    <div style="font-size:9px;color:var(--t3);text-align:center;line-height:1.5">The bonus is a one-time offer for your first deposit.</div>`):it(!1)}function it(e){window._dep.useBonus=!!e,at()}async function at(){let e=window._dep.useBonus,n=e?`500`:`100`,r=Number(s.totalDeposited)||0,i=t&&t.has_first_deposit_bonus===!0&&r===0;q(`<div style="text-align:center;margin-bottom:14px">
    <div class="stag">${i?`STEP 2 OF 3`:`STEP 1 OF 2`}</div>
    <h3 style="font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:2px">Amount & currency</h3>
    ${e?`<p style="font-size:11px;color:var(--gold);margin-top:4px;font-weight:600">+5% bonus applied (min $500)</p>`:`<p style="font-size:11px;color:var(--t3);margin-top:4px">Enter amount and choose cryptocurrency</p>`}
  </div>
  <div class="input-group" style="margin-bottom:10px">
    <label style="font-size:10px;color:var(--t3);letter-spacing:1px;font-weight:600;text-transform:uppercase">Amount in USD${e?` (min $500)`:``}</label>
    <input type="number" id="depAmt" placeholder="${n}" min="${e?500:100}" style="width:100%;padding:14px;background:var(--bg2);border:1px solid var(--bd);border-radius:8px;color:var(--t);font-size:18px;font-weight:700;text-align:center;font-family:inherit;outline:none;margin-top:5px" oninput="depRenderBonusLine()">
  </div>
  <div style="display:flex;gap:5px;margin-bottom:10px">
    <button style="flex:1;padding:7px;background:var(--bg2);border:1px solid var(--bd);border-radius:6px;font-size:10px;cursor:pointer;font-weight:600;color:var(--t)" onclick="document.getElementById('depAmt').value=${e?500:100};depRenderBonusLine()">$${e?500:100}</button>
    <button style="flex:1;padding:7px;background:var(--bg2);border:1px solid var(--bd);border-radius:6px;font-size:10px;cursor:pointer;font-weight:600;color:var(--t)" onclick="document.getElementById('depAmt').value=1000;depRenderBonusLine()">$1,000</button>
    <button style="flex:1;padding:7px;background:var(--bg2);border:1px solid var(--bd);border-radius:6px;font-size:10px;cursor:pointer;font-weight:600;color:var(--t)" onclick="document.getElementById('depAmt').value=5000;depRenderBonusLine()">$5,000</button>
    <button style="flex:1;padding:7px;background:var(--bg2);border:1px solid var(--bd);border-radius:6px;font-size:10px;cursor:pointer;font-weight:600;color:var(--t)" onclick="document.getElementById('depAmt').value=10000;depRenderBonusLine()">$10,000</button>
  </div>
  <div id="depBonusLine" style="font-size:11px;text-align:center;margin-bottom:10px;color:var(--t3)"></div>
  <div class="input-group" style="margin-bottom:10px">
    <label style="font-size:10px;color:var(--t3);letter-spacing:1px;font-weight:600;text-transform:uppercase;margin-bottom:6px;display:block">Cryptocurrency</label>
    <div id="depCoinList" class="pay-methods">
      <div style="grid-column:span 2;text-align:center;padding:16px;color:var(--t3);font-size:11px">Loading available currencies…</div>
    </div>
  </div>
  <div id="depErr" style="display:none;background:var(--red-l);border:1px solid var(--red);color:var(--red);padding:10px;border-radius:6px;font-size:11px;margin-bottom:10px;text-align:center"></div>
  <button class="btn-primary" onclick="depSubmitStart()">CONTINUE →</button>
  ${i?`<button class="btn-out" style="margin-top:6px" onclick="openTopUp()">← Back</button>`:``}`),ot();try{let e=await(await u(`/api/crypto/currencies`)).json(),t=document.getElementById(`depCoinList`);if(!t)return;let n=e&&e.ok&&Array.isArray(e.currencies)?e.currencies:[];if(n.length===0){t.innerHTML=`<div style="grid-column:span 2;text-align:center;padding:16px;color:var(--red);font-size:11px">No payment methods available right now. Please try again later.</div>`;return}t.innerHTML=n.map(e=>{let t=He[e]||{name:e,network:e,sym:`●`,color:`#c9a84c`},n=t.icon||`<span class="symbol">${t.sym}</span>`;return`<div class="pay-m" data-cur="${e}" style="--coin-c:${t.color}" onclick="depPickCoin('${e}',this)">
        <div class="coin-icon">${n}</div>
        <div class="coin-name">${t.name}</div>
        <div class="net-name">${t.network}</div>
      </div>`}).join(``)}catch{let e=document.getElementById(`depCoinList`);e&&(e.innerHTML=`<div style="grid-column:span 2;text-align:center;padding:16px;color:var(--red);font-size:11px">Network error. Check connection and try again.</div>`)}}function ot(){let e=document.getElementById(`depBonusLine`);if(!e)return;let t=parseFloat(document.getElementById(`depAmt`)?.value||0);if(!t){e.innerHTML=``;return}if(window._dep.useBonus)if(t<500)e.style.color=`var(--red)`,e.innerHTML=`Minimum $500 required for bonus`;else{let n=Math.round(t*.05*100)/100;e.style.color=`var(--gold)`,e.innerHTML=`You'll get <strong>$${(t+n).toLocaleString()}</strong> (deposit $${t.toLocaleString()} + bonus $${n.toLocaleString()})`}else e.style.color=`var(--t3)`,e.innerHTML=`You'll receive <strong style="color:var(--green)">$${t.toLocaleString()}</strong> to your balance`}window._wd={withdrawalId:null,pollInt:null};function st(){let e=document.querySelector(`.wd3-pill.on`);return e?{key:e.dataset.net,min:parseFloat(e.dataset.min)||10,fee:e.dataset.fee,color:e.dataset.color}:null}function ct(e){e=Math.max(0,Math.min(Number(s.wallet)||0,Math.round(e)));let t=document.getElementById(`wd3Amount`);t&&(t.value=e.toLocaleString());let n=document.getElementById(`wd3Range`);n&&(n.value=e);let r=Number(s.wallet)||1,i=Math.max(0,Math.min(100,e/r*100)),a=document.getElementById(`wd3Fill`);a&&(a.style.width=i+`%`);let o=document.getElementById(`wd3Thumb`);o&&(o.style.left=i+`%`),dt(!0)}function lt(e){ct((Number(s.wallet)||0)*e/100)}window._wd3SetPct=lt;function ut(){let e=document.getElementById(`wd3Range`);e&&ct(parseFloat(e.value)||0)}window._wd3OnRangeInput=ut;function dt(e){let t=document.getElementById(`wd3Amount`);if(!t)return;let n=String(t.value||``).replace(/[^\d.]/g,``),r=parseFloat(n)||0,i=Number(s.wallet)||0;if(r>i&&(r=i),!e){let e=document.getElementById(`wd3Range`);e&&(e.value=r);let t=i>0?Math.max(0,Math.min(100,r/i*100)):0,n=document.getElementById(`wd3Fill`);n&&(n.style.width=t+`%`);let a=document.getElementById(`wd3Thumb`);a&&(a.style.left=t+`%`)}let a=st()||{fee:`~$1`,key:`USDT-TRC20`,min:10},o=document.getElementById(`wd3AmountHint`),c=(a.key||``).startsWith(`USDT`)?`≈ ${r.toLocaleString()} USDT`:`≈ $${r.toLocaleString()}`;o&&(o.textContent=`${c} · fee ${a.fee}`);let l=document.getElementById(`wd3Cta`);l&&(l.textContent=`WITHDRAW $${r.toLocaleString()}`)}window._wd3OnAmountInput=dt;function ft(){navigator.clipboard&&navigator.clipboard.readText&&navigator.clipboard.readText().then(e=>{let t=document.getElementById(`wd3Wallet`);t&&e&&(t.value=e.trim())}).catch(()=>{typeof Y==`function`&&Y(`warn`,`Paste blocked`,`Browser blocked clipboard access. Paste manually.`)})}window._wd3PasteAddr=ft,console.log(`[snap3] modals loaded`),window._poll={marketInt:null,marketIntervalMs:15e3,detailIntervalMs:5e3,inFlight:!1,lastSnapshot:null,silentMode:!0};function pt(){if(document.hidden)return!1;let e=document.querySelector(`.d-screen.show`),t=document.querySelector(`.m-screen.show`),n=(e?.id||t?.id||``).replace(/^(ds|ms)-/,``);return[`dash`,`market`,`detail`,`favs`].includes(n)}function mt(){let e={};return n.forEach(t=>{e[t.id]={slots_available:t.slots_available,slots_sold:t.slots_sold,funded:t.funded,available_fraction:t.available_fraction}}),e}function ht(e){e.forEach(e=>{let t=n.find(t=>t.id===e);t&&document.querySelectorAll(`.dmp-card, .vc-m-card`).forEach(n=>{if(!(n.getAttribute(`onclick`)||``).includes(`openItemDetail(`+e+`)`))return;let r=(t.slots_sold||0)+`/`+(t.slots_total||20),i=n.querySelector(`.slots span`);i&&i.textContent!==r&&(i.style.transition=`color .3s`,i.style.color=`var(--gold)`,i.textContent=r,setTimeout(()=>{i.style.color=``},1200));let a=n.querySelector(`.slots .pb .f`);a&&(a.style.transition=`width .5s`,a.style.width=(t.funded||0)+`%`);let o=t.slots_available!==void 0&&t.slots_available<=0,s=n.querySelector(`.soldout-badge`);if(o&&!s){let e=n.querySelector(`.img, .pic`);if(e){let t=document.createElement(`div`);t.className=`soldout-badge`,t.style.cssText=`position:absolute;inset:0;background:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;font-family:Bebas Neue,sans-serif;font-size:14px;letter-spacing:2px;color:#fff;z-index:3`,t.textContent=`SOLD OUT`,e.appendChild(t)}}else !o&&s&&s.remove()})})}function gt(){let e=window._currentDetailId;if(!e)return;let t=document.getElementById(`ds-detail`)?.classList.contains(`show`),r=document.getElementById(`ms-detail`)?.classList.contains(`show`);if(!t&&!r)return;let i=n.find(t=>t.id===Number(e));if(!i)return;let a=i.slots_total||20,o=i.slots_available===void 0?a:i.slots_available,s=a-o;if(i.price_per_slot||i.price/a,o<=0){[`mBuyBtn`,`dBuyBtn`].forEach(e=>{let t=document.getElementById(e);t&&(t.disabled=!0,t.style.opacity=`.5`,t.style.cursor=`not-allowed`,t.textContent=`SOLD OUT`)}),_t(`All slots have been sold while you were viewing.`,`red`);return}[`dIdContent`,`mIdContent`].forEach(e=>{let t=document.getElementById(e);t&&t.querySelectorAll(`.row`).forEach(e=>{let t=e.querySelector(`.l`)?.textContent||``;if(t===`Slots`){let t=e.querySelector(`.v`),n=s+` of `+a+` sold`;t&&t.textContent!==n&&(t.style.transition=`color .3s`,t.style.color=`var(--gold)`,t.textContent=n,setTimeout(()=>t.style.color=``,1200))}if(t===`Slots available`){let t=e.querySelector(`.v`);t&&t.textContent!==String(o)&&(t.textContent=o,t.className=`v `+(o>0?`green`:``))}})}),[`m`,`d`].forEach(e=>{let t=document.getElementById(e+`V5Slots`),n=document.getElementById(e+`V5Manual`);if(!t||!n)return;n.setAttribute(`max`,o);let r=parseInt(t.value)||1;if(r>o)Ae(o,e===`m`?`mobile`:`desktop`,i),_t(`${r-o} slot${r-o>1?`s`:``} were sold while you were viewing — adjusted to max available (${o})`,`gold`);else{let t=r/o*100,n=document.getElementById(e+`V5Fill`);n&&(n.style.width=t+`%`)}})}function _t(e,t){let n=t===`red`?`var(--red)`:t===`gold`?`var(--gold)`:`var(--green)`,r=document.createElement(`div`);if(r.style.cssText=`position:fixed;top:20px;right:20px;max-width:340px;background:var(--card);border:1px solid ${n};border-left:4px solid ${n};border-radius:8px;padding:12px 16px;font-size:12px;color:var(--t);box-shadow:var(--shadow);z-index:500;animation:toastIn .25s ease-out;line-height:1.5`,r.textContent=e,!document.getElementById(`_liveToastStyle`)){let e=document.createElement(`style`);e.id=`_liveToastStyle`,e.textContent=`@keyframes toastIn{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}@keyframes toastOut{to{opacity:0;transform:translateX(20px)}}`,document.head.appendChild(e)}document.body.appendChild(r),setTimeout(()=>{r.style.animation=`toastOut .25s ease-in forwards`,setTimeout(()=>r.remove(),280)},5e3)}async function vt(){if(!window._poll.inFlight&&pt()){window._poll.inFlight=!0;try{let t=await(await fetch(e+`/api/items`)).json();if(!t||!t.ok||!Array.isArray(t.items)){window._poll.inFlight=!1;return}let r=t.items.map(a),i=mt(),o=[],s={};r.forEach(e=>{s[e.id]={slots_available:e.slots_available,slots_sold:e.slots_sold,funded:e.funded,available_fraction:e.available_fraction};let t=i[e.id];if(!t){o.push(e.id);return}(t.slots_available!==e.slots_available||t.slots_sold!==e.slots_sold)&&o.push(e.id)});let c=Object.keys(i).filter(e=>!s[e]).map(Number);if(n=r,o.length===0&&c.length===0){window._poll.inFlight=!1;return}if(ht(o),gt(),o.some(e=>w(e)))try{R()}catch{}if(document.getElementById(`ds-favs`)?.classList.contains(`show`)||document.getElementById(`ms-favs`)?.classList.contains(`show`))try{R()}catch{}console.log(`[poll] updated`,o.length,`items, removed`,c.length)}catch(e){console.warn(`[poll] failed:`,e)}finally{window._poll.inFlight=!1}}}function yt(){window._poll.marketInt&&clearInterval(window._poll.marketInt);let e=null;setInterval(()=>{let t=document.getElementById(`ds-detail`)?.classList.contains(`show`)||document.getElementById(`ms-detail`)?.classList.contains(`show`)?window._poll.detailIntervalMs:window._poll.marketIntervalMs;t!==e&&(window._poll.marketInt&&clearInterval(window._poll.marketInt),e=t,window._poll.marketInt=setInterval(vt,t))},1e3),window._poll.marketInt=setInterval(vt,window._poll.marketIntervalMs),e=window._poll.marketIntervalMs}document.addEventListener(`visibilitychange`,()=>{document.hidden||setTimeout(vt,200)}),window.addEventListener(`load`,()=>{setTimeout(yt,3e3)}),console.log(`[snap5] real-time polling enabled (15s market / 5s detail)`),window._poll={marketInt:null,detailInt:null,detailItemId:null,lastSnapshot:{}};function bt(){let e={};return n.forEach(t=>{e[t.id]={slots_available:t.slots_available,funded:t.funded,slots_sold:t.slots_sold}}),e}async function xt(){if(!document.hidden)try{let t=await(await fetch(e+`/api/items`)).json();if(!t||!t.ok||!Array.isArray(t.items))return;let r=window._poll.lastSnapshot,i=t.items.map(a),o=[];i.forEach(e=>{let t=r[e.id];t&&t.slots_available!==e.slots_available&&o.push({id:e.id,oldAvail:t.slots_available,newAvail:e.slots_available,soldDelta:t.slots_available-e.slots_available,newFunded:e.funded,newSlotsSold:e.slots_sold})}),n=i;let s={};if(i.forEach(e=>{s[e.id]={slots_available:e.slots_available,funded:e.funded,slots_sold:e.slots_sold}}),window._poll.lastSnapshot=s,o.length>0){try{V(window._currentCat||`all`)}catch{}try{R()}catch{}setTimeout(()=>St(o),80);let e=window._poll.detailItemId;if(e){let t=o.find(t=>t.id===e);t&&Ct(t)}}}catch{}}function St(e){e.forEach(e=>{document.querySelectorAll(`[data-mk-id="${e.id}"]`).forEach(e=>{e.style.transition=`box-shadow .35s ease-out, transform .35s ease-out`,e.style.boxShadow=`0 0 0 2px var(--gold), 0 8px 24px rgba(201,168,76,.3)`,e.style.transform=`translateY(-2px)`,setTimeout(()=>{e.style.boxShadow=``,e.style.transform=``},1200)}),console.log(`[poll] Item #${e.id}: ${e.soldDelta} slot(s) sold (${e.oldAvail} → ${e.newAvail})`)})}function Ct(e){let t=n.find(t=>t.id===e.id);if(!t)return;let r=document.getElementById(`mFSlots`)||document.getElementById(`mV5Slots`),i=document.getElementById(`dFSlots`)||document.getElementById(`dV5Slots`),a=Math.max(parseInt(r?.value||`0`),parseInt(i?.value||`0`))||1,o=e.newAvail;if(o<=0){wt(`SOLD OUT — All slots have been sold while you were viewing.`,`red`),[`mBuyBtn`,`dBuyBtn`].map(e=>document.getElementById(e)).filter(Boolean).forEach(e=>{e.disabled=!0,e.style.opacity=`.5`,e.textContent=`SOLD OUT`}),[`mFSlider`,`dFSlider`,`mV5Bar`,`dV5Bar`].map(e=>document.getElementById(e)).filter(Boolean).forEach(e=>{e.style.pointerEvents=`none`,e.style.opacity=`.5`});return}if(a>o){let n=e.soldDelta;if(wt(`${n} slot${n>1?`s`:``} sold while you were viewing — your selection adjusted to max ${o}.`,`gold`),r)try{Ae(o,`mobile`,t)}catch{}if(i)try{Ae(o,`desktop`,t)}catch{}let a=[`mFManual`,`dFManual`].map(e=>document.getElementById(e)).filter(Boolean),s=[`mV5Manual`,`dV5Manual`].map(e=>document.getElementById(e)).filter(Boolean);[...a,...s].forEach(e=>{e.max=o}),[`mFSlider`,`dFSlider`].forEach(e=>{let t=document.getElementById(e);t&&(t.dataset.max=String(o))})}else{let t=e.soldDelta;wt(`${t} slot${t>1?`s`:``} just sold · ${o} remaining`,`gold`)}}function wt(e,t){document.querySelectorAll(`.detail-poll-banner`).forEach(e=>e.remove());let n=t===`red`?`var(--red)`:`var(--gold)`,r=t===`red`?`var(--red-l)`:`var(--gold-d)`,i=document.createElement(`div`);if(i.className=`detail-poll-banner`,i.style.cssText=`position:fixed;top:20px;left:50%;transform:translateX(-50%);background:${r};border:1px solid ${n};color:${n};padding:10px 18px;border-radius:8px;font-size:12px;font-weight:600;z-index:300;box-shadow:0 8px 24px rgba(0,0,0,.4);animation:slideDown .25s ease-out;max-width:90vw;text-align:center`,i.textContent=e,document.body.appendChild(i),!document.getElementById(`_pollBannerStyles`)){let e=document.createElement(`style`);e.id=`_pollBannerStyles`,e.textContent=`@keyframes slideDown{from{opacity:0;transform:translate(-50%,-20px)}to{opacity:1;transform:translate(-50%,0)}}`,document.head.appendChild(e)}setTimeout(()=>{i.style.transition=`opacity .3s`,i.style.opacity=`0`,setTimeout(()=>i.remove(),300)},4e3)}function Tt(){window._poll.marketInt||(window._poll.lastSnapshot=bt(),console.log(`[poll] Marketplace polling started (15s)`),window._poll.marketInt=setInterval(xt,15e3))}function Et(){window._poll.marketInt&&(clearInterval(window._poll.marketInt),window._poll.marketInt=null,console.log(`[poll] Marketplace polling stopped`))}function Dt(e){Ot(),window._poll.detailItemId=Number(e),window._poll.lastSnapshot=bt(),console.log(`[poll] Detail polling started for item #${e} (5s)`),window._poll.detailInt=setInterval(xt,5e3)}function Ot(){window._poll.detailInt&&(clearInterval(window._poll.detailInt),window._poll.detailInt=null),window._poll.detailItemId=null}let kt=window.navTo;window.navTo=function(e){e!==`market`&&Et(),e!==`detail`&&Ot(),kt(e),e===`market`&&Tt()};let At=window.openItemDetail;window.openItemDetail=function(e){At(e),Dt(e),Et()},document.addEventListener(`visibilitychange`,()=>{!document.hidden&&(window._poll.marketInt||window._poll.detailInt)&&(console.log(`[poll] Tab visible — immediate sync`),xt())}),window.addEventListener(`beforeunload`,()=>{Et(),Ot()}),console.log(`[snap5] real-time polling loaded`),window._tm={step:1,type:`mixed`,capital:5e3,selectedItems:[],days:90};function jt(){window._tm={step:1,type:`mixed`,capital:5e3,selectedItems:[],days:90};let e=Mt(),t=document.getElementById(`dSmartContent`),n=document.getElementById(`mSmartContent`),r=window.innerWidth<=768;t&&(t.innerHTML=r?``:e),n&&(n.innerHTML=r?e:``),Pt(1)}function Mt(){return`
  <div class="tm-wrap">
    <div class="tm-head">
      <span class="tm-head-l" id="tm-head-title">Smart Invest · Time Machine</span>
      <span class="tm-head-r" id="tm-head-meta">STEP 1 OF 4</span>
    </div>
    
    <!-- PAGE 1: TYPE -->
    <div class="tm-page active" data-tm-step="1">
      <div class="tm-body">
        <div class="tm-pre">Step 1</div>
        <h2 class="tm-h">Where do you want<br>your <em>capital</em>?</h2>
        <p class="tm-sub">Three paths. Each behaves differently — pools work continuously, objects sell in cycles, mixed combines both.</p>
        
        <div class="tm-choices">
          <div class="tm-choice" onclick="_tmChooseType(this,'pools')">
            <div class="tm-choice-icon">P</div>
            <div class="tm-choice-body">
              <div class="tm-choice-name">Pools only</div>
              <div class="tm-choice-meta">Continuous compound · steady, predictable yield<br>Silver / Gold / Platinum tiers depending on capital</div>
            </div>
            <div class="tm-choice-arr">→</div>
          </div>
          <div class="tm-choice" onclick="_tmChooseType(this,'items')">
            <div class="tm-choice-icon">O</div>
            <div class="tm-choice-body">
              <div class="tm-choice-name">Objects only</div>
              <div class="tm-choice-meta">Cycles of ~30 days · we curate items that fit your capital<br>Sold at market, then you can reinvest</div>
            </div>
            <div class="tm-choice-arr">→</div>
          </div>
          <div class="tm-choice selected" onclick="_tmChooseType(this,'mixed')">
            <div class="tm-choice-icon">M</div>
            <div class="tm-choice-body">
              <div class="tm-choice-name">Mixed</div>
              <div class="tm-choice-meta">60% pools (continuous yield) + 40% objects (cycles)<br>Best balance of stability and upside</div>
            </div>
            <div class="tm-choice-arr">→</div>
          </div>
        </div>
        
        <div class="tm-nav-row">
          <button class="tm-nav-back" disabled style="visibility:hidden">Back</button>
          <button class="tm-nav-next" onclick="_tmNext()">Continue →</button>
        </div>
      </div>
    </div>
    
    <!-- PAGE 2: AMOUNT -->
    <div class="tm-page" data-tm-step="2">
      <div class="tm-body">
        <div class="tm-pre">Step 2</div>
        <h2 class="tm-h" id="tm-step2-h">How much?</h2>
        <p class="tm-sub" id="tm-step2-sub">Your initial commitment.</p>
        
        <div class="tm-amt-display">
          <span class="tm-amt-pre">$</span>
          <span class="tm-amt-num" id="tm-amt-num">5,000</span>
          <span class="tm-amt-cents">.00</span>
        </div>
        
        <div class="tm-presets">
          <button class="tm-preset" onclick="_tmSetAmt(1000)">$1K</button>
          <button class="tm-preset" onclick="_tmSetAmt(5000)">$5K</button>
          <button class="tm-preset" onclick="_tmSetAmt(10000)">$10K</button>
          <button class="tm-preset" onclick="_tmSetAmt(25000)">$25K</button>
          <button class="tm-preset" onclick="_tmSetAmt(50000)">$50K</button>
        </div>
        
        <div class="tm-strat-note" id="tm-amt-note" style="margin-top:24px;display:none">
          <div class="tm-note-icon">i</div>
          <div class="tm-note-body" id="tm-amt-note-text"></div>
        </div>
        
        <div style="flex:1"></div>
        
        <div class="tm-nav-row">
          <button class="tm-nav-back" onclick="_tmBack()">← Back</button>
          <button class="tm-nav-next" onclick="_tmNext()">Continue →</button>
        </div>
      </div>
    </div>
    
    <!-- PAGE 3: ITEM PICK -->
    <div class="tm-page" data-tm-step="3">
      <div class="tm-body">
        <div class="tm-pre">Step 3</div>
        <h2 class="tm-h" id="tm-step3-h">Pick objects</h2>
        <p class="tm-sub" id="tm-step3-sub">Tap to select. Total selected price should fit your budget.</p>
        
        <div class="tm-items-grid" id="tm-items-grid"></div>
        
        <div class="tm-items-summary" id="tm-items-summary">
          <span>Selected: <strong id="tm-items-count">0</strong> · allocated <strong id="tm-items-allocated">$0</strong> of <strong id="tm-items-budget">$0</strong></span>
          <span class="tm-items-leftover" id="tm-items-leftover"></span>
        </div>
        
        <div style="flex:1"></div>
        
        <div class="tm-nav-row">
          <button class="tm-nav-back" onclick="_tmBack()">← Back</button>
          <button class="tm-nav-next" onclick="_tmNext()">See projection →</button>
        </div>
      </div>
    </div>
    
    <!-- PAGE 4: GRAPH -->
    <div class="tm-page" data-tm-step="4">
      <div class="tm-body">
        <div class="tm-top-row">
          <div>
            <div class="tm-top-cell-l" id="tm-today-label">TODAY</div>
            <div class="tm-top-cell-amt"><span class="tm-top-cell-pre">$</span><span class="tm-top-cell-num" id="tm-today">5,000</span></div>
            <div class="tm-top-cell-meta">Capital deployed</div>
          </div>
          <div class="tm-top-divider"></div>
          <div>
            <div class="tm-top-cell-l" id="tm-future-label">+ 90 DAYS</div>
            <div class="tm-top-cell-amt"><span class="tm-top-cell-pre">$</span><span class="tm-top-cell-num future" id="tm-future">5,900</span></div>
            <div class="tm-top-cell-meta">Projected · <strong id="tm-gain">+$900 (+18.0%)</strong></div>
          </div>
        </div>
        
        <div class="tm-graph-wrap">
          <div class="tm-graph-h">
            <span class="tm-graph-tag" id="tm-graph-tag">PROJECTED GROWTH</span>
            <div class="tm-graph-pct">
              <span class="tm-graph-pct-v" id="tm-graph-pct">+18.0%</span>
              <span class="tm-graph-pct-l">at <span id="tm-graph-time">90 days</span></span>
            </div>
          </div>
          <div class="tm-graph">
            <svg viewBox="0 0 600 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="tm-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#00d4a3" stop-opacity="0.5"/>
                  <stop offset="100%" stop-color="#00d4a3" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <path class="tm-graph-fill" id="tm-fill"/>
              <path class="tm-graph-line" id="tm-line"/>
              <g id="tm-cycles"></g>
              <line class="tm-graph-cursor" id="tm-cursor" x1="180" y1="0" x2="180" y2="200"/>
              <circle class="tm-graph-thumb-glow" id="tm-thumb-glow" cx="180" cy="100" r="14"/>
              <circle class="tm-graph-thumb" id="tm-thumb" cx="180" cy="100" r="8"/>
            </svg>
          </div>
          <div class="tm-time-marks">
            <span>Today</span><span>30d</span><span>60d</span><span>90d</span><span>180d</span><span>1 year</span>
          </div>
          <div class="tm-slider-wrap">
            <input class="tm-slider" id="tm-slider" type="range" min="7" max="365" value="90" 
                   style="--pct:25%" oninput="_tmSlide(this.value)">
          </div>
        </div>
        
        <div class="tm-strat-note" id="tm-graph-note">
          <div class="tm-note-icon">i</div>
          <div class="tm-note-body" id="tm-graph-note-body"></div>
        </div>
        <div class="tm-strat-note tm-note-warn" id="tm-graph-warn" style="display:none;margin-top:8px">
          <div class="tm-note-icon">!</div>
          <div class="tm-note-body" id="tm-graph-warn-body"></div>
        </div>
        
        <div class="tm-cta-row" style="margin-top:18px">
          <div>
            <div class="tm-cta-info-l">DEPLOYING</div>
            <div class="tm-cta-info-v">$<span id="tm-cta-cap">5,000</span> · projected <strong>+$<span id="tm-cta-gain">900</span> in <span id="tm-cta-days">90 days</span></strong></div>
          </div>
          <button class="tm-cta-btn" onclick="_tmDeploy()">Deploy now →</button>
        </div>
        
        <div class="tm-nav-row">
          <button class="tm-nav-back" onclick="_tmBack()">← Edit selection</button>
        </div>
      </div>
    </div>
  </div>
  `}function Nt(){let e=n!==void 0&&Array.isArray(n)?n:[];return e.length>0?e.filter(e=>(e.slots_available||20)>0).map(e=>({id:e.id,brand:(e.brand||e.name||`Item`).toUpperCase(),name:e.name||``,price:+e.price_per_slot||500,retMin:C(e),retMax:S(e),days:e.days?e.days[1]:30,ico:(e.brand||e.name||`X`).substring(0,2).toUpperCase()})):[{id:1,brand:`ROLEX`,name:`Daytona 116500`,price:1500,retMin:15,retMax:30,days:30,ico:`RX`},{id:2,brand:`PATEK`,name:`Nautilus 5711`,price:4e3,retMin:20,retMax:40,days:35,ico:`PK`},{id:3,brand:`HERMÈS`,name:`Birkin 30 Black`,price:600,retMin:10,retMax:18,days:45,ico:`HM`},{id:4,brand:`AUDEMARS`,name:`Royal Oak`,price:2250,retMin:18,retMax:35,days:30,ico:`AP`},{id:5,brand:`CARTIER`,name:`Tank Louis`,price:800,retMin:12,retMax:22,days:40,ico:`CT`},{id:6,brand:`LOUIS VUITTON`,name:`Trunk Monogram`,price:500,retMin:8,retMax:16,days:50,ico:`LV`},{id:7,brand:`CHANEL`,name:`Classic Flap`,price:700,retMin:10,retMax:20,days:45,ico:`CH`},{id:8,brand:`BVLGARI`,name:`Serpenti Gold`,price:1200,retMin:14,retMax:28,days:35,ico:`BV`}]}function Pt(e){document.querySelectorAll(`.tm-page`).forEach(e=>e.classList.remove(`active`));let t=document.querySelector(`.tm-page[data-tm-step="${e}"]`);t&&t.classList.add(`active`),window._tm.step=e;let n=window._tm.type===`pools`?3:4,r=e;window._tm.type===`pools`&&e===4&&(r=3);let i=document.getElementById(`tm-head-meta`);if(i&&(i.textContent=`STEP ${r} OF ${n}`),e===2&&Ft(),e===3&&window._tm.type===`pools`){setTimeout(()=>Pt(4),50);return}e===3&&Lt(),e===4&&Vt()}function Ft(){let e=document.getElementById(`tm-step2-h`),t=document.getElementById(`tm-step2-sub`);!e||!t||(window._tm.type===`pools`?(e.innerHTML=`How much in <em>pools</em>?`,t.textContent=`Capital decides which compound rhythm we use. Less than $10K → weekly. More than $10K → monthly.`):window._tm.type===`items`?(e.innerHTML=`Your <em>budget</em>?`,t.textContent=`We'll curate objects from our catalog that fit this amount. The remainder stays liquid.`):(e.innerHTML=`How much?`,t.textContent=`Mixed split — about 60% to pools, 40% across objects we curate for you.`),It())}function It(){let e=document.getElementById(`tm-amt-note`),t=document.getElementById(`tm-amt-note-text`);if(!e||!t)return;e.style.display=``;let n=``,r=window._tm.capital;if(window._tm.type===`pools`)n=r<1e4?`<strong>Weekly compound mode.</strong> With $${r.toLocaleString()}, we use Silver/Gold pools at ~3% per week. You'll need to <strong>re-enter positions weekly</strong> to compound — we'll send a reminder.`:`<strong>Monthly compound mode.</strong> With $${r.toLocaleString()}, you qualify for Platinum tier at ~15% per month. Auto-rolls each month — no manual re-entry needed.`;else if(window._tm.type===`items`)n=`Found <strong>${Nt().filter(e=>e.price<=r).length} objects</strong> that fit your $${r.toLocaleString()} budget. Average return per cycle: ~18-22% over 30 days. After sale, capital + profit can be reinvested into the next cycle.`;else{let e=Math.round(r*.6),t=r-e;n=`<strong>Mixed allocation:</strong> $${e.toLocaleString()} → pools (continuous compound) + $${t.toLocaleString()} → objects (cycles). Pools work non-stop while objects sell in ~30-45 day cycles.`}t.innerHTML=n}function Lt(){let e=document.getElementById(`tm-step3-h`),t=document.getElementById(`tm-step3-sub`),n=document.getElementById(`tm-items-grid`);if(!e||!t||!n)return;let r=window._tm.capital,i=window._tm.type===`mixed`?Math.round(r*.4):r;window._tm.type===`mixed`?(e.innerHTML=`Pick objects (~40% of <em>$${r.toLocaleString()}</em>)`,t.textContent=`Around $${i.toLocaleString()} goes to objects, the rest to pools. Pick items totaling near this budget.`):(e.innerHTML=`Items that fit <em>$${r.toLocaleString()}</em>`,t.textContent=`Tap to select. Total selected price should fit your budget.`);let a=Nt().filter(e=>e.price<=i);if(window._tm.selectedItems.length===0){let e=0;for(let t of a)if(e+t.price<=i&&(window._tm.selectedItems.push(t),e+=t.price),window._tm.selectedItems.length>=3)break}n.innerHTML=a.map(e=>`
      <div class="tm-item-card ${window._tm.selectedItems.find(t=>t.id===e.id)?`selected`:``}" data-tm-id="${e.id}" onclick="_tmToggleItem(${e.id})">
        <div class="tm-item-thumb">${e.ico}</div>
        <div class="tm-item-info">
          <div class="tm-item-brand">${e.brand}</div>
          <div class="tm-item-name">${e.name}</div>
          <div class="tm-item-meta">
            <span class="price">$${e.price.toLocaleString()}</span>
            <span>·</span>
            <span class="ret">+${e.retMin}-${e.retMax}%</span>
            <span>·</span>
            <span>${e.days}d</span>
          </div>
        </div>
      </div>
    `).join(``),Rt()}function Rt(){let e=window._tm.selectedItems.reduce((e,t)=>e+t.price,0),t=window._tm.capital;document.getElementById(`tm-items-count`).textContent=window._tm.selectedItems.length,document.getElementById(`tm-items-allocated`).textContent=`$`+e.toLocaleString(),document.getElementById(`tm-items-budget`).textContent=`$`+t.toLocaleString();let n=t-e,r=document.getElementById(`tm-items-leftover`);r&&(window._tm.type===`items`?r.textContent=n>0?`$${n.toLocaleString()} liquid`:`fully allocated`:r.textContent=`$${n.toLocaleString()} → pools`)}function zt(e){let t=[],n=window._tm.capital,r=window._tm.selectedItems.reduce((e,t)=>e+t.price,0),i=n-r,a=0,o=0;window._tm.selectedItems.length>0&&(a=window._tm.selectedItems.reduce((e,t)=>e+t.days,0)/window._tm.selectedItems.length,o=window._tm.selectedItems.reduce((e,t)=>e+(t.retMin+t.retMax)/2,0)/window._tm.selectedItems.length);let s=Math.max(1,Math.floor(e/60));for(let c=0;c<=e;c+=s){let e=0;if(window._tm.type===`pools`)e=n<1e4?n*1.03**(c/7):n*1.15**(c/30);else if(window._tm.type===`items`){let t=a||30,i=o/100||.18,s=Math.floor(c/t),l=c%t/t,u=r*(1+i)**+s;u+=u*i*l,e=u+(n-r)}else{let t;t=i<1e4?i*1.03**(c/7):i*1.15**(c/30);let s=0;if(window._tm.selectedItems.length>0){let e=a,t=o/100,n=Math.floor(c/e),i=c%e/e;s=r*(1+t)**+n,s+=s*t*i}else s=n-i;e=t+s}t.push({day:c,value:e})}return t}function Bt(e,t,n){if(!e.length)return{path:``,toX:()=>0,toY:()=>0};let r=e[e.length-1].day||1,i=Math.min(...e.map(e=>e.value)),a=Math.max(...e.map(e=>e.value)),o=Math.max(a-i,1),s=n-20-20,c=e=>e/r*t,l=e=>n-20-(e-i)/o*s,u=`M ${c(e[0].day)} ${l(e[0].value)}`;for(let t=1;t<e.length;t++)u+=` L ${c(e[t].day)} ${l(e[t].value)}`;return{path:u,toX:c,toY:l}}function Vt(){document.getElementById(`tm-today`).textContent=window._tm.capital.toLocaleString(),document.getElementById(`tm-cta-cap`).textContent=window._tm.capital.toLocaleString(),window._tm.days=90;let e=document.getElementById(`tm-slider`);e&&(e.value=90),Ht(),Wt(),Gt()}function Ht(){let e=zt(365),t=Bt(e,600,200),n=document.getElementById(`tm-line`),r=document.getElementById(`tm-fill`);n&&n.setAttribute(`d`,t.path),r&&r.setAttribute(`d`,t.path+` L ${t.toX(e[e.length-1].day)} 200 L ${t.toX(e[0].day)} 200 Z`);let i=document.getElementById(`tm-cycles`);if(i&&(i.innerHTML=``,window._tm.selectedItems.length>0&&(window._tm.type===`items`||window._tm.type===`mixed`))){let n=window._tm.selectedItems.reduce((e,t)=>e+t.days,0)/window._tm.selectedItems.length,r=n,a=``;for(;r<=365;){let i=t.toX(r),o=e.find(e=>e.day>=r)||e[e.length-1];a+=`<line class="tm-graph-cycle" x1="${i}" y1="20" x2="${i}" y2="180"/>`,a+=`<circle class="tm-graph-cycle-dot" cx="${i}" cy="${t.toY(o.value)}" r="3"/>`,r+=n}i.innerHTML=a}Ut()}function Ut(){let e=zt(365),t=Bt(e,600,200),n=e.reduce((e,t)=>Math.abs(t.day-window._tm.days)<Math.abs(e.day-window._tm.days)?t:e,e[0]),r=t.toX(n.day),i=t.toY(n.value),a=document.getElementById(`tm-cursor`);a&&(a.setAttribute(`x1`,r),a.setAttribute(`x2`,r)),[`tm-thumb`,`tm-thumb-glow`].forEach(e=>{let t=document.getElementById(e);t&&(t.setAttribute(`cx`,r),t.setAttribute(`cy`,i))})}function Wt(){let e=zt(window._tm.days),t=e[e.length-1].value,n=t-window._tm.capital,r=n/window._tm.capital*100;document.getElementById(`tm-future`).textContent=Math.round(t).toLocaleString(),document.getElementById(`tm-gain`).textContent=`+$${Math.round(n).toLocaleString()} (+${r.toFixed(1)}%)`,document.getElementById(`tm-graph-pct`).textContent=`+${r.toFixed(1)}%`,document.getElementById(`tm-cta-gain`).textContent=Math.round(n).toLocaleString(),document.getElementById(`tm-cta-days`).textContent=window._tm.days+` days`;let i=window._tm.days+` days`;window._tm.days>=365&&(i=`1 year`),document.getElementById(`tm-graph-time`).textContent=i;let a=new Date,o=new Date(a.getTime()+window._tm.days*24*60*60*1e3),s=[`JAN`,`FEB`,`MAR`,`APR`,`MAY`,`JUN`,`JUL`,`AUG`,`SEP`,`OCT`,`NOV`,`DEC`];document.getElementById(`tm-future-label`).textContent=`+ ${window._tm.days} DAYS · ${o.getDate()} ${s[o.getMonth()]} ${o.getFullYear()}`,document.getElementById(`tm-today-label`).textContent=`TODAY · ${a.getDate()} ${s[a.getMonth()]} ${a.getFullYear()}`;let c=(window._tm.days-7)/358*100,l=document.getElementById(`tm-slider`);l&&l.style.setProperty(`--pct`,c+`%`)}function Gt(){let e=document.getElementById(`tm-graph-note-body`),t=document.getElementById(`tm-graph-warn`),n=document.getElementById(`tm-graph-warn-body`),r=document.getElementById(`tm-graph-tag`);if(!e||!r)return;let i=window._tm.capital;if(window._tm.type===`pools`)i<1e4?(r.textContent=`WEEKLY COMPOUND`,e.innerHTML=`<strong>Pools-only · weekly compound.</strong> Your $${i.toLocaleString()} grows at ~3% per week, geometrically compounded. The curve is exponential — gains accelerate over time.`,t&&(t.style.display=``,n.innerHTML=`<strong>Manual reinvest required.</strong> Each week you'll need to re-enter positions to compound returns. We'll send a reminder.`)):(r.textContent=`MONTHLY COMPOUND`,e.innerHTML=`<strong>Pools-only · monthly compound.</strong> $${i.toLocaleString()} qualifies for Platinum tier at ~15% per month. Compounds geometrically.`,t&&(t.style.display=``,n.innerHTML=`<strong>Auto-rolls each month.</strong> No manual re-entry. Capital + earned interest both work next month.`));else if(window._tm.type===`items`){let i=Math.round(window._tm.selectedItems.reduce((e,t)=>e+t.days,0)/Math.max(window._tm.selectedItems.length,1)),a=Math.round(window._tm.selectedItems.reduce((e,t)=>e+(t.retMin+t.retMax)/2,0)/Math.max(window._tm.selectedItems.length,1));r.textContent=`OBJECT CYCLES`,e.innerHTML=`<strong>${window._tm.selectedItems.length} objects · ~${i}-day cycles.</strong> Each object sells in ~${i} days at +${a}% on average. Capital + profit roll into the next cycle. Vertical gold lines on the graph mark expected sale dates.`,t&&(t.style.display=``,n.innerHTML=`<strong>Reinvest after each cycle.</strong> When objects sell, capital returns to your wallet — you can reinvest into new objects to compound the cycle gains.`)}else{let a=Math.round(i*.6),o=i-a,s=window._tm.selectedItems.length>0?Math.round(window._tm.selectedItems.reduce((e,t)=>e+t.days,0)/window._tm.selectedItems.length):30;a<1e4?(r.textContent=`MIXED · WEEKLY POOLS`,e.innerHTML=`<strong>Mixed strategy.</strong> $${a.toLocaleString()} in Gold pools (~3% weekly compound) + $${o.toLocaleString()} across ${window._tm.selectedItems.length} objects (~${s}-day cycles). Pools work continuously, objects in cycles.`,t&&(t.style.display=``,n.innerHTML=`<strong>Pools require weekly reinvest</strong> to compound. Items auto-sell in cycles — proceeds return to wallet for reinvest.`)):(r.textContent=`MIXED · MONTHLY POOLS`,e.innerHTML=`<strong>Mixed strategy.</strong> $${a.toLocaleString()} in Platinum pools (~15% monthly auto-roll) + $${o.toLocaleString()} across ${window._tm.selectedItems.length} objects (~${s}-day cycles).`,t&&(t.style.display=`none`))}}window.LX&&LX.iconHTML&&LX.iconHTML(`star`,16),window._smartMarketCache=null,window._smartItemsBasket={A:null,B:null},console.log(`[stage3-6] Smart Invest engine + items + API + bonus loaded`),console.log(`[stage2] Smart Invest wizard UI loaded (no calculations yet — Stage 3)`),(function(){if(document.getElementById(`toastStack`))return;let e=document.createElement(`div`);e.id=`toastStack`,e.className=`toast-stack`,document.body.appendChild(e)})();function Y(e,t,n,r){return window.Toast&&Toast.show?Toast.show({type:e||`info`,title:t||``,message:n||``,html:!0,duration:r===void 0?3500:r}):null}function X(){let e=0;s!==void 0&&(Array.isArray(s.positions)&&(e+=s.positions.reduce((e,t)=>e+(Number(t.amount||t.amount_usd)||0),0)),Array.isArray(s.myItems)&&(e+=s.myItems.filter(e=>e.status===`active`).reduce((e,t)=>e+(Number(t.invested)||0),0)));let t=s!==void 0&&s.wallet?Number(s.wallet):0,n=0,r=0;s!==void 0&&Array.isArray(s.txs)&&s.txs.forEach(e=>{let t=e.status||``;if(t!==`processing`&&t!==`pending`)return;let i=Number(e._amount)||0,a=e._type||``;if(!i||!a){let t=(e.desc||``).match(/\$([\d,.]+)/);i=t?parseFloat(t[1].replace(/,/g,``)):0,/withdraw/i.test(e.desc||``)?a=`withdrawal`:/deposit/i.test(e.desc||``)&&(a=`deposit`)}a===`withdrawal`?r+=i:a===`deposit`&&(n+=i)});let i=n+r,a=typeof fmtMoney==`function`?fmtMoney:e=>`$`+Math.round(e).toLocaleString(),o=typeof W==`function`;[`dInvAmt`,`mInvAmt`].forEach(t=>{let n=document.getElementById(t);n&&(o?W(n,e):n.textContent=a(e))}),[`dAvailAmt`,`mAvailAmt`].forEach(e=>{let n=document.getElementById(e);n&&(o?W(n,t):n.textContent=a(t))});let c=i>0;if([`dPendingCol`,`mPendingCol`].forEach(e=>{let t=document.getElementById(e);t&&(t.style.display=c?``:`none`)}),c){[`dPendAmt`,`mPendAmt`].forEach(e=>{let t=document.getElementById(e);t&&(o?W(t,i):t.textContent=a(i))});let e=``;e=n>0&&r>0?`deposit + withdraw`:n>0?`deposit awaiting confirmation`:`withdrawal pending approval`;let t=document.getElementById(`dPendDesc`);t&&(t.textContent=e)}}if(typeof F==`function`){let e=F;window.updateUI=function(){e.apply(this,arguments);try{X()}catch{}}}setTimeout(()=>{try{X()}catch{}},1500),console.log(`[stage7] Toast + confirm modal + balance split loaded`);let Kt={Silver:{monthlyPct:15,label:`Silver Pool`,icon:`●`},Gold:{monthlyPct:13.04,label:`Gold Pool`,icon:window.LX&&LX.iconHTML?LX.iconHTML(`star`,16):`★`},Platinum:{monthlyPct:15,label:`Platinum Pool`,icon:`◆`}};function qt(){let e=Yt(),t=document.getElementById(`dCalcContent`),n=document.getElementById(`mCalcContent`),r=window.innerWidth<=768;t&&(t.innerHTML=r?``:e),n&&(n.innerHTML=r?e:``),Xt(3);let i=document.getElementById(`pcMonthsSlider`);i&&i.addEventListener(`input`,e=>Xt(parseInt(e.target.value)))}function Jt(){let e=[],t={};s!==void 0&&(Array.isArray(s.positions)&&s.positions.forEach(t=>{if(t.status===`active`||!t.status){let n=t.plan||t.pool_plan||`Silver`,r=Number(t.amount||t.amount_usd)||0;if(r>0){let i=t.created_at?new Date(t.created_at).toLocaleDateString(void 0,{month:`short`,day:`numeric`}):t.date?new Date(t.date).toLocaleDateString(void 0,{month:`short`,day:`numeric`}):``;e.push({plan:n,amount:r,id:t.id,dateStr:i})}}}),Array.isArray(s.myItems)&&s.myItems.filter(e=>e.status===`active`).forEach(e=>{let n=e.id||e.item_id||e.name,r=Number(e.invested)||0,i=Number(e.pct)||0,a=Number(e.ret)||Number(e.retMax)||Number(e.guaranteed)||10,o=Number(e.daysTotal)||90;r<=0||(t[n]||(t[n]={id:n,name:e.name,image_url:e.image_url||``,invested:0,pct:0,retPct:a,days:o,count:0}),t[n].invested+=r,t[n].pct+=i,t[n].count+=1)}));let n=Object.values(t);return{pools:e,items:n,itemsInvested:n.reduce((e,t)=>e+t.invested,0),itemsCount:n.length,itemsTotalPositions:Object.values(t).reduce((e,t)=>e+t.count,0)}}function Yt(){let e=Jt();return e.pools.reduce((e,t)=>e+t.amount,0)>0||e.itemsInvested>0?`
  <div class="pc-wrap">
    <div class="pc-head">
      <div class="pc-tag">
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><use href="#i-calc"/></svg>
        PROFIT CALCULATOR
      </div>
      <div class="pc-title">Your <em>earnings</em> forecast</div>
      <p class="pc-sub">Pick a time horizon to see how much your existing investments will earn at fixed pool rates.</p>
    </div>

    <div class="pc-card">
      <div class="pc-card-h">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        TIME HORIZON
      </div>
      <div class="pc-slider-row">
        <div class="pc-slider-val" id="pcMonthsVal">3 months</div>
        <input type="range" id="pcMonthsSlider" class="pc-slider" min="1" max="12" step="1" value="3">
      </div>
      <div class="pc-slider-marks">
        <span>1 mo</span><span>3 mo</span><span>6 mo</span><span>12 mo</span>
      </div>
    </div>

    <div class="pc-card" id="pcPoolsCard" style="display:none">
      <div class="pc-card-h">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 L4 6 V12 C4 17 8 21 12 22 C16 21 20 17 20 12 V6 Z"/></svg>
        YOUR ACTIVE POOLS
      </div>
      <div class="pc-pool-list" id="pcPoolList"></div>
    </div>

    <div class="pc-card" id="pcItemsCard" style="display:none">
      <div class="pc-card-h">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3 H18 L22 9 L12 22 L2 9 Z"/></svg>
        YOUR LUXURY ITEMS
      </div>
      <div class="pc-pool-list" id="pcItemList"></div>
    </div>

    <div class="pc-summary pc-summary-v2">
      <div>
        <div class="l">INVESTED</div>
        <div class="v" id="pcInvested">$0</div>
      </div>
      <div class="pc-sum-op">+</div>
      <div>
        <div class="l">PROFIT · <span id="pcPeriod">3 months</span></div>
        <div class="v" id="pcProfit">$0</div>
      </div>
      <div class="pc-sum-op">=</div>
      <div>
        <div class="l">FINAL BALANCE</div>
        <div class="v" id="pcEndBal">$0</div>
      </div>
    </div>
  </div>`:`
    <div class="pc-wrap">
      <div class="pc-head">
        <div class="pc-tag">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><use href="#i-calc"/></svg>
          PROFIT CALCULATOR
        </div>
        <div class="pc-title">See your <em>earnings</em> forecast</div>
        <p class="pc-sub">This calculator shows projected profits based on your existing investments.</p>
      </div>

      <div class="pc-empty">
        <div class="pc-empty-ic"></div>
        <div class="pc-empty-h">NO ACTIVE INVESTMENTS</div>
        <div class="pc-empty-d">You don't have any active pool positions or items yet. Once you invest, this calculator will show you projected earnings over any time horizon.</div>
        <div class="pc-empty-cta">
          <button class="pc-empty-btn" onclick="navTo('smart')">TRY SMART INVEST →</button>
          <button class="pc-empty-btn pc-empty-btn-out" onclick="navTo('pools')">BROWSE POOLS</button>
        </div>
      </div>
    </div>`}function Xt(e){let t=Jt(),n=(e,t)=>{let n=document.getElementById(e);n&&(n.textContent=t)},r=e=>`$`+Math.round(e).toLocaleString(),i=e+(e===1?` month`:` months`);n(`pcMonthsVal`,i),n(`pcPeriod`,i);let a=0,o=0,s=document.getElementById(`pcPoolsCard`),c=document.getElementById(`pcPoolList`);s&&(s.style.display=t.pools.length>0?``:`none`),c&&(c.innerHTML=t.pools.map(t=>{let n=Kt[t.plan]||Kt.Silver,s=t.amount*(n.monthlyPct/100)*e;a+=t.amount,o+=s;let c=t.dateStr?`${r(t.amount)} invested · ${n.monthlyPct.toFixed(1)}%/mo · since ${t.dateStr}`:`${r(t.amount)} invested · ${n.monthlyPct.toFixed(1)}%/mo fixed`;return`
        <div class="pc-pool-row">
          <div class="pc-pool-ic">${n.icon}</div>
          <div class="pc-pool-info">
            <div class="n">${n.label}</div>
            <div class="d">${c}</div>
          </div>
          <div class="pc-pool-amt">
            <div class="a">+${r(s)}</div>
            <div class="e">over ${i}</div>
          </div>
        </div>
      `}).join(``));let l=document.getElementById(`pcItemsCard`),u=document.getElementById(`pcItemList`);l&&(l.style.display=t.items.length>0?``:`none`),u&&(u.innerHTML=t.items.map(t=>{let n=Math.max(1,(t.days||90)/30),s=Math.min(1,e/n),c=t.invested*(t.retPct/100)*s;a+=t.invested,o+=c;let l=t.count>1?` · ${t.count} positions`:``,u=`${r(t.invested)} invested · expected +${t.retPct}%${l}`;return`
        <div class="pc-pool-row">
          <div class="pc-pool-ic" style="overflow:hidden">${t.image_url?`<img src="${t.image_url}" style="width:100%;height:100%;object-fit:cover;border-radius:50%" onerror="this.style.display='none'">`:window.LX&&LX.iconHTML?LX.iconHTML(`diamond`,22,`lx-i`):``}</div>
          <div class="pc-pool-info">
            <div class="n">${t.name||`Item`}</div>
            <div class="d">${u}</div>
          </div>
          <div class="pc-pool-amt">
            <div class="a">+${r(c)}</div>
            <div class="e">over ${i}</div>
          </div>
        </div>
      `}).join(``)),n(`pcInvested`,r(a)),n(`pcProfit`,`+`+r(o)),n(`pcEndBal`,r(a+o))}window.openSmartInvestComingSoon=function(){typeof Modal<`u`&&Modal.alert?Modal.alert({title:`✨ SMART INVEST`,message:`Coming soon — AI-powered strategy in 60 seconds.

We are putting the final touches on this premium feature. You will be the first to know when it launches.`,tone:`info`,okText:`Got it`}):alert(`Smart Invest — Coming soon`)};let Zt=[{id:`concept`,icon:`crown`,title:`WHAT IS LUXOR`,desc:`Fractional ownership of luxury assets — explained in 60 seconds`,duration:`1 min`},{id:`pools`,icon:`pool`,title:`HOW POOLS WORK`,desc:`Fixed returns, no surprises. Diversified across many items`,duration:`2 min`},{id:`items`,icon:`diamond`,title:`HOW ITEMS WORK`,desc:`Own a slot of a real Birkin or Rolex — earn when it sells`,duration:`2 min`},{id:`compare`,icon:`scale`,title:`POOLS VS ITEMS`,desc:`Which fits you? Compare strategies side-by-side`,duration:`1 min`},{id:`deposit`,icon:`arrow-down`,title:`HOW TO DEPOSIT`,desc:`Step-by-step crypto top-up guides for any country`,duration:`3 min`},{id:`withdraw`,icon:`arrow-up`,title:`HOW TO WITHDRAW`,desc:`Get your earnings out — fast, secure, low fee`,duration:`2 min`}],Qt={crown:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l4 5 5-7 5 7 4-5v11H3z"/></svg>`,pool:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,diamond:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M11 3L8 9l4 12 4-12-3-6"/><path d="M2 9h20"/></svg>`,scale:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="3" x2="12" y2="21"/><path d="M3 7h18"/><path d="M5 7l-2 6h6L7 7"/><path d="M19 7l-2 6h6l-2-6"/></svg>`,"arrow-down":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M19 12l-7 7-7-7"/></svg>`,"arrow-up":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>`},$t=[{cat:`safety`,q:`Is my money safe?`,a:`Yes. All physical items are stored in <b>insured private vaults</b> (Brinks, Loomis). Your funds in the platform are held separately from operating capital. We never use your money for anything except the investment you chose.`},{cat:`safety`,q:`What if Luxor shuts down?`,a:`In the unlikely event of platform shutdown, all <b>physical items remain your fractional property</b> and would be liquidated, with proceeds returned proportionally. Your wallet balance is also protected — we do not commingle funds.`},{cat:`safety`,q:`Are items authentic?`,a:`Every single item passes <b>3-stage authentication</b>: by our internal experts, by an external partner (Entrupy / Real Authentication), and a third audit before listing. Counterfeits are auto-rejected.`},{cat:`safety`,q:`Is this regulated?`,a:`Luxor operates under fractional ownership commerce — not a securities offering. You buy a <b>real percentage of a real object</b>, not a financial instrument. We comply with all applicable consumer-protection rules in your region.`},{cat:`earnings`,q:`How much can I earn?`,a:`Pools pay <b>fixed</b> returns: Silver 0.5%/day, Gold 3%/week, Platinum 15%/month. Items pay a guaranteed minimum (5–15%) plus a share of profit if the item sells above expectations. Average annualized: 60–180% depending on tier.`},{cat:`earnings`,q:`Are returns guaranteed?`,a:`<b>Pool returns are fixed</b> and paid regardless of market conditions — that is our commitment. <b>Item guaranteed minimums</b> are also paid even if sale is below estimate. <b>Upside</b> beyond minimum depends on actual sale price.`},{cat:`earnings`,q:`When do I get paid?`,a:`Pools pay <b>automatically on schedule</b> (daily / weekly / monthly). Items pay <b>when sold</b> — average sale period is 60-150 days. You can also exit early for 90% of invested.`},{cat:`earnings`,q:`Are taxes withheld?`,a:`No. <b>You are responsible</b> for declaring your earnings to your local tax authority. We provide a full transaction history for download. Consult your accountant — rules vary by country.`},{cat:`investing`,q:`What is the minimum investment?`,a:`Silver pool: <b>$100</b>. Gold pool: <b>$1,000</b>. Platinum pool: <b>$10,000</b>. Individual items: as low as <b>$50/slot</b> for some pieces. You decide your level of involvement.`},{cat:`investing`,q:`Can I exit early?`,a:`Yes. From <b>pools</b>: anytime, with no fee — full principal + accrued earnings. From <b>items</b>: anytime, but you receive 90% of invested (sell-now penalty). Best to hold until pool/item completes naturally.`},{cat:`investing`,q:`Pools vs Items — which is better?`,a:`Pools = <b>predictable + diversified</b>. Items = <b>higher upside + own a real piece</b>. Most members do <b>both</b>: 70% in pools for steady income, 30% in items for ownership and bigger wins.`},{cat:`investing`,q:`What if an item doesn't sell on time?`,a:`You still receive the <b>guaranteed minimum return</b>. We continue selling efforts until completion. Worst case = guaranteed minimum, never less.`},{cat:`withdrawals`,q:`How fast are withdrawals?`,a:`Crypto withdrawals process in <b>5-30 minutes</b>. Once on-chain, network confirmation takes 1-10 minutes depending on network (TRC20 fastest, ~$1 fee).`},{cat:`withdrawals`,q:`Why TRC20 over ERC20?`,a:`Same USDT, much cheaper network. ERC20 fee is $5-15. TRC20 fee is ~$1. <b>Use TRC20 unless you specifically need ERC20</b>.`},{cat:`withdrawals`,q:`Can I withdraw to a bank?`,a:`Not directly. Withdraw to a crypto wallet, then convert to fiat via Coinbase / Binance / Kraken. The deposit guides explain this in reverse.`},{cat:`bonuses`,q:`How does the referral program work?`,a:`You earn <b>10% from every deposit your friends make — for life</b>. At Silver tier (5+ friends) you also earn 5% from L2. At Gold (15+) you earn 7/3% from 3 levels deep. At Diamond (30+) you earn 4 levels deep + $1,500 bonus.`},{cat:`bonuses`,q:`Why is my $50 welcome bonus locked?`,a:`Anti-abuse. Bonus auto-unlocks once you <b>deposit $50+ and hold an investment for 24h</b> — OR <b>invite 3 active friends</b>. Either path works. The bonus is fully yours to invest immediately, just not to instantly withdraw.`}],en=[{id:`all`,label:`All`},{id:`safety`,label:`Safety`},{id:`earnings`,label:`Earnings`},{id:`investing`,label:`Investing`},{id:`withdrawals`,label:`Withdrawals`},{id:`bonuses`,label:`Bonuses`}];window._eduFaqCat=`all`,window._eduCompleted=(()=>{try{return JSON.parse(localStorage.getItem(`luxor_edu_completed`)||`[]`)}catch{return[]}})();function tn(e){if(!window._eduCompleted.includes(e)){window._eduCompleted.push(e);try{localStorage.setItem(`luxor_edu_completed`,JSON.stringify(window._eduCompleted))}catch{}}try{nn()}catch{}}function nn(){let e=`
    <div class="edu-hub">
      <div class="edu-hero">
        <div class="eyebrow">LUXOR ACADEMY</div>
        <h1>LEARN BEFORE<br>YOU INVEST</h1>
        <p>Six bite-sized modules + a FAQ that answers everything. No fluff, no jargon — just the way Luxor actually works.</p>
      </div>

      <div class="edu-section-h">LEARNING MODULES</div>
      <div class="edu-modules">
        ${Zt.map((e,t)=>{let n=window._eduCompleted.includes(e.id);return`<div class="edu-mod-card${n?` completed`:``}" onclick="openEduStory('${e.id}')">
            ${n?`<div class="check">✓</div>`:`<div class="num">${(t+1).toString().padStart(2,`0`)}</div>`}
            <div class="ic">${Qt[e.icon]||``}</div>
            <div class="h">${e.title}</div>
            <div class="d">${e.desc}</div>
            <div class="tag">${n?`★ COMPLETED`:`▶ `+e.duration}</div>
          </div>`}).join(``)}
      </div>

      <div class="edu-sandbox-banner" onclick="openEduSandbox()">
        <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
        <div class="body">
          <div class="h">PRACTICE WITH $1,000</div>
          <div class="d">Try the full investing experience with fake money. No risk, no commitment. Use it before you put real money in.</div>
        </div>
        <div class="arr">→</div>
      </div>

      <div class="edu-section-h">FREQUENTLY ASKED</div>
      <div class="edu-faq-cats" id="eduFaqCats">
        ${en.map(e=>`<div class="edu-faq-cat${window._eduFaqCat===e.id?` active`:``}" data-cat="${e.id}" onclick="setEduFaqCat('${e.id}')">${e.label}</div>`).join(``)}
      </div>
      <div class="edu-faq" id="eduFaqList">
        ${rn()}
      </div>
    </div>
  `;[`eduHubMobileRoot`,`eduHubDesktopRoot`].forEach(t=>{let n=document.getElementById(t);n&&(n.innerHTML=e)})}function rn(){let e=window._eduFaqCat||`all`;return(e===`all`?$t:$t.filter(t=>t.cat===e)).map((e,t)=>`
    <details>
      <summary>
        <div class="q-ic">?</div>
        <div class="q-txt">${e.q}</div>
        <div class="q-arr">+</div>
      </summary>
      <div class="faq-body"><p>${e.a}</p></div>
    </details>
  `).join(``)}window.setEduFaqCat=function(e){window._eduFaqCat=e,document.querySelectorAll(`#eduFaqCats .edu-faq-cat`).forEach(t=>{t.classList.toggle(`active`,t.dataset.cat===e)});let t=document.getElementById(`eduFaqList`);t&&(t.innerHTML=rn())},window.openEduStory=function(e){let t=on[e];if(!t){Toast&&Toast.show&&Toast.show({type:`info`,title:`Coming soon`,message:`This module will be available shortly.`});return}window._eduCurStory={modId:e,idx:0,total:t.length},an()};function an(){let e=window._eduCurStory;if(!e)return;let t=on[e.modId],n=t[e.idx],r=t.map((t,n)=>n<e.idx?`<div class="seg done"></div>`:n===e.idx?`<div class="seg cur"></div>`:`<div class="seg"></div>`).join(``),i=e.idx===e.total-1;q(`
    <div class="edu-story">
      <div class="edu-story-progress">${r}</div>
      <div class="edu-story-stage">
        <div class="l">${(Zt.find(t=>t.id===e.modId)||{}).title||``}</div>
        <div class="r">${e.idx+1} / ${e.total}</div>
      </div>
      <div class="edu-story-canvas">${n.svg}</div>
      <div class="edu-story-text">
        <h3>${n.title}</h3>
        ${n.body.map(e=>`<p>${e}</p>`).join(``)}
      </div>
      <div class="edu-story-nav">
        <button class="prev" onclick="_eduStoryPrev()" ${e.idx===0?`disabled`:``}>← BACK</button>
        <button class="skip" onclick="closeModal()">SKIP</button>
        <button class="next" onclick="${i?`_eduStoryFinish('${e.modId}')`:`_eduStoryNext()`}">${i?`FINISH ✓`:`NEXT →`}</button>
      </div>
    </div>
  `,{wide:!0})}window._eduStoryPrev=function(){window._eduCurStory&&window._eduCurStory.idx>0&&(window._eduCurStory.idx--,an())},window._eduStoryNext=function(){window._eduCurStory&&window._eduCurStory.idx<window._eduCurStory.total-1&&(window._eduCurStory.idx++,an())},window._eduStoryFinish=function(e){tn(e),J()},window.openEduSandbox=function(){window._sb||(window._sb={cash:1e3,pools:[],items:[],totalEarned:0,tab:`pools`}),renderEduSandbox()},window.renderEduSandbox=function(){let e=window._sb;if(!e)return openEduSandbox();let t=e.pools.reduce((e,t)=>e+t.amount,0)+e.items.reduce((e,t)=>e+t.invested,0),n=e.cash+t+e.totalEarned,r=e.totalEarned>0?`+$${e.totalEarned.toFixed(2)}`:`$0.00`,i=``;i=e.tab===`pools`?`
      <div style="font-size:11px;color:var(--t3);letter-spacing:1.5px;margin-bottom:12px;font-family:'Space Mono',monospace;font-weight:700">PICK A POOL</div>
      ${[{tier:`Silver`,rate:`0.5% / day`,ratePct:.5,period:`day`,color:`#a0a0a0`,desc:`Daily payouts · low risk`},{tier:`Gold`,rate:`3% / week`,ratePct:3,period:`week`,color:`#E5C674`,desc:`Most popular · steady`},{tier:`Platinum`,rate:`15% / month`,ratePct:15,period:`month`,color:`#3a7bd5`,desc:`Biggest returns · monthly`}].map(e=>`
        <div class="sb-row" onclick="_sbInvestPool('${e.tier}', ${e.ratePct}, '${e.period}', '${e.color}')">
          <div class="ic" style="background:${e.color}22;color:${e.color}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></div>
          <div class="body">
            <div class="h" style="color:${e.color}">${e.tier.toUpperCase()} POOL</div>
            <div class="d">${e.desc}</div>
          </div>
          <div class="v">${e.rate}</div>
        </div>
      `).join(``)}
    `:e.tab===`items`?`
      <div style="font-size:11px;color:var(--t3);letter-spacing:1.5px;margin-bottom:12px;font-family:'Space Mono',monospace;font-weight:700">PICK AN ITEM (1 SLOT EACH)</div>
      ${[{name:`Birkin 30`,brand:`Hermès`,slot:1e3,exp:25,days:120},{name:`Daytona`,brand:`Rolex`,slot:840,exp:22,days:150},{name:`Krug Vintage`,brand:`Krug`,slot:120,exp:24,days:90}].map(e=>`
        <div class="sb-row" onclick="_sbBuyItem('${e.name.replace(/'/g,`\\'`)}','${e.brand}',${e.slot},${e.exp},${e.days})">
          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"/></svg></div>
          <div class="body">
            <div class="h">${e.name.toUpperCase()}</div>
            <div class="d">${e.brand} · 1 slot = $${e.slot} · ~${e.days} days · expected +${e.exp}%</div>
          </div>
          <div class="v">$${e.slot}</div>
        </div>
      `).join(``)}
    `:e.pools.length===0&&e.items.length===0?`<div style="text-align:center;padding:40px 20px;color:var(--t3);font-size:13px;line-height:1.55">Your portfolio is empty.<br><br>Try investing in a pool or buying an item slot.<br><span style="color:var(--gold);font-weight:700;font-size:11px;letter-spacing:1.5px">↑ TAP POOLS OR ITEMS TAB</span></div>`:`
        ${e.pools.length?`<div style="font-size:11px;color:var(--t3);letter-spacing:1.5px;margin-bottom:8px;font-family:'Space Mono',monospace;font-weight:700">YOUR POOLS</div>`:``}
        ${e.pools.map((e,t)=>{let n=Date.now()-e.started,r=e.period===`day`?864e5:e.period===`week`?7*864e5:30*864e5,i=Math.max(.001,n/r),a=e.amount*(e.ratePct/100)*i;return`<div class="sb-row" style="cursor:default">
            <div class="ic" style="background:${e.color}22;color:${e.color}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></div>
            <div class="body">
              <div class="h" style="color:${e.color}">${e.tier.toUpperCase()}</div>
              <div class="d">$${e.amount.toFixed(2)} · ${e.ratePct}%/${e.period}</div>
            </div>
            <div style="text-align:right">
              <div class="v green">+$${a.toFixed(2)}</div>
              <button onclick="_sbExitPool(${t})" style="margin-top:4px;padding:4px 10px;background:transparent;color:#27ae60;border:1px solid rgba(46,204,113,.4);border-radius:5px;font-size:9.5px;letter-spacing:1px;cursor:pointer;font-weight:700;font-family:'Bebas Neue',sans-serif">EXIT +$${a.toFixed(0)}</button>
            </div>
          </div>`}).join(``)}
        ${e.items.length?`<div style="font-size:11px;color:var(--t3);letter-spacing:1.5px;margin:14px 0 8px;font-family:'Space Mono',monospace;font-weight:700">YOUR ITEMS</div>`:``}
        ${e.items.map((e,t)=>`<div class="sb-row" style="cursor:default">
          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"/></svg></div>
          <div class="body">
            <div class="h">${e.name.toUpperCase()}</div>
            <div class="d">${e.brand} · invested $${e.invested}</div>
          </div>
          <div style="text-align:right">
            <div class="v green">$${e.expected.toFixed(0)}</div>
            <button onclick="_sbSellItem(${t})" style="margin-top:4px;padding:4px 10px;background:linear-gradient(135deg,#27ae60,#2ecc71);color:#fff;border:none;border-radius:5px;font-size:9.5px;letter-spacing:1px;cursor:pointer;font-weight:700;font-family:'Bebas Neue',sans-serif">SELL ✓</button>
          </div>
        </div>`).join(``)}
      `,q(`
    <div class="sb-app">
      <div class="sb-app-header">
        <div>
          <div class="l">SANDBOX BALANCE</div>
          <div class="v">$${n.toFixed(2)}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:9.5px;color:var(--t3);letter-spacing:1.5px;font-family:'Space Mono',monospace;font-weight:700">EARNED</div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:18px;color:#27ae60;font-weight:800;line-height:1;margin-top:2px">${r}</div>
        </div>
        <button class="reset" onclick="_sbReset()">RESET</button>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:10px">
        <div style="font-size:11px;color:var(--t2)">Available cash: <b style="color:var(--gold)">$${e.cash.toFixed(2)}</b></div>
        <div style="font-size:10.5px;color:var(--t3)">Practice mode · no real money</div>
      </div>
      <div class="sb-tabs">
        <div class="t ${e.tab===`pools`?`on`:``}" onclick="_sbSwitchTab('pools')">POOLS</div>
        <div class="t ${e.tab===`items`?`on`:``}" onclick="_sbSwitchTab('items')">ITEMS</div>
        <div class="t ${e.tab===`portfolio`?`on`:``}" onclick="_sbSwitchTab('portfolio')">PORTFOLIO ${e.pools.length+e.items.length?`<span style="font-size:9px;color:var(--gold);font-family:'Space Mono',monospace">(${e.pools.length+e.items.length})</span>`:``}</div>
      </div>
      <div>${i}</div>
      <div style="margin-top:14px;padding:12px 14px;background:rgba(229,198,116,.05);border-left:3px solid var(--gold);border-radius:6px;font-size:11px;color:var(--t3);line-height:1.55">
        <b style="color:var(--gold)">\u24D8</b> This is practice money. Earnings accelerate ×1000 so you see results fast. In real Luxor, returns accrue over actual time periods.
      </div>
    </div>
  `,{wide:!0})},window._sbSwitchTab=function(e){window._sb.tab=e,renderEduSandbox()},window._sbReset=function(){window._sb={cash:1e3,pools:[],items:[],totalEarned:0,tab:`pools`},renderEduSandbox()},window._sbInvestPool=function(e,t,n,r){let i=window._sb;if(i.cash<100){Toast&&Toast.show&&Toast.show({type:`warn`,title:`Not enough cash`,message:`Min $100 to invest. Try selling an item or use RESET.`});return}let a=Math.min(i.cash,e===`Platinum`?500:e===`Gold`?300:200);i.cash-=a,Date.now()-(n===`day`?5*864e5:n===`week`?35*864e5:150*864e5)/1e3,i.pools.push({tier:e,amount:a,started:Date.now()-864e5,ratePct:t,period:n,color:r}),i.tab=`portfolio`,Toast&&Toast.show&&Toast.show({type:`ok`,title:`Invested in ${e}`,message:`$${a.toFixed(0)} now earning ${t}% per ${n}`}),renderEduSandbox()},window._sbExitPool=function(e){let t=window._sb,n=t.pools[e];if(!n)return;let r=Date.now()-n.started,i=n.period===`day`?864e5:n.period===`week`?7*864e5:30*864e5,a=Math.max(.001,r/i),o=n.amount*(n.ratePct/100)*a;t.cash+=n.amount+o,t.totalEarned+=o,t.pools.splice(e,1),Toast&&Toast.show&&Toast.show({type:`ok`,title:`Pool exited`,message:`+$${o.toFixed(2)} earned · principal returned`}),renderEduSandbox()},window._sbBuyItem=function(e,t,n,r,i){let a=window._sb;if(a.cash<n){Toast&&Toast.show&&Toast.show({type:`warn`,title:`Not enough cash`,message:`Need $${n} for 1 slot. You have $${a.cash.toFixed(0)}.`});return}a.cash-=n;let o=n*(1+r/100);a.items.push({name:e,brand:t,slots:1,invested:n,expected:o}),a.tab=`portfolio`,Toast&&Toast.show&&Toast.show({type:`ok`,title:`Bought 1 slot · ${e}`,message:`Will sell in ~${i} days for ~$${o.toFixed(0)}`}),renderEduSandbox()},window._sbSellItem=function(e){let t=window._sb,n=t.items[e];if(!n)return;let r=n.expected-n.invested;t.cash+=n.expected,t.totalEarned+=r,t.items.splice(e,1),Toast&&Toast.show&&Toast.show({type:`ok`,title:`${n.name} sold!`,message:`Profit: +$${r.toFixed(2)} (${(r/n.invested*100).toFixed(1)}%)`}),renderEduSandbox()};let on={concept:[{title:`WELCOME TO LUXOR`,body:[`Buying a <b>Hermès Birkin</b> outright costs $30,000+. A <span class="accent">Rolex Daytona</span>: $42,000. A bottle of <b>vintage Krug</b>: $2,400.`,`Most people can't afford one — let alone build a portfolio.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <!-- 3 luxury items -->
        <g transform="translate(60 130)">
          <rect width="80" height="100" rx="6" fill="#1a1612" stroke="#E5C674" stroke-width="1.5"/>
          <rect x="22" y="10" width="36" height="14" rx="2" fill="#E5C674" opacity=".4"/>
          <rect x="14" y="30" width="52" height="50" rx="3" fill="#0a0a0a"/>
          <text x="40" y="95" font-family="Bebas Neue" font-size="9" fill="#E5C674" text-anchor="middle">BIRKIN</text>
        </g>
        <g transform="translate(160 130)">
          <circle cx="40" cy="50" r="36" fill="#1a1612" stroke="#E5C674" stroke-width="1.5"/>
          <circle cx="40" cy="50" r="26" fill="#0a0a0a" stroke="#E5C674" stroke-width="1"/>
          <rect x="38" y="28" width="4" height="10" fill="#E5C674"/>
          <rect x="50" y="48" width="10" height="4" fill="#E5C674"/>
          <text x="40" y="105" font-family="Bebas Neue" font-size="9" fill="#E5C674" text-anchor="middle">DAYTONA</text>
        </g>
        <g transform="translate(260 130)">
          <path d="M40 0 L60 30 L60 80 Q60 95 40 95 Q20 95 20 80 L20 30 Z" fill="#1a1612" stroke="#E5C674" stroke-width="1.5"/>
          <path d="M30 50 Q40 55 50 50" stroke="#E5C674" stroke-width="1" fill="none"/>
          <text x="40" y="110" font-family="Bebas Neue" font-size="9" fill="#E5C674" text-anchor="middle">KRUG</text>
        </g>
        <!-- Price tags below -->
        <text x="100" y="280" font-family="Space Mono" font-size="14" fill="#fff" text-anchor="middle" font-weight="700">$30,000</text>
        <text x="200" y="280" font-family="Space Mono" font-size="14" fill="#fff" text-anchor="middle" font-weight="700">$42,000</text>
        <text x="300" y="280" font-family="Space Mono" font-size="14" fill="#fff" text-anchor="middle" font-weight="700">$2,400</text>
        <!-- Big lock -->
        <g transform="translate(170 310)" opacity=".7">
          <rect x="3" y="20" width="54" height="40" rx="4" fill="rgba(231,76,60,.15)" stroke="#e74c3c" stroke-width="1.5"/>
          <path d="M14 20V12a16 16 0 1 1 32 0v8" stroke="#e74c3c" stroke-width="1.5" fill="none"/>
          <text x="30" y="46" font-family="Bebas Neue" font-size="14" fill="#e74c3c" text-anchor="middle" font-weight="700">$$$</text>
        </g>
      </svg>`},{title:`THE LUXOR SOLUTION`,body:[`<b>Luxor splits each item into 30–100 slots</b>. You buy one slot — or a hundred.`,`You own a <span class="accent">real percentage of a real Birkin</span>. Not a token, not a derivative — a piece of the actual bag.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Big Birkin -->
        <g transform="translate(140 80)">
          <rect width="120" height="150" rx="10" fill="#1a1612" stroke="#E5C674" stroke-width="2"/>
          <rect x="30" y="14" width="60" height="20" rx="3" fill="#E5C674" opacity=".5"/>
          <rect x="22" y="44" width="76" height="80" rx="4" fill="#0a0a0a"/>
          <circle cx="60" cy="84" r="6" fill="#E5C674"/>
          <text x="60" y="142" font-family="Bebas Neue" font-size="11" fill="#E5C674" text-anchor="middle" font-weight="700">BIRKIN 30</text>
        </g>
        <!-- Slots grid below -->
        <text x="200" y="260" font-family="Space Mono" font-size="11" fill="#888" text-anchor="middle" letter-spacing="2">SPLIT INTO 30 SLOTS</text>
        <g transform="translate(50 280)">
          ${Array.from({length:30},(e,t)=>{let n=t%10,r=Math.floor(t/10),i=n*30,a=r*22,o=t<1;return`<rect x="${i}" y="${a}" width="22" height="16" rx="2" fill="${o?`#E5C674`:`#1a1612`}" stroke="${o?`#F0D78A`:`#E5C674`}" stroke-width="${o?`1.5`:`.7`}" opacity="${o?`1`:`.5`}"/>`}).join(``)}
        </g>
        <text x="200" y="370" font-family="Bebas Neue" font-size="14" fill="#E5C674" text-anchor="middle" font-weight="700" letter-spacing="2">YOUR SLOT = YOUR OWNERSHIP</text>
      </svg>`},{title:`WHEN IT SELLS — YOU EARN`,body:[`Our team finds buyers — typically <b>60-150 days</b>. Sale happens, profits split <span class="accent">proportionally</span> to ownership.`,`<b>Bought 1 slot of a $30,000 Birkin?</b> Birkin sells for $36,000. You get your 1/30 share + your share of the $6,000 profit.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Item icon top -->
        <g transform="translate(170 30)">
          <rect width="60" height="78" rx="6" fill="#1a1612" stroke="#E5C674" stroke-width="1.5"/>
          <rect x="14" y="8" width="32" height="10" rx="2" fill="#E5C674" opacity=".4"/>
          <rect x="10" y="22" width="40" height="40" rx="3" fill="#0a0a0a"/>
        </g>
        <!-- Sold stamp -->
        <g transform="translate(230 50)" opacity=".95">
          <rect width="76" height="32" rx="4" fill="rgba(46,204,113,.18)" stroke="#27ae60" stroke-width="1.5" transform="rotate(8)"/>
          <text x="38" y="22" font-family="Bebas Neue" font-size="14" fill="#27ae60" text-anchor="middle" font-weight="800" letter-spacing="2" transform="rotate(8)">SOLD</text>
        </g>
        <!-- Money flow -->
        <g transform="translate(80 150)">
          <path d="M120 0 L120 40" stroke="#E5C674" stroke-width="2" stroke-dasharray="6 3"/>
          <path d="M114 36L120 44L126 36" stroke="#E5C674" stroke-width="2" fill="none" stroke-linecap="round"/>
        </g>
        <!-- Pie chart of distribution -->
        <g transform="translate(200 240)">
          <circle r="60" fill="rgba(229,198,116,.06)" stroke="#E5C674" stroke-width="1.5"/>
          <!-- Your slice 1/30 -->
          <path d="M0 -60 A60 60 0 0 1 12.4 -58.7 L0 0 Z" fill="#27ae60" opacity=".95"/>
          <text x="0" y="6" font-family="Bebas Neue" font-size="22" fill="#E5C674" text-anchor="middle" font-weight="700">$36K</text>
          <text x="0" y="22" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">SALE PRICE</text>
        </g>
        <!-- Your share callout -->
        <g transform="translate(280 200)">
          <line x1="-50" y1="40" x2="-15" y2="40" stroke="#27ae60" stroke-width="1.2" stroke-dasharray="3 2"/>
          <rect width="100" height="55" rx="6" fill="rgba(46,204,113,.1)" stroke="#27ae60" stroke-width="1.4"/>
          <text x="50" y="20" font-family="Space Mono" font-size="9" fill="#27ae60" text-anchor="middle" font-weight="700" letter-spacing="1.5">YOUR SHARE</text>
          <text x="50" y="40" font-family="Bebas Neue" font-size="20" fill="#27ae60" text-anchor="middle" font-weight="800">$1,200</text>
          <text x="50" y="50" font-family="Space Mono" font-size="8" fill="#888" text-anchor="middle">+20% PROFIT</text>
        </g>
      </svg>`},{title:`TWO WAYS TO INVEST`,body:[`<b>Pools</b>: fixed daily/weekly/monthly returns, diversified across many items. <span class="accent">Predictable income</span>.`,`<b>Items</b>: pick a specific Birkin, Rolex, or bottle of Krug. <span class="accent">Higher upside</span> + you own a piece of a real object.`,`Most members do <b>both</b> — pools for steady, items for upside.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Pools side -->
        <g transform="translate(40 80)">
          <rect width="140" height="220" rx="14" fill="rgba(229,198,116,.06)" stroke="#E5C674" stroke-width="1.5"/>
          <text x="70" y="34" font-family="Bebas Neue" font-size="20" fill="#E5C674" text-anchor="middle" font-weight="700" letter-spacing="2">POOLS</text>
          <line x1="20" y1="48" x2="120" y2="48" stroke="#E5C674" stroke-width=".7" opacity=".4"/>
          <!-- Mini items grid -->
          <g transform="translate(20 60)">
            <rect width="22" height="22" rx="2" fill="rgba(229,198,116,.18)" stroke="#E5C674" stroke-width=".7"/>
            <rect x="28" width="22" height="22" rx="2" fill="rgba(229,198,116,.18)" stroke="#E5C674" stroke-width=".7"/>
            <rect x="56" width="22" height="22" rx="2" fill="rgba(229,198,116,.18)" stroke="#E5C674" stroke-width=".7"/>
            <rect x="84" width="22" height="22" rx="2" fill="rgba(229,198,116,.18)" stroke="#E5C674" stroke-width=".7"/>
            <rect y="28" width="22" height="22" rx="2" fill="rgba(229,198,116,.18)" stroke="#E5C674" stroke-width=".7"/>
            <rect x="28" y="28" width="22" height="22" rx="2" fill="rgba(229,198,116,.18)" stroke="#E5C674" stroke-width=".7"/>
            <rect x="56" y="28" width="22" height="22" rx="2" fill="rgba(229,198,116,.18)" stroke="#E5C674" stroke-width=".7"/>
            <rect x="84" y="28" width="22" height="22" rx="2" fill="rgba(229,198,116,.18)" stroke="#E5C674" stroke-width=".7"/>
          </g>
          <text x="70" y="160" font-family="Bebas Neue" font-size="22" fill="#27ae60" text-anchor="middle" font-weight="800">3% / WEEK</text>
          <text x="70" y="178" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">GUARANTEED FIXED</text>
          <text x="70" y="200" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">DIVERSIFIED</text>
        </g>
        <!-- VS divider -->
        <text x="200" y="200" font-family="Bebas Neue" font-size="22" fill="#666" text-anchor="middle" font-weight="700">VS</text>
        <!-- Items side -->
        <g transform="translate(220 80)">
          <rect width="140" height="220" rx="14" fill="rgba(229,198,116,.06)" stroke="#E5C674" stroke-width="1.5"/>
          <text x="70" y="34" font-family="Bebas Neue" font-size="20" fill="#E5C674" text-anchor="middle" font-weight="700" letter-spacing="2">ITEMS</text>
          <line x1="20" y1="48" x2="120" y2="48" stroke="#E5C674" stroke-width=".7" opacity=".4"/>
          <!-- One specific item -->
          <g transform="translate(40 70)">
            <rect width="60" height="60" rx="6" fill="#1a1612" stroke="#E5C674" stroke-width="1.2"/>
            <rect x="14" y="8" width="32" height="10" rx="2" fill="#E5C674" opacity=".4"/>
            <rect x="10" y="22" width="40" height="32" rx="2" fill="#0a0a0a"/>
          </g>
          <text x="70" y="160" font-family="Bebas Neue" font-size="22" fill="#27ae60" text-anchor="middle" font-weight="800">+5–25%</text>
          <text x="70" y="178" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">GUARANTEED MIN</text>
          <text x="70" y="200" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">+ UPSIDE BONUS</text>
        </g>
      </svg>`},{title:`YOU'RE READY`,body:[`You now know what <b>Luxor</b> is and how it works.`,`Next: pick your strategy. <span class="accent">Pools, items, or both</span> — the choice is yours.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="80" fill="rgba(229,198,116,.1)" stroke="#E5C674" stroke-width="2"/>
        <circle cx="200" cy="200" r="100" fill="none" stroke="#E5C674" stroke-width="1" opacity=".3" stroke-dasharray="4 4"/>
        <circle cx="200" cy="200" r="120" fill="none" stroke="#E5C674" stroke-width=".5" opacity=".15" stroke-dasharray="2 4"/>
        <text x="200" y="195" font-family="Bebas Neue" font-size="48" fill="#E5C674" text-anchor="middle" font-weight="700">★</text>
        <text x="200" y="220" font-family="Bebas Neue" font-size="14" fill="#E5C674" text-anchor="middle" letter-spacing="3" font-weight="700">UNLOCKED</text>
        <text x="200" y="320" font-family="Space Mono" font-size="11" fill="#888" text-anchor="middle" letter-spacing="2">MODULE 1 OF 6</text>
      </svg>`}],pools:[{title:`WHAT IS A POOL?`,body:[`A <b>pool</b> is a collection of luxury items selected by our team. Your money joins all other investors, and the team buys/sells items for the whole group.`,`You earn a <span class="accent">fixed return</span> — regardless of which specific items perform.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <!-- 5 investors -->
        ${Array.from({length:5},(e,t)=>`<g transform="translate(${60+t*70} 70)">
            <circle r="14" fill="rgba(229,198,116,.18)" stroke="#E5C674" stroke-width="1.2"/>
            <text y="4" font-family="-apple-system" font-size="13" fill="#E5C674" text-anchor="middle">👤</text>
            <text y="32" font-family="Space Mono" font-size="8" fill="#888" text-anchor="middle">$1K</text>
          </g>`).join(``)}
        <!-- arrows down -->
        <g transform="translate(0 110)">
          ${[60,130,200,270,340].map(e=>`<path d="M${e} 0L${e} 30" stroke="#E5C674" stroke-width="1.2" stroke-dasharray="3 2"/><path d="M${e-4} 26L${e} 32L${e+4} 26" stroke="#E5C674" stroke-width="1.2" fill="none"/>`).join(``)}
        </g>
        <!-- Pool box -->
        <g transform="translate(70 160)">
          <rect width="260" height="100" rx="14" fill="rgba(229,198,116,.08)" stroke="#E5C674" stroke-width="1.5"/>
          <text x="130" y="28" font-family="Bebas Neue" font-size="18" fill="#E5C674" text-anchor="middle" font-weight="700" letter-spacing="2">GOLD POOL · $5,000</text>
          <!-- mini items -->
          <g transform="translate(18 44)">
            ${Array.from({length:8},(e,t)=>`<rect x="${t*30}" width="22" height="36" rx="3" fill="rgba(229,198,116,.18)" stroke="#E5C674" stroke-width=".7"/>`).join(``)}
          </g>
        </g>
        <!-- arrow down -->
        <g transform="translate(196 270)">
          <path d="M0 0L0 22" stroke="#27ae60" stroke-width="2"/>
          <path d="M-5 17L0 24L5 17" stroke="#27ae60" stroke-width="2" fill="none"/>
        </g>
        <!-- 5 investors get returns -->
        ${Array.from({length:5},(e,t)=>`<g transform="translate(${60+t*70} 320)">
            <rect x="-22" y="0" width="44" height="32" rx="4" fill="rgba(46,204,113,.15)" stroke="#27ae60" stroke-width="1"/>
            <text y="20" font-family="Bebas Neue" font-size="12" fill="#27ae60" text-anchor="middle" font-weight="800">+3%</text>
            <text y="48" font-family="Space Mono" font-size="8" fill="#888" text-anchor="middle">/ WEEK</text>
          </g>`).join(``)}
      </svg>`},{title:`THREE TIERS`,body:[`<b>Silver</b>: 0.5% per day — fast, daily payouts (best for short-term).`,`<b>Gold</b>: 3% per week — most popular, balanced (best for steady growth).`,`<b>Platinum</b>: 15% per month — biggest returns (best for committed investors).`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Silver tier -->
        <g transform="translate(40 70)">
          <rect width="100" height="260" rx="14" fill="rgba(160,160,160,.08)" stroke="#a0a0a0" stroke-width="1.5"/>
          <text x="50" y="34" font-family="Bebas Neue" font-size="18" fill="#a0a0a0" text-anchor="middle" font-weight="700" letter-spacing="2">SILVER</text>
          <line x1="14" y1="48" x2="86" y2="48" stroke="#a0a0a0" stroke-width=".7" opacity=".5"/>
          <text x="50" y="100" font-family="Bebas Neue" font-size="32" fill="#fff" text-anchor="middle" font-weight="800">0.5%</text>
          <text x="50" y="120" font-family="Space Mono" font-size="10" fill="#888" text-anchor="middle">PER DAY</text>
          <text x="50" y="170" font-family="Space Mono" font-size="9" fill="#a0a0a0" text-anchor="middle">MIN</text>
          <text x="50" y="190" font-family="Bebas Neue" font-size="20" fill="#a0a0a0" text-anchor="middle" font-weight="700">$100</text>
          <text x="50" y="225" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">DAILY</text>
          <text x="50" y="240" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">PAYOUTS</text>
        </g>
        <!-- Gold tier (highlighted) -->
        <g transform="translate(150 50)">
          <rect width="100" height="290" rx="14" fill="rgba(229,198,116,.12)" stroke="#E5C674" stroke-width="2"/>
          <rect x="20" y="-10" width="60" height="20" rx="10" fill="#E5C674"/>
          <text x="50" y="4" font-family="Bebas Neue" font-size="10" fill="#0a0a0a" text-anchor="middle" font-weight="800" letter-spacing="1.5">POPULAR</text>
          <text x="50" y="40" font-family="Bebas Neue" font-size="20" fill="#E5C674" text-anchor="middle" font-weight="700" letter-spacing="2">GOLD</text>
          <line x1="14" y1="54" x2="86" y2="54" stroke="#E5C674" stroke-width=".7" opacity=".6"/>
          <text x="50" y="110" font-family="Bebas Neue" font-size="34" fill="#fff" text-anchor="middle" font-weight="800">3%</text>
          <text x="50" y="130" font-family="Space Mono" font-size="10" fill="#888" text-anchor="middle">PER WEEK</text>
          <text x="50" y="180" font-family="Space Mono" font-size="9" fill="#E5C674" text-anchor="middle">MIN</text>
          <text x="50" y="200" font-family="Bebas Neue" font-size="22" fill="#E5C674" text-anchor="middle" font-weight="700">$1,000</text>
          <text x="50" y="240" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">WEEKLY</text>
          <text x="50" y="255" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">PAYOUTS</text>
        </g>
        <!-- Platinum tier -->
        <g transform="translate(260 70)">
          <rect width="100" height="260" rx="14" fill="rgba(58,123,213,.08)" stroke="#3a7bd5" stroke-width="1.5"/>
          <text x="50" y="34" font-family="Bebas Neue" font-size="16" fill="#3a7bd5" text-anchor="middle" font-weight="700" letter-spacing="2">PLATINUM</text>
          <line x1="14" y1="48" x2="86" y2="48" stroke="#3a7bd5" stroke-width=".7" opacity=".5"/>
          <text x="50" y="100" font-family="Bebas Neue" font-size="32" fill="#fff" text-anchor="middle" font-weight="800">15%</text>
          <text x="50" y="120" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">PER MONTH</text>
          <text x="50" y="170" font-family="Space Mono" font-size="9" fill="#3a7bd5" text-anchor="middle">MIN</text>
          <text x="50" y="190" font-family="Bebas Neue" font-size="18" fill="#3a7bd5" text-anchor="middle" font-weight="700">$10,000</text>
          <text x="50" y="225" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">MONTHLY</text>
          <text x="50" y="240" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">PAYOUTS</text>
        </g>
      </svg>`},{title:`THE COMPOUNDING EFFECT`,body:[`Re-invest your earnings and watch them <span class="accent">stack</span>.`,`$1,000 in Gold pool, weekly returns reinvested → <b>$1,795 in 6 months</b> (vs $1,720 if you cashed out weekly). Small difference — big over time.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Y axis -->
        <line x1="50" y1="50" x2="50" y2="320" stroke="#666" stroke-width="1"/>
        <line x1="50" y1="320" x2="370" y2="320" stroke="#666" stroke-width="1"/>
        <!-- Y labels -->
        <text x="40" y="60" font-family="Space Mono" font-size="9" fill="#888" text-anchor="end">$2K</text>
        <text x="40" y="190" font-family="Space Mono" font-size="9" fill="#888" text-anchor="end">$1.5K</text>
        <text x="40" y="320" font-family="Space Mono" font-size="9" fill="#888" text-anchor="end">$1K</text>
        <!-- Cash-out line (lower) -->
        <path d="M50 320 L100 297 L150 274 L200 251 L250 228 L300 205 L350 182" stroke="#a0a0a0" stroke-width="2" fill="none" stroke-dasharray="4 4"/>
        <!-- Compound curve (higher) -->
        <path d="M50 320 Q120 280 200 230 T350 130" stroke="#27ae60" stroke-width="2.5" fill="none"/>
        <!-- Endpoint dot -->
        <circle cx="350" cy="130" r="5" fill="#27ae60"/>
        <circle cx="350" cy="130" r="9" fill="none" stroke="#27ae60" stroke-width="1" opacity=".4">
          <animate attributeName="r" values="5;14;5" dur="2s" repeatCount="indefinite"/>
        </circle>
        <!-- Labels -->
        <text x="375" y="135" font-family="Bebas Neue" font-size="14" fill="#27ae60" font-weight="800">$1,795</text>
        <text x="375" y="148" font-family="Space Mono" font-size="8" fill="#888">COMPOUND</text>
        <text x="375" y="187" font-family="Space Mono" font-size="11" fill="#a0a0a0" font-weight="700">$1,720</text>
        <text x="375" y="199" font-family="Space Mono" font-size="8" fill="#888">CASH-OUT</text>
        <!-- X axis labels -->
        <text x="50" y="345" font-family="Space Mono" font-size="9" fill="#888">M0</text>
        <text x="200" y="345" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">M3</text>
        <text x="350" y="345" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">M6</text>
        <text x="200" y="375" font-family="Bebas Neue" font-size="11" fill="#E5C674" text-anchor="middle" letter-spacing="2" font-weight="700">$1,000 IN GOLD POOL</text>
      </svg>`},{title:`EXIT ANYTIME`,body:[`Pools have <b>no lock-up</b>. Need your money back? Exit instantly.`,`You receive <span class="accent">your full principal</span> + all accrued earnings. No penalty, no waiting.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Pool icon -->
        <g transform="translate(50 150)">
          <rect width="100" height="100" rx="14" fill="rgba(229,198,116,.1)" stroke="#E5C674" stroke-width="1.5"/>
          <text x="50" y="40" font-family="Bebas Neue" font-size="14" fill="#E5C674" text-anchor="middle" letter-spacing="2">YOUR POOL</text>
          <text x="50" y="68" font-family="Bebas Neue" font-size="24" fill="#fff" text-anchor="middle" font-weight="800">$1,150</text>
          <text x="50" y="86" font-family="Space Mono" font-size="9" fill="#27ae60" text-anchor="middle">+15% earned</text>
        </g>
        <!-- Exit arrow -->
        <g transform="translate(170 195)">
          <path d="M0 0L60 0" stroke="#27ae60" stroke-width="2.5"/>
          <path d="M52 -7L62 0L52 7" stroke="#27ae60" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <rect x="10" y="-18" width="40" height="14" rx="7" fill="#1a1612" stroke="#27ae60" stroke-width="1"/>
          <text x="30" y="-7" font-family="Space Mono" font-size="8" fill="#27ae60" text-anchor="middle" font-weight="700">EXIT</text>
        </g>
        <!-- Wallet -->
        <g transform="translate(250 150)">
          <rect width="100" height="100" rx="14" fill="rgba(46,204,113,.1)" stroke="#27ae60" stroke-width="1.5"/>
          <text x="50" y="40" font-family="Bebas Neue" font-size="14" fill="#27ae60" text-anchor="middle" letter-spacing="2">WALLET</text>
          <text x="50" y="68" font-family="Bebas Neue" font-size="24" fill="#27ae60" text-anchor="middle" font-weight="800">$1,150</text>
          <text x="50" y="86" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">READY TO USE</text>
        </g>
        <text x="200" y="320" font-family="Space Mono" font-size="11" fill="#888" text-anchor="middle" letter-spacing="2">INSTANT · NO PENALTY · NO WAITING</text>
      </svg>`}],items:[{title:`PICK YOUR ITEM`,body:[`Browse the <b>marketplace</b> — every item authenticated by us, our partners, and a third-party audit.`,`Each item shows: <span class="accent">price, slot price, expected return, sale period</span>. Pick what catches your eye.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Card 1 (Birkin) — selected -->
        <g transform="translate(40 80)">
          <rect width="160" height="240" rx="14" fill="#1a1612" stroke="#E5C674" stroke-width="2.5"/>
          <rect width="160" height="120" rx="14 14 0 0" fill="#0d0d0d"/>
          <g transform="translate(50 20)"><rect width="60" height="80" rx="5" fill="#1a1612" stroke="#E5C674" stroke-width="1"/><rect x="14" y="6" width="32" height="14" rx="2" fill="#E5C674" opacity=".4"/></g>
          <text x="80" y="148" font-family="Bebas Neue" font-size="13" fill="#fff" text-anchor="middle" font-weight="800">BIRKIN 30</text>
          <text x="80" y="166" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">HERMÈS</text>
          <text x="14" y="195" font-family="Space Mono" font-size="9" fill="#888">PRICE</text>
          <text x="14" y="212" font-family="Bebas Neue" font-size="16" fill="#E5C674" font-weight="700">$30,000</text>
          <text x="146" y="195" font-family="Space Mono" font-size="9" fill="#888" text-anchor="end">EXPECTED</text>
          <text x="146" y="212" font-family="Bebas Neue" font-size="16" fill="#27ae60" text-anchor="end" font-weight="700">+25%</text>
          <!-- selected check -->
          <circle cx="148" cy="14" r="12" fill="#27ae60"/>
          <path d="M142 14L147 19L155 11" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <!-- Card 2 -->
        <g transform="translate(220 80)" opacity=".5">
          <rect width="160" height="240" rx="14" fill="#1a1612" stroke="#444" stroke-width="1"/>
          <rect width="160" height="120" rx="14 14 0 0" fill="#0d0d0d"/>
          <g transform="translate(60 30)"><circle cx="20" cy="30" r="26" fill="#1a1612" stroke="#E5C674" stroke-width=".8"/><circle cx="20" cy="30" r="18" fill="#0a0a0a" stroke="#E5C674" stroke-width=".5"/></g>
          <text x="80" y="148" font-family="Bebas Neue" font-size="13" fill="#fff" text-anchor="middle" font-weight="800">DAYTONA</text>
          <text x="80" y="166" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">ROLEX</text>
          <text x="14" y="195" font-family="Space Mono" font-size="9" fill="#888">PRICE</text>
          <text x="14" y="212" font-family="Bebas Neue" font-size="16" fill="#E5C674" font-weight="700">$42,000</text>
        </g>
      </svg>`},{title:`CHOOSE SLOTS`,body:[`Each item is split into 30-100 slots. <b>You decide how many to buy</b>.`,`A $30,000 Birkin split into 30 slots = <span class="accent">$1,000 per slot</span>. Buy 1 slot = own 1/30 of the Birkin. Buy 5 = own 1/6.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Slider concept -->
        <g transform="translate(50 100)">
          <rect width="300" height="6" rx="3" fill="rgba(229,198,116,.15)"/>
          <rect width="80" height="6" rx="3" fill="#E5C674"/>
          <circle cx="80" cy="3" r="12" fill="#E5C674" stroke="#0a0a0a" stroke-width="2"/>
          <text x="80" y="6" font-family="Space Mono" font-size="9" fill="#0a0a0a" text-anchor="middle" font-weight="800">5</text>
        </g>
        <text x="50" y="150" font-family="Space Mono" font-size="10" fill="#888">1 SLOT</text>
        <text x="350" y="150" font-family="Space Mono" font-size="10" fill="#888" text-anchor="end">30 MAX</text>
        <text x="200" y="150" font-family="Bebas Neue" font-size="11" fill="#E5C674" text-anchor="middle" font-weight="700" letter-spacing="2">YOU PICKED 5</text>

        <!-- Calculator box -->
        <g transform="translate(50 190)">
          <rect width="300" height="140" rx="14" fill="rgba(229,198,116,.06)" stroke="#E5C674" stroke-width="1.5"/>
          <text x="20" y="35" font-family="Space Mono" font-size="10" fill="#888" letter-spacing="1.5">YOU INVEST</text>
          <text x="20" y="65" font-family="Bebas Neue" font-size="32" fill="#fff" font-weight="800">$5,000</text>
          <text x="20" y="84" font-family="Space Mono" font-size="9" fill="#888">5 × $1,000/slot</text>

          <line x1="160" y1="20" x2="160" y2="120" stroke="#E5C674" stroke-width=".5" opacity=".4"/>

          <text x="280" y="35" font-family="Space Mono" font-size="10" fill="#27ae60" letter-spacing="1.5" text-anchor="end">EXPECTED</text>
          <text x="280" y="65" font-family="Bebas Neue" font-size="32" fill="#27ae60" font-weight="800" text-anchor="end">$6,250</text>
          <text x="280" y="84" font-family="Space Mono" font-size="9" fill="#27ae60" text-anchor="end">+$1,250 profit</text>

          <line x1="20" y1="100" x2="280" y2="100" stroke="#E5C674" stroke-width=".5" opacity=".3"/>
          <text x="150" y="120" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">YOU OWN <tspan fill="#E5C674" font-weight="800">5/30 = 16.7%</tspan> OF THIS BIRKIN</text>
        </g>
      </svg>`},{title:`WAIT & WATCH`,body:[`Item goes on sale. <b>Average sale period: 60-150 days</b>. We do all the work.`,`You can <span class="accent">track progress</span> in My Items: status, days remaining, expected vs current value.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Card-like progress -->
        <g transform="translate(50 70)">
          <rect width="300" height="280" rx="14" fill="#1a1612" stroke="#E5C674" stroke-width="1.2"/>
          <!-- header -->
          <rect width="300" height="40" rx="14 14 0 0" fill="rgba(46,204,113,.1)"/>
          <circle cx="22" cy="20" r="5" fill="#27ae60">
            <animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite"/>
          </circle>
          <text x="36" y="25" font-family="Space Mono" font-size="10" fill="#27ae60" font-weight="700" letter-spacing="1.5">ACTIVE · DAY 47 OF 120</text>
          <!-- thumb -->
          <g transform="translate(20 60)">
            <rect width="80" height="80" rx="6" fill="#0a0a0a" stroke="#E5C674" stroke-width=".8"/>
            <rect x="20" y="14" width="40" height="16" rx="2" fill="#E5C674" opacity=".4"/>
            <rect x="14" y="36" width="52" height="34" rx="2" fill="#1a1612"/>
          </g>
          <!-- info -->
          <text x="120" y="78" font-family="Bebas Neue" font-size="14" fill="#fff" font-weight="800">BIRKIN 30 · BLACK</text>
          <text x="120" y="96" font-family="Space Mono" font-size="9" fill="#888">5 SLOTS · 16.7% OWNED</text>
          <text x="120" y="120" font-family="Space Mono" font-size="9" fill="#888">CURRENT VALUE</text>
          <text x="120" y="140" font-family="Bebas Neue" font-size="20" fill="#27ae60" font-weight="800">$5,520 <tspan font-size="11">(+10.4%)</tspan></text>
          <!-- progress bar -->
          <text x="20" y="180" font-family="Space Mono" font-size="9" fill="#888">SALE PROGRESS</text>
          <text x="280" y="180" font-family="Space Mono" font-size="9" fill="#E5C674" text-anchor="end" font-weight="700">39%</text>
          <rect x="20" y="190" width="260" height="6" rx="3" fill="rgba(255,255,255,.05)"/>
          <rect x="20" y="190" width="101" height="6" rx="3" fill="url(#gp1)"/>
          <text x="20" y="220" font-family="Space Mono" font-size="9" fill="#888">EXPECTED PAYOUT</text>
          <text x="280" y="220" font-family="Bebas Neue" font-size="14" fill="#27ae60" text-anchor="end" font-weight="800">$6,250</text>
          <line x1="20" y1="232" x2="280" y2="232" stroke="#E5C674" stroke-width=".5" opacity=".25"/>
          <text x="20" y="255" font-family="Space Mono" font-size="9" fill="#888">SELLING NOW WOULD GIVE</text>
          <text x="280" y="255" font-family="Bebas Neue" font-size="13" fill="#fff" text-anchor="end" font-weight="700">$4,500 <tspan font-size="9" fill="#888">(-10%)</tspan></text>
        </g>
        <defs><linearGradient id="gp1" x1="0" x2="1"><stop offset="0" stop-color="#C9A84C"/><stop offset="1" stop-color="#27ae60"/></linearGradient></defs>
      </svg>`},{title:`SALE COMPLETE`,body:[`Item sells. <b>Profits split proportionally</b> to your share.`,`$5,000 invested → <span class="accent">$6,250 returned</span>. 5-slot stake → 1/6 of the $7,500 profit (your $1,250). Money lands in your wallet immediately.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Sold celebration -->
        <g transform="translate(150 30)">
          <circle cx="50" cy="50" r="42" fill="rgba(46,204,113,.18)" stroke="#27ae60" stroke-width="2"/>
          <circle cx="50" cy="50" r="58" fill="none" stroke="#27ae60" stroke-width="1" opacity=".4">
            <animate attributeName="r" values="42;72;42" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values=".5;0;.5" dur="2s" repeatCount="indefinite"/>
          </circle>
          <path d="M30 50L42 64L70 36" stroke="#27ae60" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <text x="200" y="155" font-family="Bebas Neue" font-size="20" fill="#27ae60" text-anchor="middle" font-weight="800" letter-spacing="3">BIRKIN SOLD</text>

        <!-- Distribution -->
        <g transform="translate(50 200)">
          <rect width="300" height="40" rx="8" fill="rgba(229,198,116,.06)" stroke="#E5C674" stroke-width="1"/>
          <text x="14" y="26" font-family="Space Mono" font-size="11" fill="#888">Sale price</text>
          <text x="286" y="26" font-family="Bebas Neue" font-size="16" fill="#fff" text-anchor="end" font-weight="700">$37,500</text>

          <rect y="50" width="300" height="40" rx="8" fill="rgba(229,198,116,.06)" stroke="#E5C674" stroke-width="1"/>
          <text x="14" y="76" font-family="Space Mono" font-size="11" fill="#888">Your share (5/30)</text>
          <text x="286" y="76" font-family="Bebas Neue" font-size="16" fill="#E5C674" text-anchor="end" font-weight="800">$6,250</text>

          <rect y="100" width="300" height="50" rx="8" fill="rgba(46,204,113,.12)" stroke="#27ae60" stroke-width="1.5"/>
          <text x="14" y="124" font-family="Space Mono" font-size="11" fill="#27ae60" font-weight="700">Profit (you invested $5,000)</text>
          <text x="14" y="142" font-family="Space Mono" font-size="9" fill="#888">In wallet now · ready to use</text>
          <text x="286" y="132" font-family="Bebas Neue" font-size="22" fill="#27ae60" text-anchor="end" font-weight="800">+$1,250</text>
        </g>
      </svg>`}],compare:[{title:`TWO PHILOSOPHIES`,body:[`<b>Pools</b> = predictable income from a basket. You don't pick specific items — the team does.`,`<b>Items</b> = own a slot of a specific Birkin / Rolex / piece. You pick exactly what you invest in.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Pools (left) -->
        <g transform="translate(40 80)">
          <text x="70" y="0" font-family="Bebas Neue" font-size="20" fill="#E5C674" text-anchor="middle" font-weight="700" letter-spacing="3">POOLS</text>
          <rect y="20" width="140" height="220" rx="14" fill="rgba(229,198,116,.05)" stroke="#E5C674" stroke-width="1.2"/>
          <!-- many tiny items -->
          <g transform="translate(20 50)">
            ${Array.from({length:16},(e,t)=>{let n=t%4,r=Math.floor(t/4);return`<rect x="${n*26}" y="${r*36}" width="20" height="28" rx="2" fill="rgba(229,198,116,.18)" stroke="#E5C674" stroke-width=".5"/>`}).join(``)}
          </g>
          <text x="70" y="225" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">DIVERSIFIED · STEADY</text>
        </g>

        <!-- VS -->
        <text x="200" y="200" font-family="Bebas Neue" font-size="28" fill="#666" text-anchor="middle" font-weight="700">VS</text>

        <!-- Items (right) -->
        <g transform="translate(220 80)">
          <text x="70" y="0" font-family="Bebas Neue" font-size="20" fill="#E5C674" text-anchor="middle" font-weight="700" letter-spacing="3">ITEMS</text>
          <rect y="20" width="140" height="220" rx="14" fill="rgba(229,198,116,.05)" stroke="#E5C674" stroke-width="1.2"/>
          <!-- one big item -->
          <g transform="translate(35 60)">
            <rect width="70" height="100" rx="6" fill="#1a1612" stroke="#E5C674" stroke-width="1.5"/>
            <rect x="18" y="10" width="34" height="14" rx="2" fill="#E5C674" opacity=".5"/>
            <rect x="14" y="32" width="42" height="56" rx="3" fill="#0a0a0a"/>
            <circle cx="35" cy="60" r="4" fill="#E5C674"/>
          </g>
          <text x="70" y="225" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">FOCUSED · UPSIDE</text>
        </g>
      </svg>`},{title:`RISK PROFILE`,body:[`Pools have <b>built-in diversification</b> — if one item underperforms, others compensate.`,`Items concentrate risk in <b>one piece</b>, but you have a <span class="accent">guaranteed minimum</span> (5–15%) so you never lose principal.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Pool: smooth line -->
        <g transform="translate(0 60)">
          <text x="50" y="20" font-family="Bebas Neue" font-size="14" fill="#E5C674" font-weight="700" letter-spacing="2">POOL RETURNS</text>
          <rect x="50" y="40" width="300" height="80" rx="6" fill="rgba(229,198,116,.04)" stroke="#E5C674" stroke-width=".5"/>
          <path d="M50 100 Q120 90 200 80 T350 70" stroke="#27ae60" stroke-width="2.5" fill="none"/>
          <text x="350" y="62" font-family="Space Mono" font-size="9" fill="#27ae60" text-anchor="end" font-weight="700">+12% PREDICTABLE</text>
        </g>
        <!-- Items: jagged with floor -->
        <g transform="translate(0 220)">
          <text x="50" y="20" font-family="Bebas Neue" font-size="14" fill="#E5C674" font-weight="700" letter-spacing="2">ITEM RETURNS</text>
          <rect x="50" y="40" width="300" height="80" rx="6" fill="rgba(229,198,116,.04)" stroke="#E5C674" stroke-width=".5"/>
          <line x1="50" y1="100" x2="350" y2="100" stroke="#E5C674" stroke-width="1" stroke-dasharray="3 3" opacity=".5"/>
          <text x="50" y="98" font-family="Space Mono" font-size="8" fill="#E5C674">FLOOR +5%</text>
          <path d="M50 100 L100 70 L150 105 L200 50 L250 90 L300 60 L350 85" stroke="#27ae60" stroke-width="2.5" fill="none"/>
          <text x="350" y="62" font-family="Space Mono" font-size="9" fill="#27ae60" text-anchor="end" font-weight="700">+25% UPSIDE</text>
        </g>
      </svg>`},{title:`BEST OF BOTH`,body:[`Most successful members do <span class="accent">a mix</span>:`,`<b>70% in pools</b> for steady weekly income — and <b>30% in items</b> for emotional connection and bigger wins. Your portfolio, your ratio.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Donut -->
        <g transform="translate(200 180)">
          <circle r="80" fill="rgba(229,198,116,.06)" stroke="rgba(255,255,255,.04)" stroke-width="1"/>
          <!-- 70% pools (gold) -->
          <path d="M0 -80 A80 80 0 1 1 -47 64.6 L0 0 Z" fill="#E5C674"/>
          <!-- 30% items (green) -->
          <path d="M-47 64.6 A80 80 0 0 1 0 -80 L0 0 Z" fill="#27ae60" opacity=".75"/>
          <circle r="44" fill="#0a0a0a"/>
          <text y="-2" font-family="Bebas Neue" font-size="18" fill="#E5C674" text-anchor="middle" font-weight="800">$10K</text>
          <text y="14" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">PORTFOLIO</text>
        </g>
        <!-- Legend -->
        <g transform="translate(80 320)">
          <rect width="14" height="14" fill="#E5C674"/>
          <text x="22" y="11" font-family="Space Mono" font-size="11" fill="#fff" font-weight="700">70% POOLS</text>
          <text x="22" y="26" font-family="Space Mono" font-size="9" fill="#888">$7,000 · steady income</text>
        </g>
        <g transform="translate(220 320)">
          <rect width="14" height="14" fill="#27ae60" opacity=".75"/>
          <text x="22" y="11" font-family="Space Mono" font-size="11" fill="#fff" font-weight="700">30% ITEMS</text>
          <text x="22" y="26" font-family="Space Mono" font-size="9" fill="#888">$3,000 · upside hunt</text>
        </g>
      </svg>`}],deposit:[{title:`CRYPTO IS THE ON-RAMP`,body:[`Luxor accepts <b>USDT</b> (most stable) and <b>BTC</b>. We don't take fiat directly because crypto is faster and cheaper.`,`Don't have crypto yet? <span class="accent">Don't worry</span> — the next steps show you how to get it.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(120 130)">
          <circle cx="40" cy="40" r="50" fill="rgba(38,161,123,.18)" stroke="#26a17b" stroke-width="2"/>
          <text x="40" y="48" font-family="-apple-system" font-size="36" fill="#26a17b" text-anchor="middle" font-weight="800">₮</text>
          <text x="40" y="115" font-family="Bebas Neue" font-size="14" fill="#fff" text-anchor="middle" font-weight="700">USDT</text>
          <text x="40" y="130" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">PEGGED $1.00</text>
        </g>
        <g transform="translate(220 130)">
          <circle cx="40" cy="40" r="50" fill="rgba(247,147,26,.18)" stroke="#f7931a" stroke-width="2"/>
          <text x="40" y="50" font-family="-apple-system" font-size="32" fill="#f7931a" text-anchor="middle" font-weight="800">₿</text>
          <text x="40" y="115" font-family="Bebas Neue" font-size="14" fill="#fff" text-anchor="middle" font-weight="700">BTC</text>
          <text x="40" y="130" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">VOLATILE</text>
        </g>
      </svg>`},{title:`YOUR COUNTRY-SPECIFIC GUIDE`,body:[`Tap <b>Deposit Funds</b> on the dashboard. Pick your country, pick your method (Apple Pay, debit card, bank transfer, etc.).`,`You'll get a <span class="accent">step-by-step guide with illustrations</span> for your exact situation. Most flows take 3-5 minutes.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Phone -->
        <g transform="translate(140 60)">
          <rect width="120" height="280" rx="18" fill="#0a0a0a" stroke="#E5C674" stroke-width="1.5"/>
          <rect x="8" y="20" width="104" height="240" rx="3" fill="#13110d"/>
          <text x="60" y="44" font-family="Bebas Neue" font-size="11" fill="#E5C674" text-anchor="middle" letter-spacing="2" font-weight="700">SELECT REGION</text>
          <!-- 3 region buttons -->
          ${[`🇺🇸 USA`,`🇪🇺 EUROPE`,`🌏 ASIA`].map((e,t)=>`
            <rect x="14" y="${60+t*48}" width="92" height="38" rx="6" fill="${t===0?`rgba(229,198,116,.18)`:`rgba(255,255,255,.03)`}" stroke="${t===0?`#E5C674`:`#444`}" stroke-width="${t===0?`1.5`:`.7`}"/>
            <text x="60" y="${83+t*48}" font-family="-apple-system" font-size="11" fill="${t===0?`#E5C674`:`#888`}" text-anchor="middle" font-weight="${t===0?`700`:`500`}">${e}</text>
          `).join(``)}
          <text x="60" y="220" font-family="Space Mono" font-size="8" fill="#888" text-anchor="middle">STEP 1 OF 3</text>
        </g>
      </svg>`},{title:`IT TAKES 5-10 MINUTES`,body:[`<b>First time:</b> 10-15 min (KYC verification at the exchange).`,`<b>Every next time:</b> ~30 seconds. Apps remember everything.`,`Funds appear in your Luxor wallet <span class="accent">1-5 minutes</span> after blockchain confirmation.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Timeline -->
        <line x1="50" y1="200" x2="350" y2="200" stroke="#E5C674" stroke-width="2"/>
        ${[0,1,2,3].map(e=>{let t=50+e*100;return`<circle cx="${t}" cy="200" r="14" fill="${e<3?`#E5C674`:`rgba(229,198,116,.18)`}" stroke="#E5C674" stroke-width="${e<3?`2`:`1.5`}"/><text x="${t}" y="205" font-family="Bebas Neue" font-size="13" fill="${e<3?`#0a0a0a`:`#E5C674`}" text-anchor="middle" font-weight="800">${e+1}</text>`}).join(``)}
        ${[`Buy USDT`,`Send to Luxor`,`Confirmation`,`Funds!`].map((e,t)=>`<text x="${50+t*100}" y="240" font-family="Space Mono" font-size="9" fill="#fff" text-anchor="middle" font-weight="700">${e}</text>`).join(``)}
        ${[`~3 min`,`~30 sec`,`1-5 min`,`READY`].map((e,t)=>`<text x="${50+t*100}" y="256" font-family="Space Mono" font-size="8" fill="#888" text-anchor="middle">${e}</text>`).join(``)}
      </svg>`}],withdraw:[{title:`WITHDRAWAL = REVERSE DEPOSIT`,body:[`You send USDT/BTC to <b>your own wallet</b> (or back to your exchange to convert to fiat).`,`No bank account needed at our end — same as deposit, just in reverse.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(60 160)">
          <rect width="100" height="80" rx="10" fill="rgba(229,198,116,.12)" stroke="#E5C674" stroke-width="1.5"/>
          <text x="50" y="32" font-family="Space Mono" font-size="9" fill="#E5C674" text-anchor="middle" font-weight="700">LUXOR</text>
          <text x="50" y="58" font-family="Bebas Neue" font-size="22" fill="#fff" text-anchor="middle" font-weight="800">$2,500</text>
        </g>
        <g transform="translate(170 195)">
          <path d="M0 0L60 0" stroke="#27ae60" stroke-width="2.5"/>
          <path d="M52 -7L62 0L52 7" stroke="#27ae60" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <text x="30" y="-12" font-family="Space Mono" font-size="9" fill="#27ae60" text-anchor="middle" font-weight="700">5-30 MIN</text>
        </g>
        <g transform="translate(240 160)">
          <rect width="100" height="80" rx="10" fill="rgba(46,204,113,.1)" stroke="#27ae60" stroke-width="1.5"/>
          <text x="50" y="32" font-family="Space Mono" font-size="9" fill="#27ae60" text-anchor="middle" font-weight="700">YOUR WALLET</text>
          <text x="50" y="58" font-family="Bebas Neue" font-size="22" fill="#27ae60" text-anchor="middle" font-weight="800">$2,500</text>
        </g>
      </svg>`},{title:`PICK YOUR NETWORK`,body:[`<b>TRC20</b>: cheapest. ~$1 fee. Use this 99% of the time.`,`<b>ERC20</b>: more expensive. $5–15 fee. Only if your wallet specifically needs it.`,`<b>BTC</b>: medium fee, slower. Use for Bitcoin payouts only.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <!-- 3 network options -->
        <g transform="translate(40 100)">
          <rect width="100" height="200" rx="14" fill="rgba(46,204,113,.1)" stroke="#27ae60" stroke-width="2"/>
          <rect x="20" y="-12" width="60" height="22" rx="11" fill="#27ae60"/>
          <text x="50" y="3" font-family="Bebas Neue" font-size="11" fill="#0a0a0a" text-anchor="middle" font-weight="800" letter-spacing="1">CHEAPEST</text>
          <text x="50" y="44" font-family="Bebas Neue" font-size="20" fill="#27ae60" text-anchor="middle" font-weight="700">TRC20</text>
          <text x="50" y="100" font-family="Bebas Neue" font-size="32" fill="#fff" text-anchor="middle" font-weight="800">$1</text>
          <text x="50" y="120" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">FEE</text>
          <text x="50" y="160" font-family="Space Mono" font-size="9" fill="#27ae60" text-anchor="middle" font-weight="700">~3 MIN</text>
          <text x="50" y="180" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">CONFIRM</text>
        </g>
        <g transform="translate(150 100)">
          <rect width="100" height="200" rx="14" fill="rgba(229,198,116,.04)" stroke="#666" stroke-width="1"/>
          <text x="50" y="44" font-family="Bebas Neue" font-size="20" fill="#888" text-anchor="middle" font-weight="700">ERC20</text>
          <text x="50" y="100" font-family="Bebas Neue" font-size="28" fill="#fff" text-anchor="middle" font-weight="800">$5–15</text>
          <text x="50" y="120" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">FEE</text>
          <text x="50" y="160" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle" font-weight="700">~5 MIN</text>
          <text x="50" y="180" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">CONFIRM</text>
        </g>
        <g transform="translate(260 100)">
          <rect width="100" height="200" rx="14" fill="rgba(229,198,116,.04)" stroke="#666" stroke-width="1"/>
          <text x="50" y="44" font-family="Bebas Neue" font-size="20" fill="#f7931a" text-anchor="middle" font-weight="700">BTC</text>
          <text x="50" y="100" font-family="Bebas Neue" font-size="28" fill="#fff" text-anchor="middle" font-weight="800">$3</text>
          <text x="50" y="120" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">FEE</text>
          <text x="50" y="160" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle" font-weight="700">~30 MIN</text>
          <text x="50" y="180" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">CONFIRM</text>
        </g>
      </svg>`},{title:`SECURITY: 2FA`,body:[`Every withdrawal requires <b>email confirmation</b> (2FA). Even if someone gets your password, they can't drain your wallet.`,`<span class="accent">First-time wallet</span>: extra confirmation. Saved wallets: instant.`],svg:`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(140 70)">
          <rect width="120" height="220" rx="14" fill="#1a1612" stroke="#E5C674" stroke-width="1.5"/>
          <rect width="120" height="40" rx="14 14 0 0" fill="rgba(229,198,116,.12)"/>
          <text x="60" y="26" font-family="Bebas Neue" font-size="13" fill="#E5C674" text-anchor="middle" font-weight="700" letter-spacing="2">2FA REQUIRED</text>
          <!-- Email icon -->
          <g transform="translate(45 60)">
            <rect width="30" height="22" rx="3" fill="rgba(229,198,116,.1)" stroke="#E5C674" stroke-width="1"/>
            <path d="M2 2L15 13L28 2" stroke="#E5C674" stroke-width="1.2" fill="none"/>
          </g>
          <text x="60" y="106" font-family="Space Mono" font-size="9" fill="#888" text-anchor="middle">CODE SENT TO</text>
          <text x="60" y="120" font-family="Space Mono" font-size="9" fill="#fff" text-anchor="middle" font-weight="700">you@email.com</text>
          <!-- Code boxes -->
          <g transform="translate(20 140)">
            ${[0,1,2,3,4,5].map(e=>`<rect x="${e*14}" width="11" height="20" rx="2" fill="rgba(229,198,116,.05)" stroke="#E5C674" stroke-width="1"/><text x="${e*14+5.5}" y="14" font-family="Space Mono" font-size="11" fill="#E5C674" text-anchor="middle" font-weight="800">${e<4?(e+3)*3%10:`_`}</text>`).join(``)}
          </g>
          <rect x="14" y="180" width="92" height="22" rx="6" fill="#E5C674"/>
          <text x="60" y="195" font-family="Bebas Neue" font-size="11" fill="#0a0a0a" text-anchor="middle" font-weight="800" letter-spacing="1.5">CONFIRM</text>
        </g>
      </svg>`}]};async function sn(){try{nn()}catch(e){console.warn(`[edu]`,e)}}async function cn(){let e=document.querySelector(`#ms-insights .m-content`);if(e)try{let t=await(await u(`/api/insights`)).json();if(!t||!t.ok||!Array.isArray(t.blocks)||!t.blocks.length)return;let n=e=>String(e||``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),r=e.querySelector(`.m-back`),i=t.blocks.map(e=>{let t=e.data||{},r=t.accent_color&&/^#[0-9a-fA-F]{3,8}$/.test(t.accent_color)?t.accent_color:`#c9a84c`,i=t.cta_label&&t.cta_url?`<a href="${n(t.cta_url)}" target="_blank" rel="noopener" style="display:inline-block;margin-top:10px;padding:8px 14px;background:${r};color:#0a0a0a;border-radius:6px;font-size:11px;font-weight:700;text-decoration:none;letter-spacing:1px">${n(t.cta_label)} →</a>`:``;return`<div class="d-panel" style="padding:14px;border-left:3px solid ${r}">
        ${t.image_url?`<img src="${n(t.image_url)}" style="width:100%;border-radius:8px;margin-bottom:10px" loading="lazy">`:``}
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
          ${t.icon?`<span style="font-size:18px">${n(t.icon)}</span>`:``}
          <div style="font-size:13px;font-weight:700;color:var(--t)">${n(t.title||``)}</div>
        </div>
        <div style="font-size:12px;color:var(--t2);line-height:1.6;white-space:pre-wrap">${n(t.body||``)}</div>
        ${i}
      </div>`}).join(``);e.innerHTML=(r?r.outerHTML:``)+i}catch{}}let Z=5e3;function ln(){let e=Number(s.totalDeposited)||0;if(e>0)return e;let t=0;try{Array.isArray(s.positions)&&(t+=s.positions.filter(e=>!e.status||e.status===`active`).reduce((e,t)=>e+(Number(t.amount||t.amount_usd)||0),0)),Array.isArray(s.myItems)&&(t+=s.myItems.filter(e=>e.status===`active`).reduce((e,t)=>e+(Number(t.invested)||0),0))}catch{}return t}window._pmCache=window._pmCache||{loaded:!1,submitted:!1,submission:null};async function un(){try{let e=await(await u(`/api/personal-manager/status`)).json();return e&&e.ok&&(window._pmCache.loaded=!0,window._pmCache.submitted=!!e.submitted,window._pmCache.submission=e.submission||null,window._pmCache.unlocked=!!e.unlocked,window._pmCache.invested=Number(e.invested_usd)||0,window._pmCache.remaining=Number(e.remaining_usd)||0),e}catch{return null}}window.openManagerGated=async function(){let e=ln();if(e<Z){dn(Z-e);return}P(`manager`);let t=await un();if(t&&!t.unlocked){dn(t.remaining_usd||Z-e),P(`dash`);return}mn()};function dn(e){let t=Math.max(0,Math.round(e));typeof Modal<`u`&&Modal.alert?Modal.alert({title:`🔒 PERSONAL MANAGER`,message:`Personal Manager becomes available after $${Z.toLocaleString()} invested.\n\nYou are $${t.toLocaleString()} away — invest more to unlock direct advisor access.`,tone:`info`,okText:`INVEST NOW`,onOk:()=>{P(`pools`)}}):confirm(`Personal Manager unlocks at $`+Z.toLocaleString()+` invested. Go to Pools?`)&&P(`pools`)}let fn=[{initials:`JM`,name:`JAMES MORRISON`,title:`Senior Investment Advisor`,tag:`12+ years · Sotheby's alumni`},{initials:`SH`,name:`SOPHIA HAYDEN`,title:`Wealth Management Advisor`,tag:`10+ years · Christie's alumni`},{initials:`AR`,name:`ALEXANDER REID`,title:`Senior Portfolio Manager`,tag:`15+ years · Phillips alumni`},{initials:`EV`,name:`ELENA VALENTI`,title:`Private Client Director`,tag:`11+ years · Bonhams alumni`}];function pn(){let e=t.login||sessionStorage.getItem(`luxor_login`)||`guest`,n=0;for(let t=0;t<e.length;t++)n=n*31+e.charCodeAt(t)|0;return fn[Math.abs(n)%fn.length]}function mn(){let e=pn(),t=window._pmCache.submitted,n=`
    <div class="pm-advisor">
      <div class="pm-avatar">${e.initials}</div>
      <div class="pm-advisor-name">${e.name}</div>
      <div class="pm-advisor-title">${e.title}</div>
      <div class="pm-advisor-tag">${e.tag}</div>
    </div>`+(t?`<div class="pm-success-card">
         <div class="pm-success-icon">✓</div>
         <div class="pm-success-title">REQUEST SUBMITTED</div>
         <div class="pm-success-msg">Your personal manager will contact you soon.</div>
         <div class="pm-success-meta">
           ${window._pmCache.submission&&window._pmCache.submission.submitted_at?`<div class="pm-success-row"><span>Submitted</span><b>`+new Date(window._pmCache.submission.submitted_at).toLocaleString()+`</b></div>`:``}
           ${window._pmCache.submission&&window._pmCache.submission.phone?`<div class="pm-success-row"><span>Phone</span><b>`+window._pmCache.submission.phone+`</b></div>`:``}
           ${window._pmCache.submission&&window._pmCache.submission.contact_method?`<div class="pm-success-row"><span>Contact via</span><b>`+window._pmCache.submission.contact_method.toUpperCase()+(window._pmCache.submission.contact_value?` · `+window._pmCache.submission.contact_value:``)+`</b></div>`:``}
         </div>
       </div>`:`<form class="pm-form" onsubmit="return submitPMForm(event)">
         <div class="pm-form-h">YOUR PERSONAL MANAGER</div>
         <div class="pm-form-sub">Fill in your details and your manager will contact you within 2 business hours.</div>
         <div class="input-group">
           <label>Your name</label>
           <input type="text" name="name" id="pmFormName" placeholder="Full name" required>
         </div>
         <div class="input-group">
           <label>Phone number</label>
           <input type="tel" name="phone" id="pmFormPhone" placeholder="+1 555 000 0000" required minlength="6">
         </div>
         <div class="input-group">
           <label>Preferred contact method</label>
           <div class="pm-contact-grid">
             <label class="pm-contact-opt"><input type="radio" name="contact_method" value="whatsapp" required><span>WhatsApp</span></label>
             <label class="pm-contact-opt"><input type="radio" name="contact_method" value="telegram"><span>Telegram</span></label>
             <label class="pm-contact-opt"><input type="radio" name="contact_method" value="email"><span>Email</span></label>
             <label class="pm-contact-opt"><input type="radio" name="contact_method" value="other"><span>Other</span></label>
           </div>
         </div>
         <div class="input-group" id="pmContactValueWrap" style="display:none">
           <label id="pmContactValueLabel">Contact handle / email</label>
           <input type="text" name="contact_value" id="pmFormContactValue" placeholder="@username or email">
         </div>
         <button type="submit" class="btn-primary pm-submit-btn">SUBMIT REQUEST</button>
       </form>`);[`ds-manager-content`,`ms-manager-content`].forEach(e=>{let t=document.getElementById(e);t&&(t.innerHTML=n)}),document.querySelectorAll(`input[name="contact_method"]`).forEach(e=>{e.addEventListener(`change`,()=>{let t=e.value,n=document.getElementById(`pmContactValueWrap`),r=document.getElementById(`pmContactValueLabel`),i=document.getElementById(`pmFormContactValue`);n&&(t===`whatsapp`||t===`telegram`?(n.style.display=``,r&&(r.textContent=t===`whatsapp`?`WhatsApp number`:`Telegram @username`),i&&(i.placeholder=t===`whatsapp`?`+1 555 000 0000`:`@username`)):t===`email`?(n.style.display=``,r&&(r.textContent=`Email address`),i&&(i.placeholder=`name@example.com`,i.type=`email`)):(n.style.display=``,r&&(r.textContent=`Best way to reach you`),i&&(i.placeholder=`Tell us how to contact you`,i.type=`text`)))})})}async function hn(e){e&&e.preventDefault&&e.preventDefault();let t=(document.getElementById(`pmFormName`)?.value||``).trim(),n=(document.getElementById(`pmFormPhone`)?.value||``).trim(),r=document.querySelector(`input[name="contact_method"]:checked`),i=r?r.value:``,a=(document.getElementById(`pmFormContactValue`)?.value||``).trim();if(!n||n.length<4)return Y&&Y(`warn`,`Phone required`,`Please enter a valid phone number.`),!1;if(!i)return Y&&Y(`warn`,`Contact method`,`Please choose a preferred contact method.`),!1;let o=document.querySelector(`.pm-submit-btn`);o&&(o.disabled=!0,o.textContent=`SUBMITTING…`);try{let e=await u(`/api/personal-manager/submit`,{method:`POST`,body:JSON.stringify({name:t,phone:n,contact_method:i,contact_value:a})}),r=await e.json();if(e.ok&&r&&r.ok)window._pmCache.submitted=!0,window._pmCache.submission={submitted_at:new Date().toISOString(),name:t,phone:n,contact_method:i,contact_value:a},mn(),Y&&Y(`success`,`Request submitted`,`Your personal manager will contact you soon.`);else{let e=r&&r.detail&&r.detail.error||r&&r.error||`unknown`;e===`below_threshold`?(P(`dash`),dn(Z-ln())):(Y&&Y(`error`,`Submit failed`,e),o&&(o.disabled=!1,o.textContent=`SUBMIT REQUEST`))}}catch{Y&&Y(`error`,`Network error`,`Please check connection and try again.`),o&&(o.disabled=!1,o.textContent=`SUBMIT REQUEST`)}return!1}window.submitPMForm=hn;function gn(){let e=ln(),t=document.getElementById(`mManagerSubtitle`),n=document.getElementById(`mManagerLockIc`);if(e>=Z)t&&(t.textContent=`Direct advisor access`),n&&(n.style.display=`none`);else{let r=Z-e;t&&(t.textContent=`$${r.toLocaleString()} away from unlocking`),n&&(n.style.display=``)}}window._mGraphPeriod=window._mGraphPeriod||`1M`;let _n={"1D":`day`,"1W":`week`,"1M":`month`,"3M":`month`,"1Y":`year`,ALL:`all`};async function vn(e){let n=t.login||sessionStorage.getItem(`luxor_login`);if(!n)return null;let r=_n[e]||`month`;try{let t=await(await u(`/api/user/`+encodeURIComponent(n)+`/balance-history?period=`+r)).json();if(!t||!t.ok)return null;if(e===`3M`&&Array.isArray(t.points)){let e=Date.now()-2160*3600*1e3;t.points=t.points.filter(t=>!t.t||new Date(t.t).getTime()>=e)}return t}catch{return null}}let Q={pos:{line:`#c9a84c`,fillTop:`rgba(201,168,76,.32)`,fillBot:`rgba(201,168,76,0)`,dotStroke:`#fff`},neg:{line:`#d96b6b`,fillTop:`rgba(217,107,107,.28)`,fillBot:`rgba(217,107,107,0)`,dotStroke:`#fff`},flat:{line:`rgba(201,168,76,.55)`,fillTop:`rgba(201,168,76,.10)`,fillBot:`rgba(201,168,76,0)`,dotStroke:`#fff`}};function yn(e,t){let n=document.getElementById(e);if(!n)return;let r=n.getContext(`2d`),i=n.width,a=n.height;r.clearRect(0,0,i,a);let o=Q.flat;if(t&&t.length>=2){let e=+t[0].balance||0;o=(+t[t.length-1].balance||0)-e>=0?Q.pos:Q.neg}if(!t||t.length<2){let e=a/2,t=r.createLinearGradient(0,0,0,a);t.addColorStop(0,Q.flat.fillTop),t.addColorStop(1,Q.flat.fillBot),r.fillStyle=t,r.fillRect(0,e,i,a-e),r.beginPath(),r.moveTo(0,e),r.lineTo(i,e),r.strokeStyle=Q.flat.line,r.lineWidth=1.8,r.stroke();return}let s=t.map(e=>+e.balance||0),c=Math.min(...s),l=Math.max(...s);c===l&&(c-=Math.max(1,Math.abs(c)*.01),l+=Math.max(1,Math.abs(l)*.01));let u=l-c,f=i-12,p=a-12-10,m=f/(t.length-1),h=e=>12+(1-(e-c)/u)*p,g=t.map((e,t)=>({x:6+t*m,y:h(s[t])})),_=r.createLinearGradient(0,0,0,a);_.addColorStop(0,o.fillTop),_.addColorStop(1,o.fillBot),r.beginPath(),r.moveTo(g[0].x,a-10),r.lineTo(g[0].x,g[0].y);for(let e=1;e<g.length;e++){let t=g[e-1],n=g[e],i=(t.x+n.x)/2;r.bezierCurveTo(i,t.y,i,n.y,n.x,n.y)}r.lineTo(g[g.length-1].x,a-10),r.closePath(),r.fillStyle=_,r.fill(),r.beginPath(),r.moveTo(g[0].x,g[0].y);for(let e=1;e<g.length;e++){let t=g[e-1],n=g[e],i=(t.x+n.x)/2;r.bezierCurveTo(i,t.y,i,n.y,n.x,n.y)}r.strokeStyle=o.line,r.lineWidth=2.2,r.lineJoin=`round`,r.lineCap=`round`,r.stroke();let v=g[g.length-1];r.beginPath(),r.arc(v.x,v.y,3.6,0,Math.PI*2),r.fillStyle=o.line,r.fill(),r.strokeStyle=o.dotStroke,r.lineWidth=1.5,r.stroke()}function bn(e){yn(`mPortCanvas`,e),yn(`dPortCanvas`,e)}async function $(e){e&&(window._mGraphPeriod=e);let t=await vn(window._mGraphPeriod),n=[`mPortCanvas`,`dPortCanvas`].map(e=>document.getElementById(e)).filter(Boolean);if(n.forEach(e=>{e.style.transition=`opacity .25s ease`,e.style.opacity=`0.3`}),setTimeout(()=>{bn(t&&t.points?t.points:[]),n.forEach(e=>{e.style.opacity=`1`})},220),window._mGraphPeriod!==`ALL`)if(t&&Array.isArray(t.points)&&t.points.length>=2){let e=t.points.filter(e=>e&&e.t);if((+t.current_total||0)>100&&e.length>1&&+e[0].balance==0&&(e=e.slice(1)),e.length<2){let e={"1D":`today`,"1W":`this week`,"1M":`this month`,"3M":`last 3 months`,"1Y":`this year`}[window._mGraphPeriod]||``;[`mBalDelta`,`dBalDelta`].forEach(t=>{let n=document.getElementById(t);n&&(n.textContent=`— No change ${e}`,n.className=`delta`)});return}let n=+e[0].balance||0,r=(+e[e.length-1].balance||0)-n,i=n>1?r/n*100:0,a=r>=0?`▲`:`▼`,o=r>=0?`+`:``,s={"1D":`today`,"1W":`this week`,"1M":`this month`,"3M":`last 3 months`,"1Y":`this year`}[window._mGraphPeriod]||``;[`mBalDelta`,`dBalDelta`].forEach(e=>{let t=document.getElementById(e);if(t){let e=n>1?` (${o}${i.toFixed(2)}%)`:``;t.textContent=`${a} ${o}$${Math.abs(r).toFixed(2)}${e} ${s}`,t.className=`delta`+(r<0?` neg`:``)}})}else{let e={"1D":`today`,"1W":`this week`,"1M":`this month`,"3M":`last 3 months`,"1Y":`this year`}[window._mGraphPeriod]||``;[`mBalDelta`,`dBalDelta`].forEach(t=>{let n=document.getElementById(t);n&&(n.textContent=`— No change ${e}`,n.className=`delta`)})}}function xn(){let e=document.querySelectorAll(`#mGraphTabs .p`);e.forEach(t=>{t.addEventListener(`click`,function(){e.forEach(e=>e.classList.remove(`active`)),this.classList.add(`active`),$(this.getAttribute(`data-period`))})})}(function(){let e=window.navTo;typeof e==`function`&&(window.navTo=function(t){if(e.apply(this,arguments),t===`howToInvest`)try{sn()}catch{}if(t===`insights`)try{cn()}catch{}if(t===`more`)try{gn()}catch{}if(t===`manager`)try{typeof un==`function`&&un().then(()=>{try{mn()}catch{}})}catch{}})})(),document.addEventListener(`DOMContentLoaded`,()=>{try{xn()}catch{}setTimeout(()=>{try{$()}catch{}},1500),setTimeout(()=>{try{gn()}catch{}},2e3)});let Sn=window.updateUI;typeof Sn==`function`&&(window.updateUI=function(){Sn.apply(this,arguments);try{gn()}catch{}}),console.log(`[lx-mobile-2026] mobile UX/UI updates loaded`);async function Cn(){let e=document.getElementById(`mPoolHistoryList`),n=document.getElementById(`poolsHistorySummaryM`);if(!e)return;let r=t.login||sessionStorage.getItem(`luxor_login`);if(!r){e.innerHTML=`<div class="empty-state">Sign in to view history.</div>`;return}e.innerHTML=`<div class="empty-state">Loading...</div>`;try{let t=await(await u(`/api/pool/history/`+encodeURIComponent(r))).json();if(!t||!t.ok||!Array.isArray(t.history)||!t.history.length){e.innerHTML=`<div class="empty-state"><svg class="lx"><use href="#i-tx"/></svg><h3 style="font-family:'Bebas Neue',sans-serif;letter-spacing:2px;margin:8px 0">NO HISTORY YET</h3><p style="font-size:11px;color:var(--t3);max-width:240px;margin:0 auto">Closed pool positions will appear here with full P/L breakdown.</p></div>`,n&&(n.style.display=`none`);return}if(n){let e=t.summary||{};n.style.display=``;let r=+e.total_pl||0,i=+e.total_pl_pct||0,a=r>=0?`+`:`−`,o=document.getElementById(`mPoolHistTotalPL`);o&&(o.textContent=a+`$`+Math.abs(r).toFixed(2),o.style.color=r>=0?`var(--gold)`:`var(--red)`);let s=document.getElementById(`mPoolHistTotalPLPct`);s&&(s.textContent=a+Math.abs(i).toFixed(2)+`%`,s.style.color=r>=0?`var(--gold)`:`var(--red)`);let c=document.getElementById(`mPoolHistTotalCount`);c&&(c.textContent=t.count||0);let l=document.getElementById(`mPoolHistWinLoss`);l&&(l.textContent=(e.wins||0)+`W · `+(e.losses||0)+`L`);let u=document.getElementById(`mPoolHistTotalInv`);u&&(u.textContent=`$`+(+e.total_invested||0).toLocaleString());let f=document.getElementById(`mPoolHistTotalRet`);f&&(f.textContent=`$`+(+e.total_returned||0).toLocaleString())}let i={Silver:`#c0c0c0`,Gold:`#c9a84c`,Platinum:`#e5e4e2`};e.innerHTML=t.history.map(e=>{let t=+e.invested||0,n=+e.returned||0,r=+e.pl||0,a=+e.pl_pct||0,o=r>=0?`var(--gold)`:`var(--red)`,s=r>=0?`+`:`−`,c=i[e.plan]||`var(--gold)`,l=e.closed_at?new Date(e.closed_at).toLocaleDateString():`—`,u=e.created_at?new Date(e.created_at).toLocaleDateString():`—`;return`<div class="d-panel" style="padding:12px;margin-bottom:8px;border-left:3px solid ${c}">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px">
          <div>
            <div style="font-size:13px;font-weight:700;letter-spacing:.5px">${e.plan||`Pool`}</div>
            <div style="font-size:10px;color:var(--t3);margin-top:2px">${u} → ${l}</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:15px;font-weight:800;color:${o}">${s}$${Math.abs(r).toFixed(2)}</div>
            <div style="font-size:10px;color:${o};margin-top:2px">${s}${Math.abs(a).toFixed(2)}%</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;padding-top:8px;border-top:1px solid var(--bd2);font-size:11px">
          <div><span style="color:var(--t3)">Invested:</span> <strong>$${t.toLocaleString()}</strong></div>
          <div><span style="color:var(--t3)">Returned:</span> <strong>$${n.toLocaleString()}</strong></div>
        </div>
      </div>`}).join(``)}catch{e.innerHTML=`<div class="empty-state" style="color:var(--red)">Failed to load.</div>`}}function wn(){document.querySelectorAll(`[data-items-tabs-container]`).forEach(e=>{let t=Array.isArray(s.myItems)&&s.myItems.some(e=>(e.status||``).toLowerCase()===`active`),n=Array.from(e.querySelectorAll(`[data-items-tab],[data-items-tab-m]`));if(!n.length)return;let r=t?[`active`,`sold`,`exited`,`all`]:[`sold`,`active`,`exited`,`all`];n.sort((e,t)=>{let n=(e.dataset.itemsTab||e.dataset.itemsTabM||``).toLowerCase(),i=(t.dataset.itemsTab||t.dataset.itemsTabM||``).toLowerCase();return r.indexOf(n)-r.indexOf(i)}),n.forEach(t=>e.appendChild(t))})}function Tn(){let e=document.querySelector(`#ms-pools .pools-tabs`);if(!e)return;let t=Array.isArray(s.positions)&&s.positions.some(e=>(e.status||``).toLowerCase()===`active`),n=Array.from(e.querySelectorAll(`[data-pool-tab-m]`));if(!n.length)return;let r=t?[`positions`,`invest`,`history`]:[`invest`,`positions`,`history`];n.sort((e,t)=>r.indexOf(e.dataset.poolTabM)-r.indexOf(t.dataset.poolTabM)),n.forEach(t=>e.appendChild(t));let i=document.getElementById(`mInvestMoreBtn`);i&&(i.style.display=t?``:`none`)}let En=window.renderPositions;typeof En==`function`&&(window.renderPositions=function(){En.apply(this,arguments);try{Tn()}catch{}});let Dn=window.renderMyItems;typeof Dn==`function`&&(window.renderMyItems=function(){Dn.apply(this,arguments);try{wn()}catch{}}),window._currencyRates=window._currencyRates||{USD:1,EUR:.92,GBP:.79},window._currencySymbols={USD:`$`,EUR:`€`,GBP:`£`},window._displayCurrency=sessionStorage.getItem(`luxor_display_currency`)||`USD`;async function On(){try{let e=await fetch(`https://api.exchangerate.host/latest?base=USD&symbols=EUR,GBP`,{cache:`no-store`});if(!e.ok)return;let t=await e.json();t&&t.rates&&(typeof t.rates.EUR==`number`&&(window._currencyRates.EUR=t.rates.EUR),typeof t.rates.GBP==`number`&&(window._currencyRates.GBP=t.rates.GBP))}catch{}}window.setDisplayCurrency=async function(e){e=(e||`USD`).toUpperCase(),window._currencyRates[e]||(e=`USD`),window._displayCurrency=e,sessionStorage.setItem(`luxor_display_currency`,e);try{typeof Ve==`function`&&Ve(`display_currency`,e)}catch{}e!==`USD`&&await On(),document.body.setAttribute(`data-currency`,e);try{typeof F==`function`&&F()}catch{}try{typeof $==`function`&&$()}catch{}try{typeof Y==`function`?Y(`Currency changed to `+e,`ok`):typeof Modal<`u`&&Modal.toast&&Modal.toast(`Currency changed to `+e)}catch{}},window.fmtCur=function(e,t){let n=window._displayCurrency||`USD`,r=window._currencyRates[n]||1,i=window._currencySymbols[n]||`$`,a=(+e||0)*r;return!(t&&t.round!==void 0)||t.round?i+Math.round(a).toLocaleString():i+a.toLocaleString(`en-US`,{minimumFractionDigits:2,maximumFractionDigits:2})},On(),setTimeout(()=>{try{Tn(),wn()}catch{}},1800)}export{e as initDashboard};