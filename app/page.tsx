import Header from '@/components/Header'
import SocialMedia from '@/components/SocialMedia'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="pb-10">
      <Header />
      <div
        id="aboutme"
        className="flex items-start justify-center px-4 py-6 shadow-md"
      >
        <div>
          <Image
            src="https://nuhirhfevxoonendpfsm.supabase.co/storage/v1/object/public/publicbucket/dp.jpg?t=2023-03-06T10%3A16%3A03.897Z"
            alt="Picture of the Berl"
            className="rounded-full"
            width={200}
            height={200}
          />
        </div>
        <div className="px-4 ml-4">
          <div className="text-xl font-bold text-gray-700">Hello</div>
          <div className="text-4xl font-bold text-gray-700">I&apos;m Berl</div>
          <div className="text-lg mt-6 font-bold text-gray-700">
            I&apos;m a Full Stack Engineer with React, NextJS, <br />
            Firebase, Supabase, NodeJS.
          </div>
        </div>
      </div>

      <div id="work" className="text-center py-6 text-gray-600">
        SOME OF MY LATEST WORK
      </div>

      <div className="sm:w-2/3 mx-auto">
        <div className="inline-flex m-2 border rounded-lg p-4 text-sm text-gray-700">
          <span className="font-bold">Document Tracker</span>
        </div>
        <div className="inline-flex m-2 border rounded-lg p-4 text-sm text-gray-700">
          <span className="font-bold">Human Resource Record Mgmt System</span>
        </div>
        <div className="inline-flex m-2 border rounded-lg p-4 text-sm text-gray-700">
          <span className="font-bold">
            Recruitment/Selection/Placement System
          </span>
        </div>
        <div className="inline-flex m-2 border rounded-lg p-4 text-sm text-gray-700">
          <span className="font-bold">Performance Management App</span>
        </div>
        <div className="inline-flex m-2 border rounded-lg p-4 text-sm text-gray-700">
          <span className="font-bold">Learning and Development App</span>
        </div>
        <div className="inline-flex m-2 border rounded-lg p-4 text-sm text-gray-700">
          <span className="font-bold">Rewards and Recognation System</span>
        </div>
        <div className="inline-flex m-2 border rounded-lg p-4 text-sm text-gray-700">
          <span className="font-bold">Motorpool Management</span>
        </div>
      </div>

      <hr id="experience" className="mt-8" />

      <div className="text-center py-6 text-gray-600">EXPERIENCE</div>

      <div className="sm:w-2/3 mx-auto">
        <div className="inline-flex m-2 border rounded-lg p-4 text-sm text-gray-700">
          <div className="flex-col space-y-2">
            <div className="font-bold">2010</div>
            <div className="">ALPHASYS PTY LTD</div>
            <div className="font-bold text-xs">SENIOR DEVELOPER (PHP)</div>
          </div>
        </div>
        <div className="inline-flex m-2 border rounded-lg p-4 text-sm text-gray-700">
          <div className="flex-col space-y-2">
            <div className="font-bold">2011</div>
            <div className="">ASTUTE WEB GROUP</div>
            <div className="font-bold text-xs">IOS DEVELOPER (OBJECTIVE-C)</div>
          </div>
        </div>
        <div className="inline-flex m-2 border rounded-lg p-4 text-sm text-gray-700">
          <div className="flex-col space-y-2">
            <div className="font-bold">2015</div>
            <div className="">WPCRUVE</div>
            <div className="font-bold text-xs">DEVELOPER (PHP / WORDPRESS)</div>
          </div>
        </div>
        <div className="inline-flex m-2 border rounded-lg p-4 text-sm text-gray-700">
          <div className="flex-col space-y-2">
            <div className="font-bold">2016</div>
            <div className="">GoDaddy</div>
            <div className="font-bold text-xs">DEVELOPER (PHP / WORDPRESS)</div>
          </div>
        </div>
        <div className="inline-flex m-2 border rounded-lg p-4 text-sm text-gray-700">
          <div className="flex-col space-y-2">
            <div className="font-bold">2017</div>
            <div className="">JRM SOFTWARE</div>
            <div className="font-bold text-xs">
              SENIOR PROGRAMMER (REACT / ANGULAR / NODEJS / PHP)
            </div>
          </div>
        </div>
        <div className="inline-flex m-2 border rounded-lg p-4 text-sm text-gray-700">
          <div className="flex-col space-y-2">
            <div className="font-bold">2019 - Present</div>
            <div className="font-bold">FREELANCE</div>
            <div className="font-bold text-xs">
              DEVELOPER (REACT / NEXTJS / NODEJS)
            </div>
          </div>
        </div>
      </div>
      <hr id="contact" className="mt-8" />

      <div className="text-center py-6 text-gray-600">CONTACT ME</div>
      <SocialMedia />
    </div>
  )
}
