import { useRef } from "react";

function Home() {

  let preloaderRef = useRef();

  window.onload = () => {
    preloaderRef.current.classList.add('preloader--hide');
  };
  
  return (
    <section className="home">
      <div className="home__inner">
        <h1 className="home-title">
          <span>Hi,</span>
          <span>I'm Vadim,</span>
          <span className="home-title__position" data-title="Front End Developer">Front End Developer</span>
        </h1>
      </div>

      <div className="background">
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
      </div>

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