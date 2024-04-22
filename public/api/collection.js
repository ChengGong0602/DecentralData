import imgAPI from '~/public/images/imgAPI';
import link from '~/public/text/link';

export const collection = [
  {
    img: imgAPI.photosL[5],
    avatar: imgAPI.logos[15],
    logo: imgAPI.logos[1],
    title: 'Lorem ipsum',
    name: 'John Doe',
    color: 'secondary',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. ',
    count: '20',
    items: [imgAPI.photosL[11], imgAPI.photosL[9], imgAPI.photosL[4], imgAPI.photosP[7]],
    verifiedUser: true,
    verifiedItem: true,
    href: link.productDetail
  },
  {
    img: imgAPI.photosL[30],
    avatar: imgAPI.avatar[4],
    logo: imgAPI.logos[2],
    color: 'primary',
    title: 'Lorem ipsum',
    name: 'John Doe',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. ',
    count: '20',
    items: [imgAPI.photosL[32], imgAPI.photosS[1], imgAPI.photosP[27], imgAPI.photosS[5]],
    verifiedUser: true,
    verifiedItem: true,
    href: link.productDetail
  },
  {
    img: imgAPI.photosP[19],
    avatar: imgAPI.logos[10],
    logo: imgAPI.logos[5],
    title: 'Lorem ipsum',
    name: 'John Doe',
    color: 'accent',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. ',
    count: '20',
    items: [imgAPI.photosP[23], imgAPI.photosP[24], imgAPI.photosP[19], imgAPI.photosL[29]],
    verifiedUser: true,
    verifiedItem: true,
    href: link.productDetail
  },
  {
    img: imgAPI.photosL[7],
    avatar: imgAPI.avatar[7],
    logo: imgAPI.logos[10],
    title: 'Lorem ipsum',
    name: 'John Doe',
    color: 'primary',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. ',
    count: '20',
    items: [imgAPI.photosL[8], imgAPI.photosP[10], imgAPI.photosL[1], imgAPI.photosL[7]],
    verifiedUser: true,
    verifiedItem: true,
    href: link.productDetail
  },
];

export default collection;
