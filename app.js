// ========================================================================
//   GROCERY PREDEFINED ITEMS DATABASE
// ========================================================================
const initialItems = [
  { id: 'kandi-baalu', name: 'Toor Dal (Kandi Baalu)', telugu: 'కంది బేళ్ళు / కంది బాలు', category: 'lentils-grains', emoji: '🌾', defaultUnit: 'kg', image: 'https://i5.walmartimages.com/seo/Laxmi-Toor-Dal-Traditional-Indian-Split-Yellow-Peas-2lb-Bag_c2f8ae14-e03a-45f4-9364-9a94e6cdc9f4.9365aabd0562c81b2348b2d9cdd0bea0.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF' },
  { id: 'uddi-ballu', name: 'Urad Dal (Uddi Ballu)', telugu: 'ఉద్ది బేళ్ళు / ఉద్ది బాలు', category: 'lentils-grains', emoji: '🌾', defaultUnit: 'kg', image: 'https://swastikfoodproducts.com/wp-content/uploads/2023/10/urad-dal.png' },
  { id: 'senaga-ballu', name: 'Chana Dal (Senaga Ballu)', telugu: 'శనగ బేళ్ళు / శనగ బాలు', category: 'lentils-grains', emoji: '🌾', defaultUnit: 'kg', image: 'https://5.imimg.com/data5/SELLER/Default/2022/5/HR/JE/OC/38280824/chana-dal-1000x1000.png' },
  { id: 'pesaraballu', name: 'Moong Dal (Pesaraballu)', telugu: 'పెసర బేళ్ళు / పెసరబాలు', category: 'lentils-grains', emoji: '🌾', defaultUnit: 'kg', image: 'https://swastikfoodproducts.com/wp-content/uploads/2022/03/moong-dal-yellow.png' },
  { id: 'chenigithanalu', name: 'Groundnuts (Chenigithanalu)', telugu: 'చెనిగిత్తనాలు / వేరుశనగలు', category: 'nuts-seeds', emoji: '🥜', defaultUnit: 'kg', image: 'https://h2healthyhabits.co.in/wp-content/uploads/2024/09/GROUND-NUTS-WITH-SKIN-100-g-1024x1024.jpg' },
  { id: 'pappulu', name: 'Roasted Gram (Pappulu)', telugu: 'పప్పులు / పుట్నాల పప్పు', category: 'lentils-grains', emoji: '🌾', defaultUnit: 'kg', image: 'https://tajspices.co.uk/cdn/shop/products/image_2c0765ac-bd8d-4f79-b405-30178cda032b_800x.jpg?v=1635089626' },
  { id: 'sugar', name: 'Sugar', telugu: 'పంచదార (Sugar)', category: 'pantry-essentials', emoji: '🍬', defaultUnit: 'kg', image: 'https://m.media-amazon.com/images/I/81ObfrslVeL._AC_.jpg' },
  { id: 'jagree', name: 'Jaggery (Jagree)', telugu: 'బెల్లం (Jagree)', category: 'pantry-essentials', emoji: '🍯', defaultUnit: 'kg', image: 'https://5.imimg.com/data5/ANDROID/Default/2025/7/525716293/UD/XZ/JE/248580600/prod-20250709-0956234647610264468136510-jpg-500x500.jpg' },
  { id: 'rock-salt', name: 'Rock Salt', telugu: 'కల్లు ఉప్పు (Rock Salt)', category: 'pantry-essentials', emoji: '🧂', defaultUnit: 'kg', image: 'https://halagel.com.my/wp-content/uploads/2022/02/rock-salt-pink-crystal-1.png' },
  { id: 'dry-chilies', name: 'Dry Red Chilies', telugu: 'ఎండు మిరపకాయలు (Dry Chilies)', category: 'spices-baking', emoji: '🌶️', defaultUnit: 'kg', image: 'https://m.media-amazon.com/images/I/71VvdYOLkDL._SL1280_.jpg' },
  { id: 'coconut', name: 'Coconut', telugu: 'కొబ్బరికాయ (Coconut)', category: 'pantry-essentials', emoji: '🥥', defaultUnit: 'pieces', image: 'https://4.imimg.com/data4/YW/RF/MY-9925084/raw-coconut-shell-500x500.jpg' },
  { id: 'soaps', name: 'Soaps (Cinthol/Dettol/Hammam)', telugu: 'సబ్బులు (Saops)', category: 'household-toiletries', emoji: '🧼', defaultUnit: 'pieces', image: 'https://martoo.com/wp-content/uploads/2026/01/Cinthol-Herbal-Bar-Soap-125g-72-pcs-x-125g-768x768.jpg' },
  { id: 'dish-wash', name: 'Vim Bar (Dish Wash)', telugu: 'గిన్నెల సబ్బు (Vim Bar)', category: 'household-toiletries', emoji: '🧽', defaultUnit: 'pieces', image: 'https://img500.exportersindia.com/product_images/bc-500/2023/11/8738143/vim-bar-dishwashing-soap-1669798493-6649375.jpg' },
  { id: 'dove-shampoo', name: 'Dove Shampoo', telugu: 'డవ్ షాంపూ (Dove Shampoo)', category: 'household-toiletries', emoji: '🧴', defaultUnit: 'pieces', image: 'https://www.pineapplehospitality.net/media/catalog/product/cache/7d6cbed97c2eefa32e645835bb804162/2/1/210726_dove-ihg-us-individual_sh-fop_1_.jpg' },
  { id: 'match-box', name: 'Match Box', telugu: 'అగ్గిపెట్టె (Match Box)', category: 'household-toiletries', emoji: '🔥', defaultUnit: 'packets', image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/NP/EC/IO/35806921/aim-safety-match-box-1000x1000.jpeg' },
  { id: 'idli-ravva', name: 'Idli Rava (Idli Ravva)', telugu: 'ఇడ్లీ రవ్వ (Idli Ravva)', category: 'lentils-grains', emoji: '🍚', defaultUnit: 'kg', image: 'https://thedesifood.com/media/MTR%20Original%20Rava%20Idli%20Ready%20Mix,%20500%20g-1.webp' },
  { id: 'bansi-ravva', name: 'Bansi Rava (Bansi Ravva)', telugu: 'బన్సీ రవ్వ (Bansi Ravva)', category: 'lentils-grains', emoji: '🌾', defaultUnit: 'kg', image: 'https://www.bigbasket.com/media/uploads/p/xl/40293255_1-aashirvaad-bansi-rava-made-from-durum-wheat.jpg' },
  { id: 'bombai-ravva', name: 'Bombay Rava (Bombai Ravva)', telugu: 'బొంబాయి రవ్వ (Bombai Ravva)', category: 'lentils-grains', emoji: '🌾', defaultUnit: 'kg', image: 'http://newindiansupermarket.com/cdn/shop/files/REDDY_SSOOJIBOMBAYRAVA2LB.png?crop=center&height=1200&v=1749536593&width=1200' },
  { id: 'maidha', name: 'Maida (Maidha)', telugu: 'మైదా పిండి (Maidha)', category: 'lentils-grains', emoji: '🍚', defaultUnit: 'kg', image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/TV/XW/HL/162481078/maida-refined-wheat-flour-1000x1000.jpeg' },
  { id: 'corn-flour-podi', name: 'Corn Flour Powder', telugu: 'మొక్కజొన్న పిండి (Corn Flour)', category: 'lentils-grains', emoji: '🌽', defaultUnit: 'kg', image: 'https://cpimg.tistatic.com/08334825/b/4/1kg-Corn-Flour-Starch-Powder.jpg' },
  { id: 'tamarind', name: 'Tamarind', telugu: 'చింతపండు (Tamarind)', category: 'spices-baking', emoji: '🪵', defaultUnit: 'kg', image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/TR/IF/WL/144334780/tamarindus-tamarind-candy-500x500.jpeg' },
  { id: 'cooking-oil', name: 'Cooking Oil', telugu: 'వంట నూనె (Cooking Oil)', category: 'oils-liquids', emoji: '🛢️', defaultUnit: 'liters', image: 'https://www.catchnpack.pk/wp-content/uploads/2023/10/Untitled-design-19.png' },
  { id: 'detergent', name: 'Detergent Soap/Powder', telugu: 'బట్టల సబ్బు/పొడి (Detergent)', category: 'household-toiletries', emoji: '🧺', defaultUnit: 'kg', image: 'https://driftbasket.com/wp-content/uploads/2018/10/Surf-Excel-Bar-250Gm.jpg' },
  { id: 'comfort', name: 'Comfort Fabric Conditioner', telugu: 'కంఫర్ట్ (Comfort)', category: 'household-toiletries', emoji: '🧴', defaultUnit: 'bottle', image: 'https://newassets.apollo247.com/pub/media/catalog/product/c/o/com0243.jpg' },
  { id: 'coconut-oil', name: 'Coconut Oil', telugu: 'కొబ్బరి నూనె (Coconut Oil)', category: 'oils-liquids', emoji: '🥥', defaultUnit: 'ml', image: 'https://www.jkasianfoods.com/wp-content/uploads/2025/09/PARACHUTE-BOTTLE-500.webp' },
  { id: 'colgate-paste', name: 'Colgate Toothpaste', telugu: 'కోల్‌గేట్ పేస్ట్ (Colgate)', category: 'household-toiletries', emoji: '🪥', defaultUnit: 'pieces', image: 'https://images.apollo247.in/pub/media/catalog/product/c/o/col0037_1.jpg' },
  { id: 'tea-powder', name: 'Tea Powder', telugu: 'టీ పొడి (Tea Powder)', category: 'pantry-essentials', emoji: '🍵', defaultUnit: 'kg', image: 'https://5.imimg.com/data5/ZX/AT/AN/SELLER-51554872/tea-powder-500x500.jpg' },
  { id: 'coffee-powder', name: 'Coffee Powder', telugu: 'కాఫీ పొడి (Coffee Powder)', category: 'pantry-essentials', emoji: '☕', defaultUnit: 'kg', image: 'https://5.imimg.com/data5/SELLER/Default/2025/11/558229990/WB/EI/OT/118716582/5-5-gm-bru-instant-coffee-powder-1000x1000.png' },
  { id: 'pepper', name: 'Black Pepper (Pepper)', telugu: 'మిరియాలు (Pepper)', category: 'spices-baking', emoji: '⚫', defaultUnit: 'grams', image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/340171266/MO/AR/NK/186898623/whole-black-pepper-seeds-500x500.jpg' },
  { id: 'cumin', name: 'Cumin Seeds (Cumin)', telugu: 'జీలకర్ర (Cumin)', category: 'spices-baking', emoji: '🌱', defaultUnit: 'grams', image: 'https://www.jiomart.com/images/product/600x600/rvh1wodanj/minar-100-natural-cumin-seeds-jeera-1kg-pack-of-1-product-images-orvh1wodanj-p594065057-1-202209251553.jpg' },
  { id: 'mentulu', name: 'Fenugreek (Mentulu)', telugu: 'మెంతులు (Mentulu)', category: 'spices-baking', emoji: '🌱', defaultUnit: 'grams', image: 'https://www.jiomart.com/images/product/600x600/rvqvxxgxin/trinetra-best-quality-dana-methi-250gm-pack-of-1-fenugreek-seed-250-g-product-images-orvqvxxgxin-p591372104-0-202205170257.jpg' },
  { id: 'soda-podi', name: 'Cooking Soda (Soda Podi)', telugu: 'సోడా పొడి / వంట సోడా', category: 'spices-baking', emoji: '🍚', defaultUnit: 'grams', image: 'https://m.media-amazon.com/images/I/51NWCzWc56L._SX300_SY300_QL70_ML2_.jpg' },
  { id: 'cashew-nut', name: 'Cashew Nuts (Cashew)', telugu: 'జీడిపప్పు (Cashew Nut)', category: 'nuts-seeds', emoji: '🥜', defaultUnit: 'grams', image: 'https://www.top-op.com/graphics_cache/0/9/1803-j958c-1-3-500.jpg' },
  { id: 'dry-grapes', name: 'Raisins (Dry Grapes)', telugu: 'ఎండు ద్రాక్ష (Dry Grapes)', category: 'nuts-seeds', emoji: '🍇', defaultUnit: 'grams', image: 'https://raisinoz.com/wp-content/uploads/2024/06/Raisins_FM_with_img.png' },
  { id: 'almonds', name: 'Almonds (Almonds)', telugu: 'బాదం పప్పు (Almonds)', category: 'nuts-seeds', emoji: '🥜', defaultUnit: 'grams', image: 'https://www.jiomart.com/images/product/600x600/rvepupfscu/pink-delight-california-almonds-badam-1-kg-pack-product-images-orvepupfscu-p594243010-0-202210032148.jpg' },
  { id: 'pumpkin-seeds', name: 'Pumpkin Seeds', telugu: 'గుమ్మడి గింజలు (Pumpkin Seeds)', category: 'nuts-seeds', emoji: '🎃', defaultUnit: 'grams', image: 'https://www.onceuponapumpkinrd.com/wp-content/uploads/2019/09/pumpkin-seeds.jpg' },
  { id: 'raati-puvva', name: 'Stone Flower (Raati Puvva)', telugu: 'రాతి పువ్వు / రాతి పూవ్వ', category: 'spices-baking', emoji: '🍂', defaultUnit: 'grams', image: 'https://www.jiomart.com/images/product/600x600/rvhjle8uwe/oree-stone-flower-dagad-phool-kalpasi-patthar-ke-phool-indian-stone-flower-spice-50-gm-product-images-orvhjle8uwe-p591742891-1-202205310051.jpg' },
  { id: 'chekka', name: 'Cinnamon (Chekka)', telugu: 'చెక్క / దాల్చిన చెక్క', category: 'spices-baking', emoji: '🪵', defaultUnit: 'grams', image: 'https://m.media-amazon.com/images/I/71SQhdravTL._SL1500_.jpg' },
  { id: 'magga', name: 'Cloves (Magga)', telugu: 'మొగ్గ / లవంగాలు (Magga)', category: 'spices-baking', emoji: '🪡', defaultUnit: 'grams', image: 'https://n4.sdlcdn.com/imgs/g/d/q/Sgreat-Spice-Lavang-Cloves-Premium-SDL148571826-3-acafd.jpg' },
  { id: 'gasa-gasalu', name: 'Poppy Seeds (Gasa Gasalu)', telugu: 'గసగసాలు (Gasa Gasalu)', category: 'spices-baking', emoji: '🌱', defaultUnit: 'grams', image: 'https://i.ytimg.com/vi/JFco-TClv-c/maxresdefault.jpg' },
  { id: 'waamu', name: 'Ajwain (Waamu)', telugu: 'వాము (Waamu)', category: 'spices-baking', emoji: '🌱', defaultUnit: 'grams', image: 'https://d36v5spmfzyapc.cloudfront.net/wp-content/uploads/2020/02/ajwain-848x424.png' },
  { id: 'wheat-flour', name: 'Wheat Flour (Godhuma)', telugu: 'గోధుమ పిండి (Wheat Flour)', category: 'lentils-grains', emoji: '🌾', defaultUnit: 'kg', image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/333252322/VL/XF/FL/194242257/aashirvaad-wheat-flour-500x500.jpg' },
  { id: 'atukulu', name: 'Poha (Atukulu)', telugu: 'అటుకులు (Atukulu)', category: 'lentils-grains', emoji: '🌾', defaultUnit: 'kg', image: 'https://images-na.ssl-images-amazon.com/images/I/7101KHu7hHL._SX679_.jpg' },
  { id: 'pista', name: 'Pistachios (Pista)', telugu: 'పిస్తా పప్పు (Pista)', category: 'nuts-seeds', emoji: '🥜', defaultUnit: 'grams', image: 'https://img.drz.lazcdn.com/static/np/p/8541c71ab5b22d2772776fc6ce903fa4.jpg_720x720q80.jpg' },
  { id: 'baking-soda', name: 'Baking Soda', telugu: 'బేకింగ్ సోడా (Baking Soda)', category: 'spices-baking', emoji: '🍚', defaultUnit: 'grams', image: 'https://rukminim2.flixcart.com/image/416/416/kqqykcw0/baking-ingredient/r/x/r/400-best-quality-baking-soda-200-gm-each-pack-of-2-baking-soda-original-imag4zyavzcehyv6.jpeg?q=70&crop=false' },
  { id: 'sabja-seeds', name: 'Basil Seeds (Sabja)', telugu: 'సబ్జా గింజలు (Sabja Seeds)', category: 'nuts-seeds', emoji: '🥤', defaultUnit: 'grams', image: 'https://rukminim2.flixcart.com/image/832/832/l4fxh8w0/edible-seed/p/e/5/260-sabja-seeds-1-raw-plastic-bottle-frukat-whole-original-imagfbjegzhj4ct9.jpeg?q=70&crop=false' },
  { id: 'tooth-brush', name: 'Toothbrush', telugu: 'టూత్ బ్రష్ (Tooth Brush)', category: 'household-toiletries', emoji: '🪥', defaultUnit: 'pieces', image: 'https://i5.walmartimages.com/seo/Oral-B-Advanced-Clean-Toothbrushes-Color-Changing-Bristles-Soft-6-Count-for-Adults-Children-3_732af47b-a278-4b3d-bde9-f7295f62a9e2.cead0232d4ff19c886f325ca538a722c.png' },
  { id: 'tooth-picks', name: 'Toothpicks', telugu: 'టూత్ పిక్స్ (Tooth Picks)', category: 'household-toiletries', emoji: '🥢', defaultUnit: 'packets', image: 'https://m.media-amazon.com/images/I/81I8qaQtO5L._AC_.jpg' },
  { id: 'face-powder', name: 'Ponds Face Powder', telugu: 'ఫేస్ పౌడర్ (Ponds)', category: 'household-toiletries', emoji: '🧴', defaultUnit: 'pieces', image: 'https://newassets.apollo247.com/pub/media/catalog/product/p/o/pon0051_2.jpg' },
  { id: 'sabeena-powder', name: 'Sabeena Powder', telugu: 'సబీనా పౌడర్ (Sabeena)', category: 'household-toiletries', emoji: '🧼', defaultUnit: 'packets', image: 'https://www.bbassets.com/media/uploads/p/l/100286988_3-sabena-cleaning-powder.jpg' },
  { id: 'garam-masala', name: 'Garam Masala Powder', telugu: 'గరం మసాలా (Garam Masala)', category: 'spices-baking', emoji: '🌶️', defaultUnit: 'packets', image: 'https://5.imimg.com/data5/ANDROID/Default/2022/2/XD/LT/WI/104007965/img-20211207-wa0003-jpg-1000x1000.jpg' },
  { id: 'aavalu', name: 'Mustard Seeds (Aavalu)', telugu: 'ఆవాలు (Aavalu)', category: 'spices-baking', emoji: '⚫', defaultUnit: 'grams', image: 'https://ricedesk.com/product-images/Mustard-Seeds-Small.jpg/788104000002905349/700x700' }
];

// Clean Telugu names in initialItems to keep only the first name (before the slash)
initialItems.forEach(item => {
  if (item.telugu && item.telugu.includes('/')) {
    item.telugu = item.telugu.split('/')[0].trim();
  }
});

const categories = [
  { id: 'all', name: 'All', emoji: '✨' },
  { id: 'lentils-grains', name: 'Lentils & Grains', emoji: '🌾' },
  { id: 'spices-baking', name: 'Spices & Herbs', emoji: '🧂' },
  { id: 'nuts-seeds', name: 'Nuts & Seeds', emoji: '🥜' },
  { id: 'household-toiletries', name: 'Household', emoji: '🧴' },
  { id: 'oils-liquids', name: 'Oils & Liquids', emoji: '🛢️' },
  { id: 'pantry-essentials', name: 'Essentials', emoji: '🍵' },
  { id: 'custom', name: 'Custom Added', emoji: '➕' }
];

// ========================================================================
//   STATE MANAGEMENT
// ========================================================================
let dbItems = [...initialItems];
let cart = {}; // maps item.id -> { qty: Number, unit: String }
let activeCategory = 'all';
let searchTerm = '';
let currentFontScale = 1.0;

// Load data from LocalStorage
function loadState() {
  const savedCart = localStorage.getItem('pantry_cart');
  const savedCustomItems = localStorage.getItem('pantry_custom_items');
  const savedTheme = localStorage.getItem('pantry_theme') || 'light';
  const savedFontScale = localStorage.getItem('pantry_font_scale') || '1.0';
  
  currentFontScale = parseFloat(savedFontScale);
  document.documentElement.style.setProperty('--font-scale', currentFontScale);
  
  if (savedCart) {
    try { cart = JSON.parse(savedCart); } catch (e) { cart = {}; }
  }
  if (savedCustomItems) {
    try {
      const customItems = JSON.parse(savedCustomItems);
      // Clean custom items as well
      customItems.forEach(item => {
        if (item.telugu && item.telugu.includes('/')) {
          item.telugu = item.telugu.split('/')[0].trim();
        }
      });
      dbItems = [...initialItems, ...customItems];
    } catch (e) {
      dbItems = [...initialItems];
    }
  }
  
  document.documentElement.setAttribute('data-theme', savedTheme);
  const themeBtnIcon = document.querySelector('#theme-toggle-btn i');
  if (savedTheme === 'dark') {
    themeBtnIcon.className = 'fa-solid fa-sun';
  } else {
    themeBtnIcon.className = 'fa-solid fa-moon';
  }
}

// Save state to LocalStorage
function saveState() {
  localStorage.setItem('pantry_cart', JSON.stringify(cart));
  localStorage.setItem('pantry_font_scale', currentFontScale.toString());
  const customItems = dbItems.filter(item => item.isCustom);
  localStorage.setItem('pantry_custom_items', JSON.stringify(customItems));
}

// ========================================================================
//   DYNAMIC UNIT PRESETS HELPER
// ========================================================================
function getPresetsForUnit(unit) {
  switch (unit) {
    case 'kg':
      return [
        { label: '250g', value: 0.25 },
        { label: '500g', value: 0.5 },
        { label: '1 kg', value: 1 },
        { label: '2 kg', value: 2 },
        { label: '5 kg', value: 5 }
      ];
    case 'grams':
      return [
        { label: '50g', value: 50 },
        { label: '100g', value: 100 },
        { label: '250g', value: 250 },
        { label: '500g', value: 500 }
      ];
    case 'liters':
      return [
        { label: '1 L', value: 1 },
        { label: '2 L', value: 2 },
        { label: '5 L', value: 5 }
      ];
    case 'ml':
      return [
        { label: '100ml', value: 100 },
        { label: '250ml', value: 250 },
        { label: '500ml', value: 500 }
      ];
    case 'pieces':
      return [
        { label: '1 pc', value: 1 },
        { label: '2 pcs', value: 2 },
        { label: '3 pcs', value: 3 },
        { label: '5 pcs', value: 5 },
        { label: '10 pcs', value: 10 }
      ];
    case 'packets':
      return [
        { label: '1 pkt', value: 1 },
        { label: '2 pkts', value: 2 },
        { label: '3 pkts', value: 3 },
        { label: '5 pkts', value: 5 }
      ];
    case 'bottle':
      return [
        { label: '1 btl', value: 1 },
        { label: '2 btls', value: 2 }
      ];
    default:
      return [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '5', value: 5 }
      ];
  }
}

// Available units depending on item defaults
function getUnitsForDefault(defaultUnit) {
  if (['kg', 'grams'].includes(defaultUnit)) {
    return ['kg', 'grams', 'packets', 'pieces'];
  }
  if (['liters', 'ml', 'bottle'].includes(defaultUnit)) {
    return ['liters', 'ml', 'bottle', 'pieces'];
  }
  return ['pieces', 'packets', 'kg', 'grams'];
}

// ========================================================================
//   DOM ELEMENTS & EVENT ATTACHMENTS
// ========================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initCategories();
  renderProducts();
  updateCartUI();
  setupEventListeners();
  setupFontScaleControls();
});

// Render Category Tabs
function initCategories() {
  const container = document.getElementById('categories-container');
  container.innerHTML = '';
  
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `category-tab ${activeCategory === cat.id ? 'active' : ''}`;
    btn.dataset.category = cat.id;
    btn.innerHTML = `<span class="cat-emoji">${cat.emoji}</span> <span class="cat-name">${cat.name}</span>`;
    
    btn.addEventListener('click', () => {
      document.querySelectorAll('.category-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = cat.id;
      
      // Update Category Title
      const titleLabel = cat.id === 'all' ? 'All Items' : cat.name;
      document.getElementById('current-category-title').innerText = titleLabel;
      
      renderProducts();
    });
    
    container.appendChild(btn);
  });
}

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById('products-grid');
  const emptyState = document.getElementById('empty-state');
  grid.innerHTML = '';
  
  // Filter products based on search term & category
  const filtered = dbItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || 
                            (activeCategory === 'custom' && item.isCustom) ||
                            item.category === activeCategory;
                            
    const cleanSearch = searchTerm.toLowerCase().trim();
    const matchesSearch = item.name.toLowerCase().includes(cleanSearch) || 
                          item.telugu.toLowerCase().includes(cleanSearch) ||
                          item.id.toLowerCase().includes(cleanSearch);
                          
    return matchesCategory && matchesSearch;
  });
  
  // Update badge count
  document.getElementById('items-count-badge').innerText = `${filtered.length} item${filtered.length === 1 ? '' : 's'}`;
  
  if (filtered.length === 0) {
    grid.classList.add('hidden');
    emptyState.classList.remove('hidden');
    return;
  }
  
  grid.classList.remove('hidden');
  emptyState.classList.add('hidden');
  
  filtered.forEach(item => {
    const isSelected = cart[item.id] !== undefined;
    const card = document.createElement('div');
    card.className = `product-card ${isSelected ? 'selected' : ''}`;
    card.dataset.id = item.id;
    
    // Get current unit & qty or default values
    const currentUnit = isSelected ? cart[item.id].unit : item.defaultUnit;
    const currentQty = isSelected ? cart[item.id].qty : 0;
    
    // Generate units select dropdown HTML
    const availableUnits = getUnitsForDefault(item.defaultUnit);
    let optionsHtml = '';
    availableUnits.forEach(u => {
      optionsHtml += `<option value="${u}" ${currentUnit === u ? 'selected' : ''}>${u}</option>`;
    });
    
    // Generate Presets HTML
    const presets = getPresetsForUnit(currentUnit);
    let presetsHtml = '';
    presets.forEach(p => {
      presetsHtml += `<button class="preset-badge" data-value="${p.value}">${p.label}</button>`;
    });
    
    card.innerHTML = `
      <div class="product-card-badge"><i class="fa-solid fa-check"></i></div>
      <div class="card-main-row">
        <div class="product-image-container">
          <img src="${item.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=300&h=300&q=80'}" alt="${item.name}" class="product-image" loading="lazy">
          <div class="product-category-badge">${item.emoji}</div>
        </div>
        <div class="product-info">
          <span class="product-telugu-name">${item.telugu}</span>
          <span class="product-english-name">${item.name}</span>
        </div>
        
        <div class="card-controls">
          ${!isSelected ? `
            <button class="add-initial-btn">
              <i class="fa-solid fa-plus"></i> Add
            </button>
          ` : `
            <div class="quantity-control">
              <button class="qty-btn dec-btn" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
              <span class="qty-value">${currentQty}</span>
              <button class="qty-btn inc-btn" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
            </div>
            
            <select class="unit-select" aria-label="Select Unit">
              ${optionsHtml}
            </select>
          `}
        </div>
      </div>
      ${isSelected ? `
        <div class="card-presets">
          ${presetsHtml}
        </div>
      ` : ''}
    `;
    
    // Initial Add button event listener
    const addInitialBtn = card.querySelector('.add-initial-btn');
    if (addInitialBtn) {
      addInitialBtn.addEventListener('click', () => {
        // Set default quantity as 1 (or 0.5 for kg/liters)
        const defQty = ['kg', 'liters'].includes(item.defaultUnit) ? 1 : 1;
        updateCartItem(item.id, defQty, item.defaultUnit);
        showToast(`Added ${item.name}`);
      });
    } else {
      // Setup control events for active card
      const decBtn = card.querySelector('.dec-btn');
      const incBtn = card.querySelector('.inc-btn');
      const unitSelect = card.querySelector('.unit-select');
      const presetButtons = card.querySelectorAll('.preset-badge');
      
      decBtn.addEventListener('click', () => {
        let step = ['kg', 'liters'].includes(currentUnit) ? 0.25 : 1;
        let newQty = currentQty - step;
        if (newQty <= 0) {
          removeCartItem(item.id);
          showToast(`Removed ${item.name}`);
        } else {
          // Fix JavaScript float accuracy issues
          newQty = Math.round(newQty * 100) / 100;
          updateCartItem(item.id, newQty, currentUnit);
        }
      });
      
      incBtn.addEventListener('click', () => {
        let step = ['kg', 'liters'].includes(currentUnit) ? 0.25 : 1;
        let newQty = currentQty + step;
        newQty = Math.round(newQty * 100) / 100;
        updateCartItem(item.id, newQty, currentUnit);
      });
      
      unitSelect.addEventListener('change', (e) => {
        const newUnit = e.target.value;
        // Keep current quantity, just change unit and refresh card to update presets
        updateCartItem(item.id, currentQty, newUnit);
      });
      
      presetButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const val = parseFloat(btn.dataset.value);
          updateCartItem(item.id, val, currentUnit);
          showToast(`${item.name} set to ${val} ${currentUnit}`);
        });
      });
    }
    
    grid.appendChild(card);
  });
}

