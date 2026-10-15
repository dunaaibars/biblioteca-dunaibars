<script setup>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <div class="header-inner">
        <RouterLink to="/" class="brand" aria-label="Biblioteca Digital">
          <svg viewBox="0 0 40 40" aria-hidden="true">
            <path d="M7 10.5c4.8-1.8 9.1-.9 13 2.2v19c-3.9-3.1-8.2-4-13-2.2z" />
            <path d="M33 10.5c-4.8-1.8-9.1-.9-13 2.2v19c3.9-3.1 8.2-4 13-2.2z" />
            <path d="M20 12.7v19" />
          </svg>
          <h1>Biblioteca Digital</h1>
        </RouterLink>
      <NavbarComponent />
      </div>
    </header>

    <main class="page-content">
      <RouterView />
    </main>
    <FooterComponent />
  </div>
</template>

<style>
.site-shell {
  width: 100%;
  min-height: 100vh;
}

.site-header {
  position: relative;
  z-index: 1;
  border-bottom: 1px solid rgba(118, 86, 141, 0.12);
  background: rgba(255, 253, 250, 0.9);
}

.header-inner {
  width: min(100% - 64px, 1440px);
  min-height: 96px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  color: var(--ink);
  text-decoration: none;
}

.brand svg {
  width: 40px;
  height: 40px;
  fill: none;
  stroke: var(--lilac);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5;
}

.brand h1 {
  margin: 0;
  font-family: var(--serif);
  font-size: clamp(1.35rem, 2.2vw, 1.8rem);
  font-weight: 600;
  letter-spacing: -0.045em;
}

.page-content {
  width: min(100% - 64px, 1440px);
  min-height: calc(100vh - 145px);
  margin: 0 auto;
  padding: 44px 0 72px;
}

@media (max-width: 700px) {
  .header-inner {
    width: min(100% - 36px, 1440px);
    min-height: auto;
    padding: 19px 0 14px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .brand svg {
    width: 34px;
    height: 34px;
  }

  .page-content {
    width: min(100% - 36px, 1440px);
    padding: 30px 0 52px;
  }
}

@media (max-width: 420px) {
  .header-inner,
  .page-content {
    width: min(100% - 28px, 1440px);
  }
}
</style>