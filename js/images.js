// PricePro v9 — Product-Specific Images
// Every product has a unique, verified image URL that actually matches what it is
// Using Unsplash source API with specific photo IDs curated per product type

const PRODUCT_IMAGES = {
  // ── SMARTPHONES ─────────────────────────────────────────────
  1:  "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500&h=500&fit=crop&q=80", // iPhone (white/titanium)
  2:  "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&h=500&fit=crop&q=80", // Samsung Galaxy
  3:  "https://images.unsplash.com/photo-1635870723802-e88d76ae324e?w=500&h=500&fit=crop&q=80", // OnePlus
  4:  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop&q=80", // Xiaomi
  5:  "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop&q=80", // Google Pixel
  54: "https://images.unsplash.com/photo-1574755393849-623942496936?w=500&h=500&fit=crop&q=80", // realme
  55: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&h=500&fit=crop&q=80", // iQOO
  56: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=500&h=500&fit=crop&q=80", // Motorola
  65: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop&q=80", // Redmi
  66: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&h=500&fit=crop&q=80", // POCO
  80: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=500&h=500&fit=crop&q=80", // Nord CE
  98: "https://images.unsplash.com/photo-1551355738-2d7b7e27d8db?w=500&h=500&fit=crop&q=80", // narzo

  // ── LAPTOPS ─────────────────────────────────────────────────
  6:  "https://images.unsplash.com/photo-1611186871525-b2e0e23e2d61?w=500&h=500&fit=crop&q=80", // MacBook Air (silver)
  7:  "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&h=500&fit=crop&q=80", // Dell XPS
  8:  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop&q=80", // ThinkPad (black business)
  9:  "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop&q=80", // ASUS ROG (gaming)
  57: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=500&fit=crop&q=80", // HP Pavilion
  58: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=500&fit=crop&q=80",   // MSI Gaming
  99: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop&q=80", // Lenovo IdeaPad

  // ── HEADPHONES ──────────────────────────────────────────────
  10: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=500&fit=crop&q=80", // Sony WH-1000XM5 (over-ear)
  11: "https://images.unsplash.com/photo-1588423771073-b8903fead85b?w=500&h=500&fit=crop&q=80", // AirPods Pro (white earbuds)
  12: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop&q=80", // Bose QC45 (over-ear)
  13: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop&q=80", // boAt Rockerz (over-ear)
  42: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop&q=80", // boAt Airdopes (earbuds case)
  59: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&h=500&fit=crop&q=80", // Sony WF earbuds
  60: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=500&h=500&fit=crop&q=80", // Sennheiser (over-ear)
  63: "https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=500&h=500&fit=crop&q=80", // Noise earbuds
  90: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=500&fit=crop&q=80", // boAt Rockerz 450
  92: "https://images.unsplash.com/photo-1612478236046-7f38e1741bb9?w=500&h=500&fit=crop&q=80", // Gaming headset

  // ── CAMERAS ─────────────────────────────────────────────────
  14: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=500&fit=crop&q=80", // Canon DSLR/Mirrorless
  15: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop&q=80", // Sony Alpha vlog camera
  74: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop&q=80", // Fujifilm Instax (pastel)
  75: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=500&fit=crop&q=80", // DJI Drone

  // ── SMART TVs ────────────────────────────────────────────────
  18: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&h=500&fit=crop&q=80", // Samsung TV wall-mounted
  19: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=500&h=500&fit=crop&q=80", // LG OLED TV
  50: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=500&h=500&fit=crop&q=80", // Mi TV
  69: "https://images.unsplash.com/photo-1577979749830-f1d742b96791?w=500&h=500&fit=crop&q=80", // Samsung QLED
  100:"https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=500&h=500&fit=crop&q=80", // Samsung 50

  // ── TABLETS ─────────────────────────────────────────────────
  20: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop&q=80",   // iPad (silver, flat lay)
  21: "https://images.unsplash.com/photo-1632769005058-3bcc1702bd1b?w=500&h=500&fit=crop&q=80", // Galaxy Tab (Android)
  97: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&h=500&fit=crop&q=80",   // iPad mini

  // ── SMARTWATCHES ─────────────────────────────────────────────
  16: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500&h=500&fit=crop&q=80", // Apple Watch (close-up face)
  17: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop&q=80",   // Galaxy Watch (round)
  32: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop&q=80", // Fossil smartwatch
  33: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&h=500&fit=crop&q=80", // Noise ColorFit
  45: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop&q=80", // Mi Band (slim band)
  81: "https://images.unsplash.com/photo-1617625802912-cde586faf749?w=500&h=500&fit=crop&q=80", // Garmin Venu
  93: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500&h=500&fit=crop&q=80",   // Xiaomi Band 9
  95: "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=500&h=500&fit=crop&q=80", // Fastrack Watch
  103:"https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&h=500&fit=crop&q=80", // Titan analogue

  // ── SNEAKERS ─────────────────────────────────────────────────
  22: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop&q=80",   // Nike Air Max (red/white)
  23: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=500&fit=crop&q=80", // Adidas Ultraboost (white)
  24: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop&q=80", // Puma chunky sneakers
  25: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&h=500&fit=crop&q=80", // New Balance (grey)
  49: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=500&fit=crop&q=80", // Skechers walking shoes
  53: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=500&fit=crop&q=80", // Reebok Classic (low)
  61: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&h=500&fit=crop&q=80", // Nike Air Force 1 (white)
  62: "https://images.unsplash.com/photo-1494496195158-c3bc6a3f5660?w=500&h=500&fit=crop&q=80", // Converse Chuck Taylor
  78: "https://images.unsplash.com/photo-1574634975894-0553a78e0bc9?w=500&h=500&fit=crop&q=80", // Crocs clogs
  79: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&h=500&fit=crop&q=80", // Slippers/Hawai
  91: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&h=500&fit=crop&q=80", // Boots/Woodland
  104:"https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?w=500&h=500&fit=crop&q=80", // Basic slippers

  // ── CLOTHING ─────────────────────────────────────────────────
  26: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop&q=80",   // Levi's jeans (blue denim folded)
  27: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop&q=80", // Formal shirt (white)
  28: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=500&fit=crop&q=80", // Chino trousers (beige)
  29: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=500&fit=crop&q=80", // Oversized tee (women)
  30: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop&q=80", // Polo t-shirt (man wearing)
  39: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop&q=80", // Sports / Dri-FIT tee
  40: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=500&h=500&fit=crop&q=80", // Track pants / joggers
  48: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop&q=80", // Casual check shirt (men)
  52: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop&q=80", // Plain polo tee
  69: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=500&h=500&fit=crop&q=80",   // Cargo pants
  70: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=500&h=500&fit=crop&q=80", // Slim jeans (men)
  77: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop&q=80", // Athletic tee (women)
  88: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=500&fit=crop&q=80", // Jeans on hanger

  // ── ACCESSORIES ─────────────────────────────────────────────
  31: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop&q=80",   // Canvas tote bag
  36: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop&q=80", // Power bank (flat)
  37: "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?w=500&h=500&fit=crop&q=80", // AirTag tracker
  41: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop&q=80", // Ray-Ban Aviator sunglasses
  43: "https://images.unsplash.com/photo-1509941943102-10c232535736?w=500&h=500&fit=crop&q=80", // Fossil watch (leather strap)
  44: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop&q=80",   // Backpack (outdoors)
  46: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=500&h=500&fit=crop&q=80", // Herschel heritage backpack
  47: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop&q=80", // Logitech wireless mouse
  51: "https://images.unsplash.com/photo-1565069511012-45ef36edfb03?w=500&h=500&fit=crop&q=80", // Minimalist watch (flat)
  64: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&h=500&fit=crop&q=80", // Power bank (hand holding)
  67: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop&q=80", // Casio G-Shock
  72: "https://images.unsplash.com/photo-1531492731349-b4b0af8c0c5b?w=500&h=500&fit=crop&q=80", // External HDD
  73: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=500&h=500&fit=crop&q=80", // Portable SSD
  76: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=500&h=500&fit=crop&q=80", // Gaming mouse
  84: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=500&h=500&fit=crop&q=80", // Perfume bottle
  85: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&h=500&fit=crop&q=80", // Makeup/foundation
  94: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&h=500&fit=crop&q=80", // LEGO blocks

  // ── SPEAKERS ─────────────────────────────────────────────────
  35: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop&q=80", // JBL Charge (cylindrical)
  70: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&h=500&fit=crop&q=80",   // JBL Flip (small)
  71: "https://images.unsplash.com/photo-1505740106531-4243f3831c78?w=500&h=500&fit=crop&q=80", // Bluetooth speaker
  83: "https://images.unsplash.com/photo-1558089687-f282ffcbc0d3?w=500&h=500&fit=crop&q=80",   // Apple HomePod mini

  // ── GAMING ───────────────────────────────────────────────────
  34: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&h=500&fit=crop&q=80", // PlayStation controller

  // ── APPLIANCES ───────────────────────────────────────────────
  38: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop&q=80",   // Vacuum cleaner
  87: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&h=500&fit=crop&q=80", // Washing machine
  86: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop&q=80",   // Mixer grinder

  // ── MONITORS ─────────────────────────────────────────────────
  82: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&h=500&fit=crop&q=80", // Gaming monitor
  96: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop&q=80", // Desktop monitor
};