// ========================================================================
//   CART LOGIC & UPDATING STATE
// ========================================================================
function updateCartItem(itemId, qty, unit) {
  cart[itemId] = { qty, unit };
  saveState();
  updateCartUI();
  
  // Re-render only modified card to save DOM cycles and prevent resetting focus/scroll
  const card = document.querySelector(`.product-card[data-id="${itemId}"]`);
  if (card) {
    renderCardInPlace(card, itemId);
  }
}

function removeCartItem(itemId) {
  delete cart[itemId];
  saveState();
  updateCartUI();
  
  const card = document.querySelector(`.product-card[data-id="${itemId}"]`);
  if (card) {
    renderCardInPlace(card, itemId);
  }
}

// Re-renders a single card's interior to prevent redraw lag
function renderCardInPlace(card, itemId) {
  const item = dbItems.find(i => i.id === itemId);
  if (!item) return;
  
  const isSelected = cart[item.id] !== undefined;
  
  if (isSelected) {
    card.classList.add('selected');
  } else {
    card.classList.remove('selected');
  }
  
  const currentUnit = isSelected ? cart[item.id].unit : item.defaultUnit;
  const currentQty = isSelected ? cart[item.id].qty : 0;
  
  const availableUnits = getUnitsForDefault(item.defaultUnit);
  let optionsHtml = '';
  availableUnits.forEach(u => {
    optionsHtml += `<option value="${u}" ${currentUnit === u ? 'selected' : ''}>${u}</option>`;
  });
  
  const presets = getPresetsForUnit(currentUnit);
  let presetsHtml = '';
  presets.forEach(p => {
    presetsHtml += `<button class="preset-badge" data-value="${p.value}">${p.label}</button>`;
  });
  
  card.innerHTML = `
    <div class="product-card-badge"><i class="fa-solid fa-check"></i></div>
    <div class="card-main-row">
      <div class="product-image-container">
        <img src="${item.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=300&h=300&q=80'}" alt="${item.name}" class="product-image" loading="lazy">
        <div class="product-category-badge">${item.emoji}</div>
      </div>
      <div class="product-info">
        <span class="product-telugu-name">${item.telugu}</span>
        <span class="product-english-name">${item.name}</span>
      </div>
      
      <div class="card-controls">
        ${!isSelected ? `
          <button class="add-initial-btn">
            <i class="fa-solid fa-plus"></i> Add
          </button>
        ` : `
          <div class="quantity-control">
            <button class="qty-btn dec-btn" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
            <span class="qty-value">${currentQty}</span>
            <button class="qty-btn inc-btn" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
          </div>
          
          <select class="unit-select" aria-label="Select Unit">
            ${optionsHtml}
          </select>
        `}
      </div>
    </div>
    ${isSelected ? `
      <div class="card-presets">
        ${presetsHtml}
      </div>
    ` : ''}
  `;
  
  // Hook up active state events
  if (!isSelected) {
    const addInitialBtn = card.querySelector('.add-initial-btn');
    addInitialBtn.addEventListener('click', () => {
      updateCartItem(item.id, 1, item.defaultUnit);
      showToast(`Added ${item.name}`);
    });
  } else {
    const decBtn = card.querySelector('.dec-btn');
    const incBtn = card.querySelector('.inc-btn');
    const unitSelect = card.querySelector('.unit-select');
    const presetButtons = card.querySelectorAll('.preset-badge');
    
    decBtn.addEventListener('click', () => {
      let step = ['kg', 'liters'].includes(currentUnit) ? 0.25 : 1;
      let newQty = currentQty - step;
      if (newQty <= 0) {
        removeCartItem(item.id);
        showToast(`Removed ${item.name}`);
      } else {
        newQty = Math.round(newQty * 100) / 100;
        updateCartItem(item.id, newQty, currentUnit);
      }
    });
    
    incBtn.addEventListener('click', () => {
      let step = ['kg', 'liters'].includes(currentUnit) ? 0.25 : 1;
      let newQty = currentQty + step;
      newQty = Math.round(newQty * 100) / 100;
      updateCartItem(item.id, newQty, currentUnit);
    });
    
    unitSelect.addEventListener('change', (e) => {
      updateCartItem(item.id, currentQty, e.target.value);
    });
    
    presetButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const val = parseFloat(btn.dataset.value);
        updateCartItem(item.id, val, currentUnit);
        showToast(`${item.name} set to ${val} ${currentUnit}`);
      });
    });
  }
}

