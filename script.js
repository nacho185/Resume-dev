document.getElementById('y').textContent = new Date().getFullYear();

const picker   = document.getElementById('picker');
const pdf      = document.getElementById('pdf');
const openBtn  = document.getElementById('openBtn');
const dlBtn    = document.getElementById('dlBtn');
const fallback = document.getElementById('fallbackLink');

// Use Chrome/Edge's "page-width" zoom so the PDF fills the width.
const PARAMS = '#toolbar=1&navpanes=0&zoom=page-width';

function setSrc(url){
  pdf.data      = url + PARAMS;
  openBtn.href  = url;
  dlBtn.href    = url;
  if (fallback) fallback.href = url;
}

picker.addEventListener('change', e => setSrc(e.target.value));
setSrc(picker.value);
