import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next"
import Link from "next/link"

const Footer = async () => {
  const client = createClient()
  const settings = await client.getSingle("settings")

  return (
    <footer className="w-full flex justify-between">
      <Link href="/">
        {settings.data.site_title}
      </Link>
      <p>©{new Date().getFullYear()} {settings.data.site_title}</p>
        <ul className="flex gap-2">
          {settings.data.nav.map(({ link, label }) => (
            <li key={label} className="">
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
    </footer>
  )
}

export default Footer