/*
*  IIFE  function for ui interaction 
*/
var MyUIController = (()=>{
  var DOMStrings = {
    searchForm : '#form-pass',
    searchFormInput : '#form-pass input',
    micButton : 'button',
    listenbutton : '#myLink',
    welcome : '.serach_content',
    placeHolder : '.place_hold',
    searchInput : '#headerSearch',
    gunImage : '#ex',
    cartArea : '.cart-area',
    welcomeDecoy : '.welcome_containerws'

};
var showHome = (welcomeSection)=>{
  document.querySelectorAll(DOMStrings.welcomeDecoy).forEach(el => el.remove())
  welcomeSection.style.display = "block";    
};
var plotDatas = (result, container, welcomeSection,recognition,listenBtn)=>{
var html = ``;
      html += ` <header class="header_area">
      <div class="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
          <!-- Classy Menu -->
          <nav class="classy-navbar" id="essenceNav">
              <!-- Logo -->
              <a class="nav-brand" href="index.html"><img src="img/core-img/logo.png" alt=""></a>
              
          </nav>
          <div class="cart-area" align="right">
          <a href="#" id="essenceCartBtn"><img src="img/core-img/close.png" alt=""><span id="ex">close</span></a>
        </div>
          
      </div>
    </header>`;
      html += `<div class="row">`;
      console.log(`Found ${result.length} results`);
      for(let i=0;i<result.length;i++){
       html +=  `<div class="column">
                    
                      <div class="product-img">
                          <img src="${result[i].url}" alt="">
                          <!-- Hover Thumb -->
                          <!-- <img class="hover-img" src="img/product-img/product-5.jpg" alt=""> -->
    
                          <!-- Favourite -->
                          
                      </div>
    
                      <!-- Product Description -->
                      <div class="product-description">
                          <span>${result[i].type}</span>
                          <a href="single-product-details.html">
                              <h6>${result[i].name}</h6>
                          </a>
                          <p class="product-price">$80.00</p>
    
                          <!-- Hover Content -->
                          <!-- <div class="hover-content"> -->
                              <!-- Add to Cart -->
                              <!-- <div class="add-to-cart-btn">
                                  <a href="#" class="btn essence-btn">Add to Cart</a>
                              </div>
                          </div> -->
                      </div>
                    
                  </div>`;  
      }
      html += `</div>`;
      let content = `
      <section class="shop_grid_area section-padding-80 welcome_containerws">
            <div class="container h-100">
          <div class="row h-100 align-items-center">
              <div class="col-12">
                        ${html}
              </div>
                </div>
            </div>
        </section>
    `;
      
    
    /*
     * add the modified html document to the webpage(result area)
     */
    container.insertAdjacentHTML("afterend", content);
    let gun = document.querySelector(DOMStrings.gunImage).style;
    gun.color = "#f26e51";
    gun.top = "25px";
    gun.left = "25px";
    document.querySelector(DOMStrings.cartArea).addEventListener("click", ()=>showHome(welcomeSection));
    MyUtil.stopRecording(recognition,listenBtn, false);
}
// Closures 
return{
  getDom : function(){
      return DOMStrings;    
      },
  getinput : function(){
      return{
         query : document.querySelector(DOMStrings.inputValue).value
      };
  },
  addMic : (searchForm,searchFormInput)=>{
      //if supports add mic in html(webpage)
      searchForm.insertAdjacentHTML("beforeend", '<button type="button"><i class="fa fa-microphone"></i></button>');
      searchFormInput.style.paddingRight = "10px";
  },
  micBtnClick : (micIcon, recognition, listenBtn)=>{
    // on/off the mic record state
  /*
  TO-DO
    if clicks start stop mic (use class as a flag)
    change state in webpage
  */
  
    if(micIcon.classList.contains("fa-microphone")) { 
      listenBtn.innerHTML = "Give";
      document.querySelector('.welcome_area').style.background = null;
      document.querySelector('.welcome_area').style.background = "rgba(199, 139, 9, 0.7)";
      document.querySelector('#head').innerHTML = "Give Permission";
      recognition.start();
      recognition.onstart = ()=>{ 
        listenBtn.innerHTML = "Stop";
        document.querySelector('.welcome_area').style.backgroundImage = null;
        document.querySelector('.welcome_area').style.background = "rgba(16, 237, 78, 0.7)";
        document.querySelector('#head').innerHTML = "Listening....";
      } 
    }
    else {
      listenBtn.innerHTML = "Waiting";
      document.querySelector('#head').innerHTML = "Processing....";
      console.log("post process");
      MyUtil.stopRecording(recognition,listenBtn, false);
  
    }  
  },
  postProcessResults : (result,recognition,isSearch,listenBtn,welcomeSection,searchInput)=>{  
       
      // if the result length less than 1 -> push 'no data found' to our result array
    if(result.length<1){
    result.push("No data found!");
    // show no data found to website
    document.querySelector('.welcome_area').style.backgroundImage = null;
    document.querySelector('.welcome_area').style.background = "rgba(238, 4, 4, 0.7)";
    document.getElementById('myLink').innerHTML = "Try again";
    document.querySelector('#head').innerHTML = `No Guns Found.... for ${searchInput.value}`;
    console.log('noData');
    MyUtil.stopRecording(recognition,listenBtn, true);
    return;
    } 
    
    /*
    *    result more than 1 
    *          -remove the listen area
    *          -stop the speech listening
    *          -plot the results on the result area
    */
    welcomeSection.style.display = "none";
    if(isSearch === 'voice')
    MyUtil.stopRecording(recognition,listenBtn, false);
    plotDatas(result, document.querySelector(DOMStrings.placeHolder),welcomeSection,recognition,listenBtn);
  }
}
})();
/*
 *  IIFE  function for data store
 */
