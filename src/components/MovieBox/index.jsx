import React from 'react';

export default function MovieBox({data}){
    return(
        <div className="movie-box-container">
            <div>
                <p>{data.name}</p>
            </div>
        </div>
    )
}