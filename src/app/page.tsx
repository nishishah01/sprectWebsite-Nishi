
const Home = () => {
  const whyUsItems = [
    {
      title: "0 platform fee*",
      description: " • yes you heard that right, no added burden to your connections",
      image: "https://sprect.com/assets/images/nopayment.svg", 
    },
    {
      title: "end-to-end encryption",
      description: "not even sprect can hear you! your own private room",
      image: "https://sprect.com/assets/images/sheild-done.svg", 
    },
    {
      title: "expansive directory",
      description: "reach PROs across industries, can’t find someone? let us know",
      image: "https://sprect.com/assets/images/directory.svg", 
    },
    {
      title: "flexible meets",
      description: "10 min meet-n-greet or pick your choice of duration",
      image: "https://sprect.com/assets/images/iconvideo.svg", 
    },
    {
      title: "speak your language",
      description: "PROs speak your native language (English, Gujarati, Hindi, Tamil & more)",
      image: "https://sprect.com/assets/images/language.svg",
    },
    {
      title: "quick dispute fixes",
      description: "PRO payments held for 48 hours, let us know if something didn’t work",
      image: "https://sprect.com/assets/images/pro-set.svg", 
    },
    {
      title: "secure payments",
      description: "industry standard payment security, automatic refunds on cancellations",
      image: "https://sprect.com/assets/images/securepayments.svg",
    },
    {
      title: "meet in browser",
      description: "meet directly in browser, no app to download",
      image: "https://sprect.com/assets/images/open_in_browser.svg", 
    },
    {
      title: "no commitments",
      description: "no obligations, cancel anytime",
      image: "https://sprect.com/assets/images/thumb_up_alt.svg", 
    },
  ];

  const howItIsDoneSteps = [
    {
      stepNumber: "01",
      title: "search",
      description:
        "find PROs by name, skills, profession, or university. Filter by language, location and more.",
      image: "https://sprect.com/assets/images/search1.svg", 
    },
    {
      stepNumber: "02",
      title: "schedule & pay",
      description:
        "pick your preferred date/time/duration and make PROs payment... we’ll remind you before the meeting.",
      image: "https://sprect.com/assets/images/search2.svg", 
    },
    {
      stepNumber: "03",
      title: "super connect",
      description:
        "meet online at the scheduled time and video chat about anything you want.",
      image: "https://sprect.com/assets/images/search3.svg", 
    },
  ];
  const faqs = [
    {
      question: "how can sprect help me?",
      answer: "sprect is short for super connect. we enable you to directly connect with anyone for a one-on-one secure and private video interaction, to get the knowledge and inspiration you need to get ahead. whether you are a student seeking career guidance or a startup founder looking for advice (and everything in between), sprect will make it easy and quick for you to directly talk to the right person who may be outside your social/professional circle. no more cold emails, InMails, begging for introductions and countless hours of waiting.."
    },
    {
      question: "how does it work?",
      answer: "it’s super easy. search for a PRO by name, skills, profession, expertise, or university. if you like, filter results by language, location, and more. check out PROs profiles and pick a date/time on their calendar. pay PRO’s fees and you are set. we’ll send you a reminder before the meeting with a private link for the call. join the call and voilà!"
    },
    {
      question: "how can I find the right PRO on sprect?",
      answer: "once you search, you will see a number of results that match your criteria. you can filter results to narrow them down to who you like. open each PRO’s profile that interests you and read their area of expertise and accomplishments."
    },
    {
      question: "can i send questions to a PRO before the call?",
      answer: "yes. when you pick a call time, you will be able to share your requirements and questions with the PRO. If the PRO believes that s/he is qualified to help you, they will accept your call. If they are unable to help, they will reject your call request."
    },
    {
      question: "what is sprect's refund policy?",
      answer: "you can cancel a call before a PRO accepts it, to automatically receive a refund. your refund, minus any payment gateway fees, if applicable, will be returned to you using the same payment method. In the unfortunate event that a PRO is unable to make it for the call, you will automatically receive a full refund."
    },
  ];



  return (
    <>
    
    <div className="py-16 bg-gray-100 min-h-screen">
  <h1 className="text-4xl font-bold  mb-8 max-w-3xl mx-auto ">why us</h1>
  <div className="relative max-w-screen-lg mx-auto px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {whyUsItems.map((item, index) => (
        <div
          key={index}
          className={`bg-white p-6 shadow-lg rounded-3xl relative transition-transform transform hover:scale-105 hover:shadow-2xl duration-300
            ${index % 3 === 1 ? 'mt-8' : ''}  
            ${index % 3 === 2 ? 'mt-16' : ''}  
          `}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-12 h-12 mb-4 transition-transform transform hover:scale-110 duration-300"
          />
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>


          
     
      <div className="py-16 bg-white min-h-screen">
        <h1 className="text-4xl font-bold  mb-8 max-w-3xl mx-auto ">how is it done?</h1>
        <div className="flex flex-col items-center">
          {howItIsDoneSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center mb-12 max-w-screen-md"
            >
              <div className="mb- md:mb-0 md:mr-20">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-72 h-auto"
                />
              </div>
              <div className="relative bg-white p-6 shadow-lg rounded-2xl max-w-md">
                <div className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 bg-orange-500 text-white text-3xl w-16 h-16 rounded-full flex items-center justify-center">
                  {step.stepNumber}
                </div>
                <h2 className="text-xl font-semibold mx-4 mb-4 capitalize">
                  {step.title}
                </h2>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>



     
  
  <div className="py-16 bg-gray-100">
  <h2 className="text-4xl font-bold  mb-8 max-w-3xl mx-auto">FAQs</h2>
  <p className=" max-w-3xl mx-auto text-gray-500 mb-8">find answers to frequently asked questions</p>
  
 
  <div className="max-w-3xl mx-auto">
    <h3 className="text-lg font-semibold mb-4">general</h3>
    
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <details key={index} className="bg-white border border-gray-300 rounded-2xl shadow-md">
          <summary className="flex justify-between items-center p-4 cursor-pointer text-lg font-semibold text-gray-800">
            {faq.question}
            <span className="ml-4 text-xl">+</span>
          </summary>
          <p className="px-4 py-2 text-gray-600">{faq.answer}</p>
        </details>
      ))}
    </div>

    <div className="text-right mt-6">
      <a href="#" className="text-sm text-gray-500 underline">read more FAQs</a>
    </div>
  </div>
