import { useState } from 'react'

export default function InteractiveDemo({config}) {
  const [active, setActive] = useState(config.buttons[0])
  return (
    <div className='flex gap-10 mt-6'>
        {/* button  */}
        <div className="flex flex-col gap-3">
            {config.buttons.map(btn => (
                <button key={btn} onClick={() => setActive(btn)} className={`px-5 py-2 rounded-xl border ${active === btn ? "bg-blue-600 text-white ": "bg-white"}`}>{btn}</button>
            ))}
        </div>

        {/* Output */}
        <div className="flex items-center justify-center">
            <div className="w-[220px] h-[140px] bg-gray-200 transition-all duration-300" style={config.styles[active]}>
                <span className='text-sm'>{active}</span>
            </div>
        </div>
    </div>
  )
}
