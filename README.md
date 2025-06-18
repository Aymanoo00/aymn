<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <title>أيمن للدعاية والتسويق</title>
  <link rel="stylesheet" href="style.css" />
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

  <!-- رأس الصفحة -->
 
  <!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>أيمن للدعاية والإعلان</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
  <style>
    /* قواعد أساسية لإزالة التحرك الأفقي */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html, body {
      overflow-x: hidden;
      font-family: 'Cairo', sans-serif;
    }

    body {
      direction: rtl;
    }

    header {
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 40px 90px;
      border-bottom: 1px solid #ddd;
    }

    .logo img {
      max-height: 50px;
    }

    nav a {
      margin: 0 15px;
      text-decoration: none;
      color: #000066;
      font-weight: bold;
    }

    nav a:hover {
      color: #333399;
    }

    .cta-button {
      border: 2px solid #000066;
      padding: 10px 30px;
      background: transparent;
      color: #000066;
      font-weight: bold;
      text-decoration: none;
      border-radius: 4px;
      transition: 0.3s;
    }

    .cta-button:hover {
      background: #000066;
      color: #fff;
    }

    .hero {
      text-align: center;
      padding: 100px 20px;
      background: #f2f4f8;
    }

    .hero h2 {
      color: #000066;
      font-size: 48px;
    }

    .hero p {
      margin: 20px auto;
      color: #333;
      font-size: 18px;
      max-width: 600px;
      line-height: 1.8;
    }

    .hero .btn {
      background: #000066;
      color: #fff;
      padding: 15px 40px;
      border: none;
      border-radius: 30px;
      text-decoration: none;
      font-weight: bold;
    }

    /* من نحن */
    .about {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      padding: 50px;
      gap: 30px;
    }

    .about-text {
      flex: 1;
      min-width: 300px;
    }

    .about-text h3 {
      background: #000066;
      color: #fff;
      display: inline-block;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 18px;
    }

    .about-text h1 {
      color: #000066;
      margin-top: 15px;
    }

    .about-text p {
      color: #333;
      line-height: 1.8;
      margin-top: 15px;
    }

    .about-text .info-boxes {
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }

    .about-text .info-boxes strong {
      color: #000066;
    }

    .about-img {
      flex: 1;
      min-width: 300px;
      text-align: center;
    }

    .about-img img {
      max-width: 100%;
      border-radius: 30px;
      box-shadow: 0 0 20px rgba(0,0,0,0.1);
    }

  </style>
</head>
<body>

  <!-- Header -->
  <header>
    <div class="logo">
      <img src="logo.png" alt="شعار أيمن">
    </div>
    <nav>
      <a href="#">الرئيسية</a>
      <a href="#">خدماتنا</a>
      <a href="#">أعمالنا</a>
      <a href="#">تواصل معنا</a>
      
    </nav>
    <a href="#" class="cta-button">اطلب استشارة</a>
  </header>

  <!-- Hero -->
  <section class="hero">
    <h2>نبدع لتبرز علامتك</h2>
    <p>نصنع الإبداع بخدمات التصميم والإعلان والموشن لتصل رسالتك لأكثر من 400 عميل.</p>
    <a href="#" class="btn">اكتشف خدماتنا</a>
  </section>

  <!-- About -->
  <section class="about">
    <div class="about-text">
      <h3>من نحن</h3>
      <h1>أيمن للدعاية والإعلان</h1>
      <p>نحن في «أيمن للدعاية والإعلان» نؤمن بأن الإبداع هو سر التميز والنجاح. نقدم حلولاً دعائية وتسويقية متكاملة تجمع بين الفكرة المبتكرة والتنفيذ الاحترافي.</p>
      <div class="info-boxes">
        <div>
          <strong>هدفنا</strong>
          <p>تحقيق نتائج ملموسة عبر استراتيجيات تسويقية مبتكرة ومستدامة.</p>
        </div>
        <div>
          <strong>مميزاتنا</strong>
          <p>إبداع وتقنيات حديثة تضمن تحقيق أفضل أداء لمشاريع عملائنا.</p>
        </div>
        <div>
          <strong>رؤيتنا</strong>
          <p>أن نكون الخيار الأول لكل علامة تجارية تبحث عن التميز والريادة.</p>
        </div>
      </div>
    </div>
    <div class="about-img">
      <img src="about-image.jpg" alt="من نحن">
    </div>
  </section>

