const ARTICLES = [

  {
    id: 1,
    category: 'ia',
    icon: '🤖',
    date:     { fr: 'Mai 2026', ar: 'ماي 2026', en: 'May 2026' },
    readTime: { fr: '12 min', ar: '12 دقيقة', en: '12 min' },
    badge:    { fr: 'IA & Éducation · Publication', ar: 'ذكاء اصطناعي · منشور', en: 'AI & Education · Publication' },
    title: {
      fr: "L'IA peut-elle vraiment transformer l'école marocaine ?",
      ar: "هل يمكن للذكاء الاصطناعي حقًا أن يحول المدرسة المغربية؟",
      en: "Can AI really transform Moroccan schools?"
    },
    excerpt: {
      fr: "Et si l'IA n'était pas une menace pour l'enseignant, mais son levier de transformation le plus puissant ?",
      ar: "ماذا لو لم يكن الذكاء الاصطناعي تهديدًا للأستاذ، بل أقوى رافعة لتحوله؟",
      en: "What if AI was not a threat to teachers but their most powerful lever for transformation?"
    },
    content: {
      fr: `<p>La question agite les salles des professeurs au Maroc et dans le monde.</p>
        <h3>1. L'IA dans l'éducation</h3>
        <p>L'IA englobe systèmes de tutorat intelligent, analyse de données, plateformes adaptatives, et outils d'aide à la gestion.</p>
        <div class="highlight-box">💡 <strong>À retenir :</strong> L'IA n'est pas destinée à remplacer l'enseignant. Elle est conçue pour l'amplifier.</div>
        <h3>2. Ma recherche scientifique</h3>
        <p>Publication dans l'<strong>African Journal of Management Engineering and Technology (Vol. 4, N°2, 2026, pp. 153-165)</strong>.</p>
        <blockquote>"La technologie est un outil. L'enseignant est un guide. Ensemble, ils peuvent bâtir une école plus juste."<br><strong>— NB</strong></blockquote>`,
      ar: `<h3>مقدمة</h3><p>السؤال يشغل بال جميع الأساتذة.</p><blockquote>"التكنولوجيا أداة. الأستاذ مرشد."<br><strong>— ن.ب</strong></blockquote>`,
      en: `<h3>Introduction</h3><p>The question stirs teachers' rooms worldwide.</p><blockquote>"Technology is a tool. The teacher is a guide."<br><strong>— NB</strong></blockquote>`
    }
  },

  {
    id: 2,
    category: 'management',
    icon: '🎯',
    date:     { fr: 'Mai 2026', ar: 'ماي 2026', en: 'May 2026' },
    readTime: { fr: '6 min', ar: '6 دقائق', en: '6 min' },
    badge:    { fr: 'Management Stratégique', ar: 'إدارة استراتيجية', en: 'Strategic Management' },
    title: {
      fr: "L'analyse SWOT expliquée simplement",
      ar: "تحليل SWOT بطريقة مبسطة",
      en: "SWOT Analysis explained simply"
    },
    excerpt: {
      fr: "L'outil stratégique le plus cité mais aussi le plus mal utilisé.",
      ar: "الأداة الاستراتيجية الأكثر استشهادًا والأسوأ استخدامًا.",
      en: "The most cited strategic tool but also the most misused."
    },
    content: {
      fr: `<h3>Les 4 dimensions</h3>
        <ul>
          <li><strong>Forces (S)</strong> : atouts internes</li>
          <li><strong>Faiblesses (W)</strong> : limites internes</li>
          <li><strong>Opportunités (O)</strong> : tendances externes favorables</li>
          <li><strong>Menaces (T)</strong> : risques externes</li>
        </ul>
        <div class="highlight-box">⚠️ <strong>Erreur fréquente :</strong> Confondre interne et externe.</div>
        <h3>Du SWOT au TOWS</h3>
        <ul>
          <li><strong>SO</strong> : forces × opportunités</li>
          <li><strong>WO</strong> : faiblesses × opportunités</li>
          <li><strong>ST</strong> : forces × menaces</li>
          <li><strong>WT</strong> : faiblesses × menaces</li>
        </ul>
        <blockquote>Bien utilisée, l'analyse SWOT reste un outil stratégique puissant.</blockquote>`,
      ar: `<h3>مقدمة</h3><p>يُختزل SWOT غالبا في قائمة بسيطة دون تحليل.</p>`,
      en: `<h3>Introduction</h3><p>SWOT is often reduced to a simple list without analysis.</p>`
    }
  },

  {
    id: 3,
    category: 'methodologie',
    icon: '🔬',
    date:     { fr: 'Avril 2026', ar: 'أبريل 2026', en: 'April 2026' },
    readTime: { fr: '10 min', ar: '10 دقائق', en: '10 min' },
    badge:    { fr: 'Méthodologie de Recherche', ar: 'منهجية البحث', en: 'Research Methodology' },
    title: {
      fr: 'PRISMA 2020 : Guide pratique',
      ar: 'PRISMA 2020: دليل عملي',
      en: 'PRISMA 2020: Practical Guide'
    },
    excerpt: {
      fr: "La méthode PRISMA 2020 est devenue la référence internationale pour les revues systématiques.",
      ar: "أصبحت PRISMA 2020 المرجع الدولي للمراجعات المنهجية.",
      en: "PRISMA 2020 has become the international reference for systematic reviews."
    },
    content: {
      fr: `<h3>Qu'est-ce que PRISMA 2020 ?</h3>
        <p>Cadre méthodologique standardisé pour les revues systématiques, divisé en 27 items et 7 sections.</p>
        <div class="highlight-box">📌 <strong>Important :</strong> PRISMA est un cadre de reporting, pas une méthodologie en soi.</div>
        <h3>6 étapes pratiques</h3>
        <ul>
          <li>Protocole sur PROSPERO</li>
          <li>Recherche multi-bases (Scopus, WoS)</li>
          <li>Double screening en aveugle</li>
          <li>Extraction standardisée</li>
          <li>Évaluation qualité (ROBIS, JBI)</li>
          <li>Synthèse</li>
        </ul>
        <blockquote>J'ai utilisé PRISMA 2020 pour ma publication scientifique internationale.</blockquote>`,
      ar: `<h3>ما هي PRISMA 2020؟</h3><p>إطار منهجي للمراجعات المنهجية.</p>`,
      en: `<h3>What is PRISMA 2020?</h3><p>Standardized framework for systematic reviews.</p>`
    }
  },

  {
    id: 4,
    category: 'audit',
    icon: '🔍',
    date:     { fr: 'Mars 2026', ar: 'مارس 2026', en: 'March 2026' },
    readTime: { fr: '7 min', ar: '7 دقائق', en: '7 min' },
    badge:    { fr: 'Audit & Contrôle', ar: 'تدقيق ومراقبة', en: 'Audit & Control' },
    title: {
      fr: "L'audit organisationnel scolaire",
      ar: "التدقيق التنظيمي المدرسي",
      en: "Organizational audit applied to schools"
    },
    excerpt: {
      fr: "Comment l'audit peut-il transformer la gouvernance des établissements éducatifs ?",
      ar: "كيف يمكن للتدقيق أن يحول حوكمة المؤسسات التعليمية؟",
      en: "How can audit transform educational governance?"
    },
    content: {
      fr: `<h3>Pourquoi auditer un établissement scolaire ?</h3>
        <p>Pour améliorer la gouvernance, l'efficience et l'impact pédagogique.</p>
        <h3>Les 4 dimensions</h3>
        <ul>
          <li><strong>Audit pédagogique</strong></li>
          <li><strong>Audit organisationnel</strong></li>
          <li><strong>Audit financier</strong></li>
          <li><strong>Audit de conformité</strong></li>
        </ul>
        <div class="highlight-box">🎯 <strong>L'objectif :</strong> identifier les leviers d'amélioration, pas juger.</div>
        <blockquote>L'audit, bien conduit, est un puissant outil de transformation.</blockquote>`,
      ar: `<h3>لماذا تدقيق المدرسة؟</h3><p>لتحسين الحوكمة والفعالية.</p>`,
      en: `<h3>Why audit a school?</h3><p>To improve governance and efficiency.</p>`
    }
  },

  {
    id: 5,
    category: 'management',
    icon: '⚙️',
    date:     { fr: 'Juin 2026', ar: 'يونيو 2026', en: 'June 2026' },
    readTime: { fr: '5 min', ar: '5 دقائق', en: '5 min' },
    badge:    { fr: 'Test - Management', ar: 'اختبار - إدارة', en: 'Test - Management' },
    title: {
      fr: "Article TEST : Les 5 forces de Porter",
      ar: "مقال اختبار: قوى بورتر الخمس",
      en: "TEST Article: Porter's 5 Forces"
    },
    excerpt: {
      fr: "Article de test pour vérifier que le déploiement automatique GitHub vers Netlify fonctionne parfaitement.",
      ar: "مقال اختبار للتحقق من أن النشر التلقائي يعمل بشكل مثالي.",
      en: "Test article to verify automatic GitHub to Netlify deployment works perfectly."
    },
    content: {
      fr: `<h3>🎯 Article de test</h3>
        <p>Si vous lisez ceci sur <strong>nbprof.com</strong>, cela signifie que le système GitHub → Netlify fonctionne parfaitement !</p>
        <div class="highlight-box">
          ✅ <strong>Bravo Noamane !</strong> Vous pouvez désormais publier des articles en 30 secondes.
        </div>
        <h3>Workflow validé</h3>
        <ul>
          <li>Modification sur GitHub</li>
          <li>Commit automatique</li>
          <li>Déploiement Netlify automatique</li>
          <li>Site mis à jour</li>
        </ul>
        <blockquote>"La vraie force d'un site, c'est sa simplicité de mise à jour."</blockquote>`,
      ar: `<h3>🎯 مقال اختبار</h3>
        <p>إذا كنت تقرأ هذا على <strong>nbprof.com</strong>، فهذا يعني أن النظام يعمل بشكل مثالي!</p>
        <div class="highlight-box">
          ✅ <strong>مبروك نعمان!</strong> يمكنك الآن نشر مقالات في 30 ثانية.
        </div>`,
      en: `<h3>🎯 Test article</h3>
        <p>If you read this on <strong>nbprof.com</strong>, the system works perfectly!</p>
        <div class="highlight-box">
          ✅ <strong>Congrats Noamane!</strong> You can now publish articles in 30 seconds.
        </div>`
    }
  }

];
