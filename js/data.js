// ============================================
// PricePro — Product Data with Working Search URLs
// ============================================

function makeUrls(name, category) {
  const q = encodeURIComponent(name);
  const urls = {
    amazon: `https://www.amazon.in/s?k=${q}`,
    flipkart: `https://www.flipkart.com/search?q=${q}`,
    myntra: `https://www.myntra.com/${encodeURIComponent(name.toLowerCase().replace(/ /g,'-'))}`,
    croma: `https://www.croma.com/searchB?q=${q}`,
    reliancedigital: `https://www.reliancedigital.in/search?q=${q}`,
    vijaysales: `https://www.vijaysales.com/search/${q}`,
    samsung: `https://www.samsung.com/in/smartphones/`,
    apple: `https://www.apple.com/in/shop/go/?product=`,
    oneplus: `https://www.oneplus.in/`,
    mi: `https://www.mi.com/in/`,
    ajio: `https://www.ajio.com/s/${q}`,
    nykaa: `https://www.nykaa.com/search/result/?q=${q}`,
    snapdeal: `https://www.snapdeal.com/search?keyword=${q}`,
    tatacliq: `https://www.tatacliq.com/search/?searchCategory=all&text=${q}`,
    meesho: `https://www.meesho.com/search?q=${q}`,
  };
  return urls;
}

function s(store, name) {
  const u = makeUrls(name);
  const map = {
    "Amazon": u.amazon,
    "Flipkart": u.flipkart,
    "Myntra": u.myntra,
    "Croma": u.croma,
    "Reliance Digital": u.reliancedigital,
    "Vijay Sales": u.vijaysales,
    "Samsung.com": `https://www.samsung.com/in/smartphones/`,
    "Apple Store": `https://www.apple.com/in/shop/buy-mac`,
    "OnePlus.in": `https://www.oneplus.in/`,
    "Mi.com": `https://www.mi.com/in/`,
    "AJIO": u.ajio,
    "Nykaa": u.nykaa,
    "Sony Center": `https://www.sony.co.in/`,
    "boAt Website": `https://www.boat-lifestyle.com/`,
    "Nike.com": `https://www.nike.com/in/`,
    "Adidas.co.in": `https://www.adidas.co.in/`,
    "Puma.com": `https://in.puma.com/`,
    "Levi's Store": `https://www.levi.in/`,
    "Tommy Website": `https://in.tommy.com/`,
    "Fossil Website": `https://www.fossil.com/en-in/`,
    "Casio Website": `https://www.casio.com/in/`,
    "Titan Website": `https://www.titan.co.in/`,
    "Herschel.com": `https://www.herschel.com/`,
    "Noise Website": `https://www.gonoise.com/`,
    "Logitech.com": `https://www.logitech.com/en-in/`,
    "Dell.com": `https://www.dell.com/en-in/`,
    "Lenovo.com": `https://www.lenovo.com/in/`,
    "HP.com": `https://www.hp.com/in-en/`,
    "ASUS Store": `https://www.asus.com/in/`,
    "MSI Store": `https://in.msi.com/`,
    "realme.com": `https://www.realme.com/in/`,
    "Dyson Website": `https://www.dyson.in/`,
    "JBL Website": `https://in.jbl.com/`,
    "NB Website": `https://www.newbalance.in/`,
    "Reebok.in": `https://www.reebok.in/`,
    "Skechers.in": `https://www.skechers.in/`,
    "Crocs.com": `https://www.crocs.com/in/`,
    "DJI.com": `https://store.dji.com/in/`,
    "LEGO.com": `https://www.lego.com/en-in/`,
    "Seagate": u.amazon,
    "Wildcraft": u.amazon,
    "Paragon": u.amazon,
  };
  return map[store] || u.amazon;
}

const PRODUCTS=[
{id:1,name:"Apple iPhone 15 Pro 128GB",category:"Smartphones",emoji:"📱",rating:4.8,reviews:18420,bestPrice:119900,originalPrice:134900,discount:11,bestStore:"Amazon",hot:true,
stores:[{name:"Amazon",price:119900,url:s("Amazon","Apple iPhone 15 Pro 128GB")},{name:"Flipkart",price:121499,url:s("Flipkart","Apple iPhone 15 Pro 128GB")},{name:"Croma",price:124900,url:s("Croma","Apple iPhone 15 Pro")},{name:"Reliance Digital",price:122999,url:s("Reliance Digital","Apple iPhone 15 Pro")}],
specs:{Display:'6.1" Super Retina XDR',Processor:"A17 Pro Chip",RAM:"8GB",Storage:"128GB",Camera:"48MP + 12MP + 12MP",Battery:"3274mAh",OS:"iOS 17"},history:[134900,132000,129000,125000,122000,119900]},

{id:2,name:"Samsung Galaxy S24 Ultra 256GB",category:"Smartphones",emoji:"📱",rating:4.7,reviews:14200,bestPrice:109999,originalPrice:129999,discount:15,bestStore:"Flipkart",hot:true,
stores:[{name:"Flipkart",price:109999,url:s("Flipkart","Samsung Galaxy S24 Ultra 256GB")},{name:"Amazon",price:111999,url:s("Amazon","Samsung Galaxy S24 Ultra")},{name:"Samsung.com",price:129999,url:s("Samsung.com","")},{name:"Croma",price:113999,url:s("Croma","Samsung Galaxy S24 Ultra")}],
specs:{Display:'6.8" Dynamic AMOLED 2X',Processor:"Snapdragon 8 Gen 3",RAM:"12GB",Storage:"256GB",Camera:"200MP+12MP+50MP+10MP",Battery:"5000mAh",OS:"Android 14"},history:[129999,124999,119999,114999,112000,109999]},

{id:3,name:"OnePlus 12 16GB 512GB",category:"Smartphones",emoji:"📱",rating:4.6,reviews:9800,bestPrice:54999,originalPrice:69999,discount:21,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:54999,url:s("Amazon","OnePlus 12 5G 16GB 512GB")},{name:"Flipkart",price:56999,url:s("Flipkart","OnePlus 12 5G")},{name:"OnePlus.in",price:64999,url:s("OnePlus.in","")}],
specs:{Display:'6.82" LTPO AMOLED',Processor:"Snapdragon 8 Gen 3",RAM:"16GB",Storage:"512GB",Camera:"50MP+48MP+64MP",Battery:"5400mAh 100W",OS:"OxygenOS 14"},history:[69999,64999,61999,58999,56999,54999]},

{id:4,name:"Xiaomi 14 Ultra 16GB 512GB",category:"Smartphones",emoji:"📱",rating:4.7,reviews:6200,bestPrice:89999,originalPrice:99999,discount:10,bestStore:"Flipkart",hot:false,
stores:[{name:"Flipkart",price:89999,url:s("Flipkart","Xiaomi 14 Ultra 5G")},{name:"Amazon",price:91999,url:s("Amazon","Xiaomi 14 Ultra 5G")},{name:"Mi.com",price:99999,url:s("Mi.com","")}],
specs:{Display:'6.73" LTPO AMOLED',Processor:"Snapdragon 8 Gen 3",RAM:"16GB",Storage:"512GB",Camera:"50MP Leica Quad",Battery:"5000mAh",OS:"HyperOS"},history:[99999,96999,94999,92999,90999,89999]},

{id:5,name:"Google Pixel 8 Pro 12GB 256GB",category:"Smartphones",emoji:"📱",rating:4.6,reviews:4100,bestPrice:79999,originalPrice:106999,discount:25,bestStore:"Flipkart",hot:true,
stores:[{name:"Flipkart",price:79999,url:s("Flipkart","Google Pixel 8 Pro")},{name:"Amazon",price:81999,url:s("Amazon","Google Pixel 8 Pro")}],
specs:{Display:'6.7" LTPO OLED',Processor:"Google Tensor G3",RAM:"12GB",Storage:"256GB",Camera:"50MP+48MP+48MP",Battery:"5050mAh",OS:"Android 14"},history:[106999,99999,93999,87999,83999,79999]},

{id:6,name:"Apple MacBook Air M3 13 inch",category:"Laptops",emoji:"💻",rating:4.9,reviews:7340,bestPrice:114900,originalPrice:119900,discount:4,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:114900,url:s("Amazon","Apple MacBook Air M3 13 inch")},{name:"Flipkart",price:116900,url:s("Flipkart","Apple MacBook Air M3")},{name:"Apple Store",price:119900,url:"https://www.apple.com/in/shop/buy-mac/macbook-air"},{name:"Croma",price:118900,url:s("Croma","Apple MacBook Air M3")}],
specs:{Display:'13.6" Liquid Retina',Processor:"Apple M3",RAM:"8GB",Storage:"256GB SSD",Battery:"18hr",Weight:"1.24kg",OS:"macOS Sonoma"},history:[119900,118900,117900,116900,115900,114900]},

{id:7,name:"Dell XPS 15 i9 32GB 1TB",category:"Laptops",emoji:"💻",rating:4.5,reviews:2890,bestPrice:149990,originalPrice:189990,discount:21,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:149990,url:s("Amazon","Dell XPS 15 9530 i9")},{name:"Flipkart",price:152990,url:s("Flipkart","Dell XPS 15")},{name:"Dell.com",price:189990,url:s("Dell.com","")}],
specs:{Display:'15.6" OLED 3.5K',Processor:"Intel Core i9-13900H",RAM:"32GB DDR5",Storage:"1TB SSD",GPU:"RTX 4070",Battery:"86Whr",OS:"Windows 11"},history:[189990,179990,169990,159990,154990,149990]},

