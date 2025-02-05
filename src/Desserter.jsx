import Menu from "./Menu";
import Card from "./Card";

export default function Desserter() {
  return (
    <div className="container">
      <h2>Desserter:</h2>
      <div className="articlecontainer">
        {Menu.filter((item) => item.kategori === "Dessert").map((item) => (
          <Card
            key={item.id}
            tittel={item.tittel}
            pris={item.pris}
            ingredienser={item.ingredienser}
          />
        ))}
      </div>
    </div>
  );
}
