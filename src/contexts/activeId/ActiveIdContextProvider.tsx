import { createContext } from "react";
import useActiveId from "../../hooks/useActiveId";

type ActiveIdContextProviderProps = {
  children: React.ReactNode;
};

type ActiveIdContextType = {
  activeId: number | null;
};

export const ActiveIdContext = createContext<ActiveIdContextType | null>(null);

/*
  The useActiveId Context Provider is responsible for getting the active ID from the URL hash.
  It returns the active ID.
*/

export default function ActiveIdContextProvider({
  children,
}: ActiveIdContextProviderProps) {
  const activeId = useActiveId();

  return (
    <ActiveIdContext.Provider value={{ activeId }}>
      {children}
    </ActiveIdContext.Provider>
  );
}
