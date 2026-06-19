import { motion } from "framer-motion";

function Outcomes() {
  const stats = [
    {
      number: "73%",
      label: "Faster Emergency Response"
    },
    {
      number: "24x",
      label: "Better Traffic Visibility"
    },
    {
      number: "94%",
      label: "Prediction Accuracy"
    }
  ];

  return (
    <motion.section
      id="outcomes"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-black text-white py-40 px-10"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-8xl font-light mb-24">
          Measurable

          <span className="text-red-500 italic">
            {" "}impact.
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.8
              }}
              className="
              border-l-2
              border-red-500
              pl-8
              "
            >
              <h3
                className="
                text-8xl
                font-light
                text-red-500
                "
              >
                {item.number}
              </h3>

              <p className="text-2xl text-gray-400 mt-4">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default Outcomes;