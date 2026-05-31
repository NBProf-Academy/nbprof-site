/* ============================================================
   📚 ARTICLES DU SITE NBPROF
   ============================================================
   
   🎯 COMMENT AJOUTER UN ARTICLE ?
   
   1. Copiez le bloc MODÈLE en bas de ce fichier
   2. Collez-le AVANT le crochet de fermeture ];
   3. Ajoutez une virgule après l'article précédent
   4. Remplissez vos textes en FR, AR, EN
   5. Changez l'ID (doit être unique : 5, 6, 7...)
   6. Sauvegardez et re-déployez sur Netlify
   
   📝 CATÉGORIES DISPONIBLES :
   - 'ia'          → IA & Éducation
   - 'management'  → Management Stratégique  
   - 'methodologie'→ Méthodologie de Recherche (PRISMA 2020)
   - 'audit'       → Audit & Contrôle de Gestion
   - 'pedagogie'   → Pédagogie Moderne
   - 'digital'     → Transformation Digitale
   
   🎨 BALISES HTML UTILISABLES DANS "content" :
   <h3>Sous-titre</h3>            → Titre doré
   <p>Paragraphe</p>              → Texte normal
   <strong>Mot important</strong> → Mot en doré
   <ul><li>Point</li></ul>        → Liste à puces
   <blockquote>Citation</blockquote> → Citation encadrée
   <div class="highlight-box">💡 <strong>À retenir :</strong> Votre message</div>
   
   ============================================================ */

