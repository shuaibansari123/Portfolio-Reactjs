// import useMediaQuery from "../hooks/useMediaQuery";
// import { motion } from "framer-motion";
// import skills from "../assets/skills-image.png";
// import { LineGradient } from "../components";

// const MySkills = () => {
//   const isAboveMediumScreens = useMediaQuery("(min-width: 1296px");

//   return (
//     <section id="skills" className="pt-10 pb-24">
//       {/* HEADER AND IMAGE SECTION */}
//       <div className="md:flex md:justify-between md:gap-16 mt-32">
//         <motion.div
//           className="md:w-1/3"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, x: -50 },
//             visible: { opacity: 1, x: 0 },
//           }}
//         >
//           <p className="font-playfair font-semibold text-4xl mb-5">
//             MY <span className="text-red">SKILLS</span>
//           </p>
//           <LineGradient width="w-1/3" />
//           <p className="mt-10 mb-7">
//             Aliquam, amet dui feugiat facilisi dui. Aliquan aliquet integer ut
//             fames odio in at.
//           </p>
//         </motion.div>
//         <div className="mt-16 md:mt-0">
//           {isAboveMediumScreens ? (
//             <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
//               <img alt="skills" className="z-10" src={skills} />
//             </div>
//           ) : (
//             <img alt="skills" className="z-10" src={skills} />
//           )}
//         </div>
//       </div>

//       {/* SKILLS */}
//       <div className="md:flex md:justify-between mt-16 gap-32">
//         {/* EXPERIENCE */}
//         <motion.div
//           className="md:w-1/3 mt-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, x: 50 },
//             visible: { opacity: 1, x: 0 },
//           }}
//         >
//           <div className="relative h-32">
//             <div className="z-10">
//               <p className="font-playfair font-semibold text-5xl">01</p>
//               <p className="font-playfair font-semibold text-3xl mt-3">
//                 Python
//               </p>
//             </div>
//             <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute md:right-0 sm:left-20 top-0 z-[-1]" />
//           </div>
//           <p className="mt-5">
//             Aliquam, amet dui feugiat facilisi dui. Aliquan aliquet integer ut
//             fames odio in at.
//           </p>
//         </motion.div>

//         {/* INNOVATIVE */}
//         <motion.div
//           className="md:w-1/3 mt-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, x: 50 },
//             visible: { opacity: 1, x: 0 },
//           }}
//         >
//           <div className="relative h-32">
//             <div className="z-10">
//               <p className="font-playfair font-semibold text-5xl">02</p>
//               <p className="font-playfair font-semibold text-3xl mt-3">
//                 Django
//               </p>
//             </div>
//             <div className="w-1/2 md:w-3/4 h-32 bg-red absolute md:right-0 sm:left-20 top-0 z-[-1]" />
//           </div>
//           <p className="mt-5">
//             Aliquam, amet dui feugiat facilisi dui. Aliquan aliquet integer ut
//             fames odio in at.
//           </p>
//         </motion.div>

//         {/* IMAGINATIVE */}
//         <motion.div
//           className="md:w-1/3 mt-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, x: 50 },
//             visible: { opacity: 1, x: 0 },
//           }}
//         >
//           <div className="relative h-32">
//             <div className="z-10">
//               <p className="font-playfair font-semibold text-5xl">03</p>
//               <p className="font-playfair font-semibold text-3xl mt-3">
//                 Docker
//               </p>
//             </div>
//             <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute md:right-0 sm:left-20 top-0 z-[-1]" />
//           </div>
//           <p className="mt-5">
//             Aliquam, amet dui feugiat facilisi dui. Aliquan aliquet integer ut
//             fames odio in at.
//           </p>
//         </motion.div>

//         <motion.div
//           className="md:w-1/3 mt-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, x: 50 },
//             visible: { opacity: 1, x: 0 },
//           }}
//         >
//           <div className="relative h-32">
//             <div className="z-10">
//               <p className="font-playfair font-semibold text-5xl">04</p>
//               <p className="font-playfair font-semibold text-3xl mt-3">
//                 PostgreSQL
//               </p>
//             </div>
//             <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute md:right-0 sm:left-20 top-0 z-[-1]" />
//           </div>
//           <p className="mt-5">
//             Aliquam, amet dui feugiat facilisi dui. Aliquan aliquet integer ut
//             fames odio in at.
//           </p>
//         </motion.div>

