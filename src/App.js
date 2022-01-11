// import logo from './logo.svg';
import {useState} from 'react';
import Card from './card'
import './App.css';

function App() {
  const [responce, setResponce] = useState([])
  const [commodity, setCommodity] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const selectCommodity = (e) => {
    setCommodity(e.target.value)
  }

  const getResponce = async () => {
    const URL = 'https://bazarbhao-api.herokuapp.com/' + commodity
    const data = await fetch(URL)
    return data
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    
    try{
      setIsLoading(true)
      setIsError(false)
      const res = await getResponce()
      const resJson = await res.json()
  
      setIsLoading(false)
      setResponce(resJson)
    }catch{
      setIsLoading(false)
      setIsError(true)
    }
  }
  return (

    // useState for dropdown with commodity values

    // useEffect for fetching data
    <div className="App">
      {/**
       * Display information on cards
       */}

       <div className='container bg-primary'>
          <h1>
            BazarBhao - Get live APMC rates from across the Maharashtra
          </h1>

          <form onSubmit={onSubmit} className='flex mcol-500'>
            <select onChange={selectCommodity}>
            <option value='0'> Select Product </option>
              <option value='08004'> AMBAT CHUKA </option>
              <option value='08006'> AMLA </option>
              <option value='07026'> APPLE </option>
              <option value='08005'> ARVI </option>
              <option value='07042'> AWALA </option>
              <option value='02002'> BAJRI </option>
              <option value='07014'> BANANA </option>
              <option value='08040'> BANANA (RAW) </option>
              <option value='10025'> BEDANA </option>
              <option value='08008'> BEET ROOT </option>
              <option value='10017'> BETELNUTS </option>
              <option value='08039'> BITTER GROUND </option>
              <option value='03022'> BLACK GRAM (UDID) </option>
              <option value='07004'> BOR </option>
              <option value='08012'> BOTTLE GROUND </option>
              <option value='08078'> BRINJAL </option>
              <option value='09013'> BUFFALO </option>
              <option value='09002'> BULLACK </option>
              <option value='07025'> BULLOCK HEART </option>
              <option value='08041'> CABBAGE </option>
              <option value='08049'> CAPSICUM </option>
              <option value='10018'> CARDIMOM </option>
              <option value='08022'> CARRET </option>
              <option value='10010'> CASHEWNUTS </option>
              <option value='04005'> CASTOR SEED </option>
              <option value='08016'> CHAVALI (PALA) </option>
              <option value='08015'> CHAVALI (SHENGA) </option>
              <option value='07006'> CHIKOO </option>
              <option value='10014'> CHILLIES (RED) </option>
              <option value='08024'> CLUSTER BEAN </option>
              <option value='04013'> COCONUT </option>
              <option value='08044'> CORIANDER </option>
              <option value='10005'> CORIANDER (DRY) </option>
              <option value='01001'> COTTON </option>
              <option value='09005'> COW </option>
              <option value='03003'> COWPEA </option>
              <option value='08033'> CUCUMBER </option>
              <option value='10009'> CUMIN </option>
              <option value='08031'> CURRY LEAVES </option>
              <option value='07028'> CUSTARD APPLE </option>
              <option value='08019'> DHEMSE </option>
              <option value='08018'> DOUBLE BEE </option>
              <option value='08069'> ELEPHANT ROOT </option>
              <option value='08081'> FARSHI </option>
              <option value='04002'> FENNEL </option>
              <option value='10012'> FENUGREEK </option>
              <option value='07003'> FIG </option>
              <option value='10027'> FIG (DRY) </option>
              <option value='08021'> FLOWER </option>
              <option value='08020'> FRENCH BEAN </option>
              <option value='08045'> GARLIC </option>
              <option value='10011'> GARLIC </option>
              <option value='09016'> GHEE </option>
              <option value='08025'> GHEVDA </option>
              <option value='08026'> GHOSALI (BHAJI) </option>
              <option value='10001'> GINGER (DRY) </option>
              <option value='08002'> GINGER (FRESH) </option>
              <option value='09015'> GOATS </option>
              <option value='08013'> GOOSEFOOT </option>
              <option value='04016'> GR. NUT KERNELS </option>
              <option value='03006'> GRAM </option>
              <option value='07008'> GRAPES </option>
              <option value='10013'> GREEN CHILLI </option>
              <option value='03016'> GREEN GRAM (MUG) </option>
              <option value='03026'> GRREN PEAS (DRY) </option>
              <option value='08074'> GREEN PEAS </option>
              <option value='04003'> GROUND NUT PODS (DRY) </option>
              <option value='08085'> GROUND NUT PODS (WET) </option>
              <option value='07020'> GUAVA </option>
              <option value='08027'> HARBARA (BHAJI) </option>
              <option value='08028'> HARBARA (PENDI) </option>
              <option value='09014'> HE BUFFALO </option>
              <option value='08003'> HEMP </option>
              <option value='04001'> HEMP SEED </option>
              <option value='09009'> HENS/COCK </option>
              <option value='03010'> HORSE GRAM </option>
              <option value='03024'> INDIAN BEAN </option>
              <option value='07022'> JACK FRUIT </option>
              <option value='08059'> JACK FRUIT (RAW) </option>
              <option value='06001'> JAGGERY </option>
              <option value='09020'> KALVAD </option>
              <option value='08036'> KANDA PAT </option>
              <option value='08038'> KARDAI </option>
              <option value='07044'> KHARBUJ / MELON </option>
              <option value='08009'> LADIES FINGER </option>
              <option value='07015'> LEMON </option>
              <option value='03012'> LENTIL </option>
              <option value='02015'> MAIZE </option>
              <option value='08046'> MAIZE (CORN) </option>
              <option value='09018'> MALE GOAT </option>
              <option value='09017'> MALE LAMB </option>
              <option value='08032'> MANGO (RAW) </option>
              <option value='03014'> MATKI </option>
              <option value='08048'> METHI (BHAJI) </option>
              <option value='08060'> MINT </option>
              <option value='07016'> MOSAMBI </option>
              <option value='08052'> MULA SHENGA </option>
              <option value='10015'> MUSTARD </option>
              <option value='02016'> NACHANI / NAGALI </option>
              <option value='07033'> NASHPATI </option>
              <option value='04012'> NEEM SEED </option>
              <option value='08053'> NOLKOL </option>
              <option value='08035'> ONION </option>
              <option value='07027'> ORANGE </option>
              <option value='02007'> PADDY UNHUSKED </option>
              <option value='07018'> PAPAI </option>
              <option value='08056'> PAPPAYA (BHAJI) </option>
              <option value='08057'> PARWAR </option>
              <option value='08058'> PAVTTA </option>
              <option value='07019'> PEER </option>
              <option value='08084'> PICKDORE </option>
              <option value='08073'> PIGEON PEA (BHAJI) </option>
              <option value='03020'> PEAGON PEA (TUR) </option>
              <option value='07002'> PINEAPPLE </option>
              <option value='10026'> PISTA </option>
              <option value='07024'> PLUM </option>
              <option value='07007'> POMEGRANET </option>
              <option value='08007'> POTATO </option>
              <option value='08043'> PUMPKIN </option>
              <option value='08051'> RADDISH </option>
              <option value='08061'> RAI MOHRI BHAJI </option>
              <option value='08062'> RAJGIRA </option>
              <option value='07046'> RASBERRY </option>
              <option value='02023'> RICE (PADDY-HUS) </option>
              <option value='08068'> RIDGE GOURD </option>
              <option value='02006'> SABUDANA </option>
              <option value='04008'> SAFFLOWER </option>
              <option value='02021'> SARSAV </option>
              <option value='04019'> SESAMUM </option>
              <option value='07047'> SHAHALE </option>
              <option value='04020'> SHEPA </option>
              <option value='08066'> SHEPU </option>
              <option value='08067'> SHEVGA </option>
              <option value='01004'> SILK COCOON </option>
              <option value='08072'> SMALL GOURD </option>
              <option value='08054'> SNAKE GOURD </option>
              <option value='02011'> SORGUM (JAWAR) </option>
              <option value='04017'> SOYABEAN </option>
              <option value='03017'> SPLIT GREEN GRAM </option>
              <option value='03021'> SPLIT PIGEON PEA </option>
              <option value='03007'> SPLIT GRAM </option>
              <option value='03013'> SPLIT LENTIL </option>
              <option value='08011'> SQUASH GOURD </option>
              <option value='07029'> STRAWBERRY </option>
              <option value='06002'> SUGAR </option>
              <option value='04018'> SUNFLOWER </option>
              <option value='08063'> SWEET POTATO </option>
              <option value='10003'> TAMARIND </option>
              <option value='04014'> THYMOL / LOVAGE </option>
              <option value='08071'> TOMATO </option>
              <option value='10006'> TURMERIC </option>
              <option value='08075'> WAL BHAJI </option>
              <option value='08076'> WAL PAPDI </option>
              <option value='08077'> WALVAD </option>
              <option value='07011'> WATERMELON </option>
              <option value='02009'> WHEAT (HUSKED) </option>
              <option value='02012'> WHEAT (UNHUSKED) </option>
            </select>

            <input type={'submit'} value={'Get Prices'}/>
          </form>
          {isLoading && <p className='center'> Loading Data, please wait..... </p>}

          {isError && <p className='center text-red'> Error occured while fetching the data.<br /> Try again by clicking the button.</p>}
          <div className='grid mgrid'>
            {responce.map(r => (
              <Card  key={responce.indexOf(r)} info={r} commodity={document.querySelector(`option[value='${commodity}']`).textContent} />
            ))}
          </div>
       </div>
    </div>
  );
}

export default App;
