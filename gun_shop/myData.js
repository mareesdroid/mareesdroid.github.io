export function hello() {
    return ()=>{
        var DOMStrings = {
          searchForm : '#form-pass',
          searchFormInput : '#form-pass input',
          micButton : 'button',
          listenbutton : '#myLink',
          welcome : '.serach_content',
          placeHolder : '.place_hold',
          searchInput : '#headerSearch',
          gunImage : 'ex',
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
          let gun = document.getElementById(DOMStrings.gunImage).style;
          gun.color = "#f26e51";
          gun.top = "25px";
          gun.left = "25px";
          document.querySelector(DOMStrings.cartArea).addEventListener("click", ()=>showHome(welcomeSection));
          MyUtil.stopRecording(recognition,listenBtn);
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
            MyUtil.stopRecording(recognition,listenBtn);
        
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
          MyUtil.stopRecording(recognition,listenBtn);
          plotDatas(result, document.querySelector(DOMStrings.placeHolder),welcomeSection,recognition,listenBtn);
        }
      }
      }
  }