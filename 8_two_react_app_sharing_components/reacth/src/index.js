import ReactDOM from "react-dom/client";
import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('ReactClientApp/ReactClientApp'));

const App = () => {
    return (
        <>
            <h1>HOST - React App</h1>
            <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
        </>

    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);