{id:8,name:"Lenovo ThinkPad X1 Carbon Gen 11",category:"Laptops",emoji:"💻",rating:4.7,reviews:1980,bestPrice:129990,originalPrice:159990,discount:19,bestStore:"Flipkart",hot:false,
stores:[{name:"Flipkart",price:129990,url:s("Flipkart","Lenovo ThinkPad X1 Carbon")},{name:"Amazon",price:131990,url:s("Amazon","Lenovo ThinkPad X1 Carbon Gen 11")},{name:"Lenovo.com",price:159990,url:s("Lenovo.com","")}],
specs:{Display:'14" IPS 2.8K',Processor:"Intel Core i7-1365U",RAM:"16GB LPDDR5",Storage:"512GB SSD",Battery:"15hr",Weight:"1.12kg",OS:"Windows 11 Pro"},history:[159990,149990,142990,136990,132990,129990]},

{id:9,name:"ASUS ROG Zephyrus G14 2024",category:"Laptops",emoji:"💻",rating:4.6,reviews:3200,bestPrice:124990,originalPrice:154990,discount:19,bestStore:"Amazon",hot:true,
stores:[{name:"Amazon",price:124990,url:s("Amazon","ASUS ROG Zephyrus G14 2024")},{name:"Flipkart",price:127990,url:s("Flipkart","ASUS ROG Zephyrus G14")},{name:"ASUS Store",price:154990,url:s("ASUS Store","")}],
specs:{Display:'14" OLED 120Hz',Processor:"AMD Ryzen 9 8945HS",RAM:"32GB DDR5",Storage:"1TB SSD",GPU:"RTX 4070",Battery:"73Whr",OS:"Windows 11"},history:[154990,144990,137990,131990,127990,124990]},

{id:10,name:"Sony WH-1000XM5 Wireless Headphones",category:"Headphones",emoji:"🎧",rating:4.9,reviews:22400,bestPrice:26990,originalPrice:34990,discount:23,bestStore:"Amazon",hot:true,
stores:[{name:"Amazon",price:26990,url:s("Amazon","Sony WH-1000XM5 Wireless Headphones")},{name:"Flipkart",price:27990,url:s("Flipkart","Sony WH-1000XM5")},{name:"Croma",price:28490,url:s("Croma","Sony WH-1000XM5")},{name:"Sony Center",price:34990,url:s("Sony Center","")}],
specs:{Type:"Over-ear Wireless",ANC:"Industry Leading",Driver:"30mm",Battery:"30hr",Charging:"USB-C",Weight:"250g"},history:[34990,31990,29990,28990,27990,26990]},

{id:11,name:"Apple AirPods Pro 2nd Gen USB-C",category:"Headphones",emoji:"🎧",rating:4.8,reviews:16700,bestPrice:22900,originalPrice:26900,discount:15,bestStore:"Flipkart",hot:false,
stores:[{name:"Flipkart",price:22900,url:s("Flipkart","Apple AirPods Pro 2nd Generation USB-C")},{name:"Amazon",price:23499,url:s("Amazon","Apple AirPods Pro 2nd gen USB-C")},{name:"Apple Store",price:26900,url:"https://www.apple.com/in/airpods-pro/"}],
specs:{Type:"In-ear True Wireless",ANC:"Adaptive Transparency",Battery:"6hr+30hr",Chip:"H2",Charging:"USB-C/MagSafe",Weight:"5.3g"},history:[26900,25900,24900,23900,23200,22900]},

{id:12,name:"Bose QuietComfort 45 Wireless",category:"Headphones",emoji:"🎧",rating:4.7,reviews:9800,bestPrice:22490,originalPrice:29900,discount:25,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:22490,url:s("Amazon","Bose QuietComfort 45 Wireless Headphones")},{name:"Flipkart",price:23490,url:s("Flipkart","Bose QuietComfort 45")},{name:"Croma",price:24990,url:s("Croma","Bose QuietComfort 45")}],
specs:{Type:"Over-ear Wireless",ANC:"QuietComfort",Driver:"40mm",Battery:"24hr",Charging:"USB-C",Weight:"238g"},history:[29900,27900,25900,24490,23490,22490]},

{id:13,name:"boAt Rockerz 550 Bluetooth Headphones",category:"Headphones",emoji:"🎧",rating:4.2,reviews:48900,bestPrice:999,originalPrice:3990,discount:75,bestStore:"Amazon",hot:true,
stores:[{name:"Amazon",price:999,url:s("Amazon","boAt Rockerz 550 Bluetooth Headphones")},{name:"Flipkart",price:1199,url:s("Flipkart","boAt Rockerz 550")},{name:"boAt Website",price:1499,url:s("boAt Website","")}],
specs:{Type:"Over-ear Wireless",Driver:"40mm",Battery:"20hr",Controls:"On-ear",Mic:"Yes",Weight:"195g"},history:[3990,2990,1990,1499,1199,999]},

{id:14,name:"Canon EOS R50 Mirrorless Camera",category:"Cameras",emoji:"📷",rating:4.7,reviews:3400,bestPrice:62990,originalPrice:74990,discount:16,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:62990,url:s("Amazon","Canon EOS R50 Mirrorless Camera")},{name:"Flipkart",price:64990,url:s("Flipkart","Canon EOS R50")},{name:"Croma",price:66990,url:s("Croma","Canon EOS R50")}],
specs:{Sensor:"24.2MP APS-C",Processor:"DIGIC X",Video:"4K 30fps",Screen:'3" Vari-angle',Weight:"375g"},history:[74990,71990,68990,66990,64990,62990]},

{id:15,name:"Sony Alpha ZV-E10 Vlog Camera",category:"Cameras",emoji:"📷",rating:4.6,reviews:5100,bestPrice:44990,originalPrice:57990,discount:22,bestStore:"Flipkart",hot:false,
stores:[{name:"Flipkart",price:44990,url:s("Flipkart","Sony ZV-E10 Mirrorless Camera")},{name:"Amazon",price:45990,url:s("Amazon","Sony ZV-E10 Mirrorless")},{name:"Sony Center",price:57990,url:s("Sony Center","")}],
specs:{Sensor:"24.2MP APS-C",AF:"Real-time Eye AF",Video:"4K 30fps",Screen:'3" Side-flip',Weight:"343g"},history:[57990,53990,50990,48990,46990,44990]},

{id:16,name:"Apple Watch Series 9 GPS 45mm",category:"Watches",emoji:"⌚",rating:4.8,reviews:8900,bestPrice:40900,originalPrice:44900,discount:9,bestStore:"Flipkart",hot:false,
stores:[{name:"Flipkart",price:40900,url:s("Flipkart","Apple Watch Series 9 GPS 45mm")},{name:"Amazon",price:41400,url:s("Amazon","Apple Watch Series 9 45mm")},{name:"Apple Store",price:44900,url:"https://www.apple.com/in/shop/buy-watch/apple-watch"},{name:"Croma",price:43900,url:s("Croma","Apple Watch Series 9")}],
specs:{Display:"45mm Always-On Retina",Chip:"S9 SiP",Health:"ECG, Blood Oxygen",GPS:"Yes",Battery:"18hr",Water:"50m"},history:[44900,43900,42900,41900,41400,40900]},

{id:17,name:"Samsung Galaxy Watch 6 Classic 47mm",category:"Watches",emoji:"⌚",rating:4.5,reviews:5600,bestPrice:29999,originalPrice:42999,discount:30,bestStore:"Amazon",hot:true,
stores:[{name:"Amazon",price:29999,url:s("Amazon","Samsung Galaxy Watch 6 Classic 47mm")},{name:"Flipkart",price:31999,url:s("Flipkart","Samsung Galaxy Watch 6 Classic")},{name:"Samsung.com",price:42999,url:s("Samsung.com","")}],
specs:{Display:'47mm Super AMOLED',Processor:"Exynos W930",Health:"ECG, BIA",GPS:"Yes",Battery:"40hr",Water:"5ATM+IP68"},history:[42999,39999,36999,33999,31999,29999]},

{id:18,name:"Samsung 55 inch Crystal 4K UHD Smart TV",category:"TVs",emoji:"📺",rating:4.5,reviews:12400,bestPrice:38990,originalPrice:59990,discount:35,bestStore:"Flipkart",hot:true,
stores:[{name:"Flipkart",price:38990,url:s("Flipkart","Samsung 55 inch 4K UHD Smart TV")},{name:"Amazon",price:39990,url:s("Amazon","Samsung 55 inch 4K Smart TV")},{name:"Croma",price:41990,url:s("Croma","Samsung 55 4K Smart TV")},{name:"Reliance Digital",price:40990,url:s("Reliance Digital","Samsung 55 4K TV")}],
specs:{Display:'55" Crystal UHD 4K',HDR:"HDR10+",Sound:"20W Dolby Audio",Smart:"Tizen OS",Ports:"3xHDMI 2xUSB"},history:[59990,54990,49990,44990,41990,38990]},

{id:19,name:"LG OLED C3 55 inch 4K Smart TV",category:"TVs",emoji:"📺",rating:4.8,reviews:6700,bestPrice:109990,originalPrice:179990,discount:39,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:109990,url:s("Amazon","LG OLED C3 55 inch 4K TV")},{name:"Flipkart",price:112990,url:s("Flipkart","LG OLED C3 55 inch")},{name:"Croma",price:114990,url:s("Croma","LG OLED C3 55")}],
specs:{Display:'55" OLED evo',Processor:"α9 Gen6 AI",HDR:"Dolby Vision IQ",Sound:"60W Dolby Atmos",Smart:"webOS 23",Gaming:"4K@120fps VRR ALLM"},history:[179990,159990,139990,124990,114990,109990]},

