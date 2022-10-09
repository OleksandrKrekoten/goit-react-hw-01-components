import { Profile } from './Profile/Profile';
import userObj from '../components/Profile/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../components/Statistics/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from '../components/FriendList/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../components/TransactionHistory/transactions';

export const App = () => {
  return (
    <div>
      <Profile user={userObj} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
