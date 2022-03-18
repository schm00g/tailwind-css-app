import logo from '../images/logo.svg';
import React from 'react';

export default function Notification(){
    return (
        <div class="p-6 mt-5 pr-10 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div class="shrink-0">
                <img class="h-12 w-12" src={logo} alt="ChitChat Logo" />
            </div>
            <div>
            <div class="text-base font-medium text-black">ChitChat</div>
                <p class="text-slate-500 text-lg">You have a new message!</p>
            </div>
        </div> 
    )
}
