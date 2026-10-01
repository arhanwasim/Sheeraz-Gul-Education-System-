# Sheeraz Gul Education System Website

Hand-coded responsive static website based on the approved PRD and the client's supplied visual references.

## Pages
1. Home
2. Donation
3. About Us
4. Apply for Job
5. Admission
6. School Portal
7. Contact Us

## Latest client refinements
- Uses the newly supplied common school banner on every public page from Home through Contact Us.
- Banner content is centered; banner titles/taglines are white with text shadow only — no color overlay/shade is applied.
- Home's previous right-side hero image/badge composition has been removed.
- Home About image now uses the clearer school-campus asset to avoid the visibly blurred enlarged image.
- Home Curriculum cards have a restrained hover elevation/border effect.
- Home and About campus statistic cards are smaller and more compact.
- Donation page order is now: Banner → How It Works → Authorized Bank Transfer → Donation Form → Other Ways to Donate → compact pre-footer CTA.
- Donation bank cards display the real bank brand marks in place of generic bank icons. Remote real-logo sources are used with local fallback images for resilience.
- Apply for Job now flows: Banner → About Us → Our Campuses → Open Job Application Form button. The application form opens in an accessible modal.
- Sitewide buttons are slightly smaller and use a flatter professional UI treatment.
- Footer retains the approved WhatsApp number: 0300 3346501.

## Run locally
Open `index.html` directly, or serve the folder with a static server, for example:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Production integration checklist
- Connect Contact, Donation and Job forms to secure backend endpoints.
- Connect School Portal login to the approved secure authentication backend.
- Confirm canonical school email and school hours before launch.
- Verify all three bank account records against official bank documents, especially the Sindh Bank title/220105010 formatting.
- Download/self-host the bank logos for production if a fully self-contained deployment is required instead of the included remote-logo + fallback approach.
- Self-host Poppins if external Google Fonts are not permitted by deployment policy.
- Add production analytics only after privacy review.

No payment gateway is included in this build; donation support remains bank transfer + coordination as specified in the PRD.

## 24 Sep 2026 — Banner & School Portal update
- Replaced the previous banner image with the latest client-supplied school banner on all seven pages.
- Hero/page-banner text is left-aligned on desktop and mobile, with no color overlay/shade over the image.
- Rebuilt School Portal as a professional 2×2 campus-card grid using real campus images, rounded white cards, green hover/focus treatment, and active View School / Login controls.

## Final clarity refinement
- Rebuilt the four campus image assets from the client-supplied campus reference PNG at a larger rendered resolution to avoid browser upscaling blur in portal/home/about cards.
- Reduced page-banner heading and tagline scale, and moved banner copy to a cleaner left-side position across all pages.
