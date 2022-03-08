import React from 'react';



export function InfoTitulo() {
  return (
        <>
    <h1 className="h1-md"> Desenvolvimento e <br></br>Design de <br></br><span id= "textdecoration">Apps</span></h1>
    </>
  );
}

export function InfoSubTitulo() {
  return (
        <>
    <p className="p-subtitle">Mostre a melhor <br></br> vitrine para sua <br></br><span id= "textdecoration">empresa!</span></p>
    </>
  );
}


export function Infotext1() {
  return (
        <>
  <h1 className="textbold">Oferecemos<span id= "textdecoration"> flexibilidade</span>, além de<br></br>varias formas de<br></br>pagamento!</h1> 
    </>
  );
}


export function Carosseltitulo1() {
  return (
        <>
    <h1 className="textbold">Designs<span id= "textdecoration"> customizados</span>!</h1>
    </>
  );
}


export function CarosselSubTitulo1() {
  return (
        <>
    <p className="p-subtitle">Nosso time possui uma experencia acreditada no desenvolvimento de apps com a melhor interfase de usuário (UI) e a mais fácil navegação (UX)</p>
    </>
  );
}



export function Carosseltitulo2() {
  return (
        <>
    <h1 className="textbold">Design web <span id= "textdecoration">moderno </span>para
sua empresa!</h1>
    </>
  );
}




export function CarosselSubTitulo2() {
  return (
        <>
    <p className="p-subtitle">Nosso time é experto em React, Flutter e Javascript, que são as ferramentas através das quais podemos modernizar seu web site.</p>
    </>
  );
}


export function ContactTitle() {
  return (
        <>
    <h1 className="textbold"> Digitalize e <span id= "textdecoration">modernize</span> sua empresa!</h1>
    </>
  );
}

export function ContactSubtitle() {
  return (
        <>
    <p className="p-subtitle centralized">Consulte-nos sem compromisso</p>
    </>
  );
}



export function Avaliation() {
  return (
        <>
    <h1 className="textbold mt-5 centralized" > Veja as <span id= "textdecoration"> avaliações </span> de nossos clientes!</h1>
    </>
  );
}

///props for grid-----------------

function Descricao ({titulo,subtitulo}) {
	return (
	<>
		<p className="p-title ">{titulo}</p>
		<p className="p-subtitle centralized ">{subtitulo}</p>	
		</>
 	)
 }




export function Entrega() {
  return (
        <>
    <Descricao  titulo="Prazo de entrega" subtitulo="Os melhores prazos para você que não quer esperar tanto pelo seu produto"/>
    </>
  );
}

export function DescontoCripto() {
  return (
        <>
    <Descricao  titulo="Melhores descontos" subtitulo="Aceitamos pagamentos em cripto"/>
    </>
  );
}

export function Parcelamento() {
  return (
        <>
    <Descricao  titulo="12x sem juros" subtitulo="Parcele suas compras em todos seus cartões"/>
    </>
  );
}


export function Desconto() {
  return (
        <>
    <Descricao  titulo="Quer algum desconto?" subtitulo="5% OFF, nas compras à vista ou no débito"/>
    </>
  );
}