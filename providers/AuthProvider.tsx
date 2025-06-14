import { createContext, ReactNode, use, useState } from "react";

interface AuthContextType {
  children: ReactNode;
}

export interface AuthContextValue {
  user: any; // Replace 'any' with your user type
  isLocked: boolean;
  setUser: (user: any) => void; // Replace 'any' with your user type
  setIsLocked: (isLocked: boolean) => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);

export const AuthProvider = ({
  children,
}: AuthContextType & {
  children: ReactNode;
}) => {
  const [user, setUser] = useState(null);
  const [isLocked, setIsLocked] = useState(false);

  const contextValue: AuthContextValue = {
    user,
    isLocked,
    setUser,
    setIsLocked,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = use(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
