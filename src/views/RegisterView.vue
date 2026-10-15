<template>
  <div class="register-page">
    <section class="hero">
      <div class="hero-mark" aria-hidden="true">
        <svg viewBox="0 0 48 48">
          <path d="M7 12c6-2.5 11.5-1.5 17 2.5v25c-5.5-4-11-5-17-2.5z" />
          <path d="M41 12c-6-2.5-11.5-1.5-17 2.5v25c5.5-4 11-5 17-2.5z" />
          <path d="M24 14.5v25" />
        </svg>
      </div>

      <h1>Uneix-te al nostre Club de Lectura</h1>

      <p>
        Comparteix la teva passió pels llibres,
        descobreix noves històries i connecta
        amb altres lectors.
      </p>

    </section>

    <section class="card">

      <h2>Formulari d'inscripció</h2>

      <form>

        <input
          type="text"
          placeholder="Nom"
        >

        <input
          type="text"
          placeholder="Cognoms"
        >

        <input
          type="email"
          placeholder="Correu electrònic"
        >

        <input
          type="number"
          placeholder="Edat"
        >

        <select>
          <option selected disabled>
            Gènere literari preferit
          </option>

          <option>Fantasia</option>
          <option>Romàntica</option>
          <option>Thriller</option>
          <option>Distopia</option>
          <option>Juvenil</option>
        </select>

        <input
          type="text"
          placeholder="Llibre favorit"
        >

        <textarea
          rows="5"
          placeholder="Per què t'agradaria formar part del club?"
        ></textarea>

        <button>
          Vull formar part del club
        </button>

      </form>

    </section>
  </div>

</template>

<style scoped>
.register-page {
  display: grid;
  grid-template-columns: minmax(270px, 0.78fr) minmax(0, 1.35fr);
  align-items: stretch;
  gap: clamp(22px, 4vw, 54px);
}

.hero {
  position: relative;
  align-self: stretch;
  min-height: 480px;
  overflow: hidden;
  padding: clamp(30px, 4vw, 52px);
  border: 1px solid #e4d9e9;
  border-radius: 5px 44px 5px 5px;
  background:
    radial-gradient(ellipse at 85% 15%, rgba(255, 255, 255, 0.7), transparent 45%),
    #eee7f1;
  color: var(--ink);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.hero h1 {
  position: relative;
  z-index: 1;
  max-width: 9ch;
  margin: 0 0 18px;
  font-family: var(--serif);
  font-size: clamp(2.2rem, 4.2vw, 3.5rem);
  font-weight: 500;
  letter-spacing: -0.05em;
  line-height: 1.07;
}

.hero p {
  position: relative;
  z-index: 1;
  max-width: 34ch;
  margin: 0;
  color: var(--ink-soft);
  font-size: 1.02rem;
}

.hero-mark {
  position: absolute;
  top: 40px;
  right: 25px;
  display: grid;
  width: 145px;
  height: 145px;
  place-items: center;
  border: 1px solid rgba(118, 86, 141, 0.2);
  border-radius: 50%;
}

.hero-mark::before {
  position: absolute;
  width: 112px;
  height: 112px;
  border: 1px solid rgba(118, 86, 141, 0.2);
  border-radius: 50%;
  content: '';
}

.hero-mark svg {
  position: relative;
  width: 64px;
  fill: none;
  stroke: var(--lilac);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5;
}

.card {
  min-width: 0;
  padding: clamp(24px, 4vw, 48px);
  border: 1px solid var(--line);
  border-radius: 4px 30px 4px 4px;
  background: var(--paper-bright);
  box-shadow: var(--shadow-soft);
}

.card h2 {
  margin: 0 0 25px;
  color: var(--ink);
  font-family: var(--serif);
  font-size: clamp(1.65rem, 3vw, 2.25rem);
  font-weight: 500;
  letter-spacing: -0.035em;
}

form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 15px;
}

input,
select,
textarea {
  width: 100%;
  min-width: 0;
  min-height: 51px;
  padding: 12px 15px;
  border: 1px solid #e2dbe3;
  border-radius: 3px 14px 3px 3px;
  background: #fffdfa;
  color: var(--ink);
  font-size: 0.96rem;
  transition: border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease;
}

input::placeholder,
textarea::placeholder {
  color: #928995;
}

input:focus,
select:focus,
textarea:focus {
  border-color: var(--lilac);
  background: white;
  box-shadow: 0 0 0 3px rgba(118, 86, 141, 0.1);
  outline: none;
}

textarea {
  grid-column: 1 / -1;
  min-height: 140px;
  resize: vertical;
}

button {
  grid-column: 1 / -1;
  min-height: 52px;
  padding: 12px 20px;
  border: none;
  border-radius: 3px 16px 3px 3px;
  background: var(--lilac-dark);
  color: white;
  cursor: pointer;
  font-weight: 650;
  transition: transform 180ms ease, background-color 180ms ease;
}

button:hover {
  transform: translateY(-1px);
  background: #4d3264;
}

@media (max-width: 820px) {
  .register-page {
    grid-template-columns: minmax(0, 1fr);
  }

  .hero {
    min-height: 330px;
  }
}

@media (max-width: 520px) {
  .hero {
    min-height: 300px;
    padding: 30px 25px;
  }

  .hero-mark {
    top: 24px;
    right: 22px;
    width: 110px;
    height: 110px;
  }

  .hero-mark::before {
    width: 84px;
    height: 84px;
  }

  .hero-mark svg {
    width: 50px;
  }

  .card {
    padding: 24px 18px;
  }

  form {
    grid-template-columns: minmax(0, 1fr);
  }

  textarea,
  button {
    grid-column: auto;
  }
}

</style>