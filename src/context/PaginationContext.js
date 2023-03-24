import { Children, createContext, useState } from "react";

export const PaginationContext = createContext();

const PaginationState = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return(
        <PaginationContext.Provider value={{currentPage, setCurrentPage}}>
            {Children}
        </PaginationContext.Provider>
    )
}

export default PaginationState;