{id:20,name:"Apple iPad Air M2 11 inch 256GB",category:"Tablets",emoji:"📲",rating:4.8,reviews:5400,bestPrice:74900,originalPrice:81900,discount:9,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:74900,url:s("Amazon","Apple iPad Air M2 11 inch 256GB")},{name:"Flipkart",price:75900,url:s("Flipkart","Apple iPad Air M2 11 inch")},{name:"Apple Store",price:81900,url:"https://www.apple.com/in/shop/buy-ipad/ipad-air"}],
specs:{Display:'11" Liquid Retina',Chip:"Apple M2",RAM:"8GB",Storage:"256GB",Camera:"12MP Wide",Battery:"10hr"},history:[81900,79900,77900,76900,75900,74900]},

{id:21,name:"Samsung Galaxy Tab S9 12GB 256GB",category:"Tablets",emoji:"📲",rating:4.7,reviews:4200,bestPrice:69999,originalPrice:87999,discount:20,bestStore:"Flipkart",hot:false,
stores:[{name:"Flipkart",price:69999,url:s("Flipkart","Samsung Galaxy Tab S9 256GB")},{name:"Amazon",price:71999,url:s("Amazon","Samsung Galaxy Tab S9 256GB")},{name:"Samsung.com",price:87999,url:s("Samsung.com","")}],
specs:{Display:'11" Dynamic AMOLED 2X',Processor:"Snapdragon 8 Gen 2",RAM:"12GB",Storage:"256GB",Battery:"8400mAh"},history:[87999,82999,77999,73999,71999,69999]},

{id:22,name:"Nike Air Max 270 Running Shoes",category:"Sneakers",emoji:"👟",rating:4.6,reviews:24800,bestPrice:9595,originalPrice:14995,discount:36,bestStore:"Myntra",hot:true,
stores:[{name:"Myntra",price:9595,url:s("Myntra","Nike Air Max 270")},{name:"Nike.com",price:14995,url:"https://www.nike.com/in/w?q=air+max+270&vst=air+max+270"},{name:"Amazon",price:10499,url:s("Amazon","Nike Air Max 270")},{name:"Flipkart",price:10999,url:s("Flipkart","Nike Air Max 270")}],
specs:{Type:"Running/Lifestyle",Sole:"React+Air Max",Upper:"Engineered Mesh",Available:"UK 6-12"},history:[14995,13995,12995,11995,10995,9595]},

{id:23,name:"Adidas Ultraboost 22 Running Shoes",category:"Sneakers",emoji:"👟",rating:4.7,reviews:18900,bestPrice:7499,originalPrice:16999,discount:56,bestStore:"Myntra",hot:true,
stores:[{name:"Myntra",price:7499,url:s("Myntra","Adidas Ultraboost 22")},{name:"Adidas.co.in",price:16999,url:"https://www.adidas.co.in/ultraboost"},{name:"Amazon",price:8499,url:s("Amazon","Adidas Ultraboost 22")},{name:"Flipkart",price:8999,url:s("Flipkart","Adidas Ultraboost 22")}],
specs:{Type:"Performance Running",Midsole:"BOOST",Upper:"Primeknit+",Available:"UK 6-12"},history:[16999,14999,12999,10999,8999,7499]},

{id:24,name:"Puma RS-X3 Sneakers",category:"Sneakers",emoji:"👟",rating:4.3,reviews:11200,bestPrice:3599,originalPrice:8999,discount:60,bestStore:"Flipkart",hot:false,
stores:[{name:"Flipkart",price:3599,url:s("Flipkart","Puma RS-X3 Sneakers")},{name:"Myntra",price:3999,url:s("Myntra","Puma RS-X3")},{name:"Amazon",price:3799,url:s("Amazon","Puma RS-X3 Sneakers")},{name:"Puma.com",price:8999,url:s("Puma.com","")}],
specs:{Type:"Lifestyle Chunky",Sole:"RS cushioning",Upper:"Mesh+Suede",Available:"UK 3-11"},history:[8999,7499,5999,4999,3999,3599]},

{id:25,name:"New Balance 574 Classic Sneakers",category:"Sneakers",emoji:"👟",rating:4.5,reviews:8700,bestPrice:4995,originalPrice:8495,discount:41,bestStore:"Myntra",hot:false,
stores:[{name:"Myntra",price:4995,url:s("Myntra","New Balance 574")},{name:"Amazon",price:5299,url:s("Amazon","New Balance 574 Sneakers")},{name:"NB Website",price:8495,url:s("NB Website","")}],
specs:{Type:"Classic Lifestyle",Midsole:"ENCAP",Upper:"Suede/Mesh",Available:"UK 5-12"},history:[8495,7495,6495,5995,5295,4995]},

{id:26,name:"Levis 511 Slim Fit Mens Jeans Dark Blue",category:"Clothing",emoji:"👖",rating:4.5,reviews:34200,bestPrice:1799,originalPrice:3999,discount:55,bestStore:"Myntra",hot:false,
stores:[{name:"Myntra",price:1799,url:s("Myntra","Levis 511 Slim Fit Jeans")},{name:"Amazon",price:1999,url:s("Amazon","Levis 511 Slim Jeans")},{name:"Flipkart",price:2099,url:s("Flipkart","Levis 511 Slim Jeans")},{name:"Levi's Store",price:3999,url:s("Levi's Store","")}],
specs:{Fit:"Slim",Rise:"Mid-rise",Fabric:"99% Cotton 1% Elastane",Available:"28-38 waist"},history:[3999,3499,2999,2499,1999,1799]},

{id:27,name:"Allen Solly Regular Fit Formal Shirt",category:"Clothing",emoji:"👔",rating:4.3,reviews:28900,bestPrice:699,originalPrice:1999,discount:65,bestStore:"Myntra",hot:false,
stores:[{name:"Myntra",price:699,url:s("Myntra","Allen Solly Formal Shirt Men")},{name:"Amazon",price:799,url:s("Amazon","Allen Solly Men Formal Shirt")},{name:"Flipkart",price:749,url:s("Flipkart","Allen Solly Formal Shirt")}],
specs:{Fit:"Regular",Fabric:"100% Cotton",Occasion:"Formal",Available:"S M L XL XXL"},history:[1999,1599,1199,999,849,699]},

{id:28,name:"Zara Men Slim Fit Chino Trousers",category:"Clothing",emoji:"👖",rating:4.4,reviews:9200,bestPrice:1799,originalPrice:3990,discount:55,bestStore:"AJIO",hot:false,
stores:[{name:"AJIO",price:1799,url:s("AJIO","Zara Slim Fit Chino Trousers")},{name:"Myntra",price:1999,url:s("Myntra","Zara Chino Trousers Men")},{name:"Flipkart",price:2199,url:s("Flipkart","Zara Chino Trousers")}],
specs:{Fit:"Slim",Fabric:"98% Cotton 2% Elastane",Available:"28-36 waist"},history:[3990,3490,2990,2490,1990,1799]},

{id:29,name:"HM Women Oversized T-Shirt 3-Pack",category:"Clothing",emoji:"👕",rating:4.2,reviews:15400,bestPrice:999,originalPrice:2499,discount:60,bestStore:"Myntra",hot:true,
stores:[{name:"Myntra",price:999,url:s("Myntra","HM Women Oversized T-Shirt")},{name:"AJIO",price:1199,url:s("AJIO","HM Oversized Tshirt Women")}],
specs:{Fit:"Oversized",Fabric:"100% Cotton Jersey",Pack:"3 T-shirts",Available:"XS S M L XL"},history:[2499,1999,1499,1199,1099,999]},

{id:30,name:"Tommy Hilfiger Essential Logo T-Shirt",category:"Clothing",emoji:"👕",rating:4.4,reviews:12800,bestPrice:1499,originalPrice:3499,discount:57,bestStore:"Myntra",hot:false,
stores:[{name:"Myntra",price:1499,url:s("Myntra","Tommy Hilfiger T-Shirt Men")},{name:"Amazon",price:1699,url:s("Amazon","Tommy Hilfiger Men T-Shirt")},{name:"Tommy Website",price:3499,url:s("Tommy Website","")}],
specs:{Fit:"Regular",Fabric:"100% Cotton Pique",Available:"S M L XL XXL"},history:[3499,2999,2499,1999,1699,1499]},

{id:31,name:"Tommy Hilfiger Canvas Tote Bag",category:"Accessories",emoji:"👜",rating:4.6,reviews:6700,bestPrice:2999,originalPrice:6999,discount:57,bestStore:"Myntra",hot:true,
stores:[{name:"Myntra",price:2999,url:s("Myntra","Tommy Hilfiger Tote Bag")},{name:"Amazon",price:3299,url:s("Amazon","Tommy Hilfiger Tote Bag")},{name:"Flipkart",price:3499,url:s("Flipkart","Tommy Hilfiger Bag")}],
specs:{Type:"Tote Bag",Material:"Canvas+Leather trim",Dimensions:"40×35×12cm",Pockets:"2 internal"},history:[6999,5999,4999,3999,3499,2999]},

{id:32,name:"Fossil Gen 6 Hybrid Smartwatch",category:"Watches",emoji:"⌚",rating:4.4,reviews:4100,bestPrice:12995,originalPrice:22995,discount:43,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:12995,url:s("Amazon","Fossil Gen 6 Hybrid Smartwatch")},{name:"Flipkart",price:13495,url:s("Flipkart","Fossil Gen 6 Hybrid")},{name:"Fossil Website",price:22995,url:s("Fossil Website","")}],
specs:{Display:"Always-on E Ink",Battery:"2 weeks",Health:"Heart rate SpO2",Water:"3ATM"},history:[22995,19995,17995,15995,13995,12995]},

