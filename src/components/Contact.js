import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="p-8 m-4 text-center bg-gray-900 text-white rounded-lg shadow-lg">
            <motion.h2 
                className="font-bold text-5xl mb-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Contact Us
            </motion.h2>
            <p className="mb-8 text-lg text-gray-400">
                We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
            </p>
            <form className="space-y-4">
                <motion.input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    whileFocus={{ scale: 1.05 }}
                />
                <motion.input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    whileFocus={{ scale: 1.05 }}
                />
                <motion.textarea 
                    placeholder="Your Message" 
                    className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                    whileFocus={{ scale: 1.05 }}
                />
                <motion.button 
                    type="submit" 
                    className="bg-blue-600 p-3 rounded-md text-white font-semibold hover:bg-blue-500 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                >
                    Submit
                </motion.button>
            </form>
            <div className="mt-8 text-sm text-gray-500">
                <p>Contact us at: support@example.com</p>
                <p>Call us: +123 456 7890</p>
            </div>
        </div>
    );
};

export default Contact;
;