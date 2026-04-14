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
    "category": "SƠN GIẢ GỖ XI MĂNG",
    "name": "Lót Giả Gỗ Tấm Xi Măng (Fiber Cement Wood Primer)",
    "prices": { "1kg": 198000, "3.5kg": 682000 }
  },
  {
    "category": "SƠN GIẢ GỖ XI MĂNG",
    "name": "Màu Giả Gỗ Vách/Trần Tấm Xi Măng (Fiber Cement Plank Paint)",
    "prices": { "1kg": 297000, "3.5kg": 1028500 }
  },
  {
    "category": "SƠN GIẢ GỖ XI MĂNG",
    "name": "Màu Giả Gỗ Sàn Tấm Xi Măng (Fiber Cement Decking Paint)",
    "prices": { "1kg": 385000, "3.5kg": 1355200 }
  },
  {
    "category": "SƠN GIẢ GỖ XI MĂNG",
    "name": "Phủ Bóng Vách/Trần Tấm Xi Măng (Fiber Cement Shield)",
    "prices": { "1kg": 192500, "3.5kg": 662200 }
  },
  {
    "category": "SƠN GIẢ GỖ XI MĂNG",
    "name": "Phủ Bóng Sàn Tấm Xi Măng (Fiber Cement Hard Shield)",
    "prices": { "1kg": 286000, "3.5kg": 990000 }
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
  },
  {
    "category": "PHỤ TRỢ",
    "name": "Chất Đóng Rắn (Hardener)",
    "prices": { "1kg": 799200, "0.5kg": 421200, "0.1kg": 91800 }
  }
];

const YIELDS = {
    'phun': 5,
    'lau': 12,
    'quet': 8
};

const HARDENER_RATIOS = [
    { key: "2K71", value: 10 },
    { key: "MX83", sub: [{ key: "Lót", value: 10 }, { key: "Primer", value: 10 }], default: 15 },
    { key: "2K.33", value: 20 },
    { key: "2K33", value: 20 },
    { key: "2K.56", sub: [{ key: "Lacquer", value: 25 }], default: 20 },
    { key: "2K56", sub: [{ key: "Lacquer", value: 25 }], default: 20 },
    { key: "2K.42", value: 25 },
    { key: "2K42", value: 25 },
    { key: "2K24", value: 20 }
];

function getDefHardener(name) {
    if (!name.includes("2K")) return 0;
    for (const rule of HARDENER_RATIOS) {
        if (name.includes(rule.key)) {
            if (rule.sub) {
                for (const subRule of rule.sub) {
                    if (name.includes(subRule.key)) return subRule.value;
                }
                return rule.default;
            }
            return rule.value;
        }
    }
    return 15; // Global default for other 2K
}

// Initialize Lucide icons
function updateIcons() {
    lucide.createIcons();
}

function setupLayers() {
    const layerCountSelect = document.getElementById('layerCount');
    layerCountSelect.addEventListener('change', () => renderLayers(true));
    
    const areaInput = document.getElementById('area');
    areaInput.addEventListener('input', calculateTotal);
    
    renderLayers();
}

