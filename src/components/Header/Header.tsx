import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <header className="shadow-gray shadow-md bg-white px-2 py-4">
            <div className="container text-2xl">
                <a
                    href="https://www.linkedin.com/in/egisto-parronchi-neto-881367161/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon className="mr-2" icon={faLinkedin} />
                </a>
                <a
                    href="https://github.com/ticosep"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </header>
    );
};

export default Header;
