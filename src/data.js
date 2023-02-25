import {URLDEPOSITOS} from './env';
let listaDepositos1 = [];
let listaDepositos2 = [];
async function fetchMovies404() {
  const response = await fetch(URLDEPOSITOS).then(response => response);
  const text = await response.text();
  const data = text.slice(47, -2);
  const json_data = JSON.parse(data);
  const data_map = json_data.table.rows; 
  listaDepositos1.push(data_map);
  for (var i = 0; i < listaDepositos1[0].length; i++) {
        listaDepositos2.push({});
        for(var j = 0; j < listaDepositos1[0][0].c.length; j++) {
          listaDepositos2[i] = {
            id:listaDepositos1[0][i].c[0].v,
            fecha:listaDepositos1[0][i].c[1].f,
            valor:listaDepositos1[0][i].c[2].v,
            concepto:listaDepositos1[0][i].c[3].v,
            soporte:listaDepositos1[0][i].c[5].v
          };
        }
    };

  };
  
fetchMovies404();



  export const DATAFEC = listaDepositos2;