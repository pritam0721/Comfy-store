const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl '>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        At Comfy, we believe that comfort is not just a luxury, but a necessity.
        We are committed to providing our customers with the most comfortable and stylish products. Our mission is to create a shopping experience that not only meets but exceeds expectations, ensuring that every item we offer reflects our dedication to quality and comfort. We believe in sustainability, ethical sourcing, and creating a positive impact in the communities we serve. Join us on this journey towards a more comfortable and stylish future.
      </p>
    </>
  );
};
export default About;