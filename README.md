  ##  Biblioteca Digital
## Temàtica i descripció de l'aplicació
Biblioteca Digital és una aplicació web desenvolupada amb Vue 3 que permet consultar un catàleg de llibres emmagatzemats a Cloud Firestore. Els usuaris poden explorar els llibres disponibles, filtrar-los per gènere literari, consultar la informació detallada de cada llibre i descobrir el llibre recomanat del mes. També inclou una secció per unir-se al Club de Lectura de la biblioteca.

## Instal·lació i execució local
1. Clonar el repositori
git clone URL_DEL_REPOSITORI
2. Entrar al projecte
cd biblioteca-dunaibars
3. Instal·lar les dependències
npm install
4. Executar l'aplicació en mode desenvolupament
npm run dev
5. Obrir l'aplicació al navegador
http://localhost:5173

## Generar la versió de producció
npm run build
Els fitxers compilats es generaran a la carpeta:

dist
Desplegament a Firebase Hosting
Iniciar sessió a Firebase:

firebase login
Inicialitzar Firebase Hosting:

firebase init
Generar la versió de producció:

npm run build
Desplegar l'aplicació:

firebase deploy


## Components propis i funció
NavbarComponent.vue
Mostra el menú de navegació de l'aplicació i permet moure's entre les diferents rutes.

WelcomeBanner.vue
Component que mostra el missatge de benvinguda a la pàgina principal.

BookCard.vue
Mostra la informació resumida d'un llibre dins del catàleg.

BookDetail.vue
Mostra la informació completa d'un llibre: portada, títol, autor, editorial, gènere, any de publicació i sinopsi.

FooterComponent.vue
Mostra informació general de l'aplicació al peu de pàgina.

## Exemple de comunicació mitjançant props
Component pare
BooksView.vue
Component fill
BookCard.vue
Dades que es passen
Cada llibre recuperat de Firestore es passa del compomemt pare al component fill mitjançant una prop:

<BookCard
  :llibre="llibre"
/>
El component BookCard.vue rep la prop llibre i mostra les dades corresponents a cada llibre.

També s'utilitza comunicació mitjançant props entre:

Component pare
BookDetailView.vue
Component fill
BookDetail.vue
Mitjançant:

<BookDetail
  :llibre="llibre"
/>


## Rutes de l'aplicació
/
Pàgina principal de la Biblioteca Digital. Mostra el banner de benvinguda i el llibre del mes carregat des de Firestore.

/llibres
Mostra el catàleg complet de llibres disponibles, amb filtres per gènere i accés a la fitxa detallada de cada llibre.

/llibres/:id
Mostra la informació detallada d'un llibre concret, incloent portada, autor, editorial, gènere, any i sinopsi.

/registre
Pàgina "Uneix-te al Club de Lectura", que inclou un formulari d'inscripció per als usuaris interessats.

## Cloud Firestore


Col·lecció utilitzada
llibres
Camps principals
id - int
titol -string
autor -string
editorial -string
genere -string
any - int
imatge -string
sinopsi -string
llibredelmes -boolean
## Vista que mostra les dades
Les dades de Firestore es mostren principalment a:

BooksView.vue
on es recupera i es mostra el catàleg complet de llibres.

També s'utilitzen a:

BookDetailView.vue
per mostrar la fitxa detallada d'un llibre concret.

I a:

HomeView.vue
per carregar i mostrar automàticament el llibre del mes.

## Tecnologies utilitzades
Vue 3
Vue Router
JavaScript
HTML5
CSS3
Cloud Firestore
Firebase Hosting
Enllaç al repositori GitHub



## Enllaç a l'aplicació publicada amb Firebase Hosting
https://biblioteca-ibarsduna.web.app
