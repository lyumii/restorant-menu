export default function Card(props) {
  return (
    <article className="flex min-w-90 flex-1 gap-4 flex-col flex-wrap justify-center bg-white shadow-md w-1/4 m-5 rounded-md hover:shadow-xl hover:scale-110">
      <h3 className="bg-cyan-100 text-lg rounded-md p-3 flex justify-between font-semibold text-cyan-950">
        {props.tittel}
        <span className="font-bold">{props.pris}</span>
      </h3>
      <h4 className="p-3 italic text-slate-700">{props.ingredienser}</h4>
    </article>
  );
}
