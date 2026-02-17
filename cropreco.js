// ─── Crop Data ────────────────────────────────────────────────────────────────
const cropData = {
  "Wheat":       { N:6,P:5,K:5,Ca:4,Mg:4,S:4,Zn:3,Fe:3,Mn:3,B:2,Cu:2,Mo:1,Si:5, products:"Amino Prime Si; GranBix", why:"Si strengthens stems and improves stress tolerance; Polysaccharides and seaweed enhance nutrient uptake" },
  "Rice":        { N:5,P:4,K:4,Ca:3,Mg:3,S:3,Zn:5,Fe:5,Mn:3,B:2,Cu:1,Mo:1,Si:6, products:"Amino Prime Si; Micro RS", why:"Si improves lodging and disease resistance; Microbial consortium enhances nutrient availability" },
  "Maize":       { N:6,P:5,K:5,Ca:4,Mg:4,S:4,Zn:3,Fe:3,Mn:3,B:2,Cu:2,Mo:1,Si:5, products:"GranBix; AminoCell PK; Amino Prime Si", why:"Seaweed polysaccharides improve nutrient uptake; PK supports grain filling; Si strengthens stems" },
  "Barley":      { N:5,P:4,K:4,Ca:3,Mg:3,S:3,Zn:3,Fe:3,Mn:3,B:2,Cu:2,Mo:1,Si:4, products:"Amino Prime Si; GranBix", why:"Si strengthens stems; polysaccharides improve nutrient uptake" },
  "Oats":        { N:4,P:3,K:3,Ca:3,Mg:3,S:2,Zn:2,Fe:2,Mn:2,B:2,Cu:1,Mo:1,Si:3, products:"GranBix; AminoCell Antistress", why:"Organic matter and polysaccharides improve uptake; amino acids support stress tolerance" },
  "Potato":      { N:6,P:5,K:6,Ca:4,Mg:4,S:4,Zn:3,Fe:4,Mn:3,B:3,Cu:2,Mo:1,Si:4, products:"AminoCell PK; FruitFix; GranBix", why:"P/K for tuber quality; Seaweed extracts improve stress tolerance and yield" },
  "Sweet potato":{ N:5,P:4,K:5,Ca:3,Mg:3,S:3,Zn:3,Fe:3,Mn:3,B:4,Cu:2,Mo:1,Si:3, products:"FruitFix; AminoCell PK; GranBix", why:"Seaweed enhances root vigor; PK supports tuber development" },
  "Carrot":      { N:4,P:5,K:4,Ca:3,Mg:3,S:3,Zn:3,Fe:3,Mn:3,B:4,Cu:2,Mo:1,Si:2, products:"AminoCell PK; Amino 16 B&Zn", why:"P/K support root growth; B & Zn improve root quality" },
  "Onion":       { N:4,P:4,K:4,Ca:3,Mg:3,S:5,Zn:3,Fe:3,Mn:3,B:4,Cu:2,Mo:1,Si:2, products:"Amino 16 B&Zn; Amino Prime S; GranBix", why:"B & Zn support bulb development; S enhances flavor and stress resilience" },
  "Garlic":      { N:5,P:4,K:4,Ca:3,Mg:3,S:5,Zn:3,Fe:3,Mn:3,B:4,Cu:2,Mo:1,Si:2, products:"Amino 16 B&Zn; Amino Prime S", why:"B & Zn for bulb quality; S strengthens aroma" },
  "Lettuce":     { N:4,P:3,K:4,Ca:3,Mg:3,S:3,Zn:2,Fe:3,Mn:3,B:3,Cu:2,Mo:1,Si:2, products:"FruitFix; AminoCell Antistress; GranBix", why:"Seaweed improves nutrient uptake; amino acids support leaf growth" },
  "Spinach":     { N:5,P:3,K:4,Ca:3,Mg:3,S:3,Zn:3,Fe:5,Mn:3,B:3,Cu:2,Mo:1,Si:3, products:"AminoCell PK; FruitFix; GranBix", why:"Fe prevents chlorosis; PK supports leaf yield; Seaweed enhances nutrient uptake" },
  "Tomato":      { N:6,P:5,K:6,Ca:5,Mg:4,S:4,Zn:4,Fe:4,Mn:3,B:4,Cu:3,Mo:1,Si:4, products:"FruitFix; AminoCell PK; Micro RS", why:"Seaweed improves fruit quality and stress tolerance; PK supports fruit set; microbes enhance root health" },
  "Eggplant":    { N:5,P:4,K:5,Ca:4,Mg:4,S:3,Zn:3,Fe:3,Mn:3,B:3,Cu:2,Mo:1,Si:3, products:"FruitFix; AminoCell PK; GranBix", why:"Seaweed improves root uptake and vigor; PK supports fruit development" },
  "Peppers":     { N:6,P:5,K:6,Ca:5,Mg:4,S:4,Zn:4,Fe:3,Mn:3,B:4,Cu:3,Mo:1,Si:4, products:"FruitFix; AminoCell PK; GranBix", why:"Seaweed extract enhances fruit quality; PK supports fruit set" },
  "Cabbage":     { N:6,P:5,K:6,Ca:5,Mg:4,S:4,Zn:3,Fe:4,Mn:3,B:3,Cu:2,Mo:1,Si:4, products:"AminoCell PK; FruitFix; GranBix", why:"Seaweed boosts nutrient uptake; PK supports head formation" },
  "Cauliflower": { N:6,P:5,K:6,Ca:5,Mg:4,S:4,Zn:3,Fe:4,Mn:3,B:3,Cu:2,Mo:1,Si:4, products:"AminoCell PK; FruitFix; GranBix", why:"Seaweed enhances stress tolerance; PK supports curd growth" },
  "Broccoli":    { N:6,P:5,K:6,Ca:5,Mg:4,S:4,Zn:3,Fe:4,Mn:3,B:3,Cu:2,Mo:1,Si:4, products:"AminoCell PK; FruitFix; GranBix", why:"Seaweed improves nutrient uptake; PK supports floret development" },
  "Mango":       { N:5,P:4,K:6,Ca:5,Mg:4,S:4,Zn:4,Fe:4,Mn:3,B:4,Cu:3,Mo:1,Si:5, products:"FruitFix; Amino Prime Si; GranBix", why:"Seaweed improves fruit quality and stress tolerance; Si strengthens tissue" },
  "Apple":       { N:5,P:4,K:6,Ca:6,Mg:5,S:4,Zn:4,Fe:4,Mn:3,B:4,Cu:3,Mo:1,Si:4, products:"FruitFix; Amino Prime Si; GranBix", why:"Seaweed enhances fruit quality; Si improves stress resilience" },
  "Orange":      { N:5,P:4,K:6,Ca:6,Mg:5,S:4,Zn:4,Fe:4,Mn:3,B:4,Cu:3,Mo:1,Si:4, products:"FruitFix; Amino Prime Si; GranBix", why:"Seaweed extract improves fruit quality; Si supports stress tolerance" },
  "Grapes":      { N:5,P:4,K:5,Ca:4,Mg:4,S:3,Zn:4,Fe:3,Mn:3,B:3,Cu:2,Mo:1,Si:4, products:"FruitFix; Amino Prime Si; GranBix", why:"Seaweed extract improves sugar accumulation; Si supports vine stress resistance" },
  "Olives":      { N:4,P:3,K:5,Ca:5,Mg:4,S:3,Zn:3,Fe:3,Mn:3,B:3,Cu:2,Mo:1,Si:3, products:"Amino Prime Si; GranBix", why:"Si improves stress resilience; polysaccharides enhance nutrient uptake" },
  "Soybean":     { N:5,P:4,K:5,Ca:4,Mg:4,S:3,Zn:4,Fe:4,Mn:3,B:4,Cu:3,Mo:5,Si:3, products:"Micro RS; FruitFix; Amino 16 B&Zn", why:"Microbes critical for legumes; seaweed boosts nutrient uptake; B & Zn support pod set" },
  "Peanut":      { N:5,P:4,K:5,Ca:4,Mg:4,S:3,Zn:4,Fe:4,Mn:3,B:4,Cu:3,Mo:5,Si:3, products:"Micro RS; FruitFix; Amino 16 B&Zn", why:"Microbes enhance nutrient cycling; seaweed supports quality; B & Zn improve yield" },
  "Lentil":      { N:4,P:4,K:4,Ca:3,Mg:3,S:2,Zn:3,Fe:3,Mn:3,B:3,Cu:2,Mo:5,Si:2, products:"Micro RS; FruitFix; Amino 16 B&Zn", why:"Mo critical for N fixation; seaweed improves nutrient uptake; B supports pods" },
  "Chickpea":    { N:4,P:4,K:4,Ca:3,Mg:3,S:2,Zn:3,Fe:3,Mn:3,B:3,Cu:2,Mo:5,Si:2, products:"Micro RS; FruitFix; Amino 16 B&Zn", why:"Mo supports N fixation; seaweed boosts stress resistance; B improves pod set" },
  "Kidney bean": { N:5,P:4,K:5,Ca:4,Mg:4,S:3,Zn:4,Fe:4,Mn:3,B:4,Cu:3,Mo:5,Si:3, products:"Micro RS; FruitFix; Amino 16 B&Zn", why:"Mo supports N fixation; K & P support yield; B aids pods" },
  "Sunflower":   { N:5,P:4,K:6,Ca:4,Mg:3,S:3,Zn:3,Fe:3,Mn:3,B:3,Cu:2,Mo:1,Si:4, products:"AminoCell PK; GranBix; Amino Prime Si", why:"PK supports seed yield; seaweed polysaccharides improve uptake; Si strengthens stems" },
  "Sorghum":     { N:5,P:4,K:5,Ca:4,Mg:3,S:3,Zn:3,Fe:3,Mn:3,B:3,Cu:2,Mo:1,Si:5, products:"Amino Prime Si; GranBix; AminoCell PK", why:"Si improves stress tolerance; P/K for grain filling; seaweed polysaccharides aid nutrient uptake" },
  "Millet":      { N:4,P:3,K:4,Ca:3,Mg:3,S:2,Zn:3,Fe:3,Mn:3,B:3,Cu:2,Mo:1,Si:4, products:"GranBix; AminoCell PK; Amino Prime Si", why:"Seaweed improves stress tolerance; PK supports grain development; Si as stress support" },
  "Cotton":      { N:6,P:5,K:5,Ca:4,Mg:4,S:4,Zn:3,Fe:3,Mn:3,B:3,Cu:2,Mo:1,Si:4, products:"AminoCell PK; GranBix; Amino Prime Si", why:"PK supports vegetative growth; seaweed boosts root uptake; Si enhances stress resilience" },
  "Rapeseed":    { N:5,P:4,K:5,Ca:4,Mg:4,S:4,Zn:3,Fe:3,Mn:3,B:3,Cu:2,Mo:1,Si:3, products:"AminoCell PK; GranBix; FruitFix", why:"P/K supports yield; seaweed improves nutrient uptake and quality" },
  "Cucumber":    { N:5,P:4,K:5,Ca:4,Mg:3,S:3,Zn:3,Fe:3,Mn:3,B:3,Cu:2,Mo:1,Si:3, products:"FruitFix; Micro RS; GranBix", why:"Seaweed boosts root growth & yield; microbes enhance nutrient cycling" },
  "Pumpkin":     { N:5,P:4,K:5,Ca:4,Mg:3,S:3,Zn:3,Fe:3,Mn:3,B:3,Cu:2,Mo:1,Si:3, products:"FruitFix; Micro RS; GranBix", why:"Seaweed improves fruit quality & nutrient uptake; microbes support root health" },
  "Watermelon":  { N:5,P:4,K:5,Ca:4,Mg:3,S:3,Zn:3,Fe:3,Mn:3,B:3,Cu:2,Mo:1,Si:3, products:"FruitFix; Micro RS; GranBix", why:"Seaweed improves fruit quality; microbes enhance root nutrient access" },
  "Pear":        { N:5,P:4,K:6,Ca:5,Mg:4,S:4,Zn:4,Fe:4,Mn:3,B:4,Cu:3,Mo:1,Si:4, products:"FruitFix; Amino Prime Si; GranBix", why:"Seaweed improves fruit quality; Si enhances stress tolerance" },
  "Plum":        { N:5,P:4,K:5,Ca:4,Mg:3,S:3,Zn:3,Fe:3,Mn:3,B:3,Cu:2,Mo:1,Si:4, products:"FruitFix; Amino Prime Si; GranBix", why:"Seaweed improves nutrient uptake; Si strengthens stems" },
  "Peach":       { N:5,P:4,K:6,Ca:5,Mg:4,S:4,Zn:4,Fe:4,Mn:3,B:4,Cu:3,Mo:1,Si:4, products:"FruitFix; Amino Prime Si; GranBix", why:"Seaweed extract supports fruit traits; Si improves stress tolerance" },
  "Cherry":      { N:5,P:4,K:5,Ca:4,Mg:4,S:3,Zn:3,Fe:3,Mn:3,B:3,Cu:2,Mo:1,Si:4, products:"FruitFix; Amino Prime Si; GranBix", why:"Seaweed improves fruit quality; Si strengthens stems" },
  "Plumcot":     { N:5,P:4,K:5,Ca:4,Mg:4,S:3,Zn:3,Fe:3,Mn:3,B:3,Cu:2,Mo:1,Si:4, products:"FruitFix; Amino Prime Si; GranBix", why:"Seaweed supports fruit development; Si improves stress resistance" },
  "Apricot":     { N:5,P:4,K:5,Ca:4,Mg:4,S:3,Zn:3,Fe:3,Mn:3,B:3,Cu:2,Mo:1,Si:4, products:"FruitFix; Amino Prime Si; GranBix", why:"Seaweed improves fruit quality; Si enhances stress resilience" },
  "Kiwi":        { N:6,P:5,K:6,Ca:5,Mg:4,S:4,Zn:4,Fe:4,Mn:3,B:4,Cu:3,Mo:1,Si:5, products:"FruitFix; Amino Prime Si; GranBix", why:"Seaweed improves nutrient uptake and fruit quality; Si supports vine stress" },
  "Papaya":      { N:5,P:4,K:5,Ca:4,Mg:3,S:3,Zn:4,Fe:3,Mn:3,B:3,Cu:2,Mo:1,Si:4, products:"FruitFix; Amino Prime Si; GranBix", why:"Seaweed boosts fruit quality; Si strengthens stress tolerance" },
  "Pineapple":   { N:5,P:4,K:5,Ca:4,Mg:3,S:3,Zn:3,Fe:3,Mn:3,B:3,Cu:2,Mo:1,Si:4, products:"FruitFix; Amino Prime Si; GranBix", why:"Seaweed enhances fruit traits; Si improves stress tolerance" },
  "Banana":      { N:6,P:5,K:6,Ca:5,Mg:4,S:4,Zn:4,Fe:4,Mn:3,B:4,Cu:3,Mo:1,Si:5, products:"FruitFix; Amino Prime Si; GranBix", why:"Seaweed improves fruit quality & stress tolerance; Si strengthens pseudostem" },
  "Avocado":     { N:5,P:4,K:6,Ca:5,Mg:4,S:4,Zn:4,Fe:4,Mn:3,B:4,Cu:3,Mo:1,Si:4, products:"FruitFix; Amino Prime Si; GranBix", why:"Seaweed improves fruit quality; Si supports stress resilience" },
  "Cacao":       { N:5,P:4,K:5,Ca:4,Mg:4,S:3,Zn:4,Fe:4,Mn:3,B:4,Cu:3,Mo:1,Si:4, products:"FruitFix; Amino Prime Si; GranBix", why:"Seaweed enhances nutrient use and quality; Si strengthens stems" },
  "Coffee":      { N:5,P:4,K:5,Ca:4,Mg:4,S:3,Zn:4,Fe:4,Mn:3,B:4,Cu:3,Mo:1,Si:4, products:"FruitFix; Amino Prime Si; GranBix", why:"Seaweed improves nutrient uptake; Si strengthens stress resilience" },
  "Tea":         { N:5,P:4,K:5,Ca:4,Mg:4,S:3,Zn:4,Fe:4,Mn:3,B:4,Cu:3,Mo:1,Si:4, products:"FruitFix; Amino Prime Si; GranBix", why:"Seaweed improves root growth; Si enhances stress tolerance" }
};

