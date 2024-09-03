import React from 'react'

const Header = () => {
  return (
    <div className="bg-slate-800 flex flex-row justify-between content-center py-5 px-8">
      <div className="flex flex-row gap-4 items-center justify-center">
        <button className="bg-slate-700 h-8 w-8 rounded flex justify-center content-center items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="#F1F5F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <h4 className="text-xl text-slate-100 font-inter font-semibold border-b-1 border-slate-700 content-center">
          T21 Arena Park
        </h4>
      </div>
      <div class="user">
        <p className="bg-lime-500 rounded-full w-12 h-12 content-center	justify-center text-center text-slate-100 font-inter text-lg font-semibold">
          GD
        </p>
      </div>
    </div>
  );
}

export default Header
