const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
const  temp_status = document.getElementById('temp_status');

const getInfo= async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal ===""){
        city_name.innerText =`plz write the name of the city`;
    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=cdead658199b334e1509413833d89eed`
            const response =await fetch(url);
            const data = await response.json();
            const arrData =[data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;

            //condition to check sunnt=y or cloudy
            if(tempMood =="Clear"){
                temp_status.innerHTML= "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }else if(tempMood=="Clouds"){
                temp_status.innerHTML= "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }else if(tempMood=="Rain"){
                temp_status.innerHTML= "<i class='fas fa-cloud-rain' style='color: #eccc68;'></i>";
            }else{
                temp_status.innerHTML= "<i class='fas fa-sun' style='color: #eccc68;'></i>";    
            }
            
        }catch{
            city_name.innerText =`plz enter the city name properly`;
        }
    }
    
}


submitBtn.addEventListener('click',getInfo);