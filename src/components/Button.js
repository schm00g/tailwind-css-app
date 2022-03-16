import React from 'react';

export default function Button(){
    return (
        <div>
            <button class="bg-rose-600 text-xl pl-4 pr-4 pt-2 pb-2 hover:bg-rose-700 rounded-full">
                Hover over
            </button>
            <button class="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300 ml-5 pl-4 pr-4 pt-2 pb-2 rounded-full text-xl">
                Active
            </button>
        </div>
    )
}