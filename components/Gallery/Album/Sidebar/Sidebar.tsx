import React, { useRef, useState, useEffect, MutableRefObject, SetStateAction, Dispatch } from 'react';
import Link from 'next/link';
import ThumbButton from './ThumbButton';
import s from '../Album.module.scss';

function useOnClickOutside(onClickOutside: EventListener): MutableRefObject<HTMLElement | null> {
  const insideRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleBodyClick(event: MouseEvent) {
      if (!insideRef?.current?.contains(event.target as Node)) {
        onClickOutside(event as Event);
      }
    }

    document.body.addEventListener('click', handleBodyClick, true);
    return function cleanup() {
      document.body.removeEventListener('click', handleBodyClick, true);
    };
  }, [insideRef, onClickOutside]);
  return insideRef;
}

function useSidebar(defaultOpen: boolean) {
  const [open, setOpen] = useState(defaultOpen);
  const sidebarRef = useOnClickOutside((event) => {
    if (open) {
      event.preventDefault();
      setOpen(false);
    }
  });

  function toggleOpen(): SetStateAction<void> {
    setOpen(!open);
  }

  return {
    sidebarRef,
    open,
    toggleOpen,
  };
}

type Photo = {
  original: string;
  thumbnail: string;
};

type Sidebar = {
  photos: Photo[];
  activeItemID: Photo | undefined;
  setActiveItem: Dispatch<SetStateAction<Photo | undefined>>;
  title?: string;
  excerpt?: string;
};

const Sidebar = ({ photos, setActiveItem, title, excerpt }: Sidebar): JSX.Element => {
  const { sidebarRef, open, toggleOpen } = useSidebar(true);

  return (
    <section className={open ? s.open : s.closed} ref={sidebarRef}>
      <button className={s.toggle} onClick={toggleOpen}>
        <span />
      </button>
      <div className={s.sidebar}>
        <Link href='/albums'>
          <a>{'Back to TropicalT >>>'}</a>
        </Link>
        <div className={s.sidebarHeader}>
          <h2>{title}</h2>
          <p>{excerpt}</p>
          <ul>
            <li>
              <a href='https://www.facebook.com'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
                  <path
                    className='facebook'
                    d='M27.99993,5.32469v21.3509a1.32468,1.32468,0,0,1-1.32457,1.32461H20.5595V18.7061h3.11971l.46705-3.6221H20.5595V12.77145c0-1.0487.2912-1.76335,1.79509-1.76335l1.918-.00088V7.76765a25.66255,25.66255,0,0,0-2.79492-.14271c-2.76537,0-4.6586,1.688-4.6586,4.78787V15.084H13.69145v3.6221H16.8191v9.2941H5.32455a1.32452,1.32452,0,0,1-1.32462-1.32461V5.32469A1.32442,1.32442,0,0,1,5.32455,4.00007H26.67536A1.32457,1.32457,0,0,1,27.99993,5.32469Z'
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
                  <path
                    className='instagram'
                    d='M16,6.16216c3.20414,0,3.58366.01222,4.849.06995a6.64012,6.64012,0,0,1,2.22824.4132,3.97394,3.97394,0,0,1,2.27743,2.27743,6.64009,6.64009,0,0,1,.4132,2.22822c.05773,1.26538.06995,1.6449.06995,4.849s-.01222,3.58366-.06995,4.849a6.64012,6.64012,0,0,1-.4132,2.22824,3.97394,3.97394,0,0,1-2.27743,2.27743,6.64012,6.64012,0,0,1-2.22824.4132c-1.26518.05773-1.64466.06995-4.849.06995s-3.58384-.01222-4.849-.06995a6.64012,6.64012,0,0,1-2.22824-.4132,3.97394,3.97394,0,0,1-2.27743-2.27743,6.64009,6.64009,0,0,1-.4132-2.22822c-.05773-1.26538-.06995-1.6449-.06995-4.849s.01222-3.58366.06995-4.849a6.64012,6.64012,0,0,1,.4132-2.22824A3.97394,3.97394,0,0,1,8.92274,6.64531a6.64009,6.64009,0,0,1,2.22822-.4132c1.26538-.05773,1.6449-.06995,4.849-.06995M16,4c-3.259,0-3.66766.0138-4.94758.0722A8.80773,8.80773,0,0,0,8.13953,4.63,6.136,6.136,0,0,0,4.63,8.13953a8.80773,8.80773,0,0,0-.55779,2.91289C4.0138,12.33234,4,12.741,4,16s.0138,3.66766.0722,4.94758A8.80773,8.80773,0,0,0,4.63,23.86047,6.136,6.136,0,0,0,8.13953,27.37a8.80773,8.80773,0,0,0,2.91289.55779C12.33234,27.98621,12.741,28,16,28s3.66766-.01379,4.94758-.0722A8.80773,8.80773,0,0,0,23.86047,27.37,6.136,6.136,0,0,0,27.37,23.86047a8.80773,8.80773,0,0,0,.55779-2.91289C27.9862,19.66766,28,19.259,28,16s-.0138-3.66766-.0722-4.94758A8.80773,8.80773,0,0,0,27.37,8.13953,6.136,6.136,0,0,0,23.86047,4.63a8.80773,8.80773,0,0,0-2.91289-.55779C19.66766,4.0138,19.259,4,16,4Zm0,5.83784A6.16216,6.16216,0,1,0,22.16216,16,6.16216,6.16216,0,0,0,16,9.83784ZM16,20a4,4,0,1,1,4-4A4,4,0,0,1,16,20ZM22.40563,8.15437a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,22.40563,8.15437Z'
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
                  <path
                    className='linkedin'
                    d='M26.22362,4H5.77133A1.75177,1.75177,0,0,0,3.99985,5.72983V26.26822A1.75294,1.75294,0,0,0,5.77133,28H26.22362a1.75631,1.75631,0,0,0,1.77653-1.73177V5.72983A1.75514,1.75514,0,0,0,26.22362,4ZM11.118,24.45115H7.55811V12.99771H11.118ZM9.33887,11.432a2.06388,2.06388,0,1,1,2.06281-2.06453A2.06444,2.06444,0,0,1,9.33887,11.432Zm15.112,13.01918h-3.5573V18.88134c0-1.32878-.02441-3.03719-1.84977-3.03719-1.85237,0-2.136,1.447-2.136,2.941v5.666H13.35058V12.99771h3.41471v1.56487h.04738a3.73973,3.73973,0,0,1,3.368-1.84993c3.60464,0,4.27018,2.37223,4.27018,5.456Z'
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        {photos.map((photo) => (
          <ThumbButton
            key={photo.original}
            src={photo.thumbnail}
            setActive={() => {
              setActiveItem(photo);
            }}
            id={photo.original}
          />
        ))}
        <div className={s.sidebarFooter}>
          <p>{'© Thomas Fiala'}</p>
          <p>Made by Thomas Fiala with a little help from Education.</p>
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