{id:33,name:"Noise ColorFit Ultra 3 Smartwatch",category:"Watches",emoji:"⌚",rating:4.1,reviews:29800,bestPrice:1499,originalPrice:8999,discount:83,bestStore:"Amazon",hot:true,
stores:[{name:"Amazon",price:1499,url:s("Amazon","Noise ColorFit Ultra 3 Smartwatch")},{name:"Flipkart",price:1699,url:s("Flipkart","Noise ColorFit Ultra 3")},{name:"Noise Website",price:3999,url:s("Noise Website","")}],
specs:{Display:'2.01" AMOLED',Health:"SpO2 Heart rate 100+ Sports",Battery:"7 days",Water:"IP68"},history:[8999,5999,3999,2499,1999,1499]},

{id:34,name:"Sony PlayStation 5 Slim Disc Edition",category:"Gaming",emoji:"🎮",rating:4.9,reviews:8900,bestPrice:47990,originalPrice:54990,discount:13,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:47990,url:s("Amazon","Sony PlayStation 5 Slim Disc Edition")},{name:"Flipkart",price:48990,url:s("Flipkart","PlayStation 5 Slim")},{name:"Croma",price:49990,url:s("Croma","PlayStation 5 Slim")}],
specs:{CPU:"AMD Zen 2 8-core",GPU:"AMD RDNA 2 10.28 TFLOPS",RAM:"16GB GDDR6",Storage:"1TB SSD",Resolution:"4K 120fps"},history:[54990,52990,50990,49990,48990,47990]},

{id:35,name:"JBL Charge 5 Portable Bluetooth Speaker",category:"Speakers",emoji:"🔊",rating:4.7,reviews:14200,bestPrice:10499,originalPrice:15999,discount:34,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:10499,url:s("Amazon","JBL Charge 5 Portable Speaker")},{name:"Flipkart",price:10999,url:s("Flipkart","JBL Charge 5")},{name:"Croma",price:11499,url:s("Croma","JBL Charge 5")},{name:"JBL Website",price:15999,url:s("JBL Website","")}],
specs:{Output:"30W",Battery:"20hr",Waterproof:"IP67",Ports:"USB-C",Weight:"960g"},history:[15999,13999,12499,11499,10999,10499]},

{id:36,name:"Anker PowerCore 26800 PD Power Bank",category:"Accessories",emoji:"🔋",rating:4.6,reviews:18900,bestPrice:3299,originalPrice:5999,discount:45,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:3299,url:s("Amazon","Anker PowerCore 26800 PD Power Bank")},{name:"Flipkart",price:3499,url:s("Flipkart","Anker PowerCore 26800")}],
specs:{Capacity:"26800mAh",Output:"45W USB-C PD",Ports:"2xUSB-A+1xUSB-C",Weight:"480g"},history:[5999,4999,4299,3799,3499,3299]},

{id:37,name:"Apple AirTag 4 Pack",category:"Accessories",emoji:"🏷️",rating:4.7,reviews:9800,bestPrice:8999,originalPrice:11900,discount:24,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:8999,url:s("Amazon","Apple AirTag 4 Pack")},{name:"Flipkart",price:9299,url:s("Flipkart","Apple AirTag 4 Pack")},{name:"Apple Store",price:11900,url:"https://www.apple.com/in/shop/buy-airtag"}],
specs:{Technology:"U1+Bluetooth",Battery:"1 year CR2032",Water:"IP67",FindMy:"Yes"},history:[11900,11000,10000,9500,9200,8999]},

{id:38,name:"Dyson V15 Detect Absolute Vacuum",category:"Appliances",emoji:"🧹",rating:4.8,reviews:3200,bestPrice:52900,originalPrice:65900,discount:20,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:52900,url:s("Amazon","Dyson V15 Detect Absolute Vacuum Cleaner")},{name:"Flipkart",price:53900,url:s("Flipkart","Dyson V15 Detect")},{name:"Dyson Website",price:65900,url:s("Dyson Website","")}],
specs:{Suction:"230 AW",Battery:"60 min",Filter:"HEPA",Weight:"3.1kg"},history:[65900,61900,57900,55900,53900,52900]},

{id:39,name:"Nike Dri-FIT Training T-Shirt Men",category:"Clothing",emoji:"👕",rating:4.4,reviews:22100,bestPrice:899,originalPrice:2295,discount:61,bestStore:"Myntra",hot:false,
stores:[{name:"Myntra",price:899,url:s("Myntra","Nike Dri-FIT Men Training T-Shirt")},{name:"Amazon",price:999,url:s("Amazon","Nike Dri-FIT T-Shirt Men")},{name:"Nike.com",price:2295,url:"https://www.nike.com/in/w?q=dri-fit+tshirt+men&vst=dri-fit+tshirt+men"}],
specs:{Fabric:"100% Polyester Dri-FIT",Fit:"Standard",Available:"S M L XL XXL"},history:[2295,1895,1495,1195,999,899]},

{id:40,name:"Adidas Essentials 3-Stripes Track Pants",category:"Clothing",emoji:"👖",rating:4.3,reviews:16700,bestPrice:1299,originalPrice:3499,discount:63,bestStore:"Myntra",hot:false,
stores:[{name:"Myntra",price:1299,url:s("Myntra","Adidas Essentials Track Pants Men")},{name:"Amazon",price:1499,url:s("Amazon","Adidas Track Pants Men")},{name:"Adidas.co.in",price:3499,url:s("Adidas.co.in","")}],
specs:{Fabric:"70% Cotton 30% Recycled Polyester",Fit:"Regular",Pockets:"3",Available:"S M L XL 2XL"},history:[3499,2999,2299,1799,1499,1299]},

{id:41,name:"Ray-Ban Aviator Classic Sunglasses",category:"Accessories",emoji:"🕶️",rating:4.7,reviews:8900,bestPrice:5490,originalPrice:9990,discount:45,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:5490,url:s("Amazon","Ray-Ban Aviator Classic Sunglasses")},{name:"Flipkart",price:5990,url:s("Flipkart","Ray-Ban Aviator Sunglasses")},{name:"Myntra",price:5799,url:s("Myntra","Ray-Ban Aviator Sunglasses")}],
specs:{Frame:"Gold Metal",Lens:"Classic G-15",UV:"100% UV Protection",Size:"58mm",Style:"Aviator"},history:[9990,8490,7490,6490,5990,5490]},

{id:42,name:"boAt Airdopes 141 TWS Earbuds",category:"Headphones",emoji:"🎧",rating:4.1,reviews:89400,bestPrice:799,originalPrice:3990,discount:80,bestStore:"Amazon",hot:true,
stores:[{name:"Amazon",price:799,url:s("Amazon","boAt Airdopes 141 TWS Earbuds")},{name:"Flipkart",price:899,url:s("Flipkart","boAt Airdopes 141")},{name:"boAt Website",price:1499,url:s("boAt Website","")}],
specs:{Type:"In-ear True Wireless",Driver:"8mm",Battery:"5hr+42hr",Bluetooth:"5.2",Water:"IPX4"},history:[3990,2990,1990,1299,999,799]},

{id:43,name:"Fossil Neutra Chronograph Men Watch",category:"Accessories",emoji:"⌚",rating:4.5,reviews:5600,bestPrice:5995,originalPrice:14995,discount:60,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:5995,url:s("Amazon","Fossil Neutra Chronograph Watch Men")},{name:"Myntra",price:6495,url:s("Myntra","Fossil Neutra Chronograph Watch")},{name:"Fossil Website",price:14995,url:s("Fossil Website","")}],
specs:{Type:"Analogue Chronograph",Case:"44mm Stainless Steel",Strap:"Leather",Water:"50m",Movement:"Quartz"},history:[14995,11995,8995,7495,6495,5995]},

{id:44,name:"Wildcraft Daypack Backpack 32L",category:"Accessories",emoji:"🎒",rating:4.4,reviews:12400,bestPrice:1299,originalPrice:3499,discount:63,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:1299,url:s("Amazon","Wildcraft Daypack Backpack 32L")},{name:"Flipkart",price:1399,url:s("Flipkart","Wildcraft Backpack 32L")},{name:"Myntra",price:1499,url:s("Myntra","Wildcraft Backpack")}],
specs:{Capacity:"32 litres",Material:"Polyester 600D",Laptop:'15.6" sleeve',Water:"Water-resistant"},history:[3499,2799,2099,1699,1499,1299]},

{id:45,name:"Xiaomi Mi Smart Band 8",category:"Watches",emoji:"⌚",rating:4.3,reviews:34500,bestPrice:2499,originalPrice:4999,discount:50,bestStore:"Flipkart",hot:false,
stores:[{name:"Flipkart",price:2499,url:s("Flipkart","Xiaomi Mi Smart Band 8")},{name:"Amazon",price:2699,url:s("Amazon","Xiaomi Smart Band 8")},{name:"Mi.com",price:3999,url:s("Mi.com","")}],
specs:{Display:'1.62" AMOLED',Health:"Heart rate SpO2 Stress",Battery:"16 days",Water:"5ATM",Sports:"150+ modes"},history:[4999,3999,3299,2999,2699,2499]},

{id:46,name:"Herschel Little America Backpack 25L",category:"Accessories",emoji:"🎒",rating:4.6,reviews:4800,bestPrice:3999,originalPrice:7999,discount:50,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:3999,url:s("Amazon","Herschel Little America Backpack")},{name:"Myntra",price:4299,url:s("Myntra","Herschel Little America Backpack")},{name:"Herschel.com",price:7999,url:s("Herschel.com","")}],
specs:{Capacity:"25 litres",Material:"600D Polyester",Laptop:'15" fleece-lined',Weight:"560g"},history:[7999,6999,5999,4999,4299,3999]},

