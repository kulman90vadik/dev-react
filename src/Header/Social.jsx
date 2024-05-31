



const Social = () => {
  return (
    <ul className="social" aria-label="in the form of icons with contacts">
      <li className="social__item">
        <a
          className="social__link social__link--github"
          href="https://github.com/kulman90vadik"
          rel="noreferrer"
          aria-label="Go to page in github"
        >
          <i className="fa fa-github-square" aria-hidden="true"></i>
        </a>
      </li>
      {/* <li className="social__item">
                    <a
                        className="social__link social__link--whatsapp"
                        href="https://wa.me/+4917641167896?text=Hello."
                        rel="noreferrer"
                        aria-label="Ability to call on whatsapp"
                    >
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                </li> */}
      <li className="social__item">
        <a
          className="social__link social__link--post"
          href="mailto:v_kuhlmann@outlook.com"
          rel="noreferrer"
          aria-label="write a letter"
        >
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  );
};

export default Social;
