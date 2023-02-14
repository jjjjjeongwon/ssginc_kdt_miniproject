import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'cart',
  storage: sessionStorage,
});

export const ProductsState = atom({
  key: 'ProductsState',
  default: [],
});

export const SelectProductState = atom({
  key: 'SelectProductState',
  default: {},
});

export const CartProductState = atom({
  key: 'CartProductState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
