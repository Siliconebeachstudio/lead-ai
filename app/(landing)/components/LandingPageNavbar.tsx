import { SignInButton, UserButton, currentUser } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';
import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

async function LandingPageNavbar() {
    const  user  :User | null  = await currentUser();
    console.log("user",user)
  return <nav className='flex w-screen items-center justify-between p-6'>

<div>
<Link className="text-2xl font-bold text-orange-500 no-underline" href="/">
LeadValleyAI
</Link>

</div>
<div className='font-semibold text-orange-500 text-lg'>
{user?(<div className='flex flex-row gap-x-4 items-center'>
<Link href="/lead-magnets">
    <Button variant="outline">Open App</Button>

</Link>
<UserButton/>

</div>):(<SignInButton/>)}

</div>
  </nav>
    
  
}

export default LandingPageNavbar