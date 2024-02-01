import {createPortal} from 'react-dom';
import './CartModal.css';
import { useRef,useImperativeHandle,forwardRef } from 'react';
 const CartModal = forwardRef(function Cartmodal({goData,children},ref){
    const dialog=useRef();
    useImperativeHandle(ref,()=>{
        return{
                open(){
                    dialog.current.showModal();
                }
        }
        
    });
     return createPortal(
        <div className='modal1'>
    <dialog  className='result-modal' ref={dialog}>
      {children}
      <form method="dialog">
        <button>Close</button>
        {goData.length>0 && <button className='method'>Checkout</button> }
      </form>
    </dialog>
    </div>,
    document.getElementById("show-modal")
  );
    }
 );
 export default CartModal;