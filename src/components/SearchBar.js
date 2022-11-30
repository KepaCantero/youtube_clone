import React from 'react';

class SearchBar extends React.Components{
    state = {
        searchTerm:'',
    }
    
    render()
    {
        return (
            <h1>This is a search bar component</h1>
        )
    }
}

export default SearchBar;