//         <motion.div
//           className="md:w-1/3 mt-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, x: 50 },
//             visible: { opacity: 1, x: 0 },
//           }}
//         >
//           <div className="relative h-32">
//             <div className="z-10">
//               <p className="font-playfair font-semibold text-5xl">05</p>
//               <p className="font-playfair font-semibold text-3xl mt-3">
//                 Redis
//               </p>
//             </div>
//             <div className="w-1/2 md:w-3/4 h-32 bg-red absolute md:right-0 sm:left-20 top-0 z-[-1]" />
//           </div>
//           <p className="mt-5">
//             Aliquam, amet dui feugiat facilisi dui. Aliquan aliquet integer ut
//             fames odio in at.
//           </p>
//         </motion.div>


//         <motion.div
//           className="md:w-1/3 mt-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, x: 50 },
//             visible: { opacity: 1, x: 0 },
//           }}
//         >
//           <div className="relative h-32">
//             <div className="z-10">
//               <p className="font-playfair font-semibold text-5xl">06</p>
//               <p className="font-playfair font-semibold text-3xl mt-3">
//                 GCP
//               </p>
//             </div>
//             <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute md:right-0 sm:left-20 top-0 z-[-1]" />
//           </div>
//           <p className="mt-5">
//             Aliquam, amet dui feugiat facilisi dui. Aliquan aliquet integer ut
//             fames odio in at.
//           </p>
//         </motion.div>

//         <motion.div
//           className="md:w-1/3 mt-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, x: 50 },
//             visible: { opacity: 1, x: 0 },
//           }}
//         >
//           <div className="relative h-32">
//             <div className="z-10">
//               <p className="font-playfair font-semibold text-5xl">07</p>
//               <p className="font-playfair font-semibold text-3xl mt-3">
//                 JS
//               </p>
//             </div>
//             <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute md:right-0 sm:left-20 top-0 z-[-1]" />
//           </div>
//           <p className="mt-5">
//             Aliquam, amet dui feugiat facilisi dui. Aliquan aliquet integer ut
//             fames odio in at.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default MySkills;



import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skills from "../assets/skills-image.png";
import { LineGradient } from "../components";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1296px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Strong backend engineering skillset focused on building scalable,
            reliable, and production-grade systems. Experienced across cloud
            platforms, APIs, databases, background processing, and modern
            deployment workflows.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img alt="skills" className="z-10" src={skills} />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={skills} />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* PYTHON */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Python
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute md:right-0 sm:left-20 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Primary backend language used for building high-performance APIs,
            background workers, data pipelines, and system integrations with
            strong focus on clean architecture and reliability.
          </p>
        </motion.div>

        {/* DJANGO */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Django
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute md:right-0 sm:left-20 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Expert in Django and Django REST Framework for designing secure,
            scalable APIs, complex relational schemas, async workflows, and
            production-ready backend platforms.
          </p>
        </motion.div>

        {/* DOCKER */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Docker
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute md:right-0 sm:left-20 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Containerized backend services using Docker and docker-compose,
            enabling consistent local development, smooth deployments, and
            reliable production environments.
          </p>
        </motion.div>

        {/* POSTGRESQL */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">04</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                PostgreSQL
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute md:right-0 sm:left-20 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Strong experience designing relational schemas, optimizing queries,
            handling migrations, and operating PostgreSQL in production systems
            with high data integrity.
          </p>
        </motion.div>

        {/* REDIS */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">05</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Redis
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute md:right-0 sm:left-20 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Used Redis for caching, background task queues, rate limiting, and
            real-time system coordination to improve performance and system
            responsiveness.
          </p>
        </motion.div>

        {/* GCP */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">06</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                GCP
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute md:right-0 sm:left-20 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Primary cloud platform with hands-on experience in Compute Engine,
            Cloud Run, Cloud Storage, Cloud SQL, CDN, and secure deployment
            pipelines for scalable backend systems.
          </p>
        </motion.div>

        {/* JAVASCRIPT */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">07</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                JavaScript
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute md:right-0 sm:left-20 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Practical JavaScript knowledge for frontend integration, AJAX-based
            workflows, API consumption, and supporting full-stack product
            development when required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