</body>
</html>




  <!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <title>خدماتنا</title>
  <!-- استدعاء مكتبة Font Awesome للأيقونات -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <!-- استدعاء خط عربي (Cairo) -->
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <section class="services">
    <h2>خدماتنا</h2>
    <div class="services-container">

      <div class="service-box">
        <i class="fas fa-paint-brush"></i>
        <h3>تصاميم الهويات التجارية</h3>
        <p>تصاميم الهويات البصرية مثل الشعارات والكروت والفواتير والبروشورات والمجلات وغيرها.</p>
      </div>

      <div class="service-box">
        <i class="fas fa-envelope"></i>
        <h3>إدارة الصفحات</h3>
        <p>إنشاء وإدارة صفحات مواقع التواصل الاجتماعي، تشمل إدارة الحملات الممولة والرد على التعليقات والرسائل والتفاعل مع العملاء.</p>
      </div>

      <div class="service-box">
        <i class="fas fa-pen-nib"></i>
        <h3>كتابة المحتوى</h3>
        <p>كتابة محتوى تسويقي للصفحات أو تعريفي للشركات.</p>
      </div>

      <div class="service-box">
        <i class="fas fa-film"></i>
        <h3>الموشن جرافيك</h3>
        <p>تقنية سهلة وجذابة لتوضيح الأفكار وإيصال الرسائل ببساطة وبطريقة شيقة من خلال تحريك الرسوم ودمجها مع صوت أو موسيقى.</p>
      </div>

      <div class="service-box">
        <i class="fas fa-pencil-ruler"></i>
        <h3>التصميم الجرافيكي</h3>
        <p>نقدم خدمة التصميم الجرافيكي لنساعدك في إبراز هويتك بأسلوب احترافي وجذاب، نصمم الشعارات، البوسترات، الهوية البصرية.</p>
      </div>

      <div class="service-box">
        <i class="fas fa-chart-line"></i>
        <h3>التسويق الإلكتروني</h3>
        <p>كتابة الخطط التسويقية مما يساعدك في زيادة الوعي بالعلامة التجارية والوصول لأكبر عدد من الجمهور المهتم لرفع المبيعات أو الخدمات.</p>
      </div>

    </div>
  </section>