var MyDataController = (()=>{
  var myGuns = {guns : 
  [
            {
                name : "Desert Eagle",
                year : "1982",
                manufactured : "Colt",
                type : "Pistol",
                url : "img/product-img/product-1.jpg"
            },
            {
                name : "Mustang Lite",
                year : "1982",
                manufactured : "Colt",
                type : "Pistol",
                url : "img/product-img/product-2.jpg"
            },
            {
                name : "Rail Gun 9MM",
                year : "1982",
                manufactured : "Colt",
                type : "Pistol",
                url : "img/product-img/product-3.jpg"
            },
            {
                name : "Special Combat",
                year : "1982",
                manufactured : "Colt",
                type : "Pistol",
                url : "img/product-img/product-4.jpg"
            },
            {
                name : "King Cobra",
                year : "1982",
                manufactured : "Colt",
                type : "Revolver",
                url : "./img/guns/revolver/king_cobra.jpg"
            },
            {
                name : "SA Army",
                year : "1982",
                manufactured : "Colt",
                type : "Revolver",
                url : "./img/guns/revolver/sa_army.jpg"
            },
            {
                name : "M4 Carbine",
                year : "1982",
                manufactured : "Colt",
                type : "Rifles",
                url : "./img/guns/rifles/m4_cabrine.jpg"
            },
            {
                name : "M4A1 SOCOM",
                year : "1982",
                manufactured : "Colt",
                type : "Rifles",
                url : "./img/guns/rifles/m4a1_socom.jpg"
            },
            {
              name : "M16A1 Retro",
              year : "1982",
              manufactured : "Colt",
              type : "Rifles",
              url : "./img/guns/rifles/m16a1_retro.jpg"
          },
          {
            name : "M416 Retro Carbine",
            year : "1982",
            manufactured : "Colt",
            type : "Rifles",
            url : "./img/guns/rifles/XM177E2_Retro_Carbine.jpg"
        },
        {
          name : "KSG",
          year : "1982",
          manufactured : "Colt",
          type : "Shot gun",
          url : "./img/guns/shotgun/ksg.jpg"
      },
      {
        name : "Sawnoff",
        year : "1982",
        manufactured : "Colt",
        type : "Shot gun",
        url : "./img/guns/shotgun/sawnoff.jpg"
    },
    {
      name : "Winchester",
      year : "1982",
      manufactured : "Colt",
      type : "Shot gun",
      url : "./img/guns/shotgun/winchester.jpg"
  }

]
};
var processData = (transcript, data)=>{
  console.log(`Spoken: ${transcript}`);
  //console.log(data);

  transcript = transcript.toLowerCase();

  if(transcript == 'all' || transcript == 'show all')
    return data;
  if(transcript == 'gan' || transcript == 'guan')
    transcript = 'gun';
  let response = new Array();
        for(var i = 0; i < data.length; i++)
        {
          if(data[i].name.toLowerCase().includes(transcript) || data[i].type.toLowerCase().includes(transcript))
            {
              response.push(data[i]);
            }
        }
       return response;
};
  return {
    getGuns : function(){
      return myGuns;  
      },
      preProcessData : (transcript, data)=>{
        return processData(transcript, data);
      }
  }
})();




