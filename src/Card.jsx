export default function Card(props) {
  return (
    <article>
      <h3>
        {props.tittel}
        <span>{props.pris}</span>
      </h3>
      <h4>{props.ingredienser}</h4>
    </article>
  );
}
