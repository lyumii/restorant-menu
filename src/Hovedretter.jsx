import Menu from "./Menu";
import Card from "./Card";

export default function Hovedretter() {
  return (
    <div className="container">
      <h2>Hovedretter:</h2>
      <div className="articlecontainer">
        {Menu.filter((item) => item.kategori === "Hovedrett").map((item) => (
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
