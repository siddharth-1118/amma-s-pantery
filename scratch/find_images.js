const fs = require('fs');
const path = require('path');

// Search terms specifically tailored for Indian groceries and brands to get exact photos
const itemsToSearch = [
  { id: 'kandi-baalu', query: 'Toor Dal yellow split packet' },
  { id: 'uddi-ballu', query: 'Urad Dal split white packet' },
  { id: 'senaga-ballu', query: 'Chana Dal packet' },
  { id: 'pesaraballu', query: 'Moong Dal split yellow packet' },
  { id: 'chenigithanalu', query: 'Groundnuts peanuts with skin' },
  { id: 'pappulu', query: 'Putnala Pappu roasted gram dalia' },
  { id: 'sugar', query: 'Sugar pack grocery' },
  { id: 'jagree', query: 'Jaggery block bellam' },
  { id: 'rock-salt', query: 'Rock salt crystal package' },
  { id: 'dry-chilies', query: 'Dry red chilies pack' },
  { id: 'coconut', query: 'Whole coconut raw shell' },
  { id: 'soaps', query: 'Cinthol soap bar dettol hammam' },
  { id: 'dish-wash', query: 'Vim bar soap green' },
  { id: 'dove-shampoo', query: 'Dove shampoo bottle' },
  { id: 'match-box', query: 'Match box AIM box' },
  { id: 'idli-ravva', query: 'Idli Rava packet' },
  { id: 'bansi-ravva', query: 'Bansi Rava packet wheat' },
  { id: 'bombai-ravva', query: 'Bombay Rava sooji packet' },
  { id: 'maidha', query: 'Maida flour packet' },
  { id: 'corn-flour-podi', query: 'Corn flour powder pack' },
  { id: 'tamarind', query: 'Tamarind chintapandu packet' },
  { id: 'cooking-oil', query: 'Cooking oil pouch sunflower packet' },
  { id: 'detergent', query: 'Surf excel detergent soap bar' },
  { id: 'comfort', query: 'Comfort fabric conditioner blue bottle' },
  { id: 'coconut-oil', query: 'Parachute coconut oil blue bottle' },
  { id: 'colgate-paste', query: 'Colgate toothpaste red pack' },
  { id: 'tea-powder', query: 'Red label tea powder pack' },
  { id: 'coffee-powder', query: 'Bru coffee powder pack' },
  { id: 'pepper', query: 'Black pepper seeds pack' },
  { id: 'cumin', query: 'Cumin seeds jeera pack' },
  { id: 'mentulu', query: 'Fenugreek seeds methi pack' },
  { id: 'soda-podi', query: 'Cooking soda soda podi pack' },
  { id: 'cashew-nut', query: 'Cashew nuts split pack' },
  { id: 'dry-grapes', query: 'Raisins dry grapes kishmish' },
  { id: 'almonds', query: 'Almonds badam pack' },
  { id: 'pumpkin-seeds', query: 'Pumpkin seeds green' },
  { id: 'raati-puvva', query: 'Stone flower kalpasi spice' },
  { id: 'chekka', query: 'Cinnamon sticks chekka' },
  { id: 'magga', query: 'Cloves lavangalu spice' },
  { id: 'gasa-gasalu', query: 'Poppy seeds gasagasalu' },
  { id: 'waamu', query: 'Ajwain carom seeds waamu' },
  { id: 'wheat-flour', query: 'Aashirvaad wheat flour bag' },
  { id: 'atukulu', query: 'Atukulu poha flattened rice' },
  { id: 'pista', query: 'Pistachios pista nuts' },
  { id: 'baking-soda', query: 'Baking soda powder pack' },
  { id: 'sabja-seeds', query: 'Sabja seeds basil seeds' },
  { id: 'tooth-brush', query: 'Toothbrush oral b pack' },
  { id: 'tooth-picks', query: 'Toothpicks box pack' },
  { id: 'face-powder', query: 'Ponds powder pink bottle' },
  { id: 'sabeena-powder', query: 'Sabeena cleaning powder pack' },
  { id: 'garam-masala', query: 'Garam masala powder packet' },
  { id: 'aavalu', query: 'Mustard seeds black aavalu' }
];

const results = {};

async function getDDGImage(query) {
  try {
    const searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
    const response = await fetch(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
      }
    });
    const html = await response.text();
    
    const vqdMatch = html.match(/vqd=["']([^"']+)["']/i);
    if (!vqdMatch) {
      return null;
    }
    const vqd = vqdMatch[1];
    
    const imagesUrl = `https://duckduckgo.com/i.js?o=json&q=${encodeURIComponent(query)}&vqd=${vqd}&f=,,,`;
    const imagesResponse = await fetch(imagesUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'Referer': 'https://duckduckgo.com/'
      }
    });
    const data = await imagesResponse.json();
    if (data.results && data.results.length > 0) {
      // Return the image URL of the first result
      return data.results[0].image;
    }
    return null;
  } catch (error) {
    console.error(`Error searching for ${query}:`, error.message);
    return null;
  }
}

async function searchAllItems() {
  console.log(`Starting DuckDuckGo Image Search for ${itemsToSearch.length} items...\n`);
  
  for (let i = 0; i < itemsToSearch.length; i++) {
    const item = itemsToSearch[i];
    const query = item.query;
    console.log(`[${i + 1}/${itemsToSearch.length}] Searching: "${query}"...`);
    
    const imageUrl = await getDDGImage(query);
    if (imageUrl) {
      results[item.id] = imageUrl;
      console.log(`✅ Found: ${imageUrl.substring(0, 65)}...`);
    } else {
      console.log(`❌ No image found for: ${item.id}`);
      results[item.id] = null;
    }
    
    // Throttle queries (300ms) to be polite
    await new Promise(resolve => setTimeout(resolve, 300));
  }
  
  const outputPath = path.join(__dirname, 'specific_images.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\n🎉 SUCCESS! Saved all specific image mappings to ${outputPath}`);
  process.exit(0);
}

searchAllItems();