// Update Cart Bottom Bar and Drawer Content
function updateCartUI() {
  const keys = Object.keys(cart);
  const totalCount = keys.length;
  
  // Update floating FAB bar visibility
  const cartBar = document.getElementById('cart-bar');
  const badgeCount = document.getElementById('cart-badge-count');
  const barPreview = document.getElementById('cart-bar-preview');
  
  if (totalCount > 0) {
    cartBar.classList.remove('hidden');
    badgeCount.innerText = totalCount;
    
    // Create preview names list
    const previewNames = keys.map(k => {
      const item = dbItems.find(i => i.id === k);
      return item ? item.telugu.split(' ')[0] : '';
    }).filter(n => n !== '').join(', ');
    barPreview.innerText = previewNames;
  } else {
    cartBar.classList.add('hidden');
  }
  
  // Update Drawer counter
  document.getElementById('drawer-items-count').innerText = `${totalCount} item${totalCount === 1 ? '' : 's'} selected`;
  
  // Render Drawer List Rows
  const drawerList = document.getElementById('drawer-items-list');
  drawerList.innerHTML = '';
  
  if (totalCount === 0) {
    drawerList.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🛒</div>
        <p style="color: var(--text-secondary);">Your shopping list is empty.</p>
      </div>
    `;
    return;
  }
  
  keys.forEach(k => {
    const item = dbItems.find(i => i.id === k);
    if (!item) return;
    
    const qty = cart[k].qty;
    const unit = cart[k].unit;
    
    const row = document.createElement('div');
    row.className = 'drawer-item-row';
    row.innerHTML = `
      <div class="drawer-item-name-block">
        <span class="drawer-item-title">${item.telugu}</span>
        <span class="drawer-item-sub">${item.name}</span>
      </div>
      <div class="drawer-item-actions">
        <span class="drawer-qty-pill">${qty} ${unit}</span>
        <button class="remove-item-btn" title="Remove item" aria-label="Remove item"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    `;
    
    row.querySelector('.remove-item-btn').addEventListener('click', () => {
      removeCartItem(k);
      showToast(`Removed ${item.name}`);
    });
    
    drawerList.appendChild(row);
  });
}

// ========================================================================
//   EVENT LISTENERS SETUP
// ========================================================================
function setupEventListeners() {
  // Theme Toggle logic
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('pantry_theme', newTheme);
    
    const icon = themeToggleBtn.querySelector('i');
    icon.className = newTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  });

  // Search logic
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  
  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    if (searchTerm.length > 0) {
      clearSearchBtn.classList.remove('clear-search-hidden');
    } else {
      clearSearchBtn.classList.add('clear-search-hidden');
    }
    renderProducts();
  });
  
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchTerm = '';
    clearSearchBtn.classList.add('clear-search-hidden');
    renderProducts();
  });

  // Open/Close Drawer Logic
  const cartBarTrigger = document.getElementById('cart-bar-trigger');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const drawerOverlay = document.getElementById('cart-drawer-overlay');
  const drawer = document.getElementById('cart-drawer');
  
  function openDrawer() {
    drawerOverlay.classList.remove('hidden');
    drawer.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  }
  
  function closeDrawer() {
    drawerOverlay.classList.add('hidden');
    drawer.classList.add('hidden');
    document.body.style.overflow = '';
  }
  
  cartBarTrigger.addEventListener('click', openDrawer);
  closeDrawerBtn.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);

  // Toggle Custom Item Form Accordion
  const toggleFormBtn = document.getElementById('toggle-custom-form-btn');
  const customForm = document.getElementById('custom-item-form');
  toggleFormBtn.addEventListener('click', () => {
    toggleFormBtn.classList.toggle('active');
    customForm.classList.toggle('collapsed');
  });

  // Handle Custom Item Submit
  const customFormEl = document.getElementById('custom-item-form');
  customFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('custom-name');
    const categorySelect = document.getElementById('custom-category');
    const unitSelect = document.getElementById('custom-unit');
    
    const nameText = nameInput.value.trim();
    if (!nameText) return;
    
    // Create new custom item object
    const newId = `custom-${Date.now()}`;
    const newItem = {
      id: newId,
      name: nameText,
      telugu: nameText, // Map bilingual name directly
      category: categorySelect.value,
      emoji: '➕',
      defaultUnit: unitSelect.value,
      isCustom: true
    };
    
    // Add to items list, save to localStorage
    dbItems.push(newItem);
    saveState();
    
    // Pre-select it in the cart with quantity 1
    updateCartItem(newId, 1, unitSelect.value);
    
    // Clear and collapse form
    nameInput.value = '';
    toggleFormBtn.classList.remove('active');
    customForm.classList.add('collapsed');
    
    // Show toast and refresh list
    showToast(`Added custom item: ${nameText}`);
    initCategories();
    renderProducts();
    
    // Auto-scroll to the bottom of drawer to see the new item
    const drawerBody = document.querySelector('.drawer-body');
    setTimeout(() => {
      drawerBody.scrollTop = drawerBody.scrollHeight;
    }, 100);
  });

  // Clear All Items Button
  const clearAllBtn = document.getElementById('clear-all-btn');
  clearAllBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear your shopping list?')) {
      cart = {};
      saveState();
      updateCartUI();
      renderProducts();
      closeDrawer();
      showToast('Cleared list');
    }
  });
  
  // Empty State Add Custom Button
  const emptyAddBtn = document.getElementById('empty-add-custom-btn');
  emptyAddBtn.addEventListener('click', () => {
    openDrawer();
    toggleFormBtn.classList.add('active');
    customForm.classList.remove('collapsed');
    document.getElementById('custom-name').focus();
  });

  // ========================================================================
  //   RECEIPT GENERATOR & SCREENSHOT LOGIC
  // ========================================================================
  const generateListBtn = document.getElementById('generate-list-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalOverlay = document.getElementById('receipt-modal-overlay');
  const modal = document.getElementById('receipt-modal');
  
  function openModal() {
    closeDrawer();
    modalOverlay.classList.remove('hidden');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    buildReceiptContent();
  }
  
  function closeModal() {
    modalOverlay.classList.add('hidden');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
  
  generateListBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);
  
  // Download Image capture
  const downloadBtn = document.getElementById('btn-download-image');
  downloadBtn.addEventListener('click', () => {
    const targetElement = document.getElementById('receipt-capture-area');
    
    downloadBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saving...';
    downloadBtn.disabled = true;
    
    // Settings to optimize screenshot image rendering
    html2canvas(targetElement, {
      scale: 3, // Premium ultra-crisp screenshot rendering quality
      backgroundColor: '#FFFFFF',
      logging: false,
      useCORS: true
    }).then(canvas => {
      const imageURL = canvas.toDataURL('image/png');
      const dateString = new Date().toLocaleDateString('en-IN').replace(/\//g, '-');
      
      const link = document.createElement('a');
      link.href = imageURL;
      link.download = `Ammas-Grocery-List-${dateString}.png`;
      link.click();
      
      downloadBtn.innerHTML = '<i class="fa-solid fa-image"></i> <span>Save Image (గ్యాలరీలో సేవ్ చేయి)</span>';
      downloadBtn.disabled = false;
      showToast('Image saved to gallery!');
    }).catch(err => {
      console.error('Screenshot generation failed:', err);
      downloadBtn.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Error';
      downloadBtn.disabled = false;
      showToast('Failed to save image. Try manual screenshot!');
    });
  });
  
  // Send via WhatsApp Text Formatter
  const whatsappBtn = document.getElementById('btn-whatsapp-share');
  whatsappBtn.addEventListener('click', () => {
    const keys = Object.keys(cart);
    if (keys.length === 0) return;
    
    const formattedDate = new Date().toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
    
    let text = `🛒 *ఆమ్మాస్ కిరాణా లిస్ట్ | Mom's Grocery List*\n`;
    text += `📅 తేదీ (Date): ${formattedDate}\n`;
    text += `---------------------------------\n\n`;
    
    keys.forEach((key, index) => {
      const item = dbItems.find(i => i.id === key);
      if (item) {
        text += `⬜  *${index + 1}. ${item.telugu}* (${item.name})\n`;
        text += `      👉 *పరిమాణం (Qty):* ${cart[key].qty} ${cart[key].unit}\n\n`;
      }
    });
    
    // Add custom instructions if any
    const instructions = document.getElementById('shopkeeper-instructions').value.trim();
    if (instructions) {
      text += `---------------------------------\n`;
      text += `📝 *గమనిక (Special Instructions):*\n_${instructions}_\n`;
    }
    
    text += `\n---------------------------------\n`;
    text += `🙏 *దయచేసి ఇవన్నీ ప్యాక్ చేసి సిద్ధంగా ఉంచండి.*`;
    
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    showToast('Opening WhatsApp...');
  });
}

