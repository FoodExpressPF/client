import React from 'react';


export default function Paginated({ platesPerPage, allPlate, setCurrentPage, currentPage, paginated }) {
    const pageNumbers = []
    let numberPage = Math.ceil(allPlate / platesPerPage);

    for (let i = 1; i < Math.ceil(allPlate / platesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>

            <ul >

                <button disabled={currentPage === 1}  onClick={() => {
                    setCurrentPage(currentPage === 1 ?
                        currentPage :
                        currentPage - 1
                    )
                }
                } >
                    Prev
                </button>
                {pageNumbers &&
                    pageNumbers.map(number => (
                        <li key={number}>
                            <button disabled={currentPage === number}  key={number} onClick={() => paginated(number)}> {number}</button>
                        </li>
                    ))}

                <button disabled={currentPage === pageNumbers.length}  onClick={() =>
                    setCurrentPage(currentPage === numberPage ?
                        currentPage :
                        currentPage + 1
                    )} >
                    Next
                </button>
            </ul>

        </div>
    )
}