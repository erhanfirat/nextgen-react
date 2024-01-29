import { ProductContextProvider } from "./ProductContext";
import { UserContextProvider } from "./UserContext";

export const Providers = ({ children }) => {
  return (
    <UserContextProvider>
      <ProductContextProvider>
        {/* All Providers here! */}
        {children}
      </ProductContextProvider>
    </UserContextProvider>
  );
};
