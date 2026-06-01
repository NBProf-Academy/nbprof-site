const ARTICLES = [

    {
    id: 1,
    category: 'ia',
    icon: '🤖',
    date:     { fr: 'Mai 2026', ar: 'ماي 2026', en: 'May 2026' },
    readTime: { fr: '12 min', ar: '12 دقيقة', en: '12 min' },
    badge:    { fr: 'IA & Éducation · Recherche Scientifique', ar: 'الذكاء الاصطناعي والتعليم · بحث علمي', en: 'AI & Education · Scientific Research' },
    title: {
      fr: "L'IA peut-elle vraiment transformer l'école marocaine ?",
      ar: "هل يمكن للذكاء الاصطناعي حقًا أن يحول المدرسة المغربية؟",
      en: "Can AI really transform the Moroccan school?"
    },
    excerpt: {
      fr: "Et si l'IA n'était pas une menace pour l'enseignant, mais son levier de transformation le plus puissant ? Après 23 ans sur le terrain et une publication scientifique internationale, voici ce que la recherche révèle.",
      ar: "ماذا لو لم يكن الذكاء الاصطناعي تهديدًا للأستاذ، بل أقوى رافعة لتحوله؟ بعد 23 سنة في الميدان ومنشور علمي دولي، إليكم ما يكشفه البحث.",
      en: "What if AI was not a threat to teachers but their most powerful lever for transformation? After 23 years in the field and an international scientific publication, here is what research reveals."
    },
    content: {
      fr: `
        <p>La question agite les salles des professeurs, les directions d'établissement et les ministères de l'éducation à travers le monde. Au Maroc, elle prend une dimension particulière : comment un système éducatif en pleine mutation peut-il intégrer l'intelligence artificielle de manière intelligente, équitable et efficace ?</p>

        <h3>1. L'IA dans l'éducation : de quoi parle-t-on vraiment ?</h3>
        <p>L'intelligence artificielle dans le domaine éducatif ne se résume pas aux robots ou aux chatbots. Elle englobe un ensemble de technologies et d'outils qui permettent d'analyser, d'anticiper et de personnaliser l'expérience d'apprentissage. On parle de :</p>
        <ul>
          <li><strong>Systèmes de tutorat intelligent</strong> qui s'adaptent au niveau de chaque élève</li>
          <li><strong>Outils d'analyse de données</strong> pour suivre les progrès et identifier les difficultés</li>
          <li><strong>Plateformes d'apprentissage adaptatif</strong> qui ajustent le contenu en temps réel</li>
          <li><strong>Outils d'aide à la gestion</strong> pour les directeurs d'établissement</li>
          <li><strong>Systèmes de détection précoce</strong> du décrochage scolaire</li>
        </ul>

        <div class="highlight-box">
          💡 <strong>À retenir :</strong> L'IA n'est pas destinée à remplacer l'enseignant. Elle est conçue pour l'amplifier, lui libérer du temps et lui fournir des données précieuses pour mieux accompagner ses élèves.
        </div>

        <h3>2. Ce que dit la recherche scientifique</h3>
        <p>Dans le cadre de mes travaux de master en Audit et Management Stratégique des Organisations à l'Université Cadi Ayyad, j'ai mené une <strong>revue de littérature systématique selon la méthode PRISMA 2020</strong>, publiée dans l'<em>African Journal of Management Engineering and Technology</em> (Vol. 4, N°2, 2026).</p>

        <blockquote>
          "L'intelligence artificielle constitue un levier de transformation des pratiques managériales dans les établissements scolaires publics, à condition d'être intégrée dans une stratégie institutionnelle cohérente et humaine."
        </blockquote>

        <p>Les résultats de cette recherche mettent en lumière trois axes majeurs de transformation :</p>

        <h3>Axe 1 — La personnalisation des apprentissages</h3>
        <p>L'IA permet d'adapter le rythme, le contenu et la méthode d'enseignement au profil de chaque élève. Dans un système où les classes peuvent compter 35 à 40 élèves, cette personnalisation à grande échelle représente une révolution pédagogique.</p>

        <h3>Axe 2 — L'optimisation du management scolaire</h3>
        <p>Les directeurs d'établissement disposent désormais d'outils capables d'analyser les données de performance, d'absentéisme, de résultats et de ressources humaines pour prendre des décisions stratégiques éclairées.</p>

        <h3>Axe 3 — L'équité et l'accessibilité</h3>
        <p>L'IA peut réduire les inégalités en donnant accès à des ressources pédagogiques de qualité aux élèves des zones rurales ou défavorisées, là où les enseignants qualifiés manquent parfois cruellement.</p>

        <h3>3. Les défis spécifiques au contexte marocain</h3>
        <p>Intégrer l'IA dans l'école marocaine nécessite de faire face à plusieurs défis réels :</p>
        <ul>
          <li><strong>Infrastructure numérique</strong> : l'accès à internet reste inégal entre zones urbaines et rurales</li>
          <li><strong>Formation des enseignants</strong> : la maîtrise des outils numériques varie considérablement</li>
          <li><strong>Langue et culture</strong> : les outils d'IA sont majoritairement développés en anglais ou en français</li>
          <li><strong>Résistance au changement</strong> : toute transformation organisationnelle rencontre des résistances naturelles</li>
          <li><strong>Budget</strong> : l'intégration technologique représente un investissement initial significatif</li>
        </ul>

        <div class="highlight-box">
          🎯 <strong>Ma conviction après 23 ans de terrain :</strong> Ces défis ne sont pas des obstacles insurmontables. Ils sont des opportunités de concevoir une intégration de l'IA qui soit véritablement adaptée au contexte marocain, portée par des enseignants formés et motivés.
        </div>

        <h3>4. Les bonnes pratiques observées dans la littérature</h3>
        <p>La revue systématique PRISMA 2020 a permis d'identifier plusieurs bonnes pratiques issues d'expériences internationales applicables au contexte marocain :</p>
        <ul>
          <li><strong>1. Commencer petit</strong> : piloter l'IA dans quelques établissements avant de généraliser</li>
          <li><strong>2. Former en priorité</strong> : investir dans la formation des enseignants et des directeurs</li>
          <li><strong>3. Impliquer les acteurs</strong> : associer enseignants, parents et élèves à la démarche</li>
          <li><strong>4. Mesurer l'impact</strong> : définir des indicateurs clairs pour évaluer les résultats</li>
          <li><strong>5. Préserver l'humain</strong> : maintenir la relation enseignant-élève au cœur du dispositif</li>
        </ul>

        <h3>5. Conclusion : une transformation à guider, pas à subir</h3>
        <p>L'intelligence artificielle va transformer l'école marocaine. Ce n'est plus une question de "si" mais de "comment". La vraie question est de savoir si nous, acteurs de l'éducation, allons être les spectateurs ou les architectes de cette transformation.</p>

        <p>Mon parcours de 23 ans dans l'enseignement primaire, enrichi par mes recherches académiques, me convainc que <strong>les enseignants marocains ont toutes les ressources humaines et professionnelles pour guider cette transformation</strong>. Ils ont besoin d'être accompagnés, formés et valorisés dans ce rôle.</p>

        <blockquote>
          "La technologie est un outil. L'enseignant est un guide. Ensemble, ils peuvent bâtir une école plus juste, plus efficace et plus humaine."<br>
          <strong>— NB</strong>
        </blockquote>

        <p><strong>Noamane Boulahcen</strong><br>
        Enseignant-Chercheur · Futur Auditeur · Master AMSO – Université Cadi Ayyad<br>
        Auteur d'une publication scientifique internationale (PRISMA 2020)</p>

        <div class="highlight-box">
          📩 Vous avez un mémoire sur l'IA dans l'éducation ? Besoin d'accompagnement en recherche scientifique ?<br>
          <strong>Contactez-moi sur NBProf.com</strong>
        </div>

        <p><strong>Référence scientifique :</strong><br>
        Nouib A., Boulkhir L., Boulahcen N. (2026). <em>L'intelligence artificielle comme levier de transformation des pratiques managériales dans les établissements scolaires publics : une revue de littérature systématique selon la méthode PRISMA 2020.</em> African Journal of Management Engineering and Technology, Vol. 4, N°2, pp. 153-165. SupMoTI Rabat, Maroc.</p>

        <p style="color:#888;font-size:0.9em;">#IA #EducationMaroc #ManagementScolaire #PRISMA2020 #NBProf #AMSO</p>
      `,
      ar: `
        <p>السؤال يشغل قاعات الأساتذة، إدارات المؤسسات ووزارات التعليم في جميع أنحاء العالم. في المغرب، يأخذ بعدًا خاصًا: كيف يمكن لنظام تعليمي في تحول كبير أن يدمج الذكاء الاصطناعي بطريقة ذكية وعادلة وفعالة؟</p>

        <h3>1. الذكاء الاصطناعي في التعليم: ما الذي نتحدث عنه حقًا؟</h3>
        <p>الذكاء الاصطناعي في المجال التعليمي لا يقتصر على الروبوتات أو روبوتات الدردشة. يشمل مجموعة من التقنيات والأدوات التي تسمح بتحليل وتوقع وتخصيص تجربة التعلم:</p>
        <ul>
          <li><strong>أنظمة التدريس الذكي</strong> التي تتكيف مع مستوى كل تلميذ</li>
          <li><strong>أدوات تحليل البيانات</strong> لمتابعة التقدم وتحديد الصعوبات</li>
          <li><strong>منصات التعلم التكيفي</strong> التي تضبط المحتوى في الوقت الفعلي</li>
          <li><strong>أدوات المساعدة في الإدارة</strong> لمديري المؤسسات</li>
          <li><strong>أنظمة الكشف المبكر</strong> عن الانقطاع المدرسي</li>
        </ul>

        <div class="highlight-box">
          💡 <strong>للتذكير:</strong> الذكاء الاصطناعي ليس مصممًا ليحل محل الأستاذ. بل صُمم لتعزيز قدراته، وتحرير وقته، وتزويده ببيانات قيمة لمرافقة تلاميذه بشكل أفضل.
        </div>

        <h3>2. ما يقوله البحث العلمي</h3>
        <p>في إطار أعمال الماستر في التدقيق والإدارة الاستراتيجية للمنظمات بجامعة القاضي عياض، أجريت <strong>مراجعة منهجية للأدبيات وفق منهجية PRISMA 2020</strong>، منشورة في <em>African Journal of Management Engineering and Technology</em> (المجلد 4، العدد 2، 2026).</p>

        <blockquote>
          "الذكاء الاصطناعي يشكل رافعة لتحويل الممارسات الإدارية في المؤسسات المدرسية العمومية، شرط دمجه ضمن استراتيجية مؤسسية متماسكة وإنسانية."
        </blockquote>

        <h3>3. التحديات الخاصة بالسياق المغربي</h3>
        <ul>
          <li><strong>البنية التحتية الرقمية</strong>: الوصول إلى الإنترنت يبقى متفاوتًا</li>
          <li><strong>تكوين الأساتذة</strong>: التحكم في الأدوات الرقمية يتفاوت كثيرًا</li>
          <li><strong>اللغة والثقافة</strong>: أدوات الذكاء الاصطناعي مطورة بالإنجليزية أو الفرنسية</li>
          <li><strong>مقاومة التغيير</strong>: كل تحول تنظيمي يواجه مقاومات طبيعية</li>
          <li><strong>الميزانية</strong>: الدمج التقني يمثل استثمارًا أوليًا كبيرًا</li>
        </ul>

        <div class="highlight-box">
          🎯 <strong>قناعتي بعد 23 سنة في الميدان:</strong> هذه التحديات ليست عوائق لا يمكن تجاوزها. بل هي فرص لتصميم دمج للذكاء الاصطناعي يكون مكيفًا فعلاً مع السياق المغربي.
        </div>

        <h3>4. الممارسات الجيدة الملاحظة في الأدبيات</h3>
        <ul>
          <li><strong>1. البدء بشكل صغير</strong>: تجربة الذكاء الاصطناعي في بعض المؤسسات قبل التعميم</li>
          <li><strong>2. التكوين أولاً</strong>: الاستثمار في تكوين الأساتذة والمديرين</li>
          <li><strong>3. إشراك الفاعلين</strong>: ربط الأساتذة والآباء والتلاميذ بالمسعى</li>
          <li><strong>4. قياس الأثر</strong>: تحديد مؤشرات واضحة لتقييم النتائج</li>
          <li><strong>5. الحفاظ على الإنساني</strong>: الإبقاء على علاقة الأستاذ-التلميذ في صلب المنظومة</li>
        </ul>

        <h3>5. خاتمة: تحول يجب توجيهه لا تحمله</h3>
        <p>الذكاء الاصطناعي سيحول المدرسة المغربية. لم يعد سؤال "إذا" بل سؤال "كيف". السؤال الحقيقي هو: هل سنكون متفرجين أم مهندسي هذا التحول؟</p>

        <blockquote>
          "التكنولوجيا أداة. الأستاذ مرشد. معًا، يمكنهما بناء مدرسة أكثر عدالة وفعالية وإنسانية."<br>
          <strong>— ن.ب</strong>
        </blockquote>

        <p><strong>نعمان بولحسن</strong><br>
        أستاذ-باحث · مدقق المستقبل · ماستر AMSO – جامعة القاضي عياض</p>

        <div class="highlight-box">
          📩 لديك مذكرة حول الذكاء الاصطناعي في التعليم؟ تحتاج مرافقة في البحث العلمي؟<br>
          <strong>تواصل معي على NBProf.com</strong>
        </div>
      `,
      en: `
        <p>The question stirs teachers' rooms, school administrations, and education ministries worldwide. In Morocco, it takes on a particular dimension: how can an educational system in full transformation integrate artificial intelligence in an intelligent, equitable, and effective way?</p>

        <h3>1. AI in education: what are we really talking about?</h3>
        <p>Artificial intelligence in education is not limited to robots or chatbots. It encompasses a set of technologies and tools that allow us to analyze, anticipate, and personalize the learning experience:</p>
        <ul>
          <li><strong>Intelligent tutoring systems</strong> that adapt to each student's level</li>
          <li><strong>Data analysis tools</strong> to track progress and identify difficulties</li>
          <li><strong>Adaptive learning platforms</strong> that adjust content in real time</li>
          <li><strong>Management support tools</strong> for school directors</li>
          <li><strong>Early detection systems</strong> for school dropout</li>
        </ul>

        <div class="highlight-box">
          💡 <strong>Key point:</strong> AI is not meant to replace teachers. It is designed to amplify them, free up their time, and provide them with valuable data to better support their students.
        </div>

        <h3>2. What scientific research says</h3>
        <p>As part of my Master's work in Audit and Strategic Management of Organizations at Cadi Ayyad University, I conducted a <strong>systematic literature review using the PRISMA 2020 methodology</strong>, published in the <em>African Journal of Management Engineering and Technology</em> (Vol. 4, No. 2, 2026).</p>

        <blockquote>
          "Artificial intelligence is a lever for transforming managerial practices in public schools, provided it is integrated into a coherent and human institutional strategy."
        </blockquote>

        <h3>3. Morocco-specific challenges</h3>
        <ul>
          <li><strong>Digital infrastructure</strong>: internet access remains unequal between urban and rural areas</li>
          <li><strong>Teacher training</strong>: mastery of digital tools varies considerably</li>
          <li><strong>Language and culture</strong>: AI tools are mostly developed in English or French</li>
          <li><strong>Resistance to change</strong>: any organizational transformation encounters natural resistance</li>
          <li><strong>Budget</strong>: technological integration represents a significant initial investment</li>
        </ul>

        <div class="highlight-box">
          🎯 <strong>My conviction after 23 years in the field:</strong> These challenges are not insurmountable obstacles. They are opportunities to design an AI integration truly adapted to the Moroccan context.
        </div>

        <h3>4. Best practices from the literature</h3>
        <ul>
          <li><strong>1. Start small</strong>: pilot AI in a few institutions before scaling up</li>
          <li><strong>2. Train as a priority</strong>: invest in teacher and director training</li>
          <li><strong>3. Involve stakeholders</strong>: associate teachers, parents, and students</li>
          <li><strong>4. Measure impact</strong>: define clear indicators to evaluate results</li>
          <li><strong>5. Preserve the human</strong>: maintain the teacher-student relationship at the heart</li>
        </ul>

        <h3>5. Conclusion: a transformation to guide, not to endure</h3>
        <p>AI will transform Moroccan schools. It is no longer a question of "if" but "how". The real question is whether we, education actors, will be spectators or architects of this transformation.</p>

        <blockquote>
          "Technology is a tool. The teacher is a guide. Together, they can build a fairer, more effective, and more human school."<br>
          <strong>— NB</strong>
        </blockquote>

        <p><strong>Noamane Boulahcen</strong><br>
        Teacher-Researcher · Future Auditor · Master AMSO – Cadi Ayyad University</p>

        <div class="highlight-box">
          📩 Do you have a thesis on AI in education? Need support in scientific research?<br>
          <strong>Contact me on NBProf.com</strong>
        </div>
      `
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
