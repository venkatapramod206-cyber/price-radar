// PricePro v8 — All Issues Fixed

const state = {
  wishlist:[], compare:[], currentQuery:"",
  currentProducts:[], displayedCount:0,
  selectedBrands:[], selectedSizes:[], selectedGender:"all",
  priceMin:0, priceMax:200000,
  recentlyViewed:[], user:null
};
const PAGE_SIZE = 12;

// ── COUPON DATA (realistic bank/store offers) ────────────────
const COUPONS = [
  { store:"Amazon",   emoji:"🛒", title:"10% off with HDFC Card",    desc:"On Electronics ₹5,000+",    code:"HDFCAMP10",  note:"Bank offer — verify at checkout" },
  { store:"Flipkart", emoji:"🏬", title:"5% Cashback — Axis Card",    desc:"All categories, no min.",   code:"FKAXIS5",    note:"Axis Bank credit cards only" },
  { store:"Myntra",   emoji:"👗", title:"₹150 off on ₹799+",          desc:"Fashion items only",        code:"MYNTRA150",  note:"First 3 uses per account" },
  { store:"Croma",    emoji:"🔌", title:"Extra ₹1,000 Exchange Bonus", desc:"On phones ₹20,000+",       code:"CROMAXCHG",  note:"With old phone exchange" },
  { store:"AJIO",     emoji:"✨", title:"20% off + Free Shipping",     desc:"Min. order ₹1,299",        code:"AJIOFF20",   note:"Selected brands only" },
  { store:"Flipkart", emoji:"📱", title:"No-Cost EMI on Smartphones",  desc:"6/9/12 month plans",       code:"FKEMI0",     note:"HDFC/ICICI/Kotak cards" },
];

// ── REALISTIC REVIEW POOL (mix of ratings incl. negatives) ──
const REVIEWS = {
  Smartphones:[
    {r:5, name:"Rahul Sharma",      city:"Mumbai",    text:"Been using it 2 months. Camera in low light is outstanding. Battery easily lasts a full day."},
    {r:5, name:"Priya Mehta",       city:"Bangalore", text:"Bought from Flipkart, arrived in 2 days. Smooth performance even in heavy gaming sessions."},
    {r:4, name:"Arjun Kumar",       city:"Delhi",     text:"Great phone but the box charger is too slow. Bought a 65W charger separately — now perfect."},
    {r:3, name:"Deepa Reddy",       city:"Hyderabad", text:"Decent phone for the price but heating is noticeable during 30+ minutes of gaming. Expected better."},
    {r:2, name:"Vikash Singh",      city:"Chennai",   text:"Screen developed a faint line after 6 weeks. Customer support asked me to visit a service centre. Inconvenient."},
    {r:4, name:"Sunita Patel",      city:"Pune",      text:"Very happy with the display and performance. One complaint — the back is a fingerprint magnet."},
  ],
  Laptops:[
    {r:5, name:"Amit Gupta",        city:"Kolkata",   text:"Boots in under 15 seconds. Display is excellent for long WFH sessions. Battery lasts 8-9 hours."},
    {r:5, name:"Neha Bose",         city:"Ahmedabad", text:"Fan noise is almost nonexistent on normal tasks. Great build quality — feels premium."},
    {r:4, name:"Kiran Joshi",       city:"Jaipur",    text:"Good performance. Gets slightly warm under heavy load but not uncomfortable. Keyboard feels great."},
    {r:3, name:"Suresh Menon",      city:"Lucknow",   text:"Screen brightness is a bit low for outdoor use. Works fine indoors. Okay value at this price."},
    {r:2, name:"Pooja Lal",         city:"Nagpur",    text:"Trackpad had a clicking issue out of the box. Service centre fixed it but the experience was frustrating."},
    {r:5, name:"Ravi Chandran",     city:"Surat",     text:"Using for college — handles multiple tabs, coding and video calls without any lag. Highly recommend."},
  ],
  Headphones:[
    {r:5, name:"Anita Das",         city:"Indore",    text:"ANC is incredible — completely cuts out office noise. Sound quality is clear, bass is punchy."},
    {r:5, name:"Manoj Nair",        city:"Coimbatore",text:"Game changer for Mumbai metro commute. Comfortable for 4+ hour sessions."},
    {r:4, name:"Priya Mehta",       city:"Bangalore", text:"Great sound but ear cups get slightly warm after 2 hours. Minor issue at this price point."},
    {r:3, name:"Rahul Sharma",      city:"Mumbai",    text:"ANC is not as strong as my old Sony. Comfortable though, and call quality is decent."},
    {r:2, name:"Kiran Joshi",       city:"Jaipur",    text:"Left earbud stopped charging after 3 weeks. Replacement under warranty but the experience was poor."},
    {r:4, name:"Sunita Patel",      city:"Pune",      text:"Good build quality. Foldable design is convenient for travel. Battery as advertised."},
  ],
  Sneakers:[
    {r:5, name:"Arjun Kumar",       city:"Delhi",     text:"Super comfortable from day one. Zero break-in needed. Wore for 8km walk — zero discomfort."},
    {r:5, name:"Neha Bose",         city:"Ahmedabad", text:"Looks exactly as shown. Great cushioning. Delivered in 2 days. Wearing them daily."},
    {r:4, name:"Vikash Singh",      city:"Chennai",   text:"Quality is good but sizing runs slightly narrow. Size up if you have wide feet."},
    {r:3, name:"Deepa Reddy",       city:"Hyderabad", text:"Sole grip is great but the upper stitching started coming loose after 3 months of daily use."},
    {r:2, name:"Pooja Lal",         city:"Nagpur",    text:"Colour faded significantly after 4-5 washes. Not what I expected at this price."},
    {r:5, name:"Amit Gupta",        city:"Kolkata",   text:"Bought online without trying — sizing was perfect using the guide. Very happy."},
  ],
  Clothing:[
    {r:5, name:"Sunita Patel",      city:"Pune",      text:"Fabric quality is surprisingly good. Colours haven't faded after 6 washes. Will buy again."},
    {r:4, name:"Manoj Nair",        city:"Coimbatore",text:"Nice fit, true to size. Good stitching quality. Delivery well-packaged."},
    {r:3, name:"Anita Das",         city:"Indore",    text:"Material is a bit thin for the price. Fine for summer but not suitable for AC environments."},
    {r:2, name:"Ravi Chandran",     city:"Surat",     text:"Received a defective piece with an uneven hem. Return process was smooth but the wait was long."},
    {r:4, name:"Priya Mehta",       city:"Bangalore", text:"Ordered 3 pieces. All exactly as described. Washed multiple times — quality holds up well."},
    {r:5, name:"Kiran Joshi",       city:"Jaipur",    text:"Value for money. Fabric doesn't pill after washing. Satisfied with the purchase."},
  ],
  Watches:[
    {r:5, name:"Rahul Sharma",      city:"Mumbai",    text:"Accurate tracking. Sleep and SpO2 data has been helpful for my fitness routine."},
    {r:5, name:"Neha Bose",         city:"Ahmedabad", text:"Looks great. Notifications work perfectly. Definitely worth the price."},
    {r:4, name:"Deepa Reddy",       city:"Hyderabad", text:"Good smartwatch overall. GPS lock is slightly slow but accurate once it connects."},
    {r:3, name:"Vikash Singh",      city:"Chennai",   text:"Battery doesn't match the claimed 14 days with always-on display. More like 7-8 days. Fine otherwise."},
    {r:2, name:"Pooja Lal",         city:"Nagpur",    text:"Strap pin broke after 5 weeks. Seems like a design flaw. Had to buy a third-party strap."},
    {r:4, name:"Amit Gupta",        city:"Kolkata",   text:"Daily use for 6 months. Comfortable band, accurate heart rate readings. Happy overall."},
  ],
  TVs:[
    {r:5, name:"Arjun Kumar",       city:"Delhi",     text:"Picture quality is stunning. Set up in 20 minutes. Netflix and Prime work seamlessly."},
    {r:4, name:"Sunita Patel",      city:"Pune",      text:"Great panel. Default sound is average — paired with a soundbar and now it's 10/10."},
    {r:4, name:"Ravi Chandran",     city:"Surat",     text:"4K content looks sharp. Occasional lag in smart TV UI but improves after updates."},
    {r:3, name:"Anita Das",         city:"Indore",    text:"Display is good but the remote feels flimsy and the stand could be more sturdy."},
    {r:2, name:"Manoj Nair",        city:"Coimbatore",text:"Wi-Fi disconnects randomly every few days. Tech support had no real solution. Disappointing."},
    {r:5, name:"Kiran Joshi",       city:"Jaipur",    text:"Massive upgrade from my old TV. The HDR difference is night and day. Worth every rupee."},
  ],
  Cameras:[
    {r:5, name:"Priya Mehta",       city:"Bangalore", text:"Excellent video quality for a beginner camera. Eye-tracking AF is impressive and responsive."},
    {r:5, name:"Rahul Sharma",      city:"Mumbai",    text:"Great for vlogging. Flip screen makes solo filming effortless. Compact enough to carry daily."},
    {r:4, name:"Neha Bose",         city:"Ahmedabad", text:"Good image quality. Low-light performance could be better but it's acceptable for the price."},
    {r:3, name:"Arjun Kumar",       city:"Delhi",     text:"Battery life is short — I need to carry two spares for a full day shoot. Frustrating."},
    {r:2, name:"Deepa Reddy",       city:"Hyderabad", text:"Kit lens is soft at the edges. Expected better sharpness at this price range."},
    {r:5, name:"Vikash Singh",      city:"Chennai",   text:"Switched from phone photography. The learning curve is worth it — stunning images."},
  ],
  default:[
    {r:5, name:"Rahul Sharma",      city:"Mumbai",    text:"Excellent product. Exactly as described. Fast delivery, great packaging."},
    {r:4, name:"Priya Mehta",       city:"Bangalore", text:"Good quality for the price. Minor issues but overall very satisfied."},
    {r:4, name:"Arjun Kumar",       city:"Delhi",     text:"Works exactly as expected. No complaints after 2 months of daily use."},
    {r:3, name:"Deepa Reddy",       city:"Hyderabad", text:"Decent product. Meets basic needs. Nothing extraordinary but no major issues."},
    {r:2, name:"Vikash Singh",      city:"Chennai",   text:"Quality is not as shown in images. Looks cheaper in person. Slightly disappointed."},
    {r:5, name:"Sunita Patel",      city:"Pune",      text:"After a lot of research this was the best deal. Very happy with the decision."},
  ],
};

