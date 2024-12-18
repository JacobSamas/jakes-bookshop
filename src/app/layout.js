'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/store/store';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navbar />

            {/* Main Content */}
            <main>{children}</main>

            {/* Toast Notifications Container (Global) */}
            <ToastContainer 
              position="top-center" 
              autoClose={3000} 
              hideProgressBar={false} 
              newestOnTop={true} 
              closeOnClick 
              rtl={false} 
              pauseOnFocusLoss 
              draggable 
              pauseOnHover 
              theme="colored" 
            />

            <Footer />
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
