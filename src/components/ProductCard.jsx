import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProductCard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login", { state: { from: "/cart" } });
    } else {
      navigate("/cart");
    }
  };

  return (
    <div>
      <h2>Product</h2>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;