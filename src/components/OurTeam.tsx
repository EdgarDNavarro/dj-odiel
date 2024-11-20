import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TiCameraOutline } from "react-icons/ti";
import { GrUserManager } from "react-icons/gr";
import { PiDevices } from "react-icons/pi";
import { FaPhotoVideo } from "react-icons/fa";

const OurTeam = () => {
    const team = [
        {
            name: "Zyanya Ramirez",
            role: "Manager",
            icon: GrUserManager,
            bio: "Con más de 2 años en la industria de la música, ha gestionado artistas de primer nivel.",
            social: {
                instagram: "https://www.instagram.com/zyanyaramirezm"
            },
        },
        {
            name: "Juan Manuel",
            role: "Multimedia Editor",
            icon: FaPhotoVideo,
            bio: "Creador y editor de videos especializado en videos musicales y edición de presentaciones en vivo.",
            social: {
                instagram: "https://www.instagram.com/zaldua_juann"
            },
        },
        {
            name: "Mario Cordova",
            role: "Photographer",
            icon: TiCameraOutline,
            bio: "Especialista en capturar los mejores momentos, resalta por su creatividad y atención al detalle.",
            social: {
                instagram: "https://www.instagram.com/merto_cordova",
            },
        },
        {
            name: "Edgar Navarro",
            role: "Developer",
            icon: PiDevices,
            bio: "Desarrollador full-stack apasionado por crear experiencias digitales inmersivas.",
            social: {
                linkedin: "https://www.linkedin.com/in/edgardnavarro/",
                github: "https://github.com/EdgarDNavarro",
                gmail: "edgardaniel2107np@gmail.com",
            },
        },
    ];
    return (
        <section
            id="team"
            className="py-20 bg-gradient-to-b to-gray-900 from-black"
        >
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-6 gradient-text font-orbitron">
                        ODIEL CREW
                    </h2>
                    <p className="text-gray-300">Conozca a las personas talentosas detrás de escena</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-900 rounded-xl overflow-hidden shadow-xl"
                        >
                            
                            <div className="flex justify-center items-center p-16 bg-gray-200">
                                <member.icon className="w-full h-full max-h-16 max-w-16 hover:scale-125 hover:text-blue-500 transition-all text-blue-600" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-1 ">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-gray-400 mb-3">
                                    {member.role}
                                </p>
                                <p className="text-gray-300 text-sm mb-4">
                                    {member.bio}
                                </p>
                                <div className="flex space-x-4">
                                    {member.social.instagram && (
                                        <motion.a
                                            whileHover={{ scale: 1.1 }}
                                            href={member.social.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-pink-500 transition-colors"
                                        >
                                            <FaInstagram size={20} />
                                        </motion.a>
                                    )}

                                    {member.social.linkedin && (
                                        <motion.a
                                            whileHover={{ scale: 1.1 }}
                                            href={member.social.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-blue-500 transition-colors"
                                        >
                                            <FaLinkedin size={20} />
                                        </motion.a>
                                    )}

                                    {/* {member.social?.twitter && (
                                        <motion.a
                                            whileHover={{ scale: 1.1 }}
                                            href={member.social?.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-blue-400 transition-colors"
                                        >
                                            <FaTwitter size={20} />
                                        </motion.a>
                                    )} */}

                                    {member.social.github && (
                                        <motion.a
                                            whileHover={{ scale: 1.1 }}
                                            href={member.social.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-indigo-600 transition-colors"
                                        >
                                            <FaGithub size={20} />
                                        </motion.a>
                                    )}

                                    {member.social.gmail && (
                                        <motion.a
                                            whileHover={{ scale: 1.1 }}
                                            href={'mailto:'+member.social.gmail}
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-red-700 transition-colors"
                                        >
                                            <SiGmail  size={20} />
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
