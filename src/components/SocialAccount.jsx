import { SocialAccount as SA } from "../utils/constants";

function SocialAccount() {
  return (
    <ul className="fh5co-social-icons">
      {Object.entries(SA).map(([key, { url, icon }]) => {
        return (
          <li key={key}>
            <a href={url}>
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialAccount;
