import React from 'react'

function ModalMainLayout(props) {
  return (
    <div className="flex flex-col md:flex-row gap-1 md:gap-3 items-center box-border py-6 md:py-10">
      <img
        src={props.image}
        alt=""
        className="w-full md:w-[55%] h-auto max-h-[350px] md:max-h-[650px] md:min-h-[350px] object-cover object-center rounded-3xl border"
      />

      <aside className="w-full md:w-[45%] flex flex-col justify-evenly p-2 gap-3 text-center md:text-left">
        <h1 className="font-poppins text-white text-2xl md:text-3xl font-semibold">
          {props.title}
        </h1>
        <p className="text-white font-IBM text-sm text-justify">
          {props.description}
        </p>
        <a href={props.link} target='#' className="text-blue-400 hover:underline break-all">
          {props.link}
        </a>
      </aside>
    </div>
  )
}

export default ModalMainLayout
