import React, { useState, useEffect } from 'react';

function MiComponente() {
  const [datos, setDatos] = useState<any>(null);

  async function obtenerDatos() {
    const respuesta = await fetch('https://docs.google.com/spreadsheets/d/1mMyAMyGXj24nKALJY5iFej57GfqJ57_gcZvVjUwo7Jg/gviz/tq?tqx=out:json&gid=0');
    const datos = await respuesta.text();
    const data = datos.slice(47, -2);
    const json_data = JSON.parse(data);
    const data_map = json_data.table.rows;
    setDatos(data_map);
  }

  useEffect(() => {
    obtenerDatos();
  }, []);
  setInterval(() => {
    obtenerDatos();
  }, 60000);


  console.log(datos)

  return (
    <div>
      {datos ? (
        <div>
          {datos.map((dato: any) => (
            <div key={dato.c[0].v}>
                {dato.c[0].v}
                {dato.c[1].f}
                {dato.c[2].v}
                {dato.c[3].v}
                {dato.c[4].v}
                
            </div>
          ))}
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default MiComponente;
