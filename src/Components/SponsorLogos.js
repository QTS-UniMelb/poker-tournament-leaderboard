import React from 'react';
import ReactDOM from 'react-dom';

export const SponsorLogos = ({ sponsorLogos }) => {
    if (!sponsorLogos || sponsorLogos.length === 0) {
        return null;
    }

    const logoContent = (
        <div style={{ 
            position: 'fixed',
            // 👇 CHANGE THIS VALUE 👇
            bottom: '8vh', // Was 4vh. Increasing this moves it up.
            // ---------------------
            left: 0,
            right: 0,
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
        }}>
            {sponsorLogos.map((image, i) => (
                <img 
                    key={i} 
                    src={image} 
                    alt={`sponsor-logo-${i}`} 
                    style={{ 
                        maxWidth: '220px',
                        maxHeight: '75px',
                        width: 'auto',
                        height: 'auto'
                    }} 
                />
            ))}
        </div>
    );

    return ReactDOM.createPortal(
        logoContent,
        document.getElementById('logo-portal')
    );
};