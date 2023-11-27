import Link from "next/link";

export default function Navbar() {
    return(
        <div className='flex flex-wrap mx-w-screen-xl shadow-md p-4 justify-between bg-transparent sticky top-0 shadow-zinc-400'>
            <div className='mx-auto fon-bold text-2xl'><Link href='/'>HealthCare</Link></div>
            <ul className='hidden sm:inline-flex mx-auto gap-4 '>
                <li className='text-gray-400 hover:text-blue-400'><Link href='/sign-up'>Sign up</Link></li>
                <li className='text-gray-400 hover:text-blue-400'><Link href='/sign-in'>Sign in</Link></li>
                <li className='text-gray-400 hover:text-blue-400'><Link href='/create'>Create ID</Link></li>
                <li className='text-gray-400 hover:text-blue-400'><Link href='/dashboard'>My Dashboard</Link></li>

            </ul>
        </div>
    )
}