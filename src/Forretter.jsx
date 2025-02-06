import Menu from "./Menu";
import Card from "./Card";

export default function Forretter() {
  return (
    <div className="container">
      <h2 className="p-2 border-b-1 border-red-400 uppercase tracking-wider font-semibold">
        Forretter:
      </h2>
      <div className="articlecontainer flex flex-wrap ">
        {Menu.filter((item) => item.kategori === "Forrett").map((item) => (
          <Card
            key={item.id}
            img={item.img}
            tittel={item.tittel}
            pris={item.pris}
            ingredienser={item.ingredienser}
          />
        ))}
      </div>
    </div>
  );
}
