import React from 'react'

function ModalMainLayout(props) {
  return (
    <div>
         <main>
            <img src={props.image} alt="" />
        </main>
        <aside>
            <h1>{props.title}</h1>
            <p>{props.description} </p>
        </aside>
    </div>
  )
}

export default ModalMainLayout