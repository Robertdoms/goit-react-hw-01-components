import UserProfile from './Profile/Profile';
import user from './jsonData/user.json';
import StatsData from './Statistics/Statistics';
import data from './jsonData/data.json';
import FriendList from './FriendList/FriendList';
import friends from './jsonData/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './jsonData/transactions.json';

import { Container } from './App.styled.jsx';

const App = () => {
  return (
    <Container>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatsData title="Upload stats" stats={data} />
      <StatsData stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};

export default App;