{id:47,name:"Logitech MX Master 3S Wireless Mouse",category:"Accessories",emoji:"🖱️",rating:4.8,reviews:8900,bestPrice:7995,originalPrice:11995,discount:33,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:7995,url:s("Amazon","Logitech MX Master 3S Wireless Mouse")},{name:"Flipkart",price:8295,url:s("Flipkart","Logitech MX Master 3S")},{name:"Logitech.com",price:11995,url:s("Logitech.com","")}],
specs:{Sensor:"8000 DPI Darkfield",Connectivity:"Bluetooth+Logi Bolt",Battery:"70 days",Buttons:"7 programmable"},history:[11995,10495,9495,8795,8295,7995]},

{id:48,name:"Pepe Jeans Slim Fit Casual Shirt Men",category:"Clothing",emoji:"👔",rating:4.2,reviews:18700,bestPrice:849,originalPrice:2499,discount:66,bestStore:"Myntra",hot:false,
stores:[{name:"Myntra",price:849,url:s("Myntra","Pepe Jeans Slim Fit Shirt Men")},{name:"Amazon",price:999,url:s("Amazon","Pepe Jeans Men Shirt")},{name:"Flipkart",price:929,url:s("Flipkart","Pepe Jeans Shirt Men")}],
specs:{Fit:"Slim",Fabric:"100% Cotton",Collar:"Spread",Pattern:"Checks",Available:"S M L XL XXL"},history:[2499,1999,1499,1199,999,849]},

{id:49,name:"Skechers Go Walk 6 Men Walking Shoes",category:"Sneakers",emoji:"👟",rating:4.4,reviews:14200,bestPrice:2499,originalPrice:6999,discount:64,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:2499,url:s("Amazon","Skechers Go Walk 6 Men Shoes")},{name:"Flipkart",price:2699,url:s("Flipkart","Skechers Go Walk 6")},{name:"Myntra",price:2799,url:s("Myntra","Skechers Go Walk Men")},{name:"Skechers.in",price:5999,url:s("Skechers.in","")}],
specs:{Type:"Walking",Upper:"Air-cooled Mesh",Sole:"ULTRA FLEX",Available:"UK 6-12"},history:[6999,5499,4299,3499,2799,2499]},

{id:50,name:"Mi 43 inch 4K Android Smart TV",category:"TVs",emoji:"📺",rating:4.4,reviews:21400,bestPrice:28999,originalPrice:42999,discount:33,bestStore:"Flipkart",hot:false,
stores:[{name:"Flipkart",price:28999,url:s("Flipkart","Mi 43 inch 4K Android Smart TV")},{name:"Amazon",price:29999,url:s("Amazon","Mi 43 4K Smart TV")},{name:"Mi.com",price:42999,url:s("Mi.com","")}],
specs:{Display:'43" 4K UHD',Processor:"Cortex A55 Quad Core",Sound:"24W Dolby DTS-HD",Smart:"Android TV 11"},history:[42999,38999,34999,31999,29999,28999]},

{id:51,name:"Fossil Men Minimalist Leather Watch",category:"Accessories",emoji:"⌚",rating:4.5,reviews:7200,bestPrice:4495,originalPrice:9995,discount:55,bestStore:"Myntra",hot:false,
stores:[{name:"Myntra",price:4495,url:s("Myntra","Fossil Men Minimalist Watch")},{name:"Amazon",price:4795,url:s("Amazon","Fossil Minimalist Watch Men")},{name:"Fossil Website",price:9995,url:s("Fossil Website","")}],
specs:{Type:"Analogue",Case:"40mm Stainless Steel",Strap:"Genuine Leather",Water:"30m",Movement:"Quartz"},history:[9995,7995,6495,5495,4795,4495]},

{id:52,name:"US Polo Assn Classic Polo T-Shirt Men",category:"Clothing",emoji:"👕",rating:4.3,reviews:26400,bestPrice:649,originalPrice:1499,discount:57,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:649,url:s("Amazon","US Polo Assn Men Polo T-Shirt")},{name:"Myntra",price:699,url:s("Myntra","US Polo Men T-Shirt")},{name:"Flipkart",price:679,url:s("Flipkart","US Polo Assn Polo Tshirt")}],
specs:{Fit:"Regular",Fabric:"Pique Cotton",Collar:"Ribbed Polo",Available:"S M L XL XXL 3XL"},history:[1499,1199,999,849,749,649]},

{id:53,name:"Reebok Classic Leather Sneakers Men",category:"Sneakers",emoji:"👟",rating:4.4,reviews:9800,bestPrice:2999,originalPrice:7999,discount:63,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:2999,url:s("Amazon","Reebok Classic Leather Sneakers Men")},{name:"Myntra",price:3299,url:s("Myntra","Reebok Classic Leather Sneakers")},{name:"Reebok.in",price:7999,url:s("Reebok.in","")}],
specs:{Type:"Classic Lifestyle",Upper:"Full Grain Leather",Sole:"EVA midsole",Available:"UK 6-12"},history:[7999,6499,4999,3999,3299,2999]},

{id:54,name:"realme GT 6 5G 12GB 256GB",category:"Smartphones",emoji:"📱",rating:4.5,reviews:7800,bestPrice:35999,originalPrice:45999,discount:22,bestStore:"Flipkart",hot:false,
stores:[{name:"Flipkart",price:35999,url:s("Flipkart","realme GT 6 5G 12GB 256GB")},{name:"Amazon",price:36999,url:s("Amazon","realme GT 6 5G")},{name:"realme.com",price:45999,url:s("realme.com","")}],
specs:{Display:'6.78" AMOLED 120Hz',Processor:"Snapdragon 8s Gen 3",RAM:"12GB",Storage:"256GB",Battery:"5500mAh"},history:[45999,42999,39999,37999,36999,35999]},

{id:55,name:"iQOO 12 5G 12GB 256GB",category:"Smartphones",emoji:"📱",rating:4.6,reviews:6400,bestPrice:52999,originalPrice:64999,discount:18,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:52999,url:s("Amazon","iQOO 12 5G 12GB 256GB")},{name:"Flipkart",price:53999,url:s("Flipkart","iQOO 12 5G")}],
specs:{Display:'6.78" AMOLED 144Hz',Processor:"Snapdragon 8 Gen 3",RAM:"12GB",Storage:"256GB",Battery:"5000mAh 120W"},history:[64999,60999,57999,55999,53999,52999]},

{id:56,name:"Motorola Edge 50 Pro 12GB 256GB",category:"Smartphones",emoji:"📱",rating:4.4,reviews:5200,bestPrice:29999,originalPrice:39999,discount:25,bestStore:"Flipkart",hot:false,
stores:[{name:"Flipkart",price:29999,url:s("Flipkart","Motorola Edge 50 Pro 5G")},{name:"Amazon",price:30999,url:s("Amazon","Motorola Edge 50 Pro")}],
specs:{Display:'6.7" pOLED 144Hz',Processor:"Snapdragon 7 Gen 3",RAM:"12GB",Storage:"256GB",Battery:"4500mAh 125W"},history:[39999,36999,33999,31999,30999,29999]},

{id:57,name:"HP Pavilion 15 i5 13th Gen 16GB 512GB",category:"Laptops",emoji:"💻",rating:4.4,reviews:4200,bestPrice:54990,originalPrice:79990,discount:31,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:54990,url:s("Amazon","HP Pavilion 15 i5 13th Gen Laptop")},{name:"Flipkart",price:55990,url:s("Flipkart","HP Pavilion 15 i5 13th Gen")},{name:"HP.com",price:79990,url:s("HP.com","")}],
specs:{Display:'15.6" FHD IPS',Processor:"Intel Core i5-1335U",RAM:"16GB DDR4",Storage:"512GB SSD",OS:"Windows 11"},history:[79990,72990,64990,59990,56990,54990]},

{id:58,name:"MSI Thin GF63 RTX 4050 Gaming Laptop",category:"Laptops",emoji:"💻",rating:4.5,reviews:3100,bestPrice:69990,originalPrice:94990,discount:26,bestStore:"Amazon",hot:true,
stores:[{name:"Amazon",price:69990,url:s("Amazon","MSI Thin GF63 RTX 4050 Gaming Laptop")},{name:"Flipkart",price:71990,url:s("Flipkart","MSI Thin GF63 Gaming Laptop")}],
specs:{Display:'15.6" FHD 144Hz IPS',Processor:"Intel Core i5-12450H",RAM:"16GB DDR4",Storage:"512GB SSD",GPU:"RTX 4050 6GB"},history:[94990,87990,79990,74990,71990,69990]},

{id:59,name:"Sony WF-1000XM5 True Wireless Earbuds",category:"Headphones",emoji:"🎧",rating:4.8,reviews:8900,bestPrice:21990,originalPrice:29990,discount:27,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:21990,url:s("Amazon","Sony WF-1000XM5 True Wireless Earbuds")},{name:"Flipkart",price:22990,url:s("Flipkart","Sony WF-1000XM5")},{name:"Croma",price:23990,url:s("Croma","Sony WF-1000XM5")}],
specs:{Type:"In-ear True Wireless",ANC:"Integrated Processor V2",Battery:"8hr+24hr",Water:"IPX4"},history:[29990,27990,25990,23990,22990,21990]},

{id:60,name:"Sennheiser Momentum 4 Wireless",category:"Headphones",emoji:"🎧",rating:4.7,reviews:4300,bestPrice:24990,originalPrice:39990,discount:38,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:24990,url:s("Amazon","Sennheiser Momentum 4 Wireless Headphones")},{name:"Flipkart",price:25990,url:s("Flipkart","Sennheiser Momentum 4")}],
specs:{Type:"Over-ear Wireless",ANC:"Adaptive ANC",Battery:"60hr",Codec:"aptX Adaptive",Weight:"293g"},history:[39990,35990,31990,27990,25990,24990]},

