import React from 'react'

const About = () => {
  return (
    <>
    <div className='mb-20'>
      <section className="pt-40">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-10">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <img
                src="about-image.jpg"
                alt="About Us"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Find the most suitable maid</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan velit sed ex
                consectetur, vitae pellentesque sapien laoreet. Nunc finibus gravida augue, eget
                fermentum magna laoreet sed. Quisque ut ex in sem volutpat varius in eget elit.
              </p>
              <p className="mb-6">
                Nullam ac velit ligula. Nullam dapibus consectetur velit, a efficitur mi varius ac.
                Praesent tincidunt, odio sit amet gravida tempor, dolor neque faucibus tortor, sit
                amet sollicitudin risus lectus sed justo. Ut vitae malesuada libero, at dapibus
                tellus.
              </p>
              <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  )
}

export default About