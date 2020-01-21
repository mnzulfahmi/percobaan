import React from 'react';

export const Digimon = ({
    digimon
}) => {
    return (
        <div className='digi'>
            {digimon.map(digimon => (
                <div key={digimon.id}>
                    <h1>{digimon.name}</h1>
                    <img 
                        src={digimon.img}
                        alt=''
                    />
                </div>
            ))}
        </div>
    )
}

export default Digimon;