const Contact = () => {
  return (
    <div id="contact" className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h1>
        <p className="text-center text-lg font-semibold text-gray-500">
          I'm actively looking for job opportunities where I can contribute, grow, and build impactful applications.
          If you're hiring or know of any opportunities that match my skills, feel free to reach out — I'd love to connect!
        </p>
        <a
          href="mailto:juniansyahanwar@gmail.com"
          className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Contact;