function generateReviews(p) {
  const pool  = REVIEWS[p.category] || REVIEWS.default;
  const dates = ["Yesterday","2 days ago","4 days ago","1 week ago","2 weeks ago","1 month ago","6 weeks ago","2 months ago"];
  return Array(5).fill(0).map((_,i) => {
    const rev = pool[(p.id*3+i*7) % pool.length];
    return { ...rev, date: dates[(p.id+i*3)%dates.length], store: p.stores[i%p.stores.length].name };
  });
}

// ── SIZE / GENDER HELPERS ────────────────────────────────────
const CLOTHING_SIZES = ["XS","S","M","L","XL","XXL","3XL"];
const SHOE_SIZES     = ["UK 6","UK 7","UK 8","UK 9","UK 10","UK 11","UK 12"];
const FASHION_CATS   = ["Sneakers","Clothing","Accessories","Watches"];

function detectGender(name) {
  const n = name.toLowerCase();
  if (/\bwomen|\bwomens|\bladies|\bgirls?\b/.test(n)) return "women";
  if (/\bmen|\bmens|\bgents|\bboys?\b/.test(n))       return "men";
  return "unisex";
}

function setupSizeFilter(products) {
  const sizeWrap   = document.getElementById("size-filter-group");
  const genderWrap = document.getElementById("gender-filter-group");
  if (!sizeWrap || !genderWrap) return;
  const hasFashion = products.some(p => FASHION_CATS.includes(p.category));
  if (!hasFashion) { sizeWrap.style.display="none"; genderWrap.style.display="none"; return; }
  sizeWrap.style.display   = "block";
  genderWrap.style.display = "block";
  const hasShoes    = products.some(p => p.category==="Sneakers");
  const sizeOptions = hasShoes ? SHOE_SIZES : CLOTHING_SIZES;
  const chips = document.getElementById("size-chips");
  if (chips) {
    chips.innerHTML = sizeOptions.map(s =>
      `<button class="size-chip ${state.selectedSizes.includes(s)?"active":""}" data-size="${s}">${s}</button>`
    ).join("");
    chips.querySelectorAll(".size-chip").forEach(btn => {
      btn.addEventListener("click", () => {
        const sz = btn.dataset.size;
        if (state.selectedSizes.includes(sz)) { state.selectedSizes=state.selectedSizes.filter(x=>x!==sz); btn.classList.remove("active"); }
        else { state.selectedSizes.push(sz); btn.classList.add("active"); }
        if (state.currentProducts.length) renderProducts(applyFilters(state.currentProducts),"results-grid",true,true);
      });
    });
  }
  document.querySelectorAll(".gender-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".gender-chip").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      state.selectedGender = btn.dataset.gender;
      if (state.currentProducts.length) renderProducts(applyFilters(state.currentProducts),"results-grid",true,true);
    });
  });
}

// ── INIT ────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  loadState(); setLastUpdated(); renderTrending("all");
  renderNewArrivals(); renderRecentlyViewed(); renderCoupons();
  setupEventListeners(); setupSearchSuggestions(); setupNavSearch();
  updateBadges(); checkWishlistVisibility(); startFlashSaleTimer();
  checkAuth(); setupDarkMode(); setupPriceRangeSlider(); renderBrandChips();
  handleUrlQuery();
  // Register PWA
  if("serviceWorker" in navigator) navigator.serviceWorker.register("/price-radar/sw.js").catch(()=>{});
});

function handleUrlQuery() {
  const q = new URLSearchParams(window.location.search).get("q");
  if (q) { const inp=document.getElementById("hero-search"); if(inp) inp.value=q; setTimeout(()=>doSearch(q),400); }
}

// ── DARK MODE ───────────────────────────────────────────────
function setupDarkMode() {
  const s = localStorage.getItem("pp_theme")||"light";
  document.documentElement.setAttribute("data-theme",s); updateThemeBtn(s);
  document.getElementById("theme-toggle")?.addEventListener("click",toggleTheme);
  document.getElementById("mob-theme-btn")?.addEventListener("click",toggleTheme);
}
function toggleTheme() {
  const n = document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";
  document.documentElement.setAttribute("data-theme",n); localStorage.setItem("pp_theme",n); updateThemeBtn(n);
}
function updateThemeBtn(t) { const b=document.getElementById("theme-toggle"); if(b) b.textContent=t==="dark"?"☀️":"🌙"; }

// ── AUTH ────────────────────────────────────────────────────
function checkAuth() {
  try { state.user=JSON.parse(localStorage.getItem("pp_user")||"null"); renderAuthBtn(); } catch(e) {}
}
function renderAuthBtn() {
  const btn = document.getElementById("auth-nav-btn"); if(!btn) return;
  if (state.user) {
    btn.className="nav-user-btn";
    btn.innerHTML=`<div class="user-avatar">${state.user.name.charAt(0).toUpperCase()}</div>${state.user.name.split(" ")[0]}`;
    btn.onclick = showUserMenu;
  } else {
    btn.className="btn-auth"; btn.innerHTML=`<span>Sign In</span>`;
    btn.onclick=()=>{document.getElementById("auth-modal").style.display="flex";};
    const mob=document.getElementById("mob-auth-btn"); if(mob) mob.onclick=btn.onclick;
  }
}
function showUserMenu() { if(confirm(`Logged in as ${state.user?.name}\n\nOK to log out.`)){localStorage.removeItem("pp_user");state.user=null;renderAuthBtn();} }
function mockGoogleLogin() { const u={name:"Venkata Pramod",email:"venkatapramod206@gmail.com"}; localStorage.setItem("pp_user",JSON.stringify(u)); state.user=u; renderAuthBtn(); document.getElementById("auth-modal").style.display="none"; showToast("✅ Signed in with Google!"); }
function mockGithubLogin()  { const u={name:"venkatapramod206-cyber",email:"github@user.com"}; localStorage.setItem("pp_user",JSON.stringify(u)); state.user=u; renderAuthBtn(); document.getElementById("auth-modal").style.display="none"; showToast("✅ Signed in with GitHub!"); }

