import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Movies%20&%20Shows%20Page%20-%20Desktop.jpg-lxpk3Dr185qXX3SST2OuHbbCOxn4fb.jpeg"
              alt="Utsav Logo"
              width={80}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-primary">
              Home
            </Link>
            <Link href="/upcoming" className="text-sm hover:text-primary">
              Upcoming
            </Link>
            <Link href="/latest" className="text-sm hover:text-primary">
              Latest
            </Link>
            <Link href="/popular" className="text-sm hover:text-primary">
              Popular
            </Link>
            <Link href="/top-rated" className="text-sm hover:text-primary">
              Top Rated
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 grid grid-cols-6 gap-1 opacity-40">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="aspect-[2/3] relative">
              <Image src="/placeholder.svg" alt="Movie Poster" fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="relative container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best viewing experience with Utsav</h1>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl">
            Utsav is the best streaming experience for watching your favorite movies and shows on demand, anytime,
            anywhere.
          </p>
          <Button className="bg-red-600 hover:bg-red-700">Start Watching Now</Button>
        </div>
      </section>

      {/* Genres Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Our Genres</h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {["Action", "Adventure", "Comedy", "Drama", "Horror"].map((genre) => (
              <Link
                key={genre}
                href={`/genre/${genre.toLowerCase()}`}
                className="relative aspect-[4/3] group overflow-hidden rounded-lg"
              >
                <Image
                  src="/placeholder.svg"
                  alt={genre}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-lg font-semibold">{genre}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Movie Sections */}
      {["Upcoming Bangers", "Latest on Utsav", "Top Rated", "Popular"].map((section) => (
        <section key={section} className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">{section}</h2>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[...Array(5)].map((_, i) => (
                <Link key={i} href="#" className="group">
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2">
                    <Image
                      src="/placeholder.svg"
                      alt="Movie Poster"
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-semibold truncate">Movie Title</h3>
                  {section === "Top Rated" && (
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-red-600" />
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="bg-black/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {["Home", "Movies", "Shows", "Support", "Subscription", "Connect With Us"].map((section) => (
              <div key={section}>
                <h3 className="font-semibold mb-4">{section}</h3>
                <ul className="space-y-2">
                  {[...Array(4)].map((_, i) => (
                    <li key={i}>
                      <Link href="#" className="text-sm text-gray-400 hover:text-white">
                        Link {i + 1}
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
    </div>
  )
}

