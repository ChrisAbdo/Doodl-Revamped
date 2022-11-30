'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({
  id,
  imgUrl,
  title,
  description,
  link,
  imageUrl,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px] bg-white"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-black bg-white border-[2px] px-2 py-2 border-black absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.71)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <img src={imageUrl} alt="." className="w-1/2 h-1/2 object-contain" />
        </div>
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          {description}
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
        <a href={link} target="_blank" rel="noreferrer">
          <button
            type="button"
            className="mt-[24px] font-semibold sm:text-[18px] text-[14px] text-white uppercase border-[2px] border-white rounded-[24px] py-[8px] px-[16px]"
          >
            Learn More
          </button>
        </a>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