var MyUtil = (()=>{
  return {
    checkSpeechAvailablity : ()=>{
     /// check if browser supports speechRecognition
     SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition) 
      return true;
    else
      return false;
},
setUpVoiceRecognition : ()=>{
   // setup voice recognision
   SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
   const recognition = new SpeechRecognition();
   recognition.continuous = true;
   recognition.lang = 'en-US';
   recognition.interimResults = false;
   recognition.maxAlternatives = 1;
   return recognition;
},
/*
  * when user says 'stop recording'
*/ 
stopRecording : (speech, listenBtn, isNoData)=>{
//console.log(typeof speech);
        

  try{
    speech.stop();
      // changing the website to initial(ready to listen) state
      speech.onend   = ()=>{ 
        if(isNoData)//// for no data result stop voice dont show the initial window
        return;
        listenBtn.innerHTML = "Listen";
        document.querySelector('.welcome_area').style.background = null;
        document.querySelector('.welcome_area').style.backgroundImage = "url(img/bg-img/bg-1.jpg)";
        document.querySelector('#head').innerHTML = "Press the Mic/Listen button to search the guns";
    }
  } catch(err){
    listenBtn.innerHTML = "Listen";
    document.querySelector('.welcome_area').style.background = null;
    document.querySelector('.welcome_area').style.backgroundImage = "url(img/bg-img/bg-1.jpg)";
    document.querySelector('#head').innerHTML = "Press the Mic/Listen button to search the guns";
  }
  
  
},
// on starting speech recognistion
startSpeechRecognition : (micIcon,searchFormInput)=>{
  micIcon.classList.remove("fa-microphone");
  micIcon.classList.add("fa-microphone-slash");
  searchFormInput.focus();
  console.log("Listening");
},
// on stopping speech recognistion
endSpeechRecognition : (micIcon,searchFormInput)=>{
  micIcon.classList.remove("fa-microphone-slash");
  micIcon.classList.add("fa-microphone");
  searchFormInput.focus();
  console.log("Stopped");
}
  }
})();

var MyMainController = ((UICtrl, MyData)=>{

  var startupSetup = ()=>{
    //get my dom from ui controller
    var DOM = UICtrl.getDom();
   ///DOM
    const searchFormInput = document.querySelector(DOM.searchFormInput);
    const searchForm = document.querySelector(DOM.searchForm);
    const welcomeSection = document.querySelector(DOM.welcome);
    const searchInput = document.querySelector(DOM.searchInput);  


    // Event Listeners
        // search box listener
   searchInput.onchange = (listenBtn)=>{
   let result = MyData.preProcessData(searchInput.value.toLowerCase().trim(), MyData.getGuns().guns);
   console.log("Search Box Search Result: ");
          console.log(result);
   UICtrl.postProcessResults(result,'','search',listenBtn,welcomeSection,searchInput);
        };
   
    if(MyUtil.checkSpeechAvailablity()){
      const recognition = MyUtil.setUpVoiceRecognition();
      UICtrl.addMic(searchForm, searchFormInput);
      // dom manipulation 
      const micBtn = searchForm.querySelector(DOM.micButton);
      const listenBtn = document.querySelector(DOM.listenbutton);
      const micIcon = micBtn.firstElementChild;
    
    /*
     *     Event handlers
     */
    micBtn.addEventListener("click", ()=>UICtrl.micBtnClick(micIcon,recognition,document.getElementById('myLink')));
    listenBtn.addEventListener("click", ()=>UICtrl.micBtnClick(micIcon,recognition,document.getElementById('myLink')));
    recognition.addEventListener("start", ()=>MyUtil.startSpeechRecognition(micIcon,searchFormInput));
    recognition.addEventListener("end", ()=>MyUtil.endSpeechRecognition(micIcon,searchFormInput));
    recognition.addEventListener("result", ()=>{

     /*
      *   if the speech recognition catch the speech 
      */
const current = event.resultIndex;
      // @transcript -> recognised result
      const transcript = event.results[current][0].transcript.toLowerCase().trim();

     /*
      *   if 'stop recording'   stops the recogintion
      */
      if(transcript==="stop recording") {
        console.log("post process");
        MyUtil.stopRecording(recognition,listenBtn, false);
      } else {
          /*
           *   else serch the transcript on our data store
           */

           // assign transcript to searchbox
          searchFormInput.value = transcript;

          // find and add guns to result area if the transcript exist on our data store
          let result = MyData.preProcessData(searchInput.value, MyData.getGuns().guns);
          console.log("Speech Search Result: ");
          console.log(result);
          UICtrl.postProcessResults(result,recognition,'voice',listenBtn,welcomeSection,searchInput);
        }
    });
  
    } else {
      alert("Mic not supported");
        console.log("Mic not supported");
    }

};
return{
  init : function(){
      console.log('App Started');
      startupSetup();
  }
}
})(MyUIController, MyDataController);






MyMainController.init();


