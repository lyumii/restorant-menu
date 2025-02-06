import Menu from "./Menu";
import Card from "./Card";

export default function Desserter() {
  return (
    <div className="container ">
      <h2 className="p-2 border-b-1 border-t-1 border-red-400 uppercase tracking-wider font-semibold">
        Desserter:
      </h2>
      <div className="articlecontainer flex flex-wrap">
        {Menu.filter((item) => item.kategori === "Dessert").map((item) => (
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
