import React from 'react'

const card = ({info, commodity}) => {
    return (
        <div className='movie-card text-primary bg-primary'>
            <h2 className='movie-title'> {commodity} - {info.Variety === '---' ? '' : info.Variety} </h2>
            <div className='flex space-between'>
                <h4> APMC: {info.APMC} </h4>
                <span className='movie-premered'> {info.date} </span>
            </div>

            <div className='flex space-around mcol-400'>
                <div> Quantity <br /> {info.Quantity} Quin</div>
                <div> Lrate <br /> {info.Lrate} </div>
                <div> Hrate <br /> {info.Hrate} </div>
                <div> Modal <br /> {info.Modal} </div>
            </div>
        </div>
    )
}

export default card
