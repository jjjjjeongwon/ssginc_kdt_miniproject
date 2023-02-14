import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// const { persistAtom } = recoilPersist({
//   key: 'cart',
//   storage: sessionStorage,
// });

const { persistAtom } = recoilPersist({
  key: 'isLogin',
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

export const LoginState = atom({
  key: 'LoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

// export const CartProductState = atom({
//   key: 'CartProductState',
//   default: [],
//   effects_UNSTABLE: [persistAtom],
// });
