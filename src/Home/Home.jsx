import React from 'react'

const Home = () => {
  return (
    <div className="h-[100vh] bg-[50% 0] bg-cover bg-no-repeat bg-[url('https://assets-global.website-files.com/64f70c959e370b58223e03f8/64f835e90a8ce1f3a162598a_hero-img.jpg')] navbar">

    <div className=" flex p-10 items-center justify-between nav" >
      <div className="nav-img">
        <img src="https://assets-global.website-files.com/64f70c959e370b58223e03f8/64f70f9779693bcfdc7b9c3b_logo.svg" alt="" />
      </div>
      <div className="nav-right flex w-max justify-between gap-4 ">

      <img className="h-10 w-38  " src="https://assets-global.website-files.com/64f70c959e370b58223e03f8/64f9b7bbf0bc93e1db9337f6_app-store-icon.png" alt="" />
      <img className="h-10 w-38 "src="https://assets-global.website-files.com/64f70c959e370b58223e03f8/64f9b7ba7b6f7c9f95bc38fa_google-play-icon.png" alt="" />
      </div>
    </div>
      <div className="pl-10 mt-[16rem] font-abc mb-8 text-[100px] font-normal leading-[7rem] w-[67rem] h-tittle">The app that will change your life</div>
      <div className="pl-10 opacity-90 font-[32px] font-abc text-4xl h-6 h-tp">LifeSync, the future of daily living</div>
    </div>
    
  )
}

export default Home