// Precipitation compatibility data
const precipitationData = {
    "Amino acids": { "Amino acids": "✓", "N": "✓", "P": "✓", "K": "✓", "Ca": "⚠️", "Mg": "✓", "S": "✓", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "✓", "B": "✓", "Mo": "✓" },
    "N": { "Amino acids": "✓", "N": "✓", "P": "✓", "K": "✓", "Ca": "✓", "Mg": "✓", "S": "✓", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "✓", "B": "✓", "Mo": "✓" },
    "P": { "Amino acids": "✓", "N": "✓", "P": "✓", "K": "✓", "Ca": "❌", "Mg": "⚠️", "S": "✓", "Fe": "⚠️", "Mn": "⚠️", "Zn": "⚠️", "Cu": "⚠️", "B": "✓", "Mo": "✓" },
    "K": { "Amino acids": "✓", "N": "✓", "P": "✓", "K": "✓", "Ca": "✓", "Mg": "✓", "S": "✓", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "✓", "B": "✓", "Mo": "✓" },
    "Ca": { "Amino acids": "⚠️", "N": "✓", "P": "❌", "K": "✓", "Ca": "✓", "Mg": "✓", "S": "❌", "Fe": "⚠️", "Mn": "✓", "Zn": "✓", "Cu": "✓", "B": "✓", "Mo": "✓" },
    "Mg": { "Amino acids": "✓", "N": "✓", "P": "⚠️", "K": "✓", "Ca": "✓", "Mg": "✓", "S": "✓", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "✓", "B": "✓", "Mo": "✓" },
    "S": { "Amino acids": "✓", "N": "✓", "P": "✓", "K": "✓", "Ca": "❌", "Mg": "✓", "S": "✓", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "✓", "B": "✓", "Mo": "✓" },
    "Fe": { "Amino acids": "✓", "N": "✓", "P": "⚠️", "K": "✓", "Ca": "⚠️", "Mg": "✓", "S": "✓", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "✓", "B": "✓", "Mo": "✓" },
    "Mn": { "Amino acids": "✓", "N": "✓", "P": "⚠️", "K": "✓", "Ca": "✓", "Mg": "✓", "S": "✓", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "✓", "B": "✓", "Mo": "✓" },
    "Zn": { "Amino acids": "✓", "N": "✓", "P": "⚠️", "K": "✓", "Ca": "✓", "Mg": "✓", "S": "✓", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "✓", "B": "✓", "Mo": "✓" },
    "Cu": { "Amino acids": "✓", "N": "✓", "P": "⚠️", "K": "✓", "Ca": "✓", "Mg": "✓", "S": "✓", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "✓", "B": "✓", "Mo": "✓" },
    "B": { "Amino acids": "✓", "N": "✓", "P": "✓", "K": "✓", "Ca": "✓", "Mg": "✓", "S": "✓", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "✓", "B": "✓", "Mo": "✓" },
    "Mo": { "Amino acids": "✓", "N": "✓", "P": "✓", "K": "✓", "Ca": "✓", "Mg": "✓", "S": "✓", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "✓", "B": "✓", "Mo": "✓" }
};

