<template>
    <!-- Component utilitzat com a portada de la pàgina principal -->
  <section class="hero">

    <div class="text">
      <h2>Descobreix la teva propera lectura</h2>

      <p>
        Explora autors, novel·les i llibres
        recomanats per la nostra comunitat.
      </p>

      <!-- Navegació mitjançant Vue Router cap al catàleg de llibres -->
      <RouterLink to="/llibres" class="btn">
        Explorar catàleg
      </RouterLink>
    </div>

    <div class="hero-art" aria-hidden="true">
      <span class="art-orbit"></span>
      <svg viewBox="0 0 240 220">
        <path class="book-page" d="M41 55c30-12 56-6 79 13v103c-23-19-49-25-79-13z" />
        <path class="book-page" d="M199 55c-30-12-56-6-79 13v103c23-19 49-25 79-13z" />
        <path class="book-fold" d="M120 68v103" />
        <path class="book-line" d="M60 82c18-5 34-2 48 6M60 100c18-5 34-2 48 6M180 82c-18-5-34-2-48 6M180 100c-18-5-34-2-48 6" />
        <path class="sparkle" d="M194 22v18M185 31h18M54 31v12M48 37h12" />
      </svg>
    </div>

  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 350px;
  overflow: hidden;
  padding: clamp(34px, 6vw, 82px);
  border: 1px solid #e8dfeb;
  border-radius: 7px 64px 7px 7px;
  background:
    radial-gradient(ellipse at 88% 45%, rgba(221, 207, 232, 0.58), transparent 33%),
    #f3edf4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}

.text {
  position: relative;
  z-index: 1;
  max-width: 650px;
}

h2 {
  max-width: 650px;
  margin: 0 0 18px;
  color: var(--ink);
  font-family: var(--serif);
  font-size: clamp(2.35rem, 5vw, 4.25rem);
  font-weight: 500;
  letter-spacing: -0.055em;
  line-height: 1.08;
}

.text > p:not(.eyebrow) {
  max-width: 470px;
  margin: 0 0 29px;
  color: var(--ink-soft);
  font-size: 1.05rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  min-height: 50px;
  padding: 0 23px;
  border: 1px solid var(--lilac-dark);
  border-radius: 3px 18px 3px 3px;
  text-decoration: none;
  background: var(--lilac-dark);
  color: white;
  font-weight: 650;
  transition: transform 180ms ease, background-color 180ms ease;
}

.btn:hover {
  transform: translateY(-2px);
  background: #4d3264;
}

.hero-art {
  position: relative;
  display: grid;
  width: min(34%, 330px);
  min-width: 210px;
  aspect-ratio: 1;
  place-items: center;
  color: var(--lilac);
}

.hero-art svg {
  position: relative;
  z-index: 1;
  width: 82%;
  overflow: visible;
}

.book-page {
  fill: rgba(255, 253, 250, 0.82);
  stroke: #987da9;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}

.book-fold,
.book-line,
.sparkle {
  fill: none;
  stroke: #987da9;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}

.art-orbit {
  position: absolute;
  width: 88%;
  height: 88%;
  border: 1px solid rgba(118, 86, 141, 0.21);
  border-radius: 50%;
}

@media (max-width: 700px) {
  .hero {
    min-height: auto;
    padding: 38px 28px;
    border-top-right-radius: 42px;
  }

  .hero-art {
    display: none;
  }
}

@media (max-width: 420px) {
  .hero {
    padding: 32px 22px;
  }
}
</style>