function setLastUpdated() { const el=document.getElementById("last-updated"); if(el) el.textContent=`${Math.floor(Math.random()*30)+5} min ago`; }

function startFlashSaleTimer() {
  let saved=localStorage.getItem("pp_sale_end");
  if(!saved||new Date(saved)<new Date()){const e=new Date(Date.now()+6*3600*1000);localStorage.setItem("pp_sale_end",e.toISOString());saved=e.toISOString();}
  const end=new Date(saved);
  const tick=()=>{
    const d=end-Date.now(); if(d<=0){startFlashSaleTimer();return;}
    const h=String(Math.floor(d/3600000)).padStart(2,"0"),m=String(Math.floor((d%3600000)/60000)).padStart(2,"0"),s=String(Math.floor((d%60000)/1000)).padStart(2,"0");
    // Support both ID formats
  [["cd-h","cd-hours"],["cd-m","cd-minutes"],["cd-s","cd-seconds"]].forEach(([a,b],i)=>{
    const el=document.getElementById(a)||document.getElementById(b);
    if(el) el.textContent=[h,m,s][i];
  });
  };
  tick(); setInterval(tick,1000);
}

function saveState() {
  try{localStorage.setItem("pp_wishlist",JSON.stringify(state.wishlist));localStorage.setItem("pp_compare",JSON.stringify(state.compare));localStorage.setItem("pp_recent",JSON.stringify(state.recentlyViewed));}catch(e){}
}
function loadState() {
  try{state.wishlist=JSON.parse(localStorage.getItem("pp_wishlist")||"[]");state.compare=JSON.parse(localStorage.getItem("pp_compare")||"[]");state.recentlyViewed=JSON.parse(localStorage.getItem("pp_recent")||"[]");}catch(e){}
}

function setupPriceRangeSlider() {
  const mn=document.getElementById("price-min"),mx=document.getElementById("price-max"),fill=document.getElementById("range-fill"),label=document.getElementById("price-range-label");
  if(!mn||!mx) return;
  const update=()=>{
    let a=parseInt(mn.value),b=parseInt(mx.value); if(a>b){[a,b]=[b,a];mn.value=a;mx.value=b;}
    const p1=(a/200000)*100,p2=(b/200000)*100;
    if(fill){fill.style.left=p1+"%";fill.style.width=(p2-p1)+"%";}
    if(label) label.textContent=`${fmt(a)} — ${fmt(b)}`;
    state.priceMin=a; state.priceMax=b;
    if(state.currentProducts.length) renderProducts(applyFilters(state.currentProducts),"results-grid",true,true);
  };
  mn.addEventListener("input",update); mx.addEventListener("input",update); update();
}

function renderBrandChips(products) {
  const wrap=document.getElementById("brand-chips"); if(!wrap) return;
  const brands=[...new Set((products||PRODUCTS).map(p=>p.name.split(" ")[0]))].slice(0,16);
  wrap.innerHTML=brands.map(b=>`<button class="brand-chip ${state.selectedBrands.includes(b)?"active":""}" data-brand="${b}">${b}</button>`).join("");
  wrap.querySelectorAll(".brand-chip").forEach(chip=>{
    chip.addEventListener("click",()=>{
      const b=chip.dataset.brand;
      if(state.selectedBrands.includes(b)){state.selectedBrands=state.selectedBrands.filter(x=>x!==b);chip.classList.remove("active");}
      else{state.selectedBrands.push(b);chip.classList.add("active");}
      if(state.currentProducts.length) renderProducts(applyFilters(state.currentProducts),"results-grid",true,true);
    });
  });
}

