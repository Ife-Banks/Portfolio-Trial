const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    // We replace font-workSan, font-sans, and font-mono with font-mono2.
    // Use word boundary \b on font-mono so we don't accidentally match font-mono2 and make it font-mono22.
    let replaced = content
        .replace(/font-workSan/g, 'font-mono2')
        .replace(/font-sans\b/g, 'font-mono2')
        .replace(/font-mono\b/g, 'font-mono2');
    
    if (content !== replaced) {
        fs.writeFileSync(filePath, replaced, 'utf8');
        console.log('Updated', filePath);
    }
  }
});
