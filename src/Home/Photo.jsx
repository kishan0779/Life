import React from 'react'

const Photo = () => {
  return (
    <>
  <div className="px-10 my-[3rem] mb-[7rem] l">

        <div className=" h-[110vh] w-[100%] rounded-3xl  bg-cover bg-no-repeat bg-[url('https://assets-global.website-files.com/64f70c959e370b58223e03f8/64f9b158fa207fbabf551df3_living-img-1.png')] h-photos">
       <div className=" px-[6.5rem] py-[8.5rem] h-p">

    <div className="mt-[4rem] font-abc mb-[2rem] text-[4rem] font-normal leading-[1.2] w-[40rem] ">Effortless Living: How LifeSync Simplifies Your Everyday</div>
    <div className=" w-full    mb-[2rem]    font-[32px] font-abc text-4xl h-6 h-tp"> Welcome a life that's effortlessly organized.</div>
    <button className=' bg-blue-600 flex items-center justify-center text-white text-[1.2rem] w-[14.3rem] h-[4rem] duration-500 hover:bg-black  rounded-[4rem]' > Download our app </button>
       </div>

</div>
  </div>

    <div className="p-10 p2">

  <div className="support">
          <li className=' text-[.8rem] tracking-wider	 text-blue-700 '>MEET OUR SUPPORTERS</li>
          <div className=" max-w-lg w-max my-[2rem]   font-[32px] font-abc text-4xl h-6 h-tp">Trusted by sovereign individuals. Worldwide.</div>
        </div>

    <div className="my-[6rem] w-full flex justify-between items-center w-cards">
      <div className=" px-[2rem] bg-neutral-100 w-[31%] py-[2rem] border-2 duration-500  hover:border-blue-500 rounded-2xl w-cardds">

      <div className=" flex  gap-6 w-card">
      <img  src="https://assets-global.website-files.com/64f83da118f85bb73869ec61/64f8409daa92f5ecf81bd805_client-maya-thompson.png" alt="" />
      <h1 className='text-[1.5rem] '>Maya Thompson</h1><br/>
      </div>
      <h2 className='ml-[4.5rem] -mt-4  opacity-60'>Busy Mom  </h2>
    <p className='mt-[3.2rem] w-[92%] text-lg opacity-60'>LifeSync has redefined convenience for me. From paying bills to staying on top of appointments, it's a game-changer that simplifies my day.</p>
    </div>
    <div className="  px-[2rem] bg-neutral-100 w-[31%] py-[2rem] border-2 duration-500  hover:border-blue-500 rounded-2xl w-cardds">

      <div className=" flex  gap-6 w-card">
      <img src="https://assets-global.website-files.com/64f83da118f85bb73869ec61/64f840cfa0f473527ce741cd_client-ethan-campbell.png" alt="" />
      <h1 className='text-[1.5rem] '>Ethan Campbell</h1><br/>
      </div>
      <h2 className='ml-[4.5rem] -mt-4 opacity-60'>CFO at InfiniSys Dynamics

</h2>
    <p className='mt-[3.2rem] w-[96%] text-lg opacity-60'>LifeSync's device is a revelation. Being able to stay connected without my phone is liberating, and its features are indispensable for my busy lifestyle.</p>
    </div>
    <div className=" px-[2rem] bg-neutral-100 w-[31%] py-[2rem] border-2 duration-500  hover:border-blue-500 rounded-2xl w-cardds">

      <div className=" flex  gap-6 w-card">
      <img src="https://assets-global.website-files.com/64f83da118f85bb73869ec61/64f840b608c35db400203e50_client-liam-rodriguez.png" alt="" />
      <h1 className='text-[1.5rem]  '>Liam Rodriguez</h1><br/>
      </div>
      <h2 className='ml-[4.5rem] -mt-4 opacity-60 '>PM at Cybervance Labs </h2>
    <p className='mt-[3.2rem] mb-[] w-[96%] text-lg opacity-60'>LifeSync makes multitasking effortless. With its intuitive features, I manage my tasks, receive notifications, and handle payments without skipping a beat.</p>
    </div>
      </div> 
    </div>
    
    


    </>
  )
}

export default Photo