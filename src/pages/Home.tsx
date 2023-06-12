import './styles.css';
import { Chart } from "react-google-charts";
import profile from  './../assets/profile.jpeg'
import { EcobinIcon } from '../icons/EcobinIcon';
import { DashboardSectionIcon } from '../icons/DashboardSection';
import { ManuntencaoSectionIcon } from '../icons/ManutencaoSectionIcon';
import { RelatorioSectionIcon } from '../icons/RelatorioSectionIcon';
import { NotificationIcon } from '../icons/NotificationIcon';
import { MessageIcon } from '../icons/MessageIcons';

const Home = () => {

  //Bar Chart Graph Data
   const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];


   const options = {
    chart: {
      title: "Lixo Tratado por Zonas de São Paulo",
      subtitle: "",
    },
    colors:['#41AA90', '#85B6FF', '#562D1B'] 
  };


  //Line Chart Graph Data
const LineData =  [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];
  
const LineOptions = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
  colors:['#41AA90', '#85B6FF', '#562D1B'] 
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
                  chartType="Bar"
                  width="100%"
                  height="100%"
                  data={data}
                  options={options}
                />
            </div>
            <div className='rectangle-6'>
               <Chart
                chartType="LineChart"
                width="100%"
                height="100%"
                data={LineData}
                options={LineOptions}
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
