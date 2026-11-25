/* ==========================================================================
   WILDAN PORTFOLIO — BILINGUAL LANGUAGE SYSTEM (ID / EN)
   Full Bahasa Indonesia & Full English Switcher
   ========================================================================== */
(function () {
  const I18N_UI = {
    en: {
      pageTitle: 'Wildan — Creative Designer, Video Editor & AI Creator',
      skipLink: 'Skip to main content',
      navHome: 'Home',
      navPortfolio: 'Portfolio',
      navFaq: 'FAQ',
      navContact: 'Contact',
      navMenu: 'Menu',
      navClose: 'Close',
      heroEyebrow: 'Creative Designer & AI Specialist',
      heroTitle1: 'Turning Ideas Into',
      heroTitle2: 'Visual Stories.',
      heroRating: '500+ projects delivered',
      heroCtaTalk: "Let's Talk",
      heroCtaWork: 'View Work',
      heroFlipTitle: 'Show next photo',
      pill1: 'Content Creator',
      pill2: 'Video Editor',
      pill3: 'Social Media Specialist',
      pill4: 'Graphic Designer',
      pill5: 'Motion Designer',
      pill6: 'AI Creative',
      portfolioEyebrow: 'Portfolio',
      portfolioTitle: 'Selected Work',
      portfolioDesc: 'Explore projects across Video Editing, AI UGC, AI Motion, Graphic Design, AI Visual Design, Advertising, YouTube, and Web & Landing Pages.',
      filterAll: 'All Projects',
      filterVideo: 'Video Editing',
      filterAiUgc: 'AI UGC Videos',
      filterAiMotion: 'AI Motion Videos',
      filterDesign: 'Graphic Design',
      filterAiVisual: 'AI Visual Design',
      filterAds: 'Advertising',
      filterYoutube: 'YouTube',
      filterWeb: 'Website & Landing Pages',
      servicesEyebrow: 'Services',
      servicesTitle: 'What we do best',
      whatIDo: 'WHAT I DO',
      focusLabel: 'Focus:',
      srv1Title: 'Video Editing',
      srv1Desc: 'Editing Reels, TikTok, commercial videos, and podcast production.',
      srv1Text: 'I create engaging short-form and long-form video content for social media, brands, and digital campaigns. My work includes cutting and pacing, storytelling, transitions, sound design, color correction, subtitles, product videos, promotional content, and social media reels.',
      srv1Focus: 'Editing Reels · TikTok · Commercial · Podcast',
      srv1Link: 'View video works',
      srv2Title: 'AI UGC Videos',
      srv2Desc: 'AI influencer, testimonial, and high-converting product UGC video creatives.',
      srv2Text: 'I create high-converting AI UGC video campaigns using realistic AI digital avatars, synthetic influencer testimonials, and product reviews designed to build credibility and drive engagement on TikTok, Reels, and Meta Ads.',
      srv2Focus: 'AI Influencer · Testimonial · Product UGC · Social Proof',
      srv2Link: 'View AI UGC works',
      srv3Title: 'AI Motion Videos',
      srv3Desc: 'Image-to-video, AI cinematic storytelling, and AI-driven product animation.',
      srv3Text: 'I produce dynamic motion visuals combining leading generative AI video models (Kling, Runway, Dreamina, VEO) with professional post-production. My work spans cinematic scene generation, dynamic AI camera moves, product animation, and rhythmic video effects.',
      srv3Focus: 'Image-to-Video · AI Cinematic · AI Product Animation',
      srv3Link: 'View AI motion works',
      srv4Title: 'Graphic Design',
      srv4Desc: 'Poster, flyer, logo, banner, and social media carousels.',
      srv4Text: 'I design visual assets for brands, products, and digital campaigns, including social media posts, promotional banners, posters, carousels, product visuals, packaging concepts, and other marketing materials.',
      srv4Focus: 'Poster · Flyer · Logo · Banner · Carousel',
      srv4Link: 'View design works',
      srv5Title: 'AI Visual Design',
      srv5Desc: 'AI product photography, AI fashion concepts, and commercial visual campaigns.',
      srv5Text: 'I produce commercial-grade visual assets using generative AI image generation, including studio-quality AI product photography, AI fashion editorials, visual campaigns, and realistic digital concepts for e-commerce and brand marketing.',
      srv5Focus: 'AI Product Photography · AI Fashion · Visual Campaign',
      srv5Link: 'View AI visual works',
      srv6Title: 'Advertising',
      srv6Desc: 'Meta Ads, TikTok Ads, and promotional creatives.',
      srv6Text: 'I create visual content for digital advertising and promotional campaigns, including Meta and TikTok ad creatives, product-focused videos, promotional graphics, creative variations, and content designed to communicate offers clearly.',
      srv6Focus: 'Meta Ads · TikTok Ads · Promotional Creatives',
      srv6Link: 'View advertising works',
      srv7Title: 'YouTube',
      srv7Desc: 'Long-form video, Shorts, and thumbnail design.',
      srv7Text: 'I handle end-to-end YouTube content production, from editing and storytelling to subtitles, sound design, pacing, thumbnails, and long-form video optimization for a stronger viewing experience.',
      srv7Focus: 'Long-form Video · Shorts · Thumbnail',
      srv7Link: 'View YouTube works',
      statsEyebrow: 'By the numbers',
      statsTitle: 'Proof in the work, not the words.',
      stat1Label: 'Projects delivered',
      stat2Label: 'Client retention',
      stat3Label: 'Brands handled',
      toolsEyebrow: 'Tools & Stack',
      toolsTitle: 'Software & Generative AI Stack',
      toolsDesc: 'Powered by industry-standard creative applications & state-of-the-art AI models.',
      toolRole1: 'Video Editing',
      toolRole2: 'Motion Graphics',
      toolRole3: 'Graphic Design',
      toolRole4: 'Vector & Logos',
      toolRole5: 'UI/UX & Layout',
      toolRole6: 'Visual Content',
      toolRole7: 'Reels & Shortform',
      toolRole8: 'Script & Ideation',
      toolRole9: 'Creative AI',
      toolRole10: 'Multimodal AI',
      toolRole11: 'Agentic Systems',
      toolRole12: 'Generative Video',
      toolRole13: 'Cinematic Video',
      toolRole14: 'AI Motion & VFX',
      toolRole15: 'AI Digital Art',
      toolRole16: 'AI Voice & Audio',
      testiEyebrow: 'Client Feedback',
      testiTitle: 'What Clients Say',
      testi1Quote: '"Thank you so much! The image quality is top-notch, super clean and sharp in HD. It truly met my expectations and even looks better than the original. Wishing you continued success!"',
      testi1Role: 'E-Commerce Specialist',
      testi2Quote: '"Hey, leaving a review here! I really love the super HD quality, it completely met my expectations 😍 The image details are so crisp it doesn\'t even look edited, genuinely awesome!"',
      testi2Role: 'Owner, Yuntea',
      testi3Quote: '"Awesome!! The product images look crystal clear, sharp, and not pixelated at all... communication was also very responsive and satisfying. Wishing you success always!"',
      testi3Role: 'SME Business Owner',
      faqEyebrow: 'Questions',
      faqTitle: 'Frequently Asked Questions',
      faq1Q: 'What is your typical turnaround time?',
      faq1A: 'For short-form Reels, TikToks, and social ads, turnaround is typically 24-48 hours. Larger commercial edits and motion graphics packages take 5-10 business days depending on scope.',
      faq2Q: 'Do you accept remote projects?',
      faq2A: 'Yes! I work with clients and companies across Indonesia and globally. We communicate smoothly via WhatsApp (0822-5056-1757), Email, Slack, or Google Meet.',
      faq3Q: 'How many revisions are included?',
      faq3A: 'All packages include 2 rounds of full revisions to ensure your complete satisfaction. Feedback is easily marked up step by step.',
      faq4Q: 'Can you create custom AI visual assets?',
      faq4A: 'Engineered with ChatGPT, Gemini, Google Flow Labs, Kling AI, Leonardo AI, and ElevenLabs to generate unique images, voiceovers, and video sequences tailored specifically to your brand.',
      footerCta1: 'Have a project in mind?',
      footerCta2: "Let's get to work.",
      footerWaBtn: 'WhatsApp Me',
      footerTagline: 'Creative Designer & Video Specialist crafting high-converting visual assets.',
      footerColNav: 'Navigation',
      footerColServices: 'Services',
      footerColSocial: 'Social',
      footerSrv1: 'Video Editing',
      footerSrv2: 'Motion Graphics',
      footerSrv3: 'Graphic Design',
      footerSrv4: 'AI Art Creation',
      overlaySub1: 'Visual Experiences',
      overlaySub2: 'Video, Design & AI Works',
      overlaySub3: 'Questions & Answers',
      overlaySub4: 'WhatsApp & Inquiries',
      overlayAvail: 'Available for Projects',
      overlayRole: 'Creative Designer & Video Specialist',
      overlayBio: 'Crafting high-converting video edits, futuristic AI digital art, motion graphics & brand creative campaigns that move people.',
      overlayLocLabel: 'Location',
      overlayLocVal: 'Indonesia • Remote Worldwide',
      overlaySocialsLabel: 'Socials',
      overlayWaDirect: 'Direct WhatsApp Chat',
      overlayLocalTime: 'Local time',
      overlayStartLink: 'Direct WhatsApp Chat →',
      reqEyebrow: 'Start a project',
      reqTitle: "Tell us what you're building.",
      reqNameLabel: 'Name',
      reqNamePlaceholder: 'Your name',
      reqEmailLabel: 'Email',
      reqEmailPlaceholder: 'you@company.com',
      reqProjLabel: 'Project',
      reqProjPlaceholder: 'A few words about your project, timeline, and budget.',
      reqNote: 'Redirects to instant WhatsApp chat.',
      reqSubmit: 'Send request',
      reqConnecting: 'Connecting WhatsApp…',
      reqSuccessTitle: 'Request received',
      reqSuccessDesc: 'Opening WhatsApp chat with Wildan...',
      zoomPreviewTitle: 'Photo Preview',
      zoomOutTitle: 'Zoom out',
      zoomResetTitle: 'Reset zoom',
      zoomInTitle: 'Zoom in',
      zoomOpenTitle: 'Open original image',
      zoomCloseTitle: 'Close',
      zoomPrevTitle: 'Previous work',
      zoomNextTitle: 'Next work',
      zoomHint: 'Click or pinch to zoom · Use arrow keys to navigate works',
      // Portfolio dynamic UI strings
      showMore: 'Show More',
      showMoreSuffix: 'more',
      showLess: 'Show Less',
      cardWorksUnit: 'works',
      cardInternalVps: 'Internal • VPS',
      cardLiveWeb: 'Live website',
      cardViewProj: 'View project',
      cardWebScreenshot: 'WEBSITE SCREENSHOT',
      cardWebLive: 'LIVE WEBSITE',
      cardViewCollectionAria: 'View collection',
      modalWorksInCollection: 'works in collection',
      modalInternalVps: 'Internal application • VPS',
      modalLiveWeb: 'Live website',
      modalProjectSummary: 'Project overview',
      modalZoomOverlay: 'Enlarge work ↗',
      modalZoomFullOverlay: '🔍 Click for Fullscreen Zoom',
      modalYoutubeBtn: '▶ Visit YouTube Channel',
      modalCollectionHeading: 'Work collection',
      modalSelectVideo: 'Select a video to play',
      modalSelectImage: 'Select a work to enlarge',
      modalPlayAria: 'Play',
      modalEnlargeAria: 'Enlarge',
      modalChallenge: 'Challenge',
      modalSolution: 'Creative approach',
      modalResults: 'Project outcomes',
      modalRole: 'ROLE',
      modalStack: 'STACK',
      modalDeployment: 'DEPLOYMENT',
      modalLink: 'LINK',
      modalOpenLink: 'Open',
      modalPrivate: 'Private',
      modalNoPublicLink: 'No public link',
      untitledWork: 'Untitled'
    },
    id: {
      pageTitle: 'Wildan — Desainer Kreatif, Video Editor & Kreator AI',
      skipLink: 'Lewati ke konten utama',
      navHome: 'Beranda',
      navPortfolio: 'Portofolio',
      navFaq: 'FAQ',
      navContact: 'Kontak',
      navMenu: 'Menu',
      navClose: 'Tutup',
      heroEyebrow: 'Desainer Kreatif & Spesialis AI',
      heroTitle1: 'Mengubah Ide Menjadi',
      heroTitle2: 'Cerita Visual.',
      heroRating: '500+ proyek terselesaikan',
      heroCtaTalk: 'Mari Diskusi',
      heroCtaWork: 'Lihat Karya',
      heroFlipTitle: 'Tampilkan foto berikutnya',
      pill1: 'Kreator Konten',
      pill2: 'Editor Video',
      pill3: 'Spesialis Media Sosial',
      pill4: 'Desainer Grafis',
      pill5: 'Desainer Motion',
      pill6: 'Kreatif AI',
      portfolioEyebrow: 'Portofolio',
      portfolioTitle: 'Karya Pilihan',
      portfolioDesc: 'Jelajahi proyek Video Editing, Video AI UGC, Video AI Motion, Desain Grafis, Desain Visual AI, Periklanan, YouTube, serta Website & Landing Page.',
      filterAll: 'Semua Proyek',
      filterVideo: 'Video Editing',
      filterAiUgc: 'Video AI UGC',
      filterAiMotion: 'Video AI Motion',
      filterDesign: 'Desain Grafis',
      filterAiVisual: 'Desain Visual AI',
      filterAds: 'Periklanan',
      filterYoutube: 'YouTube',
      filterWeb: 'Website & Landing Page',
      servicesEyebrow: 'Layanan',
      servicesTitle: 'Keahlian utama kami',
      whatIDo: 'APA YANG SAYA KERJAKAN',
      focusLabel: 'Fokus:',
      srv1Title: 'Video Editing',
      srv1Desc: 'Editing Reels, TikTok, video komersial, dan produksi podcast.',
      srv1Text: 'Saya membuat konten video berdurasi pendek maupun panjang yang menarik untuk media sosial, brand, dan kampanye digital. Meliputi pemotongan dan ritme gambar, penceritaan, transisi, tata suara, koreksi warna, subtitel, video produk, konten promosi, dan reels media sosial.',
      srv1Focus: 'Editing Reels · TikTok · Komersial · Podcast',
      srv1Link: 'Lihat karya video',
      srv2Title: 'Video AI UGC',
      srv2Desc: 'Kreasi video AI influencer, testimoni, dan UGC produk berkonversi tinggi.',
      srv2Text: 'Saya merancang kampanye video AI UGC berkonversi tinggi menggunakan avatar digital AI realistis, testimoni influencer sintetis, dan ulasan produk untuk membangun kredibilitas serta meningkatkan interaksi di TikTok, Reels, dan Meta Ads.',
      srv2Focus: 'AI Influencer · Testimoni · UGC Produk · Bukti Sosial',
      srv2Link: 'Lihat karya AI UGC',
      srv3Title: 'Video AI Motion',
      srv3Desc: 'Image-to-video, penceritaan sinematik AI, dan animasi produk berbasis AI.',
      srv3Text: 'Saya memproduksi visual gerak dinamis dengan memadukan model video generative AI terdepan (Kling, Runway, Dreamina, VEO) serta pascaproduksi profesional. Mencakup pembuatan adegan sinematik, pergerakan kamera AI dinamis, animasi produk, dan efek video ritmis.',
      srv3Focus: 'Image-to-Video · Sinematik AI · Animasi Produk dengan AI',
      srv3Link: 'Lihat karya AI motion',
      srv4Title: 'Desain Grafis',
      srv4Desc: 'Poster, flyer, logo, banner, dan carousel media sosial.',
      srv4Text: 'Saya merancang aset visual untuk brand, produk, dan kampanye digital, termasuk unggahan media sosial, banner promosi, poster, carousel, visual produk, konsep kemasan, serta materi pemasaran lainnya.',
      srv4Focus: 'Poster · Flyer · Logo · Banner · Carousel',
      srv4Link: 'Lihat karya desain',
      srv5Title: 'Desain Visual AI',
      srv5Desc: 'Fotografi produk AI, konsep fashion AI, dan kampanye visual komersial.',
      srv5Text: 'Saya memproduksi aset visual berstandar komersial menggunakan generasi gambar AI, mencakup fotografi produk AI setara studio, editorial fashion AI, kampanye visual, dan konsep digital realistis untuk e-commerce serta pemasaran brand.',
      srv5Focus: 'Fotografi Produk AI · Fashion AI · Kampanye Visual',
      srv5Link: 'Lihat karya visual AI',
      srv6Title: 'Periklanan',
      srv6Desc: 'Meta Ads, TikTok Ads, dan materi kreatif promosi.',
      srv6Text: 'Saya membuat konten visual untuk periklanan digital dan kampanye promosi, termasuk materi iklan Meta dan TikTok, video fokus produk, grafik promosi, variasi kreatif, serta konten yang mengomunikasikan penawaran secara jelas.',
      srv6Focus: 'Meta Ads · TikTok Ads · Materi Kreatif Promosi',
      srv6Link: 'Lihat karya periklanan',
      srv7Title: 'YouTube',
      srv7Desc: 'Video durasi panjang, Shorts, dan desain thumbnail.',
      srv7Text: 'Saya menangani produksi konten YouTube dari awal hingga akhir, mulai dari editing dan penceritaan hingga subtitel, tata suara, pengaturan tempo, thumbnail, serta optimasi video berdurasi panjang untuk pengalaman menonton yang kuat.',
      srv7Focus: 'Video Durasi Panjang · Shorts · Thumbnail',
      srv7Link: 'Lihat karya YouTube',
      statsEyebrow: 'Dalam angka',
      statsTitle: 'Terbukti dari karya, bukan sekadar kata.',
      stat1Label: 'Proyek terselesaikan',
      stat2Label: 'Retensi klien',
      stat3Label: 'Brand ditangani',
      toolsEyebrow: 'Perangkat & Teknologi',
      toolsTitle: 'Software & Teknologi Generative AI',
      toolsDesc: 'Didukung aplikasi kreatif berstandar industri & model AI mutakhir.',
      toolRole1: 'Editing Video',
      toolRole2: 'Motion Graphics',
      toolRole3: 'Desain Grafis',
      toolRole4: 'Vektor & Logo',
      toolRole5: 'UI/UX & Tata Letak',
      toolRole6: 'Konten Visual',
      toolRole7: 'Reels & Video Pendek',
      toolRole8: 'Naskah & Ideasi',
      toolRole9: 'AI Kreatif',
      toolRole10: 'AI Multimodal',
      toolRole11: 'Sistem Agen AI',
      toolRole12: 'Video Generatif',
      toolRole13: 'Video Sinematik',
      toolRole14: 'AI Motion & VFX',
      toolRole15: 'Seni Digital AI',
      toolRole16: 'Suara & Audio AI',
      testiEyebrow: 'Ulasan Klien',
      testiTitle: 'Kata Klien Kami',
      testi1Quote: '"Makasih yaa. Kualitas gambarnya juara, bersih dan tajam banget keliatan HD-nya. Beneran sesuai ekspektasi bahkan lebih bagus dari aslinya. Sukses terus ya bg!"',
      testi1Role: 'Spesialis E-Commerce',
      testi2Quote: '"Hallo bang, aku masih ksih testi nihh. Btw aku suka bgt sama kualitasnya super HD bgt bener-bener sesuai ekspektasi akuu😍 gambarnya bener-bener detail jadi keliatan kaya bukan editan asli keren bgtt!"',
      testi2Role: 'Pemilik, Yuntea',
      testi3Quote: '"Keren!! Gambar produknya kelihatan jelas tajam dan ga pecah... komunikasinya juga sangat responsif dan memuaskan. Sukses selalu!"',
      testi3Role: 'Pemilik UMKM',
      faqEyebrow: 'Pertanyaan',
      faqTitle: 'Pertanyaan yang Sering Diajukan',
      faq1Q: 'Berapa lama waktu pengerjaan biasanya?',
      faq1A: 'Untuk video pendek Reels, TikTok, dan iklan media sosial, pengerjaan biasanya 24–48 jam. Paket editing komersial besar dan motion graphics membutuhkan 5–10 hari kerja tergantung skala proyek.',
      faq2Q: 'Apakah menerima proyek jarak jauh (remote)?',
      faq2A: 'Ya! Saya bekerja dengan klien dan perusahaan di seluruh Indonesia maupun global. Komunikasi berjalan lancar melalui WhatsApp (0822-5056-1757), Email, Slack, atau Google Meet.',
      faq3Q: 'Berapa kali revisi yang didapatkan?',
      faq3A: 'Semua paket sudah termasuk 2 tahap revisi penuh untuk memastikan kepuasan Anda. Catatan revisi dapat ditandai dengan mudah langkah demi langkah.',
      faq4Q: 'Bisakah membuat aset visual AI kustom?',
      faq4A: 'Dirancang menggunakan ChatGPT, Gemini, Google Flow Labs, Kling AI, Leonardo AI, dan ElevenLabs untuk menghasilkan gambar unik, sulih suara (voiceover), dan rangkaian video yang disesuaikan khusus untuk brand Anda.',
      footerCta1: 'Punya rencana proyek?',
      footerCta2: 'Mari mulai berkarya.',
      footerWaBtn: 'Chat WhatsApp',
      footerTagline: 'Desainer Kreatif & Spesialis Video yang merancang aset visual berkonversi tinggi.',
      footerColNav: 'Navigasi',
      footerColServices: 'Layanan',
      footerColSocial: 'Media Sosial',
      footerSrv1: 'Video Editing',
      footerSrv2: 'Motion Graphics',
      footerSrv3: 'Desain Grafis',
      footerSrv4: 'Kreasi Seni AI',
      overlaySub1: 'Pengalaman Visual',
      overlaySub2: 'Karya Video, Desain & AI',
      overlaySub3: 'Tanya Jawab',
      overlaySub4: 'WhatsApp & Konsultasi',
      overlayAvail: 'Tersedia untuk Proyek',
      overlayRole: 'Desainer Kreatif & Spesialis Video',
      overlayBio: 'Merancang editing video berkonversi tinggi, seni digital AI futuristik, motion graphics & kampanye kreatif brand yang menggerakkan audiens.',
      overlayLocLabel: 'Lokasi',
      overlayLocVal: 'Indonesia • Remote Seluruh Dunia',
      overlaySocialsLabel: 'Media Sosial',
      overlayWaDirect: 'Chat WhatsApp Langsung',
      overlayLocalTime: 'Waktu lokal',
      overlayStartLink: 'Chat WhatsApp Langsung →',
      reqEyebrow: 'Mulai proyek',
      reqTitle: 'Ceritakan apa yang ingin Anda bangun.',
      reqNameLabel: 'Nama',
      reqNamePlaceholder: 'Nama Anda',
      reqEmailLabel: 'Email',
      reqEmailPlaceholder: 'anda@perusahaan.com',
      reqProjLabel: 'Detail Proyek',
      reqProjPlaceholder: 'Ceritakan singkat tentang proyek, jadwal, dan anggaran Anda.',
      reqNote: 'Mengarahkan langsung ke chat WhatsApp.',
      reqSubmit: 'Kirim permintaan',
      reqConnecting: 'Menghubungkan WhatsApp…',
      reqSuccessTitle: 'Permintaan diterima',
      reqSuccessDesc: 'Membuka chat WhatsApp dengan Wildan...',
      zoomPreviewTitle: 'Pratinjau Foto',
      zoomOutTitle: 'Perkecil',
      zoomResetTitle: 'Atur ulang zoom',
      zoomInTitle: 'Perbesar',
      zoomOpenTitle: 'Buka gambar asli',
      zoomCloseTitle: 'Tutup',
      zoomPrevTitle: 'Karya sebelumnya',
      zoomNextTitle: 'Karya berikutnya',
      zoomHint: 'Klik atau cubit untuk memperbesar · Gunakan tombol panah untuk berpindah karya',
      // Portfolio dynamic UI strings
      showMore: 'Tampilkan Lebih Banyak',
      showMoreSuffix: 'lagi',
      showLess: 'Tampilkan Lebih Sedikit',
      cardWorksUnit: 'karya',
      cardInternalVps: 'Internal • VPS',
      cardLiveWeb: 'Website live',
      cardViewProj: 'Lihat proyek',
      cardWebScreenshot: 'TANGKAPAN LAYAR WEBSITE',
      cardWebLive: 'WEBSITE LIVE',
      cardViewCollectionAria: 'Lihat koleksi',
      modalWorksInCollection: 'karya dalam koleksi',
      modalInternalVps: 'Aplikasi internal • VPS',
      modalLiveWeb: 'Website live',
      modalProjectSummary: 'Ringkasan proyek',
      modalZoomOverlay: 'Perbesar karya ↗',
      modalZoomFullOverlay: '🔍 Klik untuk Zoom Layar Penuh',
      modalYoutubeBtn: '▶ Kunjungi Channel YouTube',
      modalCollectionHeading: 'Koleksi karya',
      modalSelectVideo: 'Pilih video untuk memutar',
      modalSelectImage: 'Pilih karya untuk memperbesar',
      modalPlayAria: 'Putar',
      modalEnlargeAria: 'Perbesar',
      modalChallenge: 'Tantangan',
      modalSolution: 'Pendekatan kreatif',
      modalResults: 'Hasil proyek',
      modalRole: 'PERAN',
      modalStack: 'TEKNOLOGI',
      modalDeployment: 'DEPLOYMENT',
      modalLink: 'TAUTAN',
      modalOpenLink: 'Buka',
      modalPrivate: 'Privat',
      modalNoPublicLink: 'Tanpa tautan publik',
      untitledWork: 'Tanpa judul'
    }
  };

  const CATEGORY_NAMES = {
    en: {
      'video': 'Video Editing',
      'ai-ugc': 'AI UGC Videos',
      'ai-motion': 'AI Motion Videos',
      'design': 'Graphic Design',
      'ai-visual': 'AI Visual Design',
      'ads': 'Advertising',
      'youtube': 'YouTube',
      'web': 'Website & Landing Pages'
    },
    id: {
      'video': 'Video Editing',
      'ai-ugc': 'Video AI UGC',
      'ai-motion': 'Video AI Motion',
      'design': 'Desain Grafis',
      'ai-visual': 'Desain Visual AI',
      'ads': 'Periklanan',
      'youtube': 'YouTube',
      'web': 'Website & Landing Page'
    }
  };

  const PROJECT_EN = {
    'motion-graphics-howell': {
      shortDesc: '26 commercial 3D/2D motion product showcases, megasale promos, adapter & cable specifications.',
      challenge: 'Presenting 26 premium Howell electronic product series in kinetic 3D/2D motion graphics and high-retention product showcases.',
      solution: 'High-speed streaming integration, After Effects product animation keyframing, technical specification motion typography, dynamic neon lighting, and professional sound design.',
      results: [
        '26 Official Commercial Motion Graphics Video Assets Integrated',
        'Fast HD Streaming with Zero Buffering & Ad-Free Playback',
        'Optimized for marketplace promotions, digital store displays, TikTok & Instagram Reels'
      ]
    },
    'graphic-design-fkdb': {
      shortDesc: 'Posters, flyers, banners, twibbons, certificates, Instagram feeds, mockups & stickers.',
      challenge: 'Creating diverse visual publication assets while maintaining consistent color identity and corporate professionalism for FKDB.',
      solution: 'Designed modular grid layouts in Photoshop & Illustrator for flyers, transparent twibbons, interactive carousels, and official certificates.',
      results: [
        '61 Official Graphic Design Assets Integrated in the FKDB Collection',
        'Used in FKDB National Publication Campaigns',
        'Increased Social Media Engagement & Save Rates'
      ]
    },
    'video-editing-howell-video-product': {
      shortDesc: 'Collection of 14 Howell product videos.',
      challenge: 'Compiling 14 Howell product showcase videos into a unified, accessible project gallery.',
      solution: 'Each product video is streamed directly in high definition with instant playlist navigation.',
      results: [
        '14 product videos available in the project gallery.'
      ]
    },
    'video-editing-mid-layer': {
      shortDesc: '9 educational reels, pop culture, storytelling & animation videos.',
      challenge: 'Transforming educational topics, biographies, and storytelling into engaging 9:16 vertical videos that are easy to digest and maintain high audience retention.',
      solution: 'Dynamic editing pacing, kinetic typography, thematic illustration animations, and immersive sound design.',
      results: [
        '9 Official Reels & Storytelling Video Assets Integrated',
        'Fast HD Streaming with Zero Buffering & Ad-Free Playback',
        'Optimized for TikTok, Instagram Reels, and YouTube Shorts'
      ]
    },
    'ai-ugc-howell': {
      shortDesc: '15 commercial videos, product showcases & AI UGC video creatives.',
      challenge: 'Creating natural, persuasive, and high-converting UGC and commercial videos for Howell electronic products on TikTok & Instagram Reels.',
      solution: 'High-retention UGC visual formats, dynamic pacing, practical product feature demonstrations, and crisp sound design.',
      results: [
        '15 Official UGC & Commercial Video Assets Integrated',
        'Fast HD Streaming with Zero Buffering & Ad-Free Playback',
        'Optimized for TikTok Ads, Reels & E-Commerce Showcases'
      ]
    },
    'ai-design-yuntea': {
      shortDesc: 'Generative beverage AI artwork, ChatGPT image design & tea branding.',
      challenge: 'Creating refreshing, aesthetic, and modern tea beverage product visualizations using generative AI technology.',
      solution: 'High-detail AI image generation with natural lighting prompt engineering and aesthetic beverage composition.',
      results: [
        '5 Official AI Beverage Art Assets Integrated in the YUN’TEA Collection',
        'Used for YUN’TEA promotional media & visual branding'
      ]
    },
    'advertising-saratoga-landing-page': {
      shortDesc: 'Product specification graphics, how-it-works visuals & high-conversion landing page ads.',
      challenge: 'Increasing CTR and sales conversion for Saratoga advertising campaigns.',
      solution: 'High-converting ad visual design with persuasive copywriting, bold color composition, and sales funnel layout.',
      results: [
        '11 Official Visual Advertising Assets Integrated in the Saratoga Collection',
        'Used for Meta Ads, TikTok Ads & Landing Page campaigns'
      ]
    },
    'video-editing-andrey-ai-video-bootcamp': {
      shortDesc: '7 AI video collections, motion graphics & prompt engineering showcases.',
      challenge: 'Delivering all 7 AI Video Bootcamp works in HD/4K quality with instant streaming, zero buffering, and no watermarks.',
      solution: 'High-speed video player integration, interactive 7-video playlist navigation inside the modal, and global CDN optimization.',
      results: [
        '7 Official Showcase Videos Integrated',
        'Precision Thumbnails & Ad-Free HD Player',
        'Content Format Ready for Social Media (Reels, TikTok, Shorts & Portfolio)'
      ]
    },
    'graphic-design-brand-logos': {
      shortDesc: 'Official Logo Design Collection (Vector Logos, Client Identity & Symbol Design).',
      challenge: 'Designing unique, modern, and memorable brand logo symbols and visual identities that apply flexibly across print and digital media.',
      solution: 'Precision geometric exploration, strong brand color psychology, and scalable vector crafting in Adobe Illustrator.',
      results: [
        '10 Official Logo Design Assets Integrated in Running Marquee & Portfolio',
        'Used for core visual identities, branding media, and client e-commerce'
      ]
    },
    'graphic-design-eastern-depo': {
      shortDesc: 'Promotional flyers, marketing brochures, holiday greeting posters & social feeds.',
      challenge: 'Delivering professional and communicative product promotion visuals and holiday greetings for CV. Eastern Depo.',
      solution: 'Clean-aesthetic promotional brochure design, structured information layout, and thematic greetings with Eastern Depo brand colors.',
      results: [
        '6 Official Brochure & Poster Graphic Design Assets Integrated',
        'Used for promotional media, print brochures & social media publications for CV. Eastern Depo'
      ]
    },
    'graphic-design-elvorindo': {
      shortDesc: 'Qyokazu headband sleeves, 4:3 & 9:16 posters, unboxing stickers, apparel labels & QC cards.',
      challenge: 'Designing the complete ecosystem of physical promotional materials, packaging stickers, and Qyokazu Elvorindo product visuals with a consistent and elegant brand identity.',
      solution: 'Modular graphic layouts for product sleeves, unboxing stickers, modern apparel labels, and print & digital promotional posters.',
      results: [
        '11 Official Branding & Packaging Graphic Design Assets Integrated',
        'Used for printing product sleeves, unboxing packaging stickers & social media promotions'
      ]
    },
    'graphic-design-howell': {
      shortDesc: 'Corporate branding, B2B catalogs, product flyers & commercial banners.',
      challenge: 'Structuring B2B engineering trade catalogs and visual materials with high product clarity.',
      solution: 'Modern corporate-themed design with precise color combinations and tiered information hierarchy.',
      results: [
        '9 Official Design Assets Integrated in the Howell Niaga Indonesia Collection',
        'Used for B2B marketing communications & trade exhibitions'
      ]
    },
    'graphic-design-lamis-resto': {
      shortDesc: 'Menu design, promotional posters, social media feeds & culinary banners.',
      challenge: 'Presenting culinary menus and restaurant promotions in a visually appetizing way.',
      solution: 'High-contrast culinary photography, clean menu typography, and warm color composition.',
      results: [
        '3 Official Design Assets Integrated in the Lamis Resto Collection',
        'Used for restaurant promotions & social media'
      ]
    },
    'graphic-design-andrey-juice-united': {
      shortDesc: '12 visual & creative design assets for Juice United.',
      challenge: 'Creating a consistent and attractive visual identity and marketing communication for Juice United.',
      solution: 'Professional graphic design with structured layouts, precise color composition, and modern visual elements.',
      results: [
        '12 Official Graphic Design Assets Integrated in the Juice United Collection',
        'Used for promotional media & digital publications'
      ]
    },
    'graphic-design-andrey-kalceri-cafe': {
      shortDesc: '16 culinary menu & promotional visual assets for Kalceri Cafe.',
      challenge: 'Creating an appetizing and aesthetic menu visual identity and promotional materials for Kalceri Cafe.',
      solution: 'Professional graphic design with warm color composition, appetizing food photography, and structured menu layouts.',
      results: [
        '16 Official Graphic Design Assets Integrated in the Kalceri Cafe Collection',
        'Used for promotional media, menu lists & social media publications'
      ]
    },
    'graphic-design-andrey-lamis-resto': {
      shortDesc: '9 visual & creative design assets for Lamis Resto.',
      challenge: 'Creating a consistent and attractive visual identity and marketing communication for Lamis Resto.',
      solution: 'Professional graphic design with structured layouts, precise color composition, and modern visual elements.',
      results: [
        '9 Official Graphic Design Assets Integrated in the Lamis Resto Collection',
        'Used for promotional media & digital publications'
      ]
    },
    'graphic-design-andrey-mind-mastery-tiktok': {
      shortDesc: '14 visual & creative design assets for Mind Mastery Academy.',
      challenge: 'Creating a consistent and attractive visual identity and marketing communication for Mind Mastery Academy.',
      solution: 'Professional graphic design with structured layouts, precise color composition, and modern visual elements.',
      results: [
        '14 Official Graphic Design Assets Integrated in the Mind Mastery Academy Collection',
        'Used for promotional media & digital publications'
      ]
    },
    'graphic-design-andrey-mirini-skincare': {
      shortDesc: '2 visual & creative design assets for Mirini Skincare.',
      challenge: 'Creating a consistent and attractive visual identity and marketing communication for Mirini Skincare.',
      solution: 'Professional graphic design with structured layouts, precise color composition, and modern visual elements.',
      results: [
        '2 Official Graphic Design Assets Integrated in the Mirini Skincare Collection',
        'Used for promotional media & digital publications'
      ]
    },
    'graphic-design-andrey-onlymenjewellers': {
      shortDesc: '16 luxury product suite & advertising visual assets for Onlymenjewellers.',
      challenge: 'Creating a consistent and attractive luxury visual identity and marketing communication for Onlymenjewellers.',
      solution: 'Professional graphic design with structured layouts, precise color composition, and modern visual elements.',
      results: [
        '16 Official Graphic Design Assets Integrated in the Onlymenjewellers Collection',
        'Used for promotional media & digital publications'
      ]
    },
    'graphic-design-andrey-saren-indah-bali': {
      shortDesc: '7 resort & travel promotional visual assets for Saren Indah Bali.',
      challenge: 'Creating a consistent and attractive resort visual identity and marketing communication for Saren Indah Bali.',
      solution: 'Professional graphic design with structured layouts, precise color composition, and modern visual elements.',
      results: [
        '7 Official Graphic Design Assets Integrated in the Saren Indah Bali Collection',
        'Used for promotional media & digital publications'
      ]
    },
    'graphic-design-andrey-uob-bank': {
      shortDesc: '7 Instagram feed & banking carousel visual assets for UOB Bank.',
      challenge: 'Creating a consistent and professional visual identity and marketing communication for UOB Bank.',
      solution: 'Professional graphic design with structured layouts, precise color composition, and modern visual elements.',
      results: [
        '7 Official Graphic Design Assets Integrated in the UOB Bank Collection',
        'Used for promotional media & digital publications'
      ]
    },
    'video-editing-fkdb': {
      shortDesc: '10 event documentation, export, official coverage & motion videos.',
      challenge: 'Documenting national-scale activities and corporate events for FKDB professionally with pristine audio-visual quality.',
      solution: 'Clear journalistic narrative alignment, dynamic editing, and documentary-standard color grading.',
      results: [
        '10 Official Coverage Videos Integrated',
        'Fast HD Streaming with Zero Buffering & Ad-Free Playback',
        'Optimized for Social Media Publications, Corporate Documentation & Official Archives'
      ]
    },
    'video-editing-cari-tofu': {
      shortDesc: '19 animation, parody, Shorts/Reels & sound design videos.',
      challenge: 'Creating entertaining and viral comedy parody animations and video edits for TikTok & Instagram Reels.',
      solution: 'Dynamic character animation keyframing, rhythmic comedy dialogue, kinetic captions, and comedic sound design.',
      results: [
        '19 Official Animation & Commercial Reels Video Assets Integrated',
        'Fast HD Streaming with Zero Buffering & Ad-Free Playback',
        'Boosted viewer engagement & organic social media reach'
      ]
    },
    'video-editing-elvorindo': {
      shortDesc: 'Event gathering coverage video & animated WhatsApp stickers.',
      challenge: 'Documenting memorable moments from the Elvorindo Gathering event and creating creative animated sticker content.',
      solution: 'Event documentation video editing with cinematic transitions and custom motion sticker animation.',
      results: [
        '2 Official Video Editing & Motion Assets Integrated',
        'Fast HD Streaming with Zero Buffering & Ad-Free Playback',
        'Used for internal documentation & Elvorindo social media publications'
      ]
    },
    'video-editing-andrey-andreydigital-make-money-vads': {
      shortDesc: '5 educational & high-conversion digital product video ad variations.',
      challenge: 'Creating 5 commercial video ad variations for digital products with high first-3-second retention to maximize campaign ROAS.',
      solution: 'Kinetic typography, rhythmic editing pacing, and professional sound design.',
      results: [
        '5 Official Commercial Video Ads Integrated',
        'Instant HD Playback with Zero Buffering & Ad-Free',
        'Video Ad Format Ready for Instagram Reels, TikTok Ads & Facebook Ads'
      ]
    },
    'video-editing-andrey-content-creator-ai': {
      shortDesc: 'Commercial video series & educational AI vlogs.',
      challenge: 'Packaging cheerful educational vlog content and commercial recipes with dynamic pacing and strong visual hooks.',
      solution: 'Dynamic cuts, trending audio integration, and crisp HD delivery.',
      results: [
        '2 Official Commercial AI Videos Integrated',
        'Instant HD Playback with Zero Buffering & Ad-Free',
        'Format Ready for YouTube Shorts, Instagram Reels & TikTok'
      ]
    },
    'video-editing-andrey-food-vlog-ai': {
      shortDesc: '6 cinematic culinary generative AI video assets.',
      challenge: 'Presenting appetizing generative AI culinary visuals with fast editing tempo and high visual fidelity.',
      solution: 'Appetizing food visual optimization, rhythmic motion cuts, and responsive playback.',
      results: [
        '6 Official Culinary AI Commercial Videos Integrated',
        'Fast HD Streaming with Zero Buffering & Ad-Free',
        'Optimized for Instagram Reels, TikTok & YouTube Shorts'
      ]
    },
    'video-editing-andrey-ponds-acne-solution': {
      shortDesc: '11 commercial AI skincare video assets.',
      challenge: 'Packaging clinical skincare messaging and aesthetic acne care visuals into convincing high-resolution commercial video content.',
      solution: 'Glowing and healthy skin visual optimization, clean pacing, and responsive HD playback.',
      results: [
        '11 Official Skincare Commercial Videos Integrated',
        'Fast HD Streaming with Zero Buffering & Ad-Free',
        'Optimized for Instagram Reels, TikTok & YouTube Shorts'
      ]
    },
    'ai-design-aussie-sawit': {
      shortDesc: 'Generative AI visuals, single image & carousel posts, social media feeds & promotional art.',
      challenge: 'Presenting educational and promotional visual communications for the palm oil plantation industry in an aesthetic and modern way using AI.',
      solution: 'Seamless carousel design and plantation-themed single image posters with bold typography and precise AI illustrations.',
      results: [
        '6 Official Single Image & Carousel AI Visual Assets Integrated',
        'Used for Aussie Sawit social media publications & educational content'
      ]
    },
    'ai-design-belayang-food-bali': {
      shortDesc: 'Generative culinary AI artwork, ChatGPT image design & culinary branding.',
      challenge: 'Creating mouth-watering Balinese culinary dish visualizations and branding with AI without physical photo shoots.',
      solution: 'High-detail AI image generation using ChatGPT & Balinese culinary visual prompt engineering.',
      results: [
        '3 Official AI Culinary Art Assets Integrated in the Belayang Food Bali Collection',
        'Used for Belayang Food Bali promotional media & visual branding'
      ]
    },
    'ai-design-bhakti-utama': {
      shortDesc: 'Generative institutional AI visuals, humanitarian digital art & campaign artwork.',
      challenge: 'Creating high-aesthetic social and humanitarian visual messages that evoke public empathy through AI technology.',
      solution: 'Meaningful digital art generation using ChatGPT and modern artistic lighting.',
      results: [
        '6 Official AI Digital Art Assets Integrated in the Bhakti Utama Foundation Collection',
        'Used for social publication media & humanitarian campaigns'
      ]
    },
    'ai-design-freelancer-ecourse': {
      shortDesc: 'Generative educational AI artwork, branding & digital art.',
      challenge: 'Creating a professional, modern freelancing educational e-course visual identity that attracts prospective students.',
      solution: 'High-aesthetic AI digital art generation paired with modern e-course branding color accents.',
      results: [
        '3 Official AI Digital Art Assets Integrated in the Freelancer E-Course Collection',
        'Used for Rio Ramadhan e-course promotional media & branding'
      ]
    },
    'ai-design-howell-flash-sale': {
      shortDesc: 'Generative commercial AI artwork, e-commerce banners & flash sale visuals.',
      challenge: 'Designing eye-catching, dynamic, and futuristic Flash Sale campaign visual assets to boost e-commerce sales.',
      solution: 'Limited-offer themed AI digital art generation with neon lighting, bold commercial elements, and Photoshop compositing.',
      results: [
        '12 Official AI Visual & Flash Sale Banner Assets Integrated',
        'Used for Howell Flash Sale e-commerce promotional campaigns & social media'
      ]
    },
    'motion-graphics-se-indonesia': {
      shortDesc: '1 commercial motion short clip & AI food motion video.',
      challenge: 'Packaging visual storytelling and Se_Indonesia food motion animation into a high-energy promotional clip.',
      solution: 'Rhythmic motion editing, AI food motion generation, kinetic title animation, and professional color grading.',
      results: [
        '1 Official Commercial Motion Graphics Video Asset Integrated',
        'Fast HD Streaming with Zero Buffering & Ad-Free',
        'Used for Se_Indonesia social media publications & promotional campaigns'
      ]
    },
    'advertising-andreydigital-make-money': {
      shortDesc: 'Digital product image ads, e-book cover design, landing page visuals & webinar ads.',
      challenge: 'Increasing CTR and sales conversion for andreydigital.id advertising campaigns.',
      solution: 'High-converting advertising visual design with persuasive copywriting, bold color composition, and sales funnel layout.',
      results: [
        '11 Official Visual Advertising Assets Integrated in the andreydigital.id Collection',
        'Used for Meta Ads, TikTok Ads & Landing Page campaigns'
      ]
    },
    'advertising-aussie-sawit-ads': {
      shortDesc: 'High-CTR commercial image ads, carousel ad banners & promotional visuals.',
      challenge: 'Increasing CTR and sales conversion for Aussie Sawit advertising campaigns.',
      solution: 'High-converting advertising visual design with persuasive copywriting, bold color composition, and sales funnel layout.',
      results: [
        '6 Official Visual Advertising Assets Integrated in the Aussie Sawit Collection',
        'Used for Meta Ads, TikTok Ads & Landing Page campaigns'
      ]
    },
    'advertising-howell-official-store': {
      shortDesc: 'Portrait & square e-commerce product ads, promotional banners & marketplace art.',
      challenge: 'Increasing CTR and sales conversion for PT. Howell Niaga Indonesia advertising campaigns.',
      solution: 'High-converting advertising visual design with persuasive copywriting, bold color composition, and sales funnel layout.',
      results: [
        '6 Official Visual Advertising Assets Integrated in the PT. Howell Niaga Indonesia Collection',
        'Used for Meta Ads, TikTok Ads & Landing Page campaigns'
      ]
    },
    'youtube-doa-bangsa-tv': {
      shortDesc: 'Special reports, educational videos, inspirational programs & live streaming.',
      challenge: 'Building the official Doa Bangsa TV YouTube channel with a professional visual identity, high-CTR thumbnails, and structured playlists.',
      solution: 'Integrated video production, event coverage editing, high-CTR thumbnail creation, and direct official YouTube channel integration.',
      results: [
        'Official Doa Bangsa TV YouTube Channel Active & Integrated (80.1K+ Subs, 1.2K+ Videos)',
        'Delivering Hundreds of National Educational & Inspirational Videos with Consistent 16:9 Thumbnails'
      ]
    },
    'youtube-mind-mastery': {
      shortDesc: 'Educational video editing, high-CTR thumbnails & sound design.',
      challenge: 'Maintaining viewer retention across 20-minute educational videos while designing captivating, authoritative thumbnails.',
      solution: 'Dynamic editing with sound effects and visual zooms every 15 seconds, paired with 16:9 neural-lighting & subconscious-mind thumbnails.',
      results: [
        '500K+ Total YouTube Views',
        'High-CTR 16:9 Thumbnail Visual Design & Comprehensive E-Learning Covers'
      ]
    },
    'web-howell-stockflow': {
      shortDesc: 'Howell internal web application for cashier transactions, barcode/SKU scanning, and invoice issuance.',
      challenge: 'Unifying product scanning, transaction recording, payment processing, and invoicing into a single cashier workflow.',
      solution: 'Built a dedicated cashier interface combining barcode/SKU scanning, shopping cart, customer data, payment methods, and transaction summaries.',
      role: 'Web Developer',
      deployment: 'Internal • Company VPS'
    },
    'web-howell-inventory': {
      shortDesc: 'Howell internal dashboard for inventory, products, branches, shipments, and warehouse activity.',
      challenge: 'Presenting Howell inventory positions and warehouse operational activities in a single unified dashboard.',
      solution: 'Dashboard summarizing total stock, shipments, product master data, stock by location, low-stock alerts, sales performance, and warehouse transactions.',
      role: 'Web Developer',
      deployment: 'Internal • Company VPS'
    },
    'web-howell-spin-win': {
      shortDesc: 'Interactive Spin & Win campaign website for Howell, built end-to-end from concept to launch.',
      challenge: 'Creating a gamified promotional experience that is engaging and easily accessible for event visitors.',
      solution: 'Built an interactive campaign page featuring a prize wheel, sound controls, spin simulation, history log, and fullscreen mode.',
      role: 'Website Design & Development',
      deployment: 'Public Website',
      results: [
        'Interactive prize wheel with simulation mode',
        'Sound controls, history log, and fullscreen display',
        'End-to-end design and development by Wildan Firdaus'
      ]
    },
    'web-howell-catch-win': {
      shortDesc: 'Howell-themed Catch & Win browser mini-game, developed from concept to playable release.',
      challenge: 'Packaging brand interaction into a fast-paced mini-game that visitors can immediately understand and play in the browser.',
      solution: 'Created a 30-second browser game with start flow, leaderboard, skin collection, product elements, and responsive controls.',
      role: 'Website Design & Development',
      deployment: 'Public Website',
      results: [
        'Browser-based Catch & Win interactive game',
        'Leaderboard and unlockable skin collection',
        'Demo mode with simulated prizes',
        'End-to-end design and development by Wildan Firdaus'
      ]
    },
    'web-nadia-bakery': {
      shortDesc: 'Nadia Bakery business and product catalog website with direct WhatsApp ordering flow.',
      challenge: 'Presenting homemade bakery products warmly, clearly, and accessibly for prospective customers.',
      solution: 'Built a responsive website featuring brand storytelling, a filterable 4-category product catalog, visual gallery, FAQ, and direct WhatsApp ordering.',
      role: 'Website Design & Development',
      deployment: 'Public Website',
      results: [
        'Four-category product catalog with interactive filter',
        'Brand story, visual gallery, and FAQ section',
        'Direct inquiry and ordering flow via WhatsApp',
        'End-to-end design and development by Wildan Firdaus'
      ]
    },
    'web-howell-indocomtech-registration': {
      shortDesc: 'Howell visitor registration page for Indocomtech 2026, built from scratch to production.',
      challenge: 'Creating an event form that captures visitor information and product interests in a single clear flow.',
      solution: 'Designed a responsive registration form with structured sections for personal details, business profile, visitor category, and Howell product needs.',
      role: 'Website Design & Development',
      deployment: 'Public Website',
      results: [
        'Indocomtech 2026 visitor registration form',
        'Visitor categorization and product interest selection',
        'Structured responsive layout for desktop and mobile',
        'End-to-end design and development by Wildan Firdaus'
      ]
    }
  };

  const PROJECT_ROLE_ID = {
    'Web Developer': 'Pengembang Web',
    'Website design & development': 'Desain & Pengembangan Website',
    'Internal • VPS data': 'Internal • Data VPS',
    'Public website': 'Website Publik',
    'Internal': 'Internal'
  };

  let currentLang = 'id';
  try {
    const saved = localStorage.getItem('wildan_portfolio_lang');
    if (saved === 'id' || saved === 'en') {
      currentLang = saved;
    }
  } catch (e) {}

  window.getPortfolioLang = function () {
    return currentLang;
  };

  window.getPortfolioUIText = function (key) {
    const dict = I18N_UI[currentLang] || I18N_UI.id;
    return dict[key] !== undefined ? dict[key] : (I18N_UI.en[key] || key);
  };

  window.getLocalizedCategoryName = function (category, fallbackName) {
    const map = CATEGORY_NAMES[currentLang] || CATEGORY_NAMES.id;
    return map[category] || fallbackName;
  };

  window.getLocalizedProjectField = function (project, field) {
    if (!project) return '';
    if (currentLang === 'en') {
      const enOverride = PROJECT_EN[project.id];
      if (enOverride && enOverride[field] !== undefined) {
        return enOverride[field];
      }
      return project[field];
    } else {
      const val = project[field];
      if ((field === 'role' || field === 'deployment') && typeof val === 'string' && PROJECT_ROLE_ID[val]) {
        return PROJECT_ROLE_ID[val];
      }
      return val;
    }
  };

  window.translateItemLabel = function (label) {
    if (!label) return label;
    if (currentLang === 'en') {
      return String(label)
        .replace(/\bSeri\s+(\d+)/gi, 'Series $1')
        .replace(/\bGhibah Kantor\b/gi, 'Office Gossip Sketch')
        .replace(/\bGen-Z Pulang Kerja\b/gi, 'Gen-Z After Work')
        .replace(/\bCustomer Datang\b/gi, 'Customer Arrival Sketch')
        .replace(/\bPegel-Pegel\b/gi, 'Office Fatigue Sketch')
        .replace(/\bKerja Jaman Batu\b/gi, 'Stone Age Work Sketch')
        .replace(/\bKerja Kompak\b/gi, 'Teamwork Sketch')
        .replace(/\bSisca Berpikir\b/gi, 'Sisca Thinking')
        .replace(/\bParodi Agak Laen\b/gi, 'Agak Laen Parody')
        .replace(/\bBisnis Usai Ngantor\b/gi, 'After-Hours Business')
        .replace(/\bKilas Balik 2025\b/gi, '2025 Year in Review')
        .replace(/\bRefleksi 2026\b/gi, '2026 Reflection')
        .replace(/\bVlog Evaluasi Prompt AI\b/gi, 'AI Prompt Evaluation Vlog')
        .replace(/\bResep Vlog Ala Sunda\b/gi, 'Sundanese Recipe Vlog')
        .replace(/\bMengenal Perbedaan USB\b/gi, 'Understanding USB Differences')
        .replace(/\bPerbedaan Kabel HDMI\b/gi, 'HDMI Cable Differences')
        .replace(/\bKabel data\b/gi, 'Data Cable')
        .replace(/\bAdapter USB 3\.0 Siku\b/gi, 'Right-Angle USB 3.0 Adapter');
    }
    return label;
  };

  function applyStaticTranslations(lang) {
    const dict = I18N_UI[lang] || I18N_UI.id;
    document.documentElement.lang = lang;
    document.title = dict.pageTitle;

    // Text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Placeholder elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Title & aria-label elements
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) {
        el.setAttribute('title', dict[key]);
        el.setAttribute('aria-label', dict[key]);
      }
    });

    // Update language toggle buttons state
    document.querySelectorAll('.lang-switch-btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      const isActive = btnLang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  window.setPortfolioLang = function (lang) {
    if (lang !== 'id' && lang !== 'en') return;
    currentLang = lang;
    try {
      localStorage.setItem('wildan_portfolio_lang', lang);
    } catch (e) {}

    applyStaticTranslations(lang);

    // Re-render portfolio cards and any open project modal
    if (typeof window.refreshPortfolioLanguage === 'function') {
      window.refreshPortfolioLanguage();
    }
  };

  function initLangSystem() {
    applyStaticTranslations(currentLang);

    document.querySelectorAll('.lang-switch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetLang = btn.getAttribute('data-lang');
        if (targetLang && targetLang !== currentLang) {
          window.setPortfolioLang(targetLang);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangSystem);
  } else {
    initLangSystem();
  }
})();
