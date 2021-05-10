import XMLParser from 'react-xml-parser'

const XMLDengue = `<?xml version="1.0" encoding="UTF-8"?>
<Unscramble>
	<fase1>
		<Conteudo1>
			<Dica>Febre _______, caracteriza a fase febril.</Dica>
			<PalavraAssoc>BAIXA</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Nome pelo qual o vírus causador da Dengue ficou conhecido</Dica>
			<PalavraAssoc>DENV</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Fator climático favorável a proliferação do mosquito.</Dica>
			<PalavraAssoc>CHUVA</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Principal relação entre a Dengue, Febre Amarela, Chikungunya e Zika Vírus.</Dica>
			<PalavraAssoc>VETOR</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>A dengue é uma doença viral transmitida pelo mosquito __________.</Dica>
			<PalavraAssoc>AEDES</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Um dos sintomas da dengue é dor atrás dos _________.</Dica>
			<PalavraAssoc>OLHOS</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>É preciso colocar areia para evitar o acúmulo de ________ parada.</Dica>
			<PalavraAssoc>ÁGUA</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Coloca-se em vasos, pneus e outros objetos que acumulam água parada para evitar a proliferação do mosquito da dengue.</Dica>
			<PalavraAssoc>AREIA</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>A fêmea do mosquito da dengue bota _____.</Dica>
			<PalavraAssoc>OVOS</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Objeto utilizado em veículos que se descartado de maneira incorreta pode se tornar um criadouro para o mosquito.</Dica>
			<PalavraAssoc>PNEU</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Sorotipo viral da dengue mais comum no território brasileiro.</Dica>
			<PalavraAssoc>DENV1</PalavraAssoc>
		</Conteudo1>
	</fase1>
	<fase2>
		<Conteudo2>
			<Dica>Alimento fundamental para a fêmea do mosquito da dengue necessário para que seu ciclo de reprodução se complete.</Dica>
			<PalavraAssoc>SANGUE</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Dor abdominal intensa e contínua, vômitos persistentes, sangramento da mucosa, acúmulo de líquidos, são alguns do sinais de _______ na dengue.</Dica>
			<PalavraAssoc>ALARME</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Encontramos em água parada, antecede a fase adulta do mosquito da dengue.</Dica>
			<PalavraAssoc>LARVA</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Objeto que fica no fim do telhado por onde a água da chuva escorre e se não estiver limpo pode acumular água parada.</Dica>
			<PalavraAssoc>CALHA</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>O mosquito da dengue é adaptado ao ambiente _______.</Dica>
			<PalavraAssoc>URBANO</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>O vírus da dengue é transmitido pela ________ do mosquito 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪.</Dica>
			<PalavraAssoc>FÊMEA</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Ato que previne a proliferação do mosquito da dengue que é feito em caixas d’água.</Dica>
			<PalavraAssoc>TAMPAR</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>O vírus da dengue apresenta _______ sorotipos, em geral, denominados DENV-1, DENV-2, DENV-3 e DENV-4.</Dica>
			<PalavraAssoc>QUATRO</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Alguns pacientes podem apresentar sinais de alarme, evoluindo para forma grave da doença, como a dengue hemorrágica e a síndrome do _______.</Dica>
			<PalavraAssoc>CHOQUE</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Assim como a Febre Chikungunya, a Febre Amarela também possui sintomas muito parecidos com a ______.</Dica>
			<PalavraAssoc>DENGUE</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Objeto que armazena bebidas que consumimos que quando descartadas devem ser colocadas de cabeça para baixo.</Dica>
			<PalavraAssoc>GARRAFA</PalavraAssoc>
		</Conteudo2>
	</fase2>
	<fase3>
		<Conteudo3>
			<Dica>Remédio que não pode ser ingerido em caso de suspeita de dengue.</Dica>
			<PalavraAssoc>ASPIRINA</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Considerado um agravamento da dengue, ocorrendo um acúmulo de líquidos no interior do abdômen.</Dica>
			<PalavraAssoc>ASCISTE</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Região com maiores índices de incidência da dengue.</Dica>
			<PalavraAssoc>SUDESTE</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Substância utilizada para repelir insetos, seu uso é uma das medidas de proteção individual contra a Dengue.</Dica>
			<PalavraAssoc>REPELENTE</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Dores nas articulações do corpo é um ________ da dengue.</Dica>
			<PalavraAssoc>SINTOMA</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Os horários de transmissão da Dengue costumam ser nas primeiras horas da manhã e nas últimas da tarde, devido aos hábitos do ___________ transmissor da doença.</Dica>
			<PalavraAssoc>MOSQUITO</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>A dengue é considerada uma doença ________, pois seus sintomas desaparecem e em alguns casos retornam após dias.</Dica>
			<PalavraAssoc>BIFÁSICA</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>O vírus da dengue é transmitido pela fêmea do mosquito 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪) e pode causar tanto a manifestação __________ da doença quanto a forma considerada hemorrágica.</Dica>
			<PalavraAssoc>CLÁSSICA</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>A transmissão da dengue se faz apenas pela ________ da fêmea do 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪 infectada com o vírus.</Dica>
			<PalavraAssoc>PICADA</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Forma de tratamento recomendada que consiste na ingestão de líquidos para combater os sintomas da Dengue.</Dica>
			<PalavraAssoc>HIDRATAÇÃO</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>O  _______ é o mais indicado aos pacientes, pois evita complicações dos sintomas da doença.</Dica>
			<PalavraAssoc>REPOUSO</PalavraAssoc>
		</Conteudo3>
	</fase3>
	<fase4>
		<Conteudo4>
			<Dica>A Dengue __________ é a forma mais grave da enfermidade. Ela se desenvolve na segunda infecção do vírus e que se não tratada a tempo o paciente pode perder a consciência e chegar ao óbito por choque em poucas horas.</Dica>
			<PalavraAssoc>HEMORRÁGICA</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>O vírus se liga às células hospedeiras via _________ mediada por receptor.</Dica>
			<PalavraAssoc>ENDOCITOSE</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Uma das alternativas adotadas por pesquisadores no combate a doença é a implementação de mosquitos ____________, ou seja, mosquitos geneticamente modificados.</Dica>
			<PalavraAssoc>TRANSGÊNICOS</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Remédio que pode ser ingerido em caso de suspeita de dengue.</Dica>
			<PalavraAssoc>PARACETAMOL</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Filo do Reino animal pertencente ao mosquito da dengue.</Dica>
			<PalavraAssoc>ARTRÓPODES</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Foi durante as grandes __________ que o mosquito surgiu no Brasil no século XVII.</Dica>
			<PalavraAssoc>NAVEGAÇÕES</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>O agente causador da dengue é um vírus pertencente à família Flaviviridae, do gênero ________.</Dica>
			<PalavraAssoc>FLAVIVÍRUS</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Para as gestantes é necessária maior vigilância quando se contrai a dengue, pois para ela, há riscos de abortos ________.</Dica>
			<PalavraAssoc>ESPONTÂNEOS</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Família o qual vírus causador da doença pertence.</Dica>
			<PalavraAssoc>FLAVIVIRIDAE</PalavraAssoc>
		</Conteudo4>
	</fase4>
	<fase5>
		<Conteudo5>
			<Dica>Assintomático é o termo usado  quando o __________ contrai o vírus,  porém  não apresenta os sintomas.</Dica>
			<PalavraAssoc>PACIENTE</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Nome popular dado a forma clássica da dengue, caracterizada por febre de início súbito, dores de cabeça, musculares, nos ossos e Popularmente, a forma clássica da dengue, caracterizada por febre de início súbito, dores de cabeça, musculares, nos ossos e articulações, é conhecida como febre _______ ossos.</Dica>
			<PalavraAssoc>QUEBRA</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Outro vetor transmissor da dengue no Sudeste Asiático é o 𝘈𝘦𝘥𝘦𝘴 _______.</Dica>
			<PalavraAssoc>ALBOPICTUS</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Nome científico do mosquito da dengue É 𝘈𝘦𝘥𝘦𝘴 _____________.</Dica>
			<PalavraAssoc>𝘢𝘦𝘨𝘺𝘱𝘵𝘪</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Pacientes com Dengue devem evitar medicamentos à base de __________ acetilsalicílico. Esses medicamentos têm efeito anticoagulante e podem causar sangramentos.</Dica>
			<PalavraAssoc>ÁCIDO</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>A dengue em um número considerável de casos se comporta como uma doença assintomática pois nem todos que são ____________  desenvolvem os sintomas.</Dica>
			<PalavraAssoc>INFECTADOS</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>A água _________ é um produto de limpeza que pode ser colocado nos recipientes que acumulam água parada.</Dica>
			<PalavraAssoc>SANITÁRIA</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Primeira manifestação da dengue que tem início abrupto.</Dica>
			<PalavraAssoc>FEBRE ALTA</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>O tratamento contra a Dengue é totalmente sintomático, no qual um medicamento anti-__________ é utilizado apenas para o alívio dos sintomas. Esse tipo de tratamento é usado por não existir um tratamento específico para a Dengue.</Dica>
			<PalavraAssoc>INFLAMATÓRIO</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>A dengue se comporta como uma doença  assintomática  pois nem todos que são infectados desenvolvem ____________  da doença</Dica>
			<PalavraAssoc>SINTOMAS</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>O ___________ é um agravamento da dengue.</Dica>
			<PalavraAssoc>SANGRAMENTO</PalavraAssoc>
		</Conteudo5>
	</fase5>
</Unscramble>`

var xml = new XMLParser().parseFromString(XMLDengue);
export function palavraDengue(i, level) {
	const fase = 'fase' + level;
	const conteudo = 'Conteudo'+level
	var palavra = []
	palavra.push(xml.getElementsByTagName('Unscramble')[0].getElementsByTagName(fase)[0].getElementsByTagName(conteudo)[i].getElementsByTagName('PalavraAssoc')[0].value)
	palavra.push(xml.getElementsByTagName('Unscramble')[0].getElementsByTagName(fase)[0].getElementsByTagName(conteudo)[i].getElementsByTagName('Dica')[0].value)
	
	return palavra;
}



