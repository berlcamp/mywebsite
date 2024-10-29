import Link from 'next/link'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="flex items-start justify-center space-x-4">
      <Link
        href="https://www.facebook.com/berlcamp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebook className="w-10 h-10 text-blue-600 hover:text-blue-800 transition duration-200" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/berl-treasure-campomanes-4823b893/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="w-10 h-10 text-blue-700 hover:text-blue-900 transition duration-200" />
      </Link>
    </div>
  )
}

export default SocialMedia