{id:61,name:"Nike Air Force 1 07 White Sneakers",category:"Sneakers",emoji:"👟",rating:4.7,reviews:31200,bestPrice:7595,originalPrice:9295,discount:18,bestStore:"Myntra",hot:false,
stores:[{name:"Myntra",price:7595,url:s("Myntra","Nike Air Force 1 White Sneakers")},{name:"Nike.com",price:7595,url:"https://www.nike.com/in/w?q=air+force+1&vst=air+force+1"},{name:"Amazon",price:7999,url:s("Amazon","Nike Air Force 1 White")},{name:"Flipkart",price:7999,url:s("Flipkart","Nike Air Force 1 White")}],
specs:{Type:"Lifestyle Classic",Upper:"Full Grain Leather",Sole:"Rubber cupsole",Available:"UK 6-13"},history:[9295,8995,8295,7995,7795,7595]},

{id:62,name:"Converse Chuck Taylor All Star High Top",category:"Sneakers",emoji:"👟",rating:4.5,reviews:22400,bestPrice:3495,originalPrice:5295,discount:34,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:3495,url:s("Amazon","Converse Chuck Taylor All Star High Top")},{name:"Myntra",price:3695,url:s("Myntra","Converse Chuck Taylor All Star")},{name:"Flipkart",price:3795,url:s("Flipkart","Converse Chuck Taylor High Top")}],
specs:{Type:"Classic High Top",Upper:"Canvas",Sole:"Rubber",Available:"UK 5-12"},history:[5295,4795,4295,3895,3695,3495]},

{id:63,name:"boAt Airdopes VS TWS Earbuds",category:"Headphones",emoji:"🎧",rating:4.0,reviews:56700,bestPrice:699,originalPrice:3999,discount:83,bestStore:"Flipkart",hot:true,
stores:[{name:"Flipkart",price:699,url:s("Flipkart","boAt Airdopes TWS Earbuds")},{name:"Amazon",price:799,url:s("Amazon","boAt Airdopes TWS")}],
specs:{Type:"In-ear TWS",Driver:"10mm",Battery:"7hr+35hr",ANC:"Hybrid ANC",Water:"IPX5",Bluetooth:"5.3"},history:[3999,2999,1999,1199,899,699]},

{id:64,name:"Mi 10000mAh Power Bank 3i",category:"Accessories",emoji:"🔋",rating:4.3,reviews:48900,bestPrice:699,originalPrice:1499,discount:53,bestStore:"Amazon",hot:true,
stores:[{name:"Amazon",price:699,url:s("Amazon","Xiaomi Mi 10000mAh Power Bank 3i")},{name:"Flipkart",price:749,url:s("Flipkart","Mi 10000mAh Power Bank")},{name:"Mi.com",price:999,url:s("Mi.com","")}],
specs:{Capacity:"10000mAh",Output:"18W",Ports:"2xUSB-A+1xUSB-C",Weight:"228g"},history:[1499,1199,999,849,749,699]},

{id:65,name:"Redmi Note 13 Pro Plus 5G 12GB 256GB",category:"Smartphones",emoji:"📱",rating:4.5,reviews:12400,bestPrice:29999,originalPrice:38999,discount:23,bestStore:"Amazon",hot:true,
stores:[{name:"Amazon",price:29999,url:s("Amazon","Redmi Note 13 Pro Plus 5G 12GB")},{name:"Flipkart",price:30999,url:s("Flipkart","Redmi Note 13 Pro+ 5G")},{name:"Mi.com",price:38999,url:s("Mi.com","")}],
specs:{Display:'6.67" AMOLED 120Hz',Processor:"Dimensity 7200 Ultra",RAM:"12GB",Storage:"256GB",Camera:"200MP+8MP+2MP",Battery:"5000mAh 120W"},history:[38999,35999,32999,31999,30999,29999]},

{id:66,name:"POCO X6 Pro 5G 12GB 256GB",category:"Smartphones",emoji:"📱",rating:4.5,reviews:9800,bestPrice:22999,originalPrice:29999,discount:23,bestStore:"Flipkart",hot:false,
stores:[{name:"Flipkart",price:22999,url:s("Flipkart","POCO X6 Pro 5G 12GB 256GB")},{name:"Amazon",price:23999,url:s("Amazon","POCO X6 Pro 5G")}],
specs:{Display:'6.67" AMOLED 120Hz',Processor:"Dimensity 8300 Ultra",RAM:"12GB",Storage:"256GB",Battery:"5000mAh 67W"},history:[29999,27999,25999,24999,23999,22999]},

{id:67,name:"Casio G-Shock GA-2100 Watch",category:"Accessories",emoji:"⌚",rating:4.7,reviews:9800,bestPrice:7495,originalPrice:9995,discount:25,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:7495,url:s("Amazon","Casio G-Shock GA-2100 Watch")},{name:"Flipkart",price:7795,url:s("Flipkart","Casio G-Shock GA-2100")},{name:"Casio Website",price:9995,url:s("Casio Website","")}],
specs:{Type:"Digital-Analogue",Case:"Octagonal 45mm",Shock:"G-Shock",Water:"200m",Battery:"3 years"},history:[9995,9295,8595,7995,7795,7495]},

{id:68,name:"Titan Analogue Men Watch Steel Strap",category:"Accessories",emoji:"⌚",rating:4.5,reviews:21800,bestPrice:2495,originalPrice:5995,discount:58,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:2495,url:s("Amazon","Titan Analogue Men Watch Steel Strap")},{name:"Myntra",price:2695,url:s("Myntra","Titan Men Analogue Watch")},{name:"Titan Website",price:5995,url:s("Titan Website","")}],
specs:{Type:"Analogue",Case:"40mm Stainless Steel",Strap:"Stainless Steel",Water:"30m",Movement:"Quartz"},history:[5995,4995,3995,2995,2695,2495]},

{id:69,name:"Samsung 65 inch Neo QLED 4K TV",category:"TVs",emoji:"📺",rating:4.7,reviews:3400,bestPrice:149990,originalPrice:219990,discount:32,bestStore:"Flipkart",hot:false,
stores:[{name:"Flipkart",price:149990,url:s("Flipkart","Samsung 65 Neo QLED 4K Smart TV")},{name:"Amazon",price:152990,url:s("Amazon","Samsung 65 Neo QLED 4K")},{name:"Croma",price:154990,url:s("Croma","Samsung 65 Neo QLED")}],
specs:{Display:'65" Neo QLED 4K',HDR:"HDR10+",Sound:"60W Dolby Atmos",Smart:"Tizen",Gaming:"4K 144Hz G-Sync"},history:[219990,199990,179990,164990,154990,149990]},

{id:70,name:"JBL Flip 6 Portable Bluetooth Speaker",category:"Speakers",emoji:"🔊",rating:4.6,reviews:18400,bestPrice:8499,originalPrice:13999,discount:39,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:8499,url:s("Amazon","JBL Flip 6 Portable Bluetooth Speaker")},{name:"Flipkart",price:8699,url:s("Flipkart","JBL Flip 6")},{name:"JBL Website",price:13999,url:s("JBL Website","")}],
specs:{Output:"20W",Battery:"12hr",Waterproof:"IP67",Bluetooth:"5.1",Weight:"550g"},history:[13999,11999,10499,9499,8699,8499]},

{id:71,name:"Boat Stone 650 25W Bluetooth Speaker",category:"Speakers",emoji:"🔊",rating:4.3,reviews:34200,bestPrice:1299,originalPrice:4990,discount:74,bestStore:"Amazon",hot:true,
stores:[{name:"Amazon",price:1299,url:s("Amazon","boAt Stone 650 25W Bluetooth Speaker")},{name:"Flipkart",price:1399,url:s("Flipkart","boAt Stone 650")},{name:"boAt Website",price:2999,url:s("boAt Website","")}],
specs:{Output:"25W",Battery:"7hr",Waterproof:"IPX7",Bluetooth:"5.0",Weight:"700g"},history:[4990,3990,2690,1890,1499,1299]},

{id:72,name:"Seagate Expansion 2TB Portable Hard Drive",category:"Accessories",emoji:"💾",rating:4.4,reviews:28900,bestPrice:3999,originalPrice:6995,discount:43,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:3999,url:s("Amazon","Seagate Expansion 2TB Portable Hard Drive")},{name:"Flipkart",price:4199,url:s("Flipkart","Seagate Expansion 2TB")}],
specs:{Capacity:"2TB",Interface:"USB 3.0",Format:"NTFS",Dimensions:"111x82x17mm"},history:[6995,5995,4995,4499,4199,3999]},

{id:73,name:"Samsung T7 Shield 2TB Portable SSD",category:"Accessories",emoji:"💾",rating:4.7,reviews:8900,bestPrice:8499,originalPrice:14999,discount:43,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:8499,url:s("Amazon","Samsung T7 Shield 2TB Portable SSD")},{name:"Flipkart",price:8699,url:s("Flipkart","Samsung T7 Shield 2TB SSD")}],
specs:{Capacity:"2TB",Speed:"1050MB/s",Interface:"USB 3.2 Gen 2",Water:"IP65",Drop:"3m drop proof",Weight:"98g"},history:[14999,12999,10999,9499,8699,8499]},

