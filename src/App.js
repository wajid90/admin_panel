import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Card from './components/Card';
import Card2 from './components/Card2';
import { BarChart } from './components/BarChart';
import Card1 from './components/Card1';
import ProgressBarChart from './components/ProgressBarChart';


const data=[
  {
    title:"Tota Amounts Recevable",
    price:"$6,621,280",
    subtitle:"Current Ratio",
    color:"text-green-500",
    progressValue:"1.86%",
    progressPer:80,
    progresscolor:"#4CAF50",
  },
  {
    title:"Tota Amounts Payable",
    price:"$1,221,280",
    subtitle:"[Day Sales Inventry]",
    color:"text-red-500",
    progressValue:"10 days",
    progressPer:40,
    progresscolor:"rgb(239 68 68)",
  },
  {
    title:"Equity Ration",
    price:"75%",
    subtitle:"[Days sales Dasings]",
    color:"text-blue-500",
    progressValue:"7 days",
    progressPer:30,
    progresscolor:"#2196F3",
  },
  {
    title:"Dubt Equality",
    price:"1.10%",
    subtitle:"[Days sales payable]",
    color:"text-blue-500",
    progressValue:"28 days",
    progressPer:90,
    progresscolor:"#3d5a80",
  }
]
function App() {
  return (
      <>
      <Header/>
        <div className='grid md:grid-cols-6 sm:grid-col-2 grid-cols-1 lg:grid-cols-12 mx-2'>
        {
          data?.length>0 && data?.map((d,index)=>(
            <div className='sm:col-span-2 col-span-full'>
                <Card key={index} d={d} ProgressBarChart={ProgressBarChart} ind={index}/>
            </div>
          ))
        }
         <div className='col-span-4 bg-white my-2 mr-2 shadow-lg'>
          <h3 className='text-[12px] p-2 text-gray-500 font-semibold'>total Amount Reciable and Payable</h3>
         
          <BarChart/>
          </div>   
        </div>

        <div className='grid md:grid-cols-6 grid-cols-1 lg:grid-cols-12 mx-auto'>
             <div className='col-span-6'>
                 <Card1 title="Net Weight Capital vs gross working capital "/>
             </div>
             <div className='col-span-6'>
                 <Card2 title="profit or loss summary"/>
             </div>
        </div>
      </>
  );
}

export default App;
