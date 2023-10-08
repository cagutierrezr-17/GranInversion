import PersonCard from "./Componentes/GranInversion";

const App = () => {
  return (
    <div className="App">
      <PersonCard
        nombre="Jane"
        apellido="Doe"
        edad={45}
        colorCabello="Black" />

      <PersonCard
        nombre="John"
        apellido="Smith"
        edad={88}
        colorCabello="Brown" />

      <PersonCard
        nombre="Millard"
        apellido="Fillmore"
        edad={50}
        colorCabello="Brown" />

      <PersonCard
        nombre="Maria"
        apellido="Smith"
        edad={62}
        colorCabello="Brown" />
    </div>
  );
}

export default App;
