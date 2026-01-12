// import {SocialMediaIcons} from "../components";

// const Footer = () => {
//   return (
//     <footer className="h-64 bg-red pt-10">
//       <div className="w-5/6 mx-auto">
//         <SocialMediaIcons />
//         <div className="md:flex justify-center md:justify-between text-center">
//           <p className="font-playfair font-semibold text-2xl text-yellow">
//             MD SHUAIB
//           </p>
//           <p className="font-playfair text-md text-yellow">
//             @{new Date().getFullYear()}. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { SocialMediaIcons } from "../components";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-5/6 mx-auto h-full flex flex-col justify-between">
        {/* SOCIAL ICONS */}
        <div className="flex justify-center">
          <SocialMediaIcons />
        </div>

        {/* FOOTER CONTENT */}
        <div className="md:flex justify-between items-center text-center md:text-left pb-6">
          <div>
            <p className="font-playfair font-semibold text-2xl text-yellow">
              Muhammad Shuaib Ansari
            </p>
            <p className="text-sm text-yellow opacity-80 mt-1">
              Backend Engineer • Cloud • Distributed Systems
            </p>
          </div>

          <p className="font-playfair text-sm text-yellow mt-4 md:mt-0 opacity-80">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
