import "./Input.css";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

export function Input({ label, value, updateValue }: InputProps) {
  return (
    <>
      <label>{label}</label>
      <input value={value} onChange={(e) => updateValue(e.target.value)} />
    </>
  );
}
