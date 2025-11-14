import './App.css';

function App() {
    // A
    const products = [
        { id: 1, name: "Matcha", price: 15, beschreibung: "Lecker", isLegal: true },
        { id: 2, name: "Red Bull", price: 2, beschreibung: "Gibt Flügel", isLegal: true },
        { id: 3, name: "Kuchen", price: 12, beschreibung: "Brauchen wir jeden Tag", isLegal: true },
        { id: 4, name: "Drogen", price: 50, beschreibung: "Haram", isLegal: false }
    ];
    // B
    if (products.length === 0) {
        return <p>Die Liste ist leider leer.</p>;
    }

    function hClick() {
        console.log("Button wurde gedruckt");
    }

    return (
        <div>
            <h1>Item Liste!</h1>
            <ListComponent products={products} />
            <ButtonComponent onClick={hClick} />
        </div>
    );
}


function ListComponent({ products }) {
    //const filterList = items.filter(item => item.isLegal === showIlegal);

    return (
        <ul>
            {products.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}


function ButtonComponent({ onClick }) {
    return (
        <button onClick={onClick}>Drucke mich!</button>
    );
}


export default App;
