import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faPlusCircle,
  faEnvelope,
  faPhoneAlt,
  faUserNinja,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faEnvelope, faPhoneAlt, faUserNinja, faLinkedin, faInstagram, faTwitterSquare, faLock);
};

export default Icons;