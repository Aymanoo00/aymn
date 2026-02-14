// Canvas and Context
const canvas = document.getElementById('previewCanvas');
const ctx = canvas.getContext('2d');

// Input Elements
const shopNameInput = document.getElementById('shopName');
const phoneInput = document.getElementById('phoneNumber');
const extraTextInput = document.getElementById('extraText');
const loadingIndicator = document.getElementById('loadingIndicator');

// State
let currentTemplate = 1;
let templateImages = {};
let isFontLoaded = false;

// Template Configuration (3 Templates, initially identical)
const templateConfig = {
    src: 'images/template1.png', // Default, will be overridden
    masks: [
        { x: 540, y: 195, w: 850, h: 140, r: 70, color: '#FFFFFF' },
        { x: 450, y: 720, w: 450, h: 90, r: 45, color: '#FFFFFF' },
        { x: 500, y: 800, w: 400, h: 60, r: 10, color: '#312783' }
    ],
    shopName: { x: 540, y: 210, size: 70, color: '#4A148C', align: 'center', maxWidth: 800 },
    phone: { x: 450, y: 725, size: 60, color: '#4A148C', align: 'center', maxWidth: 400 },
    extra: { x: 500, y: 805, size: 40, color: '#FFFFFF', align: 'center', maxWidth: 600 }
};

const templates = {
    1: { ...templateConfig, src: 'images/template1.png' },
    2: { ...templateConfig, src: 'images/template2.png' },
    3: { ...templateConfig, src: 'images/template3.png' }
};

// Preload Images
function preloadImages() {
    const promises = [];
    for (let key in templates) {
        promises.push(new Promise((resolve) => {
            const img = new Image();
            img.src = templates[key].src;
            img.onload = () => {
                templateImages[key] = img;
                resolve();
            };
            img.onerror = () => {
                console.error("Failed to load image:", templates[key].src);
                resolve(); // Resolve anyway to avoid blocking
            };
        }));
    }
    return Promise.all(promises);
}

// Helper: Draw Rounded Rectangle
function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke === 'undefined') {
        stroke = true;
    }
    if (typeof radius === 'undefined') {
        radius = 5;
    }
    if (typeof radius === 'number') {
        radius = {tl: radius, tr: radius, br: radius, bl: radius};
    } else {
        var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
        for (var side in defaultRadius) {
            radius[side] = radius[side] || defaultRadius[side];
        }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
        ctx.fillStyle = fill;
        ctx.fill();
    }
    if (stroke) {
        ctx.strokeStyle = stroke;
        ctx.stroke();
    }
}

// Draw Function
function drawCanvas() {
    if (!templateImages[currentTemplate]) return;

    // Clear Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Template Background
    ctx.drawImage(templateImages[currentTemplate], 0, 0, 1080, 1080);

    const config = templates[currentTemplate];

    // Draw Masks (to hide existing text)
    if (config.masks) {
        config.masks.forEach(mask => {
            // Calculate top-left from center coordinates
            const x = mask.x - (mask.w / 2);
            const y = mask.y - (mask.h / 2);
            roundRect(ctx, x, y, mask.w, mask.h, mask.r, mask.color, null);
        });
    }

    // Get Data
    const shopName = shopNameInput.value || 'اسم المحل / المركز';
    const phone = phoneInput.value || '779 744 100';
    const extra = extraTextInput.value || 'دعاية وتسويق';

    // Helper to draw text
    const drawText = (text, conf) => {
        ctx.font = `bold ${conf.size}px "IBM Plex Sans Arabic", sans-serif`;
        ctx.fillStyle = conf.color;
        ctx.textAlign = conf.align;
        ctx.textBaseline = 'middle';
        
        // No shadow for flat design on white pill
        ctx.shadowColor = 'transparent';
        
        ctx.fillText(text, conf.x, conf.y, conf.maxWidth);
    };

    drawText(shopName, config.shopName);
    drawText(phone, config.phone);
    drawText(extra, config.extra);
}

// Select Template Function
window.selectTemplate = function(id) {
    currentTemplate = id;
    
    // Update UI
    document.querySelectorAll('.template-card').forEach((el, index) => {
        if (index + 1 === id) {
            el.classList.add('selected', 'border-primary');
            el.querySelector('.check-icon').classList.remove('hidden');
        } else {
            el.classList.remove('selected', 'border-primary');
            el.querySelector('.check-icon').classList.add('hidden');
        }
    });

    drawCanvas();
};

// Download Function
window.downloadImage = function() {
    try {
        const link = document.createElement('a');
        link.download = `al-mayass-design-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    } catch (e) {
        console.error("Download failed:", e);
        alert("عذراً، لا يمكن تحميل الصورة أثناء فتح الملف مباشرة من الجهاز (سبب أمني من المتصفح).\n\nيرجى رفع المشروع على استضافة (مثل Netlify أو Cloudflare) أو استخدام 'Local Server' ليعمل التحميل بشكل صحيح.");
    }
};

// Initialize
async function init() {
    loadingIndicator.classList.remove('hidden');
    
    // Wait for fonts
    document.fonts.ready.then(async () => {
        isFontLoaded = true;
        await preloadImages();
        loadingIndicator.classList.add('hidden');
        drawCanvas();
    });
}

// Event Listeners
shopNameInput.addEventListener('input', drawCanvas);
phoneInput.addEventListener('input', drawCanvas);
extraTextInput.addEventListener('input', drawCanvas);

// Start
init();