const nutrientLabels = ['N','P','K','Ca','Mg','S','Zn','Fe','Mn','B','Cu','Mo','Si'];
const nutrientFullNames = {
  N:'Nitrogen', P:'Phosphorus', K:'Potassium', Ca:'Calcium', Mg:'Magnesium',
  S:'Sulfur', Zn:'Zinc', Fe:'Iron', Mn:'Manganese', B:'Boron',
  Cu:'Copper', Mo:'Molybdenum', Si:'Silicon'
};

// Colour ramp for demand score 1-6
const barColors = {
  1: { bg:'#e8f4ec', fill:'#b7d9c4', text:'#4a7c5e' },
  2: { bg:'#dcf0e4', fill:'#8dc4a0', text:'#3a6b50' },
  3: { bg:'#d0e9d9', fill:'#5aab7a', text:'#2d5a40' },
  4: { bg:'#c4e0cc', fill:'#ff9f1c', text:'#b36800' },
  5: { bg:'#fef0d9', fill:'#ff7b00', text:'#8a3e00' },
  6: { bg:'#fde4e4', fill:'#d64545', text:'#7a1f1f' }
};

let cropRadarChart = null;

function updateCropReco() {
  const crop = document.getElementById('cropSelect').value;
  const content  = document.getElementById('cropRecoContent');
  const noMsg    = document.getElementById('noCropMessage');

  if (!crop || !cropData[crop]) {
    content.style.display = 'none';
    noMsg.style.display   = 'block';
    return;
  }

  noMsg.style.display   = 'none';
  content.style.display = 'block';

  const data = cropData[crop];

  document.getElementById('chartCropName').textContent = crop;
  renderRadarChart(crop, data);
  renderNutrientBars(data);
  renderProductCards(data);
}

