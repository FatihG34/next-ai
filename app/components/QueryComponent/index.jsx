import React from 'react'

const QueryComponent = () => {
    return (
        <form className='w-full mx-auto'>
            <input type="text" className='bg-white w-10/12 mx-auto' />
            <textarea id="prompt-textarea" tabindex="0" data-id="request-WEB:68316e1c-79de-4d57-984c-599ba09f29d1-1" dir="auto" rows="1" placeholder="Message GPT" class="m-0 w-full resize-none bg-transparent focus:ring-0 rounded-xl border-2 focus-visible:ring-0 dark:bg-transparent py-[10px] pr-10 md:py-3.5 md:pr-12 max-h-[25dvh] max-h-52 placeholder-black/50 dark:placeholder-white/50 pl-4 md:pl-6 overflow-y-hidden" style={{ height: "52px" }}></textarea>
        </form>
    )
}

export default QueryComponent