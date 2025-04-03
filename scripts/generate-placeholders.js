import fs from 'fs';
import { createCanvas } from 'canvas';

const sizes = {
  'story-bg.jpg': { width: 1920, height: 1080 },
  'center.jpg': { width: 800, height: 600 },
  'team/sarah.jpg': { width: 400, height: 500 },
  'team/michael.jpg': { width: 400, height: 500 },
  'team/emma.jpg': { width: 400, height: 500 },
};

function generatePlaceholderImage(width, height, text, outputPath) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background with a light color
  ctx.fillStyle = '#f5f5f5';
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = '#666';
  ctx.font = '24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(outputPath, buffer);
}

// Create directories if they don't exist
const dirs = ['public/images/about', 'public/images/team'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate placeholder images
Object.entries(sizes).forEach(([filename, { width, height }]) => {
  const outputPath = `public/images/${filename}`;
  const text = filename.replace('.jpg', '').replace(/\//g, ' - ');
  generatePlaceholderImage(width, height, text, outputPath);
  console.log(`Generated ${outputPath}`);
}); 