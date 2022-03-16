import React from 'react';

const people = [
    {imageUrl: "https://picsum.photos/id/870/200/300?grayscale&blur=2", name: "Greg", email: "greg@greg.com"},
    {imageUrl: "https://picsum.photos/200/300/?blur", name: "Jess", email: "jess@jess.com"},
    {imageUrl: "https://picsum.photos/200/300", name: "Mary", email: "mary@mary.com"},
    {imageUrl: "https://picsum.photos/200/300?grayscale", name: "Dee", email: "dee@dee.com"},
]

export default function ProfileList(){
    return (
        <ul class="p-6 divide-y divide-slate-200">
            {people.map((person) => (
                <li class="flex py-4 first:pt-0 last:pb-0">
                <img class="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                <div class="ml-3 overflow-hidden">
                    <p class="text-sm font-medium text-slate-900">{person.name}</p>
                    <p class="text-sm text-slate-500 truncate">{person.email}</p>
                </div>
                </li>
            ))}
        </ul> 
    )
}
