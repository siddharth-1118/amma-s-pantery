async function getDDGImage(query) {
  try {
    const searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
    const response = await fetch(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
      }
    });
    const html = await response.text();
    
    // Find vqd token using regex
    const vqdMatch = html.match(/vqd=["']([^"']+)["']/i);
    if (!vqdMatch) {
      console.log(`Could not find VQD for: ${query}`);
      return null;
    }
    const vqd = vqdMatch[1];
    
    // Fetch images JSON
    const imagesUrl = `https://duckduckgo.com/i.js?o=json&q=${encodeURIComponent(query)}&vqd=${vqd}&f=,,,`;
    const imagesResponse = await fetch(imagesUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'Referer': 'https://duckduckgo.com/'
      }
    });
    const data = await imagesResponse.json();
    if (data.results && data.results.length > 0) {
      return data.results[0].image;
    }
    return null;
  } catch (error) {
    console.error(`Error searching for ${query}:`, error.message);
    return null;
  }
}

async function run() {
  const img = await getDDGImage("Vim bar dishwash soap");
  console.log("Found Image URL:", img);
}

run();
