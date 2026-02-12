// PWA service worker registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed'));
    });
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function calculate() {
    const product = document.getElementById('product').value;
    const cropCategory = document.getElementById('cropCategory').value;
    const metrics = document.getElementById('metrics').value;
    const cropArea = parseFloat(document.getElementById('cropArea').value);

    if (!product || !cropCategory || !metrics || !cropArea || cropArea <= 0) {
        document.getElementById('results').style.display = 'none';
        return;
    }

    const volumeRanges = {
        'cereals': [20, 30],
        'legumes': [25, 35],
        'field': [30, 50],
        'highDensity': [50, 70],
        'vineyards': [80, 100],
        'orchard': [100, 120]
    };

    let baseVolume = (volumeRanges[cropCategory][0] + volumeRanges[cropCategory][1]) / 2;

    let totalVolume;
    if (metrics === 'hectares') {
        totalVolume = baseVolume * 10 * cropArea;
    } else if (metrics === 'acres') {
        totalVolume = baseVolume * 4 * cropArea;
    } else {
        totalVolume = baseVolume * cropArea;
    }

    const cellProducts = ['Amino Cell Antistress', 'Amino Cell PK', 'Amino Cell S', 'Amino Cell Si3%'];
    const dosage = cellProducts.includes(product) ? 3 : 5;
    const productVolume = (totalVolume / 1000) * dosage;

    document.getElementById('totalVolume').textContent = totalVolume.toFixed(2);
    document.getElementById('productVolume').textContent = productVolume.toFixed(2);
    document.getElementById('results').style.display = 'block';
}
