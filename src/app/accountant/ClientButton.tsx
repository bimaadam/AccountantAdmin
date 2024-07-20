// src/app/accountant/ClientButton.tsx
'use client';

import React from 'react';

const ClientButton: React.FC = () => {
    return (
        <button onClick={() => window.print()} className="btn bg-blue-500 text-white py-2 px-4 rounded mt-4">
            Cetak
        </button>
    );
};

export default ClientButton;
