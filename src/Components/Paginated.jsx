import React from 'react';

export default function Pagination({ platesPerPage, allPlate, pagination }) {
    const pageNumbers = []

    for (let i = 0; i < Math.ceil(allPlate / platesPerPage); i++) {
        pageNumbers.push(i+1)
    }

    return (
        <nav>
            <ul>
                {pageNumbers &&
                    pageNumbers.map(number => (
                        <li key={number}>
                            <button onClick={() => pagination(number)}>{number}</button>
                        </li>
                    ))}
            </ul>
        </nav>
    )
}