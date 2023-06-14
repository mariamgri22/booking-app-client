export interface SingleServiceProps {
    id: number;
    description: string;
    duration: string;
    price: number;
    isServiceSelected: (id: number) => boolean;
    toggleServiceSelection: (id: number) => void;
  }