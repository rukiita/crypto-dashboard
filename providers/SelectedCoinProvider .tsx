import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface SelectedCoinContextType {
  selectedCoinId: string | null;
  setSelectedCoinId: Dispatch<SetStateAction<string | null>>;
}

const SelectedCoinContext = createContext<SelectedCoinContextType | undefined>(
  undefined
);

export const SelectedCoinProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCoinId, setSelectedCoinId] = useState<string | null>(null);
  return (
    <SelectedCoinContext.Provider value={{ selectedCoinId, setSelectedCoinId }}>
      {children}
    </SelectedCoinContext.Provider>
  );
};

export const useCoinSelection = () => {
  const context = useContext(SelectedCoinContext);
  if (!context) {
    throw new Error(
      "useCoinSelection must be used within a SelectedCoinProvider"
    );
  }
  return context;
};