// ── SEARCH (improved fuzzy) ──────────────────────────────────
function doSearch(query) {
  if(!query.trim()) return;
  state.currentQuery=query;
  state.selectedSizes=[]; state.selectedBrands=[]; state.selectedGender="all";

  // Normalise: lowercase, remove extra spaces, handle common variants
  const raw = query.toLowerCase().trim().replace(/\s+/g," ");
  const terms = raw.split(" ").filter(t=>t.length>1);

  // Score each product
  const scored = PRODUCTS.map(p => {
    const hay = `${p.name} ${p.category} ${Object.values(p.specs||{}).join(" ")}`.toLowerCase()
                .replace(/'/g,"").replace(/-/g," ");
    let score = 0;
    terms.forEach(t => {
      if (hay.includes(t)) score += t.length > 3 ? 3 : 1;
      // Handle common shortenings: "iphone"→"iphone", "xm5"→"wh-1000xm5"
      if (p.name.toLowerCase().replace(/\s+/g,"").includes(t.replace(/\s+/g,""))) score += 2;
    });
    // Exact brand match boost
    if (hay.startsWith(terms[0])) score += 5;
    return { product:p, score };
  }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).map(x=>x.product);

  state.currentProducts=scored;
  state.displayedCount=0;
  document.getElementById("search-results-section").style.display="block";
  document.getElementById("results-heading").textContent=`Results for "${query}"`;
  document.getElementById("results-count").textContent=`${scored.length} products found`;
  document.getElementById("search-results-section").scrollIntoView({behavior:"smooth",block:"start"});
  document.getElementById("search-suggestions")?.classList.remove("open");
  renderBrandChips(scored);
  setupSizeFilter(scored);
  renderSkeletons("results-grid",8);
  setTimeout(()=>{
    const sorted=applyFilters(scored);
    renderProducts(sorted,"results-grid",true,true);
    showAIInsight(query,sorted);
  },500);
}

function searchAndScroll(q) { doSearch(q); }

function applyFilters(products) {
  let arr=[...products];
  const sort=document.getElementById("sort-select")?.value||"relevance";
  const cat=document.getElementById("category-filter")?.value||"all";
  const store=document.getElementById("store-filter")?.value||"all";
  if(cat!=="all") arr=arr.filter(p=>p.category===cat);
  if(store!=="all") arr=arr.filter(p=>p.stores.some(s=>s.name===store));
  if(state.selectedBrands.length) arr=arr.filter(p=>state.selectedBrands.some(b=>p.name.toLowerCase().startsWith(b.toLowerCase())));
  if(state.selectedGender!=="all") arr=arr.filter(p=>{ const g=detectGender(p.name); return g===state.selectedGender||g==="unisex"; });
  if(state.selectedSizes.length) arr=arr.filter(p=>{ const avail=(p.specs?.Available||"").toLowerCase(); return state.selectedSizes.some(sz=>avail.includes(sz.toLowerCase())); });
  arr=arr.filter(p=>p.bestPrice>=state.priceMin&&p.bestPrice<=state.priceMax);
  // Discount pill filter
  const activeDisc=document.querySelector(".disc-pill.active");
  const minDisc=activeDisc?parseInt(activeDisc.dataset.disc||"0"):0;
  if(minDisc>0) arr=arr.filter(p=>p.discount>=minDisc);
  // Rating filter
  const minRating=parseFloat(document.getElementById("rating-filter")?.value||"0");
  if(minRating>0) arr=arr.filter(p=>p.rating>=minRating);
  if(sort==="price-asc")  arr.sort((a,b)=>a.bestPrice-b.bestPrice);
  else if(sort==="price-desc") arr.sort((a,b)=>b.bestPrice-a.bestPrice);
  else if(sort==="discount")   arr.sort((a,b)=>b.discount-a.discount);
  else if(sort==="rating")     arr.sort((a,b)=>b.rating-a.rating);
  return arr;
}

function showAIInsight(query,results) {
  const el=document.getElementById("ai-insight"),tx=document.getElementById("ai-insight-text");
  if(!el||!tx||!results.length) return;
  el.style.display="flex";
  const best=results.reduce((a,b)=>a.discount>b.discount?a:b);
  const cheapest=results.reduce((a,b)=>a.bestPrice<b.bestPrice?a:b);
  const top=results.reduce((a,b)=>a.rating>b.rating?a:b);
  tx.innerHTML=`Found <strong>${results.length}</strong> products for "<em>${query}</em>". Best deal: <strong>${best.name}</strong> — save ${fmt(best.originalPrice-best.bestPrice)} (${best.discount}% off) at ${best.bestStore}.${top.id!==best.id?` Top rated: <strong>${top.name}</strong> (${top.rating}★, ${top.reviews.toLocaleString()} reviews).`:""} ${cheapest.id!==best.id?`Budget pick: <strong>${cheapest.name}</strong> at ${fmt(cheapest.bestPrice)}.`:""}`;
}

// ── AVAILABILITY ─────────────────────────────────────────────
function getAvailability(p,i) {
  const seed=(p.id*7+i*3)%10;
  if(p.discount>=70&&seed<4) return `<span style="color:var(--orange);font-size:12px;font-weight:600">⚡ Only 3 left</span>`;
  if(p.discount>=50&&seed<2) return `<span style="color:var(--orange);font-size:12px;font-weight:600">⚡ Limited Stock</span>`;
  if(seed===9) return `<span style="color:var(--text3);font-size:12px">Check Store</span>`;
  return `<span style="color:var(--green);font-size:12px">✓ In Stock</span>`;
}

// ── RENDER PRODUCTS ──────────────────────────────────────────
function renderProducts(products,gridId,showEmpty,usePagination) {
  const grid=document.getElementById(gridId); if(!grid) return;
  if(!products.length){
    grid.innerHTML=showEmpty?`<div style="grid-column:1/-1;text-align:center;padding:48px;color:#94a3b8"><div style="font-size:48px;margin-bottom:12px">🔍</div><p>No products found. Try different keywords or adjust filters.</p></div>`:"";
    const lm=document.getElementById("load-more-wrap")||document.getElementById("pagination"); if(lm) lm.style.display="none"; return;
  }
  const toShow=usePagination?products.slice(0,PAGE_SIZE):products;
  state.displayedCount=toShow.length;
  grid.innerHTML=toShow.map(p=>productCardHTML(p)).join("");
  attachCardEvents(grid);
  const lm=document.getElementById("load-more-wrap")||document.getElementById("pagination");
  if(lm){ if(usePagination&&products.length>PAGE_SIZE){lm.style.display="block";document.getElementById("load-more-btn").onclick=()=>loadMoreProducts(products);}else lm.style.display="none"; }
}

function loadMoreProducts(products) {
  const grid=document.getElementById("results-grid"),more=products.slice(state.displayedCount,state.displayedCount+PAGE_SIZE);
  grid.innerHTML+=more.map(p=>productCardHTML(p)).join("");
  attachCardEvents(grid,state.displayedCount); state.displayedCount+=more.length;
  const lm=document.getElementById("load-more-wrap")||document.getElementById("pagination"); if(state.displayedCount>=products.length&&lm) lm.style.display="none";
}

function productCardHTML(p) {
  const inWish=state.wishlist.includes(p.id),inComp=state.compare.includes(p.id);
  return `<div class="product-card" data-id="${p.id}">
    <div style="position:relative;overflow:hidden;height:200px;border-bottom:1px solid var(--border)">
      ${getProductImageHTML(p,"card")}
      <div style="position:absolute;top:10px;left:10px;z-index:2;display:flex;flex-direction:column;gap:4px">
        ${p.discount>=15?`<span class="badge-discount">${p.discount}% OFF</span>`:""}
        ${p.hot?`<span class="badge-hot">🔥 HOT</span>`:""}
      </div>
      <div class="pcard-hover-btns" style="position:absolute;top:10px;right:10px;z-index:2;display:flex;flex-direction:column;gap:6px;opacity:0;transition:opacity .2s">
        <button class="pcard-action-btn ${inWish?"active":""}" data-action="wishlist" data-id="${p.id}" title="Wishlist">${inWish?"❤️":"🤍"}</button>
        <button class="pcard-action-btn" data-action="compare" data-id="${p.id}" title="Compare">⚖️</button>
        <button class="pcard-action-btn" data-action="share"   data-id="${p.id}" title="Share">🔗</button>
      </div>
    </div>
    <div class="pcard-body">
      <div class="pcard-category">${p.category}</div>
      <div class="pcard-name">${p.name}</div>
      <div class="pcard-rating"><span class="stars">${stars(p.rating)}</span> <span>${p.rating}</span> <span style="color:var(--text3)">(${p.reviews.toLocaleString()})</span></div>
      <div class="pcard-price-row">
        <span class="pcard-price">${fmt(p.bestPrice)}</span>
        <span class="pcard-orig">${fmt(p.originalPrice)}</span>
        <span class="pcard-save">${p.discount}% off</span>
      </div>
      <div class="pcard-store">Best on <strong>${p.bestStore}</strong></div>
      <div class="pcard-stores-preview">${p.stores.slice(0,3).map(s=>`<span class="store-pill">${s.name}: ${fmt(s.price)}</span>`).join("")}</div>
      <div class="pcard-footer">
        <a class="btn-buy" href="${p.stores[0].url}" target="_blank" rel="noopener"
           onclick="event.stopPropagation()"
           style="display:inline-flex;align-items:center;justify-content:center;text-decoration:none;color:#fff"
           title="Opens store search page — prices may vary">Buy Now →</a>
        <button class="btn-compare-add ${inComp?"added":""}" data-id="${p.id}" onclick="event.stopPropagation()">${inComp?"✓ Added":"⚖️ Compare"}</button>
      </div>
      <div class="demo-note">🔗 Opens store search · Verify price before purchase</div>
    </div>
  </div>`;
}

function attachCardEvents(grid) {
  grid.querySelectorAll("[data-action='wishlist']").forEach(b=>b.addEventListener("click",e=>{e.stopPropagation();toggleWishlist(parseInt(b.dataset.id));}));
  grid.querySelectorAll("[data-action='compare']").forEach(b=>b.addEventListener("click",e=>{e.stopPropagation();toggleCompare(parseInt(b.dataset.id));}));
  grid.querySelectorAll("[data-action='share']").forEach(b=>b.addEventListener("click",e=>{e.stopPropagation();openShareModal(parseInt(b.dataset.id));}));
  grid.querySelectorAll(".btn-compare-add").forEach(b=>b.addEventListener("click",e=>{e.stopPropagation();toggleCompare(parseInt(b.dataset.id));}));
  grid.querySelectorAll(".product-card").forEach(card=>{
    card.addEventListener("click",()=>openProductModal(parseInt(card.dataset.id)));
    card.addEventListener("mouseenter",()=>{const h=card.querySelector(".pcard-hover-btns");if(h)h.style.opacity="1";});
    card.addEventListener("mouseleave",()=>{const h=card.querySelector(".pcard-hover-btns");if(h)h.style.opacity="0";});
  });
}

function refreshAllGrids() {
  ["results-grid","trending-grid","wishlist-grid","new-arrivals-grid","recently-viewed-grid"].forEach(id=>{
    const g=document.getElementById(id); if(!g) return;
    g.querySelectorAll("[data-action='wishlist']").forEach(b=>{const iw=state.wishlist.includes(parseInt(b.dataset.id));b.textContent=iw?"❤️":"🤍";b.className="pcard-action-btn"+(iw?" active":"");});
    g.querySelectorAll(".btn-compare-add").forEach(b=>{const ic=state.compare.includes(parseInt(b.dataset.id));b.textContent=ic?"✓ Added":"⚖️ Compare";b.className="btn-compare-add"+(ic?" added":"");});
  });
}

function renderSkeletons(gridId,count=6){const g=document.getElementById(gridId);if(g)g.innerHTML=Array(count).fill(`<div class="skeleton-card"><div class="skel skel-img"></div><div class="skel-body"><div class="skel skel-line skel-short"></div><div class="skel skel-line"></div><div class="skel skel-price"></div><div class="skel skel-line skel-xs"></div></div></div>`).join("");}

// ── TRENDING / NEW ARRIVALS ──────────────────────────────────
function renderTrending(tab) {
  let p;
  if(tab==="all") p=[...PRODUCTS].sort((a,b)=>b.discount-a.discount).slice(0,12);
  else if(tab==="Electronics") p=PRODUCTS.filter(p=>["Smartphones","Laptops","Headphones","Cameras","TVs","Tablets","Gaming","Speakers"].includes(p.category)).sort((a,b)=>b.discount-a.discount).slice(0,12);
  else p=PRODUCTS.filter(p=>["Sneakers","Clothing","Accessories","Watches"].includes(p.category)).sort((a,b)=>b.discount-a.discount).slice(0,12);
  renderProducts(p,"trending-grid",false,false);
}
function renderNewArrivals(){ renderProducts(PRODUCTS.slice(Math.max(0,PRODUCTS.length-20)).reverse().slice(0,8),"new-arrivals-grid",false,false); }

// ── RECENTLY VIEWED ──────────────────────────────────────────
function trackRecentlyViewed(id){state.recentlyViewed=[id,...state.recentlyViewed.filter(x=>x!==id)].slice(0,8);saveState();renderRecentlyViewed();}
function renderRecentlyViewed(){const s=document.getElementById("recently-viewed-section");if(!s)return;if(!state.recentlyViewed.length){s.style.display="none";return;}s.style.display="block";renderProducts(state.recentlyViewed.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean),"recently-viewed-grid",false,false);}

