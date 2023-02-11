import 'bootstrap/dist/css/bootstrap.css'
import './capa.css'
import '../../Styles/ButtonStyle.css'

import { Col, Container, Row } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'

import Mao from './images-carousel/mao.svg'
import Dedo from './images-carousel/dedo.svg'

import Flash from './images-carousel/flash.svg'
import IconPlay from '../../assets/svg/Play.svg'
import { ModalContato } from '../modalFrom/modal'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'


const icons = [
  {
    component: Dedo,
    class: 'dedo',
  },
  {
    component: Flash,
    class: 'flash',
  },
  {
    component: Mao,
    class: 'mao',
  },
]
export default function Capa() {
  const { t } = useTranslation()
  const ref = useRef(null)
  useEffect(() => {
    const eye = ref.current
    if (eye) {
      window.addEventListener('mousemove', (event) => {
        const x = -(window.innerWidth / 2 - event.pageX) / 65
        const y = -(window.innerHeight / 2 - event.pageY) / 65
        eye.style.transform = `rotate(-45deg) translateY(${y}px) translateX(${x}px)`
      })
    }
  })

  return (
    <>
      <Container fluid className="backgoundcaroussel">
        <Row>
          <Col className="centralized mt-5" sx={12}>
            <h1 className="cols-auto h1-md">
              {t('Info.capaTitle')} {t('Info.capaTitlebr')} <br></br>
              {t('Info.of')}{' '}
              <span id="textdecoration">{t('Info.capaTitleDecoration')}</span>
            </h1>
            <p className="cols-auto p-subtitle1 mt-5">
              {t('Info.capasubtitle')} {t('Info.capasubtitle2')}{' '}
              <span id="textdecoration">{t('Info.capasubtitle3')}</span>
              {t('samllText')}
            </p>

            <Row className="centralized margemtop">
              <Col sx={4} xs="auto" className="p-0">
                <ModalContato>
                  <button className="BtnPrimary contact">
                    {t('btn.btn_Contact')}
                  </button>
                </ModalContato>
                {icons.map((icon) => (
                  <img
                    key={icon.class}
                    src={icon.component}
                    alt={icon.class}
                    className={icon.class}
                  />
                ))}
                {/* <img className="eye" src={currentImage} /> */}
                <div className="eye">
                  <div className="eyeBall">
                    <div ref={ref} className="iris"></div>
                    {/* <div class="eyeLid"></div> */}
                    <div className="lid"></div>
                  </div>
                </div>
              </Col>
              <Col sx={8} xs="auto">
                <div>
                  <a
                    href="https://www.instagram.com/laneartdesign/?hl=en"
                    target="_blank"
                    className="row row-cols-auto"
                  >
                    <img className="IconPlay" src={IconPlay} alt="Icon" />
                    <motion.p
                      initial={{ x: 100 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 1, delay: 1 }}
                      className="textIcon"
                    >
                      {t('text.textPlayIcon')}
                      <br></br>
                      {t('text.textPlayIcon2')}
                    </motion.p>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}
