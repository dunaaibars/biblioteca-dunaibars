<template>

<!-- El detall només es mostra quan existeixen dades del llibre -->
  <div
    v-if="llibre"
    class="detail"
  >

    <img
      :src="llibre.imatge"
      :alt="llibre.titol"
    >

    <div>

      <h1>{{ llibre.titol }}</h1>

      <p>
        <strong>Autor:</strong>
        {{ llibre.autor }}
      </p>

      <p>
        <strong>Editorial:</strong>
        {{ llibre.editorial }}
      </p>

      <p>
        <strong>Gènere:</strong>
        {{ llibre.genere }}
      </p>

      <p>
        <strong>Any:</strong>
        {{ llibre.any }}
      </p>

      <h2>Sinopsi</h2>

      <p class="sinopsi">
        {{ llibre.sinopsis }}
      </p>

    </div>

  </div>

</template>

<script setup>

// Component reutilitzable que rep un llibre des del component pare
// i mostra tota la informació detallada de l'obra
defineProps({
  llibre: Object
})

</script>

<style scoped>
.detail {
  gap: clamp(28px, 5vw, 68px);
  width: 100%;
  padding: clamp(24px, 4vw, 56px);
  border: 1px solid var(--line);
  border-radius: 5px 38px 5px 5px;
  background: var(--paper-bright);
  box-shadow: var(--shadow-soft);
  display: flex;
  align-items: flex-start;
}

img {
  flex: 0 1 330px;
  width: min(36%, 330px);
  min-width: 220px;
  max-height: 520px;
  border: 1px solid rgba(118, 86, 141, 0.12);
  border-radius: 3px 20px 3px 3px;
  object-fit: contain;
  background: var(--lavender);
}

h1 {
  margin: 0 0 24px;
  color: var(--ink);
  font-family: var(--serif);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 500;
  letter-spacing: -0.045em;
  line-height: 1.12;
}

.detail > div {
  flex: 1;
  min-width: 0;
}

.detail p {
  margin: 0 0 12px;
  color: var(--ink-soft);
}

.detail strong {
  color: var(--ink);
  font-weight: 650;
}

h2 {
  margin: 30px 0 10px;
  color: var(--lilac-dark);
  font-family: var(--serif);
  font-size: 1.55rem;
  font-weight: 600;
}

.sinopsi {
  max-width: 68ch;
  line-height: 1.85;
}

@media (max-width: 700px) {
  .detail {
    flex-direction: column;
    align-items: stretch;
    gap: 25px;
    padding: 24px;
  }

  img {
    width: min(100%, 320px);
    min-width: 0;
    max-height: 420px;
    align-self: center;
  }
}

</style>