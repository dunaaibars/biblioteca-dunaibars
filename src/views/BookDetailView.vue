<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { getFirestore, doc, getDoc } from 'firebase/firestore'

import app from '../firebase'

import BookDetail from '../components/BookDetail.vue'

// useRoute permet obtenir l'id del llibre directament des de la URL
const route = useRoute()

const llibre = ref(null)

const db = getFirestore(app)

// Quan es carrega la vista es recupera de Firestore el llibre seleccionat
onMounted(async () => {

  const llibreRef = doc(
    db,
    'llibres',
    route.params.id
  )

  const snapshot = await getDoc(llibreRef)

  if (snapshot.exists()) {
    llibre.value = snapshot.data()
  }

})
</script>

<template>
  <div class="book-detail-page">

    <!-- Enllaç per tornar al catàleg de llibres -->
    <RouterLink
        to="/llibres"
        class="back-btn"
    >
        ← Tornar al catàleg
    </RouterLink>

    <!-- Estat de càrrega mentre es recuperen les dades de Firestore -->
    <p v-if="!llibre" class="loading-state">
      Carregant...
    </p>

    <!-- El llibre recuperat es passa al component fill mitjançant props -->
    <BookDetail
      v-else
      :llibre="llibre"
    />

  </div>
</template>

<style scoped>
.book-detail-page {
  display: grid;
  gap: 22px;
}

.back-btn {
  display: inline-flex;
  justify-self: start;
  align-items: center;
  min-height: 42px;
  padding: 0 15px;
  border: 1px solid var(--line);
  border-radius: 3px 14px 3px 3px;
  background: var(--paper-bright);
  color: var(--lilac-dark);
  font-size: 0.92rem;
  font-weight: 600;
  text-decoration: none;
  transition: border-color 160ms ease, background-color 160ms ease;
}

.back-btn:hover {
  border-color: var(--lavender-deep);
  background: var(--lavender);
}

.loading-state {
  padding: 22px 0;
  color: var(--ink-soft);
}
</style>