import { atom } from 'recoil';

export const nameState = atom({
  key: 'nameState',
  default: '',
});

export const emailAddressState = atom({
  key: 'emailAddressState',
  default: '',
});

export const phoneNumberState = atom({
  key: 'phoneNumberState',
  default: '',
});
