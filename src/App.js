import React from 'react';
import Header from './Header';
import './Header.css';
import './App.css';
import Sidebar from "./Sidebar";
import Feed from './Feed';
import Widgetes from './Widgetes';
import Login from './Login';
import { useStateValue } from './Stateprovider';

function App() {
  const [ user, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user
        ? <Login />
        :
        <div>
          {/* Header */}
          <Header />

          {/* app body  */}
          <div className="app_body">

            {/* sidebar */}
            <Sidebar />

            {/* feed */}
            <Feed />

            <Widgetes />
            {/* widgets */}
          </div>
        </div>
      }


    </div>
  );
}

export default App;
