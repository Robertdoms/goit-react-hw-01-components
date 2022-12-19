import styled from '@emotion/styled';

export const Container = styled.section`
  max-width: 400px;
  padding: 0 15px;
  margin: 0 auto;
  text-align: center;
  background-color: #ececec;
  border-radius: 5px;
`;

export const StatList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  padding: 10px 20px;
`;

export const StatLabel = styled.span`
  font-size: 12px;
`;

export const StatPercentage = styled.span`
  font-size: 24px;
  font-weight: 700;
`;
