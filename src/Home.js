import React, { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';


function Home(props) {

  let preloaderRef = useRef();

  window.onload = () => {
    preloaderRef.current.classList.add('preloader--hide');
  };

  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x131314,
        color1: 0xffd4,
        color2: 0xb8fc,
        colorMode: "lerpGradient",
        birdSize: 0.80,
        wingSpan: 12.00,
        speedLimit: 3.00,
        separation: 32.00,
        alignment: 37.00,
        cohesion: 26.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <section className="home" ref={myRef}>
      <div className="home__inner">
        <h1 className="home-title">
          <span>Hi,</span>
          <span>I'm Vadim,</span>
          <span className="home-title__position" data-title="Front End Developer">Front End Developer</span>
        </h1>
      </div>

      {/* <div className="background">
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
        <div className="background__wrapper">
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="background__item">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-html5" aria-hidden="true"></i>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
            <i className="fa fa-css3" aria-hidden="true"></i>
            <i className="fa fa-print" aria-hidden="true"></i>
            <i className="fa fa-windows" aria-hidden="true"></i>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
            <i className="fa fa-apple" aria-hidden="true"></i>
          </div>

        </div>
      </div> */}

      {/* <div className='background'  > */}
      {/* VANTA.BIRDS({
        el: "#your-element-selector",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
      }) */}
      {/* </div> */}
     

      <div 
        id="preloader" 
        className="preloader"
        ref={preloaderRef}
        >
        <div className="preloader__loader">
          <div className="loadingio-spinner-bean-eater-za7vf1w5jfp">
            <div className="ldio-iokivgbuc8i">
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
 
export default Home;