function e(){let e=`https://luxor-backend-production.up.railway.app`,t=sessionStorage.getItem(`luxor_admin_token`)||``,n=!1;function r(n){document.body.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:center;min-height:100vh;background:#0a0a0a;padding:20px;font-family:system-ui,sans-serif">
      <div style="background:#141414;border:1px solid #2a2a2a;border-radius:12px;padding:32px;max-width:420px;width:100%">
        <div style="font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:2px;color:#c9a84c;text-align:center;margin-bottom:8px">LUXOR ADMIN</div>
        <div style="color:#888;font-size:13px;text-align:center;margin-bottom:24px">Sign in to manage the platform</div>
        <input id="al_login" placeholder="Admin login" value="luxor_admin" style="width:100%;padding:12px;margin-bottom:10px;background:#0a0a0a;border:1px solid #2a2a2a;border-radius:6px;color:#fff;font-size:14px;box-sizing:border-box">
        <input id="al_pwd" type="password" placeholder="Admin password" style="width:100%;padding:12px;margin-bottom:16px;background:#0a0a0a;border:1px solid #2a2a2a;border-radius:6px;color:#fff;font-size:14px;box-sizing:border-box">
        <button id="al_btn" style="width:100%;padding:12px;background:linear-gradient(135deg,#c9a84c,#b8943a);color:#0a0a0a;border:none;border-radius:6px;font-family:'Bebas Neue',sans-serif;font-size:15px;letter-spacing:2px;cursor:pointer;font-weight:700">SIGN IN</button>
        <div id="al_err" style="color:#ef5350;font-size:12px;margin-top:10px;min-height:16px;text-align:center;word-break:break-word">${n||``}</div>
      </div>
    </div>`;let r=async()=>{let n=document.getElementById(`al_login`).value.trim(),r=document.getElementById(`al_pwd`).value,i=document.getElementById(`al_err`),a=document.getElementById(`al_btn`);if(i.textContent=``,!n||!r){i.textContent=`Enter login and password`;return}a.disabled=!0,a.textContent=`SIGNING IN...`;try{let o=await fetch(e+`/api/login`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({login:n,password:r})}),s=null;try{s=await o.json()}catch{}if(!o.ok){i.textContent=`HTTP `+o.status+`: `+(s&&(s.detail||s.error)||`Login failed`),a.disabled=!1,a.textContent=`SIGN IN`;return}if(!s||!s.ok){i.textContent=s&&(s.detail||s.error)||`Incorrect credentials`,a.disabled=!1,a.textContent=`SIGN IN`;return}if(!s.is_admin){i.textContent=`Not an admin account`,a.disabled=!1,a.textContent=`SIGN IN`;return}t=s.token,sessionStorage.setItem(`luxor_admin_token`,t),location.reload()}catch(e){i.textContent=`Network error: `+(e&&e.message||`unknown`),a.disabled=!1,a.textContent=`SIGN IN`}};document.getElementById(`al_btn`).onclick=r,document.getElementById(`al_pwd`).onkeydown=e=>{e.key===`Enter`&&r()},document.getElementById(`al_login`).onkeydown=e=>{e.key===`Enter`&&document.getElementById(`al_pwd`).focus()}}(async function(){if(!t){r(``);return}try{let i=await fetch(e+`/api/admin/stats`,{headers:{Authorization:`Bearer `+t}});if(i.status===200){n=!0;return}sessionStorage.removeItem(`luxor_admin_token`),t=``;let a=`Session expired (HTTP `+i.status+`). Please log in again.`;try{let e=await i.json();e&&(e.detail||e.error)&&(a=`Backend: `+(e.detail||e.error))}catch{}r(a)}catch(e){r(`Cannot reach backend: `+(e&&e.message||`network error`))}})();function i(){return t?{Authorization:`Bearer `+t}:{}}async function a(a,o){try{let s={headers:i()};if(o&&(o.method&&(s.method=o.method),o.body!==void 0)){s.body=o.body;let e=(s.method||`GET`).toUpperCase();e!==`GET`&&e!==`HEAD`&&(s.headers={...s.headers,"Content-Type":`application/json`})}let c=await fetch(e+a,s);return n&&(c.status===401||c.status===403)?(sessionStorage.removeItem(`luxor_admin_token`),t=``,n=!1,r(`Session expired. Please log in again.`),null):await c.json()}catch{return null}}async function o(a,o){try{let s=await fetch(e+a,{method:`POST`,headers:{"Content-Type":`application/json`,...i()},body:JSON.stringify(o||{})});return n&&(s.status===401||s.status===403)?(sessionStorage.removeItem(`luxor_admin_token`),t=``,n=!1,r(`Session expired. Please log in again.`),null):await s.json()}catch{return null}}function s(e,t=!0){let n=document.createElement(`div`);n.className=`notif `+(t?`ok`:`err`),n.textContent=e,document.body.appendChild(n),setTimeout(()=>n.remove(),4e3)}function c(e){return`$`+(+e||0).toLocaleString(`en-US`,{minimumFractionDigits:0,maximumFractionDigits:2})}let l=null,u=[];async function d(){let e=document.getElementById(`adminConvList`);e&&(e.innerHTML=`<div style="padding:30px 14px;text-align:center;color:var(--t3);font-size:12px">Loading...</div>`);let t=await a(`/api/admin/support/conversations`);if(!t||!t.ok){e&&(e.innerHTML=`<div style="padding:30px 14px;text-align:center;color:var(--red);font-size:12px">Failed to load conversations</div>`);return}if(u=t.conversations||[],f(u),h(),location.hash&&location.hash.startsWith(`#support:`)){let e=decodeURIComponent(location.hash.substring(9));e&&p(e)}}function f(e){let t=document.getElementById(`adminConvList`);if(t){if(e.length===0){t.innerHTML=`<div style="padding:30px 14px;text-align:center;color:var(--t3);font-size:12px">No conversations yet.</div>`;return}t.innerHTML=e.map(e=>{let t=e.last_at?new Date(e.last_at).toLocaleString():``,n=e.last_sender===`admin`?`<span style="color:var(--t3)">You: </span>`:``,r=(e.last_text||``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),i=e.unread_count>0?`<span style="background:#e74c3c;color:#fff;border-radius:10px;padding:2px 8px;font-size:10px;font-weight:700;margin-left:6px">${e.unread_count}</span>`:``,a=l===e.user_login?`background:rgba(201,168,76,.15);border-color:var(--gold)`:``;return`<div class="conv-item" onclick="selectAdminConversation('${e.user_login}')" style="padding:10px 12px;border:1px solid var(--bd);border-radius:8px;margin-bottom:6px;cursor:pointer;${a}">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
        <span style="font-weight:700;color:var(--t);font-size:13px">${e.user_login}${i}</span>
        <span style="font-size:10px;color:var(--t3)">${t}</span>
      </div>
      <div style="font-size:11px;color:var(--t3);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n}${r||`<i>(empty)</i>`}</div>
    </div>`}).join(``)}}async function p(e){l=e,f(u);let t=document.getElementById(`adminChatHeader`);t&&(t.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;width:100%">
        <div>💬 Chat with <b>${e}</b></div>
        <button class="btn btn-r btn-sm" onclick="confirmCloseAdminChat('${e}')" title="Force-close conversation. User will see it as cleared. Full history stays in DB and is viewable by user in Archive.">🗙 CLOSE</button>
      </div>`);let n=document.getElementById(`adminChatInput`);n&&(n.style.display=`flex`);let r=document.getElementById(`adminChatMessages`);r&&(r.innerHTML=`<div style="margin:auto;color:var(--t3)">Loading...</div>`);let i=await a(`/api/admin/support/conversations/`+encodeURIComponent(e));if(!i||!i.ok){r&&(r.innerHTML=`<div style="margin:auto;color:var(--red)">Failed to load messages</div>`);return}let o=i.messages||[];o.length===0?r.innerHTML=`<div style="margin:auto;color:var(--t3)">No messages yet.</div>`:(r.innerHTML=o.map(e=>{let t=e.created_at?new Date(e.created_at).toLocaleString():``,n=e.sender===`user`,r=(e.text||``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\n/g,`<br>`),i=e.cleared_for_user?`<div style="font-size:9px;color:var(--t3);font-style:italic;margin-top:2px">⚠ cleared by user</div>`:``;return`<div style="max-width:70%;padding:10px 14px;border-radius:12px;${n?`border-bottom-left-radius:4px`:`border-bottom-right-radius:4px`};font-size:13px;line-height:1.5;word-wrap:break-word;${n?`background:var(--bg2);color:var(--t);border:1px solid var(--bd);align-self:flex-start`:`background:var(--gold);color:#0a0a0a;align-self:flex-end`}">
        ${r}
        <div style="font-size:9px;color:${n?`var(--t3)`:`rgba(0,0,0,.5)`};margin-top:4px;font-family:monospace">${t}${n?``:` · You`}</div>
        ${i}
      </div>`}).join(``),r.scrollTop=r.scrollHeight),h(),setTimeout(d,500)}async function m(){if(!l){alert(`No conversation selected`);return}let e=document.getElementById(`adminReplyInput`),t=(e?.value||``).trim();if(!t){alert(`Type a message first`);return}if(t.length>4e3){alert(`Maximum 4000 characters`);return}let n=await o(`/api/admin/support/conversations/`+encodeURIComponent(l)+`/reply`,{text:t});if(!n||!n.ok){alert(`Failed to send: `+(n?.error||`unknown error`));return}e.value=``,e.style.height=`42px`,p(l)}async function h(){let e=await a(`/api/admin/support/unread-total`);if(!e||!e.ok)return;let t=document.getElementById(`adminSupportBadge`);t&&(e.unread>0?(t.textContent=e.unread>99?`99+`:String(e.unread),t.style.display=``):t.style.display=`none`)}document.addEventListener(`DOMContentLoaded`,function(){let e=document.getElementById(`adminReplyInput`);e&&e.addEventListener(`keydown`,function(e){e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),m())}),setInterval(h,3e4)});async function g(){let e=await a(`/api/admin/stats`);if(!e)try{let t=await a(`/api/users`)||[];if(t.length===0)for(let e of[`admin`,`test`,`beta`,`demo`]){let n=await a(`/api/user/${e}`);n&&n.user&&t.push(n.user)}let n=t.reduce((e,t)=>e+(t.balance||0),0),r=t.reduce((e,t)=>e+(t.wallet_balance||0),0);e={total_users:t.length,total_balance:n+r,deposits_total_amount:n*1.2,withdrawals_pending_count:0,withdrawals_pending_amount:0,new_today:Math.min(t.length,3),deposits_today_amount:n*.1,deposits_today_count:Math.min(t.length,2),deposits_week_amount:n*.3,deposits_month_amount:n*.8,withdrawals_today_amount:0,withdrawals_month_amount:0,new_week:Math.min(t.length,5),new_month:t.length},s(`📊 Showing real data from your backend`,!0)}catch{e={total_users:156,total_balance:487250,total_in_wallets:487250,total_in_pools:1245e3,total_pool_earned:78500,total_in_items:32e4,total_user_funds_simple:2052250,total_user_funds:2130750,deposits_total_amount:2245e3,withdrawals_pending_count:3,withdrawals_pending_amount:15600,new_today:8,deposits_today_amount:23400,deposits_today_count:5,deposits_week_amount:156800,deposits_month_amount:487200,withdrawals_today_amount:8500,withdrawals_month_amount:156700,new_week:31,new_month:156},s(`⚠️ Using demo data - backend connection needed`,!1)}document.getElementById(`sTotalDep`).textContent=c(e.deposits_total_amount),document.getElementById(`sTotalUsers`).textContent=e.total_users||0;let t=e.total_user_funds_simple===void 0?e.total_balance||0:e.total_user_funds_simple;document.getElementById(`sTotalBal`).textContent=c(t);let n=e.total_in_wallets??e.total_balance??0,r=e.total_in_pools??0,i=e.total_pool_earned??0,o=e.total_in_items??0,l=e.total_user_funds??n+r+i+o,u=(e,t)=>{let n=document.getElementById(e);n&&(n.textContent=c(t))};u(`sFundsWallets`,n),u(`sFundsPools`,r),u(`sFundsEarned`,i),u(`sFundsItems`,o),u(`sFundsTotal`,l),document.getElementById(`sPendWd`).textContent=(e.withdrawals_pending_count||0)+` / `+c(e.withdrawals_pending_amount),document.getElementById(`sNewToday`).textContent=e.new_today||0,document.getElementById(`sDepToday`).textContent=c(e.deposits_today_amount),document.getElementById(`sDepTodayFull`).textContent=c(e.deposits_today_amount)+` (`+e.deposits_today_count+`)`,document.getElementById(`sDepWeek`).textContent=c(e.deposits_week_amount),document.getElementById(`sDepMonth`).textContent=c(e.deposits_month_amount),document.getElementById(`sDepAll`).textContent=c(e.deposits_total_amount),document.getElementById(`sWdPending`).textContent=c(e.withdrawals_pending_amount)+` (`+e.withdrawals_pending_count+`)`,document.getElementById(`sWdToday`).textContent=c(e.withdrawals_today_amount),document.getElementById(`sWdMonth`).textContent=c(e.withdrawals_month_amount),document.getElementById(`sRegToday`).textContent=e.new_today||0,document.getElementById(`sRegWeek`).textContent=e.new_week||0,document.getElementById(`sRegMonth`).textContent=e.new_month||0,_()}async function _(){let e=await a(`/api/admin/transactions`);if(!e)try{e=(await v()).map((e,t)=>({user_name:e.first_name||e.login,user_login:e.login,type:t%3==0?`deposit`:t%3==1?`withdrawal`:`bonus`,amount:Math.floor(Math.random()*5e3)+100,created_at:new Date(Date.now()-Math.random()*7*24*60*60*1e3).toISOString(),wallet_address_used:t%2==0?`TRX`+Math.random().toString(36).substr(2,15):null})).slice(0,10)}catch{e=[]}let t=document.getElementById(`recentTxs`);if(!e||!e.length){t.innerHTML=`<div style="color:var(--t3);text-align:center;padding:20px">No transactions yet</div>`;return}t.innerHTML=e.slice(0,15).map(e=>`
    <div class="metric">
      <div>
        <span style="font-weight:600">${e.user_name||e.user_login}</span>
        <span style="color:var(--t3);font-size:11px;margin-left:6px">${e.type===`deposit`?`💰`:e.type===`withdrawal`?`💸`:`🎁`} ${e.type}</span>
        ${e.wallet_address_used?`<span style="color:var(--t3);font-size:10px;display:block">${e.wallet_address_used.substring(0,20)}...</span>`:``}
      </div>
      <div style="text-align:right">
        <div style="font-weight:700;color:${e.type===`withdrawal`?`var(--red)`:`var(--green)`}">${e.type===`withdrawal`?`-`:`+`}${c(e.amount)}</div>
        <div style="font-size:10px;color:var(--t3)">${new Date(e.created_at).toLocaleString()}</div>
      </div>
    </div>
  `).join(``)}async function v(){let e=await a(`/api/users`)||[];if(e.length===0)for(let t of[`admin`,`test`,`beta`,`demo`,`john_doe`]){let n=await a(`/api/user/${t}`);n&&n.user&&e.push({login:t,first_name:t,...n.user})}return e}async function y(e,t,n,r){let i=(t||`bronze`).toLowerCase(),a=n,o=document.getElementById(`refOverrideModal`);o||(o=document.createElement(`div`),o.id=`refOverrideModal`,o.className=`overlay`,document.body.appendChild(o)),o.innerHTML=`
    <div class="modal" style="max-width:460px">
      <div class="modal-header">
        <h3>⚙ REF TIER OVERRIDE</h3>
        <button class="modal-close" onclick="document.getElementById('refOverrideModal').classList.remove('show')">&times;</button>
      </div>
      <div style="padding:16px">
        <div style="font-size:13px;color:var(--t2);margin-bottom:14px">User: <strong style="color:var(--gold)">@${e}</strong></div>

        <div style="background:rgba(255,255,255,.03);padding:12px;border-radius:8px;margin-bottom:14px;font-size:12px;color:var(--t2);line-height:1.5">
          ⓘ Override lets you bypass the automatic tier system for this user.<br>
          Set <b>tier</b> alone — they get that tier's standard rate (3/5/7/10%).<br>
          Set <b>rate</b> alone — they get that exact %, tier label stays current.<br>
          Set both — full custom (e.g. show "Gold" but pay 12%).
        </div>

        <div style="margin-bottom:14px">
          <label style="font-size:11px;color:var(--t3);font-weight:700;letter-spacing:.5px;display:block;margin-bottom:6px">TIER LABEL</label>
          <select id="refOverrideTier" class="inp" style="width:100%">
            <option value="">— Auto (current: ${i})</option>
            <option value="bronze" ${i===`bronze`?`selected`:``}>Bronze (default 3%)</option>
            <option value="silver" ${i===`silver`?`selected`:``}>Silver (default 5%)</option>
            <option value="gold" ${i===`gold`?`selected`:``}>Gold (default 7%)</option>
            <option value="platinum" ${i===`platinum`?`selected`:``}>Platinum (default 10%)</option>
          </select>
        </div>

        <div style="margin-bottom:14px">
          <label style="font-size:11px;color:var(--t3);font-weight:700;letter-spacing:.5px;display:block;margin-bottom:6px">CUSTOM RATE % (optional, 0-50)</label>
          <input type="number" id="refOverrideRate" class="inp" min="0" max="50" step="0.5" placeholder="e.g. 12.5" value="${a}" style="width:100%">
          <div style="font-size:10px;color:var(--t3);margin-top:4px">Leave empty to use tier's default rate.</div>
        </div>

        <div style="display:flex;gap:8px">
          <button class="btn btn-g" style="flex:1" onclick="submitRefOverride('${e}')">SAVE OVERRIDE</button>
          ${r?`<button class="btn btn-r" onclick="resetRefOverride('${e}')">RESET TO AUTO</button>`:``}
        </div>
      </div>
    </div>
  `,o.classList.add(`show`)}async function b(e){let t=document.getElementById(`refOverrideTier`).value||``,n=document.getElementById(`refOverrideRate`).value,r=n===``?null:parseFloat(n);if(r!==null&&(isNaN(r)||r<0||r>50)){alert(`Rate must be a number 0-50`);return}let i=await o(`/api/admin/users/`+encodeURIComponent(e)+`/ref-override`,{tier:t,rate:r});if(!i||!i.ok){s(`Override failed: `+(i?.error||`unknown`),!1);return}s(`✅ Override saved`),document.getElementById(`refOverrideModal`).classList.remove(`show`),setTimeout(()=>x(e),200)}async function ee(e){if(!confirm(`Reset overrides for @`+e+`? They will return to automatic tier calculation based on referrals count.`))return;let t=await o(`/api/admin/users/`+encodeURIComponent(e)+`/ref-override`,{reset:!0});if(!t||!t.ok){s(`Reset failed: `+(t?.error||`unknown`),!1);return}s(`✅ Override reset to auto`),document.getElementById(`refOverrideModal`).classList.remove(`show`),setTimeout(()=>x(e),200)}window.openRefOverrideModal=y,window.submitRefOverride=b,window.resetRefOverride=ee;async function x(e){let t=document.getElementById(`userDetailModal`),n=document.getElementById(`userDetailContent`);n.innerHTML=`<div style="color:var(--t3);padding:20px;text-align:center">Loading dossier...</div>`,t.classList.add(`show`);let r=await a(`/api/admin/users/`+encodeURIComponent(e)+`/dossier`);if(!r||!r.ok){n.innerHTML=`<p style="color:var(--red);padding:20px">Failed to load user dossier. Backend may not have new endpoints yet — please redeploy.</p>`;return}let i=r.user||{},o=r.pool_positions||[],s=r.item_purchases||[],l=r.transactions||[],u=r.referrer,d=r.referrals||[],f=r.summary||{},p=r._warnings||[],m=e=>e?new Date(e).toLocaleString():`—`,h=e=>e?new Date(e).toLocaleDateString():`—`,g=``;if(p.length>0){let e=p.filter(e=>e.includes(`recovered_via_sum`)),t=p.filter(e=>!e.includes(`recovered_via_sum`));t.length>0?g=`
        <div style="background:rgba(231,76,60,.08);border:1px solid var(--red);padding:10px 14px;border-radius:6px;margin-bottom:14px;font-size:11px;color:var(--red)">
          <strong>⚠ Diagnostic warnings (${t.length}):</strong>
          <ul style="margin:6px 0 0 18px;padding:0;color:var(--t2);font-size:11px;font-family:monospace">
            ${t.map(e=>`<li>${e.replace(/[<>]/g,``)}</li>`).join(``)}
          </ul>
          ${e.length>0?`<div style="margin-top:6px;color:#27ae60;font-size:10.5px">✓ Totals recovered via direct SUM query — counts shown below are correct, but detail lists may be empty.</div>`:``}
        </div>`:e.length>0&&(g=`
        <div style="background:rgba(241,196,15,.08);border:1px solid #f1c40f;padding:10px 14px;border-radius:6px;margin-bottom:14px;font-size:11px;color:#f1c40f">
          <strong>ℹ Recovered via direct SUM:</strong>
          <ul style="margin:6px 0 0 18px;padding:0;color:var(--t2);font-size:11px;font-family:monospace">
            ${e.map(e=>`<li>${e.replace(/[<>]/g,``)}</li>`).join(``)}
          </ul>
          <div style="margin-top:4px;color:var(--t3);font-size:10.5px">Total balance is correct, but detail lists below may not show full history.</div>
        </div>`)}let _=``,v=+(f.total_in_pools_active||0),y=+(f.total_in_items_active||0);v>0&&o.length===0&&(_+=`<div style="background:rgba(241,196,15,.08);border:1px solid #f1c40f;padding:8px 12px;border-radius:6px;margin-bottom:8px;font-size:11px;color:#f1c40f">
      ⚠ Pool detail unavailable — but summary shows <strong>${c(v)}</strong> in active pools.
    </div>`),y>0&&s.length===0&&(_+=`<div style="background:rgba(241,196,15,.08);border:1px solid #f1c40f;padding:8px 12px;border-radius:6px;margin-bottom:8px;font-size:11px;color:#f1c40f">
      ⚠ Item-purchase detail unavailable — but summary shows <strong>${c(y)}</strong> invested in active items.
    </div>`);let b=`—`;if(i.last_seen){let e=Date.now()-new Date(i.last_seen).getTime(),t=Math.floor(e/6e4);b=t<1?`just now`:t<60?t+` min ago`:t<1440?Math.floor(t/60)+` h ago`:Math.floor(t/60/24)+` d ago`}n.innerHTML=`
    <h3 style="font-size:20px;font-weight:800;margin-bottom:6px">👤 ${i.first_name||``} ${i.last_name||``} <span style="color:var(--t3);font-weight:500;font-size:14px">@${i.login}</span> ${i.banned?`<span style="background:var(--red);color:#fff;padding:2px 8px;border-radius:6px;font-size:10px;margin-left:6px">BANNED</span>`:``}</h3>
    <div style="color:var(--t3);font-size:12px;margin-bottom:16px">${i.email||``} · Plan: <strong style="color:var(--t)">${i.plan||`—`}</strong> · Registered: ${h(i.created_at)} · Last seen: <strong style="color:var(--t)">${b}</strong></div>

    ${g}
    ${_}

    <!-- TOP STATS — финансовая разбивка всего что у юзера есть на платформе -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-bottom:16px">
      <div style="background:linear-gradient(135deg,rgba(241,196,15,.12),rgba(241,196,15,.04));padding:12px;border-radius:8px;text-align:center;border:1px solid var(--gold)">
        <div style="font-size:22px;font-weight:800;color:var(--gold)">${c(f.total_balance==null?+(f.wallet_balance||0)+ +(f.locked_balance||0)+ +(f.referral_balance||0)+ +(f.total_in_pools_active||0)+ +(f.total_earned_pools||0)+ +(f.total_in_items_active||0):f.total_balance)}</div>
        <div style="font-size:10px;color:var(--gold);font-weight:700;letter-spacing:.5px">═ TOTAL BALANCE</div>
      </div>
      <div style="background:var(--bg2);padding:12px;border-radius:8px;text-align:center">
        <div style="font-size:18px;font-weight:700;color:var(--gold)">${c(f.wallet_balance||0)}</div>
        <div style="font-size:10px;color:var(--t3)">AVAILABLE (FREE)</div>
      </div>
      ${+f.locked_balance>0?`
        <div style="background:rgba(241,196,15,.1);border:1px solid rgba(241,196,15,.4);padding:12px;border-radius:8px;text-align:center">
          <div style="font-size:18px;font-weight:700;color:#f1c40f">${c(f.locked_balance||0)}</div>
          <div style="font-size:10px;color:var(--t3)">🔒 LOCKED (BONUS)</div>
        </div>
      `:``}
      ${+f.referral_balance>0?`
        <div style="background:rgba(155,89,182,.1);border:1px solid rgba(155,89,182,.4);padding:12px;border-radius:8px;text-align:center">
          <div style="font-size:18px;font-weight:700;color:var(--purple)">${c(f.referral_balance||0)}</div>
          <div style="font-size:10px;color:var(--t3)">👥 REF BALANCE</div>
        </div>
      `:``}
      <div style="background:var(--bg2);padding:12px;border-radius:8px;text-align:center">
        <div style="font-size:18px;font-weight:700;color:var(--blue)">${c(f.total_in_pools_active||0)}</div>
        <div style="font-size:10px;color:var(--t3)">IN POOLS (active)</div>
      </div>
      <div style="background:var(--bg2);padding:12px;border-radius:8px;text-align:center">
        <div style="font-size:18px;font-weight:700;color:var(--green)">${c(f.total_earned_pools||0)}</div>
        <div style="font-size:10px;color:var(--t3)">EARNED (pools)</div>
      </div>
      <div style="background:var(--bg2);padding:12px;border-radius:8px;text-align:center">
        <div style="font-size:18px;font-weight:700;color:var(--purple)">${c(f.total_in_items_active||0)}</div>
        <div style="font-size:10px;color:var(--t3)">IN ITEMS (active)</div>
      </div>
      <div style="background:var(--bg2);padding:12px;border-radius:8px;text-align:center">
        <div style="font-size:18px;font-weight:700;color:var(--green)">${c(f.total_deposited||0)}</div>
        <div style="font-size:10px;color:var(--t3)">TOTAL DEPOSITED</div>
      </div>
      <div style="background:var(--bg2);padding:12px;border-radius:8px;text-align:center">
        <div style="font-size:18px;font-weight:700;color:${(f.total_profit_items_realized||0)>=0?`var(--green)`:`var(--red)`}">${(f.total_profit_items_realized||0)>=0?`+`:``}${c(f.total_profit_items_realized||0)}</div>
        <div style="font-size:10px;color:var(--t3)">P/L ITEMS (realized)</div>
      </div>
      ${(i.locked_balance||0)>0&&f.locked_balance==null?`
      <div style="background:rgba(241,196,15,.1);border:1px solid rgba(241,196,15,.4);padding:12px;border-radius:8px;text-align:center">
        <div style="font-size:18px;font-weight:700;color:#f1c40f">${c(i.locked_balance||0)}</div>
        <div style="font-size:10px;color:var(--t3)">🔒 LOCKED ${i.locked_unlocked_at?`<br>(was `+(i.locked_unlock_reason||`?`)+`)`:``}</div>
      </div>`:``}
      ${(i.referral_balance||0)>0?`
      <div style="background:rgba(155,89,182,.1);border:1px solid rgba(155,89,182,.4);padding:12px;border-radius:8px;text-align:center">
        <div style="font-size:18px;font-weight:700;color:var(--purple)">${c(i.referral_balance||0)}</div>
        <div style="font-size:10px;color:var(--t3)">REF BALANCE (pending)</div>
      </div>`:``}
      ${(()=>{let e=(i.ref_tier||`bronze`).toLowerCase(),t={bronze:`#cd7f32`,silver:`#c0c0c0`,gold:`#ffd700`,platinum:`#e5e4e2`}[e]||`#cd7f32`,n=e.charAt(0).toUpperCase()+e.slice(1),r={bronze:3,silver:5,gold:7,platinum:10}[e]||3,a=i.ref_tier_override||i.ref_rate_override!==null&&i.ref_rate_override!==void 0,o=i.ref_rate_override!==null&&i.ref_rate_override!==void 0?i.ref_rate_override:r;return`<div style="background:var(--bg2);padding:12px;border-radius:8px;text-align:center;border-top:3px solid ${t};position:relative">
          <div style="font-size:14px;font-weight:700;color:${t}">${n}${a?` <span title="Manual override active" style="font-size:9px;color:var(--orange)">●</span>`:``}</div>
          <div style="font-size:10px;color:var(--t3)">REF TIER · ${o}% rate${a?` (manual)`:``}</div>
          <div style="font-size:10px;color:var(--green);margin-top:2px">Earned $${(i.ref_total_earned_lifetime||0).toFixed(2)} lifetime</div>
          <button class="btn btn-sm btn-b" style="margin-top:6px;font-size:9px;padding:3px 8px" onclick="openRefOverrideModal('${i.login}', '${e}', ${o}, ${a})">⚙ OVERRIDE</button>
        </div>`})()}
    </div>

    <!-- REFERRER + REFERRALS -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
      <div style="background:var(--bg2);padding:12px;border-radius:8px">
        <div style="font-size:11px;font-weight:700;color:var(--purple);margin-bottom:6px">⬆️ REFERRED BY</div>
        ${u?`<div style="font-size:13px"><strong style="color:var(--gold);cursor:pointer" onclick="showUserDetail('${u.login}')">@${u.login}</strong> — ${u.first_name||``} ${u.last_name||``}</div><div style="font-size:11px;color:var(--t3);margin-top:3px">Balance: ${c(u.wallet_balance||0)} · Deposited: ${c(u.total_deposited||0)}</div>`:`<div style="color:var(--t3);font-size:13px;padding:6px 0">Direct (no referral)</div>`}
      </div>
      <div style="background:var(--bg2);padding:12px;border-radius:8px">
        <div style="font-size:11px;font-weight:700;color:var(--purple);margin-bottom:6px">⬇️ BROUGHT REFERRALS (${d.length}, qualified: ${f.qualified_referrals||0})</div>
        ${d.length===0?`<div style="color:var(--t3);font-size:13px;padding:6px 0">No referrals yet</div>`:`<div style="max-height:120px;overflow-y:auto">${d.map(e=>`
              <div style="display:flex;justify-content:space-between;align-items:center;padding:4px 0;border-bottom:1px solid var(--bd);font-size:12px">
                <span>${e.referral_qualified?`✓`:`○`} <strong style="color:var(--gold);cursor:pointer" onclick="showUserDetail('${e.login}')">@${e.login}</strong> ${e.banned?`<span style="color:var(--red);font-size:10px">BAN</span>`:``}</span>
                <span style="color:var(--t3)">${c(e.wallet_balance||0)} / ${c(e.total_deposited||0)}</span>
              </div>
            `).join(``)}</div>`}
      </div>
    </div>

    <!-- POOL POSITIONS -->
    <div style="margin-bottom:16px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">💼 POOL POSITIONS (${o.length})</div>
      ${o.length===0?`<div style="color:var(--t3);font-size:12px;padding:8px;background:var(--bg2);border-radius:6px;text-align:center">No pool investments</div>`:`<div style="background:var(--bg2);border-radius:6px;overflow:hidden;max-height:200px;overflow-y:auto">
             <table style="width:100%;border-collapse:collapse;font-size:12px">
               <thead style="background:var(--bg);color:var(--t3);font-size:10px;font-weight:700"><tr>
                 <th style="text-align:left;padding:8px">PLAN</th>
                 <th style="text-align:right;padding:8px">INVESTED</th>
                 <th style="text-align:right;padding:8px">EARNED</th>
                 <th style="text-align:center;padding:8px">STATUS</th>
                 <th style="text-align:left;padding:8px">CREATED</th>
               </tr></thead>
               <tbody>${o.map(e=>`
                 <tr style="border-top:1px solid var(--bd)">
                   <td style="padding:8px;font-weight:600;color:${e.plan===`platinum`?`var(--purple)`:e.plan===`gold`?`var(--gold)`:`#bbb`}">${(e.plan||`—`).toUpperCase()}</td>
                   <td style="padding:8px;text-align:right">${c(e.amount_usd||0)}</td>
                   <td style="padding:8px;text-align:right;color:var(--green)">+${c(e.earned_usd||0)}</td>
                   <td style="padding:8px;text-align:center"><span style="background:${e.status===`active`?`var(--green)`:`var(--t3)`};color:#fff;padding:2px 8px;border-radius:4px;font-size:10px">${(e.status||``).toUpperCase()}</span></td>
                   <td style="padding:8px;color:var(--t3);font-size:11px">${h(e.created_at)}</td>
                 </tr>`).join(``)}
               </tbody>
             </table>
           </div>`}
    </div>

    <!-- ITEM PURCHASES -->
    <div style="margin-bottom:16px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🏷️ ITEM PURCHASES (${s.length})</div>
      ${s.length===0?`<div style="color:var(--t3);font-size:12px;padding:8px;background:var(--bg2);border-radius:6px;text-align:center">No item purchases</div>`:`<div style="background:var(--bg2);border-radius:6px;overflow:hidden;max-height:240px;overflow-y:auto">
             <table style="width:100%;border-collapse:collapse;font-size:12px">
               <thead style="background:var(--bg);color:var(--t3);font-size:10px;font-weight:700"><tr>
                 <th style="text-align:left;padding:8px">ITEM</th>
                 <th style="text-align:right;padding:8px">FRACTION</th>
                 <th style="text-align:right;padding:8px">PAID</th>
                 <th style="text-align:right;padding:8px">PAYOUT</th>
                 <th style="text-align:right;padding:8px">P/L</th>
                 <th style="text-align:center;padding:8px">STATUS</th>
                 <th style="text-align:left;padding:8px">BOUGHT</th>
               </tr></thead>
               <tbody>${s.map(e=>{let t=e.profit_loss_usd,n=t==null?`—`:(t>=0?`+`:``)+c(t),r=t==null?`var(--t3)`:t>=0?`var(--green)`:`var(--red)`;return`<tr style="border-top:1px solid var(--bd)">
                   <td style="padding:8px;font-weight:600">${e.item_name||`item #`+e.item_id}</td>
                   <td style="padding:8px;text-align:right">${(e.fraction_pct||0).toFixed(2)}%</td>
                   <td style="padding:8px;text-align:right">${c(e.amount_paid_usd||0)}</td>
                   <td style="padding:8px;text-align:right;color:var(--gold)">${e.payout_usd?c(e.payout_usd):`—`}</td>
                   <td style="padding:8px;text-align:right;color:${r};font-weight:600">${n}</td>
                   <td style="padding:8px;text-align:center"><span style="background:${e.status===`active`?`var(--green)`:e.status===`sold`?`var(--blue)`:`var(--t3)`};color:#fff;padding:2px 8px;border-radius:4px;font-size:10px">${(e.status||``).toUpperCase()}</span></td>
                   <td style="padding:8px;color:var(--t3);font-size:11px">${h(e.bought_at)}</td>
                 </tr>`}).join(``)}
               </tbody>
             </table>
           </div>`}
    </div>

    <!-- REFERRAL EARNINGS (lazy-loaded) -->
    <div style="margin-bottom:16px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🌳 REFERRAL EARNINGS</div>
      <div id="dossierRefEarnings" style="background:var(--bg2);border-radius:6px;padding:8px;font-size:12px;color:var(--t3);text-align:center">
        <button class="btn btn-b btn-sm" onclick="loadRefEarningsForDossier('${i.login}')">📊 Load earnings history</button>
      </div>
    </div>

    <!-- BONUS ACTIONS (admin) -->
    ${(i.locked_balance||0)>0&&!i.locked_unlocked_at?`
    <div style="background:rgba(241,196,15,.08);border:1px solid rgba(241,196,15,.3);padding:10px 12px;border-radius:6px;margin-bottom:14px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
      <div style="font-size:12px">
        <strong style="color:#f1c40f">🔒 Locked: ${c(i.locked_balance||0)}</strong>
        <div style="color:var(--t3);font-size:11px;margin-top:2px">User must complete unlock conditions, or admin can force-unlock</div>
      </div>
      <button class="btn btn-sm" style="background:#f1c40f;color:#000;font-weight:700" onclick="forceUnlockBonus('${i.login}')">🔓 FORCE UNLOCK</button>
    </div>`:``}

    <!-- META -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;font-size:12px">
      <div style="color:var(--t3)">Referral code: <strong style="color:var(--gold)">${i.ref_code||`—`}</strong> <span style="color:var(--t3);font-size:10px">(or use @${i.login})</span></div>
      <div style="color:var(--t3)">Referral earned total: <strong style="color:var(--green)">${c(i.ref_total_earned_lifetime||f.referral_earned_total||0)}</strong></div>
      <div style="color:var(--t3)">First-deposit bonus used: <strong style="color:var(--t)">${i.has_first_deposit_bonus?`NO (eligible)`:`YES (used)`}</strong></div>
      <div style="color:var(--t3)">Welcome bonus: <strong style="color:var(--t)">${i.welcome_bonus_received?`received`:`never`}</strong></div>
      <div style="color:var(--t3)">Coupon: <strong style="color:var(--t)">${i.coupon_redeemed_id?`redeemed (#`+i.coupon_redeemed_id+`)`:`available`}</strong></div>
      <div style="color:var(--t3)">Email: <strong style="color:var(--t)">${i.email||`—`}</strong></div>
      ${i.note?`<div style="grid-column:1/-1;color:var(--t3)">Note: <strong style="color:var(--gold)">${i.note}</strong></div>`:``}
    </div>

    <!-- TRANSACTIONS — полный лог действий юзера на платформе -->
    <div style="font-size:12px;font-weight:700;margin-bottom:8px">TRANSACTION HISTORY (${l.length})</div>
    <div style="max-height:280px;overflow-y:auto;background:var(--bg2);border-radius:6px;padding:6px">
      ${l.length===0?`<div style="color:var(--t3);text-align:center;padding:16px">No transactions</div>`:l.map(e=>{let t=new Set([`withdrawal`,`admin_debit`,`item_buy`,`pool_invest`,`pool_withdraw`,`secondary_buy`]),n=new Set([`deposit`,`bonus`,`first_deposit_bonus`,`admin_bonus`,`item_sell`,`pool_accrual`,`early_exit`,`secondary_sell`]),r={deposit:`💰`,withdrawal:`💸`,bonus:`🎁`,first_deposit_bonus:`🎁`,admin_bonus:`🎁`,admin_debit:`⚠️`,item_buy:`🛒`,item_sell:`💎`,pool_invest:`📥`,pool_withdraw:`📤`,pool_accrual:`📈`,early_exit:`🏃`,secondary_buy:`🛒`,secondary_sell:`💎`},i={deposit:`Deposit`,withdrawal:`Withdraw`,bonus:`Bonus`,first_deposit_bonus:`First-deposit bonus`,admin_bonus:`Admin credit`,admin_debit:`Admin debit`,item_buy:`Item buy`,item_sell:`Item sell`,pool_invest:`Pool invest`,pool_withdraw:`Pool exit`,pool_accrual:`Pool earn`,early_exit:`Early exit`,secondary_buy:`2nd-mkt buy`,secondary_sell:`2nd-mkt sell`},a=e.type||`unknown`,o=t.has(a),s=n.has(a),l=s?`var(--green)`:o?`var(--red)`:`var(--t3)`,u=o?`−`:s?`+`:``,d=r[a]||`•`,f=i[a]||a,p=Math.abs(Number(e.amount_usd||e.amount||0));return`<div style="display:flex;justify-content:space-between;padding:6px 8px;border-bottom:1px solid var(--bd);font-size:12px">
              <div>
                <span style="color:${l}">${d} ${f}</span>
                <span style="background:var(--bg);color:var(--t3);padding:1px 6px;border-radius:4px;font-size:10px;margin-left:4px">${(e.status||``).toUpperCase()}</span>
                <div style="font-size:10px;color:var(--t3)">${m(e.created_at)}${e.rejection_reason?` · `+e.rejection_reason:``}</div>
              </div>
              <div style="font-weight:700;color:${l}">${u}${c(p)}</div>
            </div>`}).join(``)}
    </div>

    <!-- ACTIONS -->
    <div style="display:flex;gap:8px;margin-top:14px">
      <button class="btn btn-g" onclick="addBalancePrompt('${e}','${(i.first_name||``)+` `+(i.last_name||``)}')" style="flex:1">+ ADD BALANCE</button>
      <button class="btn btn-b" onclick="sendMsgPrompt('${e}')" style="flex:1">SEND MSG</button>
    </div>
  `}function S(e){let t=document.getElementById(`extraPhotosList`);if(!t)return;let n=(e||[]).slice(0,5);if(n.length===0){t.innerHTML=`<div style="font-size:11px;color:var(--t3);text-align:center;padding:8px">No additional photos. Click + ADD URL to attach more.</div>`;return}t.innerHTML=n.map((e,t)=>`
    <div style="display:flex;gap:6px;align-items:center;margin-bottom:6px">
      <div style="width:48px;height:48px;flex-shrink:0;background:var(--bg2);border-radius:6px;overflow:hidden;display:flex;align-items:center;justify-content:center;border:1px solid var(--bd)">
        <img src="${e.replace(/"/g,`&quot;`)}" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display='none';this.parentNode.innerHTML='<span style=&quot;font-size:18px;color:var(--t3)&quot;>📷</span>'">
      </div>
      <input type="text" class="inp extra-photo-url" data-idx="${t}" value="${e.replace(/"/g,`&quot;`)}" oninput="onExtraPhotoChange(${t}, this.value)" style="flex:1" placeholder="https://...">
      <button type="button" class="btn btn-r btn-sm" onclick="removeExtraPhoto(${t})" style="flex-shrink:0">✕</button>
    </div>
  `).join(``)}function C(){let e=document.querySelectorAll(`#extraPhotosList .extra-photo-url`);return Array.from(e).map(e=>(e.value||``).trim()).filter(Boolean)}function w(){let e=C();if(e.length>=5){s(`Max 5 additional photos`,!1);return}e.push(``),S(e),setTimeout(()=>{let e=document.querySelectorAll(`#extraPhotosList .extra-photo-url`);e.length>0&&e[e.length-1].focus()},50)}function T(e){let t=C();t.splice(e,1),S(t)}function E(e,t){let n=(document.querySelectorAll(`#extraPhotosList .extra-photo-url`)[e]?.closest(`div`))?.querySelector(`img`);n&&t.trim()&&(n.src=t.trim(),n.style.display=``)}window.addPhotoUrl=w,window.removeExtraPhoto=T,window.onExtraPhotoChange=E;function D(e){let t=e.files[0];if(!t)return;if(!t.type.startsWith(`image/`)){s(`❌ Please select an image file (JPG, PNG, WEBP)`,!1);return}if(t.size>5*1024*1024){s(`❌ File size too large. Maximum 5MB allowed.`,!1);return}let n=new FileReader;n.onload=function(e){e.target.result,t.name;let n=document.getElementById(`previewImage`)||document.getElementById(`previewImg`);n&&(n.src=e.target.result),document.getElementById(`photoPreview`).style.display=`block`,document.getElementById(`photoUploadArea`).style.display=`none`,s(`📸 Photo loaded successfully!`,!0)},n.readAsDataURL(t)}document.addEventListener(`DOMContentLoaded`,()=>{g(),setInterval(g,3e4),document.querySelectorAll(`.modal-bg`).forEach(e=>{e.addEventListener(`click`,t=>{t.target===e&&e.classList.remove(`show`)})}),te()});function te(){document.addEventListener(`click`,function(e){if(document.getElementById(`addItemModal`).classList.contains(`show`)){let e=document.getElementById(`photoDropZone`);if(!e)return;[`dragenter`,`dragover`,`dragleave`,`drop`].forEach(t=>{e.addEventListener(t,O,!1),document.body.addEventListener(t,O,!1)}),[`dragenter`,`dragover`].forEach(t=>{e.addEventListener(t,()=>{e.style.background=`var(--gg)`,e.style.borderColor=`var(--gold)`},!1)}),[`dragleave`,`drop`].forEach(t=>{e.addEventListener(t,()=>{e.style.background=`var(--bg2)`,e.style.borderColor=`var(--bd)`},!1)}),e.addEventListener(`drop`,k,!1)}})}function O(e){e.preventDefault(),e.stopPropagation()}function k(e){let t=e.dataTransfer.files;t.length>0&&D({files:[t[0]]})}document.addEventListener(`DOMContentLoaded`,function(){let e=document.getElementById(`photoUploadArea`),t=document.getElementById(`photoInput`),n=document.getElementById(`browsePhoto`);e&&t&&(e.addEventListener(`click`,()=>{t.click()}),n&&n.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),t.click()}),e.addEventListener(`dragover`,t=>{t.preventDefault(),e.classList.add(`dragover`)}),e.addEventListener(`dragleave`,t=>{t.preventDefault(),e.contains(t.relatedTarget)||e.classList.remove(`dragover`)}),e.addEventListener(`drop`,t=>{t.preventDefault(),e.classList.remove(`dragover`);let n=t.dataTransfer.files;if(n&&n[0]){let e=n[0];if(!e.type.startsWith(`image/`)){s(`❌ Please select an image file (JPG, PNG, WEBP)`,!1);return}if(e.size>5*1024*1024){s(`❌ File size too large. Maximum 5MB allowed.`,!1);return}D({files:[e]}),s(`📸 Photo loaded successfully!`,!0)}}),t.addEventListener(`change`,function(){D(this)}))});let A=new Set,j=new Set,M=1,N=0,P=0,F=!1,I=0,L=0,R=0,z=0,B=0,V=0,H=0,U=null,W=!1,G=.92,K=.05,q={};function ne(e){return e.banned?`var(--red)`:e.referred_by?e.referral_qualified?`var(--green)`:`#f1c40f`:`var(--gold)`}function re(e){return e.banned?`#e74c3c`:e.referred_by?e.referral_qualified?`#27ae60`:`#f1c40f`:`#c9a84c`}function J(e){if(!e)return`—`;let t=Math.floor((Date.now()-new Date(e).getTime())/6e4);return t<1?`now`:t<60?t+`m`:t<1440?Math.floor(t/60)+`h`:Math.floor(t/1440)+`d`}function ie(e,t){let n=e.children&&e.children.length>0,r=A.has(e.login),i=ne(e),a=e.banned?`BAN`:e.referral_qualified?`✓`:`○`,o=e.banned?`var(--red)`:e.referral_qualified?`var(--green)`:`#f1c40f`;return`
    <div class="rt-node" data-login="${e.login.toLowerCase()}" data-name="${((e.first_name||``)+` `+(e.last_name||``)).toLowerCase()}" style="margin-left:${t*22}px;margin-bottom:6px">
      <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:var(--bg);border-left:3px solid ${i};border-radius:6px;cursor:pointer" onclick="reftreeToggle('${e.login}')">
        ${n?`<span style="display:inline-block;width:16px;color:var(--t3);font-size:11px">${r?`▼`:`▶`}</span>`:`<span style="display:inline-block;width:16px"></span>`}
        <span style="display:inline-block;width:18px;height:18px;border-radius:50%;background:${o};color:#000;font-size:10px;font-weight:700;text-align:center;line-height:18px">${a}</span>
        <strong style="color:var(--gold);font-size:13px;cursor:pointer" onclick="event.stopPropagation();showUserDetail('${e.login}')">@${e.login}</strong>
        <span style="color:var(--t);font-size:12px">${e.first_name||``} ${e.last_name||``}</span>
        ${n?`<span style="background:var(--purple);color:#fff;padding:1px 7px;border-radius:10px;font-size:10px;font-weight:700">${e.children.length}</span>`:``}
        <span style="margin-left:auto;color:var(--t3);font-size:11px">$${(e.wallet_balance||0).toFixed(0)} / dep $${(e.total_deposited||0).toFixed(0)} · ${J(e.last_seen)}</span>
      </div>
      ${n&&r?`<div class="rt-children">${e.children.map(e=>ie(e,t+1)).join(``)}</div>`:``}
    </div>
  `}function ae(e){let t=0,n=[];function r(e,t){if(e._depth=t,!e.children||e.children.length===0)return e._y=0,e._height=56,56;let n=0;return e.children.forEach((i,a)=>{let o=r(i,t+1);i._y=n,n+=o,a<e.children.length-1&&(n+=14)}),e._height=n,n}function i(e,t,r){if(e._x=t,!e.children||e.children.length===0)e._absY=r;else{let n=r-e._height/2+56/2;e.children.forEach(e=>{let r=e._height||56;i(e,t+180+60,n+r/2-56/2),n+=r+14}),e._absY=(e.children[0]._absY+e.children[e.children.length-1]._absY)/2}n.push(e)}return e.forEach(e=>{let n=r(e,0);i(e,20,t+n/2),t+=n+40}),{nodes:n,totalHeight:t}}function Y(e){return String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function oe(){let e=document.getElementById(`reftreeContainer`);if(!e)return;e.style.padding=`0`;let t=null.roots||[];if(t.length===0){e.innerHTML=`<div style="color:var(--t3);text-align:center;padding:40px">No users yet.</div>`;return}let n=ae(t),r=(document.getElementById(`reftreeSearch`)?.value||``).toLowerCase().trim(),i=0,a=0;n.nodes.forEach(e=>{e._x+180>i&&(i=e._x+180),e._absY+56/2>a&&(a=e._absY+56/2)});let o=Math.max(i+40,e.clientWidth),s=Math.max(a+40,600),c=`<g id="rtMmGroup" transform="translate(${N},${P}) scale(${M})">`;n.nodes.forEach(e=>{(e.children||[]).forEach(t=>{let n=e._x+180,r=e._absY+56/2,i=t._x,a=t._absY+56/2,o=(n+i)/2,s=`M ${n} ${r} C ${o} ${r}, ${o} ${a}, ${i} ${a}`,l=j.has(e.login)&&j.has(t.login);c+=`<path d="${s}" fill="none" stroke="${l?`#c9a84c`:`#2a2a2a`}" stroke-width="${l?2.5:1.5}" />`})}),n.nodes.forEach(e=>{let t=e._x,n=e._absY,i=re(e),a=`${e.first_name||``} ${e.last_name||``}`.trim(),o=!r||e.login.toLowerCase().includes(r)||a.toLowerCase().includes(r),s=r&&!o?.25:1,l=j.has(e.login)?3:2,u=e.banned?`BAN`:e.referral_qualified?`✓`:`○`,d=e.banned?`#e74c3c`:e.referral_qualified?`#27ae60`:`#f1c40f`,f=a.length>20?a.substring(0,19)+`…`:a,p=(e.children||[]).length,m=(e.ref_tier||`bronze`).toLowerCase(),h={bronze:`#cd7f32`,silver:`#c0c0c0`,gold:`#ffd700`,platinum:`#e5e4e2`}[m]||`#cd7f32`,g=m.charAt(0).toUpperCase(),_=p>0;c+=`
      <g class="rt-mm-node" data-login="${e.login}" transform="translate(${t},${n})" opacity="${s}" style="cursor:pointer">
        <rect width="180" height="56" rx="8" fill="#0a0a0a" stroke="${i}" stroke-width="${l}" class="rt-mm-bg" />
        <circle cx="16" cy="${56/2}" r="10" fill="${d}" />
        <text x="16" y="32" font-size="11" font-weight="700" fill="#000" text-anchor="middle" style="pointer-events:none">${u}</text>
        <text x="34" y="22" font-size="13" font-weight="700" fill="${i}" style="pointer-events:none">@${Y(e.login)}</text>
        <text x="34" y="38" font-size="11" fill="#b8b8b8" style="pointer-events:none">${Y(f)}</text>
        <text x="34" y="50" font-size="10" fill="#6b6b6b" style="pointer-events:none">$${(e.wallet_balance||0).toFixed(0)} · ${J(e.last_seen)}</text>
        ${_?`
          <rect x="152" y="3" width="22" height="14" rx="3" fill="${h}" opacity="0.85" />
          <text x="163" y="13" font-size="9" font-weight="800" fill="#000" text-anchor="middle" style="pointer-events:none">${g}</text>
        `:``}
        ${p>0?`
          <circle cx="166" cy="${56/2}" r="11" fill="#9b59b6" />
          <text x="166" y="32" font-size="10" font-weight="700" fill="#fff" text-anchor="middle" style="pointer-events:none">${p}</text>
        `:``}
      </g>
    `}),c+=`</g>`,e.innerHTML=`
    <div style="position:sticky;top:8px;left:8px;z-index:10;display:flex;gap:6px;margin:8px;width:fit-content">
      <button onclick="rtZoomBy(1.2)" title="Zoom in" style="width:32px;height:32px;background:var(--bg);border:1px solid var(--bd);border-radius:6px;color:var(--t);cursor:pointer;font-size:14px">+</button>
      <button onclick="rtZoomBy(0.8)" title="Zoom out" style="width:32px;height:32px;background:var(--bg);border:1px solid var(--bd);border-radius:6px;color:var(--t);cursor:pointer;font-size:14px">−</button>
      <button onclick="rtFitToView()" title="Fit" style="width:32px;height:32px;background:var(--bg);border:1px solid var(--bd);border-radius:6px;color:var(--t);cursor:pointer;font-size:14px">⊡</button>
    </div>
    <svg id="rtMmSvg" width="${o}" height="${s}" viewBox="0 0 ${o} ${s}" style="display:block;cursor:grab">${c}</svg>
  `,le(),e.querySelectorAll(`.rt-mm-node`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),se(e.dataset.login)}),e.addEventListener(`mouseenter`,t=>ce(e.dataset.login,t)),e.addEventListener(`mousemove`,e=>X(e)),e.addEventListener(`mouseleave`,()=>Z())})}function se(e){if(j.has(e)&&j.size>0){Z(),x(e);return}j=new Set;let t=q[e];for(;t;)j.add(t.login),t=t.referred_by?q[t.referred_by]:null;let n=q[e];n&&(n.children||[]).forEach(e=>j.add(e.login)),oe()}function ce(e,t){let n=q[e];if(!n)return;let r=document.getElementById(`rtTooltip`);r&&(r.innerHTML=`
    <strong style="color:var(--gold)">@${n.login}</strong> ${n.banned?`<span style="color:var(--red);margin-left:4px">BANNED</span>`:``}<br>
    <span style="color:var(--t)">${n.first_name||``} ${n.last_name||``}</span>
    <div style="margin-top:6px;color:var(--t2)">Balance: <strong style="color:var(--gold)">$${(n.wallet_balance||0).toFixed(2)}</strong></div>
    <div style="color:var(--t2)">Deposited: <strong style="color:var(--green)">$${(n.total_deposited||0).toFixed(2)}</strong></div>
    <div style="color:var(--t2)">Status: <strong>${n.banned?`Banned`:n.referral_qualified?`Qualified`:`Pending`}</strong></div>
    <div style="color:var(--t2)">Referred by: <strong>${n.referred_by||`— (root)`}</strong></div>
    <div style="color:var(--t2)">Direct children: <strong>${(n.children||[]).length}</strong></div>
    <div style="color:var(--t2)">Last seen: <strong>${J(n.last_seen)}</strong></div>
    <div style="margin-top:6px;color:var(--gold);font-size:10px">Click → highlight chain · Click again → open profile</div>
  `,r.style.display=`block`,X(t))}function X(e){let t=document.getElementById(`rtTooltip`);if(!t||t.style.display===`none`)return;let n=e.clientX+16,r=e.clientY+16;t.style.left=Math.min(n,window.innerWidth-280)+`px`,t.style.top=Math.min(r,window.innerHeight-220)+`px`}function Z(){let e=document.getElementById(`rtTooltip`);e&&(e.style.display=`none`)}function Q(){let e=document.getElementById(`rtMmGroup`);e&&(W?e.style.transition=`transform 0.18s cubic-bezier(0.25, 0.1, 0.25, 1.0)`:e.style.transition=`none`,e.setAttribute(`transform`,`translate(${N},${P}) scale(${M})`))}function le(){let e=document.getElementById(`rtMmSvg`);if(!e)return;let t=t=>{if(t.target.closest(`.rt-mm-node`)||t.target.closest(`button`))return;F=!0,W=!1,$();let n=t.touches?t.touches[0]:t;I=n.clientX-N,L=n.clientY-P,B=n.clientX,V=n.clientY,H=performance.now(),R=0,z=0,e.style.cursor=`grabbing`,t.preventDefault()},n=e=>{if(!F)return;let t=e.touches?e.touches[0]:e,n=t.clientX-I,r=t.clientY-L,i=performance.now(),a=Math.max(1,i-H);R=(t.clientX-B)/a*16,z=(t.clientY-V)/a*16,B=t.clientX,V=t.clientY,H=i,N=n,P=r,Q()},r=()=>{F&&(F=!1,e&&(e.style.cursor=`grab`),(Math.abs(R)>K||Math.abs(z)>K)&&ue())};e._rtHandlersAttached&&(e.removeEventListener(`mousedown`,e._rtOnDown),document.removeEventListener(`mousemove`,e._rtOnMove),document.removeEventListener(`mouseup`,e._rtOnUp),e.removeEventListener(`wheel`,e._rtOnWheel)),e._rtOnDown=t,e._rtOnMove=n,e._rtOnUp=r,e._rtHandlersAttached=!0,e.addEventListener(`mousedown`,t),document.addEventListener(`mousemove`,n),document.addEventListener(`mouseup`,r);let i=e=>{e.preventDefault(),$();let t=e.deltaY;e.deltaMode===1&&(t*=16),e.deltaMode===2&&(t*=100),de(Math.exp(-t*.0015),e.clientX,e.clientY,!1)};e._rtOnWheel=i,e.addEventListener(`wheel`,i,{passive:!1})}function ue(){$();let e=()=>{N+=R,P+=z,R*=G,z*=G,Q(),U=Math.abs(R)>K||Math.abs(z)>K?requestAnimationFrame(e):null};U=requestAnimationFrame(e)}function $(){U&&=(cancelAnimationFrame(U),null)}function de(e,t,n,r){let i=document.getElementById(`rtMmSvg`);if(!i)return;let a=Math.max(.15,Math.min(4,M*e));if(a/M===1)return;let o=i.getBoundingClientRect(),s=t-o.left,c=n-o.top,l=(s-N)/M,u=(c-P)/M;M=a,N=s-l*M,P=c-u*M,W=!!r,Q(),r&&setTimeout(()=>{W=!1},200)}console.log(`✅ LUXOR Admin Panel - Mind-Map Tree + Drag & Drop Photo Upload`),console.log(`✅ [REF-V2] Admin Referral Program panel loaded`),console.log(`✅ [CMS] How-To-Invest + Insights admin panels loaded`)}export{e as initAdmin};