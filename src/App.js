import React from 'react';
import data from './data';
import LazyLoad from 'react-lazyload';

const Spinner = () => (
  <div className="post loading">
    <svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#49d1e0"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="rotate(275.845 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
);

const Post = ({ id, title, body }) => (
   <div className="post">
     <LazyLoad
     once={true}
     placeholder={<Spinner/>}>
     <div className="post-img">
       <img src={`https://picsum.photos/id/${id}/500/500`} alt="Cargando" />
     </div>
     </LazyLoad> 
   </div>
);

const App = () => (
 <div className="App">
   <div className="post-container">
     {data.map(post => (
       <LazyLoad
       key={post.id}
       height={100}
       offset={[-100, 100]}
       placeholder={<Spinner/>}>
         <Post key={post.id} {...post} />
       </LazyLoad>
      ))}
   </div>
 </div>
);
  


export default App;
