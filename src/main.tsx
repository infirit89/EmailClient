import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import '@fontsource/inter';
import './index.css';
import InitColorSchemeScript from '@mui/joy/InitColorSchemeScript';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InitColorSchemeScript />
    <App />
  </StrictMode>,
)
