import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/navigation/Router';
  export default function App() {
    return (
      <NavigationContainer>
       <Router/>
      </NavigationContainer>
    );
  }

// import * as React from 'react';
// import {BlogForm} from './src/screens';
// export default function App() {
//   return <BlogForm />;
// }