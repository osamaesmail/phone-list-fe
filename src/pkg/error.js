import {toast} from 'src/pkg';

export const report = (error, message, options = {}) => {
  toast.error(message);

  // todo: log the error to the server
  console.log(error, options);
}