// ─── Radar Chart ──────────────────────────────────────────────────────────────
function renderRadarChart(crop, data) {
  if (cropRadarChart) { cropRadarChart.destroy(); }

  const values = nutrientLabels.map(k => data[k]);
  const ctx = document.getElementById('cropRadarChart').getContext('2d');

  cropRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: nutrientLabels,
      datasets: [{
        label: crop,
        data: values,
        backgroundColor: 'rgba(26,77,46,0.18)',
        borderColor: '#1a4d2e',
        borderWidth: 3,
        pointBackgroundColor: values.map(v =>
          v >= 5 ? '#d64545' : v === 4 ? '#ff9f1c' : '#1a4d2e'
        ),
        pointBorderColor: '#fff',
        pointRadius: 6,
        pointHoverRadius: 9,
        pointBorderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(26,77,46,0.95)',
          padding: 12,
          callbacks: {
            label: ctx => {
              const scores = ['','Minimal','Low','Moderate','High','Very High','Critical'];
              return `${nutrientFullNames[ctx.label]}: ${ctx.raw} — ${scores[ctx.raw]}`;
            }
          }
        }
      },
      scales: {
        r: {
          min: 0,
          max: 6,
          ticks: {
            stepSize: 1,
            backdropColor: 'transparent',
            color: '#6b7c6e',
            font: { size: 11 },
            display: true
          },
          grid: { color: 'rgba(26,77,46,0.12)', lineWidth: 1.5 },
          angleLines: { color: 'rgba(26,77,46,0.15)', lineWidth: 1.5 },
          pointLabels: {
            color: '#2c3e2f',
            font: { size: 13, weight: '600', family: "'DM Sans', sans-serif" }
          }
        }
      }
    }
  });
}