</div>





<div className="py-16 bg-white">
  <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center bg-orange-500 rounded-xl shadow-lg overflow-hidden">
    <div className="p-6 flex-1 text-center md:text-left">
      <img src="https://sprect.com/assets/images/logo_home.svg" alt="logo" className="text-black rounded-full" />
      <h3 className="text-2xl font-bold text-white mb-4">ready to sprect? find your PRO today.</h3>
      <button className="px-6 py-3 bg-white text-black font-bold rounded-md hover:bg-gray-200 transition-colors">
        search for PROs
      </button>
    </div>
    <div className="flex space-x-4 p-6">
      <img src="https://www.delltechnologies.com/uploads/2021/07/s_6F9FA8C635E5B49A4AA9474CB76D1146BC1F6408CE5EEC320713FFF4758F98B5_1569007594455_003454-300x300.jpg" alt="Person 1" className="w-15 h-28 my-8 rounded-md" />
      <img src="https://i.seadn.io/gae/mwjY2BuBSsiRuK1QzJNiPKl6C7ZshEdMePUQK651c2E4bXLZyiDN2l29ZFbHeZ3totWrQKmh14XpV9VukewEsw1wCSJqJZjRZGrD?auto=format&dpr=1&w=1000" alt="Person 2" className="w-15 h-28 mt-2 rounded-md" />
      <img src="https://i.seadn.io/gae/9eJi6ig_4-qI-Yz-LUR37ZIcyDVCqCSyo6BtuXDXZ1SWKGy2CS3ycNAT0TsI-_fPW3y7nb25_fc_KnN8AgNqyFKNPiLVPCJ2vDam?auto=format&dpr=1&w=1000" alt="Person 3" className="w-15 h-28 my-8 rounded-md" />
      <img src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-02.jpg" alt="Person 4" className="w-15 h-28 mt-2 rounded-md" />
    </div>
  </div>
