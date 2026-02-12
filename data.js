// Product usage data from CSV
const productData = {
    "Legumes": {
        stages: ["Early vegetative growth", "Pre Flowering", "On-going and every 15 days"],
        data: {
            "Early vegetative growth": {"Amino 16": "4-5lt/1000lt", "Amino Cell S": "3-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino HF": "4-5lt/1000lt", "Amino 16 BZn": "3-5lt/1000lt", "Amino Power": "4-5lt/1000lt"},
            "Pre Flowering": {"Amino 16": "4-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino 16 BZn": "3-5lt/1000lt", "Amino Power": "4-5lt/1000lt"},
            "On-going and every 15 days": {"Amino 16": "4-5lt/1000lt", "Amino Cell S": "3-5lt/1000lt", "Amino Cell PK": "3-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino Power": "4-5lt/1000lt"}
        }
    },
    "Root/Tuber crops": {
        stages: ["Early vegetative / Bulbing", "Root Thickening", "Bulb swelling / Root maturation"],
        data: {
            "Early vegetative / Bulbing": {"Amino 16": "4-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino HF": "4-5lt/1000lt", "Amino 16 BZn": "3-5lt/1000lt", "Amino Power": "4-5lt/1000lt"},
            "Root Thickening": {"Amino 16": "4-5lt/1000lt", "Amino Cell S": "3-5lt/1000lt", "Amino Cell PK": "3-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino Power": "4-5lt/1000lt"},
            "Bulb swelling / Root maturation": {"Amino 16": "4-5lt/1000lt", "Fruitfix": "4-5lt/1000lt", "Granbrix": "4-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino Power": "4-5lt/1000lt"}
        }
    },
    "Solanaceous Fruiting vegetables": {
        stages: ["Establishment / Early vegetative", "Vegetative to pre-Flower/Early bloom", "Fruit set", "Fruit development", "Fruit Fill to Harvest / Late cycle"],
        data: {
            "Establishment / Early vegetative": {"Amino 16": "4-5lt/1000lt", "MicroRS": "3-5lt/1000lt", "Amino Cell S": "3-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino HF": "4-5lt/1000lt", "Amino Power": "4-5lt/1000lt"},
            "Vegetative to pre-Flower/Early bloom": {"Amino 16": "4-5lt/1000lt", "Amino Cell PK": "3-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino 16 BZn": "3-5lt/1000lt", "Amino Power": "4-5lt/1000lt"},
            "Fruit set": {"Amino 16": "4-5lt/1000lt", "Fruitfix": "4-5lt/1000lt", "Granbrix": "4-5lt/1000lt", "Amino Cell Si 3%": "3-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino Power": "4-5lt/1000lt"},
            "Fruit development": {"Amino 16": "4-5lt/1000lt", "Fruitfix": "4-5lt/1000lt", "Granbrix": "4-5lt/1000lt", "Amino Cell S": "3-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino Power": "4-5lt/1000lt"},
            "Fruit Fill to Harvest / Late cycle": {"Amino 16": "4-5lt/1000lt", "Amino Cell PK": "2-3lt/1000lt", "Amino Cell Si 3%": "3-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino Power": "4-5lt/1000lt"}
        }
    },
    "Vining/Soft-Fruiting vegetables": {
        stages: ["Bud swelling", "Petal Fall", "Fruit Growth", "Mid to Late fruit development"],
        data: {
            "Bud swelling": {"Amino 16": "4-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino HF": "4-5lt/1000lt", "Amino 16 BZn": "3-5lt/1000lt", "Amino Power": "4-5lt/1000lt"},
            "Petal Fall": {"Amino 16": "4-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino 16 BZn": "3-5lt/1000lt", "Amino Power": "4-5lt/1000lt"},
            "Fruit Growth": {"Amino 16": "4-5lt/1000lt", "Fruitfix": "4-5lt/1000lt", "Granbrix": "4-5lt/1000lt", "Amino Cell Si 3%": "3-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino Power": "4-5lt/1000lt"},
            "Mid to Late fruit development": {"Amino 16": "4-5lt/1000lt", "Fruitfix": "4-5lt/1000lt", "Granbrix": "4-5lt/1000lt", "Amino Cell Si 3%": "3-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino Power": "4-5lt/1000lt"}
        }
    },
    "Grains/Cereals": {
        stages: ["During herbicide period", "15-20 days after"],
        data: {
            "During herbicide period": {"Amino 16": "4-5lt/1000lt", "Amino Cell S": "3-5lt/1000lt", "Amino Cell Si 3%": "3-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino HF": "4-5lt/1000lt", "Amino Power": "4-5lt/1000lt"},
            "15-20 days after": {"Amino 16": "4-5lt/1000lt", "Amino Cell S": "3-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino Power": "4-5lt/1000lt"}
        }
    },
    "Citrus Fruits": {
        stages: ["Pre-Flowering", "Fruit Set", "Mid-Fruit development", "Color change & post-harvest"],
        data: {
            "Pre-Flowering": {"Amino 16": "4-5lt/1000lt", "MicroRS": "3-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino HF": "4-5lt/1000lt", "Amino 16 BZn": "3-5lt/1000lt", "Amino Power": "4-5lt/1000lt"},
            "Fruit Set": {"Amino 16": "4-5lt/1000lt", "Amino Cell S": "3-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino 16 BZn": "3-5lt/1000lt", "Amino Power": "4-5lt/1000lt"},
            "Mid-Fruit development": {"Amino 16": "4-5lt/1000lt", "Fruitfix": "4-5lt/1000lt", "Granbrix": "4-5lt/1000lt", "Amino Cell S": "3-5lt/1000lt", "Amino Cell Si 3%": "3-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino 16 BZn": "3-5lt/1000lt", "Amino Power": "4-5lt/1000lt"},
            "Color change & post-harvest": {"Amino 16": "4-5lt/1000lt", "Fruitfix": "4-5lt/1000lt", "Granbrix": "4-5lt/1000lt", "Amino Cell Si 3%": "3-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino Power": "4-5lt/1000lt"}
        }
    },
    "Olives": {
        stages: ["Late Winter", "Pre-Bloom", "Fruit development", "Post Harvest"],
        data: {
            "Late Winter": {"Amino 16": "4-5lt/1000lt", "MicroRS": "3-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino HF": "4-5lt/1000lt", "Amino Power": "4-5lt/1000lt"},
            "Pre-Bloom": {"Amino 16": "4-5lt/1000lt", "Amino Cell S": "3-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino 16 BZn": "3-5lt/1000lt", "Amino Power": "4-5lt/1000lt"},
            "Fruit development": {"Amino 16": "4-5lt/1000lt", "Fruitfix": "4-5lt/1000lt", "Amino Cell S": "3-5lt/1000lt", "Amino Cell PK": "3-5lt/1000lt", "Amino Cell Si 3%": "3-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino Power": "4-5lt/1000lt"},
            "Post Harvest": {"Amino 16": "4-5lt/1000lt", "Fruitfix": "4-5lt/1000lt", "Amino Cell Antistress": "4-5lt/1000lt", "Ultra Green": "4-5lt/1000lt", "Amino 16 BZn": "3-5lt/1000lt", "Amino Power": "4-5lt/1000lt"}
        }
    }
};

