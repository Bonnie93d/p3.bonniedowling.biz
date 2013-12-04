 /*---------Listeners-----------*/

 		$('button').click(calculate);
 		$('input,select').change(calculate);
 		window.onload=disable_enable();
 		$('input,select').change(disable_enable);
                
                
 /*---------Calcutations-----------*/
 
 function disable_enable(){
 					var cat = $('#category').val();
 					var format = $('#format').val();
 					
 					if(format !=1){
	 					document.getElementById("reservePrice1").style.display = 'none'
						document.getElementById("reservePrice").checked = false;
 					}
 					
					if (cat != 16 && cat != 26){
						document.getElementById("day1").style.display = 'none'
						document.getElementById("day").checked = false;
						document.getElementById("pictureSer1").style.display = 'none'
						document.getElementById("pictureSer").checked = false;
						document.getElementById("picture1").style.display = 'none'
						document.getElementById("picture").checked = false;
						document.getElementById("international1").style.display = 'block'
						document.getElementById("rPrice1").style.display = 'none'
						}
					
					//show/hide subcategory options for business
					if (cat != 5 ){
						document.getElementById("bus1").style.display = 'none'
						document.getElementById("bus").checked = false;
						}
					else{
						document.getElementById("bus1").style.display = 'block'
	
					}
					//show/hide subcategory options for ebay motors
					if (cat != 16 ){
						document.getElementById("motors1").style.display = 'none'
						document.getElementById("motors").checked = false;
						}
					else{
						document.getElementById("motors1").style.display = 'block'
						document.getElementById("day1").style.display = 'block'
						document.getElementById("pictureSer1").style.display = 'block'
						document.getElementById("picture1").style.display = 'block'
						document.getElementById("international1").style.display = 'none'
						
						//check for pic services
						if (document.getElementById('pictureSer').checked){
							document.getElementById("numPic1").style.display = 'block'
						} 
						else{
							document.getElementById("numPic1").style.display = 'none'
						}

						//check for reserve price
						if (document.getElementById('reservePrice').checked){
							document.getElementById("rPrice1").style.display = 'block'
							} 
						else{
							document.getElementById("rPrice1").style.display = 'none'
						}
		
						}
					
					//show/hide subcategory options for real estate
					if (cat != 26 ){
						document.getElementById("RE1").style.display = 'none'
						document.getElementById("RE").checked = false;
						}
					else{
						document.getElementById("RE1").style.display = 'block'
						document.getElementById("day1").style.display = 'block'
						document.getElementById("international1").style.display = 'none'
					}
					
					
					//hide value pack items when value pack is checked
					if (document.getElementById('valuePack').checked){
						document.getElementById("gallery").checked = false;
						document.getElementById("gallery1").style.display = 'none'
						document.getElementById("listingDesigner1").style.display = 'none'
						document.getElementById("listingDesigner").checked = false;
						document.getElementById("subtitle1").style.display = 'none'
						document.getElementById("subtitle").checked = false;
					}
					else{
						document.getElementById("gallery1").style.display = 'block'
						document.getElementById("listingDesigner1").style.display = 'block'
						document.getElementById("subtitle1").style.display = 'block'

					}
					
				}

 

                
 		function calculate() {
 			var budget = $('#budget').val();
 			var format = $('#format').val();
 			var services = $('input[name=services]:checked');
 			var insertFees = 0;
 			
 			var totalFees = 0;
 			var upgrades = 0;
 			//var dis1 = '78';
 			var cat = $('#category').val();
 					
			
			if (cat != 16 && cat != 26 ){
			console.log('start');
				if(format !=0 && format!=3){
						insertFees = 0.30;
					}
					else{
						insertFees = 0.20;
					}
					
									
				console.log('Gallery');
				if (document.getElementById('free').checked){
						insertFees = 0.0;
						}
				if (document.getElementById('valuePack').checked){
						document.getElementById("gallery").checked = false;
						document.getElementById("gallery1").style.display = 'none'
						document.getElementById("listingDesigner1").style.display = 'none'
						document.getElementById("listingDesigner").checked = false;
						document.getElementById("subtitle1").style.display = 'none'
						document.getElementById("subtitle").checked = false;
						upgrades = 0.65;
						}
				else{
						document.getElementById("gallery1").style.display = 'block'
						document.getElementById("listingDesigner1").style.display = 'block'
						document.getElementById("subtitle1").style.display = 'block'

					}
						
				if(format ==1 && document.getElementById('international').checked){
						upgrades = upgrades + 0.10;
					}
					
				if((format == 2 || format == 3) && document.getElementById('international').checked){
						upgrades = upgrades + 0.50;
					}
				

				if (document.getElementById('gallery').checked){
						upgrades = upgrades+ 0.35;
						}
				if (document.getElementById('listingDesigner').checked){
						upgrades = upgrades+ 0.10;
						}
				if (document.getElementById('subtitle').checked){
						upgrades = upgrades+ 0.50;
						}

				if (document.getElementById('bold').checked){
						upgrades = upgrades+ 2.00;
						}
				if (document.getElementById('reservePrice').checked){
						upgrades = upgrades+ 2.00;
						}
					
				 console.log(insertFees); 
				 console.log(upgrades);	
				 totalFees = insertFees+upgrades;
				}
	
			
		
				
 			
 

				

			$('#insertOut').html(parseFloat(insertFees).toFixed(2));
			$('#insertOut1').html(parseFloat(upgrades).toFixed(2));
			$('#insertOut2').html(parseFloat(totalFees).toFixed(2));
                        

                        
                }
                
      
				
