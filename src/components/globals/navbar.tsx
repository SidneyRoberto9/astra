import Link from "next/link"
import { Fragment } from "react"

import Icons from "@/components/globals/icons"
import { buttonVariants } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"

const Navbar = async () => {
  const user = await currentUser()

  return (
    <header className="bg-background/40 border-border sticky inset-x-0 top-0 z-50 h-14 w-full border-b px-4 backdrop-blur-lg">
      <div className="mx-auto flex h-full items-center justify-between md:max-w-screen-xl">
        <div className="flex items-start">
          <Link href="/" className="flex items-center gap-2">
            <Icons.logo className="size-8" />
            <span className="text-lg font-medium">Astra</span>
          </Link>
        </div>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform md:flex">
          <ul className="flex items-center justify-center gap-8">
            <li className="hover:text-foreground/80 text-sm">
              <Link href="#">Pricing</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href="#">About</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href="#">Features</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href="#">Blog</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <UserButton />
          ) : (
            <Fragment>
              <Link
                href="/sign-in"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Login
              </Link>
              <Link
                href="/sign-up"
                className={buttonVariants({
                  size: "sm",
                  className: "hidden md:flex",
                })}
              >
                Start free trial
              </Link>
            </Fragment>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
