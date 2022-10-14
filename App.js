import React from 'react';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import Root from './src/navigators/AppNavigator';

const App = () => {
  return (
    <Auth0Provider domain={"portseido-dev.us.auth0.com"} clientId={"aRDxVSrtuvXJnPRAA78bC3ZNk4BydR5z"}>
      <Root />
    </Auth0Provider>
  );
};

export default App;