{id:74,name:"Fujifilm Instax Mini 12 Instant Camera",category:"Cameras",emoji:"📷",rating:4.7,reviews:8400,bestPrice:5999,originalPrice:9999,discount:40,bestStore:"Amazon",hot:true,
stores:[{name:"Amazon",price:5999,url:s("Amazon","Fujifilm Instax Mini 12 Instant Camera")},{name:"Flipkart",price:6299,url:s("Flipkart","Fujifilm Instax Mini 12")},{name:"Croma",price:6999,url:s("Croma","Fujifilm Instax Mini 12")}],
specs:{Type:"Instant Film Camera",Film:"Instax Mini",Flash:"Auto",Colors:"5 colors"},history:[9999,8499,7499,6799,6299,5999]},

{id:75,name:"DJI Mini 3 Drone with RC-N1 Controller",category:"Cameras",emoji:"🚁",rating:4.7,reviews:3200,bestPrice:38990,originalPrice:52990,discount:26,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:38990,url:s("Amazon","DJI Mini 3 Drone RC-N1")},{name:"Flipkart",price:39990,url:s("Flipkart","DJI Mini 3 Drone")},{name:"DJI.com",price:52990,url:s("DJI.com","")}],
specs:{Camera:"12MP 4K HDR",Weight:"<249g",FlightTime:"38 min",Range:"10km",Stabilization:"3-axis gimbal"},history:[52990,47990,43990,41990,39990,38990]},

{id:76,name:"Logitech G502 X Plus Wireless Gaming Mouse",category:"Accessories",emoji:"🖱️",rating:4.7,reviews:6200,bestPrice:9495,originalPrice:15995,discount:41,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:9495,url:s("Amazon","Logitech G502 X Plus Wireless Gaming Mouse")},{name:"Flipkart",price:9795,url:s("Flipkart","Logitech G502 X Plus")}],
specs:{Sensor:"HERO 25K",DPI:"100-25600",Battery:"130hr",Connectivity:"Lightspeed Wireless",Buttons:"13 programmable"},history:[15995,13995,11995,10995,9795,9495]},

{id:77,name:"Under Armour Men Tech 2.0 T-Shirt",category:"Clothing",emoji:"👕",rating:4.4,reviews:14200,bestPrice:699,originalPrice:1999,discount:65,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:699,url:s("Amazon","Under Armour Men Tech 2.0 T-Shirt")},{name:"Myntra",price:799,url:s("Myntra","Under Armour Men T-Shirt")}],
specs:{Fabric:"Polyester UA Tech",Fit:"Loose",Occasion:"Training",Available:"S M L XL XXL"},history:[1999,1599,1199,999,799,699]},

{id:78,name:"Crocs Classic Clog Unisex",category:"Sneakers",emoji:"👡",rating:4.5,reviews:42100,bestPrice:1999,originalPrice:4995,discount:60,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:1999,url:s("Amazon","Crocs Classic Clog Unisex")},{name:"Myntra",price:2199,url:s("Myntra","Crocs Classic Clog")},{name:"Crocs.com",price:4995,url:s("Crocs.com","")}],
specs:{Type:"Clog",Material:"Croslite foam",Water:"Yes",Available:"M3-M12 W4-W12"},history:[4995,3995,2995,2399,2199,1999]},

{id:79,name:"Paragon Men Hawai Slippers",category:"Sneakers",emoji:"🩴",rating:4.1,reviews:64200,bestPrice:149,originalPrice:399,discount:63,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:149,url:s("Amazon","Paragon Men Hawai Slippers")},{name:"Flipkart",price:169,url:s("Flipkart","Paragon Hawai Slippers Men")}],
specs:{Type:"Hawai Slippers",Upper:"EVA",Sole:"PVC",Available:"UK 6-12"},history:[399,299,229,199,169,149]},

{id:80,name:"OnePlus Nord CE 4 Lite 5G 8GB 128GB",category:"Smartphones",emoji:"📱",rating:4.3,reviews:8900,bestPrice:18999,originalPrice:24999,discount:24,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:18999,url:s("Amazon","OnePlus Nord CE 4 Lite 5G 8GB 128GB")},{name:"Flipkart",price:19499,url:s("Flipkart","OnePlus Nord CE 4 Lite 5G")}],
specs:{Display:'6.67" AMOLED 120Hz',Processor:"Snapdragon 695 5G",RAM:"8GB",Storage:"128GB",Battery:"5110mAh 80W"},history:[24999,22999,21499,20499,19499,18999]},

{id:81,name:"Garmin Venu 3 Smartwatch",category:"Watches",emoji:"⌚",rating:4.7,reviews:2100,bestPrice:36990,originalPrice:47990,discount:23,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:36990,url:s("Amazon","Garmin Venu 3 Smartwatch")},{name:"Flipkart",price:37990,url:s("Flipkart","Garmin Venu 3")}],
specs:{Display:'1.4" AMOLED',GPS:"Yes multi-band",Health:"Advanced Body Battery HRV",Battery:"14 days",Water:"5ATM"},history:[47990,44990,41990,39990,37990,36990]},

{id:82,name:"Asus TUF Gaming 27 inch 165Hz Monitor",category:"Monitors",emoji:"🖥️",rating:4.7,reviews:5600,bestPrice:21990,originalPrice:34990,discount:37,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:21990,url:s("Amazon","ASUS TUF Gaming 27 inch 165Hz Monitor")},{name:"Flipkart",price:22490,url:s("Flipkart","ASUS TUF Gaming Monitor 27 165Hz")}],
specs:{Display:'27" IPS FHD 165Hz',Response:"1ms MPRT",HDR:"HDR10",FreeSync:"Premium Pro"},history:[34990,30990,27490,24990,22990,21990]},

{id:83,name:"Apple HomePod mini Smart Speaker",category:"Speakers",emoji:"🔊",rating:4.6,reviews:6700,bestPrice:9900,originalPrice:10990,discount:10,bestStore:"Flipkart",hot:false,
stores:[{name:"Flipkart",price:9900,url:s("Flipkart","Apple HomePod mini Smart Speaker")},{name:"Amazon",price:9999,url:s("Amazon","Apple HomePod mini")},{name:"Apple Store",price:10990,url:"https://www.apple.com/in/homepod-mini/"}],
specs:{Chip:"S5 chip",Audio:"360° audio",HomeKit:"Yes",Siri:"Yes",Color:"4 colors"},history:[10990,10490,10190,9990,9900,9900]},

{id:84,name:"Wildstone Edge Perfume Men 100ml",category:"Beauty",emoji:"🌸",rating:4.2,reviews:34800,bestPrice:299,originalPrice:799,discount:63,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:299,url:s("Amazon","Wildstone Edge Perfume Men 100ml")},{name:"Flipkart",price:329,url:s("Flipkart","Wildstone Edge Perfume")}],
specs:{Volume:"100ml",Type:"Eau de Parfum",Notes:"Aqua Citrus Musk",Duration:"8-10hr"},history:[799,599,499,399,329,299]},

{id:85,name:"Maybelline Fit Me Matte Foundation",category:"Beauty",emoji:"💄",rating:4.3,reviews:28900,bestPrice:299,originalPrice:699,discount:57,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:299,url:s("Amazon","Maybelline Fit Me Matte Foundation")},{name:"Myntra",price:349,url:s("Myntra","Maybelline Fit Me Foundation")},{name:"Nykaa",price:649,url:s("Nykaa","Maybelline Fit Me Foundation")}],
specs:{Volume:"30ml",Coverage:"Medium to Full",Finish:"Matte",Shades:"40+"},history:[699,599,499,399,349,299]},

{id:86,name:"Prestige Iris 750W Mixer Grinder",category:"Appliances",emoji:"🍹",rating:4.4,reviews:32400,bestPrice:1799,originalPrice:3995,discount:55,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:1799,url:s("Amazon","Prestige Iris 750W Mixer Grinder")},{name:"Flipkart",price:1899,url:s("Flipkart","Prestige Iris Mixer Grinder 750W")}],
specs:{Power:"750W",Jars:"3 jars",Speed:"3 speeds+pulse",Motor:"Copper",Warranty:"2 years"},history:[3995,3295,2695,2195,1899,1799]},

{id:87,name:"Haier 8kg Front Load Washing Machine",category:"Appliances",emoji:"🫧",rating:4.3,reviews:8900,bestPrice:28990,originalPrice:45990,discount:37,bestStore:"Flipkart",hot:false,
stores:[{name:"Flipkart",price:28990,url:s("Flipkart","Haier 8kg Front Load Washing Machine")},{name:"Amazon",price:29490,url:s("Amazon","Haier 8kg Fully Automatic Front Load")},{name:"Croma",price:29990,url:s("Croma","Haier 8kg Front Load")}],
specs:{Capacity:"8kg",Type:"Front Load",Programs:"16",RPM:"1400",Rating:"5 Star"},history:[45990,40990,35990,31990,29990,28990]},

{id:88,name:"Levi's 514 Regular Fit Men Jeans",category:"Clothing",emoji:"👖",rating:4.4,reviews:19800,bestPrice:1599,originalPrice:3999,discount:60,bestStore:"Myntra",hot:false,
stores:[{name:"Myntra",price:1599,url:s("Myntra","Levis 514 Regular Fit Men Jeans")},{name:"Amazon",price:1799,url:s("Amazon","Levis 514 Regular Fit Jeans Men")},{name:"Flipkart",price:1899,url:s("Flipkart","Levis 514 Regular Jeans")}],
specs:{Fit:"Regular",Fabric:"Stretch Denim",Available:"28-38 waist"},history:[3999,3299,2599,1999,1799,1599]},

