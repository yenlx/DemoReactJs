import React, { Component, Suspense } from 'react'
// const Subject = React.lazy(()=> import('../noredux/index'));
const Subject = React.lazy(()=>{
    return new Promise(resolve => setTimeout(resolve, 2 * 1000)).then(
        () => import('../noredux/index'))
      });

// class LazyLoad extends Component {
//   render() {
//     return (
//       <div>
//           <Suspense fallback={<div>.......Loading</div>}>
//                 <Subject/>
//           </Suspense>
//       </div>
//     )
//   }
// }
const LazyLoad =()=>(
    <div>
          <Suspense fallback={<div><img src='image/loading.gif' alt='Loading'></img></div>}>
                 <Subject/>
         </Suspense>
    </div>
)
export default LazyLoad
