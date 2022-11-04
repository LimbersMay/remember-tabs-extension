import React from 'react'
import ReactDOM from 'react-dom/client'
import { TabProvider } from './components/home/components/context/TabProvider';
import { HomeApp } from './components/home/HomeApp'

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TabProvider>
            <HomeApp />
        </TabProvider>
    </React.StrictMode>
)