{id:89,name:"Wrangler Relaxed Fit Cargo Pants Men",category:"Clothing",emoji:"👖",rating:4.2,reviews:19400,bestPrice:999,originalPrice:2999,discount:67,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:999,url:s("Amazon","Wrangler Men Relaxed Fit Cargo Pants")},{name:"Myntra",price:1099,url:s("Myntra","Wrangler Cargo Pants Men")},{name:"Flipkart",price:1049,url:s("Flipkart","Wrangler Cargo Pants")}],
specs:{Fit:"Relaxed",Fabric:"100% Cotton Twill",Pockets:"6 pockets",Available:"30-40 waist"},history:[2999,2499,1999,1499,1099,999]},

{id:90,name:"boAt Rockerz 450 Pro Bluetooth Headphones",category:"Headphones",emoji:"🎧",rating:4.1,reviews:62000,bestPrice:849,originalPrice:2990,discount:72,bestStore:"Amazon",hot:true,
stores:[{name:"Amazon",price:849,url:s("Amazon","boAt Rockerz 450 Pro Bluetooth Headphones")},{name:"Flipkart",price:949,url:s("Flipkart","boAt Rockerz 450 Pro")},{name:"boAt Website",price:1499,url:s("boAt Website","")}],
specs:{Type:"Over-ear Wireless",Driver:"40mm",Battery:"15hr",Bluetooth:"5.0",Mic:"Yes"},history:[2990,2290,1790,1199,949,849]},

{id:91,name:"Woodland Men Leather Ankle Boots",category:"Sneakers",emoji:"👞",rating:4.4,reviews:12800,bestPrice:2799,originalPrice:5995,discount:53,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:2799,url:s("Amazon","Woodland Men Leather Ankle Boots")},{name:"Flipkart",price:2999,url:s("Flipkart","Woodland Leather Ankle Boots Men")},{name:"Myntra",price:3099,url:s("Myntra","Woodland Men Ankle Boots")}],
specs:{Type:"Ankle Boots",Upper:"Genuine Leather",Sole:"Rubber",Available:"UK 6-12"},history:[5995,4995,3995,3299,2999,2799]},

{id:92,name:"Cosmic Byte CB-GH7 Gaming Headset",category:"Headphones",emoji:"🎧",rating:4.2,reviews:24600,bestPrice:899,originalPrice:2499,discount:64,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:899,url:s("Amazon","Cosmic Byte CB-GH7 Gaming Headset")},{name:"Flipkart",price:999,url:s("Flipkart","Cosmic Byte Gaming Headset")}],
specs:{Type:"Over-ear Wired",Driver:"40mm",Mic:"Flexible boom mic",Connector:"3.5mm"},history:[2499,1999,1499,1199,999,899]},

{id:93,name:"Xiaomi Smart Band 9",category:"Watches",emoji:"⌚",rating:4.2,reviews:28900,bestPrice:1999,originalPrice:3999,discount:50,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:1999,url:s("Amazon","Xiaomi Smart Band 9 Activity Tracker")},{name:"Flipkart",price:2099,url:s("Flipkart","Xiaomi Smart Band 9")},{name:"Mi.com",price:2999,url:s("Mi.com","")}],
specs:{Display:'1.62" AMOLED',Health:"Heart rate SpO2",Battery:"21 days",Water:"5ATM",Sports:"150+ modes"},history:[3999,3299,2799,2399,2099,1999]},

{id:94,name:"LEGO Technic McLaren Formula E Car",category:"Toys",emoji:"🧱",rating:4.8,reviews:2900,bestPrice:3499,originalPrice:5999,discount:42,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:3499,url:s("Amazon","LEGO Technic McLaren Formula E Car 42169")},{name:"Flipkart",price:3699,url:s("Flipkart","LEGO Technic McLaren Formula E")},{name:"LEGO.com",price:5999,url:s("LEGO.com","")}],
specs:{Pieces:"452",Age:"10+",Scale:"1:12",Features:"Moving engine steering"},history:[5999,4999,4299,3899,3699,3499]},

{id:95,name:"Fastrack Men Analogue Watch",category:"Accessories",emoji:"⌚",rating:4.3,reviews:18700,bestPrice:999,originalPrice:2995,discount:67,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:999,url:s("Amazon","Fastrack Men Analogue Watch")},{name:"Flipkart",price:1099,url:s("Flipkart","Fastrack Analogue Watch Men")},{name:"Myntra",price:1099,url:s("Myntra","Fastrack Men Watch")}],
specs:{Type:"Analogue",Case:"36mm",Strap:"Silicon",Water:"30m",Movement:"Quartz"},history:[2995,2295,1795,1395,1099,999]},

{id:96,name:"HP 27f 4K IPS Monitor 27 inch",category:"Monitors",emoji:"🖥️",rating:4.6,reviews:4200,bestPrice:18990,originalPrice:29990,discount:37,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:18990,url:s("Amazon","HP 27f 4K IPS Monitor 27 inch")},{name:"Flipkart",price:19490,url:s("Flipkart","HP 27f 4K Monitor")}],
specs:{Display:'27" IPS 4K UHD',Resolution:"3840x2160",Brightness:"300 nits",Response:"5ms",VESA:"100x100"},history:[29990,26990,23990,21490,19990,18990]},

{id:97,name:"Apple iPad mini 6th Gen 256GB",category:"Tablets",emoji:"📲",rating:4.7,reviews:6800,bestPrice:59900,originalPrice:72900,discount:18,bestStore:"Amazon",hot:false,
stores:[{name:"Amazon",price:59900,url:s("Amazon","Apple iPad mini 6th Generation 256GB")},{name:"Flipkart",price:61900,url:s("Flipkart","Apple iPad mini 6th Gen 256GB")},{name:"Apple Store",price:72900,url:"https://www.apple.com/in/shop/buy-ipad/ipad-mini"}],
specs:{Display:'8.3" Liquid Retina',Chip:"Apple A15 Bionic",RAM:"4GB",Storage:"256GB",Camera:"12MP Ultra Wide",Battery:"10hr"},history:[72900,68900,64900,62900,61900,59900]},

{id:98,name:"realme narzo 70 Pro 5G 8GB 128GB",category:"Smartphones",emoji:"📱",rating:4.2,reviews:7400,bestPrice:18999,originalPrice:25999,discount:27,bestStore:"Flipkart",hot:false,
stores:[{name:"Flipkart",price:18999,url:s("Flipkart","realme narzo 70 Pro 5G 8GB 128GB")},{name:"Amazon",price:19499,url:s("Amazon","realme narzo 70 Pro 5G")}],
specs:{Display:'6.67" AMOLED 120Hz',Processor:"Dimensity 7050",RAM:"8GB",Storage:"128GB",Camera:"50MP OIS+8MP",Battery:"5000mAh 67W"},history:[25999,23499,21999,20499,19499,18999]},

{id:99,name:"Lenovo IdeaPad Slim 3 i3 12th Gen",category:"Laptops",emoji:"💻",rating:4.3,reviews:8900,bestPrice:29990,originalPrice:44990,discount:33,bestStore:"Flipkart",hot:false,
stores:[{name:"Flipkart",price:29990,url:s("Flipkart","Lenovo IdeaPad Slim 3 i3 12th Gen Laptop")},{name:"Amazon",price:30990,url:s("Amazon","Lenovo IdeaPad Slim 3 i3 12th Gen")}],
specs:{Display:'15.6" FHD TN',Processor:"Intel Core i3-1215U",RAM:"8GB DDR4",Storage:"512GB SSD",OS:"Windows 11"},history:[44990,39990,34990,31990,30990,29990]},

{id:100,name:"Samsung 50 inch Crystal 4K Smart TV",category:"TVs",emoji:"📺",rating:4.4,reviews:15600,bestPrice:32990,originalPrice:52990,discount:38,bestStore:"Amazon",hot:true,
stores:[{name:"Amazon",price:32990,url:s("Amazon","Samsung 50 inch Crystal 4K Smart TV")},{name:"Flipkart",price:33990,url:s("Flipkart","Samsung 50 inch 4K Smart TV")},{name:"Croma",price:34990,url:s("Croma","Samsung 50 4K Smart TV")}],
specs:{Display:'50" Crystal UHD 4K',HDR:"HDR10+",Sound:"20W",Smart:"Tizen OS",Ports:"3xHDMI 2xUSB"},history:[52990,47990,43990,38990,34990,32990]},
];

const fmt=(n)=>"₹"+n.toLocaleString("en-IN");
const stars=(r)=>{let s="";for(let i=1;i<=5;i++)s+=i<=Math.floor(r)?"★":i-r<1?"½":"☆";return s;};

// ── UNIQUE PRICE HISTORIES ────────────────────────────────────
// Each product gets a realistic unique 6-month history
// based on its ID so it's consistent but different per product
(function generateUniqueHistories() {
  PRODUCTS.forEach(p => {
    const base = p.originalPrice;
    const curr = p.bestPrice;
    // Seed random variations per product
    const s1 = (p.id * 13) % 7;
    const s2 = (p.id * 7)  % 11;
    const s3 = (p.id * 17) % 9;
    const s4 = (p.id * 11) % 13;
    // Build a realistic 6-month decline with noise
    const step = (base - curr) / 5;
    p.history = [
      Math.round(base),
      Math.round(base - step * 0.8  + (s1 - 3) * (base * 0.01)),
      Math.round(base - step * 1.8  + (s2 - 5) * (base * 0.008)),
      Math.round(base - step * 2.9  + (s3 - 4) * (base * 0.012)),
      Math.round(base - step * 4.1  + (s4 - 6) * (base * 0.009)),
      Math.round(curr),
    ];
    // Clamp all values to reasonable range
    p.history = p.history.map(v => Math.max(Math.round(curr * 0.95), Math.min(base, v)));
  });
})();