// Foliar safety data
const foliarData = {
    "Leafy Vegetables": { "Aminoacids": "✓", "N (org)": "✓", "P": "✓", "K": "⚠️", "Ca": "✓", "Mg": "✓", "S": "⚠️", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "⚠️", "B": "⚠️", "Mo": "✓" },
    "Fruiting Vegetables": { "Aminoacids": "✓", "N (org)": "✓", "P": "✓", "K": "⚠️", "Ca": "✓", "Mg": "✓", "S": "⚠️", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "⚠️", "B": "✓", "Mo": "✓" },
    "Cucurbits": { "Aminoacids": "✓", "N (org)": "✓", "P": "✓", "K": "⚠️", "Ca": "✓", "Mg": "✓", "S": "⚠️", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "❌", "B": "⚠️", "Mo": "✓" },
    "Stone Fruits": { "Aminoacids": "✓", "N (org)": "✓", "P": "✓", "K": "⚠️", "Ca": "✓", "Mg": "✓", "S": "⚠️", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "⚠️", "B": "⚠️", "Mo": "✓" },
    "Citrus": { "Aminoacids": "✓", "N (org)": "✓", "P": "✓", "K": "⚠️", "Ca": "✓", "Mg": "✓", "S": "⚠️", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "⚠️", "B": "❌", "Mo": "✓" },
    "Pome Fruits": { "Aminoacids": "✓", "N (org)": "✓", "P": "✓", "K": "⚠️", "Ca": "✓", "Mg": "✓", "S": "⚠️", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "⚠️", "B": "⚠️", "Mo": "✓" },
    "Grapes": { "Aminoacids": "✓", "N (org)": "✓", "P": "✓", "K": "⚠️", "Ca": "✓", "Mg": "✓", "S": "⚠️", "Fe": "✓", "Mn": "⚠️", "Zn": "✓", "Cu": "❌", "B": "❌", "Mo": "✓" },
    "Berries": { "Aminoacids": "✓", "N (org)": "✓", "P": "✓", "K": "⚠️", "Ca": "✓", "Mg": "✓", "S": "⚠️", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "⚠️", "B": "⚠️", "Mo": "✓" },
    "Legumes": { "Aminoacids": "✓", "N (org)": "✓", "P": "✓", "K": "⚠️", "Ca": "✓", "Mg": "✓", "S": "⚠️", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "⚠️", "B": "❌", "Mo": "✓" },
    "Brassicas": { "Aminoacids": "✓", "N (org)": "✓", "P": "✓", "K": "⚠️", "Ca": "✓", "Mg": "✓", "S": "✓", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "❌", "B": "❌", "Mo": "✓" },
    "Root Crops": { "Aminoacids": "✓", "N (org)": "✓", "P": "✓", "K": "⚠️", "Ca": "✓", "Mg": "✓", "S": "⚠️", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "⚠️", "B": "⚠️", "Mo": "✓" },
    "Cereals/Grains": { "Aminoacids": "✓", "N (org)": "✓", "P": "✓", "K": "⚠️", "Ca": "✓", "Mg": "✓", "S": "⚠️", "Fe": "✓", "Mn": "✓", "Zn": "✓", "Cu": "⚠️", "B": "⚠️", "Mo": "✓" },
    "Ornamentals (soft)": { "Aminoacids": "✓", "N (org)": "✓", "P": "✓", "K": "⚠️", "Ca": "✓", "Mg": "✓", "S": "⚠️", "Fe": "⚠️", "Mn": "⚠️", "Zn": "✓", "Cu": "❌", "B": "❌", "Mo": "✓" },
    "Young Seedlings": { "Aminoacids": "✓", "N (org)": "✓", "P": "✓", "K": "⚠️", "Ca": "✓", "Mg": "✓", "S": "⚠️", "Fe": "⚠️", "Mn": "⚠️", "Zn": "✓", "Cu": "❌", "B": "❌", "Mo": "✓" }
};

// Precipitation warnings
const precipitationWarnings = {
    "Ca+S": {
        icon: "❌",
        title: "High Risk: Calcium Sulfate Formation",
        message: "Ca + S (Sulfate) → Calcium sulfate (gypsum) - highly insoluble. This combination should be avoided."
    },
    "Ca+P": {
        icon: "❌",
        title: "High Risk: Calcium Phosphate Formation",
        message: "Ca + P (Phosphate) → Calcium phosphate precipitation. Risk is pH and concentration dependent. Avoid in alkaline conditions."
    },
    "Ca+Amino acids": {
        icon: "⚠️",
        title: "Caution: Calcium-Amino Acid Complexes",
        message: "Ca + Amino Acids → May form calcium-amino acid complexes at very high concentrations or alkaline pH. Monitor pH and concentration carefully."
    },
    "P+Fe": {
        icon: "⚠️",
        title: "Caution: Metal Phosphate Formation",
        message: "P + Fe → Iron phosphate can precipitate, especially at alkaline pH. Use chelated iron or maintain acidic pH."
    },
    "P+Mn": {
        icon: "⚠️",
        title: "Caution: Metal Phosphate Formation",
        message: "P + Mn → Manganese phosphate can precipitate, especially at alkaline pH. Use chelated manganese or maintain acidic pH."
    },
    "P+Zn": {
        icon: "⚠️",
        title: "Caution: Metal Phosphate Formation",
        message: "P + Zn → Zinc phosphate can precipitate, especially at alkaline pH. Use chelated zinc or maintain acidic pH."
    },
    "P+Cu": {
        icon: "⚠️",
        title: "Caution: Metal Phosphate Formation",
        message: "P + Cu → Copper phosphate can precipitate, especially at alkaline pH. Use chelated copper or maintain acidic pH."
    },
    "Mg+P": {
        icon: "⚠️",
        title: "Caution: Magnesium Phosphate",
        message: "Mg + P (Phosphate) → Magnesium phosphate at high concentrations. Monitor concentration levels."
    }
};

