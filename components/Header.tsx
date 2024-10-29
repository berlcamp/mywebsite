import Link from 'next/link'

export default function Header() {
  return (
    <div className="bg-black shadow-lg">
      <div className="w-2/3 mx-auto flex items-center space-x-12 text-gray-400 text-sm">
        <Link href="#aboutme" className="py-4">
          About Me
        </Link>
        <Link href="#work" className="py-4">
          Latest Work
        </Link>
        <Link href="#experience" className="py-4">
          Experience
        </Link>
        <Link href="#contact" className="py-4">
          Contact
        </Link>
      </div>
    </div>
  )
}
