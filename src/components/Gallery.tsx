import BlurFade from "./ui/blur-fade";
import { motion } from 'framer-motion';

const images = Array.from({ length: 18 }, (_, i) => {
    const isLandscape = i % 2 === 0;
    const width = isLandscape ? 800 : 600;
    const height = isLandscape ? 600 : 800;
    return {
        url: `/dj/gallery${i+1}.jpg`,
        width,
        height
    }
});
export function Gallery() {
    return (
        <section id="gallery" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        {/* <section id="gallery" className="py-20 bg-black"> */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold mb-6 gradient-text text-center font-kode">Galeria</h2>
                <p className="text-gray-300">Un poco mas de quien soy.</p>
            </motion.div>
            <div className="columns-2 gap-4 sm:columns-3 max-w-6xl mx-auto px-4">

                {images.map((image, idx) => (
                    <BlurFade className="overflow-hidden mb-4" key={image.url} delay={0.25 + idx * 0.05} inView>
                        <img
                            className="size-full rounded-lg object-contain hover:scale-125 transition-transform"
                            src={image.url}
                            alt={`Random stock image ${idx + 1}`}
                        />
                    </BlurFade>
                ))}
            </div>
        </section>
    );
}
