import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

/**
 * Utility script to download assets (images, fonts, SVGs) from a target website during the cloning process.
 *
 * Usage: npx tsx scripts/download-assets.ts <site_name> <asset_url> <filename>
 * Example: npx tsx scripts/download-assets.ts example https://example.com/logo.png logo.png
 */

const args = process.argv.slice(2);

if (args.length < 3) {
  console.error('Usage: npx tsx scripts/download-assets.ts <site_name> <asset_url> <filename>');
  process.exit(1);
}

const [siteName, assetUrl, filename] = args;

// Validate URL
let url;
try {
  url = new URL(assetUrl);
} catch {
  console.error(`Invalid URL provided: ${assetUrl}`);
  process.exit(1);
}

// Define the output directory based on the site name
const outputDir = path.join(process.cwd(), 'public', 'sites', siteName);
const outputPath = path.join(outputDir, filename);

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Created directory: ${outputDir}`);
}

// Select the correct protocol
const protocol = url.protocol === 'https:' ? https : http;

console.log(`Downloading ${assetUrl} to ${outputPath}...`);

protocol.get(url, (response) => {
  // Check if response is successful
  if (response.statusCode !== 200) {
    console.error(`Failed to download asset. Status code: ${response.statusCode}`);
    process.exit(1);
  }

  const fileStream = fs.createWriteStream(outputPath);

  response.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close();
    console.log(`Successfully downloaded ${filename} for site: ${siteName}`);
  });
}).on('error', (err) => {
  console.error(`Error downloading the asset: ${err.message}`);
  // Clean up the file if an error occurred during download
  if (fs.existsSync(outputPath)) {
    fs.unlinkSync(outputPath);
  }
});
