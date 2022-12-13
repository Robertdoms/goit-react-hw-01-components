import UserProfile from './Profile/Profile';
import user from './JsonData/user.json';

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
    </Container>
  );
};

export default App;
