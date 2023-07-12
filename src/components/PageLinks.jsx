import { navLinks } from '../common/data'
import PageLink from './PageLink'
const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {navLinks.map((nav) => {
        return <PageLink key={nav.id} link={nav} itemClass="nav-link" />
      })}
    </ul>
  )
}
export default PageLinks
