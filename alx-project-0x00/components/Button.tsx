import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={`px-4 py-2 font-semibold text-white bg-blue-500 ${styles}`}
    >
      {title}
    </button>
  );
};
export default Button;
