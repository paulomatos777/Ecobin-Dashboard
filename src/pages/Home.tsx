import React, { useEffect } from 'react';
import './styles.css';
import PHOTO from  './../assets/PHOTO.png'
// import Group from  './../assets/Group.svg'
// import Group2 from  './../assets/Group2.svg'
// import PHOTO from  './../assets/PHOTO.png'

const Home = () => {
//   useEffect(() => {
//     google.charts.load('current', {'packages': ['bar', 'corechart']});
//     google.charts.setOnLoadCallback(drawCharts);

//     function drawCharts() {
//       var data1 = google.visualization.arrayToDataTable([
//         ['2023', 'Lixo Comum', 'Lixo Molhado', 'Lixo Reciclável'],
//         ['Norte', 1000, 400, 200],
//         ['Sul', 1170, 460, 250],
//         ['Oeste', 660, 1120, 300],
//         ['Leste', 1030, 540, 350]
//       ]);

//       var options1 = {
//         chart: {
//           title: 'Kg de Lixo Descartado por Região',
//           subtitle: 'Quantidade de lixo descartado por tipo e região',
//         },
//         colors: ['#225044', '#88AF95', '#D1E8D4']
//       };

//       var chart1 = new google.charts.Bar(document.getElementById('columnchart_material'));
//       chart1.draw(data1, google.charts.Bar.convertOptions(options1));

//       var data2 = google.visualization.arrayToDataTable([
//         ['Task', 'Hours per Day'],
//         ['Work', 11],
//         ['Eat', 2],
//         ['Commute', 2]
//       ]);

//       var options2 = {
//         chart: {
//           title: 'Kg de Lixo Descartado por Região',
//           subtitle: 'Quantidade de lixo descartado por tipo e região',
//         },
//         colors: ['#225044', '#88AF95', '#D1E8D4']
//       };

//       var chart2 = new google.visualization.PieChart(document.getElementById('piechart_3d'));
//       chart2.draw(data2, options2);
//     }
//   }, []);



  return (
    <div>
      <div className="square" id="one"></div>
      <div className="square" id="two"></div>
      <div className="square" id="three"></div>
      <div className="square" id="four"></div>
      <div className="square" id="five"></div>

      <img src={PHOTO} alt="Profile Picture" className="profile" />

      <input type="text" placeholder="Pesquisar" className="search" />

      <p className="user">Maria Leticia Fernandes</p>
      <p className="cargo">Analista de operações</p>

      <div className="status"></div>

      <div id="columnchart_material" style={{ width: '500px', height: '350px' }}></div>

      <div id="piechart_3d" style={{ width: '38%', height: '400px' }}></div>

      <div className="chat"></div>
      <div className="notification"></div>
    </div>
  );
};

export default Home;
