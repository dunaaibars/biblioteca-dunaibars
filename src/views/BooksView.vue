<script setup>
import { ref, onMounted, computed } from 'vue'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

import app from '../firebase'
import BookCard from '../components/BookCard.vue'

const db = getFirestore(app)

const llibres = ref([])
const loading = ref(true)
const error = ref(null)

const filtre = ref('Tots')

const llibresFiltrats = computed(() => {

  if (filtre.value === 'Tots') {
    return llibres.value
  }

  return llibres.value.filter(
    llibre => llibre.genere === filtre.value
  )
})

onMounted(async () => {
  try {
    const snapshot = await getDocs(
      collection(db, 'llibres')
    )

    llibres.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  } catch (err) {
    error.value = 'Error carregant llibres'
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="books-page">

    <h2 class="page-title">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.5 5.5c3.1-1.2 6-.7 8.5 1.4v12c-2.5-2.1-5.4-2.6-8.5-1.4zM20.5 5.5c-3.1-1.2-6-.7-8.5 1.4v12c2.5-2.1 5.4-2.6 8.5-1.4z" />
      </svg>
      Catàleg de llibres
    </h2>

    <div class="filtres">

      <button :class="{ 'is-active': filtre === 'Tots' }" @click="filtre = 'Tots'">
        Tots
      </button>

      <button :class="{ 'is-active': filtre === 'Fantasia' }" @click="filtre = 'Fantasia'">
        Fantasia
      </button>

      <button :class="{ 'is-active': filtre === 'Distopia' }" @click="filtre = 'Distopia'">
        Distopia
      </button>

      <button :class="{ 'is-active': filtre === 'Thriller' }" @click="filtre = 'Thriller'">
        Thriller
      </button>

      <button :class="{ 'is-active': filtre === 'Juvenil' }" @click="filtre = 'Juvenil'">
        Juvenil
      </button>

      <button :class="{ 'is-active': filtre === 'Romàntica' }" @click="filtre = 'Romàntica'">
        Romàntica
      </button>

    </div>

    <p v-if="loading" class="catalog-state">
      Carregant llibres...
    </p>

    <p v-else-if="error" class="catalog-state is-error">
      {{ error }}
    </p>

    <p v-else-if="llibresFiltrats.length === 0" class="catalog-state">
      No hi ha llibres disponibles.
    </p>

    <div
      v-else
      class="books-grid"
    >
      <BookCard
        v-for="llibre in llibresFiltrats"
        :key="llibre.id"
        :llibre="llibre"
      />

      <h2 class="catalog-count">
        Catàleg de llibres ({{ llibresFiltrats.length }})
      </h2>
    </div>

  </div>
</template>

<style scoped>
.page-title {
  display: flex;
  align-items: center;
  gap: 13px;
  margin: 0 0 26px;
  color: var(--ink);
  font-family: var(--serif);
  font-size: clamp(1.8rem, 3.5vw, 2.75rem);
  font-weight: 500;
  letter-spacing: -0.045em;
  line-height: 1.2;
}

.page-title svg {
  width: 30px;
  height: 30px;
  fill: none;
  stroke: var(--lilac);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5;
}

.filtres {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 34px;
}

.filtres button {
  min-height: 41px;
  padding: 8px 16px;
  border: 1px solid #dfd4e4;
  border-radius: 3px 14px 3px 3px;
  background: rgba(255, 253, 250, 0.72);
  color: var(--ink-soft);
  cursor: pointer;
  font-size: 0.91rem;
  font-weight: 600;
  transition: color 160ms ease, background-color 160ms ease, border-color 160ms ease;
}

.filtres button:hover,
.filtres button.is-active {
  border-color: var(--lilac);
  background: var(--lilac-dark);
  color: white;
}

.catalog-state {
  padding: 30px 0;
  color: var(--ink-soft);
}

.is-error {
  color: #9b414d;
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 245px), 1fr));
  align-items: stretch;
  gap: clamp(17px, 2.5vw, 30px);
}

.catalog-count {
  grid-column: 1 / -1;
  margin: 14px 0 0;
  padding-top: 20px;
  border-top: 1px solid var(--line);
  color: var(--ink-soft);
  font-family: var(--serif);
  font-size: 1.2rem;
  font-weight: 500;
}

</style>