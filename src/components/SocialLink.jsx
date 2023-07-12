import { navSocialIcons } from '../common/data'
const SocialLink = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {navSocialIcons.map((link) => {
        const { id, url, icon } = link
        return (
          <li key={id}>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className={itemClass}
            >
              <i className={icon}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default SocialLink