</body>
</html>






  <title>معرض أعمالنا</title>
  <style>
    body {
      font-family: sans-serif;
      background: #fff;
      text-align: center;
      direction: rtl;
    }
    h2 {
      color: #1845B3;
    }
    .filters {
      margin: 20px 0;
    }
    .filters button {
      background: #eee;
      border: none;
      padding: 10px 20px;
      margin: 5px;
      border-radius: 20px;
      cursor: pointer;
    }
    .filters button.active {
      background: #1845B3;
      color: #fff;
    }
    .gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }
    .gallery-item {
      background: linear-gradient(to bottom right, #042B8C, #1D68D9);
      width: 200px;
      height: 250px;
      border-radius: 20px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      position: relative;
      overflow: hidden;
      transition: transform 0.3s;
    }
    .gallery-item:hover {
      transform: translateY(-10px);
    }
    .hidden {
      display: none;
    }
  </style>
</head>
<body>
  <h2>معرض أعمالنا</h2>

  <div class="filters">
    <button class="active" onclick="filterItems('all')">الكل</button>
    <button onclick="filterItems('بوستات')">بوستات</button>
    <button onclick="filterItems('المطبوعات')">التهاني والمناسبات</button>
    <button onclick="filterItems('الموشن')">تصاميم الجمعة</button>
    <button onclick="filterItems('الشعارات')">الشعارات والهويات</button>
  </div>
  
  <div class="gallery">
    <div class="gallery-item بوستات">
      <img src="img/post1.jpg.png" alt="بوستات" style="width: 100%; border-radius: 10px;">
    </div>
    <div class="gallery-item المطبوعات">المطبوعات</div>
    <div class="gallery-item الموشن">تهاني يوم الجمعة</div>
    <div class="gallery-item الشعارات">
      <img src="img/post2.jpg.png" alt="شعارات" style="width: 100%; border-radius: 10px;">
    </div>
    
    <div class="gallery-item بوستات">
      <img src="img/post3.jpg.jpg" alt="بوستات" style="width: 100%; border-radius: 10px;">
    </div>
  </div>
  
  <style>
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
  
    .gallery-item {
      background: #f5f5f5;
      padding: 10px;
      border-radius: 10px;
      text-align: center;
      font-weight: bold;
    }
  
    .filters {
      margin-bottom: 20px;
      text-align: center;
    }
  
    .filters button {
      margin: 5px;
      padding: 10px 20px;
      border: none;
      background-color: #164a70;
      color: white;
      cursor: pointer;
      border-radius: 5px;
    }
  
    .filters button.active {
      background-color: #0d2c45;
    }
  
    .hidden {
      display: none;
    }
  </style>
  
  <script>
    function filterItems(category) {
      let items = document.querySelectorAll('.gallery-item');
      let buttons = document.querySelectorAll('.filters button');
      buttons.forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
      items.forEach(item => {
        if (category === 'all') {
          item.classList.remove('hidden');
        } else {
          item.classList.toggle('hidden', !item.classList.contains(category));
        }
      });
    }
  </script>
    <!-- زرار الانتقال -->
<a href="#gallery" class="scroll-btn">
  شاهد معرض الأعمال →
</a>
  
  <title>اعمالنا الابداعية</title>
  <style>
    body {
      font-family: sans-serif;
      background: #fff;
      margin: 0;
      padding: 50px;
      direction: rtl;
    }

    .section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: auto;
    }

    .text {
      max-width: 50%;
    }

    .text h2 {
      color: #1544A4;
      font-size: 40px;
      margin: 0 0 20px 0;
    }

    .text p {
      color: #555;
      line-height: 1.8;
      font-size: 18px;
    }

    .text a {
      display: inline-block;
      margin-top: 20px;
      text-decoration: none;
      color: #1544A4;
      font-weight: bold;
      border-bottom: 2px solid #1544A4;
      transition: 0.3s;
    }

    .text a:hover {
      color: #0a2a6c;
      border-color: #0a2a6c;
    }

    .images {
      position: relative;
      width: 400px;
      height: 500px;
    }

    .images img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.2);
      transition: transform 0.5s ease, box-shadow 0.5s ease;
      cursor: pointer;
    }

    .images img:nth-child(1) {
      z-index: 3;
      transform: rotate(0deg);
    }

    .images img:nth-child(2) {
      z-index: 2;
      transform: rotate(-5deg) translateX(-20px);
    }

    .images img:nth-child(3) {
      z-index: 1;
      transform: rotate(-10deg) translateX(-40px);
    }

    .images:hover img:nth-child(1) {
      transform: rotate(5deg) translateX(20px);
    }

    .images:hover img:nth-child(2) {
      transform: rotate(0deg) translateX(0);
    }

    .images:hover img:nth-child(3) {
      transform: rotate(-5deg) translateX(-20px);
    }
  </style>
</head>
<body>
  <div class="section">
    <div class="text">
      <h2>بعض من اعمالنا الابداعية في مجاناً</h2>
      <p>
        في كل مشروع نقدمه، نترجم الأفكار إلى إبداعات تلهم وتحدث الأثر.
        كل تفصيلة صممت بعناية لتعكس رؤية عملائنا وتروي حكاية نجاح متكاملة.
        نحن في اسلوب ميديا نصنع قصصاً تستحق أن تُروى، بشغف دائم لتقديم الأفضل دائماً.
      </p>
      <a href="#">شاهد معرض الأعمال →</a>
    </div>
    <div class="images">
      <img src="img/img1.png"alt="img1"/>
      <img src="https://via.placeholder.com/400x500/0f3a88/fff?text=الصورة+2" alt="img2" />
      <img src="https://via.placeholder.com/400x500/0a2a6c/fff?text=الصورة+3" alt="img3" />
    </div>
  </div>
