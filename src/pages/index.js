import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
           Elève ingénieur en génie logiciel à la reherche d'un stage PFE.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience Professionnelle</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Stage en Confledis Paris </h3>
              <div className="subheading mb-3">Développeur Web </div>
              <p>
               Réalisation d'une plateforme  de gestion de chaines de restaurants en version web et mobile.
            
              </p>
              <p>
               Environnement Technique : Symfony, Angular, docker, mdb, gtlab, jira
              </p>
              

            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">15 Juillet 2020 - 25 octobre 200</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Stage en Think Thank SARL buisness Solutions </h3>
              <div className="subheading mb-3">Développeur Web</div>
              <p>
               Amélioration d'une plateforme de test Qualité (PTS-QA)
             
            
              </p>
              <p>
              Environnement technique : JEE, Angular, Rest...
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Juillet 2019 -Septembre 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Stage en Bonne Gouvernanace de l'informatique (BGI)</h3>
              <div className="subheading mb-3">Développeur web et mobile </div>
              <p>
            Réalisation d'une solution de saisie portable de relève 
             
            
              </p>
              <p>
              Environnement technique : Android, JEE, bootstrap, jQuery, SQlite, MySQlWorkbunch
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Février 2018 - Juin 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Stage en Bonne Gouvernanace de l'informatique (BGI)</h3>
              <div className="subheading mb-3">Développeur Mobile</div>
              <p>
           Réalisation d'une application de soutien sanitaire et de détection de symptome
             
            
              </p>
              <p>
              Environnement technique : Android, JEE, SQlite, MySQlWorkbunch
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Juillet 2017, Septembre 2017 </span>
            </div>
      
        </div>
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Stage dans la société de transport de tunis</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>
          Maintenance de matériel informatique, Configuration réseau...
             
            
              </p>
             
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Juin 2016, Juillet 2016</span>
            </div>
          </div>
        </div>

      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">L'Institu Suoérieur de linformatiqur (ISI)</h3>
              <div className="subheading mb-3">Diplome National d'ingénieur en génie logiciel</div>
              <div>Computer Science - Web Development Track</div>
              <p>GPA: 3.23</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2018 - 2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">L'Institu Suoérieur de linformatiqur (ISI)</h3>
              <div className="subheading mb-3">Licence fondamentale en Science Informatique </div>
              <p>GPA: 3.56</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2015- 2018</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Formations &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
             Applied AI with DeepLearning
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
            Advanced Machine Learning and Signal Processing
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
            Adbance dData Dcience 
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
            Fundamentals of Scalable Data Science 
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
            Algoorithme Toolbox
            </li>
           
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
