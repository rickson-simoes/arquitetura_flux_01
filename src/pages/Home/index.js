import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import Zeus from '../../assets/images/img/zeus.jpg';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src={Zeus} width={210} alt="Zeus" />
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img src={Zeus} width={210} alt="Zeus" />
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img src={Zeus} width={210} alt="Zeus" />
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img src={Zeus} width={210} alt="Zeus" />
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img src={Zeus} width={210} alt="Zeus" />
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img src={Zeus} width={210} alt="Zeus" />
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
