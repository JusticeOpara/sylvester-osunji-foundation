import aboutImage from "../assets/images/about_image.png"
import sylvester from "../assets/images/sylvester.png"
import ellipse01 from "../assets/images/Ellipse_1.png"
import ellipse02 from "../assets/images/Ellipse_2.png"
import ellipse03 from "../assets/images/Ellipse_3.png"
import ellipse04 from "../assets/images/Ellipse_4.png"
import ellipse05 from "../assets/images/Ellipse_5.png"
import snake from "../assets/images/snake-design.png"



interface Team {
  title: string,
  imgUrl: string,
  part: string

}
const Team: Team[] = [

  {
    title: "Sylvester Osunji",
    imgUrl: ellipse01,
    part: "Vounteer"
  },
  {
    title: "Sylvester Osunji",
    imgUrl: ellipse02,
    part: "Memeber"
  },
  {
    title: "Sylvester Osunji",
    imgUrl: ellipse03,
    part: "Vounteer"
  },
  {
    title: "Sylvester Osunji",
    imgUrl: ellipse04,
    part: "Memeber"
  },
  {
    title: "Sylvester Osunji",
    imgUrl: ellipse05,
    part: "Vounteer"
  },
]




const About = () => {

  return (

    <div className="w-full mt-[80px]">
      <div>
        <div className="flex flex-row justify-between items-center bg-[#FFFAFA] px-28 h-[80vh] w-full relative">
          <h1 className="text-6xl font-openSan font-bold text-[#111] w-[465.2px]">
            About Sylvester Osuji
            Foundation</h1>

          <img src={aboutImage} className="w-[50%] h-auto rounded" alt="main image for the aboutpage" />
        </div>

      
        <img src={snake} className="bfg-red-500 absolute bottom-0 w-full" alt=""/>

        <div className="px-28 h-[60vh] flex gap-3 flex-col justify-center ">

          <p className="font-openSan text-base font-normal text-[#111] w-[500px] leading-6">
            Sylvester Osuji Foundation was founded in the year 2007 by a young talented visual artist & humanitarian named Sylvester Oguguo Osuji
          </p>

          <p className="leading-6 font-openSan text-base font-normal text-[#111]">He started the foundation with the sole aim of reaching out to the sick women & children, aged & less privileged
            around him and ever since then the foundation has evolved and grown further around Nigeria and some African states where it touched lives .
            The Syvester Osuji foundation provides aid/support to underprivileged & impoverished communities in Africa & beyond.</p>

          <p className="font-openSan text-base font-normal text-[#111] leading-6">Slyvester Osuji Foundation (SOL) is determined to influence and inspire young Africans in self rediscovery, mentoring, empowerment and provision of educational scholarships &
            free skills acquisition programs to help reduce youth restiveness & prostitution among the girlchild.</p>

          <p className="font-openSan text-base font-normal text-[#111] leading-6">
            Our goal is to also sustain happiness, enhance cordiality and eliminate malignancy caused by hunger, global economic instabilities and abject poverty.</p>

        </div>

      </div>

      <div className="bg-[#3B4293] w-full h-[150vh] text-white px-28 py-20 flex flex-col justify-between ">
        <h1 className="font-openSan text-2xl font-bold pl-10 ">Meet The Team</h1>

        <div className="flex flex-row justify-between items-center">

          <img src={sylvester} className="rounded-[100%] w-64" />

          <div className="h-[270px] w-[720px] justify-between flex flex-col">

            <p className="w-full font-openSan text-base leading-7">volutpat imperdiet justo egestas. Ut lectus at faucibus eget. Iaculis mattis morbi orci cursus in bibendum amet egestas vitae.
              Nec nibh malesuada ac morbi. Neque quis sed id id lectus lorem venenatis. Urna tristique morbi diam nulla cursus vel nam.
              Eget posuere lorem tortor urna aliquam nunc amet elementum volutpat. Volutpat duis lobortis lectus at vulputate eget at consectetur.
              Ipsum neque elit molestie maecenas id vel purus nibh arcu. Sed magna pellentesque ultricies eros congue viverra eget donec.
              Condimentum in sed egestas viverra ullamcorper ornare. Gravida eu </p>


            <div className="flex flex-col justify-center items-center h-[60px] bg-[#000000] opacity--50  ">

              <p className="text-center font-semibold font-openSan text-base text-white">Slyvester Osunji</p>

              <p className="text-sm font-normal">Founder SOF</p>
            </div>



          </div>


        </div>

        <div className="flex flex-row items-center">

          {Team.map((item, index) => (

            <div className=" flex flex-col justify-center items-center" key={index}>

              <img src={item.imgUrl} className="w-[80%]" alt="team memeber" />

              <p className="text-center font-inter text-lg font-semibold">{item.title}</p>

              <p className="text-sm font-normal font-inter text-center ">{item.part}</p>

            </div>
          ))}

        </div>



      </div>

      <div className="w-full h-[100vh] px-28 flex flex-col justify-evenly">
        <div className="flex flex-row items-center justify-between">
          <p className="font-openSan font-bold text-3xl text-center">Our Vision</p>

          <p className="text-base w-[800px] leading-6">To provide food, shelter, education & basic healthcare for women, aged men and children who are dying from hunger
            and abject poverty caused by global lockdown & other economic meltdown.
            We support  the vulnerable, individuals and families in the poorest communities in the world especially in Africa.</p>
        </div>

        <div className="flex flex-row items-center justify-between">
          <p className="font-openSan font-bold text-3xl text-center">Our Mission</p>

          <p className="text-base w-[800px] leading-6">To see a world free from hunger, sickness and pain caused by
            unavailability of care and love for humanity above all we want to help put an end to youth restiveness and abuse of
            the girlchild in Africa & the globe at large which  in most cases is caused by poverty & unemployment.</p>
        </div>

        <div className="flex flex-row items-center justify-between">
          <p className="font-openSan font-bold text-3xl text-center ">Our Focus</p>

          <p className="text-base w-[800px] leading-6">To provide food, shelter, education & basic healthcare for women, aged men and children who are dying from hunger
            and abject poverty caused by global lockdown & other economic meltdown.
            We support  the vulnerable, individuals and families in the poorest communities in the world especially in Africa.</p>
        </div>

      </div>


      <div className="w-full h-[120vh] px-28 bg-[#FFFAFA] flex  justify-between items-center">



        <form className="w-[50vw] h-full flex justify-center flex-col">

          <p className="font-openSan font-bold text-3xl pb-10">Get In Touch</p>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-[#252a34] text-base font-normal mb-1"  >
                First Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border-[1px] border-[#D9D7D7] rounded-sm py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>

            <div className="w-full md:w-1/2 px-3 ">
              <label className="block tracking-wide text-[#252a34] text-base font-normal mb-1"  >
                Last Name
              </label>
              <input className="appearance-none mb-2 block w-full bg-gray-200 text-gray-700 border border-[#D9D7D7] rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
            </div>


            <div className="w-full md:w-1/2 px-3">
              <label className="block tracking-wide text-[#252a34] text-base font-normal mb-1"  >
                Mail
              </label>
              <input className="appearance-none  mb-2 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email" />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label className="block tracking-wide text-[#252a34] text-base font-normal mb-1" >
                Phone
              </label>

              <input
                className="appearance-none mb-2 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="+243" />
            </div>


          </div>

          <textarea id="message" rows={5} className="block p-2.5 w-full mb-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

          <button className="bg-[#0098DB] text-white font-bold py-2 pxx-4 w-32 text-sm rounded">
            Send Message
          </button>

        </form>

        <div className="w-[310.1px] h-[273px] bg-[#EDF7F5] px-4 py-8 flex flex-col justify-between  ">
          <h1 className="font-bold capitalize text-xl font-playfair">Address</h1>

          <p className="text-xs text-[#666666]">
            Quam elementum pulvinar etiam non quam lacus
            suspendisse.A scelerisque purus semper eget duis at
            Lobortisscelerisque fermentum dui faucibus in ornare....
          </p>

          <div>
            <p className="text-xs"><span className="font-semibold text-sm">Location</span>: 4517 Washington Ave. Manchester,
              Kentucky 39495</p>

            <p className="text-xs "> <span className="font-semibold text-sm">Phone</span>: +234 700 0000 000</p>

            <p className="text-xs "><span className="font-semibold text-sm">Email</span> : Sylvesterosujifoundation@gmail.com</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default About