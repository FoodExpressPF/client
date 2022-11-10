import React from 'react';

export default function Pagination({ platesPerPage, allPlate, pagination }) {
    const pageNumbers = []

    for (let i = 0; i < Math.ceil(allPlate / platesPerPage); i++) {
        pageNumbers.push(i+1)
    }

    return (
        <div class="col-sm-12">
            <nav>
                <ul class="pagination justify-content-center">
                <li class="page-item"><a class="page-link" href="">&laquo;</a></li>
                    {pageNumbers &&
                        pageNumbers.map(number => (
                            <li class="page-item" key={number}>
                                <button class="page-link" onClick={() => pagination(number)}>{number}</button>
                            </li>
                        ))}
                <li class="page-item"><a class="page-link" href="">&raquo;</a></li>
                </ul>
            </nav>
        </div>
    )
}