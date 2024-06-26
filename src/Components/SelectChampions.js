import { useEffect, useState } from 'react';
import Game from './Game';
import Aatrox from '../img/aatrox.gif';
import Ahri from '../img/ahri.gif';
import Fiddlesticks from '../img/fiddlesticks.gif';
import Kayle from '../img/kayle.gif';
import Kayn from '../img/kayn.gif';
import Kled from '../img/kled.gif';
import Maokai from '../img/maokai.gif';
import Pantheon from '../img/pantheon.gif';
import Rammus from '../img/rammus.gif';
import Rek_sai from '../img/rek_sai.gif';
import Shen from '../img/shen.gif';
import Singed from '../img/singed.gif';
import Talon from '../img/talon.gif';
import Yi from '../img/yi.gif';
import Yone from '../img/yone.gif';
import Zac from '../img/zac.gif';
import Zed from '../img/zed.gif';
import Ziggs from '../img/ziggs.gif';
import { useDispatch, useSelector } from 'react-redux';
import { saveChampSelect } from '../features/fight/fightSlice'

const SelectChampions = () => {
    const dispatch = useDispatch()
    const [champData, setChampData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [img, setImg] = useState(Aatrox);
    const [namechamp, setNamechamp] = useState('Aatrox');
    const [selectedChamps, setSelectedChamps] = useState([]);
    const [verifSelect, setVerifSelect] = useState(false);
    const tableauImage = {
        Aatrox, Ahri, Fiddlesticks, Kayle, Kayn, Kled, Maokai, Pantheon,
        Rammus, Rek_sai, Shen, Singed, Talon, Yi, Yone, Zac, Zed, Ziggs
    };
    let color = '#0A323C'
    const champions = [
        { value: 'Aatrox', label: 'Aatrox' },
        { value: 'Ahri', label: 'Ahri' },
        { value: 'Kayle', label: 'Kayle' },
        { value: 'Kayn', label: 'Kayn' },
        { value: 'Kled', label: 'Kled' },
        { value: 'Maokai', label: 'Maokai' },
        { value: 'Pantheon', label: 'Pantheon' },
        { value: 'Rammus', label: 'Rammus' },
        { value: 'Shen', label: 'Shen' },
        { value: 'Singed', label: 'Singed' },
        { value: 'Talon', label: 'Talon' },
        { value: 'Yi', label: 'Maître Yi' },
        { value: 'Yone', label: 'Yone' },
        { value: 'Zac', label: 'Zac' },
        { value: 'Zed', label: 'Zed' },
        { value: 'Ziggs', label: 'Ziggs' }
    ];

    async function fetchChampion(namechamp) {
        setLoading(true);
        const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/14.11.1/data/fr_FR/champion/${namechamp}.json`);
        const data = await response.json();
        setChampData(data.data[namechamp]);
        setLoading(false);
    }
    const removeHTMLTags = (str) => {
        return str.replace(/<[^>]*>/g, '');
    };
    const affichageChamp = (e) => {
        const selectedChamp = e.target.value;
        setNamechamp(selectedChamp);
        setImg(tableauImage[selectedChamp]);
    }

    function championseleted() {
        fetchChampion(namechamp);

        setSelectedChamps((prevSelectedChamps) => {
            const updatedSelectedChamps = [...prevSelectedChamps, champData];

            if (updatedSelectedChamps.length === 3) {
                dispatch(saveChampSelect(updatedSelectedChamps));
                setVerifSelect(true);
            }

            return updatedSelectedChamps;
        });

        alert('Tu as choisi ' + namechamp);
    }



    useEffect(() => {
        fetchChampion(namechamp);
    }, [namechamp]);

    return (
        verifSelect ? (
            <Game />
        ) : (
            <div className='container-fluid bgselect text-white'>
                <h1 className='text-center'>Choisit 3 Champions</h1>
                <div className='select text-center row '>
                    <select onChange={affichageChamp} style={{ width: '200px' }}>
                        {champions.map((champion) => (
                            <option key={champion.value} value={champion.value}>{champion.label}</option>
                        ))}
                    </select>
                    <button style={{ background: '#0a323cc7', color: '#c89a3a' }} className=' col-2 ms-5 btn' onClick={championseleted}>Choisir</button>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <h1 className='text-center'>{champData?.name}</h1>

                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-4 col-sm-10">
                            <img className='' src={img} alt={namechamp} />
                        </div>
                    </div>
                    <div className='p-3 rounded-2 animationhover' >
                        <p>{champData?.lore}</p>
                    </div>
                    <div className='row justify-content-center '>
                        <h2 className='text-center text-white'>Spells</h2>
                        {champData?.spells.map((spell, i) => {
                            return (
                                <div className="m-3 animationhover rounded-3 p-3" style={{ width: '18rem' }}>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{spell.name}</h5>
                                        <p className="card-text fw-semibold">{removeHTMLTags(spell.description)}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    )
}


export default SelectChampions;
