import React from 'react'

import {card} from "../assets"
import styles,{layout} from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Find a better card deal <br className='sm:block hidden'/> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
      <Button styles="mt-10 rounded-lg"/>
      </div>

      <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]'/>
      <div className='absolute z-[3] -right-1/2 top-0 w-[40%] h-[40%] rounded-full white__gradient' />
      <div className='absolute z-[0] -right-1/2 bottom-0 w-[40%] h-[40%] rounded-full pink__gradient' />
      </div>

    </section>
  )
}

export default CardDeal