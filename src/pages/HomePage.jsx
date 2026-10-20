import React from 'react'
import { Link } from 'react-router'

const popular = [
  { name: 'Closures', to: '/docs/js/closures' },
  { name: 'Event loop', to: '/docs/js/event-loop' },
  { name: 'Promises', to: '/docs/js/promises' },
  { name: 'useEffect', to: '/docs/react/useeffect' },
  { name: 'Reconciliation', to: '/docs/react/reconciliation' },
]

const ArrowIcon = () => (
  <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
    <path d='M5 12h14M13 6l6 6-6 6' />
  </svg>
)

const HomePage = () => {
  return (
    <div className='min-h-dvh border-2 border-amber-600 p-0 md:p-2'>
       {/* {content} */}
       <div className='flex flex-col  md:flex-row'>
        {/* {left-box} */}
         <div className='md:w-1/2 flex flex-col gap-7'>
         
           <h1 className='text-5xl lg:text-7xl leading-none tracking-tighter font-black text-fg'>
             Every JavaScript  & React concept, <span className='text-accent'>explained properly.</span>
           </h1>

           <p className='max-w-140 text-lg leading-relaxed text-fg2'>
             One page per concept. A plain-language definition, runnable examples, the pitfalls people actually hit, and a quick check to make it stick.
           </p>

           {/* <div className='flex flex-wrap gap-3'>
             <Link to='/docs/js' className='flex items-center gap-2.5 min-h-13 px-5 rounded-xl bg-primary text-on-accent font-bold'>
               Start with JavaScript <ArrowIcon />
             </Link>
             <Link to='/docs/react' className='flex items-center min-h-13 px-5 rounded-xl border border-line2 font-bold'>
               Jump to React
             </Link>
           </div> */}

        
       </div>
       {/* {right-box} */}
        <div className='md:w-1/2'>
          <div className='overflow-hidden rounded-2xl border border-code-line bg-code-bg text-code-fg'>
            <div className='flex items-center justify-between gap-3 border-b border-code-line px-5 py-4'>
              <div className='flex flex-col gap-1'>
                <span className='text-xs font-bold uppercase tracking-widest text-primary'>Concept of the day</span>
                <span className='text-2xl font-extrabold tracking-tight text-code-strong'>The event loop</span>
              </div>
              <span className='rounded-full border border-code-border px-2.5 py-1 text-xs text-code-muted'>Async · Intermediate</span>
            </div>

            <div className='overflow-x-auto p-5 font-code text-sm leading-loose'>
              <div className='whitespace-pre'>console.<span className='font-bold text-code-strong'>log</span>(<span className='text-code-str'>'1'</span>);</div>
              <div className='whitespace-pre'><span className='font-bold text-code-strong'>setTimeout</span>{'(() => console.'}<span className='font-bold text-code-strong'>log</span>(<span className='text-code-str'>'2'</span>), <span className='text-code-num'>0</span>);</div>
              <div className='whitespace-pre'><span className='text-primary'>Promise</span>.<span className='font-bold text-code-strong'>resolve</span>().<span className='font-bold text-code-strong'>then</span>{'(() => console.'}<span className='font-bold text-code-strong'>log</span>(<span className='text-code-str'>'3'</span>));</div>
              <div className='whitespace-pre'>console.<span className='font-bold text-code-strong'>log</span>(<span className='text-code-str'>'4'</span>);</div>
              <div className='mt-2.5 whitespace-pre italic text-code-comment'>// What order do these print in?</div>
            </div>

            <div className='flex flex-wrap gap-2 px-5 pb-5'>
              <span className='rounded-lg bg-code-chip px-3 py-2 font-code text-sm'>1 → 4 → 3 → 2</span>
              <span className='px-3 py-2 text-sm text-code-muted'>Microtasks run before the next task.</span>
            </div>

            <Link to='/docs/js/event-loop' className='flex items-center justify-between bg-primary  px-5 py-4 font-bold text-on-accent'>
              <span>Read the concept</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
       </div>

    </div>
  )
}

export default HomePage
