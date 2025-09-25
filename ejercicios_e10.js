const partidos = [
{
  juego: 1,
  LosToros: 0,
  SanFernando: 1
},
{
  juego: 2,
  LosToros: 6,
  SanFernando: 5
},
{
  juego: 3,
  LosToros: 5,
  SanFernando:3
},
{
  juego: 4,
  LosToros: 6,
  SanFernando: 7
},
{
  juego: 5,
  LosToros: 4,
  SanFernando: 7
},
{
  juego: 6,
  LosToros: 7,
  SanFernando: 5
},
{
  juego: 7,
  LosToros: 10,
  SanFernando: 7
}
];

const numPartidos = partidos.length;

for (let i = 0; i < numPartidos; i++){
  let p = partidos.shift();
  // RESULTADO DEL PARTIDO
  console.log(`Resultado del partido ${p.juego}: 
  Los Toros ${p.LosToros} - San Fernando ${p.SanFernando}`);
};



partidos.forEach ((partido) => {
  let p = partidos.shift();
   // RESULTADO DEL PARTIDO
  console.log(`Resultado del partido ${p.juego}: 
  Los Toros ${p.LosToros} - San Fernando ${p.SanFernando}`);
});



// ELIMINACION DEL PRIMER PARTIDO
const p1 = partidos.shift();
// RESULTADO DEL PARTIDO
  console.log(`Resultado del partido ${p1.juego}: 
  Los Toros ${p1.LosToros} - San Fernando ${p1.SanFernando}`);


  const p2 = partidos.shift(); 
  // RESULTADO DEL PARTIDO
  console.log(`Resultado del partido ${p2.juego}: 
  Los Toros ${p2.LosToros} - San Fernando ${p2.SanFernando}`);


  const p3 = partidos.shift();
  // RESULTADO DEL PARTIDO
  console.log(`Resultado del partido ${p3.juego}: 
  Los Toros ${p3.LosToros} - San Fernando ${p3.SanFernando}`);


  const p4 = partidos.shift();
  // RESULTADO DEL PARTIDO
  console.log(`Resultado del partido ${p4.juego}: 
  Los Toros ${p4.LosToros} - San Fernando ${p4.SanFernando}`);


  const p5 = partidos.shift();
  // RESULTADO DEL PARTIDO
  console.log(`Resultado del partido ${p5.juego}: 
  Los Toros ${p5.LosToros} - San Fernando ${p5.SanFernando}`);


  const p6 = partidos.shift();
// RESULTADO DEL PARTIDO
  console.log(`Resultado del partido ${p6.juego}: 
  Los Toros ${p6.LosToros} - San Fernando ${p6.SanFernando}`);


  const p7 = partidos.shift();
// RESULTADO DEL PARTIDO
  console.log(`Resultado del partido ${p7.juego}: 
  Los Toros ${p7.LosToros} - San Fernando ${p7.SanFernando}`);

