import React from 'react';
import './AboutProject.css';
import AboutTitle from '../AboutTitle/AboutTitle';

export default function AboutProject () {
  return (
    <section className='about-project page___about-project' id="project">
      <AboutTitle title="О проекте" />
      <div className='about-diplom'>
        <div className='about-diplom__box'>
          <h3 className='about-diplom__title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-diplom__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-diplom__box'>
          <h3 className='about-diplom__title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-diplom__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about-deadlines'>
        <div className='about-deadlines__back'>
          <p className='about-deadlines__back-chart'>1 неделя</p>
          <p className='about-deadlines__text'>Back-end</p>
        </div>
        <div className='about-deadlines__front'>
          <p className='about-deadlines__front-chart'>4 недели</p>
          <p className='about-deadlines__text'>Front-end</p>
        </div>
      </div>
    </section>
  )
}
