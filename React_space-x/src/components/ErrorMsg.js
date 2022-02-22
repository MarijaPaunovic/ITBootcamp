import React from 'react';

const ErrorMessage = ({ children }) => (
    <div className='errorMessage' style={{ color: "red" }}>
        {children}
    </div>);

export default ErrorMessage;