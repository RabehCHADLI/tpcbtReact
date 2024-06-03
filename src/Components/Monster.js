import { useDispatch, useSelector } from 'react-redux';
import ProgressBar from './ProgressBar';
import React from 'react';
import imgMonster from "../img/nash.gif";

const Monster = () => {
  const dispatch = useDispatch();

  const monster = useSelector(state => state.fight.monster[0]);

  return (
    monster.pv <= 0 ? (
      <h3 className='text-success'>Le monstre est mort</h3>
    ) : (
      <section>
                  <div className='d-flex justify-content-center mb-2'>
                        <img src={monster.image} alt='monster' />
                  </div>
                  
                  
                <ProgressBar pv={monster.pv} pvMax={monster.pv} bgType='bg-danger' faType='fa-heart' barName=' : pv'  />
           
      </section>
    )
  );
};

export default Monster;







// class Monster extends React.Component {

  

//   render() {
//     return (
//       <section>
//         <div className="container">
//           <div className="row">
//             <div className="card-monstre col-sm-12">
//               <div id="monsterCard">
//                 <div className="text-center">
//                   <div className="row">
//                     <div className="col-sm-2 offset-sm-3">
//                       <span className="badge badge-danger ml-2 " id="degatSpanMonster"></span>
//                       <img className="img-fluid" src="http://res.publicdomainfiles.com/pdf_view/67/13925387417373.png" alt='monster' />
//                     </div>

//                     <div id="comboOnMonster" className="col-sm-6">

//                     </div>
//                   </div>
//                 </div>
//                 <ProgressBar pv='800' pvMax='800' bgType='bg-danger' faType='fa-heart' barName=' : pv' />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section >
//     )
//   }
// }

// export default Monster;