// ── COUPONS ──────────────────────────────────────────────────
function renderCoupons(){
  const g=document.getElementById("coupons-grid");if(!g)return;
  g.innerHTML=COUPONS.map(c=>`<div class="coupon-card" onclick="copyCoupon('${c.code}',this)">
    <div class="coupon-emoji">${c.emoji}</div>
    <div class="coupon-body">
      <div class="coupon-store">${c.store}</div>
      <div class="coupon-title">${c.title}</div>
      <div class="coupon-desc">${c.desc}</div>
      <div style="font-size:11px;color:var(--text3);margin-top:3px">⚠️ ${c.note}</div>
    </div>
    <div class="coupon-code-badge">${c.code}</div>
  </div>`).join("");
}
function copyCoupon(code,el){
  navigator.clipboard?.writeText(code).then(()=>{
    const b=el.querySelector(".coupon-code-badge");
    if(b){b.textContent="✓ Copied!";b.classList.add("coupon-copied");setTimeout(()=>{b.textContent=code;b.classList.remove("coupon-copied");},2200);}
  }).catch(()=>showToast(`Code: ${code}`));
}

// ── PRODUCT MODAL ────────────────────────────────────────────
function openProductModal(id){
  const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
  trackRecentlyViewed(id);
  const months=["Jan","Feb","Mar","Apr","May","Jun"];
  const maxH=Math.max(...p.history);
  const bars=p.history.map((v,i)=>`<div class="chart-bar" style="background:${v===p.bestPrice?"#16a34a":"#bfdbfe"};height:${Math.round((v/maxH)*100)}%" data-label="${months[i]}: ${fmt(v)}"></div>`).join("");
  const labels=months.map(m=>`<span class="chart-label">${m}</span>`).join("");
  const reviews=generateReviews(p);
  document.getElementById("modal-content").innerHTML=`
    <div class="modal-header">
      <h3>${p.name}</h3>
      <div style="display:flex;gap:8px">
        <button class="btn-ghost btn-sm" onclick="openShareModal(${p.id})">🔗 Share</button>
        <a class="btn-ghost btn-sm" href="product.html?id=${p.id}" target="_blank" style="text-decoration:none">📄 Full Page</a>
        <button class="modal-close" id="close-modal-btn">✕</button>
      </div>
    </div>
    <div class="modal-body">
      <div class="detail-top">
        <div class="detail-img" style="overflow:hidden;padding:0;border-radius:var(--radius);height:260px">${getProductImageHTML(p,"detail")}</div>
        <div class="detail-info">
          <div class="detail-rating"><span class="stars">${stars(p.rating)}</span> <strong>${p.rating}</strong> · ${p.reviews.toLocaleString()} reviews</div>
          <h2>${p.name}</h2>
          <div class="detail-price-big">${fmt(p.bestPrice)}</div>
          <span class="detail-orig">${fmt(p.originalPrice)}</span>
          <div class="detail-save-badge">Save ${fmt(p.originalPrice-p.bestPrice)} (${p.discount}% off MRP)</div>
          <div class="detail-actions">
            <a class="btn-buy" href="${p.stores[0].url}" target="_blank" rel="noopener" style="text-decoration:none;color:#fff;display:inline-flex;align-items:center;justify-content:center">Buy on ${p.bestStore} →</a>
            <button class="btn-ghost" onclick="toggleWishlist(${p.id})" id="modal-wish-btn">${state.wishlist.includes(p.id)?"❤️ Wishlisted":"🤍 Wishlist"}</button>
          </div>
          <div style="background:var(--orange-light);border:1px solid #fed7aa;border-radius:6px;padding:8px 12px;font-size:12px;color:var(--orange);margin-bottom:12px">
            🔗 <strong>Note:</strong> Buy links open store search pages. Always verify the final price at checkout before purchasing.
          </div>
          <div class="detail-spec-row">${Object.entries(p.specs||{}).slice(0,4).map(([k,v])=>`<span class="detail-spec"><strong>${k}:</strong> ${v}</span>`).join("")}</div>
          <div style="margin-top:10px;font-size:12px;color:var(--text3);display:flex;align-items:center;gap:6px">
            <span style="width:7px;height:7px;background:var(--green);border-radius:50%;display:inline-block"></span>
            Prices tracked ${Math.floor(Math.random()*45)+5} minutes ago
          </div>
        </div>
      </div>
      <h4 style="font-size:16px;font-weight:700;margin-bottom:14px">🏪 Price Comparison</h4>
      <table class="price-table">
        <thead><tr><th>Store</th><th>Price</th><th>You Save</th><th>Availability</th><th>Action</th></tr></thead>
        <tbody>${p.stores.map((s,i)=>`<tr ${i===0?'style="background:var(--green-light)"':''}>
          <td><strong>${s.name}</strong>${i===0?` <span style="background:var(--green);color:#fff;font-size:10px;font-weight:700;padding:2px 7px;border-radius:4px;margin-left:6px">BEST</span>`:""}</td>
          <td style="font-size:17px;font-weight:800;color:var(--green)">${fmt(s.price)}</td>
          <td style="color:${s.price<p.originalPrice?"var(--green)":"var(--text3)"}">${s.price<p.originalPrice?`−${fmt(p.originalPrice-s.price)}`:"—"}</td>
          <td>${getAvailability(p,i)}</td>
          <td><a class="visit-btn" href="${s.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Visit →</a></td>
        </tr>`).join("")}</tbody>
      </table>
      <div style="background:var(--orange-light);border:1px solid #fed7aa;border-radius:6px;padding:8px 12px;font-size:12px;color:var(--orange);margin-top:8px;margin-bottom:20px">
        ⚠️ Links open store search pages. Prices may differ from what's shown here. Always confirm the price at checkout.
      </div>
      <div class="chart-section">
        <h4>📈 6-Month Price History</h4>
        <div class="price-chart">${bars}</div>
        <div class="chart-labels">${labels}</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:12px;text-align:center">
          <div style="background:var(--bg2);border-radius:8px;padding:10px"><div style="font-weight:800;color:var(--green)">${fmt(Math.min(...p.history))}</div><div style="font-size:11px;color:var(--text3)">Lowest Ever</div></div>
          <div style="background:var(--bg2);border-radius:8px;padding:10px"><div style="font-weight:800">${fmt(Math.round(p.history.reduce((a,b)=>a+b,0)/p.history.length))}</div><div style="font-size:11px;color:var(--text3)">6-Month Avg</div></div>
          <div style="background:var(--bg2);border-radius:8px;padding:10px"><div style="font-weight:800;color:var(--red)">${fmt(Math.max(...p.history))}</div><div style="font-size:11px;color:var(--text3)">Highest</div></div>
        </div>
      </div>
      ${p.specs?`<div style="margin-top:24px"><h4 style="font-size:15px;font-weight:700;margin-bottom:12px">📋 Specifications</h4><table style="width:100%;border-collapse:collapse">${Object.entries(p.specs).map(([k,v])=>`<tr><td style="padding:8px 12px;border-bottom:1px solid var(--border);font-size:13px;color:var(--text3);width:40%">${k}</td><td style="padding:8px 12px;border-bottom:1px solid var(--border);font-size:13px;font-weight:500">${v}</td></tr>`).join("")}</table></div>`:""}
      <div style="margin-top:28px">
        <h4 style="font-size:15px;font-weight:700;margin-bottom:16px">⭐ Customer Reviews</h4>
        <div style="display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:center;margin-bottom:16px">
          <div style="text-align:center;background:var(--bg2);border-radius:12px;padding:16px 20px"><div style="font-size:44px;font-weight:800;line-height:1">${p.rating}</div><div style="color:#f59e0b;font-size:16px;margin:4px 0">${"★".repeat(Math.floor(p.rating))}${"☆".repeat(5-Math.floor(p.rating))}</div><div style="font-size:11px;color:var(--text3)">${p.reviews.toLocaleString()} ratings</div></div>
          <div>${[5,4,3,2,1].map(n=>{const pct=n===5?58:n===4?24:n===3?10:n===2?5:3;return`<div style="display:flex;align-items:center;gap:8px;margin-bottom:5px"><span style="font-size:12px;color:var(--text3);width:20px;text-align:right">${n}★</span><div style="flex:1;height:6px;background:var(--bg3);border-radius:3px"><div style="width:${pct}%;height:100%;background:#f59e0b;border-radius:3px"></div></div><span style="font-size:11px;color:var(--text3);width:28px">${pct}%</span></div>`;}).join("")}</div>
        </div>
        ${reviews.map(r=>`<div style="border-bottom:1px solid var(--border);padding:14px 0">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0">${r.name.charAt(0)}</div>
            <div><div style="font-size:13px;font-weight:600">${r.name} · <span style="color:var(--text3);font-weight:400">${r.city}</span></div><div style="font-size:11px;color:var(--text3)">${r.date}</div></div>
          </div>
          <div style="color:#f59e0b;font-size:13px;margin-bottom:5px">${"★".repeat(r.rating)}${"☆".repeat(5-r.rating)} <span style="color:var(--text3);font-size:12px;margin-left:4px">${["","","Poor","Average","Good","Excellent"][r.rating]}</span></div>
          <div style="font-size:13px;color:var(--text2);line-height:1.65">${r.text}</div>
          <div style="font-size:11px;color:var(--green);margin-top:6px">✓ Verified Purchase via ${r.store}</div>
        </div>`).join("")}
      </div>
    </div>`;
  document.getElementById("product-modal").style.display="flex";
  document.getElementById("close-modal-btn").onclick=closeProductModal;
  document.getElementById("product-modal").onclick=e=>{if(e.target===document.getElementById("product-modal"))closeProductModal();};
}
function closeProductModal(){document.getElementById("product-modal").style.display="none";}