</div>



  <div className="py-16 bg-gray-100">
    <div className="max-w-3xl mx-auto mb-12">
    <h2 className="text-4xl font-bold  mb-8 max-w-3xl mx-auto">our investor</h2>
    </div>
    <div className="max-w-screen-md mx-auto text-center">
      <img src="https://sprect.com/assets/images/sidd.png" alt="Siddarth Shetty" className="w-40 h-40 rounded-full mx-auto grayscale mb-4" />
      <h4 className="text-xl font-semibold">Siddarth Shetty</h4>
      <p className="text-gray-500">chief business development officer</p>
      <p className="text-gray-500">ServiceChannel (NYSE: FTV)</p>
    </div>
  </div>




  <footer className="bg-gradient-to-r from-[#056F92] to-[#063954] text-white py-12">

  <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0 gap-11">
   
    <div className="text-center md:text-left">
      <img src="https://sprect.com/assets/images/logo_home.svg" alt="Logo" />
      <p className="text-gray-400 max-w-xs">
        sprect is building a global community of people to connect you with everyone quickly, easily, and privately. Join us in our mission to super connect the world.
      </p>

      
      <div className="mt-4 ">
        <h5 className="font-bold mb-2">stay updated. no spam.</h5>
        <form className="flex flex-col items-center">
          <input
            type="email"
            placeholder="enter email address"
            className="px-4 py-2 rounded-md bg-gray-700 text-white border-none mb-2 w-full"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 transition-colors w-full"
          >
            submit
          </button>
        </form>
      </div>
    </div>

    <div className="text-left md:text-left py-30 my-7 mb-8">
  <div className="grid grid-cols-2 md:grid-cols-3 gap-12"> 
    <div>
      <h6 className="font-semibold mb-4"> 
        <span className="text-white">about</span> <span className="text-gray-400">get to know us</span>
      </h6>
      <h6 className="font-semibold mb-4">
        <span className="text-white">careers</span> <span className="text-gray-400">grow with us</span>
      </h6>
      <h6 className="font-semibold mb-4">
        <span className="text-white">blog</span> <span className="text-gray-400">our opinion on stuff</span>
      </h6>
      <h6 className="font-semibold mb-4">
        <span className="text-white">contact</span> <span className="text-gray-400">what's on your mind?</span>
      </h6>
    </div>
    <div>
      <h6 className="font-semibold mb-4">
        <span className="text-white">press</span> <span className="text-gray-400">what are we up to</span>
      </h6>
      <h6 className="font-semibold mb-4">
        <span className="text-white">news</span> <span className="text-gray-400">we got covered</span>
      </h6>
      <h6 className="font-semibold mb-4">
        <span className="text-white">terms</span> <span className="text-gray-400">long but important</span>
      </h6>
      <h6 className="font-semibold mb-4">
        <span className="text-white">privacy</span> <span className="text-gray-400">privatest (ok, most private)</span>
      </h6>
    </div>
  </div>
</div>
  </div>


  <div className="mt-8 text-center text-white border-t border-gray-700 pt-4">
    <p>© sprect</p>
    <p className="text-sm">made with ❤️ in India, for the world.</p>
    <span className="[&>svg]:h-5 [&>svg]:w-5 text-right">
    <div className="flex space-x-4 px-9">
      <a href="https://www.instagram.com" aria-label="Instagram">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 448 512"
          className="h-5 w-5"
        >
          <path
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          />
        </svg>
      </a>
      <a href="https://www.linkedin.com" aria-label="LinkedIn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 448 512"
          className="h-5 w-5"
        >
          <path
            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
          />
        </svg>
      </a>
      <a href="https://www.facebook.com" aria-label="facebook">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 448 512"
          className="h-5 w-5"
        >
          <path
            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
          />
        </svg>
      </a>
    </div>
</span>


  </div>
</footer>

      </>
  );
};

export default Home;