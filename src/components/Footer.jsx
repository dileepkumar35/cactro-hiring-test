import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';

const Footer = () => {
  return (
    <footer className='bg-black-100 py-8 mt-20' style={{ backgroundColor: '#100d25' }}>
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className='flex flex-col md:flex-row justify-between items-center gap-6'
        >
          {/* Contact Info */}
          <div className='flex flex-col items-center md:items-start gap-2'>
            <h3 className='text-white text-[20px] font-bold'>Dileep Kumar M R</h3>
            <div className='flex flex-col gap-2 text-secondary text-[14px]'>
              <a href="tel:+918618806877" className='hover:text-white transition-colors'>
                📞 +91 8618806877
              </a>
              <a href="mailto:dileepmr35@gmail.com" className='hover:text-white transition-colors'>
                ✉️ dileepmr35@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className='flex flex-col items-center gap-3'>
            <h4 className='text-white text-[16px] font-semibold'>Connect with me</h4>
            <div className='flex gap-4'>
              <a
                href="https://linkedin.com/in/dileepkumarmr"
                target="_blank"
                rel="noopener noreferrer"
                className='w-10 h-10 rounded-full bg-tertiary flex items-center justify-center hover:bg-white transition-colors'
                style={{ backgroundColor: '#151030' }}
              >
                <span className='text-2xl'>💼</span>
              </a>
              <a
                href="https://github.com/dileepkumar35"
                target="_blank"
                rel="noopener noreferrer"
                className='w-10 h-10 rounded-full bg-tertiary flex items-center justify-center hover:bg-white transition-colors'
                style={{ backgroundColor: '#151030' }}
              >
                <span className='text-2xl'>📦</span>
              </a>
            </div>
          </div>

          {/* Certifications */}
          <div className='flex flex-col items-center md:items-end gap-2'>
            <h4 className='text-white text-[16px] font-semibold'>Certifications</h4>
            <div className='text-secondary text-[12px] text-center md:text-right'>
              <p>AWS Cloud • MySQL • Git & GitHub</p>
              <p>REST APIs • JavaScript ES6</p>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={fadeIn("up", "spring", 0.75, 0.75)}
          className='mt-8 pt-6 border-t border-secondary/20 text-center'
        >
          <p className='text-secondary text-[14px]'>
            © {new Date().getFullYear()} Dileep Kumar M R. Built with React, Three.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