// Populate Receipt Details Modal dynamically
function buildReceiptContent() {
  const keys = Object.keys(cart);
  
  // Set Date
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const formattedDate = new Date().toLocaleDateString('en-IN', options);
  document.getElementById('receipt-date').innerText = `Date: ${formattedDate}`;
  
  // Set total count
  document.getElementById('receipt-item-count').innerText = `Total: ${keys.length} Items`;
  
  const tbody = document.getElementById('receipt-items-body');
  tbody.innerHTML = '';
  
  keys.forEach(k => {
    const item = dbItems.find(i => i.id === k);
    if (!item) return;
    
    const qty = cart[k].qty;
    const unit = cart[k].unit;
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="col-check"><i class="fa-regular fa-square"></i></td>
      <td class="col-item">
        <div class="receipt-item-title">${item.telugu}</div>
        <div class="receipt-item-subtitle">${item.name}</div>
      </td>
      <td class="col-qty">${qty} ${unit}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ========================================================================
//   TOAST COMPONENT UTILITY
// ========================================================================
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  
  toastMsg.innerText = message;
  toast.classList.add('show');
  
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// ========================================================================
//   ACCESSIBILITY: FONT SIZE ADJUSTMENT LOGIC
// ========================================================================
function setupFontScaleControls() {
  const fontToggleBtn = document.getElementById('font-toggle-btn');
  const fontPopover = document.getElementById('font-popover');
  const fontOptBtns = document.querySelectorAll('.font-opt-btn');
  
  // Toggle Popover
  fontToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    fontPopover.classList.toggle('hidden');
  });
  
  // Font size selection
  fontOptBtns.forEach(btn => {
    const scaleValue = parseFloat(btn.dataset.scale);
    
    // Set initial active state based on current scale
    if (scaleValue === currentFontScale) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
    
    btn.addEventListener('click', () => {
      currentFontScale = scaleValue;
      saveState();
      
      // Apply scale
      document.documentElement.style.setProperty('--font-scale', currentFontScale);
      
      // Update UI active buttons
      fontOptBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Hide Popover
      fontPopover.classList.add('hidden');
      
      // Show confirmation toast
      const label = btn.querySelector('.font-opt-text').innerText;
      const telugu = btn.querySelector('.font-opt-telugu').innerText;
      showToast(`Font Size: ${label} (${telugu})`);
    });
  });
  
  // Click outside listener to dismiss popover
  document.addEventListener('click', (e) => {
    if (!fontToggleBtn.contains(e.target) && !fontPopover.contains(e.target)) {
      fontPopover.classList.add('hidden');
    }
  });
}
