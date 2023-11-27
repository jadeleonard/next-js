import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Dashboard() {
    return(
        <div className='flex flex-col mx-auto items-center sm:block p-4'>
            <UserButton afterSignOutUrl="/"/>
            <Link href='/user-profile'>User</Link>


        </div>
    )
}