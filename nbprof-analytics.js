/*!
 * NBProf Analytics — Google Tag Manager + Consent Mode v2 + événements PFE
 * À inclure dans le <head> de CHAQUE page, le plus haut possible :
 *   <script src="/nbprof-analytics.js"></script>
 * (sur recherche.nbprof.com : <script src="https://nbprof.com/nbprof-analytics.js"></script>)
 */
(function () {
  var GTM_ID = 'GTM-PDQ92BZ3';

  /* ================= 1. Consent Mode v2 (avant GTM) ================= */
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { dataLayer.push(arguments); };

  function lireChoix() {
    try { return localStorage.getItem('nbprof_consent'); } catch (e) { return null; }
  }
  var choixInitial = lireChoix();
  var etat = choixInitial === 'accepte' ? 'granted' : 'denied';
  gtag('consent', 'default', {
    analytics_storage: etat,
    ad_storage: etat,
    ad_user_data: etat,
    ad_personalization: etat,
    wait_for_update: 500
  });

  /* ================= 2. Chargement de Google Tag Manager ================= */
  dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var gtm = document.createElement('script');
  gtm.async = true;
  gtm.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
  var premier = document.getElementsByTagName('script')[0];
  if (premier && premier.parentNode) premier.parentNode.insertBefore(gtm, premier);
  else document.head.appendChild(gtm);

  /* ================= Outils communs ================= */
  function langue() {
    var l = (typeof currentLang !== 'undefined' && currentLang) ? currentLang
          : (document.documentElement.getAttribute('lang') || 'fr');
    l = String(l).slice(0, 2).toLowerCase();
    return (l === 'ar' || l === 'en') ? l : 'fr';
  }
  function nomPage() {
    var p = location.pathname.replace(/\/index\.html$/, '/');
    return location.hostname + p;
  }
  function nbTrack(nom, params) {
    var p = params || {};
    p.event = nom;
    p.langue_site = langue();
    p.page_nbprof = nomPage();
    dataLayer.push(p);
  }
  window.nbTrack = nbTrack;

  /* ================= 3. Bannière de consentement ================= */
  var TXT = {
    fr: { t: "<strong>Statistiques de visite.</strong> NBProf utilise Google Analytics pour mesurer l'audience et améliorer ses ressources pédagogiques (données anonymisées, à des fins de recherche). <a href='https://nbprof.com/confidentialite.html'>En savoir plus</a>", ok: "Accepter", no: "Refuser" },
    ar: { t: "<strong>إحصائيات الزيارة.</strong> يستخدم NBProf خدمة Google Analytics لقياس عدد الزوار وتحسين موارده التعليمية (بيانات مجهولة الهوية لأغراض البحث). <a href='https://nbprof.com/confidentialite.html'>اعرف المزيد</a>", ok: "قبول", no: "رفض" },
    en: { t: "<strong>Visit statistics.</strong> NBProf uses Google Analytics to measure audience and improve its learning resources (anonymised data, for research purposes). <a href='https://nbprof.com/confidentialite.html'>Learn more</a>", ok: "Accept", no: "Decline" }
  };
  var box = null;

  function remplirBanniere() {
    if (!box) return;
    var l = langue(), t = TXT[l];
    box.dir = l === 'ar' ? 'rtl' : 'ltr';
    box.querySelector('.nbc-txt').innerHTML = t.t;
    box.querySelector('.nbc-ok').textContent = t.ok;
    box.querySelector('.nbc-no').textContent = t.no;
  }

  function enregistrer(choix) {
    try { localStorage.setItem('nbprof_consent', choix); } catch (e) {}
    var v = choix === 'accepte' ? 'granted' : 'denied';
    gtag('consent', 'update', { analytics_storage: v, ad_storage: v, ad_user_data: v, ad_personalization: v });
    dataLayer.push({ event: 'choix_consentement', choix: choix });
    if (box) box.classList.remove('nbc-show');
  }

  function creerBanniere() {
    var css = document.createElement('style');
    css.textContent =
      '#nbConsent{position:fixed;left:16px;right:16px;bottom:16px;z-index:99999;max-width:640px;margin:0 auto;' +
      'background:#0D0D28;border:1px solid rgba(201,168,76,.4);border-radius:12px;padding:18px 20px;' +
      'box-shadow:0 20px 50px rgba(0,0,0,.6);display:none;font:15px/1.55 "Segoe UI",Tahoma,sans-serif;color:rgba(245,240,232,.75)}' +
      '#nbConsent.nbc-show{display:block}' +
      '#nbConsent strong{color:#C9A84C}' +
      '#nbConsent a{color:#F0D080;text-decoration:underline}' +
      '#nbConsent .nbc-actions{display:flex;gap:10px;margin-top:14px;flex-wrap:wrap}' +
      '#nbConsent button{padding:9px 18px;border-radius:6px;font-weight:600;cursor:pointer;font-size:.95em;font-family:inherit}' +
      '#nbConsent .nbc-ok{background:#C9A84C;color:#07071A;border:none}' +
      '#nbConsent .nbc-no{background:transparent;color:#F5F0E8;border:1px solid rgba(201,168,76,.4)}';
    document.head.appendChild(css);

    box = document.createElement('div');
    box.id = 'nbConsent';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-live', 'polite');
    box.innerHTML = '<p class="nbc-txt"></p><div class="nbc-actions">' +
      '<button type="button" class="nbc-ok"></button><button type="button" class="nbc-no"></button></div>';
    document.body.appendChild(box);
    box.querySelector('.nbc-ok').onclick = function () { enregistrer('accepte'); };
    box.querySelector('.nbc-no').onclick = function () { enregistrer('refuse'); };
    remplirBanniere();
    if (!lireChoix()) box.classList.add('nbc-show');
  }

  /* ================= 4. Événements ================= */
  function brancherEvenements() {

    /* 4a. Articles en panneau (page d'accueil) + durée de lecture */
    if (typeof window.openArticle === 'function') {
      var articleOuvert = null, debut = 0;
      var _open = window.openArticle;
      window.openArticle = function (id) {
        _open.apply(this, arguments);
        var a = (typeof ARTICLES !== 'undefined') ? ARTICLES.find(function (x) { return x.id === id; }) : null;
        articleOuvert = {
          article_id: id,
          article_titre: a ? (a.title[langue()] || a.title.fr) : String(id),
          article_categorie: a ? a.category : ''
        };
        debut = Date.now();
        nbTrack('ouverture_article', Object.assign({}, articleOuvert));
      };
      if (typeof window.closeModal === 'function') {
        var _close = window.closeModal;
        window.closeModal = function () {
          if (articleOuvert) {
            nbTrack('fin_lecture_article', Object.assign({}, articleOuvert,
              { duree_lecture_sec: Math.round((Date.now() - debut) / 1000) }));
            articleOuvert = null;
          }
          _close.apply(this, arguments);
        };
      }
    }

    /* 4b. Changement de langue */
    if (typeof window.setLang === 'function') {
      var _setLang = window.setLang;
      window.setLang = function (lang) {
        _setLang.apply(this, arguments);
        remplirBanniere();
        nbTrack('changement_langue', { nouvelle_langue: lang });
      };
    }

    /* 4c. Filtres des publications */
    if (typeof window.filterPubs === 'function') {
      var _filter = window.filterPubs;
      window.filterPubs = function (cat) {
        _filter.apply(this, arguments);
        nbTrack('filtre_publications', { filtre: cat });
      };
    }

    /* 4d. Navigation interne */
    if (typeof window.scrollToSection === 'function') {
      var _scroll = window.scrollToSection;
      window.scrollToSection = function (id) {
        _scroll.apply(this, arguments);
        nbTrack('navigation_section', { section: id });
      };
    }

    /* 4e. Clics vers les ressources de l'écosystème (toutes les pages) */
    document.addEventListener('click', function (e) {
      var lien = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (!lien) return;
      var href = lien.getAttribute('href') || '';
      var type = null;
      if (href.indexOf('recherche.nbprof.com') > -1) type = 'recherche_nbprof';
      else if (href.indexOf('youtube.com') > -1) type = 'youtube';
      else if (href.indexOf('/dashboard') > -1) type = 'dashboard';
      else if (href.indexOf('amso2026') > -1) type = 'amso2026';
      else if (href.indexOf('outils-ia-doctorants') > -1) type = 'outils_ia';
      else if (href.indexOf('revues.imist.ma') > -1) type = 'publication_ajmet';
      else if (href.indexOf('linkedin.com') > -1) type = 'linkedin';
      else if (href.indexOf('mailto:') === 0) type = 'email';
      else if (/\.(pdf|docx?|pptx?|xlsx?|zip)(\?|$)/i.test(href)) type = 'telechargement';
      if (type) nbTrack('clic_ressource', {
        ressource: type, lien_url: href,
        lien_texte: (lien.textContent || '').trim().slice(0, 80)
      });
    }, true);

    /* 4f. Formulaires (contact ou autres) */
    document.querySelectorAll('form').forEach(function (f) {
      f.addEventListener('submit', function () {
        nbTrack('envoi_formulaire', { formulaire: f.id || f.className || 'formulaire' });
      });
    });

    /* 4g. Sections réellement vues */
    if ('IntersectionObserver' in window) {
      var vues = {};
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          var id = en.target.id;
          if (en.isIntersecting && id && !vues[id]) {
            vues[id] = true;
            nbTrack('section_vue', { section: id });
          }
        });
      }, { threshold: 0.4 });
      document.querySelectorAll('section[id]').forEach(function (s) { obs.observe(s); });
    }
  }

  /* Attendre que la page (et ses propres scripts) soit chargée */
  function demarrer() {
    try { creerBanniere(); } catch (e) {}
    try { brancherEvenements(); } catch (e) {}
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer);
  else demarrer();
})();
