import React from 'react'

const Ninjas = ({ninjas, deleteNinja}) => {
    return (
        <div className="ninja-List">
            {
                ninjas.map(ninja => {
                    return ninja.age > 20 ? (
                      <div className="ninja" key={ninja.id}>
                        <div>Name: { ninja.name }</div>
                        <div>Age: { ninja.age }</div>
                        <div>Belt: { ninja.belt }</div>
                        <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
                        <hr />
                      </div>   
                    ) : null
                })               
            }
        </div>   
    );
}

export default Ninjas