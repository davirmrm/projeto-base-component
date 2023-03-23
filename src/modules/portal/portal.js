import ReactDOM from 'react-dom';

export default ({ children, name }) => {
  let nameRandom = (((1 + Math.random()) * 0x10000) | 0)
    .toString(16)
    .substring(1);
  let modalRoot = document.getElementById(`${name}`);
  if (!modalRoot) {
    const tempEl = document.createElement('div');
    tempEl.id = `${name ? name : nameRandom}`;
    document.body.append(tempEl);
    modalRoot = tempEl;
  }
  return ReactDOM.createPortal(children, modalRoot);
};
