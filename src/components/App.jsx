import { Profile } from "./Profile/Profile";
import userObj from "../components/Profile/user.json"

import { Statistics } from "./Statistics/Statistics";
import data  from "../components/Statistics/data.json"

export const App = () => {
  return (
    <div>
          <Profile user={userObj} />
          <Statistics title="Upload stats" stats={data} />
      </div>
      
      
  );
};