function renderLayers(isReset = false, changedLayerIndex = -1) {
    const container = document.getElementById('layers-container');
    const count = parseInt(document.getElementById('layerCount').value);
    
    const layerSections = Array.from(container.querySelectorAll('.layer-section'));
    const states = isReset ? [] : layerSections.map((sec, idx) => {
        const isThisLayerChanged = (idx + 1) === changedLayerIndex;
        return {
            product: sec.querySelector('.product-search').value,
            method: sec.querySelector('.method-select').value,
            count: sec.querySelector('.count-select').value,
            hardener: isThisLayerChanged ? null : sec.querySelector('.hardener-input')?.value,
            water: sec.querySelector('.water-input')?.value || "0"
        };
    });

    container.innerHTML = '';
    
    for (let i = 1; i <= count; i++) {
        const state = states[i-1] || { 
            product: products[0].name, 
            method: 'quet', 
            count: '2', 
            hardener: null, 
            water: "0" 
        };
        
        const is2K = state.product.includes('2K');
        const defaultH = getDefHardener(state.product);
        const currentH = (state.hardener !== undefined && state.hardener !== null) ? state.hardener : defaultH;

        const section = document.createElement('section');
        section.className = 'layer-section card';
        section.innerHTML = `
            <div class="layer-title">
                <i data-lucide="info"></i> Lớp thứ ${i}
            </div>
            <div class="input-group">
                <label>Sản phẩm (Gõ để tìm nhanh)</label>
                <div class="searchable-select" data-layer="${i}">
                    <input type="text" class="product-search" placeholder="Gõ tên sản phẩm..." value="${state.product}">
                    <div class="select-dropdown">
                        ${products.map(p => `<div class="option-item" data-value="${p.name}">${p.name}</div>`).join('')}
                    </div>
                </div>
            </div>
            <div class="layer-grid">
                <div class="input-group">
                    <label>Phương pháp</label>
                    <select class="method-select" data-layer="${i}">
                        <option value="phun" ${state.method === 'phun' ? 'selected' : ''}>Phun (5m²/kg)</option>
                        <option value="lau" ${state.method === 'lau' ? 'selected' : ''}>Lau (12m²/kg)</option>
                        <option value="quet" ${state.method === 'quet' ? 'selected' : ''}>Quét Cọ (8m²/kg)</option>
                    </select>
                </div>
                <div class="input-group">
                    <label>Số lần sơn</label>
                    <select class="count-select" data-layer="${i}">
                        <option value="1" ${state.count === '1' ? 'selected' : ''}>1 lần</option>
                        <option value="2" ${state.count === '2' ? 'selected' : ''}>2 lần</option>
                    </select>
                </div>
            </div>
            <div class="twok-inputs" style="display: ${is2K ? 'grid' : 'none'}">
                <div class="input-group">
                    <label><i data-lucide="beaker"></i> % Chất đóng rắn</label>
                    <input type="number" class="hardener-input" value="${currentH}" min="0">
                </div>
                <div class="input-group">
                    <label><i data-lucide="droplets"></i> % Nước pha</label>
                    <input type="number" class="water-input" value="${state.water}" min="0">
                </div>
            </div>
        `;
        container.appendChild(section);
        
        // Add search logic for this layer
        const searchInput = section.querySelector('.product-search');
        const dropdown = section.querySelector('.select-dropdown');
        const items = dropdown.querySelectorAll('.option-item');

        searchInput.addEventListener('click', () => {
             document.querySelectorAll('.select-dropdown').forEach(d => d.classList.remove('active'));
             dropdown.classList.add('active');
        });

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            dropdown.classList.add('active');
            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(query) ? 'block' : 'none';
            });
        });

        items.forEach(item => {
            item.addEventListener('mousedown', (e) => {
                const val = e.target.getAttribute('data-value');
                searchInput.value = val;
                dropdown.classList.remove('active');
                renderLayers(false, i); 
            });
        });

        searchInput.addEventListener('blur', () => {
            setTimeout(() => dropdown.classList.remove('active'), 200);
        });
    }
    
    updateIcons();
    
    container.querySelectorAll('.method-select, .count-select').forEach(sel => {
        sel.addEventListener('change', calculateTotal);
    });

    container.querySelectorAll('input').forEach(inp => {
        inp.addEventListener('input', calculateTotal);
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
        const productName = section.querySelector('.product-search').value;
        const method = section.querySelector('.method-select').value;
        const methodName = section.querySelector('.method-select').options[section.querySelector('.method-select').selectedIndex].text.split(' (')[0];
        const count = parseInt(section.querySelector('.count-select').value);
        
        // Find product price data
        const product = products.find(p => p.name === productName);
        const prices = product ? product.prices : { "1kg": 0, "5kg": 0, "20kg": 0 };
        
        // 2K handling
        const is2K = productName.includes('2K');
        const hPer = is2K ? (parseFloat(section.querySelector('.hardener-input').value) || 0) : 0;
        const wPer = is2K ? (parseFloat(section.querySelector('.water-input').value) || 0) : 0;
        const mixedFactor = 1 + (hPer / 100) + (wPer / 100);

        const yieldValue = YIELDS[method];
        let layerBaseKg = 0;
        let layerHardenerKg = 0;

        if (yieldValue > 0) {
            const mixedKgNeeded = (area / yieldValue) * count;
            layerBaseKg = mixedKgNeeded / mixedFactor;
            layerHardenerKg = layerBaseKg * (hPer / 100);
        }
        
        totalKg += (layerBaseKg + layerHardenerKg);

        if (area > 0) {
            const packCounts = getPackCounts(layerBaseKg, prices);
            const purchasedBaseKg = (packCounts.c20 * 20) + (packCounts.c5 * 5) + (packCounts.c35 * 3.5) + (packCounts.c1 * 1);
            const purchasedHardenerKg = purchasedBaseKg * (hPer / 100);

            let layerCost = (packCounts.c20 * (prices["20kg"] || 0)) + (packCounts.c5 * (prices["5kg"] || 0)) + (packCounts.c35 * (prices["3.5kg"] || 0)) + (packCounts.c1 * (prices["1kg"] || 0));
            
            const subDetail = [];
            if (packCounts.c20 > 0) subDetail.push(`<div>${packCounts.c20} Thùng 20Kg x ${(prices["20kg"] || 0).toLocaleString('vi-VN')}đ = ${(packCounts.c20 * (prices["20kg"] || 0)).toLocaleString('vi-VN')}đ</div>`);
            if (packCounts.c5 > 0) subDetail.push(`<div>${packCounts.c5} Thùng 5Kg x ${(prices["5kg"] || 0).toLocaleString('vi-VN')}đ = ${(packCounts.c5 * (prices["5kg"] || 0)).toLocaleString('vi-VN')}đ</div>`);
            if (packCounts.c35 > 0) subDetail.push(`<div>${packCounts.c35} Thùng 3.5Kg x ${(prices["3.5kg"] || 0).toLocaleString('vi-VN')}đ = ${(packCounts.c35 * (prices["3.5kg"] || 0)).toLocaleString('vi-VN')}đ</div>`);
            if (packCounts.c1 > 0) subDetail.push(`<div>${packCounts.c1} Lon 1Kg x ${(prices["1kg"] || 0).toLocaleString('vi-VN')}đ = ${(packCounts.c1 * (prices["1kg"] || 0)).toLocaleString('vi-VN')}đ</div>`);

            // Hardener cost
            if (purchasedHardenerKg > 0) {
                const hardenerProd = products.find(p => p.name.includes("Chất Đóng Rắn"));
                const hPrices = hardenerProd ? hardenerProd.prices : { "1kg": 799200, "0.5kg": 421200, "0.1kg": 91800 };
                
                // User logic: Choose the unit U that "fits" best (closest weight ratio to 1)
                const hUnits = [
                    { size: 1.0, price: hPrices["1kg"], label: "Lon 1Kg" },
                    { size: 0.5, price: hPrices["0.5kg"], label: "Lon 0.5Kg" },
                    { size: 0.1, price: hPrices["0.1kg"], label: "Lon 0.1Kg" }
                ];
                
                // Filter out units with 0 price (if any)
                const validUnits = hUnits.filter(u => u.price > 0);
                
                // Find unit with ratio closest to 1: min | (kg/size) - 1 |
                let bestUnit = validUnits[0];
                let minDiff = Math.abs((purchasedHardenerKg / bestUnit.size) - 1);
                
                validUnits.forEach(u => {
                    const diff = Math.abs((purchasedHardenerKg / u.size) - 1);
                    if (diff < minDiff) {
                        minDiff = diff;
                        bestUnit = u;
                    }
                });

                const unitRatio = purchasedHardenerKg / bestUnit.size;
                const hCost = unitRatio * bestUnit.price;
                layerCost += hCost;
                
                subDetail.push(`<div>+ Đóng rắn: ${unitRatio.toFixed(1)} ${bestUnit.label} x ${bestUnit.price.toLocaleString('vi-VN')}đ = ${hCost.toLocaleString('vi-VN')}đ</div>`);
            }

            totalCost += layerCost;

            const breakdownDiv = document.createElement('div');
            breakdownDiv.className = 'breakdown-layer';
            const mixedNeeded = (area / yieldValue) * count;
            breakdownDiv.innerHTML = `
                <div class="layer-info-row">
                    <span class="layer-name">Lớp thứ ${index + 1} (Cần thi công: ${mixedNeeded.toFixed(2)} Kg)</span>
                    <span class="layer-price-total">Thành tiền: ${layerCost.toLocaleString('vi-VN')}đ</span>
                </div>
                <div class="layer-product-detail">${productName} ${is2K ? `(+${hPer}% ĐR, +${wPer}% Nước)` : ''} - sơn ${count} lớp - phương pháp ${methodName}</div>
                <div class="weight-breakdown">
                    Sơn gốc (mua): ${purchasedBaseKg.toFixed(2)}Kg | Đóng rắn (pha): ${purchasedHardenerKg.toFixed(2)}Kg ${is2K ? `| Nước (pha): ${(purchasedBaseKg * wPer / 100).toFixed(2)}Kg` : ''}
                </div>
                <div class="price-calc-details">
                    ${subDetail.join('')}
                </div>
            `;
            breakdownContainer.appendChild(breakdownDiv);
        }
    });
    
    if (totalCost > 0) {
        document.getElementById('total-cost-container').style.display = 'block';
        document.getElementById('total-cost').textContent = totalCost.toLocaleString('vi-VN');
        
        if (area > 0) {
            document.getElementById('m2-cost-container').style.display = 'block';
            const m2Price = Math.round(totalCost / area);
            document.getElementById('m2-cost').textContent = m2Price.toLocaleString('vi-VN');
            document.getElementById('action-container').style.display = 'block';
        } else {
            document.getElementById('m2-cost-container').style.display = 'none';
            document.getElementById('action-container').style.display = 'none';
        }
    } else {
        document.getElementById('total-cost-container').style.display = 'none';
        document.getElementById('m2-cost-container').style.display = 'none';
        document.getElementById('action-container').style.display = 'none';
    }
}

