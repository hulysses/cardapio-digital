import "./Card.css";

interface CardProps {
  price: number;
  title: string;
  image: string;
}

export function Card(props: CardProps) {
  return (
    <div className="card">
      <img src={props.image} alt={`${props.title}`} />
      <h2>{props.title}</h2>
      <p>
        Valor: <b>R${props.price.toFixed(2).replace(".", ",")}</b>
      </p>
    </div>
  );
}
