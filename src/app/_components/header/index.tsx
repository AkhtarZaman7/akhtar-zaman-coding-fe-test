'use client'
import React from 'react'
import Menu from '@assets/svgs/menu.svg'
import Cart from '@assets/svgs/cart.svg'
import Logo from '@assets/svgs/logo.svg'
import SearchInput from '@components/search/input'
import HeartBlack from '@assets/svgs/heart-black.svg'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div className="icon">
          <Menu />
        </div>
        <div className="icon">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className="cart-container">
          <div className="icon">
            <HeartBlack />
          </div>
          <div className="icon">
            <Cart />
          </div>
        </div>
      </div>
      <SearchInput />
    </div>
  )
}