const ARTICLES = [

  // ============ ARTICLE 1 : IA & ÉDUCATION ============
  {
    id: 1,
    category: 'ia',
    icon: '🤖',
    date:     { fr: 'Mai 2026',                 ar: 'ماي 2026',                en: 'May 2026' },
    readTime: { fr: '12 min',                   ar: '12 دقيقة',                en: '12 min' },
    badge:    { fr: 'IA & Éducation · Publication', ar: 'ذكاء اصطناعي · منشور', en: 'AI & Education · Publication' },
    title: {
      fr: "L'IA peut-elle vraiment transformer l'école marocaine ?",
      ar: "هل يمكن للذكاء الاصطناعي حقًا أن يحول المدرسة المغربية؟",
      en: "Can AI really transform Moroccan schools?"
    },
    excerpt: {
      fr: "Et si l'IA n'était pas une menace pour l'enseignant, mais son levier de transformation le plus puissant ? Ce que la recherche scientifique révèle.",
      ar: "ماذا لو لم يكن الذكاء الاصطناعي تهديدًا للأستاذ، بل أقوى رافعة لتحوله؟ ما يكشفه البحث العلمي.",
      en: "What if AI was not a threat to teachers but their most powerful lever for transformation?"
    },
    content: {
      fr: `
        <p>La question agite les salles des professeurs, les directions d'établissement et les ministères de l'éducation à travers le monde. Au Maroc, elle prend une dimension particulière : comment un système éducatif en pleine mutation peut-il intégrer l'intelligence artificielle de manière intelligente, équitable et efficace ?</p>

        <h3>1. L'IA dans l'éducation : de quoi parle-t-on vraiment ?</h3>
        <p>L'intelligence artificielle dans le domaine éducatif ne se résume pas aux robots ou aux chatbots. Elle englobe un ensemble de technologies et d'outils qui permettent d'analyser, d'anticiper et de personnaliser l'expérience d'apprentissage [5]. On parle de :</p>
        <ul>
          <li>Systèmes de tutorat intelligent qui s'adaptent au niveau de chaque élève</li>
          <li>Outils d'analyse de données pour suivre les progrès et identifier les difficultés</li>
          <li>Plateformes d'apprentissage adaptatif qui ajustent le contenu en temps réel</li>
          <li>Outils d'aide à la gestion pour les directeurs d'établissement</li>
          <li>Systèmes de détection précoce du décrochage scolaire</li>
        </ul>

        <div class="highlight-box">
          💡 <strong>À retenir :</strong> L'IA n'est pas destinée à remplacer l'enseignant. Elle est conçue pour l'amplifier, lui libérer du temps et lui fournir des données précieuses pour mieux accompagner ses élèves [5].
        </div>

        <h3>2. Ce que dit ma recherche scientifique</h3>
        <p>Dans le cadre de mes travaux de Master AMSO, j'ai mené une revue de littérature systématique selon la méthode PRISMA 2020, publiée dans l'<strong>African Journal of Management Engineering and Technology (Vol. 4, N°2, 2026, pp. 153-165)</strong> [1].</p>

        <h3>3. Les défis spécifiques au Maroc</h3>
        <ul>
          <li><strong>Langue et culture</strong> : les outils d'IA sont majoritairement développés en anglais ou en français [5]</li>
          <li><strong>Résistance au changement</strong> : toute transformation organisationnelle rencontre des résistances naturelles [5]</li>
          <li><strong>Budget</strong> : l'intégration technologique représente un investissement initial significatif [5]</li>
        </ul>

        <div class="highlight-box">
          🎯 <strong>Ma conviction après 23 ans de terrain :</strong> Ces défis ne sont pas des obstacles insurmontables. Ils sont des opportunités de concevoir une intégration de l'IA véritablement adaptée au contexte marocain, portée par des enseignants formés et motivés [5].
        </div>

        <h3>4. Les bonnes pratiques observées dans la littérature</h3>
        <p>La revue systématique PRISMA 2020 a permis d'identifier plusieurs bonnes pratiques applicables au contexte marocain [5] :</p>
        <ul>
          <li><strong>Commencer petit</strong> : piloter l'IA dans quelques établissements avant de généraliser</li>
          <li><strong>Former en priorité</strong> : investir dans la formation des enseignants et des directeurs</li>
          <li><strong>Impliquer les acteurs</strong> : associer enseignants, parents et élèves à la démarche</li>
        </ul>

        <h3>5. Conclusion</h3>
        <p>L'IA va transformer l'école marocaine. La question n'est plus "si" mais "comment". Mon parcours de 23 ans m'a convaincu que les enseignants marocains ont toutes les ressources pour guider cette transformation.</p>

        <blockquote>
          "La technologie est un outil. L'enseignant est un guide. Ensemble, ils peuvent bâtir une école plus juste, plus efficace et plus humaine."<br>
          <strong>— NB</strong>
        </blockquote>
      `,
      ar: `
        <p>السؤال يشغل بال جميع الأساتذة في المغرب والعالم.</p>
        <h3>1. الذكاء الاصطناعي في التعليم</h3>
        <p>يشمل أنظمة التدريس الذكية، تحليل البيانات، المنصات التكيفية، وأدوات دعم التسيير.</p>
        <div class="highlight-box">💡 <strong>للتذكير:</strong> الذكاء الاصطناعي ليس بديلا عن الأستاذ، بل مكمل له.</div>
        <h3>2. ما يقوله بحثي العلمي</h3>
        <p>منشور في African Journal of Management Engineering and Technology، المجلد 4، العدد 2، 2026.</p>
        <blockquote>"التكنولوجيا أداة. الأستاذ مرشد. معًا، يمكنهما بناء مدرسة أكثر عدالة."<br><strong>— ن.ب</strong></blockquote>
      `,
      en: `
        <p>The question stirs teachers' rooms worldwide.</p>
        <h3>1. AI in education</h3>
        <p>AI includes intelligent tutoring systems, data analysis, adaptive platforms, and management tools.</p>
        <div class="highlight-box">💡 <strong>Key point:</strong> AI is designed to amplify teachers, not replace them.</div>
        <h3>2. What my research says</h3>
        <p>Published in African Journal of Management Engineering and Technology, Vol. 4, No. 2, 2026.</p>
        <blockquote>"Technology is a tool. The teacher is a guide. Together, they can build a fairer school."<br><strong>— NB</strong></blockquote>
      `
    }
  },

  // ============ ARTICLE 2 : SWOT ============
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
      fr: "L'outil stratégique le plus cité mais aussi le plus mal utilisé. Apprenez à le maîtriser et à passer au TOWS.",
      ar: "الأداة الاستراتيجية الأكثر استشهادًا والأسوأ استخدامًا.",
      en: "The most cited strategic tool but also the most misused."
    },
    content: {
      fr: `
        <h3>Introduction</h3>
        <p>Le SWOT est souvent réduit à une simple liste sans réelle analyse stratégique.</p>
        <h3>Les 4 dimensions</h3>
        <ul>
          <li><strong>Forces (S)</strong> : atouts internes</li>
          <li><strong>Faiblesses (W)</strong> : limites internes</li>
          <li><strong>Opportunités (O)</strong> : tendances externes favorables</li>
          <li><strong>Menaces (T)</strong> : risques externes</li>
        </ul>
        <div class="highlight-box">
          ⚠️ <strong>Erreur fréquente :</strong> Confondre interne et externe.
        </div>
        <h3>Du SWOT au TOWS</h3>
        <ul>
          <li><strong>SO</strong> : forces × opportunités</li>
          <li><strong>WO</strong> : faiblesses × opportunités</li>
          <li><strong>ST</strong> : forces × menaces</li>
          <li><strong>WT</strong> : faiblesses × menaces</li>
        </ul>
        <blockquote>Bien utilisée, l'analyse SWOT reste un outil stratégique puissant.</blockquote>
      `,
      ar: `<h3>مقدمة</h3><p>يُختزل SWOT غالبا في قائمة بسيطة دون تحليل.</p>`,
      en: `<h3>Introduction</h3><p>SWOT is often reduced to a simple list without analysis.</p>`
    }
  },

  // ============ ARTICLE 3 : PRISMA 2020 ============
  {
    id: 3,
    category: 'methodologie',
    icon: '🔬',
    date:     { fr: 'Avril 2026', ar: 'أبريل 2026', en: 'April 2026' },
    readTime: { fr: '10 min', ar: '10 دقائق', en: '10 min' },
    badge:    { fr: 'Méthodologie de Recherche', ar: 'منهجية البحث', en: 'Research Methodology' },
    title: {
      fr: 'PRISMA 2020 : Guide pratique pour réussir votre revue systématique',
      ar: 'PRISMA 2020: دليل عملي',
      en: 'PRISMA 2020: Practical Guide'
    },
    excerpt: {
      fr: "La méthode PRISMA 2020 est devenue la référence internationale pour les revues systématiques.",
      ar: "أصبحت PRISMA 2020 المرجع الدولي للمراجعات المنهجية.",
      en: "PRISMA 2020 has become the international reference for systematic reviews."
    },
    content: {
      fr: `
        <h3>Qu'est-ce que PRISMA 2020 ?</h3>
        <p>Cadre méthodologique standardisé pour les revues systématiques, divisé en 27 items et 7 sections.</p>
        <div class="highlight-box">
          📌 <strong>Important :</strong> PRISMA est un cadre de reporting, pas une méthodologie en soi.
        </div>
        <h3>6 étapes pratiques</h3>
        <ul>
          <li>Protocole sur PROSPERO</li>
          <li>Recherche multi-bases (Scopus, WoS, ScienceDirect)</li>
          <li>Double screening en aveugle</li>
          <li>Extraction standardisée</li>
          <li>Évaluation qualité (ROBIS, JBI)</li>
          <li>Synthèse narrative ou méta-analyse</li>
        </ul>
        <blockquote>J'ai utilisé personnellement PRISMA 2020 pour ma publication scientifique internationale.</blockquote>
      `,
      ar: `<h3>ما هي PRISMA 2020؟</h3><p>إطار منهجي للمراجعات المنهجية.</p>`,
      en: `<h3>What is PRISMA 2020?</h3><p>Standardized framework for systematic reviews.</p>`
    }
  },

  // ============ ARTICLE 4 : AUDIT SCOLAIRE ============
  {
    id: 4,
    category: 'audit',
    icon: '🔍',
    date:     { fr: 'Mars 2026', ar: 'مارس 2026', en: 'March 2026' },
    readTime: { fr: '7 min', ar: '7 دقائق', en: '7 min' },
    badge:    { fr: 'Audit & Contrôle', ar: 'تدقيق ومراقبة', en: 'Audit & Control' },
    title: {
      fr: "L'audit organisationnel appliqué aux établissements scolaires",
      ar: "التدقيق التنظيمي للمؤسسات المدرسية",
      en: "Organizational audit applied to schools"
    },
    excerpt: {
      fr: "Comment l'audit peut-il transformer la gouvernance des établissements éducatifs ?",
      ar: "كيف يمكن للتدقيق أن يحول حوكمة المؤسسات التعليمية؟",
      en: "How can audit transform educational governance?"
    },
    content: {
      fr: `
        <h3>Pourquoi auditer un établissement scolaire ?</h3>
        <p>Pour améliorer la gouvernance, l'efficience et l'impact pédagogique.</p>
        <h3>Les 4 dimensions de l'audit scolaire</h3>
        <ul>
          <li><strong>Audit pédagogique</strong> : qualité de l'enseignement</li>
          <li><strong>Audit organisationnel</strong> : structure et processus</li>
          <li><strong>Audit financier</strong> : gestion budgétaire</li>
          <li><strong>Audit de conformité</strong> : respect des textes réglementaires</li>
        </ul>
        <div class="highlight-box">
          🎯 <strong>L'objectif :</strong> identifier les leviers d'amélioration, pas juger.
        </div>
        <blockquote>L'audit, bien conduit, est un puissant outil de transformation.</blockquote>
      `,
      ar: `<h3>لماذا تدقيق المدرسة؟</h3><p>لتحسين الحوكمة والفعالية.</p>`,
      en: `<h3>Why audit a school?</h3><p>To improve governance and efficiency.</p>`
    }
  }

  // ⬇️⬇️⬇️ AJOUTEZ VOS NOUVEAUX ARTICLES CI-DESSOUS ⬇️⬇️⬇️
  // N'oubliez pas de mettre une VIRGULE après l'article 4 ci-dessus
  // avant d'ajouter votre nouvel article !
  //
  // ════════════════════════════════════════════════════════════
  // MODÈLE À COPIER-COLLER (décommentez en supprimant les /* et */)
  // ════════════════════════════════════════════════════════════
  /*
  ,
  {
    id: 5,                              // ⚠️ NUMÉRO UNIQUE (5, 6, 7...)
    category: 'management',             // ia | management | methodologie | audit | pedagogie | digital
    icon: '📊',                         // Choisissez un emoji
    date:     { fr: 'Juin 2026',  ar: 'يونيو 2026',  en: 'June 2026' },
    readTime: { fr: '5 min',      ar: '5 دقائق',     en: '5 min' },
    badge:    { fr: 'Catégorie',  ar: 'الفئة',       en: 'Category' },
    title: {
      fr: "Titre en français",
      ar: "العنوان بالعربية",
      en: "Title in English"
    },
    excerpt: {
      fr: "Résumé court (1-2 phrases) qui apparaît sur la carte.",
      ar: "ملخص قصير يظهر على البطاقة.",
      en: "Short summary displayed on the card."
    },
    content: {
      fr: `
        <h3>Introduction</h3>
        <p>Votre premier paragraphe.</p>
        
        <h3>Section 1</h3>
        <p>Contenu de la section.</p>
        <ul>
          <li>Point 1</li>
          <li>Point 2</li>
        </ul>
        
        <div class="highlight-box">
          💡 <strong>À retenir :</strong> Message clé.
        </div>
        
        <h3>Conclusion</h3>
        <p>Votre conclusion.</p>
        
        <blockquote>Une citation marquante.</blockquote>
      `,
      ar: `<h3>مقدمة</h3><p>المحتوى بالعربية.</p>`,
      en: `<h3>Introduction</h3><p>Content in English.</p>`
    }
  }
  */

];