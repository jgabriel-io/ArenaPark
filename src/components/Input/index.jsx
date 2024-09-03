import React, { forwardRef, useRef } from 'react'

const InputText = forwardRef(({label, ...props}, ref) => {
  // Ref para o elemento interno (input)
  const localRef = useRef();

  return (
    <div className='border-slate-700 flex flex-col gap-2'>
      <label className='text-base text-slate-50'>{label}</label>
      <textarea ref={localRef} {...props} className="h-20 block w-full rounded-md bg-slate-900 border-1 py-1.5 pl-4 pr-20 text-slate-50 ring-1 ring-inset ring-slate-800 focus:ring-lime-500 sm:text-sm sm:leading-6 resize-none"/>
    </div>
    );
});

export default InputText