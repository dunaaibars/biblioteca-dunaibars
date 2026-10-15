<template>
  <RouterLink
    :to="`/llibres/${llibre.id}`"
    class="card-link"
  >
    <div class="card">

      <img
        :src="llibre.imatge"
        :alt="llibre.titol"
      >

      <div class="content">

        <h3>{{ llibre.titol }}</h3>

        <p class="metadata">
          <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="6" r="3" /><path d="M4 17c.4-3.2 2.4-5 6-5s5.6 1.8 6 5" /></svg>
          {{ llibre.autor }}
        </p>

        <p class="metadata">
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 17V5l7-2 7 2v12zM7 7h6M7 10h6M7 13h3" /></svg>
          {{ llibre.editorial }}
        </p>

        <p class="metadata">
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 4.5c2.5-1 4.8-.5 7 1.2v11c-2.2-1.7-4.5-2.2-7-1.2zM17 4.5c-2.5-1-4.8-.5-7 1.2v11c2.2-1.7 4.5-2.2 7-1.2z" /></svg>
          {{ llibre.genere }}
        </p>

        <p class="metadata">
          <svg viewBox="0 0 20 20" aria-hidden="true"><rect x="3" y="4.5" width="14" height="12" rx="2" /><path d="M6.5 3v3M13.5 3v3M3 8h14" /></svg>
          {{ llibre.any }}
        </p>

      </div>

    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  llibre: Object
})
</script>

<style scoped>
.card-link {
  display: block;
  text-decoration: none;
  color: inherit;
  min-width: 0;
}

.card {
  height: 100%;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 4px 24px 4px 4px;
  background: var(--paper-bright);
  transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
}

.card-link:hover .card {
  transform: translateY(-5px);
  border-color: #d7c8df;
  box-shadow: var(--shadow-soft);
}

img {
  display: block;
  width: 100%;
  height: clamp(230px, 24vw, 330px);
  padding: 16px;
  object-fit: contain;
  background:
    linear-gradient(135deg, rgba(238, 232, 246, 0.82), rgba(248, 239, 237, 0.72)),
    var(--lavender);
}

.content {
  padding: 20px 21px 22px;
}

h3 {
  margin: 0 0 13px;
  color: var(--ink);
  font-family: var(--serif);
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3;
}

.metadata {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  margin: 7px 0 0;
  color: var(--ink-soft);
  font-size: 0.88rem;
  line-height: 1.45;
}

.metadata svg {
  flex: 0 0 17px;
  width: 17px;
  height: 17px;
  margin-top: 1px;
  fill: none;
  stroke: var(--lilac);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.35;
}

</style>