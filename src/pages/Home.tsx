import './styles.css';
import { Chart } from "react-google-charts";
import profile from  './../assets/profile.jpeg'
import { EcobinIcon } from '../icons/EcobinIcon';
import { DashboardSectionIcon } from '../icons/DashboardSection';
import { ManuntencaoSectionIcon } from '../icons/ManutencaoSectionIcon';
import { RelatorioSectionIcon } from '../icons/RelatorioSectionIcon';
import { NotificationIcon } from '../icons/NotificationIcon';
import { MessageIcon } from '../icons/MessageIcons';
import { useEffect, useState } from 'react';
import { API_URL } from '../api';
import axios from 'axios';

const Home = () => {

  
  const [chartTotalRegioes, setChartTotalRegioes] = useState([["Região", "Peso Reciclado", "Peso Rejeito"]]);
  const [qtdPessoasResiduos, setQtdPessoasResiduos] = useState([["Quantidade Moradores", "Peso Reciclado", "Peso Rejeito"]]);

    useEffect(() => {
      axios.get("http://localhost:8800/totalporregiao").then((response) => {
        console.log(response.data);
        const data = response.data.map((obj: { [x: string]: string; regiao: any; }) => [
          obj.regiao,
          parseFloat(obj["SUM(des.peso_reciclado)"]),
          parseFloat(obj["SUM(des.peso_rejeito)"])
        ]);
        setChartTotalRegioes(prevState => [...prevState, ...data]);
      });
    }, []);


    useEffect(() => {
      axios.get("http://localhost:8800/qtdpessoasresiduos").then((response) => {
        console.log(response.data);
        const data = response.data.map((obj: { [x: string]: string; }) => [
          obj["quantidade_moradores"],
          parseFloat(obj["AVG(des.peso_reciclado)"]),
          parseFloat(obj["AVG(des.peso_rejeito)"])
        ]);
        setQtdPessoasResiduos(prevState => [...prevState, ...data]);
      });
    }, []);

  const opcoesTotalRegioes = {
    title: "Descartes de resíduos por regiões",
    pieHole: 0.4,
    colors: ['#236152', '#48A4F9'],
  };


  const opqtdPesRes = {
    title: "Descartes de resíduos x Quantidade pessoas no condominio",
    hAxis: {
      title: 'Quantidade Moradores'
    },
    vAxis: {
      title: 'Residuos'
    },
    colors: ['#236152', '#48A4F9'],
  };

  return (
    <div className='home-container'>
      <div className='first-session'>
        <div className="column-sidebar">
            <div className='rectangle-3'>
              <div className='sidebar'>
                <div className='ecobin-logo-wrapper'>
                  <EcobinIcon/>
                </div>
                <div className='sidebar-categories'>
                    <div className='menu-section'>
                      <DashboardSectionIcon/>
                      <div className='subcategoria-option'>  
                          Visão Geral
                      </div>
                    </div>
                    <div  className='menu-section'>
                      <ManuntencaoSectionIcon/>
                      <div className='subcategoria-option'>
                          Rotina
                      </div>
                      <div className='subcategoria-option'>
                          Chamados
                      </div>
                    </div>
                    <div  className='menu-section'>
                      <RelatorioSectionIcon/>
                      <div className='subcategoria-option'>
                          Financeiro
                      </div>
                      <div className='subcategoria-option'>
                          Desempenho
                      </div>
                      <div className='subcategoria-option'>
                          Empresa de Coleta
                      </div>
                      <div className='subcategoria-option'>
                          Condomínios
                      </div>
                    </div>
                </div>
              </div>

            </div>
        </div>
        <div className="column-data">
          <div className='data-first'>
            <div className='status-wrapper'>
              <div className='image-status'>
                 <img src={profile} alt="status" className="profile"/>
              </div>
              <div className='name-section'>
                <p className='name'>Paulo Fernando A. Matos Filho</p>
                <p className='cargo'>Analista de Operações</p>
              </div>

            </div>
            <div className='end-content'>
                <input type="text" className='input' placeholder='Pesquisar'/>
              <div className='top-icons'>
                <NotificationIcon/>
                <MessageIcon/>
              </div>
            </div>
           
            
          </div>
          <div className='data-second'>
            <div className='rectangle-5'>
                    <Chart
                    chartType="ColumnChart"
                    data={chartTotalRegioes}
                    options={opcoesTotalRegioes}
                    width="100%"
                    height="400px"
                  />
            </div>
            <div className='rectangle-6'>
               {/* <Chart
                chartType="LineChart"
                width="100%"
                height="100%"
                data={LineData}
                options={LineOptions}
                /> */}

              <Chart
                    chartType="LineChart"
                    data={qtdPessoasResiduos}
                    options={opqtdPesRes}
                    width="100%"
                    height="400px"
                  />
              </div>
          </div>
        </div>
      </div>

      
      <div className='second-session'>
        <div className='rectangle-4'>
            <div className='wrapper-sheet'>
              
            </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
