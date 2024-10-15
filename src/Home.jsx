import React from 'react';
import LoadingPage from './LoadingPage.jsx';
import Navbar from './Navbar.jsx';

export default function Home() {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
          }, 4000);
      
          return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            {loading ? (
                <LoadingPage /> 
            ) : (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Navbar />
                <h1 style={{marginTop: "5rem"}}>Home Page</h1>
            </div>
            )}
        </div>
    )
}