function updateDiaryTable() {
    const selectedProduct = document.getElementById('diaryProduct').value;
    const tableContainer = document.getElementById('diaryTableContainer');
    const noProductMessage = document.getElementById('noProductMessage');
    const table = document.getElementById('diaryTable');

    if (!selectedProduct) {
        tableContainer.style.display = 'none';
        noProductMessage.style.display = 'block';
        return;
    }

    noProductMessage.style.display = 'none';
    tableContainer.style.display = 'block';

    let tableHTML = '<thead><tr><th class="crop-header">Crop Type</th>';
    
    let maxStages = 0;
    Object.values(productData).forEach(crop => {
        maxStages = Math.max(maxStages, crop.stages.length);
    });

    for (let i = 0; i < maxStages; i++) {
        tableHTML += `<th class="stage-header">Stage ${i + 1}</th>`;
    }
    tableHTML += '</tr></thead><tbody>';

    Object.entries(productData).forEach(([cropType, cropInfo]) => {
        tableHTML += `<tr><td class="crop-name">${cropType}</td>`;
        
        cropInfo.stages.forEach((stage, index) => {
            const dosage = cropInfo.data[stage][selectedProduct] || '';
            const hasValue = dosage !== '';
            
            tableHTML += `
                <td class="stage-cell ${hasValue ? 'has-value' : 'no-value'}">
                    <div class="stage-name">${stage}</div>
                    ${hasValue ? `<div class="dosage">${dosage}</div>` : '<div class="no-recommendation">—</div>'}
                </td>
            `;
        });

        for (let i = cropInfo.stages.length; i < maxStages; i++) {
            tableHTML += '<td class="stage-cell empty-cell"></td>';
        }
        
        tableHTML += '</tr>';
    });

    tableHTML += '</tbody>';
    table.innerHTML = tableHTML;
}
