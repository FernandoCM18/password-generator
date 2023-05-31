import { create } from 'zustand';

interface IStore {
  password: string;
  lengthPassword: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;

  setlengthPassword: (length: number) => void;
  setPassword: (password: string) => void;
  changeUppercase: () => void;
  changeLowercase: () => void;
  changeNumbers: () => void;
  changeSymbols: () => void;
}

export const useStore = create<IStore>((set) => ({
  password: '',
  lengthPassword: 0,
  uppercase: false,
  lowercase: false,
  numbers: false,
  symbols: false,
  setlengthPassword: (length) => set(() => ({ lengthPassword: length })),
  setPassword: (password) => set(() => ({ password: password })),
  changeUppercase: () => set((state) => ({ uppercase: !state.uppercase })),
  changeLowercase: () => set((state) => ({ lowercase: !state.lowercase })),
  changeNumbers: () => set((state) => ({ numbers: !state.numbers })),
  changeSymbols: () => set((state) => ({ symbols: !state.symbols })),
}));