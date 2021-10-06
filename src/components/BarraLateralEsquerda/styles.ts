import styled from 'styled-components';

import { shade } from 'polished';

export const MenuLateral = styled.div`
  padding: 1rem;
  min-width: 13rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #654FAC;
  color: #FFFFFF;  

  img {
      border-radius: 50%;
  }

  opacity: 1;

  @media print {
        display: none;
    }

`;

export const Menu = styled.div`

  .roxo {
    /* color: ${shade(0.2,'#654FAC')}; */
    text-decoration: underline;
    text-decoration-color: #f4ede8;
  }

  a {
    align-items: center;
    display: flex;

    margin-top: 1.5rem;

    color: #f4ede8;
    text-decoration: none;
    
    font-size: 1rem;
    font: 1rem;

    &:hover{
      /* color: ${shade(0.2,'#654FAC')}; */
      text-decoration: underline;
      text-decoration-color: #f4ede8;
    }

    svg {
      margin-right: 0.8rem;
    }
  }

  img {
    margin-left: 0px;
    border-radius: 1rem;
    max-width: 8rem;
    max-height: 17rem;
  }
        
`;