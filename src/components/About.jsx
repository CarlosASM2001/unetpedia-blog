import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Learn more about our mission, vision, and the team behind our success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are a community of content writers who share their learnings and experiences 
                to help others grow. Our platform brings together diverse voices and perspectives 
                from around the world.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded with the mission to democratize knowledge sharing, we believe that 
                everyone has valuable insights to offer. Our blog serves as a space where 
                creativity meets learning, and where ideas can flourish.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're here to learn something new or share your expertise, 
                we're glad you're part of our community.
              </p>
            </div>
            <div>
              <img
                src="/src/assets/banner1.jpg"
                alt="Our team"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To create a platform where knowledge flows freely, enabling individuals 
                and communities to learn, grow, and thrive together.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Content</h3>
              <p className="text-gray-600">
                We ensure every piece of content meets our high standards for accuracy and value.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Community Focus</h3>
              <p className="text-gray-600">
                Building connections and fostering collaboration among our readers and writers.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Continuous Learning</h3>
              <p className="text-gray-600">
                Promoting lifelong learning through diverse perspectives and expert insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;