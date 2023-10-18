
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Helmet from 'react-helmet';

const Event = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const handleEvent = e =>{
        e.preventDefault();
        Swal.fire(
            'Thank you for your response',
            'We will contact you as soon as possible',
            'success'
          )
    }



    return (
        
        <div className=" mt-24"><Helmet><title>My Event</title></Helmet>
            <div className="px-10">

            <div className="overflow-x-hidden flex justify-center items-center align-middle m-auto max-md:flex-col">
                
                    <h2 data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="overflow-x-hidden text-center font-bold text-3xl mx-16 max-md:text-2xl">Please select the date you'd like for your event. </h2>
                    <img data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"  className="overflow-x-hidden w-[40%] max-md:w-[50%]"  src="https://ebook.projectbd.com/wp-content/uploads/2023/10/calandar.jpg" alt="" />
            </div>
            </div>
            <div>
                <form onSubmit={handleEvent} className="flex flex-col justify-center items-center gap-1 mb-20">
                    <input type="text" className="py-1 px-1 my-2 border-2 border-blue-500 w-[40%] rounded-lg max-md:w-[80%]" placeholder="Event name" required />
                    
                    <textarea rows="4" cols="50" className="py-1 px-1 border-2 border-blue-500 w-[40%] rounded-lg max-md:w-[80%]" 
                     placeholder="Describe Something about your event..." />

<div className=" w-[40%]"><h4 className="text-left px-1">Event Date: </h4></div>
<input type="date" className="py-1 px-1 border-2 border-blue-500 w-[40%] rounded-lg mb-2 max-md:w-[80%]" id="eventday" name="eventday" required/>
<button className="py-1 px-1 border-2 bg-blue-500 text-white w-[40%] rounded-lg mb-2 max-md:w-[80%] hover:bg-blue-700">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Event;