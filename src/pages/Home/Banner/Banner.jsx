import img1 from '../../../assets/banner/1.jpg'
import img2 from '../../../assets/banner/2.jpg'
import img3 from '../../../assets/banner/3.jpg'
import img4 from '../../../assets/banner/4.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full rounded-xl" />
    <div className="absolute text-white flex rounded-xl items-center ps-12 transform h-full w-full bottom-0 bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0]">
      <div className='w-1/3 '>
      <h2 className='text-4xl font-bold '>Affordable Price For Car Servicing</h2><br />
      <p>There are many variations of passages of available, but the majority have suffered the alteration in some form</p><br />
    <div className='flex gap-5'>
    <button className="btn btn-active btn-primary">DISCOVER MORE</button>
    <button className="btn btn-outline btn-secondary">Latest Project</button>
    </div>
      </div>
    </div>
    <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={img2} className="w-full rounded-xl" />
    <div className="absolute text-white flex rounded-xl items-center ps-12 transform h-full w-full bottom-0 bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0]">
      <div className='w-1/3 '>
      <h2 className='text-4xl font-bold '>Affordable Price For Car Servicing</h2><br />
      <p>There are many variations of passages of available, but the majority have suffered the alteration in some form</p><br />
    <div className='flex gap-5'>
    <button className="btn btn-active btn-primary">DISCOVER MORE</button>
    <button className="btn btn-outline btn-secondary">Latest Project</button>
    </div>
      </div>
    </div>
    <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={img3} className="w-full rounded-xl" />
    <div className="absolute text-white flex rounded-xl items-center ps-12 transform h-full w-full bottom-0 bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0]">
      <div className='w-1/3 '>
      <h2 className='text-4xl font-bold '>Affordable Price For Car Servicing</h2><br />
      <p>There are many variations of passages of available, but the majority have suffered the alteration in some form</p><br />
    <div className='flex gap-5'>
    <button className="btn btn-active btn-primary">DISCOVER MORE</button>
    <button className="btn btn-outline btn-secondary">Latest Project</button>
    </div>
      </div>
    </div>
    <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img src={img4} className="w-full rounded-xl" />
    <div className="absolute text-white flex rounded-xl items-center ps-12 transform h-full w-full bottom-0 bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0]">
      <div className='w-1/3 '>
      <h2 className='text-4xl font-bold '>Affordable Price For Car Servicing</h2><br />
      <p>There are many variations of passages of available, but the majority have suffered the alteration in some form</p><br />
    <div className='flex gap-5'>
    <button className="btn btn-active btn-primary">DISCOVER MORE</button>
    <button className="btn btn-outline btn-secondary">Latest Project</button>
    </div>
      </div>
    </div>
    <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;