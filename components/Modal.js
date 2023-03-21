import { clear } from '@testing-library/user-event/dist/clear'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/Cart/cartSlice'
import { closeModal } from '../features/Modal/modalSlice'

const Modal = () => {
  const dispatch = useDispatch()
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>Bütün ürünler kaldırılsın mı?</h4>
        <div className='btn-container'>
          <button
            type='button'
            className='btn confirm-btn'
            onClick={() => {
              dispatch(clearCart())
              dispatch(closeModal())
            }}
          >
            Onayla
          </button>
          <button
            type='button'
            className='btn clear-btn'
            onClick={() => dispatch(closeModal())}
          >
            Reddet
          </button>
        </div>
      </div>
    </aside>
  )
}
export default Modal
