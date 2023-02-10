'use client';
import React from 'react';
import { DocumentType, gql } from '@app/gql';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import s from './NewNav.module.scss';

const icons: Record<string, Record<string, JSX.Element>> = {
  home: {
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24'>
        <path d='M4 21V9L12 3L20 9V21H14V14H10V21ZM6 19H8V12H16V19H18V10L12 5.5L6 10ZM12 12.25Z' />{' '}
      </svg>
    ),
    active: (
      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24'>
        <path d='M4 21V9L12 3L20 9V21H14V14H10V21Z' />
      </svg>
    ),
  },
  about: {
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'>
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path d='M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z' />
      </svg>
    ),
    active: (
      <svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'>
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z' />
      </svg>
    ),
  },
  blog: {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        enableBackground='new 0 0 24 24'
        height='24'
        viewBox='0 0 24 24'
        width='24'>
        <g>
          <rect fill='none' height='24' width='24' />
          <g>
            <path d='M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z' />
          </g>
          <path d='M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z' />
        </g>
      </svg>
    ),
    active: (
      <svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'>
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z' />
      </svg>
    ),
  },
  resume: {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        enableBackground='new 0 0 20 20'
        height='20'
        viewBox='0 0 20 20'
        width='20'>
        <g>
          <rect fill='none' height='20' width='20' x='0' />
        </g>
        <g>
          <path d='M16.67,4.33L15.33,3L14,4.33L12.67,3l-1.33,1.33L10,3L8.67,4.33L7.33,3L6,4.33L4.67,3L3.33,4.33L2,3v12.5 C2,16.33,2.67,17,3.5,17h13c0.83,0,1.5-0.67,1.5-1.5V3L16.67,4.33z M16.5,9.5h-13v-3h13V9.5z M10.75,11h5.75v1.5h-5.75V11z M3.5,11 h5.75v4.5H3.5V11z M10.75,15.5V14h5.75v1.5H10.75z' />
        </g>
      </svg>
    ),
    active: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        enableBackground='new 0 0 20 20'
        height='20'
        viewBox='0 0 20 20'
        width='20'>
        <g>
          <rect fill='none' height='20' width='20' x='0' />
        </g>
        <g>
          <path d='M16.67,4.33L15.33,3L14,4.33L12.67,3l-1.33,1.33L10,3L8.67,4.33L7.33,3L6,4.33L4.67,3L3.33,4.33L2,3v12.5 C2,16.33,2.67,17,3.5,17h13c0.83,0,1.5-0.67,1.5-1.5V3L16.67,4.33z M16.5,9.5h-13v-3h13V9.5z M10.75,11h5.75v1.5h-5.75V11z M3.5,11 h5.75v4.5H3.5V11z M10.75,15.5V14h5.75v1.5H10.75z' />
        </g>
      </svg>
    ),
  },
  contact: {
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'>
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zm0 16H2V5h20v14zM21 6h-7v5h7V6zm-1 2l-2.5 1.75L15 8V7l2.5 1.75L20 7v1zM9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.59c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12v-1.41zM5.48 16c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1H5.48z' />
      </svg>
    ),
    active: (
      <svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'>
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M21 8V7l-3 2-3-2v1l3 2 3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm8-6h-8V6h8v6z' />
      </svg>
    ),
  },
};

export const NewNavigationFragment = gql(`
  fragment NewNavigationFragment on Query {
    navLink {
      data {
        attributes {
          Link {
            id
            Name
            URL
          }
        }
      }
    }
  }
`);

const NewNav = ({ navLink }: DocumentType<typeof NewNavigationFragment>): JSX.Element => {
  const navData = navLink?.data?.attributes?.Link;
  const path = usePathname();

  return (
    <nav className={s.nav}>
      <ul>
        {navData &&
          navData?.map((nav) => {
            const isActive = String(path) == String(nav?.URL);
            const { icon, active } = icons[String(nav?.Name.toLowerCase())];
            return (
              <li key={nav?.id} className={isActive ? s.navActiveLink : s.navLink}>
                <Link key={nav?.id} href={String(nav?.URL)}>
                  {isActive ? active : icon}
                  <span>{nav?.Name}</span>
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

NewNav.displayName = 'Nav';

NewNav.fragments = {
  NewNavigationFragment,
};

export default NewNav;