// ─── Nutrient Bars ────────────────────────────────────────────────────────────
function renderNutrientBars(data) {
  const grid = document.getElementById('nutrientBarsGrid');
  grid.innerHTML = '';

  nutrientLabels.forEach(key => {
    const score  = data[key];
    const colors = barColors[score];
    const pct    = (score / 6) * 100;
    const scoreLabels = ['','Minimal','Low','Moderate','High','Very High','Critical'];

    const item = document.createElement('div');
    item.className = 'nutrient-bar-item';
    item.innerHTML = `
      <div class="nb-label">
        <span class="nb-symbol">${key}</span>
        <span class="nb-name">${nutrientFullNames[key]}</span>
      </div>
      <div class="nb-track">
        <div class="nb-fill" style="width:${pct}%; background:${colors.fill};"></div>
      </div>
      <div class="nb-score" style="color:${colors.text}; background:${colors.bg};">
        ${score} <span class="nb-score-label">${scoreLabels[score]}</span>
      </div>
    `;
    grid.appendChild(item);
  });
}

// ─── Product Recommendation Cards ─────────────────────────────────────────────
function renderProductCards(data) {
  const container = document.getElementById('productRecoCards');
  container.innerHTML = '';

  const products = data.products.split(';').map(p => p.trim()).filter(Boolean);
  const reasons  = data.why.split(';').map(r => r.trim()).filter(Boolean);

  const productIcons = {
    'FruitFix':          '🍎',
    'GranBix':           '🌿',
    'AminoCell PK':      '🌱',
    'AminoCell Antistress':'🛡️',
    'Micro RS':          '🦠',
    'Amino Prime Si':    '⚡',
    'Amino 16 B&Zn':     '🔬',
    'Amino Prime S':     '🌾',
  };

  // Header
  const header = document.createElement('div');
  header.className = 'reco-products-header';
  header.innerHTML = `<h3 class="section-title" style="text-align:left;font-size:1.4rem;margin-bottom:6px;">🎯 Recommended Products</h3>
    <p style="color:var(--text-muted);margin-bottom:28px;font-size:0.95rem;">Based on nutrient demand profile and crop-specific needs</p>`;
  container.appendChild(header);

  const grid = document.createElement('div');
  grid.className = 'reco-product-grid';
  container.appendChild(grid);

  products.forEach((product, i) => {
    const reason = reasons[i] || reasons[0] || '';
    const icon   = productIcons[product] || '🧪';
    const priority = i === 0 ? 'primary' : i === 1 ? 'secondary' : 'tertiary';
    const badge    = i === 0 ? '★ Top Pick' : i === 1 ? '✦ Recommended' : '◆ Complementary';

    const card = document.createElement('div');
    card.className = `reco-product-card reco-${priority}`;
    card.innerHTML = `
      <div class="rpc-badge">${badge}</div>
      <div class="rpc-icon">${icon}</div>
      <h4 class="rpc-name">${product}</h4>
      <p class="rpc-reason">${reason}</p>
    `;
    grid.appendChild(card);
  });
}