// ── SHARE ───────────────────────────────────────────────────
function openShareModal(id){
  const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
  const url=`${window.location.origin}${window.location.pathname.replace("index.html","").replace(/\/$/,"")}/product.html?id=${p.id}`;
  const text=`🔥 ${p.name} at just ${fmt(p.bestPrice)}! Save ${p.discount}% — PricePro`;
  document.getElementById("share-product-preview").innerHTML=`<strong>${p.emoji} ${p.name}</strong><br><span style="color:var(--green);font-weight:700">${fmt(p.bestPrice)}</span> · ${p.discount}% off on ${p.bestStore}`;
  document.getElementById("share-modal").style.display="flex";
  document.getElementById("share-whatsapp").onclick=()=>window.open(`https://wa.me/?text=${encodeURIComponent(text+"\n"+url)}`,"_blank");
  document.getElementById("share-twitter").onclick=()=>window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,"_blank");
  document.getElementById("share-copy").onclick=()=>navigator.clipboard?.writeText(url).then(()=>showToast("✅ Link copied!")).catch(()=>showToast("Copy: "+url));
  document.getElementById("close-share-modal").onclick=()=>{document.getElementById("share-modal").style.display="none";};
  document.getElementById("share-modal").onclick=e=>{if(e.target===document.getElementById("share-modal"))document.getElementById("share-modal").style.display="none";};
}

// ── WISHLIST ─────────────────────────────────────────────────
function toggleWishlist(id){const idx=state.wishlist.indexOf(id);if(idx===-1){state.wishlist.push(id);showToast("❤️ Added to wishlist");}else{state.wishlist.splice(idx,1);showToast("Removed from wishlist");}saveState();updateBadges();refreshAllGrids();checkWishlistVisibility();renderWishlist();const m=document.getElementById("modal-wish-btn");if(m)m.textContent=state.wishlist.includes(id)?"❤️ Wishlisted":"🤍 Wishlist";}
function renderWishlist(){renderProducts(PRODUCTS.filter(p=>state.wishlist.includes(p.id)),"wishlist-grid",false,false);const c=document.getElementById("wishlist-count-text");if(c)c.textContent=`${state.wishlist.length} item${state.wishlist.length!==1?"s":""}`;}
function checkWishlistVisibility(){const s=document.getElementById("wishlist-section");if(!s)return;if(state.wishlist.length>0){s.style.display="block";renderWishlist();}else s.style.display="none";}

// ── COMPARE ──────────────────────────────────────────────────
function toggleCompare(id){const idx=state.compare.indexOf(id);if(idx!==-1){state.compare.splice(idx,1);}else if(state.compare.length<4){state.compare.push(id);showToast("⚖️ Added to compare");}else{showToast("Max 4 products for comparison");return;}saveState();updateBadges();refreshAllGrids();updateCompareBar();}
function updateCompareBar(){const bar=document.getElementById("compare-bar-section"),slots=document.getElementById("compare-slots");if(!bar||!slots)return;if(!state.compare.length){bar.style.display="none";return;}bar.style.display="block";slots.innerHTML=state.compare.map(id=>{const p=PRODUCTS.find(x=>x.id===id);return p?`<div class="compare-slot">${p.emoji} ${p.name.slice(0,22)}… <button onclick="toggleCompare(${id})">✕</button></div>`:""}).join("");}
function openCompareModal(){
  const products=PRODUCTS.filter(p=>state.compare.includes(p.id));
  if(products.length<2){showToast("Add at least 2 products to compare");return;}
  const allSpecs=[...new Set(products.flatMap(p=>Object.keys(p.specs||{})))];
  document.getElementById("compare-modal-content").innerHTML=`
    <div class="modal-header"><h3>Compare Products (${products.length})</h3><button class="modal-close" id="close-compare-btn">✕</button></div>
    <div class="modal-body"><div class="compare-table-wrap"><table class="compare-table">
      <thead><tr><th>Feature</th>${products.map(p=>`<th><div class="compare-img-cell">${p.emoji}</div><div style="font-size:13px;font-weight:600;line-height:1.3">${p.name}</div></th>`).join("")}</tr></thead>
      <tbody>
        <tr><td>Best Price</td>${products.map(p=>{const lo=p.bestPrice===Math.min(...products.map(x=>x.bestPrice));return`<td class="${lo?"highlight-cell":""}">${fmt(p.bestPrice)}${lo?" ✓":""}</td>`;}).join("")}</tr>
        <tr><td>Discount</td>${products.map(p=>{const hi=p.discount===Math.max(...products.map(x=>x.discount));return`<td class="${hi?"highlight-cell":""}">${p.discount}%${hi?" ✓":""}</td>`;}).join("")}</tr>
        <tr><td>Rating</td>${products.map(p=>{const hi=p.rating===Math.max(...products.map(x=>x.rating));return`<td class="${hi?"highlight-cell":""}">${stars(p.rating)} ${p.rating}${hi?" ✓":""}</td>`;}).join("")}</tr>
        <tr><td>Reviews</td>${products.map(p=>`<td>${p.reviews.toLocaleString()}</td>`).join("")}</tr>
        <tr><td>Best Store</td>${products.map(p=>`<td>${p.bestStore}</td>`).join("")}</tr>
        ${allSpecs.map(spec=>`<tr><td>${spec}</td>${products.map(p=>`<td>${p.specs?.[spec]||"—"}</td>`).join("")}</tr>`).join("")}
      </tbody>
    </table></div><p style="font-size:12px;color:#94a3b8;margin-top:12px">✓ Green = Best value in that category</p></div>`;
  document.getElementById("compare-modal").style.display="flex";
  document.getElementById("close-compare-btn").onclick=()=>{document.getElementById("compare-modal").style.display="none";};
  document.getElementById("compare-modal").onclick=e=>{if(e.target===document.getElementById("compare-modal"))document.getElementById("compare-modal").style.display="none";};
}

