"use client"; 

import Image from 'next/image';

export default function Home() {
  const estadoEquipo = [
    { name: 'Activo', src: '/icons/activo.svg' },
    { name: 'Inactivo', src: '/icons/inactivo.svg' },
  ];

  const estadoPiloto = [
    { name: 'Activo', src: '/icons/cascoactivo.svg' },
    { name: 'Inactivo', src: '/icons/cascoinactivo.svg' },
  ];

  const variados = [
    { name: 'Oro', src: '/icons/estrella.svg' },
    { name: 'Plata', src: '/icons/plata.svg' },
    { name: 'Bronce', src: '/icons/bronce.svg' },
    { name: 'Bandera', src: '/icons/bandera.svg' },
  ];

  const pilotos = [
    { name: 'Alonso', src: '/icons/alo.svg' },
    { name: 'Button', src: '/icons/but.svg' },
    { name: 'Hakkinen', src: '/icons/hak.svg' },
    { name: 'Hamilton', src: '/icons/ham.svg' },
    { name: 'Hill', src: '/icons/hil.svg' },
    { name: 'Mansell', src: '/icons/man.svg' },
    { name: 'Prost', src: '/icons/pro.svg' },
    { name: 'Raikkonen', src: '/icons/rai.svg' },
    { name: 'Rosberg', src: '/icons/ros.svg' },
    { name: 'Schumacher', src: '/icons/sch.svg' },
    { name: 'Senna', src: '/icons/sen.svg' },
    { name: 'Verstappen', src: '/icons/ver.svg' },
    { name: 'Vettel', src: '/icons/vet.svg' },
    { name: 'Villeneuve', src: '/icons/vil.svg' },
  ];

  const equipos = [
    { name: 'Alpine', src: '/icons/alpine.svg' },
    { name: 'Benetton', src: '/icons/benetton.svg' },
    { name: 'Ferrari', src: '/icons/ferrari.svg' },
    { name: 'Jordan', src: '/icons/jordan.svg' },
    { name: 'Lotus', src: '/icons/lotus.svg' },
    { name: 'Mclaren', src: '/icons/mclaren.svg' },
    { name: 'Mercedes', src: '/icons/mercedes.svg' },
    { name: 'Red Bull', src: '/icons/redbull.svg' },
    { name: 'Renault', src: '/icons/renault.svg' },
    { name: 'Sauber', src: '/icons/sauber.svg' },
    { name: 'Williams', src: '/icons/williams.svg' },
  ];

  const tracks = [
    { name: 'Catalunya', src: '/icons/catalunya.svg' },
    { name: 'Monte Carlo', src: '/icons/montecarlo.svg' },
    { name: 'Monza', src: '/icons/monza.svg' },
    { name: 'Silverstone', src: '/icons/silverstone.svg' },
    { name: 'Spa', src: '/icons/spa.svg' },
    { name: 'Suzuka', src: '/icons/suzuka.svg' },
  ];

  return (
    <div className="container mx-auto p-6 lg:px-24">
      <header>
        <h1 className="text-3xl font-bold mb-4">Sistema Visual - Leyendas de la Fórmula 1</h1>
        <p className="text-lg mb-8">Descripción del proyecto y el lenguaje visual aplicado.</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Estados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-6">
          <div></div>
          
          {estadoEquipo.map((icon, index) => (
            <div key={index} className="text-center p-4 border border-white border-opacity-40 rounded-lg">
              <Image 
                src={icon.src} 
                alt={icon.name} 
                width={100} 
                height={100} 
                className="mx-auto object-contain" 
              />
              <h3 className="mt-2 text-xl font-semibold">{icon.name}</h3>
            </div>
          ))}
          
          {estadoPiloto.map((icon, index) => (
            <div key={index} className="text-center p-4 border border-white border-opacity-40 rounded-lg">
              <Image 
                src={icon.src} 
                alt={icon.name} 
                width={100} 
                height={100} 
                className="mx-auto object-contain" 
              />
              <h3 className="mt-2 text-xl font-semibold">{icon.name}</h3>
            </div>
          ))}
          
          <div></div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Variados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-6">
          {/* Tarjetas invisibles */}
          <div></div>
          {variados.map((icon, index) => (
            <div key={index} className="text-center p-4 border border-white border-opacity-40 rounded-lg">
              <Image 
                src={icon.src} 
                alt={icon.name} 
                width={100} 
                height={100} 
                className="mx-auto object-contain" 
              />
              <h3 className="mt-2 text-xl font-semibold">{icon.name}</h3>
            </div>
          ))}
          <div></div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Pilotos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-6">
          {pilotos.map((icon, index) => (
            <div key={index} className="text-center p-4 border border-white border-opacity-40 rounded-lg">
              <Image 
                src={icon.src} 
                alt={icon.name} 
                width={100} 
                height={100} 
                className="mx-auto object-contain" 
              />
              <h3 className="mt-2 text-xl font-semibold">{icon.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Equipos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-6">
          {equipos.map((icon, index) => (
            <div key={index} className="text-center p-4 border border-white border-opacity-40 rounded-lg">
              <Image 
                src={icon.src} 
                alt={icon.name} 
                width={70} 
                height={70} 
                className="mx-auto object-contain" 
              />
              <h3 className="mt-2 text-xl font-semibold">{icon.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Aplicación del sistema visual</h2>
        <p className="text-lg mb-4">Escuderías y pilotos más influyentes de las últimas 3 décadas</p>

        <div className="my-8">
          <Image 
            src="/images/equipos.png" 
            alt="Equipos" 
            width={600} 
            height={400} 
            className="mx-auto" 
          />
        </div>

<div className="my-8">
  <Image 
    src="/images/pilotos.png" 
    alt="Pilotos" 
    width={900} 
    height={400} 
    layout="responsive"
    className="mx-auto" 
  />
</div>
      </section>
    </div>
  );
}
