import { zip } from 'zip-a-folder'
import { mkdirp } from 'mkdirp'
import fs from 'fs'
import path from 'path'

const themeName = 'flynt-wptoledo'
const version = process.env.npm_package_version
const zipName = `${themeName}-${version}.zip`

// Define exclude patterns - only exclude what's absolutely necessary
const excludePatterns = [
  '.DS_Store',
  '.git',
  '.github',
  'node_modules',
  'vendor',
  'builds',
  '.gitignore',
  '.editorconfig',
  '.eslintrc.json',
  '.eslintignore',
  'package-lock.json',
  'composer.lock',
  'README.md',
  'CHANGELOG.md',
  '.travis.yml',
  '.scrutinizr.yml',
  'axe-linter.yml'
]

async function createZip () {
  // Create builds directory if it doesn't exist
  await mkdirp('./builds')

  // Create temp directory for zip contents
  const tempDir = `./builds/temp-${Date.now()}`
  await mkdirp(tempDir)

  // Copy all files except excluded ones
  async function copyFilesRecursively (source = '.', dest = tempDir) {
    //console.log(`Copying from ${source} to ${dest}`)
    const entries = await fs.promises.readdir(source, { withFileTypes: true })
    
   // console.log(`Found ${entries.length} entries in ${source}`)

    for (const entry of entries) {
      const srcPath = path.resolve(source, entry.name)
      const destPath = path.resolve(dest, entry.name)

      // Skip if matches exclude pattern
      if (excludePatterns.some(pattern => {
        if (pattern.includes('*')) {
          // Handle wildcard patterns
          const regex = new RegExp('^' + pattern.replace(/\*/g, '.*') + '$')
          return regex.test(entry.name)
        }
        return entry.name === pattern
      })) {
        // console.log(`Skipping excluded file/directory: ${entry.name}`)
        continue
      }

      if (entry.isDirectory()) {
        //console.log(`Creating directory: ${destPath}`)
        await mkdirp(destPath)
        await copyFilesRecursively(srcPath, destPath)
      } else {
        //console.log(`Copying file: ${srcPath} -> ${destPath}`)
        await fs.promises.cp(srcPath, destPath, { force: true })
      }
    }
  }

  // Copy files
  await copyFilesRecursively()

  // Create zip file
  await zip(tempDir, `./builds/${zipName}`)

  // Clean up temp directory
  fs.rmSync(tempDir, { recursive: true, force: true })

  console.log(`✨ Created theme zip: builds/${zipName}`)
}

createZip().catch(console.error)
