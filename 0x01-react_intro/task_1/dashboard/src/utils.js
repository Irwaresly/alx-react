// import React from 'react';
// Function to get the current year
function getFullYear() {
    return new Date().getFullYear();
}

// Arrow function to get the footer copy
const getFooterCopy = (isIndex) => {
    if (isIndex) {
        return 'Holberton School';
    } else {
        return 'Holberton School main dashboard';
    }
};
export { getFullYear, getFooterCopy };