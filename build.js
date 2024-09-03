const { execSync } = require('child_process');

// Build for ESM
execSync('tsc --module ESNext --outDir dist/esm', { stdio: 'inherit' });

// Build for CJS
execSync('tsc --module CommonJS --outDir dist/cjs', { stdio: 'inherit' });

// Copy TypeScript files
execSync('tsc --emitDeclarationOnly --outDir dist/types', { stdio: 'inherit' });