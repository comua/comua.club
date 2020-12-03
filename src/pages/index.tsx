import React from 'react'
import { motion } from 'framer-motion'

import logo from '../images/chonk.png'

import Layout from '../components/layout'
import SEO from '../components/seo'

import cx from './index.module.scss'

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Comua" />
    <div className={cx.home}>
      <a href="https://www.soundcloud.com/comua">
        <motion.div
          className={cx.home__link}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          whileTap={{ scale: 1, transition: { duration: 0.2 } }}
        >
          <img src={logo} className={cx.home__logo} alt="chonk" />
        </motion.div>
      </a>
      <p>
        Are you feeling <code>chonky</code>?
      </p>
    </div>
  </Layout>
)

export default IndexPage
