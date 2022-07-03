import React, { useState } from 'react';
import { RiShoppingCartLine } from "react-icons/ri";

export default function Header() {
    let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <div>
                <span className='logo'>House Staff</span>
                <ul className='nav'>
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <RiShoppingCartLine onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
            
                {cartOpen && (
                    <div className='shop-cart'></div>
                )} 
            </div>
            <div className='presentation'></div>
        </header>
    )
}
