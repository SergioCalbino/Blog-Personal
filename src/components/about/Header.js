import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

function Header() {
    
    
  return (
    <main>
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-full xl:mx-12 xl:pt-32 xl:pb-40 lg:pt-40 lg:pb-40 pt-24">
        <div>
          
          <div>
            <h1 className="text-4xl font-bold tracking-tight pb-8  sm:text-7xl">
             About Us
           
            </h1>
            <p className="mt-6 text-2xl leading-10 text-blac max-w-5xl">
                 Esto es sobre todos nosotros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
           
            
          </div>
          
        </div>
      </div>
    </div>
  </main>
  )
}

export default Header