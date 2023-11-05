import React from 'react';
import './AboutMe.css';
import AboutTitle from '../AboutTitle/AboutTitle';
import photo from '../../images/photo.jpg';

export default function AboutMe () {
  return (
    <section className='about-me page__about-me' id="about-me">
      <AboutTitle title="Студент" />
      <div className='about-me__box'>
        <div className='about-me__info'>
          <h3 className='about-me__name'>Руслан</h3>
          <p className='about-me__job'>Фронтенд-разработчик, 29 лет</p>
          <p className='about-me__text'>Я живу в городе Барнаул, закончил СибУПК, по специальности "Технолог общественного питания", так же закончил курсы, по специальности фитнес-тренер, последние несколько лет работал тренером в фитнес клубе. Решил сменить профессию и пойти учиться в Яндекс практикум, на курс "веб-разработчик".</p>
          <a className='about-me__link' href="https://github.com/Ruslanrus7" target="_blank">Github</a>
        </div>
        <img className='about-me__photo' src={photo} alt="фото студента"/>
      </div>
    </section>
  )

}
