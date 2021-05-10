import XMLParser from 'react-xml-parser'

const XMLZika = `<?xml version="1.0" encoding="UTF-8"?>
<Unscramble>
	<fase1>
		<Conteudo1>
			<Dica>Outra doença transmitida pelo Aedes, além da Febre Amarela, Dengue e Chikungunya.</Dica>
			<PalavraAssoc>ZIKA</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Principal sintoma da doença Zika:</Dica>
			<PalavraAssoc>FEBRE</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Primata, cujo o vírus foi originalmente isolado em seu organismo.</Dica>
			<PalavraAssoc>MACACO</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Principal relação entre a Dengue, Febre Amarela, Chikungunya e Zika Vírus.</Dica>
			<PalavraAssoc>VETOR</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>A Zika é uma doença viral transmitida pelo mosquito __________.</Dica>
			<PalavraAssoc>AEDES</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Segunda espécie de mosquito que, assim como o 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪, transmite Zika vírus.</Dica>
			<PalavraAssoc>CULEX</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Possível forma de transmissão de Zika relacionada intimidade entre casais.</Dica>
			<PalavraAssoc>SEXUAL</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>O vírus Zika só é transmitido pela _______ do mosquito infectado.</Dica>
			<PalavraAssoc>PICADA</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Causa da microcefalia e guillian barré.</Dica>
			<PalavraAssoc>VÍRUS</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Floresta ________ cujo nome originou a denominação da doença Zika.</Dica>
			<PalavraAssoc>ZIKA</PalavraAssoc>
		</Conteudo1>
	</fase1>
	<fase2>
		<Conteudo2>
			<Dica>O 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪 é o ______ do Zika Vírus, pois o mosquito carrega o vírus sem ser afetado, transmitindo-o através de suas picadas.</Dica>
			<PalavraAssoc>VETOR</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Vírus que inicialmente foi isolado na Uganda.</Dica>
			<PalavraAssoc>ZIKA</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Produto usado na pele, que modifica o cheiro dela e confunde a transmissora do vírus, existem apresentações em creme, loção ou aerossol.</Dica>
			<PalavraAssoc>REPELENTE</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Forma de tratamento recomendada que consiste na ingestão de líquidos para combater os sintomas do Zika.</Dica>
			<PalavraAssoc>HIDRATAÇÃO</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Sintoma comum da doença Zika associado ao cansaço e desânimo.</Dica>
			<PalavraAssoc>FADIGA</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>O vírus Zika é transmitido pela ________ do mosquito 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪.</Dica>
			<PalavraAssoc>FÊMEA</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>País da África onde o ZIKV foi isolado pela primeira vez.</Dica>
			<PalavraAssoc>UGANDA</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Microorganismo responsável pelos sintomas causados pela doença Zika.</Dica>
			<PalavraAssoc>VÍRUS</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Área do corpo com altos riscos de contaminação por Zika vírus pode causar graves danos principalmente em bebês durante a gestação relacionado a outras doenças neurológicas.</Dica>
			<PalavraAssoc>CÉREBRO</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Medicamento que nunca pode ser tomado por conta própria quando há suspeita do Zika.</Dica>
			<PalavraAssoc>ASPIRINA</PalavraAssoc>
		</Conteudo2>
	</fase2>
	<fase3>
		<Conteudo3>
			<Dica> _________ : um quadro de vermelhidão e inchaço nos olhos, mas em que não ocorre secreção, e é um dos sintomas do Zika Vírus.</Dica>
			<PalavraAssoc>CONJUNTIVITE</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Estado brasileiro com primeiros surtos de microcefalia.</Dica>
			<PalavraAssoc>PERNAMBUCO</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Período da mulher de grande risco de desenvolvimento de microcefalia por partes do bebê.</Dica>
			<PalavraAssoc>GESTAÇÃO</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Principal sintoma do Guillain-Barré que acontece nos membros inferiores.</Dica>
			<PalavraAssoc>DORMÊNCIA</PalavraAssoc>
		</Conteudo3>	
		<Conteudo3>
			<Dica>Os horários de transmissão dO Zika costumam ser nas primeiras horas da manhã e nas últimas da tarde, devido aos hábitos do ___________ transmissor da doença.</Dica>
			<PalavraAssoc>MOSQUITO</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>É dada como recomendação do Ministério da Saúde para a população o uso de ________ para proteção individual.</Dica>
			<PalavraAssoc>REPELENTE</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Não existem medicamentos específicos contra o vírus, o tratamento clínico é feito de modo a aliviar os ________ da doença.</Dica>
			<PalavraAssoc>SINTOMAS</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>A transmissão do Zika se faz apenas pela ________ da fêmea do 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪 infectada com o vírus.</Dica>
			<PalavraAssoc>PICADA</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>A fêmea que transmite o vírus Zika, além de ser hematófaga, que se alimenta de sangue, pode também se alimentar com substâncias açucaradas, como o néctar e a seiva das plantas, assim como o mosquito macho.</Dica>
			<PalavraAssoc>FITÓFOGA</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>O  _______ é o mais indicado aos pacientes, pois evita complicações dos sintomas da doença.</Dica>
			<PalavraAssoc>REPOUSO</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Uso de substância química comum para o controle dos vetores do Zika.</Dica>
			<PalavraAssoc>INSETICIDA</PalavraAssoc>
		</Conteudo3>		
		
	</fase3>
	<fase4>
		<Conteudo4>
			<Dica>Malformação congênita, em que o cérebro não se desenvolve adequadamente.</Dica>
			<PalavraAssoc>MICROCEFALIA</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Agente causador do Zika vírus.</Dica>
			<PalavraAssoc>FLAVIVÍRUS</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Forma de transmissão de Zika vírus que consiste no contágio da doença pelo filho através da mãe.</Dica>
			<PalavraAssoc>PERINATAL</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Medicamento disponibilizado para os casos sintomáticos em relação ao vírus Zika</Dica>
			<PalavraAssoc>DIPIRONA</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Sintoma neurológico comum a Zika, que também é comum a Dengue e Chikungunya.</Dica>
			<PalavraAssoc>DOR DE CABEÇA</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Sintoma desencadeado pelo uso  de  ácido acetilsalicílico.</Dica>
			<PalavraAssoc>HEMORRAGIA</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Foi durante as grandes __________ que o mosquito transmissor surgiu no Brasil no século XVII.</Dica>
			<PalavraAssoc>NAVEGAÇÕES</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Medicamento disponibilizado para os casos sintomáticos em relação ao vírus Zika</Dica>
			<PalavraAssoc>PARACETAMOL</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Conscientizar a ___________. é a melhor maneira de nos prevenirmos contra a ZIKA,  assim como  das outras doenças causadas pelo mosquito 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪.</Dica>
			<PalavraAssoc>POPULAÇÃO</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Uma das recomendações do Ministério da Saúde para profissionais de saúde em relação ao Zika vírus é ficar alerta sobre os cuidados para evitar a _________ do mosquito 𝘈𝘦𝘥𝘦𝘴.</Dica>
			<PalavraAssoc>PROLIFERAÇÃO</PalavraAssoc>
		</Conteudo4>
	</fase4>
	<fase5>
		<Conteudo5>
			<Dica>O tratamento contra a doença do Zika vírus utilizando anti-__________ é totalmente sintomático, ou seja, o medicamento é utilizado apenas para o alívio dos sintomas, tais como dor de cabeça constante e dor de garganta. Esse tipo de tratamento é usado por não existir um tratamento específico para o Zika.</Dica>
			<PalavraAssoc>INFLAMATÓRIO</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Uma doença neurológica relacionada ao Zika vírus é conhecida como síndrome de __________ Barré.</Dica>
			<PalavraAssoc>GUILLAIN</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Possivelmente participantes da Copa das Confederações, ocorrida em meados de 2013, introduziu o _________ vírus no Brasil.</Dica>
			<PalavraAssoc>ZIKA</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Nome científico do mosquito transmissor do ZIKV.</Dica>
			<PalavraAssoc>𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Medicamento que contém _______ acetilsalicílico é contra-indicado em caso de suspeita de Zika por causar hemorragia.</Dica>
			<PalavraAssoc>ÁCIDO</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>O Instituto _________ Chagas encontrou vestígios do vírus no sangue, a partir de exames realizados em um bebê.</Dica>
			<PalavraAssoc>EVANDRO</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Manchas ____________ fazem parte dos sintomas que aparecem na pele em decorrência da contaminação pelo Zika vírus.</Dica>
			<PalavraAssoc>AVERMELHADAS</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>A dor nas ___________ é um sintoma do Zika que se assemelha muito a um sintoma típico da febre chikungunya porém de forma mais branda.</Dica>
			<PalavraAssoc>ARTICULAÇÕES</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>A perda de __________ faz parte dos sintomas clássicos de muitas doenças e também pode estar presente na infecção por Zika vírus.</Dica>
			<PalavraAssoc>APETITE</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>O ácido acetilsalicílico funciona no organismo como um anticoagulante  e o seu uso durante a doença poderia desencadear uma __________ e até levar à morte, logo não se deve ingerir esse tipo de remédio.</Dica>
			<PalavraAssoc>HEMORRAGIA</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Hábito de se alimentar de sangue praticado pelas fêmeas do mosquito transmissor do Zika vírus.</Dica>
			<PalavraAssoc>HEMATOFAGIA</PalavraAssoc>
		</Conteudo5>
	</fase5>
</Unscramble>
`

var xml = new XMLParser().parseFromString(XMLZika);

export function palavraZika(i, level) {
	const fase = 'fase' + level;
	const conteudo = 'Conteudo'+level
	var palavra = []
	palavra.push(xml.getElementsByTagName('Unscramble')[0].getElementsByTagName(fase)[0].getElementsByTagName(conteudo)[i].getElementsByTagName('PalavraAssoc')[0].value)
	palavra.push(xml.getElementsByTagName('Unscramble')[0].getElementsByTagName(fase)[0].getElementsByTagName(conteudo)[i].getElementsByTagName('Dica')[0].value)
	
	return palavra;
}