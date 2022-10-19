import React, { Component } from 'react';
import { useEffect } from 'react';

export const Modal = props => {
  useEffect(() => {
    window.addEventListener('keydown', handlerKey);
    return () => {
      window.removeEventListener('keydown', handlerKey);
    };
  }, []);
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

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handlerKey);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handlerKey);
//   }
//   handlerKey = e => {
//     if (e.key !== 'Escape') return;
//     this.props.closeModal(e);
//   };
//   render() {
//     return (
//       <div
//         className="Overlay"
//         onClick={e => this.props.closeModal(e)}
//         // onKeyDown={e => console.log(e)}
//       >
//         <div className="Modal">
//           <img src={this.props.largeImageURL} alt="" />
//         </div>
//       </div>
//     );
//   }
// }