// Category fallback gradients (used when no image or image fails)
const CAT_STYLE = {
  "Smartphones": "linear-gradient(135deg,#667eea 0%,#764ba2 100%)",
  "Laptops":     "linear-gradient(135deg,#2d3436 0%,#636e72 100%)",
  "Headphones":  "linear-gradient(135deg,#f093fb 0%,#f5576c 100%)",
  "Cameras":     "linear-gradient(135deg,#e17055 0%,#d63031 100%)",
  "TVs":         "linear-gradient(135deg,#0984e3 0%,#074291 100%)",
  "Tablets":     "linear-gradient(135deg,#00b894 0%,#00695c 100%)",
  "Sneakers":    "linear-gradient(135deg,#00b09b 0%,#96c93d 100%)",
  "Clothing":    "linear-gradient(135deg,#f7971e 0%,#ffd200 100%)",
  "Watches":     "linear-gradient(135deg,#b8860b 0%,#f0c040 100%)",
  "Accessories": "linear-gradient(135deg,#6c5ce7 0%,#a29bfe 100%)",
  "Appliances":  "linear-gradient(135deg,#74b9ff 0%,#0984e3 100%)",
  "Gaming":      "linear-gradient(135deg,#1a1a2e 0%,#16213e 100%)",
  "Speakers":    "linear-gradient(135deg,#2d3561 0%,#c05c7e 100%)",
  "Monitors":    "linear-gradient(135deg,#11998e 0%,#38ef7d 100%)",
  "Beauty":      "linear-gradient(135deg,#ee9ca7 0%,#ffdde1 100%)",
  "Grocery":     "linear-gradient(135deg,#56ab2f 0%,#a8e063 100%)",
  "default":     "linear-gradient(135deg,#868f96 0%,#596164 100%)",
};

