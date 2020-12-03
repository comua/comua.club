import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import logo from '../images/chonk.png'

import Layout from '../components/layout'
import SEO from '../components/seo'

import cx from './index.module.scss'

const IndexPage: React.FC = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = async (event) => {
    event.preventDefault()

    await setClicked(true)
    await setTimeout(null, 1000)
    window.location.href = 'https://www.soundcloud.com/comua'
    setTimeout(() => setClicked(false), 2500)
  }

  return (
    <Layout>
      <SEO title="Comua" />
      <AnimatePresence>
        {!clicked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <motion.div
              className={cx.home}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                transition: { repeat: Infinity, duration: 60, ease: 'easeInOut' },
              }}
              exit={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                transition: { repeat: Infinity, duration: 1, ease: 'easeInOut' },
              }}
            >
              <motion.a
                href="https://www.soundcloud.com/comua"
                onClick={(event) => handleClick(event)}
                animate={{ scale: 1 }}
                exit={{ scale: 5, transition: { duration: 1 } }}
              >
                <motion.div
                  className={cx.home__link}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 1, transition: { duration: 0.2 } }}
                >
                  <motion.img
                    src={logo}
                    className={cx.home__logo}
                    alt="chonk"
                    animate={{
                      transform: ['rotate(0deg)', 'rotate(360deg)'],
                      transition: { repeat: Infinity, duration: 20, ease: 'linear' },
                    }}
                    exit={{
                      transform: ['rotate(0deg)', 'rotate(360deg)'],
                      transition: { repeat: Infinity, duration: 0.33, ease: 'linear' },
                    }}
                  />
                </motion.div>
              </motion.a>
              <p>
                Are you feeling <code>chonky</code>?
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}

export default IndexPage
