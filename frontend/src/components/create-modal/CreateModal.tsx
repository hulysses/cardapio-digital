import { useEffect, useState } from "react";
import { Input } from "../input/Input";
import "./CreateModal.css";
import { useFoodDataMutate } from "../../hooks/useFoodDateMutate";

interface ModalProps {
  closeModal(): void;
}

export function CreateModal({ closeModal }: ModalProps) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const { mutate, isSuccess } = useFoodDataMutate();

  const submit = () => {
    if (!title || !price || !image) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    const formattedPrice =
      typeof price === "string" ? parseFloat(price.replace(",", ".")) : price;
    const foodData = {
      title,
      price: formattedPrice,
      image,
    };
    mutate(foodData);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains("modal-overlay")) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [closeModal]);

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastre um novo item ao cardápio</h2>
        <form action="" className="input-container">
          <Input label="Descrição" value={title} updateValue={setTitle} />
          <Input label="Preço" value={price} updateValue={setPrice} />
          <Input label="Imagem" value={image} updateValue={setImage} />
        </form>
        <button onClick={submit} className="btn-secondary">
          Cadastrar
        </button>
      </div>
    </div>
  );
}
