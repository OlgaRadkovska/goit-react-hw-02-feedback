import styled from 'styled-components';

export const StatisticsList = styled.ul`
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;

  .item {
    margin-bottom: 5px;
    font-size: 16px;
  }

  .item:last-child {
    margin-bottom: 0px;
  }
`;
