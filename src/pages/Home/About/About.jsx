// eslint-disable-next-line no-unused-vars
import React from 'react'; 
import person from '../../../assets/about_us/person.jpg'
import parts from '../../../assets/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero h-[600px] bg-base-200 pt-8">
  <div className="hero-content flex-col lg:flex-row gap-4">
   <div className='w-1/2 relative mr-12'>
   <img src={person} className="max-w-sm rounded-lg shadow-2xl" />
    <img src={parts} className="max-w-sm rounded-lg shadow-2xl absolute right-0 top-1/2 border-4 border-white" />
   </div>
    <div className='w-1/2 px-4 pt-24'>
        <h3 className='text-red-400 font-bold mb-3'>About Us</h3>
      <h1 className="text-3xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">We are a full service automotive repair and diagnostic center. With over 20yrs of experience, we have the knowledge and the latest equipment to handle the most unique and complicated issues as well as the more routine maintenance needs. Most importantly, we pride ourselves on complete honesty, transparency, and quality when it comes to your automobile needs. We are independently and privately owned and operated business.</p>
      <button className="btn btn-primary">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;