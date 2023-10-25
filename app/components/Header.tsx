import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next"
import Link from "next/link"

const Header = async () => {
  const client = createClient()
  const settings = await client.getSingle("settings")

  return (
    <header className="flex justify-between">
      <Link href="/">
        {settings.data.site_title}
      </Link>
      <nav className="">
        <ul className="flex gap-2">
          {settings.data.nav.map(({ link, label }) => (
            <li key={label} className="">
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header