// Foliar safety warnings
const foliarWarnings = {
    "Cu": {
        icon: "🔴",
        title: "HIGHEST RISK - Copper (Cu)",
        message: "Most phytotoxic micronutrient. Extreme sensitivity on cucurbits, grapes, brassicas, and ornamentals. Toxicity increases with humidity and leaf wetness. Use minimal rates and test first."
    },
    "B": {
        icon: "🔴",
        title: "VERY NARROW MARGIN - Boron (B)",
        message: "Toxicity threshold very close to sufficiency. High risk on citrus, legumes, tomatoes, peppers, brassicas, and ornamentals. Accumulates in leaf tips/margins. Use extreme caution."
    },
    "K": {
        icon: "🟡",
        title: "SALT INDEX - Potassium (K)",
        message: "High rates can cause burn from osmotic stress (not element toxicity). Risk increases in hot weather or under water stress. Reduce rates during stress periods."
    },
    "S": {
        icon: "🟡",
        title: "TEMPERATURE SENSITIVE - Sulfur (S)",
        message: "Safe in cool weather but burns easily above 27°C (80°F), especially elemental S or high rates. Avoid applications during hot periods."
    }
};

function checkPrecipitation() {
    const material1 = document.getElementById('material1').value;
    const material2 = document.getElementById('material2').value;
    const resultDiv = document.getElementById('precipitationResult');

    if (!material1 || !material2) {
        resultDiv.style.display = 'none';
        return;
    }

    // Get compatibility status (matrix is symmetric)
    const status = precipitationData[material1][material2];
    
    // Determine status class and message
    let statusClass = '';
    let statusText = '';
    let statusIcon = '';
    
    if (status === '✓') {
        statusClass = 'safe';
        statusText = 'Compatible';
        statusIcon = '✓';
    } else if (status === '⚠️') {
        statusClass = 'caution';
        statusText = 'Caution Required';
        statusIcon = '⚠️';
    } else if (status === '❌') {
        statusClass = 'danger';
        statusText = 'Incompatible';
        statusIcon = '❌';
    }

    // Check for specific warnings
    let warningHTML = '';
    const combos = [
        `${material1}+${material2}`,
        `${material2}+${material1}`
    ];
    
    for (const combo of combos) {
        if (precipitationWarnings[combo]) {
            const warning = precipitationWarnings[combo];
            warningHTML = `
                <div class="warning-details ${statusClass}">
                    <div class="warning-header">
                        <span class="warning-icon">${warning.icon}</span>
                        <strong>${warning.title}</strong>
                    </div>
                    <p>${warning.message}</p>
                </div>
            `;
            break;
        }
    }

    // General recommendations based on materials
    let recommendationsHTML = '<div class="recommendations"><h4>General Recommendations:</h4><ul>';
    
    if (material1 === 'Amino acids' || material2 === 'Amino acids') {
        recommendationsHTML += '<li>✓ Amino acids actually improve compatibility with micronutrients through chelation</li>';
        recommendationsHTML += '<li>✓ Acidic amino acid formulations enhance overall tank mix compatibility</li>';
        if (status === '⚠️') {
            recommendationsHTML += '<li>⚠️ At very high concentrations or alkaline pH, monitor for calcium-amino acid complexes</li>';
        }
    }
    
    if ((material1 === 'Ca' || material2 === 'Ca') && status !== '✓') {
        recommendationsHTML += '<li>⚠️ High-concentration calcium solutions may bind at high pH</li>';
        recommendationsHTML += '<li>💡 Add calcium last to the tank and ensure thorough mixing</li>';
    }
    
    if ((material1 === 'P' || material2 === 'P') && status === '⚠️') {
        recommendationsHTML += '<li>⚠️ Risk increases at alkaline pH - maintain acidic pH when possible</li>';
        recommendationsHTML += '<li>💡 Use chelated micronutrients to reduce precipitation risk</li>';
    }
    
    recommendationsHTML += '</ul></div>';

    resultDiv.innerHTML = `
        <div class="result-header ${statusClass}">
            <span class="result-icon">${statusIcon}</span>
            <h3>${material1} + ${material2}</h3>
            <span class="result-status">${statusText}</span>
        </div>
        ${warningHTML}
        ${recommendationsHTML}
    `;
    
    resultDiv.style.display = 'block';
}

