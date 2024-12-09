import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

function Header() {
    
    
  return (
    <main>
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-56 lg:pb-24 pt-40 pb-32 sm:pt-48 sm:pb-40">
        <div>
          
          <div>
            <h1 className="text-4xl font-bold tracking-tight pb-16  sm:text-7xl">
             Software Develop
           
            </h1>
            <p className="mt-16 text-2xl leading-8 text-gray-900 sm:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.
                </p>
           
            
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
              <img src="https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg" className='w-full h-full object-cover'/>
            </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Header