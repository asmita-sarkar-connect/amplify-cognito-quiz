// App.js
import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import Quiz from './Quiz';

Amplify.configure(awsExports);

function App() {
  return (
    <div className="app-root">
      <Authenticator>
        {({ signOut, user }) => (
          <div className="app-shell">
            <header className="app-header">
              <div className="logo">Cloud Quiz</div>
              <div className="user-section">
                <span className="welcome-text">
                  Hi, {user?.username || 'Player'}
                </span>
                <button className="signout-btn" onClick={signOut}>
                  Sign Out
                </button>
              </div>
            </header>

            <main className="app-main">
              <Quiz />
            </main>

            <footer className="app-footer">
              <span>Built with React • AWS Amplify • Cognito</span>
            </footer>
          </div>
        )}
      </Authenticator>
    </div>
  );
}

export default App;
