(() => {
  const ICONS = {
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    compass: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z"/></svg>',
    gift: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10h16v11H4zM2.5 6.5h19v3.5h-19zM12 6.5V21M12 6.5H8.7A2.7 2.7 0 1 1 11 2.4L12 6.5Zm0 0h3.3A2.7 2.7 0 1 0 13 2.4L12 6.5Z"/></svg>',
    book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H11v18H6.5A2.5 2.5 0 0 0 4 22V4.5Zm16 0A2.5 2.5 0 0 0 17.5 2H13v18h4.5A2.5 2.5 0 0 1 20 22V4.5Z"/></svg>',
    calc: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M8 6h8v4H8zM8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/></svg>',
    flask: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 2h6M10 2v6l-5.5 9.2A3 3 0 0 0 7.1 22h9.8a3 3 0 0 0 2.6-4.8L14 8V2M7.5 16h9"/></svg>',
    landmark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10h18M5 10v8M9 10v8M15 10v8M19 10v8M2 22h20M12 2l9 5H3l9-5Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="4" width="19" height="16" rx="2"/><path d="m3 6 9 7 9-7"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
    message: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"/></svg>',
    user: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 22a8 8 0 0 1 16 0"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V4h6v3M3 12h18"/></svg>',
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
    building: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 22h18M5 22V8l7-4 7 4v14M9 22v-4h6v4M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01"/></svg>',
    users: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M8.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21v-2a4 4 0 0 0-3-3.9M16.5 3.1a4 4 0 0 1 0 7.8"/></svg>',
    copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></svg>',
    bank: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 9 5H3l9-5ZM5 10v7M9 10v7M15 10v7M19 10v7M3 21h18M2 18h20"/></svg>',
    upload: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V4M7 9l5-5 5 5M4 20h16"/></svg>',
    lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>'
  };

  function icon(name) { return ICONS[name] || ICONS.arrow; }

  const page = document.body.dataset.page || 'home';
  const navItems = [
    ['home','Home','index.html'],
    ['donation','Donation','donation.html'],
    ['about','About Us','about-us.html'],
    ['jobs','Apply for Job','apply-for-job.html'],
    ['admission','Admission','admission.html'],
    ['portal','School Portal','portal.html'],
    ['contact','Contact Us','contact-us.html']
  ];

  const header = document.getElementById('site-header');
  if (header) {
    header.innerHTML = `
      <a class="skip-link" href="#main">Skip to content</a>
      <header class="site-header">
        <div class="container nav-wrap">
          <a class="brand" href="index.html" aria-label="Sheeraz Gul Education System home">
            <img src="assets/images/logo.png" alt="Sheeraz Gul Education System logo" decoding="async">
            <strong class="brand-name">Sheeraz Gul Education System</strong>
          </a>
          <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false">${icon('menu')}</button>
          <nav class="main-nav" aria-label="Primary navigation">
            <div class="nav-links">
              ${navItems.map(([id,label,href]) => `<a class="${page===id?'active':''}" href="${href}">${label}</a>`).join('')}
            </div>
            <button class="btn btn-primary nav-donate" data-donate-open><span>Donate Now</span></button>
          </nav>
        </div>
      </header>`;
  }

  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-grid">
          <div class="footer-brand">
            <img src="assets/images/logo.png" alt="Sheeraz Gul Education System logo" loading="lazy" decoding="async">
            <div><h3>Sheeraz Gul Education System</h3><p>Free schooling for all — expanding access to quality education across underserved communities in Sindh.</p></div>
          </div>
          <div><h4>Quick Links</h4><div class="footer-links">${navItems.map(([id,label,href]) => `<a href="${href}">${label}</a>`).join('')}</div></div>
          <div><h4>Contact</h4><div class="footer-contact">
            <a href="tel:+923403200056">${icon('phone')}<span>+92 340 3200 056</span></a>
            <a href="mailto:SheerazGuledu@gmx.com">${icon('mail')}<span>SheerazGuledu@gmx.com</span></a>
            <a href="https://wa.me/923003346501" target="_blank" rel="noopener" aria-label="WhatsApp Saleh Ashrafi at 0300 3346501">${icon('message')}<span>WhatsApp: 0300 3346501</span></a>
          </div></div>
        </div>
        <div class="container footer-bottom"><span>© <span data-year></span> Sheeraz Gul Education System.</span><span>Quality education • Stronger communities • A better tomorrow</span></div>
      </footer>`;
  }

  const modalHost = document.getElementById('global-modal-host') || (() => { const d=document.createElement('div'); d.id='global-modal-host'; document.body.appendChild(d); return d; })();
  modalHost.innerHTML = `
    <div class="modal" id="donation-modal" role="dialog" aria-modal="true" aria-labelledby="donation-modal-title" hidden>
      <div class="modal-backdrop" data-modal-close></div>
      <div class="modal-panel donation-modal-panel" tabindex="-1">
        <button class="modal-close" aria-label="Close donation form" data-modal-close>×</button>
        <div class="section-kicker">Donate now form</div>
        <h2 id="donation-modal-title">Fill out the donation form</h2>
        <p class="modal-intro">Complete the form below and our team can contact you to confirm your support.</p>
        <form class="form-grid" data-form="donation">
          <label>Full Name *<input required name="fullName" autocomplete="name"></label>
          <label>Phone Number *<input required name="phone" type="tel" autocomplete="tel"></label>
          <label>Email Address *<input required name="email" type="email" autocomplete="email"></label>
          <label>Donation Amount *<input required name="amount" inputmode="decimal" placeholder="Enter amount"></label>
          <label>Donation Purpose<select name="purpose"><option>General Education Fund</option><option>Student Learning Materials</option><option>Girls’ Education Support</option><option>Classroom & School Facilities</option><option>Teacher & Learning Resources</option></select></label>
          <label>Preferred Payment Method<select name="method"><option>Bank Transfer</option><option>Cash / Cheque Coordination</option></select></label>
          <div class="form-span-2 compact-bank-list">
            <h3>Bank Transfer Details</h3>
            <div class="mini-bank-grid">
              <div><strong>Sindh Bank Limited</strong><small>Sheeraz Gul Education System High 220105010</small><code>PK62SIND0004051882104001</code></div>
              <div><strong>Bank Al Habib Limited</strong><small>Sheeraz Gul Memon</small><code>PK81BAHL10210981010198010</code></div>
              <div><strong>MCB Islamic Bank Ltd.</strong><small>Sheeraz Gul Memon</small><code>PK90MCIB0941004363630001</code></div>
            </div>
          </div>
          <label class="form-span-2">Message<textarea rows="4" name="message" placeholder="Write your message or note here"></textarea></label>
          <div class="form-span-2 form-status" aria-live="polite"></div>
          <button class="btn btn-blue form-span-2" type="submit">Submit Donation Request ${icon('arrow')}</button>
        </form>
      </div>
    </div>`;

  const menuBtn = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
  }

  document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  const modal = document.getElementById('donation-modal');
  const modalPanel = modal?.querySelector('.modal-panel');
  let previousFocus = null;
  function openDonationModal() {
    if (!modal) return;
    previousFocus = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    setTimeout(() => modalPanel?.focus(), 30);
  }
  function closeDonationModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    previousFocus?.focus?.();
  }
  document.addEventListener('click', (e) => {
    const open = e.target.closest('[data-donate-open]');
    if (open) { e.preventDefault(); openDonationModal(); }
    const close = e.target.closest('[data-modal-close]');
    if (close) closeDonationModal();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal && !modal.hidden) closeDonationModal(); });

  // Job application modal used on Apply for Job page.
  const jobModal = document.getElementById('job-application-modal');
  const jobPanel = jobModal?.querySelector('.modal-panel');
  let jobPreviousFocus = null;
  function openJobModal() {
    if (!jobModal) return;
    jobPreviousFocus = document.activeElement;
    jobModal.hidden = false;
    document.body.classList.add('modal-open');
    setTimeout(() => jobPanel?.focus(), 30);
  }
  function closeJobModal() {
    if (!jobModal) return;
    jobModal.hidden = true;
    document.body.classList.remove('modal-open');
    jobPreviousFocus?.focus?.();
  }
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-job-open]')) { e.preventDefault(); openJobModal(); }
    if (e.target.closest('[data-job-close]')) closeJobModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && jobModal && !jobModal.hidden) closeJobModal();
  });

  // Accessible inline leadership profile expansion on About Us.
  document.querySelectorAll('[data-profile-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.profileToggle);
      if (!target) return;
      const opening = target.hasAttribute('hidden');
      if (opening) target.removeAttribute('hidden');
      else target.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', String(opening));
      btn.textContent = opening ? 'Show Less' : 'Read More';
    });
  });

  document.querySelectorAll('[data-faq-button]').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const value = btn.dataset.copy;
      try { await navigator.clipboard.writeText(value); }
      catch { const ta=document.createElement('textarea'); ta.value=value; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }
      const original = btn.innerHTML;
      btn.textContent = 'Copied';
      setTimeout(() => btn.innerHTML = original, 1600);
    });
  });

  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const status = form.querySelector('.form-status');
      if (status) status.textContent = form.dataset.form === 'donation'
        ? 'Thank you. Your donation request is ready for follow-up. For immediate assistance, contact the school office.'
        : form.dataset.form === 'job'
        ? 'Application captured in this website preview. Connect the production recruitment endpoint before launch.'
        : 'Thank you. Your message has been captured in this website preview. Connect the production form endpoint before launch.';
      form.reset();
    });
  });

  document.querySelectorAll('[data-campus-detail]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.campusDetail;
      const panel = document.getElementById(`campus-detail-${id}`);
      if (!panel) return;
      const hidden = panel.hasAttribute('hidden');
      document.querySelectorAll('.campus-detail').forEach(p => p.setAttribute('hidden',''));
      document.querySelectorAll('[data-campus-detail]').forEach(b => { if (b !== btn) b.textContent='View School'; });
      if (hidden) { panel.removeAttribute('hidden'); btn.textContent='Hide Details'; panel.scrollIntoView({behavior:'smooth', block:'nearest'}); }
      else { panel.setAttribute('hidden',''); btn.textContent='View School'; }
    });
  });

  const loginModal = document.getElementById('portal-login-modal');
  if (loginModal) {
    const loginPanel = loginModal.querySelector('.modal-panel');
    document.querySelectorAll('[data-portal-login]').forEach(btn => btn.addEventListener('click', () => {
      const campus = btn.dataset.portalLogin;
      loginModal.querySelector('[data-login-campus]').textContent = campus;
      loginModal.hidden = false; document.body.classList.add('modal-open'); setTimeout(()=>loginPanel.focus(),30);
    }));
    loginModal.querySelectorAll('[data-portal-close]').forEach(el => el.addEventListener('click', () => { loginModal.hidden=true; document.body.classList.remove('modal-open'); }));
    loginModal.querySelector('form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = loginModal.querySelector('.form-status');
      status.textContent = 'Portal authentication endpoint is not connected in this static preview. Connect the secure backend before production.';
    });
  }
})();
