import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from 'react-oidc-context'
import App from './App.jsx'

const oidcConfig = {
  authority:    import.meta.env.VITE_KEYCLOAK_URL,
  client_id:    import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
  redirect_uri: window.location.origin,
  automaticSilentRenew: true,
  onSigninCallback: () => {
    // Remove OIDC query params from the URL after redirect
    window.history.replaceState({}, document.title, window.location.pathname);
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider {...oidcConfig}>
    <App />
  </AuthProvider>
)
