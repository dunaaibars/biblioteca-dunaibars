<template>
  
  <!-- Component de navegació principal utilitzant Vue Router per canviar entre les diferents vistes de l'aplicació -->
  <nav aria-label="Navegació principal">
    <RouterLink to="/">Inici</RouterLink>

    <RouterLink to="/llibres">
      Llibres
    </RouterLink>

    <RouterLink to="/registre">
      Fes-te soci
    </RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

a {
  position: relative;
  padding: 10px 15px;
  border-radius: 999px;
  text-decoration: none;
  color: var(--ink-soft);
  font-size: 0.94rem;
  font-weight: 600;
  transition: color 180ms ease, background-color 180ms ease;
}

a:hover {
  color: var(--lilac-dark);
  background: var(--lavender);
}

.router-link-active {
  color: var(--lilac-dark);
  background: var(--lavender);
}

@media (max-width: 420px) {
  nav {
    width: 100%;
    gap: 3px;
  }

  a {
    padding: 9px 11px;
    font-size: 0.88rem;
  }
}
</style>