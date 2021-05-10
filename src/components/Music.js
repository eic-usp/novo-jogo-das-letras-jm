import React,{useState, useEffect} from 'react';

import musica from "../../public/bensound-buddy.mp3"

import comSomBranco from '../../public/com-som-branco.png'
import semSomBranco from '../../public/sem-som-branco.png'

import comSomPreto from '../../public/com-som-preto.png'
import semSomPreto from '../../public/sem-som-preto.png'

const useAudio = musica => {
  const [audio] = useState(new Audio(musica));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Music = ({mobile, game}) => {
  const [playing, toggle] = useAudio(musica);
  var comSom = comSomBranco, semSom = semSomBranco
  if (mobile && game){
    comSom = comSomPreto
    semSom = semSomPreto
  }
  return (
      <a onClick={toggle}>{playing ? <img src={comSom} style={{padding:"0.5em"}} alt="som"/> : <img src={semSom} style={{padding:"0.5em"}} alt="som"/>}</a>
  );
};

export default Music;