function checkFoliarSafety() {
    const nutrient = document.getElementById('nutrient').value;
    const cropType = document.getElementById('cropType').value;
    const resultDiv = document.getElementById('foliarResult');

    if (!nutrient || !cropType) {
        resultDiv.style.display = 'none';
        return;
    }

    // Get safety status
    const status = foliarData[cropType][nutrient];
    
    // Determine status class and message
    let statusClass = '';
    let statusText = '';
    let statusIcon = '';
    
    if (status === '✓') {
        statusClass = 'safe';
        statusText = 'Generally Safe';
        statusIcon = '✓';
    } else if (status === '⚠️') {
        statusClass = 'caution';
        statusText = 'Caution Required';
        statusIcon = '⚠️';
    } else if (status === '❌') {
        statusClass = 'danger';
        statusText = 'High Risk';
        statusIcon = '❌';
    }

    // Check for element-specific warnings
    let warningHTML = '';
    const nutrientKey = nutrient.replace(' (org)', '').replace('Aminoacids', 'AA');
    
    if (foliarWarnings[nutrientKey]) {
        const warning = foliarWarnings[nutrientKey];
        warningHTML = `
            <div class="warning-details ${statusClass}">
                <div class="warning-header">
                    <span class="warning-icon">${warning.icon}</span>
                    <strong>${warning.title}</strong>
                </div>
                <p>${warning.message}</p>
            </div>
        `;
    }

    // Recommendations based on status
    let recommendationsHTML = '<div class="recommendations"><h4>Application Recommendations:</h4><ul>';
    
    if (status === '✓') {
        recommendationsHTML += '<li>✓ Apply at standard recommended rates</li>';
        recommendationsHTML += '<li>✓ Best applied in early morning or late afternoon</li>';
        recommendationsHTML += '<li>💡 Ensure good coverage with appropriate surfactant</li>';
    } else if (status === '⚠️') {
        recommendationsHTML += '<li>⚠️ Reduce rates by 25-50% from standard recommendation</li>';
        recommendationsHTML += '<li>⚠️ Test on a small area first before full application</li>';
        recommendationsHTML += '<li>⚠️ Avoid application during heat stress or drought</li>';
        recommendationsHTML += '<li>💡 Apply in cool conditions (below 25°C / 77°F)</li>';
        recommendationsHTML += '<li>💡 Increase spray volume to reduce concentration</li>';
    } else if (status === '❌') {
        recommendationsHTML += '<li>❌ Use extreme caution - consider alternative application methods</li>';
        recommendationsHTML += '<li>❌ If foliar application is necessary, use minimal rates (10-25% of standard)</li>';
        recommendationsHTML += '<li>⚠️ Mandatory small-scale test before any application</li>';
        recommendationsHTML += '<li>⚠️ Apply only in ideal conditions: cool, high humidity, no stress</li>';
        recommendationsHTML += '<li>💡 Consider fertigation or soil application as safer alternative</li>';
    }
    
    // Crop-specific notes
    if (cropType === 'Cucurbits' && (nutrient === 'Cu' || nutrient === 'B')) {
        recommendationsHTML += '<li>🎯 Cucurbits are extremely sensitive to Cu and B - soil test before any application</li>';
    }
    if (cropType === 'Grapes' && nutrient === 'Cu') {
        recommendationsHTML += '<li>🎯 Grapes show copper sensitivity especially on young leaves</li>';
    }
    if (cropType === 'Young Seedlings') {
        recommendationsHTML += '<li>🎯 Young tissue is highly vulnerable - use foliar only when absolutely necessary</li>';
    }
    
    recommendationsHTML += '</ul></div>';

    resultDiv.innerHTML = `
        <div class="result-header ${statusClass}">
            <span class="result-icon">${statusIcon}</span>
            <h3>${nutrient} on ${cropType}</h3>
            <span class="result-status">${statusText}</span>
        </div>
        ${warningHTML}
        ${recommendationsHTML}
    `;
    
    resultDiv.style.display = 'block';
}
