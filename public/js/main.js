const cityname=document.getElementById('cityname');
const submitBtn =document.getElementById('submitBtn');
const city_name =document.getElementById('city_name');
const temp_status =document.getElementById('temp_status');
const temp_real_val =document.getElementById('temp_real_val');


const getInfo= async(event)=>{
    event.preventDefault();
    let cityVal = cityname.value;
    if(cityVal === ""){
        city_name.innerText = `plz enter the city name`;

    }else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c5a69b2ad1be0f9ccdf8d10726ea2d45`
            const response = await fetch(url);
            const data=await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country} `;
            temp_real_val.innerText=arrData[0].main.temp;
            temp_status.innerText=arrData[0].weather[0].main;

            

          
        }catch{
            city_name.innerText = `plz enter the city name properly`;
        }
       
        
    }
}

submitBtn.addEventListener('click',getInfo);



