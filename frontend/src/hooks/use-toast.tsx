import React, { createContext, useContext, useState, ReactNode } from 'react';

type Toast = {
  title: string;
  description?: string;
};

type ToastContextType = {
  toast: (toast: Toast) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = (newToast: Toast) => {
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t !== newToast));
    }, 3000); // Toast will disappear after 3 seconds
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {/* Render toasts here if needed */}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