</body>
</html>

<!-- قسم معرض الأعمال -->
<section id="gallery" class="gallery-section">
  <!-- هنا معرض أعمالك -->
</section>


    <h2>باقتنا الشهرية</h2>
  
    <div class="package">
      <h3>الباقة الأساسية</h3>
      <p class="price"> ريال / شهر</p>
      <ul>
        <li>10 تصاميم سوشيال</li>
        <li>2 موشن جرافيك قصير</li>
        <li>إدارة حسابات التواصل</li>
      </ul>
      <button>اطلب الآن</button>
    </div>
  
    <div class="package">
      <h3>الباقة المتقدمة</h3>
      <p class="price"> ريال / شهر</p>
      <ul>
        <li>20 تصميم سوشيال</li>
        <li>4 موشن جرافيك قصير</li>
        <li>تصميم محتوى حصري</li>
        <li>إدارة حسابات التواصل</li>
      </ul>
      <button>اطلب الآن</button>
    </div>
  
    <div class="package">
      <h3>الباقة المميزة</h3>
      <p class="price"> ريال / شهر</p>
      <ul>
        <li>30 تصميم سوشيال</li>
        <li>6 موشن جرافيك</li>
        <li>تصميم حملات إعلانية</li>
        <li>إدارة حسابات التواصل</li>
      </ul>
      <button>اطلب الآن</button>
    </div>
  </section>
  <section class="services" id="services">
    <!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" /><!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <title>مميزاتنا بحركة مستمرة</title>
  <!-- الخط -->
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
  <!-- Font Awesome للأيقونات -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    body {
      font-family: 'Cairo', sans-serif;
      direction: rtl;
      background: #f5f5f5;
      margin: 0;
      overflow-x: hidden;
    }

    .features {
      text-align: center;
      padding: 50px 20px;
    }

    .features h2 {
      font-size: 36px;
      margin-bottom: 40px;
      color: #000066;
    }

    .features-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .feature-box {
      background: #fff;
      border-radius: 20px;
      padding: 40px 20px;
      text-align: center;
      box-shadow: 0 8px 16px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .feature-box:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 24px rgba(0,0,0,0.15);
    }

    .feature-box i {
      font-size: 50px;
      color: #000066;
      margin-bottom: 20px;
      /* حركة مستمرة */
      animation: bounce 2s infinite;
    }

    .feature-box h3 {
      font-size: 22px;
      color: #000066;
      margin-bottom: 15px;
    }

    .feature-box p {
      font-size: 16px;
      color: #555;
      line-height: 1.7;
    }

    /* حركة الايقونة */
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

  </style>
</head>
<body>

  <section class="features">
    <h2>مميزاتنا</h2>
    <div class="features-container">
      <div class="feature-box">
        <i class="fas fa-bolt"></i>
        <h3>سرعة التنفيذ</h3>
        <p>تنفيذ طلباتك بسرعة مع أعلى درجات الدقة والجودة.</p>
      </div>
      <div class="feature-box">
        <i class="fas fa-headset"></i>
        <h3>دعم متواصل</h3>
        <p>دعم مستمر واستجابة سريعة في أي وقت.</p>
      </div>
      <div class="feature-box">
        <i class="fas fa-star"></i>
        <h3>جودة عالية</h3>
        <p>خدماتنا بأعلى جودة ومعايير احترافية.</p>
      </div>
    </div>
  </section>

</body>
</html>


