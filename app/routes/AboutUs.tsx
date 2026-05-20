import React from 'react'
import ContactUs from '~/components/ContactUs/ContactUs'
import styles from "./AboutUS.module.css"
import HText from '~/shared/HText'
type Props = {}

const AboutUs = (props: Props) => {
  return (
    <div className={styles.main_Container}>
      <div
      className="md:w-3/5 px-10 py-3">
          <HText>
              <span className="text-[#21496c]">ABOUT THIS APP</span>
          </HText>
          <p>
            This is app Was an Exercise of using api
            the api of <a href="https://restcountries.com" className='underline text-[#3ea5ff]'>rest countries</a> has been used
          </p>
      </div>
      <ContactUs />
    </div>
  )
}

export default AboutUs