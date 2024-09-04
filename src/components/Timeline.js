import React from 'react';
import { motion } from 'framer-motion';
import Heading from './Heading';

const timelineData = [
  {
    date: 'June 2024',
    title: 'Full Stack Developer at Powr of you Ltd.',
    description: 'Currently Worked on building responsive and interactive web applications. In my role, I work with React.js, AWS, Python, and other tools and technologies to develop both company products and client web applications.'
  },
  {
    date: 'November 2021',
    title: 'SDE-I at Hyscaler',
    description: 'Worked on web applications across diverse domains such as Healthcare, Ecommerce, Finance, and Entertainment. As a Software Development Engineer (SDE), I facilitated effective client communication and utilized my expertise in JavaScript, React.js, Next.js, TailwindCSS, Express.js, MySQL, MongoDB, and various other tools and technologies.'
  },
];

const TimelineItem = ({ date, title, description }) => (
  <motion.div
    className="relative border-l border-gray-300 pl-4 mb-8 mt-2"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full"></div>
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <span className="text-sm text-gray-500">{date}</span>
    <p className="mt-1 text-gray-600">{description}</p>
  </motion.div>
);

const Timeline = () => (
  <section className="pb-8 bg-gray-50">
    {timelineData.map((item, index) => (
      <TimelineItem
        key={index}
        date={item.date}
        title={item.title}
        description={item.description}
      />
    ))}
  </section>
);

export default Timeline;
