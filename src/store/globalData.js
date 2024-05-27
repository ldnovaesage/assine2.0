export const globalData = {
  optionsList: [],
  coberturaItems: [],
  regions: [],
  cidades: [
    { name: "Arapoanga", id: "Arapoanga" },
    { name: "Arniqueiras", id: "Arniqueiras" },
    { name: "Brazlândia", id: "Brazlandia" },
    { name: "Candangolândia", id: "Candangolandia" },
    { name: "Ceilândia", id: "Ceilandia" },
    { name: "Cruzeiro", id: "Cruzeiro" },
    { name: "Cruzeiro Velho", id: "CruzeiroVelho" },
    { name: "Gama", id: "Gama" },
    { name: "Guará", id: "Guara" },
    { name: "Itapoã", id: "Itapoa" },
    { name: "Jardim Botânico", id: "JardimBotanico" },
    { name: "Lago Norte", id: "LagoNorte" },
    { name: "Lago Sul", id: "LagoSul" },
    { name: "Noroeste", id: "Noroeste" },
    { name: "Núcleo Bandeirante", id: "NucleoBandeirante" },
    { name: "Paranoá", id: "Paranoa" },
    { name: "Park Way", id: "ParkWay" },
    { name: "Planaltina", id: "Planaltina" },
    { name: "Plano Piloto", id: "PlanoPiloto" },
    { name: "Polo de Modas Guará", id: "PoloDeModas" },
    { name: "Pôr do Sol", id: "PorDoSol" },
    { name: "Recanto das Emas", id: "RecantoDasEmas" },
    { name: "Riacho Fundo I", id: "RiachoFundo1" },
    { name: "Riacho Fundo II", id: "RiachoFundo2" },
    { name: "SAAN", id: "SAAN" },
    { name: "Samambaia", id: "Samambaia" },
    { name: "Santa Maria", id: "SantaMaria" },
    { name: "São Sebastião", id: "SaoSebastiao" },
    { name: "SIA", id: "SIA" },
    { name: "Sobradinho I", id: "Sobradinho1" },
    { name: "Sobradinho II", id: "Sobradinho2" },
    { name: "SOF SUL", id: "SOFSUL" },
    { name: "Sol Nascente", id: "SolNascente" },
    { name: "Taguatinga", id: "Taguatinga" },
    { name: "Taquari", id: "Taquari" },
    { name: "Varjão", id: "Varjao" },
    { name: "Vicente Pires", id: "VicentePires" },
  ],
};

globalData.optionsList = globalData.cidades.map(({name, id}) => ({label: name, value: id}));

globalData.coberturaItems = globalData.optionsList.map(({label, value}) => ({
  label,
  to: `https://www.agetelecom.com.br/fibraoptica/${value.replace(/([A-Z0-9])/g, '-$1').toLowerCase().replace(/\s+/g, '-').substring(1)}`
}));

globalData.regions = globalData.cidades.map(({name}) => ({region: name}));

console.log(globalData.optionsList);