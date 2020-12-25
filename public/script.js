document.getElementById("get-data").addEventListener("click", getData);
function getData(){
    fetch('https://randomuser.me/api/')
    .then(res => {
        return res.json()
    })
    .then(result => {return result.results[0]})
    .then(final => {
        console.log(final);
        let output = ``
        output += `
        <div class="flex flex-col justify-center items-center  mx-12">
        <div class="max-w-full my-4"> 
          <img src="${final.picture.large}" class="rounded-full w-32 h-32 border-white md:h-42 md:w-42">
        </div>
        <div class="font-bold text-white">
          <h1 class="text-2xl capitalize">${final.name.title} ${final.name.first} ${final.name.last}</h1> 
          <h3 class="text-gray-100 text-center uppercase">front end developer</h3>
        </div>
      </div>
     <div class="flex flex-col items-center justify-center text-gray-800">
      <div class="bg-white mx-24 shadow-xl rounded-md md:px-8 md:py-4 p-4 my-4">
        <div id="profile">
          <div class="capitalize text-center font-bold text-lg py-4">personal information</div>
          <div class="flex items-center">
            <div class="mr-4"><i class="far fa-user h-6 text-2xl mr-2 text-blue-500"></i></div>
            <div class="text-lg capitalize font-semibold">  ${final.name.first} ${final.name.last}</div>
          </div>
          <div class="flex items-center">
            <div class="mr-4"><i class="far fa-envelope h-6 text-2xl mr-2 text-blue-500"></i></div>
            <div class="text-lg capitalize font-semibold">${final.email}</div>
          </div>
          <div class="flex items-center">
            <div class="mr-4"><i class="far fa-calendar-alt h-6 text-2xl mr-2 text-blue-500"></i></div>
            <div class="text-lg capitalize font-semibold">${final.dob.age}</div>
          </div>
          <div class="flex items-center">
            <div class="mr-4"><i class="fas fa-map-marked-alt h-6 text-2xl mr-2 text-blue-500"></i></div>
            <div class="flex flex-col">
              <div class="text-md text-gray-500 capitalize">${final.location.state}</div>
              <div class="uppercase text-lg">${final.location.country}</div>
            </div>
          </div>
          <div class="flex items-center h-6 text-2xl mr-2">
            <div class="mr-4"><i class="fas fa-phone text-blue-500"></i></div>
            <div class="text-lg capitalize font-semibold">${final.phone}</div>
          </div>
        </div>
      </div>
     </div>
        `
        document.querySelector("#final-result").innerHTML = output
    })
    .catch(err => {console.log(err);})
}