import React from 'react'
import ContactUs from '../feedback/contact-us'
import LandingLogo from './landing-logo'
import { Router, Route, IndexRoute } from 'react-router'
import { Parallax } from 'react-parallax'


export default () => {
  return (
    <div>
      <div className="flying-block">
        <a href="mailto:hello@unicorndev.ru">Write us</a>
      </div>
      <Parallax
        strength={ 400 }
        bgImage="https://images.unsplash.com/photo-1443926818681-717d074a57af?dpr=2&fit=crop&fm=jpg&h=675&ixlib=rb-0.3.5&q=50&w=1300">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
              <LandingLogo/>
              <h2 className="header col s12 mega-strong white-text">unicorndev</h2>
              <h4 className="header col s12 light white-text">Dedicated team of super professionals to keep your startup at the cutting edge</h4>
            </div>
          </div>
        </div>
      </Parallax>

      <div className="section no-pad-bot no-mar-bot">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <h4 className="center">Marketing</h4>
              <p>The validation of your ideas. We learn market, define target audience, measure demand. We can create a business strategy based on consumer trends. Design of your product we describe according to real needs. While product is developed Unicorn marketing team build a cool customer support and system of communication. After launching we drive traffic and work it effectively. Also we can help you with different part of marketing-mix. </p>
            </div>
            <div className="col s12 m6">
              <h4 className="center">Engineering</h4>
              <p>The realization of your ideas. We build a product for the web and a mobile app. Full-cycle Unicorn development team provides high quality and maintainable software. The process of development is transparent. You will get access to our project managment software. We can be alone team in your project, enter into your project group or can provide IT outsourcing.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <h4 className="center">Desing</h4>
              <p>The design of your ideas. Design is a packaging of your product. We create memorable, beautiful design that advocates for the needs of the user. Unicorn design team collect user stories, works through prototypes, get feedbacks and makes it better. Iterative design is the best approach. Its our approach.</p>
            </div>
            <div className="col s12 m6">
              <h4 className="center">Consulting</h4>
              <p>The development of your ideas. Also we can evaluate of your business-model in terms of development, implementation and potential demands. We lead workshops with your team to refine your business-model. We are ready to share our knowledges and experience with your team, teach them and increase their skills in engineering, design, UX, marketing.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <h4 className="center">Backend</h4>
              <p>Create services using Scala (with Akka, Play, Finch), in modern functional paradigm. It works stable in real-time and users get wow-experience.</p>
              <p>Services are scalable with increasing traffic, without comprising developers productivity and delivery speed.</p>
              <p>We use DDD approach, CQRS / ES and Microservices to fast adapt the product to new business requirements. </p>
            </div>
            <div className="col s12 m6">
              <h4 className="center">Frontend</h4>
              <p>We have exceptional experience creating cool architecture on Angular.js, Sass, Gulp, Jade (on directives). </p>
              <p>New projects are to be built using top-notch solutions like React with Redux, ES6, Webpack, FRP, koa.js and radiant future.</p>
              <p>Sites are loading quickly, well indexed by search engines and consistently work on smartphones.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <h4 className="center">Infrastructure</h4>
              <p>We provide infrastructure management through Saltstack — a reliable solution for jet releases of business needs. Consul tool is to efficiently manage clusters and save time for the implementation of changes. Docker, Mesos, Marathon help us save on hardware. Minimize the bugs to reach the ELK (ElasticSearch, Logstash, Kibana).</p>
            </div>
            <div className="col s12 m6">
              <h4 className="center">UX</h4>
              <p>Friendly interface hides a deep elaboration in strategy, prototyping and testing. Our team handles the interaction design, information architecture, and user research for the product. We design digital products by focusing on human goals. We perform customer journey and user story mapping, constantly updating our knowledge to bring clarity to complex situations. </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h4 className="center">Product management</h4>
              <p>We are not interested in spherical horses in a vacuum. Technically cool product has no value, if the consumer passed it. Maximize customer value while minimizing waste and implementation costs (MVP, Lean startup). We develop products according the real needs of the audience (Customer development + UX);  create a system of communication and service processes, test demand (SEM, SMM). </p>
            </div>
          </div>
        </div>
      </div>


      <div className="section section-team">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h5 className="center">Team</h5>
              <p>Our strongest feature is <em>the team</em>. We know how to work together, and have already developed a <em>highest culture of collaboration</em>. IT and marketing understands each other, so IT is <em>in sync with actual business needs</em>. Code doesn’t have value for us if it doesn’t reach business goal.</p>
              <p>Our team is an added value for your project. And costs is an investment.</p>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6 l4 center">
              <div className="team-avatar"><img className="circle" src="images/team/mitya.jpg"/></div>
              <p>Mitya, lead, backend</p>
            </div>

            <div className="col s12 m6 l4 center">
              <div className="team-avatar"><img className="circle" src="images/team/alexey.jpg"/></div>
              <p>Alexey, backend</p>
            </div>

            <div className="clearfix hide-on-large-only hide-on-small-only"></div>

            <div className="col s12 m6 l4 center">
              <div className="team-avatar"><img className="circle" src="images/team/dima.jpg"/></div>
              <p>Dmitry, frontend</p>
            </div>

            <div className="clearfix hide-on-med-only hide-on-small-only"></div>

            <div className="col s12 m6 l4 center">
              <div className="team-avatar"><img className="circle" src="images/team/matveev.jpg"/></div>
              <p>Andrey, frontend</p>
            </div>

            <div className="clearfix hide-on-large-only hide-on-small-only"></div>

            <div className="col s12 m6 l4 center">
              <div className="team-avatar"><img className="circle" src="images/team/fl.jpg"/></div>
              <p>Denis, frontend</p>
            </div>
            <div className="col s12 m6 l4 center">
              <div className="team-avatar"><img className="circle" src="images/team/sokolov.jpg"/></div>
              <p>Evgeny Sokolov, UX</p>
            </div>

            <div className="clearfix hide-on-large-only hide-on-small-only"></div>
            <div className="clearfix hide-on-med-only hide-on-small-only"></div>

            <div className="col s12 m6 l4 center">
              <div className="team-avatar"><img className="circle" src="images/team/krasilova.jpg"/></div>
              <p>Natalia, product manager / marketer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col s12 center">
              <h5>Some projects</h5>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6 github-project">
              <h5><a href="http://passenger.me">Passenger.me</a></h5>
              <p>Shopping from USA for 5 days.
                <br/>
                <em className="grey-text text-darken-5">(Released, obsolete)</em>
              </p>
            </div>
            <div className="col s12 m6 github-project">
              <h5><a href="http://mirari.ru/">Mirari.ru</a></h5>
              <p>Publishing platform In progress</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section grey lighten-5">
        <div className="container">
          <div className="row">
            <div className="col s12 center">
              <h5>Some opensource we made to boost our code</h5>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6 github-project">
              <h5><a href="https://github.com/unicorndevru/unicorn-ng-datepicker">unicorn-ng-datepicker</a></h5>
              <p>unicorn-ng-datepicker</p>
            </div>
            <div className="col s12 m6 github-project">
              <h5><a href="https://github.com/unicorndevru/stateful">stateful</a></h5>
              <p>CQRS helpers for Akka</p>
            </div>
            <div className="col s12 m6 github-project">
              <h5><a href="https://github.com/unicorndevru/expander">expander</a></h5>
              <p>The way to organize API with Scala / Play</p>
            </div>
            <div className="col s12 m6 github-project">
              <h5><a href="https://github.com/unicorndevru/auth">auth</a></h5>
              <p>auth</p>
            </div>
            <div className="col s12 m6 github-project">
              <h5><a href="https://github.com/unicorndevru/unicorn-ng-reflex">unicorn-ng-reflex</a></h5>
              <p>A module to relief pain with async forms, buttons, etc.</p>
            </div>
            <div className="col s12 m6 github-project">
              <h5><a href="https://github.com/unicorndevru/unicorn-ng-kickstart">unicorn-ng-kickstart</a></h5>
              <p>unicorn-ng-kickstart</p>
            </div>
            <div className="col s12 m6 github-project">
              <h5><a href="https://github.com/unicorndevru/unicorn-ng-istates">unicorn-ng-istates</a></h5>
              <p>unicorn-ng-istates</p>
            </div>
            <div className="col s12 m6 github-project">
              <h5><a href="https://github.com/unicorndevru/unicorn-ng-l10n">unicorn-ng-l10n</a></h5>
              <p>unicorn-ng-l10n</p>
            </div>
          </div>
        </div>
      </div>

      <ContactUs/>
    </div>
  )
}
