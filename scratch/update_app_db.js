const fs = require('fs');
const path = require('path');

const specificImagesPath = path.join(__dirname, 'specific_images.json');
const appJsPath = path.join(__dirname, '..', 'app.js');

if (!fs.existsSync(specificImagesPath)) {
  console.error("Error: specific_images.json not found in scratch folder!");
  process.exit(1);
}

const specificImages = JSON.parse(fs.readFileSync(specificImagesPath, 'utf8'));
let appJsContent = fs.readFileSync(appJsPath, 'utf8');

let updateCount = 0;

for (const [id, url] of Object.entries(specificImages)) {
  if (!url) {
    console.log(`⚠️ Skipping ${id} (no image URL found)`);
    continue;
  }
  
  // Regex to match the line containing the item id and replace its image url
  // Match structure: { id: 'kandi-baalu', ... image: 'OLD_URL' }
  const regex = new RegExp(`(\{\\s*id:\\s*'${id}',.*?image:\\s*')[^']+('.*?\})`, 'i');
  
  if (regex.test(appJsContent)) {
    appJsContent = appJsContent.replace(regex, `$1${url}$2`);
    updateCount++;
  } else {
    console.log(`⚠️ Item with id "${id}" not found in app.js or format didn't match`);
  }
}

fs.writeFileSync(appJsPath, appJsContent, 'utf8');
console.log(`\n🎉 SUCCESS! Updated ${updateCount} item images in app.js!`);
process.exit(0);
