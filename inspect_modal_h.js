const fs = require('fs');
const text = fs.readFileSync('chunk-789.js', 'utf8');

// Find function h or the modal component
const modalIdx = text.indexOf('onClose:()=>i(!1)');
console.log('modalIdx:', modalIdx);

// Look backwards for function h
console.log(text.slice(Math.max(0, modalIdx - 3000), modalIdx + 500));

