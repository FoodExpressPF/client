import React from 'react';
import '../Paginated/Paginated.css'


export default function Paginated({ platesPerPage, allPlate, setCurrentPage, currentPage, paginated }) {
    const pageNumbers = []
    let numberPage = Math.ceil(allPlate / platesPerPage);

    for (let i = 1; i < Math.ceil(allPlate / platesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className='divP'>

            <ul className="paginadoContainer" >

                <button className="a" disabled={currentPage === 1}  onClick={() => {
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
                        <li className="li" key={number}>
                            <button className="a" disabled={currentPage === number}  key={number} onClick={() => paginated(number)}> {number}</button>
                        </li>
                    ))}

                <button className="a" disabled={currentPage === pageNumbers.length}  onClick={() =>
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