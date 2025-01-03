import { zip } from 'zip-a-folder';
import { mkdirp } from 'mkdirp';
import fs from 'fs';
import path from 'path';

const themeName = 'flynt-theme';
const version = process.env.npm_package_version;
const zipName = `${themeName}-${version}.zip`;

const includePaths = [
  'Components',
  'dist',
  'inc',
  'lib',
  'templates',
  'vendor',
  'index.php',
  'functions.php',
  'screenshot.png',
  'style.css'
];

const excludePatterns = [
  'node_modules',
  '.git',
  '.DS_Store',
  '*.log',
  'package-lock.json',
  'composer.lock'
];

async function createZip() {
  // Create builds directory if it doesn't exist
  await mkdirp('./builds');
  
  // Create temp directory for zip contents
  const tempDir = `./builds/temp-${Date.now()}`;
  await mkdirp(tempDir);

  // Copy files to temp directory
  for (const item of includePaths) {
    if (fs.existsSync(item)) {
      await fs.promises.cp(item, path.join(tempDir, item), { recursive: true });
    }
  }

  // Create zip file
  await zip(tempDir, `./builds/${zipName}`);

  // Clean up temp directory
  fs.rmSync(tempDir, { recursive: true, force: true });

  console.log(`✨ Created theme zip: builds/${zipName}`);
}

createZip().catch(console.error);