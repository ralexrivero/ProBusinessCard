import profilePic from '../../img/ronald_rivero_profile_hd.jpg';

const Info = () => {
  return (
    <header>
      <img className="img-responsive profilePic" src={profilePic} alt="Ronald Rivero profile photo" />
      <div className="header-body f-wcc">
        <h1>Ronald Rivero</h1>
        <span className="txt-c personal-title">FullStack & Machine Learning Developer</span>
        <small><a href="https://www.ralex.io/" className="link link-website">ralex.io</a></small>
        <div className="f-rsec">
        <a href="mailto:ralexrivero@gmail.com" className="info-btn btn-email" target="_blank"><i className="bi bi-envelope"></i>email</a>
        <a href="https://www.linkedin.com/in/ronald-rivero/" className="info-btn btn-linkedin" target="_blank"><i className="bi bi-linkedin"></i>linkedin</a>
        <a aria-label="Chat on WhatsApp" href="https://wa.me/59893776930" className="info-btn btn-whatsapp" target="_blank"><i className="bi bi-whatsapp"></i></a>
        </div>
      </div>
    </header>
  )
}

export default Info;
