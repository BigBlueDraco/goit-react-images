import { useEffect } from 'react';

export const Modal = props => {
  useEffect(() => {
    window.addEventListener('keydown', handlerKey);
    return () => {
      window.removeEventListener('keydown', handlerKey);
    };
  });
  const handlerKey = e => {
    if (e.key !== 'Escape') return;
    props.closeModal(e);
  };
  return (
    <div className="Overlay" onClick={e => props.closeModal(e)}>
      <div className="Modal">
        <img src={props.largeImageURL} alt="" />
      </div>
    </div>
  );
};
