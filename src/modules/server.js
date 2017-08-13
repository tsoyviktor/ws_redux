const SERVER_ERROR = 'SERVER_ERROR';
const SERVER_DATA = 'SERVER_DATA';

export const onError = (err) => {
    return {
      type: '?',
      payload: err
    }
};

export const sendData = () => {

};

export const onResponse = (data) => {
  return {
    type: '?',
    payload: data,
  }
};

export default (state, action) => {
  switch (action.type) {
    case 0 :
      break;
  }
}