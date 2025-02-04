import { zip } from 'zip-a-folder';
import { mkdirp } from 'mkdirp';
import fs from 'fs';
import path from 'path';

const themeName = 'flynt-wptoledo';
const version = process.env.npm_package_version;
const zipName = `${themeName}-${version}.zip`;

const excludePatterns = [
  'node_modules',
  'vendor',
  '*.log',
  'package.json',
  'package-lock.json',
  'composer.json',
  'composer.lock',
  'builds',
  'phpcs*',
  '.*',
];

async function createZip() {
  // Create builds directory if it doesn't exist
  await mkdirp('./builds');
  
  // Create temp directory for zip contents
  const tempDir = `./builds/temp-${Date.now()}`;
  await mkdirp(tempDir);

  // Copy all files except excluded ones
  async function copyFilesRecursively(source = '.', dest = tempDir) {
    const entries = await fs.promises.readdir(source, { withFileTypes: true });
    
    for (const entry of entries) {
      const srcPath = path.join(source, entry.name);
      const destPath = path.join(dest, entry.name);
      
      // Skip if matches exclude pattern
      if (excludePatterns.some(pattern => {
        if (pattern.includes('*')) {
          // Handle wildcard patterns
          const regex = new RegExp('^' + pattern.replace(/\*/g, '.*') + '$');
          return regex.test(entry.name);
        }
        return entry.name === pattern;
      })) {
        continue;
      }

      if (entry.isDirectory()) {
        await mkdirp(destPath);
        await copyFilesRecursively(srcPath, destPath);
      } else {
        await fs.promises.cp(srcPath, destPath);
      }
    }
  }

  // Copy files
  await copyFilesRecursively();

  // Create zip file
  await zip(tempDir, `./builds/${zipName}`);

  // Clean up temp directory
  fs.rmSync(tempDir, { recursive: true, force: true });

  console.log(`✨ Created theme zip: builds/${zipName}`);
}

createZip().catch(console.error);