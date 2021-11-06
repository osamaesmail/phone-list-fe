import { Notify } from 'quasar'

const defaultOptions = {
  position: 'top-right',
};

export const success = (message, options = {}) => {
  Notify.create({
    message,
    color: 'green',
    ...defaultOptions,
    ...options,
  })
}

export const error = (message, options = {}) => {
  Notify.create({
    message,
    color: 'red',
    ...defaultOptions,
    ...options,
  });
}
