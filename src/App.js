import './App.css';
import leon from './img/leon-animal-salvaje-ok.webp';
import leopardo from './img/leopard-resting-on-rock-with-reflection-in-water-photo.jpg';
import tucan from './img/animales-de-la-selva-tucan-e1562026484508.jpg';
import golden from './img/golden-retriever.webp';
import salvajes from './img/Animales-salvajes-en-ingles-1024x682.jpg';
import animalesCompania from './img/animales-compania-mas-populares-wide_webp.webp';
import heroAnimals from './img/animals_herocore-1200x600-c-default.jpg';
import mascotas from './img/4a113157-8679-4a1a-bbc4-56f59f72b4e1_source-aspect-ratio_1600w_0.jpg';
import animalSalvaje from './img/41c7e7ce298604b0801fc2b1b76371a47e9ebb83-950x633.webp';
import wildlife from './img/photo-1598755257130-c2aaca1f061c.jpeg';

function App() {
  const animals = [
    {
      id: 1,
      name: 'León',
      image: leon,
      description: 'El león es conocido como el rey de la selva. Es un felino poderoso que vive en manadas y es nativo de África. Los machos son reconocidos por su distintiva melena.'
    },
    {
      id: 2,
      name: 'Leopardo',
      image: leopardo,
      description: 'El leopardo es un felino ágil y sigiloso, conocido por su capacidad para trepar árboles y su característico pelaje manchado. Es un cazador solitario y adaptable.'
    },
    {
      id: 3,
      name: 'Tucán',
      image: tucan,
      description: 'El tucán es un ave tropical conocida por su gran pico colorido. Habita en las selvas de América Central y del Sur, y se alimenta principalmente de frutas.'
    },
    {
      id: 4,
      name: 'Golden Retriever',
      image: golden,
      description: 'El Golden Retriever es una raza de perro conocida por su inteligencia, dulzura y lealtad. Son excelentes perros de familia y muy populares como mascotas.'
    },
    {
      id: 5,
      name: 'Animales Salvajes',
      image: salvajes,
      description: 'Una colección diversa de animales salvajes en su hábitat natural, mostrando la maravillosa biodiversidad de nuestro planeta.'
    },
    {
      id: 6,
      name: 'Animales de Compañía',
      image: animalesCompania,
      description: 'Los animales de compañía son aquellos que comparten nuestro hogar y nos brindan amor incondicional y compañía.'
    },
    {
      id: 7,
      name: 'Vida Silvestre',
      image: heroAnimals,
      description: 'La fauna silvestre en su esplendor natural, recordándonos la importancia de preservar los ecosistemas.'
    },
    {
      id: 8,
      name: 'Mascotas',
      image: mascotas,
      description: 'Las mascotas son parte fundamental de muchas familias, ofreciendo compañía, alegría y amor incondicional.'
    },
    {
      id: 9,
      name: 'Fauna Salvaje',
      image: animalSalvaje,
      description: 'Los animales salvajes nos muestran la belleza y la fuerza de la naturaleza en su estado más puro.'
    },
    {
      id: 10,
      name: 'Naturaleza Salvaje',
      image: wildlife,
      description: 'La vida salvaje en su máxima expresión, mostrando la conexión entre los animales y su entorno natural.'
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Galería de Animales</h1>
        <p>Descubre la maravillosa diversidad del reino animal</p>
      </header>
      <main className="animal-gallery">
        {animals.map((animal) => (
          <div key={animal.id} className="animal-card">
            <img src={animal.image} alt={animal.name} className="animal-image" />
            <div className="animal-info">
              <h2>{animal.name}</h2>
              <p>{animal.description}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
