import styled from 'styled-components';

export const ButtonContainer = styled.div`
  .btn {
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    display: block;
    width: 90px;
    font-weight: bold;
    margin: 20px auto;
    text-align: center;
    padding: 5px;
    color: #fff;

    border-radius: 4px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2),
      inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
    background: #000;
    border: 1px solid #a1a1a1;
  }

  .btn:hover {
    background: tomato;
    color: #000;
  }
`;
