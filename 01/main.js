let vector = [];

raudy.onclick = () => {
  if ( typeof elemento1 === "undefined" )
    return;
    
  elemento1.append( elemento2 );
  vector = [];

  vector.push( elemento1 );
  elemento1.remove();
  
}

ondblclick = () => {
  document.querySelector( "body" ).append( vector[0] );

  console.log( vector );
}