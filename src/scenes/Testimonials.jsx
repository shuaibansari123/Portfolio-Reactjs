// import { motion } from "framer-motion";
// import { LineGradient } from "../components";

// const Testimonials = () => {
//   return (
//     <section id="testimonials" className="pt-32 pb-16">
//       {/* HEADING */}
//       <motion.div
//         className="md:w-1/3 text-center md:text-left"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 0.5 }}
//         variants={{
//           hidden: { opacity: 0, x: -50 },
//           visible: { opacity: 1, x: 0 },
//         }}
//       >
//         <p className="font-playfair font-semibold text-4xl mb-5 text-red">
//           TESTIMONIALS
//         </p>
//         <LineGradient width="w-2/5 sm:mx-auto md:mx-0" />
//         <p className="mt-10">
//           Here's What People are Saying About My Work. Aliquam aliquet integer
//           ut fames odio in at. At magna ornare dictum lectus.
//         </p>
//       </motion.div>

//       {/* TESTIMONIALS */}
//       <div className="md:flex md:justify-between gap-8">
//         <motion.div
//           className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
//             before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.6 }}
//           variants={{
//             hidden: { opacity: 0, scale: 0.8 },
//             visible: { opacity: 1, scale: 1 },
//           }}
//         >
//           <p className="font-playfair text-6xl">“</p>
//           <p className="text-center text-xl">
//             A auctor pharetra hendrerit mattis amet etiam interdum platea.
//           </p>
//         </motion.div>

//         <motion.div
//           className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
//             before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           variants={{
//             hidden: { opacity: 0, scale: 0.8 },
//             visible: { opacity: 1, scale: 1 },
//           }}
//         >
//           <p className="font-playfair text-6xl">“</p>
//           <p className="text-center text-xl">
//             Aliquam aliquet integer ut fames odio in at. At magna ornare dictum
//             lectus.
//           </p>
//         </motion.div>

//         <motion.div
//           className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
//             before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           variants={{
//             hidden: { opacity: 0, scale: 0.8 },
//             visible: { opacity: 1, scale: 1 },
//           }}
//         >
//           <p className="font-playfair text-6xl">“</p>
//           <p className="text-center text-xl">
//             Fames odio in at. At magna ornare dictum lectus.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;




import { motion } from "framer-motion";
import { LineGradient } from "../components";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="w-2/5 sm:mx-auto md:mx-0" />
        <p className="mt-10">
          Feedback from clients and teams I’ve worked with on backend systems,
          cloud infrastructure, and production-grade platforms.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        {/* YATRIPAY */}
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Muhammad delivered a secure and scalable backend for our decentralized
            payment platform. His understanding of asynchronous systems,
            blockchain integrations, and production reliability was impressive.
          </p>
          <p className="mt-4 text-center text-sm font-semibold">
            — Yatripay (Freelance Client)
          </p>
        </motion.div>

        {/* TEAM / COMPANY */}
        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Strong backend ownership with a clear focus on performance,
            maintainability, and clean system design. Reliable under pressure
            and excellent at solving complex backend problems.
          </p>
          <p className="mt-4 text-center text-sm font-semibold">
            — Engineering Team
          </p>
        </motion.div>

        {/* GENERAL PROFESSIONAL FEEDBACK */}
        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            A backend engineer who thinks beyond just writing code — focuses on
            system stability, scalability, and long-term reliability.
          </p>
          <p className="mt-4 text-center text-sm font-semibold">
            — Client / Stakeholder
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
