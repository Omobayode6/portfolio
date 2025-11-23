import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const Blog = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Sidebar />
      {/* Main Content */}
      <main className="lg:ml-80">
        <p>IN DEVELOPEMENT</p>
        <Footer />
      </main>
    </div>
  )
}

export default Blog