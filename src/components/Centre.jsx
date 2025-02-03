import React from "react";
import Home from "../assets/blog.png";
import Create from "../assets/write-blog.jpg";
import Read from "../assets/read-blog.jpg";
import mission from "../assets/mission.jpg";
import values from "../assets/values.avif";
import vision from "../assets/vision.avif";

function Centre() {
  return (
    <div id="container" className="w-full flex flex-col items-center text-3xl bg-zinc-900 text-zinc-200">
      <div className="max-w-7xl mx-auto md:flex items-center justify-between mb-16">
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight text-yellow-400">
            Welcome to{" "}
            <span className="text-blue-400">
              React Blog
            </span>
          </h1>
          <p className="text-lg text-zinc-400 mb-8">
            Share your story,{" "}
            <span className="text-green-400 font-semibold">
              inspire the world!
            </span>
            Dive into exciting content and unleash your creativity with us. Join
            the journey of storytelling, innovation, and ideas.
          </p>
          <button className="px-8 py-3 bg-yellow-500 text-zinc-900 text-lg rounded-lg shadow-lg hover:bg-yellow-400 transition">
            Read • Write • Repeat
          </button>
        </div>

        <div className="md:w-1/2 flex mt-16 justify-center">
          <img
            src={Home}
            alt="Blogging Illustration"
            className="rounded-lg shadow-xl hover:scale-105 transform transition duration-300"
            width={550}
          />
        </div>
      </div>

      <div className="w-full bg-zinc-800 py-12 text-center">
        <h2 className="text-4xl font-bold text-yellow-400">
          Explore & Share
        </h2>
        <p className="text-lg text-zinc-400 mt-4">
          Your creativity deserves the perfect platform. Let's dive into the
          next steps.
        </p>
      </div>

      <div className="max-w-7xl mx-auto md:flex items-center justify-between mb-16">
        <div className="md:w-1/3 flex justify-center mt-10 mb-10 md:mb-0">
          <img
            src={Create}
            alt="Create Blog Illustration"
            className="rounded-lg shadow-xl hover:scale-105 transform transition duration-300"
            width={500}
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">
            Create Blog
          </h2>
          <p className="text-lg text-zinc-400">
            Start your journey by creating blogs that matter. Share your voice
            with the world, inspire others, and build your personal brand.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto md:flex items-center justify-between mb-16">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">
            Read Blogs
          </h2>
          <p className="text-lg text-zinc-400">
            Dive into a world of creativity and knowledge. Explore blogs from
            diverse topics and find the inspiration you've been searching for.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={Read}
            alt="Read Blog Illustration"
            className="rounded-lg shadow-xl hover:scale-105 transform transition duration-300"
            width={550}
          />
        </div>
      </div>

      <section id="mission-vision-values" className="py-12">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">
            Our Mission, Vision & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-800 p-6 border-2 border-zinc-700 rounded-lg">
              <img
                src={mission}
                alt="Our Mission"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
                Our Mission
              </h3>
              <p className="text-lg text-zinc-400">
                Our mission is to empower developers by providing high-quality
                content on React and front-end technologies.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 border-2 border-zinc-700 rounded-lg">
              <img
                src={vision}
                alt="Our Vision"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
                Our Vision
              </h3>
              <p className="text-lg text-zinc-400">
                Our vision is to become the leading platform for React
                developers, providing accessible tutorials, in-depth guides, and
                expert insights.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 border-2 border-zinc-700 rounded-lg">
              <img
                src={values}
                alt="Our Values"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
                Our Values
              </h3>
              <p className="text-lg text-zinc-400">
                We value knowledge sharing, continuous learning, and
                community-driven development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 overflow-hidden">
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-yellow-400">
              How to Get Started?
            </h2>

            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              1.{" "}
              <span className="text-yellow-400 font-semibold">
                Login
              </span>{" "}
              or{" "}
              <span className="text-yellow-400 font-semibold">
                Register
              </span>{" "}
              onto the website. <br />
              <br />
              2. Select the button onto which you are interested to.{" "}
              <span className="text-yellow-400 font-semibold">
                Read or Write.
              </span>{" "}
              <br />
              <br />
              3. Once done with writing{" "}
              <span className="text-yellow-400 font-semibold">
                click submit.
              </span>{" "}
              Thanks for contributing to our website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Centre;
