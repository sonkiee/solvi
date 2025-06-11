import React, { createContext, ReactNode, useContext, useState } from "react";
import { useAutoLock } from "../hooks/useAutoLock";

interface AutoLockContextProps {
  isLocked: boolean;
  unlock: () => void;
  handleUserActivity: () => void;
}

const AutoLockContext = createContext<AutoLockContextProps | null>(null);

export function AutoLockProvider({ children }: { children: ReactNode }) {
  const [isLocked, setIsLocked] = useState(true);

  const { handleUserActivity } = useAutoLock(() => setIsLocked(true));

  const unlock = () => {
    setIsLocked(false);
  };

  return (
    <AutoLockContext.Provider value={{ isLocked, unlock, handleUserActivity }}>
      {children}
    </AutoLockContext.Provider>
  );
}

export function useAutoLockContext() {
  const context = useContext(AutoLockContext);
  if (!context) {
    throw new Error("useAutoLockContext must be used within AutoLockProvider");
  }
  return context;
}
