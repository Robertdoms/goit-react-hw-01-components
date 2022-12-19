import styled from '@emotion/styled';

export const Container = styled.ul`
  max-width: 400px;
  padding: 15px;
  margin: 0 auto;
  list-style-type: none;
`;
export const FriendCard = styled.li`
  display: flex;
  margin: 10px auto;
  padding: 10px 30px;
  border: 1px solid gray;
  border-radius: 4px;
`;
export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
export const FriendAvatar = styled.img`
  display: block;
  width: 70px;
  height: 100%;
  margin: auto 20px;
`;
export const FriendOnlineStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: auto 0px;
  background-color: ${friend => (friend.isOnline ? 'green' : 'red')};
`;
