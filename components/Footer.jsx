import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black py-12 ">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {["Home", "Movies", "Shows", "Support", "Subscription", "Connect With Us"].map((section) => (
          <div key={section}>
            <h3 className="font-semibold mb-4">{section}</h3>
            <ul className="space-y-2">
              {["Categories", "Genres", "Pricing", "FAQ"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-8 border-t border-white/10 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>©2023 Utsav. All Rights Reserved</p>
        <div className="flex gap-4">
          <Link href="#">Terms of Use</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Cookie Policy</Link>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer