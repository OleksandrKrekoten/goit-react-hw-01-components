import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #d4f2e7;
  padding: 20px;
  border-radius: 30px;
`;
export const ProfileContainer = styled.div`
  background-color: #224651;
  padding: 20px;
  border-radius: 30px;
`;
export const UserPhoto = styled.img`
  width: 150px;
  height: 150px;
`;
export const UserName = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  svg {
    margin-right: 10px;
  }
`;
export const Tag = styled.p`
  font-size: 18px;
  color: #ffffff;
  svg {
    margin-right: 10px;
  }
`;
export const Location = styled.p`
  font-size: 18px;
  color: #ffffff;
  svg {
    margin-right: 10px;
  }
`;
export const ListStatistics = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ListItemStatistics = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StatisticsLabel = styled.span`
  svg {
    margin-right: 10px;
  }
`;
export const StatisticsQuantity = styled.span`
  font-weight: 700;
`;
