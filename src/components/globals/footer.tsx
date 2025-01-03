import { Heart } from "lucide-react"
import Link from "next/link"

import Icons from "@/components/globals/icons"
import { FOOTER_LINKS } from "@/constants"

const Footer = () => {
  const firstRow = FOOTER_LINKS.slice(0, FOOTER_LINKS.length / 2)
  const secondRow = FOOTER_LINKS.slice(FOOTER_LINKS.length / 2)

  return (
    <footer className="border-border mx-auto flex w-full max-w-6xl flex-col items-center justify-center border-t px-6 pb-8 pt-16 lg:px-8 lg:pt-32">
      <div className="bg-primary absolute -right-1/4 -top-1/3 -z-10 hidden size-72 rounded-full blur-[14rem] lg:block" />
      <div className="bg-primary absolute -left-1/4 bottom-0 -z-10 hidden size-72 rounded-full blur-[14rem] lg:block" />

      <div className="grid w-full grid-cols-1 xl:grid-cols-3 xl:gap-8">
        <div className="flex flex-col items-start justify-start md:max-w-[12.5rem]">
          <div className="flex items-start">
            <Icons.logo className="size-7" />
          </div>
          <p className="text-muted-foreground mt-6 text-start text-sm">
            Build beautiful, functional websites, without writing a line of code
          </p>
          <span className="mt-4 flex items-center text-sm text-neutral-200">
            Made in Brazil with
            <Heart className="fill-primary text-primary ml-1 size-3.5" />
          </span>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            {firstRow.map(({ items, title }) => (
              <div key={title} className="mt-10 flex flex-col md:mt-0">
                <h3 className="text-base font-medium capitalize text-white">
                  {title}
                </h3>
                <ul className="text-muted-foreground mt-4 text-sm">
                  {items.map((item, index) => (
                    <li className="mt-2" key={item + index}>
                      <Link
                        href="#"
                        className="hover:text-foreground capitalize transition-all duration-300"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            {secondRow.map(({ items, title }) => (
              <div key={title} className="mt-10 flex flex-col md:mt-0">
                <h3 className="text-base font-medium capitalize text-white">
                  {title}
                </h3>
                <ul className="text-muted-foreground mt-4 text-sm">
                  {items.map((item, index) => (
                    <li className="mt-2" key={item + index}>
                      <Link
                        href="#"
                        className="hover:text-foreground capitalize transition-all duration-300"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-border/80 mt-8 w-full border-t pt-4 md:flex md:items-center md:justify-between md:pt-8">
        <p className="text-muted-foreground mt-8 text-sm md:mt-0">
          &copy; {new Date().getFullYear()} Astra AI INC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
