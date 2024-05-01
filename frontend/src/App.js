import './App.css';
function App() {
  return (

    <div className="container mx-auto">
      <nav className='p-6'>
        <div className='flex item-center justify-between' >
          <div>
            <img style={{ "width": "150px" }} src='https://v2.tailwindcss.com/_next/static/media/tailwindcss-logotype.128b6e12eb85d013bc9f80a917f57efe.svg' alt='logo tailwind' />
          </div>
          <div className='hidden md:flex space-x-6 text-red'>
            <a href='#' className='text-slate-900 hover:text-slate-500'>Portfolio</a>
            <a href='#' className='text-slate-900 hover:text-slate-500'>About</a>
            <a href='#' className='text-slate-900 hover:text-slate-500'>Contact</a>
            <a href='#' className='text-slate-900 hover:text-slate-500'>Social</a>
            <a href='#' className='text-white bg-orange-500 hover:bg-slate-900 px-3 py-1 rounded-full'>call me</a>

          </div>
        </div>
      </nav>
      <div className="px-6 space-x-6 flex flex-col-reverse md:flex-row">
        <div className="md:w-1/2 flex flex-col justify-center space-y-5 py-8 text-center md:text-left text-slate-900 ">
          <h1 className="font-bold text-3xl md:text-5xl">Rapidly build modern websites without ever leaving your HTML.</h1>
          <p >A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>
          <a href="#" className="px-6 py-2 rounded-full self-center md:self-start bg-orange-500 text-white hover:bg-slate-900">contact</a>
        </div>
        <div className="md:w-1/2 ">
          <img className="rounded-lg" src="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img1" />
        </div>
      </div>
      <div id="author" className="text-center my-32 px-5">
        <h2 className="font-bold text-3xl">“Best practices” don’t actually work.</h2>
        <p className="mt-8 max-w-5xl mx-auto">I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.</p>
        <div className="mt-10 flex flex-col  space-x-0 space-y-5 md:flex-row md:space-x-5 md:space-y-0">
          <div className="md:1/3 flex flex-col items-center p-6 space-y-2 rounded-lg border border-slate-300 bg-slate-100">
            <img className=" w-16 rounded-full" src="https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <h5 className="font-bold text-lg">Adam sandler</h5>
            <p className="landing-5 text-sm">Tailwind CSS is bridging the gap between design systems and products. It’s becoming the defacto API for styling.Tailwind CSS is bridging the gap between design systems and products.</p>
          </div>
          <div className="md:1/3 flex flex-col items-center p-6 space-y-2 rounded-lg border border-slate-300 bg-slate-100">
            <img className=" w-16 rounded-full" src="https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <h5 className="font-bold text-lg">Adam sandler</h5>
            <p className="landing-5 text-sm">Tailwind CSS is bridging the gap between design systems and products. It’s becoming the defacto API for styling.Tailwind CSS is bridging the gap between design systems and products.</p>
          </div>
          <div className="md:1/3 flex flex-col items-center p-6 space-y-2 rounded-lg border border-slate-300 bg-slate-100">
            <img className="w-16 rounded-full " src="https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <h5 className="font-bold text-lg">Adam sandler</h5>
            <p className="landing-5 text-sm">Tailwind CSS is bridging the gap between design systems and products. It’s becoming the defacto API for styling.Tailwind CSS is bridging the gap between design systems and products.</p>
          </div>

        </div>
      </div>



      <footer className="bg-slate-900 text-white flex flex-col md:flex-row px-5 py-10 justify-between space-y-8 md:space-y-1">


        <div className="flex flex-col items-center justify-between space-y-12 md:space-y-2 md:items-start">
          <div>
            <img className="h-8" src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" />
          </div>
          <div>
            <a href="#" ><i class="ri-facebook-fill text-3xl"></i></a>
            <a href="#"><i class="ri-instagram-fill text-3xl"></i></a>
            <a href="#"><i class="ri-youtube-fill text-3xl"></i></a>
            <a href="#"><i class="ri-linkedin-fill text-3xl"></i></a>
            <a href="#"><i class="ri-twitter-fill text-3xl"></i></a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around space-x-0 md:space-x-32">

          <div className="flex flex-col space-y-2 ">
            <a href="#" className="hover:text-slate-300">Home</a>
            <a href="#" className="hover:text-slate-300">About</a>
            <a href="#" className="hover:text-slate-300">Contact</a>
          </div>



          <div className="flex flex-col justify-between">
            <form action="">
              <input type="text" placeholder="Subscribe" className="flex-1 py-2 px-6 rounded-full" />
              <button className="bg-orange-500 hover:bg-slate-500 rounded-full px-4 py-2">Go</button>
            </form>
            <div className="hidden md:block">
              Copiright &copy BY Abderrahim LGHARBI
            </div>
          </div>

        </div>

      </footer>

    </div>

  );
}

export default App;
