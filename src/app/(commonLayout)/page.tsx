import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";

export default async function Home() {
  const cookiesStore = await cookies()
  // console.log(cookiesStore.get("better-auth.session_token"))
  const res = await fetch('http://localhost:5000/api/auth/get-session', {
    headers : {
      Coolie: cookiesStore.toString()
    },
    cache:'no-store'
  })

  const session = await res.json()
  console.log(session)
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
       <Button variant={'outline'}>Click Here</Button>
      </main>
    </div>
  );
}
