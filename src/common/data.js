import tour1 from '../images/tour-1.jpeg'
import tour2 from '../images/tour-2.jpeg'
import tour3 from '../images/tour-3.jpeg'
import tour4 from '../images/tour-4.jpeg'

export const navLinks = [
  { id: 1, url: '#home', text: 'Home1' },
  { id: 2, url: '#about', text: 'About' },
  { id: 3, url: '#services', text: 'Services' },
  { id: 4, url: '#tours', text: 'Tours' },
]
export const navSocialIcons = [
  { id: 1, url: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, url: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, url: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia1.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia2.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia3.',
  },
]

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'China',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'august 26th, 2020',
    title: 'best of java',
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'China',
    duration: 6,
    cost: 2500,
  },
  {
    id: 3,
    image: tour3,
    date: 'august 26th, 2020',
    title: 'explore hong kong',
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'China',
    duration: 6,
    cost: 1800,
  },
  {
    id: 4,
    image: tour4,
    date: 'august 26th, 2020',
    title: 'kenya highlights',
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'China',
    duration: 6,
    cost: 1500,
  },
]