<!-- قسم آراء عملائنا -->
<section class="testimonials-grid" id="testimonials">
  <div class="container">
    <h2 class="section-title">آراء عملائنا</h2>
    <div class="testimonials-cards">
      <div class="testimonial-card">
        <img src="images/client1.jpg" alt="عميل 1">
        <p>“أفضل شركة تعاملت معها من حيث السرعة والجودة.”</p>
        <h4>محمد أحمد</h4>
      </div>
      <div class="testimonial-card">
        <img src="images/client2.jpg" alt="عميل 2">
        <p>“خدمة ممتازة وفريق عمل محترف.”</p>
        <h4>سارة علي</h4>
      </div>
      <div class="testimonial-card">
        <img src="images/client3.jpg" alt="عميل 3">
        <p>“أنصح الجميع بهم، فعلاً يستحقون الثقة.”</p>
        <h4>خالد محمد</h4>
      </div>
      <!-- أضف المزيد إذا أردت -->
    </div>
  </div>
</section>
<!-- قسم شركاؤنا بالنجاح -->
<section class="partners" id="partners">
  <div class="container">
    <h2 class="section-title">شركاؤنا بالنجاح</h2>
    <div class="partners-logos">
      <img src="images/partner1.png" alt="شريك 1">
      <img src="images/partner2.png" alt="شريك 2">
      <img src="images/partner3.png" alt="شريك 3">
      <img src="images/partner4.png" alt="شريك 4">
      <!-- أضف المزيد إذا أردت -->
    </div>
  </div>
</section>




  
  <!-- العملاء -->
  <section class="clients">
    <h2>عملاؤنا</h2>
    <p>نفخر بخدمة أكثر من 400 عميل في مختلف القطاعات.</p>
  </section>
<div class="company-icons">
  <img src="icons/logo.svg" alt="شعار الشركة" width="100" />
  <img src="icons/partner1.png" alt="شريك النجاح 1" width="80" />
  <img src="icons/award1.png" alt="جائزة النجاح" width="80" />
</div>
<section id="contact-form">
  <h2>استبيان الطلب</h2>
  <form id="whatsapp-form">
    <label for="name">الاسم:</label>
    <input type="text" id="name" placeholder="اكتب اسمك" required>

    <label for="request">الطلب:</label>
    <textarea id="request" placeholder="اكتب طلبك" required></textarea>

    <label for="phone">رقم الهاتف:</label>
    <input type="tel" id="phone" placeholder="اكتب رقم هاتفك" required>

    <button type="submit">إرسال إلى واتساب</button>
  </form>
</section>

  <!-- تذييل -->
  <footer class="footer">
    <p>© 2025 أيمن للدعاية والتسويق. جميع الحقوق محفوظة.</p>
    <p>للتواصل: 779744100</p>
  </footer>

  <footer>
    <div class="footer-container">
  
      <footer>
        <div class="footer-container">
      
          <div class="footer-section">
            <!-- شعارك من المسار الصحيح -->
            <img src="mig/mylogo" alt="شعار أيمن" class="footer-logo">
            <p>
              في كل مشروع نقدمه، نترجم الأفكار إلى إبداعات تلامس جمهورك وتحقق التأثير المطلوب. نحن نصنع قصصًا ناجحة تُروى بشغف وباحترافية.
            </p>
          </div>
      
          <div class="footer-section">
            <h3>تفاصيل التواصل</h3>
            <p><i class="fas fa-envelope"></i> info@aymanmedia.com</p>
            <p><i class="fas fa-phone"></i> 779744100</p>
            <p><i class="fas fa-phone"></i> 737672827</p>
            <p><i class="fas fa-phone"></i> 779376236</p>
            <p><i class="fas fa-map-marker-alt"></i> البيضاء - المدينة - الشارع العام</p>
          </div>
      
          <div class="footer-section">
            <h3>مواقع التواصل الاجتماعي</h3>
            <div class="social-icons">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-tiktok"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
      
        </div>
      
        <p class="copyright">
          © 2025 جميع الحقوق محفوظة لدى أيمن للدعاية والإعلان
        </p>
      </footer>
      <header>
       