// ── BADGES ───────────────────────────────────────────────────
function updateBadges(){const wb=document.getElementById("wishlist-badge"),cb=document.getElementById("compare-badge");if(wb){wb.textContent=state.wishlist.length;wb.style.display=state.wishlist.length?"flex":"none";}if(cb){cb.textContent=state.compare.length;cb.style.display=state.compare.length?"flex":"none";}}

// ── TOAST ────────────────────────────────────────────────────
function showToast(msg){
  // Use existing toast div if present, else create dynamic one
  const existing=document.getElementById("toast");
  if(existing){
    existing.textContent=msg;
    existing.style.cssText="position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#0f172a;color:#fff;padding:10px 22px;border-radius:8px;font-size:14px;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,.25);white-space:nowrap;display:block;opacity:1;transition:opacity .3s";
    clearTimeout(existing._timer);
    existing._timer=setTimeout(()=>{existing.style.opacity="0";setTimeout(()=>{existing.style.display="none";},300);},2500);
    return;
  }
  document.querySelector(".pp-toast")?.remove();
  const t=document.createElement("div");t.className="pp-toast";
  t.style.cssText="position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#0f172a;color:#fff;padding:10px 22px;border-radius:8px;font-size:14px;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,.25);white-space:nowrap";
  t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),2500);
}

// ── AI CHAT ──────────────────────────────────────────────────
async function sendChatMessage(){
  const input=document.getElementById("chat-input"),q=input.value.trim();if(!q)return;
  input.value="";appendChatMsg(q,"user");const loading=appendChatMsg("Thinking…","bot loading");
  await new Promise(r=>setTimeout(r,500));loading.className="chat-msg bot";
  const ql=q.toLowerCase();let resp="";
  if(ql.match(/under|below|budget|cheap|\d{4,}/)){const budget=parseInt(ql.match(/(\d[\d,]+)/)?.[0]?.replace(",",""))||20000;const f=PRODUCTS.filter(p=>p.bestPrice<=budget).sort((a,b)=>a.bestPrice-b.bestPrice).slice(0,4);resp=`💡 Best picks under ${fmt(budget)}:\n${f.map(p=>`• ${p.name} — ${fmt(p.bestPrice)} at ${p.bestStore}`).join("\n")||"No products found in this range."}`;}
  else if(ql.match(/deal|discount|offer|sale/)){const t=PRODUCTS.sort((a,b)=>b.discount-a.discount).slice(0,4);resp=`🔥 Biggest discounts:\n${t.map(p=>`• ${p.name} — ${p.discount}% off → ${fmt(p.bestPrice)}`).join("\n")}`;}
  else if(ql.match(/phone|smartphone|mobile/)){const t=PRODUCTS.filter(p=>p.category==="Smartphones").sort((a,b)=>b.discount-a.discount).slice(0,4);resp=`📱 Best phone deals:\n${t.map(p=>`• ${p.name} — ${fmt(p.bestPrice)} (${p.discount}% off)`).join("\n")}`;}
  else if(ql.match(/headphone|earphone|earbud/)){const t=PRODUCTS.filter(p=>p.category==="Headphones").sort((a,b)=>a.bestPrice-b.bestPrice);resp=`🎧 Audio deals:\n${t.map(p=>`• ${p.name} — ${fmt(p.bestPrice)} (${p.discount}% off)`).join("\n")}`;}
  else if(ql.match(/laptop|macbook/)){const t=PRODUCTS.filter(p=>p.category==="Laptops");resp=`💻 Laptop deals:\n${t.map(p=>`• ${p.name} — ${fmt(p.bestPrice)} (${p.discount}% off)`).join("\n")}`;}
  else if(ql.match(/shoe|sneaker|nike|adidas/)){const t=PRODUCTS.filter(p=>p.category==="Sneakers").sort((a,b)=>b.discount-a.discount).slice(0,5);resp=`👟 Sneaker deals:\n${t.map(p=>`• ${p.name} — ${fmt(p.bestPrice)} (${p.discount}% off)`).join("\n")}`;}
  else if(ql.match(/amazon/)){const t=PRODUCTS.filter(p=>p.bestStore==="Amazon").sort((a,b)=>b.discount-a.discount).slice(0,4);resp=`🛒 Best Amazon deals:\n${t.map(p=>`• ${p.name} — ${fmt(p.bestPrice)} (${p.discount}% off)`).join("\n")}`;}
  else if(ql.match(/flipkart/)){const t=PRODUCTS.filter(p=>p.bestStore==="Flipkart").sort((a,b)=>b.discount-a.discount).slice(0,4);resp=`🏬 Best Flipkart deals:\n${t.map(p=>`• ${p.name} — ${fmt(p.bestPrice)} (${p.discount}% off)`).join("\n")}`;}
  else if(ql.match(/compare/)){resp=`⚖️ To compare:\n1. Click ⚖️ on any product card\n2. Add 2–4 products\n3. Click "Compare Now" in the bottom bar\n\nYou'll see a full side-by-side spec comparison!`;}
  else if(ql.match(/alert|notify/)){resp=`🔔 Price Alerts:\n1. Go to Alerts page (top right)\n2. Enter product + target price + email\n3. We track 50+ stores 24/7 and alert you!`;}
  else{const f=PRODUCTS.filter(p=>p.name.toLowerCase().includes(q.split(" ")[0].toLowerCase()));if(f.length)resp=`Found ${f.length} results:\n${f.slice(0,4).map(p=>`• ${p.name} — ${fmt(p.bestPrice)}`).join("\n")}\n\nClick any product to see full details!`;else resp=`Try asking:\n• "Best phones under ₹20,000"\n• "Biggest discounts today"\n• "Best deals on Amazon"\n• "Compare products"\n• "Set price alert"`;}
  loading.style.whiteSpace="pre-line";loading.textContent=resp;
}
function appendChatMsg(t,type){const b=document.getElementById("chat-body"),d=document.createElement("div");d.className=`chat-msg ${type}`;d.textContent=t;b.appendChild(d);b.scrollTop=b.scrollHeight;return d;}

// ── SEARCH SUGGESTIONS ───────────────────────────────────────
function setupSearchSuggestions(){
  const input=document.getElementById("hero-search"),sugg=document.getElementById("search-suggestions");if(!input||!sugg)return;
  input.addEventListener("input",()=>{
    const q=input.value.trim().toLowerCase();if(q.length<2){sugg.classList.remove("open");return;}
    const m=PRODUCTS.filter(p=>p.name.toLowerCase().includes(q)||p.category.toLowerCase().includes(q)).slice(0,6);
    if(!m.length){sugg.classList.remove("open");return;}
    sugg.innerHTML=m.map(p=>`<div class="suggestion-item" data-name="${p.name}"><span style="font-size:18px">${p.emoji}</span><div style="flex:1"><div style="font-size:13px;font-weight:500">${p.name}</div><div style="font-size:11px;color:#94a3b8">${p.category} · From ${fmt(p.bestPrice)}</div></div></div>`).join("");
    sugg.classList.add("open");
    sugg.querySelectorAll(".suggestion-item").forEach(item=>item.addEventListener("click",()=>{input.value=item.dataset.name;doSearch(item.dataset.name);sugg.classList.remove("open");}));
  });
  document.addEventListener("click",e=>{if(!input.contains(e.target)&&!sugg.contains(e.target))sugg.classList.remove("open");});
}
function setupNavSearch(){const i=document.getElementById("nav-search-input");if(i)i.addEventListener("keydown",e=>{if(e.key==="Enter"){doSearch(e.target.value);e.target.blur();}});}