function exportImage() {
    const target = document.querySelector('.results-card');
    const area = document.getElementById('area').value;
    
    // Smooth scroll to top
    target.scrollIntoView({ behavior: 'smooth' });
    
    // Temporary styling for better export (especially on mobile)
    const originalWidth = target.style.width;
    const isMobile = window.innerWidth <= 480;
    
    if (isMobile) {
        target.style.width = '550px'; // Force a wider look on mobile
    }

    // Force a specific width for the capture to ensure consistency
    const captureWidth = 600;

    setTimeout(() => {
        html2canvas(target, {
            backgroundColor: "#064e3b",
            scale: 2,
            logging: true, // Enable for debugging if needed
            useCORS: true,
            allowTaint: true,
            onclone: (clonedDoc) => {
                const clonedTarget = clonedDoc.querySelector('.results-card');
                clonedTarget.style.width = `${captureWidth}px`;
                clonedTarget.style.borderRadius = '0px';
                clonedTarget.style.boxShadow = 'none';
                
                // Ensure the logo is visible in the clone
                const logo = clonedTarget.querySelector('.logo-image-small');
                if (logo) {
                    logo.style.display = 'block';
                    logo.style.visibility = 'visible';
                }
            }
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `Bao-Gia-Lotus-${area}m2.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            
            // Restore original style
            target.style.width = originalWidth;
        });
    }, 800); // Slightly longer delay to ensure rendering is ready
}

function getPackCounts(kg, prices = {}) {
    let remaining = kg;
    const counts = { c20: 0, c5: 0, c35: 0, c1: 0 };
    
    if (prices["20kg"]) {
        counts.c20 = Math.floor(remaining / 20);
        remaining %= 20;
    }
    
    if (prices["5kg"]) {
        counts.c5 = Math.floor(remaining / 5);
        remaining %= 5;
    } else if (prices["3.5kg"]) {
        counts.c35 = Math.floor(remaining / 3.5);
        remaining %= 3.5;
    }
    
    counts.c1 = Math.ceil(remaining);
    
    return counts;
}

function getHardenerPackCounts(kg) {
    let remaining = Math.round(kg * 10) / 10; // Round to 0.1 decimal
    const counts = { c1: 0, c05: 0, c01: 0 };
    
    counts.c1 = Math.floor(remaining / 1);
    remaining = Math.round((remaining % 1) * 10) / 10;
    
    counts.c05 = Math.floor(remaining / 0.5);
    remaining = Math.round((remaining % 0.5) * 10) / 10;
    
    counts.c01 = Math.ceil(remaining / 0.1);
    
    return counts;
}

// Start
console.log("App Updated v1.2 - 08:52 AM");
setupLayers();
updateIcons();
