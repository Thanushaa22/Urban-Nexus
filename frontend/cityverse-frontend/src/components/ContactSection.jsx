function ContactSection() {
  return (
    <section
      id="contact"
      className="
      bg-black
      text-white
      py-32
      px-10
      "
    >
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-6">
          CONTACT
        </p>

        <h2 className="text-6xl md:text-7xl font-light mb-8">
          Let's build the future
          <span className="italic text-red-500">
            {" "}together.
          </span>
        </h2>

        <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-14">
          Open to software engineering opportunities,
          collaborations, internships and innovative projects.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">

          <a
            href="mailto:thanusham2233@gmail.com"
            className="
            bg-red-600
            hover:bg-red-700
            px-8
            py-4
            rounded-xl
            font-medium
            transition-all
            hover:scale-105
            "
          >
            Send Email
          </a>

          <a
            href="https://www.linkedin.com/in/thanusha2233/"
            target="_blank"
            rel="noreferrer"
            className="
            border
            border-white/10
            hover:border-red-500
            hover:text-red-400
            px-8
            py-4
            rounded-xl
            transition-all
            "
          >
            Connect on LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;