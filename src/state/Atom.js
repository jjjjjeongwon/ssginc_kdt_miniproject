import { atom } from 'recoil';
// import { recoilPersist } from 'recoil-persist';

// const { persistAtom } = recoilPersist();

export const ProductsState = atom({
  key: 'ProductsState',
  default: [],
});

export const SelectProductState = atom({
  key: 'SelectProductState',
  default: {},
});
