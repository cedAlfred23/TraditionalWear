import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import CartItem from '../components/CartItem'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'; 
import CheckoutPage from '../pages/CheckOutPage';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const {cart, clearCart, total, itemAmount} = useContext(CartContext);
  return <div className={`${isOpen ? 'right-0' : '-right-full'} 'w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30wvw] transition-all duration-300 z-20 px-4 lg:px-[35px]'`}>
    <div className='flex items-center justify-between py-6 border-b'>
      <div className='uppercase text-sm font-semibold'>
        Shopping Bag ({itemAmount})
      </div>
      <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
        <IoMdArrowForward className='text-2xl' />
      </div>
    </div>
    <div className='flex flex-col gap-y-2 h-[400px] lg:h-[500px] overflow-y-auto overflow-x-hidden border-b mb-20'>
      {cart.map((item) => {
        return <CartItem item={item} key={item.id}/>
        // return <div>{item.id} {item.price} </div>
      })}
    </div>
    <div className='flex flex-col gap-y-3 py-4 mt-[-60px] z-0 w-full overflow-y-auto overflow-x-hidden pb-52'>
      <div className='flex w-full justify-between items-center'>
        <div className='uppercase font-semibold pr-10'>
          <span className='mr-2'>
            Total: 
          </span>
          $ {parseFloat(total).toFixed(2)}
        </div>
        <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl rounded'>
          <FiTrash2 />
        </div>
      </div>
      {/* <Link className=' bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium rounded'>View cart</Link> */}
      <Link to={`/checkout`} className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium rounded'>Checkout</Link>
    </div>
  </div>
};

export default Sidebar;
