export {};
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { gql } from '@app/gql';
// import axios from 'redaxios';
//
// // import { useQuery } from '@apollo/client';
// import { useQuery } from 'urql';
// import Load from '../../Other/Load/Load';
// import Err from '../../Other/Error/Error';
// import s from './VideoPlayer.module.scss';
// import Nav from '../../Nav/Nav';
//
// const getVideo = gql(`
//   query getVideos($slug: [String!]) {
//     videos(where: { slug: $slug }) {
//       id
//       title
//       slug
//       cover {
//         img {
//           id
//           url
//         }
//       }
//       excerpt
//       #      tag {
//       #        tag
//       #      }
//       videoID
//     }
//   }
// `);
//
// type Video = {
//   title: string;
//   excerpt: string;
//   cover: { img: { id: string; url: string } };
//   // tag: [{ tag: { id: string; tag: string } }];
// };
//
// type VideoLink = {
//   url: string;
// };
//
// const VideoPlayer = (): JSX.Element => {
//   const router = useRouter();
//   const [video, setVideo] = useState<VideoLink[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [result] = useQuery({ query: getVideo, variables: { slug: router.query.slug } });
//   const { data, fetching, error } = result;
//
//   useEffect(() => {
//     const videoID = data?.videos?.[0]?.videoID;
//     if (videoID) {
//       axios.get(`https://tropicalt-google-video.glitch.me/${String(videoID)}`).then((res) => {
//         setVideo(
//           res?.data?.map((url: string) => ({
//             url,
//           }))
//         );
//       });
//       return;
//     }
//     setIsLoading(false);
//   }, [data?.videos]);
//
//   // const { data, error, loading } = useQuery(getVideo, {
//   //   variables: { slug: router.query.slug },
//   //   async onCompleted(data) {
//   //     const videoID = data?.videos?.[0]?.videoID;
//   //     if (videoID) {
//   //       const videoLink: { data: Array<string> } = await axios.get(
//   //         `https://tropicalt-google-video.glitch.me/${videoID}`
//   //       );
//   //       setVideo(
//   //         videoLink?.data?.map((url: string) => ({
//   //           url,
//   //         }))
//   //       );
//   //     }
//   //     setIsLoading(false);
//   //   },
//   // });
//
//   if (isLoading || fetching) return <Load />;
//   if (error || (!isLoading && !video.length)) return <Err />;
//
//   const videoData = data?.videos as Video[];
//   return (
//     <>
//       <Nav />
//       <h1 className={s.videoHeader}>{videoData[0].title}</h1>
//       <div className={s.videoContainer}>
//         <video className={s.videoPlayer} controls={true}>
//           <source src={video[0].url} type='video/mp4' />
//         </video>
//       </div>
//       <h2 className={s.videoDescription}>{videoData[0].excerpt}</h2>
//       {/*<ul className={s.videoTag}>*/}
//       {/*  <li>Tags:</li>*/}
//       {/*  {videoData[0].tag.map(({ tag: tag }) => (*/}
//       {/*    <li key={tag.id}>*/}
//       {/*      <a>{tag}</a>*/}
//       {/*    </li>*/}
//       {/*  ))}*/}
//       {/*</ul>*/}
//     </>
//   );
// };
// export default VideoPlayer;
