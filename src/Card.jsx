export default function Card(props) {
  return (
    <article className="bg-gradient-to-b from-cyan-100 to-white flex gap-4 flex-wrap justify-center bg-white shadow-md w-full m-5 rounded-md hover:shadow-xl hover:scale-110">
      <img
        className="w-1/3 h-40 hover:scale-130 hover:border-slate-700 hover:shadow-md hover:border-solid hover:border-1 object-cover m-2"
        src={props.img}
      />
      <div className="flex-1 flex flex-col justify-around">
        <h3 className="text-xl rounded-md p-3 pl-10 flex justify-between font-semibold text-cyan-950">
          {props.tittel}
          <span className="font-bold">{props.pris}</span>
        </h3>
        <h4 className="p-3 pl-10 italic text-slate-700">
          {props.ingredienser}
        </h4>
      </div>
    </article>
  );
}
