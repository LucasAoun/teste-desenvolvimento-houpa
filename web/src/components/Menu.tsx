import React from 'react'
import {FiMenu, FiSearch} from 'react-icons/fi'
import {MdFavoriteBorder} from 'react-icons/md'
import {RiShoppingCart2Line} from 'react-icons/ri'
import {InputGroup, FormControl} from 'react-bootstrap'
import '../styles/components/menu.css'

function Menu(){
    return(
        <nav className="navbarMenu">
          <div className="navigationLeft">
          <FiMenu/> <span>Menu</span>
          </div>

        <div className="navigationRight">
          <InputGroup className="mb-3">
            <FiSearch id="iconSearch"/>
             <FormControl
                type="text"
                placeholder="Busca"
                id="inputSearch"
                className="inputSearch"
                aria-label="inputSearch"
                aria-describedby="inputGroup-sizing-default"
             />
            </InputGroup>

            <MdFavoriteBorder id="favoriteIcon"/><span>Meus favoritos</span>
            <RiShoppingCart2Line id="iconShopping"/><span>Meu carrinho | R$0,00</span>

            </div>
        </nav>
    )
}

export default Menu