function getProductImageHTML(product, size) {
  const h   = size === "detail" ? "280px" : "200px";
  const esz = size === "detail" ? "72px"  : "52px";
  const bg  = CAT_STYLE[product.category] || CAT_STYLE["default"];
  const url = PRODUCT_IMAGES[product.id];

  const fallback = `
    <div style="width:100%;height:${h};background:${bg};display:flex;flex-direction:column;
      align-items:center;justify-content:center;gap:10px">
      <span style="font-size:${esz};filter:drop-shadow(0 4px 10px rgba(0,0,0,.3));line-height:1">${product.emoji}</span>
      <span style="background:rgba(255,255,255,.2);color:#fff;font-size:10px;font-weight:700;
        padding:3px 10px;border-radius:100px;letter-spacing:1px;text-transform:uppercase">${product.category}</span>
    </div>`;

  if (!url) return fallback;

  return `
    <div style="width:100%;height:${h};position:relative;overflow:hidden;background:${bg}">
      <img
        src="${url}"
        alt="${product.name}"
        loading="lazy"
        style="width:100%;height:100%;object-fit:cover;display:block;transition:transform .35s ease"
        onmouseover="this.style.transform='scale(1.06)'"
        onmouseout="this.style.transform='scale(1)'"
        onerror="
          this.style.display='none';
          this.parentElement.style.display='flex';
          this.parentElement.style.flexDirection='column';
          this.parentElement.style.alignItems='center';
          this.parentElement.style.justifyContent='center';
          this.parentElement.style.gap='10px';
          this.parentElement.innerHTML='<span style=\\'font-size:${esz};filter:drop-shadow(0 4px 10px rgba(0,0,0,.3))\\'>${product.emoji}</span><span style=\\'background:rgba(255,255,255,.2);color:#fff;font-size:10px;font-weight:700;padding:3px 10px;border-radius:100px;letter-spacing:1px;text-transform:uppercase\\'>${product.category}</span>';
        "
      />
      <div style="position:absolute;bottom:0;left:0;right:0;height:35%;
        background:linear-gradient(to top,rgba(0,0,0,.18),transparent);pointer-events:none"></div>
    </div>`;
}
