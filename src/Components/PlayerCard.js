import React from 'react';
import ProgressBar from './ProgressBar';
import ButtonCapacity from './ButtonCapacity';
import { useSelector } from 'react-redux';


const PlayerCard = (props) => {
    let color = '#0A323C'
  const playertour = useSelector(state => state.fight.players[props.player.id].tour);
  if (playertour == false) {
      color = '#5B5A56'
      
      }
      
      return (

          <div className='col-lg-4 col-md-4 col-sm-11'>
            

                  <div className="card-body text-center rounded-3 p-2 " style={{ backgroundColor: color }}>
                    <img src={props.player.image} alt="" />
                    <h5 className="card-title">{props.player.name}</h5>
                    <ProgressBar pv={props.player.pv} pvMax={props.player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger'  />
                    <ProgressBar pv={props.player.mana} pvMax={props.player.manaMax} faType='fa-fire-alt' barName=' : mana ' />

                    <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                    <div className="row ">
                        <div >
                            {props.player.pv <= 0 ? (
                                <h3>MORT</h3> 
                                
                            ) : 
                        <>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col m-3'>
                             <ButtonCapacity spell={props.player.spellDMG1} idspell={1} spellname={'DMG LEGER'} id={props.player.id}/> 
                                </div>
                                <div className='col m-3'>
                             <ButtonCapacity spell={props.player.spellDMG2} idspell={2} spellname={'DMG LOUR'} id={props.player.id}/> 
                                </div>
                            </div>
                                <div className='row'>

                                <div className='col m-3'>
                             <ButtonCapacity spellHeal={props.player.spellHeal} idspell={3} spellname={'HEAL'} id={props.player.id}/> 
                                </div>
                                <div className='col m-3'>
                             <ButtonCapacity spellMana={props.player.spellRegenMana} idspell={4} spellname={'REGEN'} id={props.player.id}/> 
                            </div>
                                </div>
                        </div>
                        </>
                             }
                            

                        </div>
                    </div >
                </div >

            </div >
       
    )
}

export default PlayerCard





// class PlayerCard extends React.Component {
   

//     render() {
//         return (
//             <div key={props.player.id} className="col-sm-3 card center" id={`joueur${this.props.player.id}`}>

//                 <div className="card-body text-center">
//                     <h5 className="card-title">{this.props.player.name}</h5>
//                     <ProgressBar pv={this.props.player.pv} pvMax={this.props.player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
//                     <ProgressBar pv={this.props.player.mana} pvMax={this.props.player.manaMax} faType='fa-fire-alt' barName=' : mana ' />

//                     <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
//                     <div className="row ">
//                         <div >
//                             <ButtonCapacity player={this.props.player} />
//                             <ButtonCapacity player={this.props.player} />
//                             <ButtonCapacity player={this.props.player} />
//                             <ButtonCapacity player={this.props.player} />

//                         </div>
//                     </div >
//                 </div >

//             </div >
//         )
//     }
// }


// export default PlayerCard;