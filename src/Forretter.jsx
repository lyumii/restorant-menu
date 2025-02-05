import Menu from "./Menu";
import Card from "./Card";

export default function Forretter() {
  return (
    <div className="container">
      <h2>Forretter:</h2>
      <div className="articlecontainer">
        {Menu.filter((item) => item.kategori === "Forrett").map((item) => (
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
