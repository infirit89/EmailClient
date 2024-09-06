//import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import { Button, CssBaseline, CssVarsProvider, extendTheme, useColorScheme } from '@mui/joy';
import './App.css';
import { useEffect } from 'react';
import { invoke } from '@tauri-apps/api';

function ModeSwitcher() {
  const { setMode } = useColorScheme();
  setMode('dark');
  return (<> </>);
}

const theme = extendTheme({
  cssVarPrefix: 'mode-toggle',
});

function App() {
  useEffect(() => {
    invoke('show_window');
  });
  return (
    <main>
      <CssVarsProvider theme={theme} modeStorageKey='mode-toggle-demo' disableNestedContext>
        <CssBaseline />
        <ModeSwitcher />
        <Button variant='solid'>Test</Button>
      </CssVarsProvider>
    </main>
  );
}

export default App;
