// import { motion } from "framer-motion";
// import { LineGradient } from "../components";

// const container = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.2 },
//   },
// };

// const projectVariant = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1 },
// };

// const projectImages = {
//   "decentralized-payment-system": "project-1.jpeg",
//   "e-commerce-site": "project-2.jpeg",
// };

// const Project = ({ title, description }) => {
//   const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
//   const projectTitle = title.split(" ").join("-").toLowerCase();

//   return (
//     <motion.div variants={projectVariant} className="relative">
//       <div className={overlayStyles}>
//         <p className="text-2xl font-playfair">{title}</p>
//         <p className="mt-7">{description}</p>
//       </div>
//       <img src={`../assets/${projectImages[projectTitle] || `${projectTitle}.jpeg`}`} alt={projectTitle} />
//     </motion.div>
//   );
// };

// const Projects = () => {
//   return (
//     <section id="projects" className="pt-48 pb-48">
//       {/* HEADINGS */}

//       <motion.div
//         className="md:w-2/4 mx-auto text-center"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 0.5 }}
//         variants={{
//           hidden: { opacity: 0, x: -50 },
//           visible: { opacity: 1, x: 0 },
//         }}
//       >
//         <div>
//           <p className="font-playfair font-semibold text-4xl">
//             <span className="text-red">PRO</span>JECTS
//           </p>
//           <div className="flex justify-center mt-5">
//             <LineGradient width="w-1/3" />
//           </div>
//         </div>
//         <p className="mt-10 mb-7">
//           Selected backend & cloud projects — systems, APIs, and scalable infrastructure.
//         </p>
//       </motion.div>

//       {/* PROJECTS */}
//       <div className="flex justify-center">
//         <motion.div
//           className="sm:grid sm:grid-cols-3"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//           variants={container}
//         >
//           {/* ROW 1 */}
//           <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-3xl font-playfair font-semibold">
//             BACKEND & CLOUD PROJECTS
//           </div>
//           <Project
//             title="Decentralized Payment System"
//             description="Built and scaled a multi-currency wallet system with smart-contract integration, async transaction APIs using Django + Celery, and blockchain microservices."
//           />
//           <Project
//             title="E-commerce Site"
//             description="Production-ready Django e-commerce backend with order lifecycle management, Razorpay payments, and real-time order tracking."
//           />
//           {/* ROW 2 */}
//           <Project
//             title="Project 3"
//             description="Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt."
//           />
//           <Project
//             title="Project 4"
//             description="Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt."
//           />{" "}
//           <Project
//             title="Project 5"
//             description="Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt."
//           />
//           {/* ROW 3 */}
//           <Project
//             title="Project 6"
//             description="Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt."
//           />
//           <Project
//             title="Project 7"
//             description="Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt."
//           />{" "}
//           <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-3xl font-playfair font-semibold">
//             SMOOTH USER EXPERIENCE
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;




import { motion } from "framer-motion";
import { LineGradient } from "../components";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const projectImages = {
  "decentralized-payment-system": "project-1.jpeg",
  "e-commerce-site": "project-2.jpeg",
};
const Project = ({ title, description, link, image }) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div
      variants={projectVariant}
      className="relative w-full overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center px-6 text-deep-blue">
        <p className="text-xl md:text-2xl font-playfair font-semibold">
          {title}
        </p>
        <p className="mt-4 text-sm md:text-base">{description}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="mt-4 text-sm font-semibold underline"
          >
            View Live Project →
          </a>
        )}
      </div>

      <img
        src={image || `../assets/${projectImages[projectTitle]}`}
        alt={projectTitle}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-32 pb-32">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl">
          <span className="text-red">PRO</span>JECTS
        </p>
        <div className="flex justify-center mt-5">
          <LineGradient width="w-1/3" />
        </div>
        <p className="mt-10 mb-7">
          Selected backend and cloud projects focused on scalable systems,
          high-performance APIs, and production-grade infrastructure.
        </p>
      </motion.div>

      {/* PROJECT GRID */}
      <div className="flex justify-center">
        <motion.div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            w-full
            max-w-6xl
          "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          {/* Highlight Block */}
          <div className="flex justify-center items-center p-8 bg-red text-center text-2xl font-playfair font-semibold">
            BACKEND & CLOUD PROJECTS
          </div>

        <Project
          title="Inner Peace Platform"
          description="A Multi-Lingual (Arbi+Urdu+English+Hindi) mindfulness and well-being platform built with Django, focused on Scrapping and clean UX, backend stability,  and production deployment."
          link="https://innerpeace.pythonanywhere.com/"
        image="../assets/my_project_image_inner_peace.png"
        />

          <Project
            title="Decentralized Payment System"
            description="Multi-currency wallet system with blockchain integration, async transaction APIs using Django + Celery, and fault-tolerant microservices deployed on AWS."
          />

        
          <Project
            title="E-commerce Site"
            description="Production-ready Django backend with order lifecycle management, Razorpay payments, and real-time order tracking using AJAX."
            link="https://shuaibansari.pythonanywhere.com/"
         />

          {/* Highlight Block */}
          <div className="flex justify-center items-center p-8 bg-blue text-center text-2xl font-playfair font-semibold">
            SCALABLE • RELIABLE • PRODUCTION-READY
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
