<script setup>
import { ref, onMounted } from 'vue'

import WelcomeBanner from '../components/WelcomeBanner.vue'
import BookDetail from '../components/BookDetail.vue'

import {
  getFirestore,
  collection,
  getDocs,
  query,
  where
} from 'firebase/firestore'

import app from '../firebase'

const db = getFirestore(app)

// Variable reactiva que emmagatzema el llibre marcat com a llibre del mes const llibreDelMes = ref(null)

// Quan es carrega la vista es consulta Firestore per obtenir el llibre del mes onMounted(async () => {

const llibreDelMes = ref(null)

onMounted(async () => {

  const q = query(
    collection(db, 'llibres'),
    where('llibredelmes', '==', true)
  )

  const snapshot = await getDocs(q)

  if (!snapshot.empty) {
    llibreDelMes.value = {
      id: snapshot.docs[0].id,
      ...snapshot.docs[0].data()
    }
  }

})
</script>

<template>
  <div class="home-page">
    <WelcomeBanner />
    <section class="llibre-del-mes">

      <h2>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />
        </svg>
        Llibre del mes
      </h2>

      <!-- Es reutilitza el component BookDetail per mostrar les dades del llibre recuperat des de Firestore -->

      <BookDetail
        v-if="llibreDelMes"
        :llibre="llibreDelMes"
      />
      <!-- Renderització condicional mentre les dades encara no s'han carregat -->
      <p v-else class="loading-state">
        Carregant llibre del mes...
      </p>
    </section>

  </div>
</template>

<style scoped>
.llibre-del-mes {
  margin-top: clamp(40px, 7vw, 86px);
}

h2 {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 24px;
  color: var(--ink);
  font-family: var(--serif);
  font-size: clamp(1.65rem, 3vw, 2.35rem);
  font-weight: 500;
  letter-spacing: -0.035em;
}

h2 svg {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: var(--lilac);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5;
}

.loading-state {
  padding: 28px 0;
  color: var(--ink-soft);
}

</style>