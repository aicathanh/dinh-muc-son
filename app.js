const products = [
  {
    "category": "SƠN GỖ",
    "name": "Keo Trám Trét 1K (Wood Filler)",
    "prices": { "1kg": 100440, "5kg": 498960, "20kg": 2376000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Matic Trong Suốt 1K (Matic Clear)",
    "prices": { "1kg": 130680, "5kg": 594000, "20kg": 2019600 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Matic Trắng 1K (Wood Matic White)",
    "prices": { "1kg": 130680, "5kg": 594000, "20kg": 2019600 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Lót Trong Suốt 1K (Sanding Sealer)",
    "prices": { "1kg": 159840, "5kg": 712800, "20kg": 2700000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Lót Chống Xì Dầu 1K (Anti Tannin)",
    "prices": { "1kg": 178200, "5kg": 819720, "20kg": 3160080 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Lót Trắng 1K (White Wood Primer)",
    "prices": { "1kg": 159840, "5kg": 712800, "20kg": 2692440 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Sơn Lau Gỗ 1K (Wood Stain)",
    "prices": { "1kg": 205200, "5kg": 950400, "20kg": 3641760 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Màu Bệt Trong Nhà 1K (Wood Paint Interior)",
    "prices": { "1kg": 253800, "5kg": 1215000, "20kg": 4644000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Sơn 2in1 Trong Nhà 1K (Finish Interior)",
    "prices": { "1kg": 248400, "5kg": 1188000, "20kg": 4536000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Phủ Bóng Lacquer Trong Nhà 1K",
    "prices": { "1kg": 205200, "5kg": 972000, "20kg": 3672000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Màu Bệt Ngoài Trời 1K (Wood Paint Exterior)",
    "prices": { "1kg": 318600, "5kg": 1539000, "20kg": 5940000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Sơn 2in1 Ngoài Trời 1K (Finish Exterior)",
    "prices": { "1kg": 313200, "5kg": 1512000, "20kg": 5832000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Phủ Bóng Lacquer Ngoài Trời 1K",
    "prices": { "1kg": 237600, "5kg": 1069200, "20kg": 4039200 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Phủ Bóng PUD Ngoài Trời 1K (Lotus PUD)",
    "prices": { "1kg": 302400, "5kg": 1458000, "20kg": 5616000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Lót Trong Suốt 2K (2K71 Nội Thất)",
    "prices": { "1kg": 151200, "5kg": 702000, "20kg": 2764800 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Lót Trong Suốt 2K (2K71 Ngoại Thất)",
    "prices": { "1kg": 181200, "5kg": 852000, "20kg": 3364800 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Lót Trắng 2K (MX83 Nội Thất)",
    "prices": { "1kg": 183600, "5kg": 891000, "20kg": 3456000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Lót Trắng 2K (MX83 Ngoại Thất)",
    "prices": { "1kg": 213600, "5kg": 1041000, "20kg": 4056000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Phủ Bóng Lacquer 2K (2K71 Nội Thất)",
    "prices": { "1kg": 172800, "5kg": 810000, "20kg": 3024000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Phủ Bóng Lacquer 2K (2K71 Ngoại Thất)",
    "prices": { "1kg": 202800, "5kg": 960000, "20kg": 3624000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Sơn 2in1 Trong Nhà 2K (Finish 2K71)",
    "prices": { "1kg": 178200, "5kg": 837000, "20kg": 3132000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Sơn 2in1 Ngoài Trời 2K (Finish 2K71)",
    "prices": { "1kg": 208200, "5kg": 987000, "20kg": 3732000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Màu Bệt Trong Nhà 2K (2K71)",
    "prices": { "1kg": 183600, "5kg": 864000, "20kg": 3240000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Màu Bệt Ngoài Trời 2K (2K71)",
    "prices": { "1kg": 213600, "5kg": 1014000, "20kg": 3840000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Phủ Bóng Lacquer 2K (MX83 Nội Thất)",
    "prices": { "1kg": 199800, "5kg": 918000, "20kg": 3564000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Phủ Bóng Lacquer 2K (MX83 Ngoại Thất)",
    "prices": { "1kg": 229800, "5kg": 1068000, "20kg": 4164000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Sơn 2in1 Trong Nhà 2K (Finish MX83)",
    "prices": { "1kg": 205200, "5kg": 972000, "20kg": 3672000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Sơn 2in1 Ngoài Trời 2K (Finish MX83)",
    "prices": { "1kg": 235200, "5kg": 1122000, "20kg": 4272000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Màu Bệt Trong Nhà 2K (Wood Paint MX83)",
    "prices": { "1kg": 210600, "5kg": 999000, "20kg": 3780000 }
  },
  {
    "category": "SƠN GỖ",
    "name": "Màu Bệt Ngoài Trời 2K (Wood Paint MX83)",
    "prices": { "1kg": 240600, "5kg": 1149000, "20kg": 4380000 }
  },
  {
    "category": "SƠN GIẢ GỖ",
    "name": "Phủ Màu Giả Gỗ Kim Loại (1K) (LWF)",
    "prices": { "1kg": 297000, "5kg": 1366200, "20kg": 5303880 }
  },
  {
    "category": "KIM LOẠI (1K)",
    "name": "Lót Kim Loại Chống Gỉ (Metal Primer) (LMCP)",
    "prices": { "1kg": 217080, "5kg": 986040, "20kg": 3723840 }
  },
  {
    "category": "KIM LOẠI (1K)",
    "name": "Phủ Màu Kim Loại (Metal Coat Finish) (LMCF)",
    "prices": { "1kg": 237600, "5kg": 1092960, "20kg": 4196880 }
  },
  {
    "category": "KIM LOẠI (1K)",
    "name": "Sơn Kim Loại 2 in 1 (DTM Metal Coat) (LDTM)",
    "prices": { "1kg": 254880, "5kg": 1188000, "20kg": 4639680 }
  },
  {
    "category": "KIM LOẠI 2K",
    "name": "Lót Kim Loại 2K (Metal Coat Primer 2K)",
    "prices": { "1kg": 183600, "5kg": 864000, "20kg": 3294000 }
  },
  {
    "category": "KIM LOẠI 2K",
    "name": "Phủ Màu Kim Loại 2K (Metal Coat Finish 2K)",
    "prices": { "1kg": 199800, "5kg": 939600, "20kg": 3564000 }
  },
  {
    "category": "KIM LOẠI 2K",
    "name": "Kim Loại 2 in 1 2K (Metal Coat 2in1 2K)",
    "prices": { "1kg": 205200, "5kg": 972000, "20kg": 3780000 }
  }
];

const YIELDS = {
    'phun': 5,
    'lau': 12,
    'quet': 8
};

// Initialize Lucide icons
function updateIcons() {
    lucide.createIcons();
}

function setupLayers() {
    const layerCountSelect = document.getElementById('layerCount');
    layerCountSelect.addEventListener('change', renderLayers);
    
    const areaInput = document.getElementById('area');
    areaInput.addEventListener('input', calculateTotal);
    
    renderLayers();
}

function renderLayers() {
    const container = document.getElementById('layers-container');
    const count = parseInt(document.getElementById('layerCount').value);
    
    container.innerHTML = '';
    
    for (let i = 1; i <= count; i++) {
        const section = document.createElement('section');
        section.className = 'layer-section card';
        section.innerHTML = `
            <div class="layer-title">
                <i data-lucide="info"></i> Lớp thứ ${i}
            </div>
            <div class="input-group">
                <label>Sản phẩm</label>
                <select class="product-select" data-layer="${i}">
                    ${products.map(p => `<option value="${p.name}">${p.name}</option>`).join('')}
                </select>
            </div>
            <div class="layer-grid">
                <div class="input-group">
                    <label>Phương pháp</label>
                    <select class="method-select" data-layer="${i}">
                        <option value="phun">Phun (5m²/kg)</option>
                        <option value="lau">Lau (12m²/kg)</option>
                        <option value="quet" selected>Quét Cọ (8m²/kg)</option>
                    </select>
                </div>
                <div class="input-group">
                    <label>Số lần sơn</label>
                    <select class="count-select" data-layer="${i}">
                        <option value="1">1 lần</option>
                        <option value="2" selected>2 lần</option>
                    </select>
                </div>
            </div>
        `;
        container.appendChild(section);
    }
    
    updateIcons();
    
    container.querySelectorAll('select').forEach(sel => {
        sel.addEventListener('change', calculateTotal);
    });
    
    calculateTotal();
}

function calculateTotal() {
    const area = parseFloat(document.getElementById('area').value) || 0;
    const container = document.getElementById('layers-container');
    const breakdownContainer = document.getElementById('results-breakdown');
    const layerSections = container.querySelectorAll('.layer-section');
    
    let totalKg = 0;
    let totalCost = 0;
    breakdownContainer.innerHTML = '';
    
    document.getElementById('result-area-summary').textContent = `Định mức cho: ${area.toLocaleString('vi-VN')} m²`;

    layerSections.forEach((section, index) => {
        const productName = section.querySelector('.product-select').value;
        const method = section.querySelector('.method-select').value;
        const methodName = section.querySelector('.method-select').options[section.querySelector('.method-select').selectedIndex].text.split(' (')[0];
        const count = parseInt(section.querySelector('.count-select').value);
        
        // Find product price data
        const product = products.find(p => p.name === productName);
        const prices = product ? product.prices : { "1kg": 0, "5kg": 0, "20kg": 0 };
        
        const yieldValue = YIELDS[method];
        let layerKg = 0;
        if (yieldValue > 0) {
            layerKg = (area / yieldValue) * count;
        }
        totalKg += layerKg;

        if (area > 0) {
            const packCounts = getPackCounts(layerKg);
            const subDetail = [];
            let layerCost = 0;

            if (packCounts.c20 > 0) {
                const sub = packCounts.c20 * prices["20kg"];
                layerCost += sub;
                subDetail.push(`<div>${packCounts.c20} Thùng 20Kg x ${prices["20kg"].toLocaleString('vi-VN')}đ = ${sub.toLocaleString('vi-VN')}đ</div>`);
            }
            if (packCounts.c5 > 0) {
                const sub = packCounts.c5 * prices["5kg"];
                layerCost += sub;
                subDetail.push(`<div>${packCounts.c5} Thùng 5Kg x ${prices["5kg"].toLocaleString('vi-VN')}đ = ${sub.toLocaleString('vi-VN')}đ</div>`);
            }
            if (packCounts.c1 > 0) {
                const sub = packCounts.c1 * prices["1kg"];
                layerCost += sub;
                subDetail.push(`<div>${packCounts.c1} Lon 1Kg x ${prices["1kg"].toLocaleString('vi-VN')}đ = ${sub.toLocaleString('vi-VN')}đ</div>`);
            }

            totalCost += layerCost;

            const breakdownDiv = document.createElement('div');
            breakdownDiv.className = 'breakdown-layer';
            breakdownDiv.innerHTML = `
                <div class="layer-info-row">
                    <span class="layer-name">Lớp thứ ${index + 1} (${layerKg.toFixed(2)} Kg)</span>
                    <span class="layer-price-total">Thành tiền: ${layerCost.toLocaleString('vi-VN')}đ</span>
                </div>
                <span class="layer-product-detail">${productName} - sơn ${count} lớp - phương pháp ${methodName}</span>
                <div class="price-calc-details">
                    ${subDetail.join('')}
                </div>
            `;
            breakdownContainer.appendChild(breakdownDiv);
        }
    });
    
    document.getElementById('total-kg').textContent = totalKg.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    if (totalCost > 0) {
        document.getElementById('total-cost-container').style.display = 'block';
        document.getElementById('total-cost').textContent = totalCost.toLocaleString('vi-VN');
    } else {
        document.getElementById('total-cost-container').style.display = 'none';
    }
}

function getPackCounts(kg) {
    let remaining = kg;
    const counts = { c20: 0, c5: 0, c1: 0 };
    
    counts.c20 = Math.floor(remaining / 20);
    remaining %= 20;
    
    counts.c5 = Math.floor(remaining / 5);
    remaining %= 5;
    
    counts.c1 = Math.ceil(remaining);
    
    return counts;
}

// Start
setupLayers();
updateIcons();
