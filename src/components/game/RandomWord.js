import {palavraAedes} from '../content/XMLAedes'; 
import {palavraDengue} from '../content/XMLDengue'; 
import {palavraZika} from '../content/XMLZika'; 
import {palavraChikungunya} from '../content/XMLChikungunya'; 
import { palavraFebre } from '../content/XMLFebre'; 
function Sorteio(doenca, level) {
    var questoes =[]
    const matriz =
        [[8, 10, 10, 9, 12],
        [11, 11, 10, 9, 10],
        [9, 9, 9, 7, 8],
        [11, 11, 11, 9, 11],
        [10, 10, 11 ,10, 11]]
    const max = matriz[doenca][level-1]
    
    for (let i = 0; i < level; i++) {
        let sorteio = Math.floor(Math.random() * (max - i));
        if (questoes.includes(sorteio) === false)
            questoes.push(sorteio)
        else {
            i--;
        }
    }
    return questoes
}  
    
export function RandomWord(level, tema) { 
   
    var palavra = [2], indexQ = [], vet = [];
    if (tema === "Aedes") {
        let i = 0;    
        indexQ = Sorteio(1, level)
        while(i < level) {
            palavra = palavraAedes(indexQ[i], level);
            vet.push(palavra)
            i++;
        }
        
    }
    else if (tema === "Chikungunya") {
        let i = 0;    
        indexQ = Sorteio(2, level)
        while(i < level) {
            palavra = palavraChikungunya(indexQ[i], level);
            vet.push(palavra)
            i++;
        }
    }
    else if (tema === "Dengue"){
        let i = 0;    
        indexQ = Sorteio(3, level)
        while(i < level) {
            palavra = palavraDengue(indexQ[i], level);
            vet.push(palavra)
            i++;
        }
        
    }
    else if (tema === "Zika"){
       let i = 0;    
        indexQ = Sorteio(4, level)
        while(i < level) {
            palavra = palavraZika(indexQ[i], level);
            vet.push(palavra)
            i++;
        }
        
    }
    else if (tema === "FebreAmarela"){
        let i = 0;    
        indexQ = Sorteio(0, level)
        while(i < level) {
            palavra = palavraFebre(indexQ[i], level);
            vet.push(palavra)
            i++;
        }
        
    }  
    return vet
}