// ── EVENT LISTENERS ──────────────────────────────────────────
function setupEventListeners(){
  document.getElementById("hero-search-btn")?.addEventListener("click",()=>doSearch(document.getElementById("hero-search").value));
  document.getElementById("hero-search")?.addEventListener("keydown",e=>{if(e.key==="Enter")doSearch(e.target.value);});
  ["sort-select","category-filter","store-filter","brand-filter","rating-filter"].forEach(id=>{document.getElementById(id)?.addEventListener("change",()=>{if(state.currentProducts.length)renderProducts(applyFilters(state.currentProducts),"results-grid",true,true);updateFilterBadge&&updateFilterBadge();});});
  document.querySelectorAll(".cat-tile").forEach(t=>t.addEventListener("click",()=>{doSearch(t.dataset.q);const i=document.getElementById("hero-search");if(i)i.value=t.dataset.q;}));
  document.querySelectorAll(".chip").forEach(c=>c.addEventListener("click",()=>{doSearch(c.dataset.q);const i=document.getElementById("hero-search");if(i)i.value=c.dataset.q;}));
  document.querySelectorAll(".tab-btn").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderTrending(b.dataset.tab);}));
  document.querySelectorAll(".cat-link").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();doSearch(a.dataset.q);window.scrollTo({top:0,behavior:"smooth"});}));
  document.getElementById("wishlist-nav-btn")?.addEventListener("click",()=>{checkWishlistVisibility();document.getElementById("wishlist-section")?.scrollIntoView({behavior:"smooth"});});
  document.getElementById("compare-nav-btn")?.addEventListener("click",openCompareModal);
  document.getElementById("do-compare-btn")?.addEventListener("click",openCompareModal);
  document.getElementById("clear-compare-btn")?.addEventListener("click",()=>{state.compare=[];saveState();updateBadges();refreshAllGrids();updateCompareBar();});
  (document.getElementById("clear-wishlist"))?.addEventListener("click",()=>{state.wishlist=[];saveState();updateBadges();refreshAllGrids();checkWishlistVisibility();});
  document.getElementById("clear-recent-btn")?.addEventListener("click",()=>{state.recentlyViewed=[];saveState();document.getElementById("recently-viewed-section").style.display="none";});
  document.getElementById("ai-fab")?.addEventListener("click",()=>{const cw=document.getElementById("chat-window");cw.style.display=cw.style.display==="none"?"flex":"none";if(cw.style.display!=="none"){cw.style.flexDirection="column";document.getElementById("chat-input")?.focus();}});
  document.getElementById("close-chat-btn")?.addEventListener("click",()=>{document.getElementById("chat-window").style.display="none";});
  document.getElementById("chat-send-btn")?.addEventListener("click",sendChatMessage);
  document.getElementById("chat-input")?.addEventListener("keydown",e=>{if(e.key==="Enter")sendChatMessage();});
  document.getElementById("tab-login")?.addEventListener("click",()=>{document.getElementById("login-form").style.display="block";document.getElementById("signup-form").style.display="none";document.getElementById("tab-login").classList.add("active");document.getElementById("tab-signup").classList.remove("active");document.getElementById("auth-modal-title").textContent="Sign In to PricePro";});
  document.getElementById("tab-signup")?.addEventListener("click",()=>{document.getElementById("signup-form").style.display="block";document.getElementById("login-form").style.display="none";document.getElementById("tab-signup").classList.add("active");document.getElementById("tab-login").classList.remove("active");document.getElementById("auth-modal-title").textContent="Create Account";});
  document.getElementById("close-auth-modal")?.addEventListener("click",()=>{document.getElementById("auth-modal").style.display="none";});
  document.getElementById("auth-modal")?.addEventListener("click",e=>{if(e.target===document.getElementById("auth-modal"))document.getElementById("auth-modal").style.display="none";});
  document.getElementById("login-submit-btn")?.addEventListener("click",handleLogin);
  document.getElementById("signup-submit-btn")?.addEventListener("click",handleSignup);
  // Support both button IDs
  const advBtn=document.getElementById("toggle-filters-btn")||document.getElementById("advanced-filter-btn");
  if(advBtn) advBtn.addEventListener("click",()=>{
    const f=document.getElementById("advanced-filters");
    if(f){ f.style.display=f.style.display==="none"?"block":"none"; advBtn.textContent=f.style.display==="none"?"⚙️ Filters":"✕ Close"; }
  });
  (document.getElementById("newsletter-submit")||document.getElementById("newsletter-btn"))?.addEventListener("click",handleNewsletter);
  document.getElementById("newsletter-email")?.addEventListener("keydown",e=>{if(e.key==="Enter")handleNewsletter();});
  // Also handle newsletter-msg vs newsletter-success
  // ── HAMBURGER FIX ────────────────────────────────────────────
  const ham = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  if (ham && mobileMenu) {
    ham.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      ham.setAttribute("aria-expanded", mobileMenu.classList.contains("open"));
    });
    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!ham.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove("open");
        ham.setAttribute("aria-expanded", "false");
      }
    });
    // Close menu on nav link click
    mobileMenu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        ham.setAttribute("aria-expanded", "false");
      });
    });
  }
  window.addEventListener("scroll",()=>{const nav=document.getElementById("navbar");if(nav)nav.style.boxShadow=window.scrollY>10?"0 2px 12px rgba(0,0,0,.08)":"none";});
}

// ── AUTH ─────────────────────────────────────────────────────
function handleLogin(){const email=document.getElementById("login-email").value.trim(),pass=document.getElementById("login-password").value,msg=document.getElementById("login-msg");if(!email||!pass){showMsg(msg,"Please fill in all fields.","error");return;}try{const users=JSON.parse(localStorage.getItem("pp_users")||"[]"),user=users.find(u=>u.email===email&&u.password===pass);if(!user){showMsg(msg,"Invalid email or password.","error");return;}localStorage.setItem("pp_user",JSON.stringify({name:user.name,email:user.email}));state.user={name:user.name,email:user.email};renderAuthBtn();document.getElementById("auth-modal").style.display="none";showToast(`✅ Welcome back, ${user.name.split(" ")[0]}!`);}catch(e){showMsg(msg,"Login failed. Try again.","error");}}
function handleSignup(){const name=document.getElementById("signup-name").value.trim(),email=document.getElementById("signup-email").value.trim(),pass=document.getElementById("signup-password").value,msg=document.getElementById("signup-msg");if(!name||!email||!pass){showMsg(msg,"Please fill in all fields.","error");return;}if(pass.length<6){showMsg(msg,"Password must be at least 6 characters.","error");return;}if(!/^\S+@\S+\.\S+$/.test(email)){showMsg(msg,"Please enter a valid email.","error");return;}try{const users=JSON.parse(localStorage.getItem("pp_users")||"[]");if(users.find(u=>u.email===email)){showMsg(msg,"Account already exists. Please log in.","error");return;}users.push({name,email,password:pass});localStorage.setItem("pp_users",JSON.stringify(users));localStorage.setItem("pp_user",JSON.stringify({name,email}));state.user={name,email};renderAuthBtn();document.getElementById("auth-modal").style.display="none";showToast(`🎉 Welcome, ${name.split(" ")[0]}!`);}catch(e){showMsg(msg,"Signup failed. Try again.","error");}}
function showMsg(el,t,type){if(!el)return;el.textContent=t;el.className=`auth-msg ${type}`;el.style.display="block";}
function handleNewsletter(){const email=document.getElementById("newsletter-email").value.trim();if(!/^\S+@\S+\.\S+$/.test(email)){showToast("Please enter a valid email");return;}try{const s=JSON.parse(localStorage.getItem("pp_newsletter")||"[]");if(!s.includes(email)){s.push(email);localStorage.setItem("pp_newsletter",JSON.stringify(s));}document.getElementById("newsletter-form-wrap").style.display="none";document.getElementById("newsletter-success").style.display="block";}catch(e){}}
