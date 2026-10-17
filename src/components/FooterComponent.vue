<template>

  <!-- Footer reutilitzable que es mostra a totes les vistes de l'aplicació -->
  <footer class="site-footer">
    <div class="footer-inner">
      <section class="footer-about" aria-label="Sobre la biblioteca">
        <RouterLink to="/" class="footer-brand">
          <svg viewBox="0 0 40 40" aria-hidden="true">
            <path d="M7 10.5c4.8-1.8 9.1-.9 13 2.2v19c-3.9-3.1-8.2-4-13-2.2z" />
            <path d="M33 10.5c-4.8-1.8-9.1-.9-13 2.2v19c3.9-3.1 8.2-4 13-2.2z" />
            <path d="M20 12.7v19" />
          </svg>
          <span>Biblioteca Digital</span>
        </RouterLink>
        <p>Explora autors, novel·les i llibres recomanats per la nostra comunitat.</p>
      </section>

      <!-- Navegació secundària utilitzant Vue Router -->
      <nav class="footer-navigation" aria-label="Navegació del peu de pàgina">
        <h2>Explora</h2>
        <RouterLink to="/">Inici</RouterLink>
        <RouterLink to="/llibres">Llibres</RouterLink>
        <RouterLink to="/registre">Fes-te soci</RouterLink>
      </nav>

      <section class="footer-credit" aria-label="Informació de l'autora">
        <h2>Sobre aquest projecte</h2>
        <p>Una biblioteca digital per descobrir noves històries i connectar amb altres lectors.</p>
        <p class="creator">Creat per <span>Duna Ibars Chacon</span></p>
      </section>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--line);
  background: rgba(243, 237, 244, 0.68);
}

.footer-inner {
  display: grid;
  grid-template-columns: minmax(220px, 1.2fr) minmax(130px, 0.55fr) minmax(240px, 1fr);
  gap: clamp(30px, 6vw, 100px);
  width: min(100% - 64px, 1440px);
  margin: 0 auto;
  padding: 48px 0 42px;
}

.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  color: var(--ink);
  font-family: var(--serif);
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: -0.035em;
  text-decoration: none;
}

.footer-brand svg {
  width: 35px;
  height: 35px;
  fill: none;
  stroke: var(--lilac);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5;
}

.footer-about > p,
.footer-credit > p {
  max-width: 38ch;
  margin: 14px 0 0;
  color: var(--ink-soft);
  font-size: 0.92rem;
}

.footer-navigation {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
}

.footer-navigation h2,
.footer-credit h2 {
  margin: 0 0 8px;
  color: var(--lilac-dark);
  font-family: var(--serif);
  font-size: 1.15rem;
  font-weight: 600;
}

.footer-navigation a {
  color: var(--ink-soft);
  font-size: 0.92rem;
  text-decoration: none;
  transition: color 160ms ease;
}

.footer-navigation a:hover {
  color: var(--lilac-dark);
}

.footer-credit .creator {
  margin-top: 19px;
  padding-top: 14px;
  border-top: 1px solid rgba(118, 86, 141, 0.17);
  font-size: 0.88rem;
}

.creator span {
  color: var(--ink);
  font-weight: 650;
}

@media (max-width: 700px) {
  .footer-inner {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px 24px;
    width: min(100% - 36px, 1440px);
    padding: 36px 0;
  }

  .footer-about {
    grid-column: 1 / -1;
  }
}

@media (max-width: 420px) {
  .footer-inner {
    grid-template-columns: minmax(0, 1fr);
    width: min(100% - 28px, 1440px);
    gap: 27px;
  }

  .footer-about {
    grid-column: auto;
  }
}
</style>
