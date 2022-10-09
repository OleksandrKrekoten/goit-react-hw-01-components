import styled from '@emotion/styled';
import { getRandomHexColor } from '../../utils/utils';

export const Title = styled.h2`
  font-weight: 700;
  text-align: center;
`;

export const ListStatistics = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemStatistics = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${getRandomHexColor};
  border-radius: 12px;
  font-weight: 700;
  padding: 10px;
  :not(:last-child) {
    margin-right: 15px;
  }
`;
