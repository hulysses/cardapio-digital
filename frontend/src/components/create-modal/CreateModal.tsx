import { useState } from "react";
import { Input } from "../input/Input";
import "./CreateModal.css";

export function CreateModal() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  <div className="modal-overflow">
    <div className="modal-body">
      <h2>Cdastre um novo item ao cardápio</h2>
      <form action="" className="input-container">
        <Input label="title" value={title} updateValue={setTitle} />
        <Input label="price" value={price} updateValue={setPrice} />
        <Input label="image" value={image} updateValue={setImage} />
      </form>
    </div>
  </div>;
}
