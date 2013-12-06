 /*---------Listeners-----------*/

 		$('button').click(calculate);
 		$('input,select').change(calculate);
 		$('input,select').change(disableEnable);
 		window.onload=disableEnable();
                
                
 /*---------Enable/Disable fields based selections-----------*/
 
 			function disableEnable(){
 					var cat = $('#category').val();
 					var format = $('#format').val();
 					
 					//check input for num value, if not clear field
 					if(isNaN($('#itemCost').val())){ 
	 					alert("Must input numbers only");
	 					document.getElementById('itemCost').value='';
	 					return false;
	 				}
	 				
	 				if(isNaN($('#salePrice').val())){ 
	 					alert("Must input numbers only");
	 					document.getElementById('salePrice').value='';
	 					return false;
	 				}
 					
 					if(isNaN($('#chargedSH').val())){ 
	 					alert("Must input numbers only");
	 					document.getElementById('chargedSH').value='';
	 					return false;
	 				}
	 				
	 					if(isNaN($('#actualSH').val())){ 
	 					alert("Must input numbers only");
	 					document.getElementById('actualSH').value='';
	 					return false;
	 				}
	 				
	 				if(isNaN($('#numPic').val())){ 
	 					alert("Must input numbers only");
	 					document.getElementById('numPic').value='';
	 					return false;
	 				}
 					
 					if(isNaN($('#rPrice').val())){ 
	 					alert("Must input numbers only");
	 					document.getElementById('rPrice').value='';
	 					return false;
	 				}
	 				
	 				if(isNaN($('#customPer').val())){ 
	 					alert("Must input numbers only");
	 					document.getElementById('customPer').value='';
	 					return false;
	 				}
 					
 					if(isNaN($('#customFlat').val())){ 
	 					alert("Must input numbers only");
	 					document.getElementById('customFlat').value='';
	 					return false;
	 				}
	 				
 					
 					if(format ==2 || format == 3){
	 					document.getElementById("reservePrice1").style.display = 'none';
						document.getElementById("reservePrice").checked = false;
						document.getElementById("30day1").style.display = 'block';
 					}
 					else{
	 					document.getElementById("30day1").style.display = 'none';
	 					document.getElementById("reservePrice1").style.display = 'block';
 					}
 					
					if(cat != 16 && cat != 26){
						document.getElementById("day1").style.display = 'none';
						document.getElementById("pictureSer1").style.display = 'none';
						document.getElementById("picture1").style.display = 'none';
						document.getElementById("international1").style.display = 'block';
						document.getElementById("rPrice1").style.display = 'none';
						}
					
					//show/hide subcategory options for business
					if(cat != 5 ){
						document.getElementById("bus1").style.display = 'none';
						}
					else{
						document.getElementById("bus1").style.display = 'block';
					}
					
					//show/hide subcategory options for cameras
					if(cat == 6 && format ==3){
						document.getElementById("camera1").style.display = 'block';
						}
					else{
						document.getElementById("camera1").style.display = 'none';
					}
					
					//show/hide subcategory options for computers
					if(cat == 11 && format ==3){
						document.getElementById("computer1").style.display = 'block';
						}
					else{
						document.getElementById("computer1").style.display = 'none';
					}
					
					//show/hide subcategory options for video games
					if(cat == 34 && format ==3){
						document.getElementById("vGames1").style.display = 'block';
						}
					else{
						document.getElementById("vGames1").style.display = 'none';
					}
					
					//show/hide subcategory options for ebay motors
					if(cat != 16 ){
						document.getElementById("motors1").style.display = 'none';
						document.getElementById("free1").style.display = 'block';
					}
					else{
						document.getElementById("motors1").style.display = 'block';
						document.getElementById("day1").style.display = 'block';
						document.getElementById("pictureSer1").style.display = 'block';
						document.getElementById("picture1").style.display = 'block';
						document.getElementById("international1").style.display = 'none';
						document.getElementById("free1").style.display = 'none';
						document.getElementById("30day1").style.display = 'none';
						
						//check for pic services
						if(document.getElementById('pictureSer').checked){
							document.getElementById("numPic1").style.display = 'block';
						} 
						else{
							document.getElementById("numPic1").style.display = 'none';
						}

					}
					
					//show/hide subcategory options for real estate
					if(cat != 26 ){
						document.getElementById("RE1").style.display = 'none';
					}
					else{
						document.getElementById("RE1").style.display = 'block';
						document.getElementById("day1").style.display = 'block';
						document.getElementById("international1").style.display = 'none';
						document.getElementById("30day1").style.display = 'none';
						document.getElementById("day1").style.display = 'none';
						document.getElementById("free1").style.display = 'none';
						
						if(document.getElementById('reservePrice').checked){
							document.getElementById("rPrice1").style.display = 'block';
							} 
						else{
							document.getElementById("rPrice1").style.display = 'none';
						}
					}
					
					//hide optional pay methods
					if($('#paymentMethod').val()==0){
						document.getElementById("paypal").style.display = 'none';
						document.getElementById("custom").style.display = 'none';
					}
					
		
					
				}

 
/*---------Calculations (non-Motors & non-Real Estate)-----*/
                
	 		function calculate() {
	 			var rPrice = parseFloat($('#rPrice').val())|| 0; 
	 			var format = $('#format').val();
	 			var insertFees = 0;
	 			var totalFees = 0;
	 			var upgrades = 0;
	 			var salePrice = parseFloat($('#salePrice').val())|| 0;
	 			var chargedSH = parseFloat($('#chargedSH').val())|| 0;
	 			var totalSale = salePrice + chargedSH;
	 			var cat = $('#category').val();
	 			var powerSeller = $('#powerSeller').val();
	 			var finalFee = 0;
	 			var feeHolder = 0;
	 			var payFee = 0;
	 			var itemCost = parseFloat($('#itemCost').val())|| 0;
	 			var actualSH = parseFloat($('#actualSH').val())|| 0;
	 			var netProfit = 0;
	 			var combinedFees = 0;
	 					
	 	
	 		/*---------Non-Motors & Non-Real Estate Calculations-----*/	
			
				// excluding motors and RE cats
				if(cat != 16 && cat != 26 ){
				
					//deteriming insert fee for store vs. non-store listings
					if(format !=0 && format!=3){
						insertFees = 0.30;
					}
					else{
						insertFees = 0.20;
					}
						
					//setting fees for listings less than 30 days 				
					if(!document.getElementById('30day').checked){
						if(document.getElementById('free').checked){
							insertFees = 0.0;
						}
								
						//calculating value pack option and hiding features in value pack		
						if(document.getElementById('valuePack').checked){
							document.getElementById("gallery").checked = false;
							document.getElementById("gallery1").disabled = true;
							document.getElementById("listingDesigner1").disabled = true;
							document.getElementById("listingDesigner").checked = false;
							document.getElementById("subtitle1").disabled = true;
							document.getElementById("subtitle").checked = false;
							upgrades = 0.65;
						}
						else{
							document.getElementById("gallery1").disabled = false;
							document.getElementById("listingDesigner1").disabled = false;
							document.getElementById("subtitle1").disabled = false;
		
						}
								
						if(format ==1 && document.getElementById('international').checked){
							upgrades = upgrades + 0.10;
						}
							
						if((format == 2 || format == 3) && document.getElementById('international').checked){
							upgrades = upgrades + 0.50;
						}
						
						if(document.getElementById('gallery').checked){
							upgrades = upgrades+ 0.35;
						}
						
						if(document.getElementById('listingDesigner').checked){
							upgrades = upgrades+ 0.10;
						}
						
						if(document.getElementById('subtitle').checked){
							upgrades = upgrades+ 0.50;
						}
		
						if(document.getElementById('bold').checked){
							upgrades = upgrades+ 2.00;
						}
						
						if(document.getElementById('reservePrice').checked){
							upgrades = upgrades+ 2.00;
						}
					}
					
					//calculating fees for 30 day listings
					else{
						if(document.getElementById('free').checked){
							insertFees = 0.0;
						}
						//calculating value pack option and hiding features in value pack
						if(document.getElementById('valuePack').checked){
							document.getElementById("gallery").checked = false;
							document.getElementById("gallery1").disabled = true;
							document.getElementById("listingDesigner1").disabled = true;
							document.getElementById("listingDesigner").checked = false;
							document.getElementById("subtitle1").disabled = true;
							document.getElementById("subtitle").checked = false;
							upgrades = 2.00;
						}
						else{
							document.getElementById("gallery1").disabled = false;
							document.getElementById("listingDesigner1").disabled = false;
							document.getElementById("subtitle1").disabled = false;
						}
								
						if(document.getElementById('international').checked){
							upgrades = upgrades + 0.50;
						}
							
						if(document.getElementById('gallery').checked){
							upgrades = upgrades+ 1.00;
						}
						
						if(document.getElementById('listingDesigner').checked){
							upgrades = upgrades+ 0.30;
						}
						
						if(document.getElementById('subtitle').checked){
							upgrades = upgrades+ 1.50;
						}
		
						if(document.getElementById('bold').checked){
							upgrades = upgrades+ 4.00;
						}
					}
					
					//setting insert and final fee for bus sub category exceptions
					if(cat ==5 && !document.getElementById('busOther').checked){
						insertFees = 20;
						finalFee = totalSale* 0.04;
						
						if(powerSeller == 2){
							finalFee = finalFee * 0.8;
						}
						
					}
					//setting final fees for all except BUS,Motors & RE
					else{
						//calucating all non-store fees of 10%
						if(format !=3){
							finalFee = totalSale* 0.1;
						}
						
						//Calculating all store fees, 9% except coins, comp, camera, consumer elc, music inst, stamps, video
						else{
							finalFee = totalSale* 0.09;
							
							if(cat==9 || cat==12 || cat==30){
								finalFee = totalSale* 0.06;
							}
							if(cat==23){
								finalFee = totalSale* 0.07;
							}
							if(cat==6){
								feeHolder = $('#camera').val();
								finalFee= (totalSale*feeHolder)/100;
							}
							if(cat==11){
								feeHolder = $('#computer').val();
								finalFee= (totalSale*feeHolder)/100;				
							}
							
							if(cat==34){
								feeHolder = $('#vGames').val();
								finalFee= (totalSale*feeHolder)/100;  
							}
						
						}
						
						//Adding in Power Seller discount
						if(powerSeller == 2){
							finalFee = finalFee * 0.8;
						}
					
					}
					if(finalFee > 250){
						finalFee = 250;
					}
					
					 totalFees = insertFees+upgrades+finalFee;
					}
	
					/*---------Motors Calculations-----*/
					if(cat == 16){
					//setting insert and final fees for low volume sellers
						if($('#motorsSeller').val() == 1){
							insertFees = 0;
							
							if($('#motors').val()!=3 && totalSale < 2000 ){
								finalFee = 60;
								}
								
							if($('#motors').val()==3){
								finalFee = 10;
							}
							
							if($('#motors').val()!=3 && totalSale > 2000 ){
								finalFee = 125;
							}
						}
						
					//setting insert and final fees for high volume sellers	
						if($('#motorsSeller').val() == 2){
							if($('#motors').val()==1){
								insertFees = 50;
								finalFee = 0;
							}
							
							if(($('#motors').val()==2 || $('#motors').val()==4) && totalSale < 5000 ){
								insertFees = 20;
								finalFee = 30;
							}
							
							if(($('#motors').val()==2 || $('#motors').val()==4) && totalSale > 5000 ){
								insertFees = 20;
								finalFee = 60;
							}
							
							if($('#motors').val()==3){
								insertFees = 10;
								finalFee = 10;
							}							
						}
				
						//calculating value pack option and hiding features in value pack		
						if(document.getElementById('valuePack').checked){
							document.getElementById("gallery").checked = false;
							document.getElementById("gallery1").disabled = true;
							document.getElementById("listingDesigner1").disabled = true;
							document.getElementById("listingDesigner").checked = false;
							document.getElementById("subtitle1").disabled = true;
							document.getElementById("subtitle").checked = false;
							upgrades = 7;
						}
						else{
							document.getElementById("gallery1").disabled = false;
							document.getElementById("listingDesigner1").disabled = false;
							document.getElementById("subtitle1").disabled = false;
						}
		
						if(document.getElementById('gallery').checked){
							upgrades = upgrades+ 2;
						}
						
						if(document.getElementById('listingDesigner').checked){
							upgrades = upgrades+ 5;
						}
						
						if(document.getElementById('subtitle').checked){
							upgrades = upgrades+ 3;
						}
		
						if(document.getElementById('bold').checked){
							upgrades = upgrades+ 5;
						}
						
						if(document.getElementById('reservePrice').checked){
							upgrades = upgrades+ 15;
						}
						
						if(document.getElementById('10day').checked){
							upgrades = upgrades+ 18;
						}
						
						if(document.getElementById('21day').checked){
							upgrades = upgrades+ 40;
						}
						
						if(document.getElementById('picture').checked){
							upgrades = upgrades+ 2;
						}
						
						if(document.getElementById('pictureSer').checked && $('#numPic').val()>4){
							upgrades = upgrades+ (.15*($('#numPic').val()-4));
						}
									
					 totalFees = insertFees+upgrades+finalFee;
					}
	
					/*---------Real Estate Calculations-----*/
					if(cat == 26){
					
						if(format ==1){
							//setting fees for auctions of Timeshare, Land and Manufactured homes
							if($('#RE').val() == 1 && $('#duration').val() == 7  ){
								insertFees = 35;
								finalFee =35;
							}
							
							if($('#RE').val() == 1 && $('#duration').val() == 10){
								insertFees = 35.4;
								finalFee =35;
							}
							
							if($('#RE').val() == 1 && $('#duration').val() == 30  ){
								insertFees = 50;
								finalFee =35;
							}
							
							//setting fees for auctions of Residential, Commercial and Other Real Estate
							if($('#RE').val() == 2 && $('#duration').val() == 7  ){
								insertFees = 100;
								finalFee =0;
							}
							
							if($('#RE').val() == 2 && $('#duration').val() == 10){
								insertFees = 100.4;
								finalFee =0;
							}
							
							if($('#RE').val() == 2 && $('#duration').val() == 30  ){
								insertFees = 150;
								finalFee =0;
							}
							
							//calculating value pack option and hiding features in value pack		
							if(document.getElementById('valuePack').checked){
								document.getElementById("gallery").checked = false;
								document.getElementById("gallery1").disabled = true;
								document.getElementById("listingDesigner1").disabled = true;
								document.getElementById("listingDesigner").checked = false;
								document.getElementById("subtitle1").disabled = true;
								document.getElementById("subtitle").checked = false;
								upgrades = .65;
							}
							else{
								document.getElementById("gallery1").disabled = false;
								document.getElementById("listingDesigner1").disabled = false;
								document.getElementById("subtitle1").disabled = false;
			
							}
									
							if(document.getElementById('gallery').checked){
								upgrades = upgrades+ .35;
							}
							
							if(document.getElementById('listingDesigner').checked){
								upgrades = upgrades+ .10;
							}
							
							if(document.getElementById('subtitle').checked){
								upgrades = upgrades+ .5;
							}
			
							if(document.getElementById('bold').checked){
								upgrades = upgrades+ 2;
							}
						}
					
						if(format !=1){
							//setting fees for fixed of Timeshare, Land and Manufactured homes
							if($('#RE').val() == 1 && $('#duration').val() != 30){
								insertFees = 35;
								finalFee =0;
							}
							
							if($('#RE').val() == 1 && $('#duration').val() == 30){
								insertFees = 50;
								finalFee =0;
							}
							
							//setting fees for auctions of Residential, Commercial and Other Real Estate
							if($('#RE').val() == 2 && $('#duration').val() != 30){
								insertFees = 100;
								finalFee =0;
							}
							
							if($('#RE').val() == 2 && $('#duration').val() == 30){
								insertFees = 150;
								finalFee =0;
							}
							
							//setting fixed upgrade fees
							if($('#RE').val() == 1){
								//calculating value pack option and hiding features in value pack		
								if(document.getElementById('valuePack').checked){
									document.getElementById("gallery").checked = false;
									document.getElementById("gallery1").disabled = true;
									document.getElementById("listingDesigner1").disabled = true;
									document.getElementById("listingDesigner").checked = false;
									document.getElementById("subtitle1").disabled = true;
									document.getElementById("subtitle").checked = false;
									upgrades = 2;
								}
								else{
									document.getElementById("gallery1").disabled = false;
									document.getElementById("listingDesigner1").disabled = false;
									document.getElementById("subtitle1").disabled = false;
								}
										
								if(document.getElementById('gallery').checked){
									upgrades = upgrades+ 1;
								}
								
								if(document.getElementById('listingDesigner').checked){
									upgrades = upgrades+ .30;
								}
								
								if(document.getElementById('subtitle').checked){
									upgrades = upgrades+ 1.5;
								}
				
								if(document.getElementById('bold').checked){
									upgrades = upgrades+ 4;
								}
							}
							else{
								//calculating value pack option and hiding features in value pack		
								if(document.getElementById('valuePack').checked){
									document.getElementById("gallery").checked = false;
									document.getElementById("gallery1").disabled = true;
									document.getElementById("listingDesigner1").disabled = true;
									document.getElementById("listingDesigner").checked = false;
									document.getElementById("subtitle1").disabled = true;
									document.getElementById("subtitle").checked = false;
									upgrades = .65;
								}
								else{
									document.getElementById("gallery1").disabled = false;
									document.getElementById("listingDesigner1").disabled = false;
									document.getElementById("subtitle1").disabled = false;
				
								}
													
								if(document.getElementById('gallery').checked){
									upgrades = upgrades+ .35;
								}
								
								if(document.getElementById('listingDesigner').checked){
									upgrades = upgrades+ .10;
								}
								
								if(document.getElementById('subtitle').checked){
									upgrades = upgrades+ 0.5;
								}
				
								if(document.getElementById('bold').checked){
									upgrades = upgrades+ 2;
								}
								
							}
						}
						
					//checking for reserve and adding it to upgrade
					if(document.getElementById('reservePrice').checked){
						rPrice = rPrice* 0.01;
						
						//change price if it is over res max
						if(rPrice > 199.99){
							rPrice = 200;
						}
						upgrades = upgrades+ rPrice;
					}
									
					totalFees = insertFees+upgrades+finalFee;
					}
				
			
					/*---------Payment Fee Calculations-----*/
					
					if($('#paymentMethod').val()==3){
						payFee = 0;	
						document.getElementById("custom").style.display = 'none';
						document.getElementById("paypal").style.display = 'none';
						
					}
					
					if($('#paymentMethod').val()==1){
						document.getElementById("paypal").style.display = 'block';
						
						if($('#paypalDrop').val()==1){
							if(document.getElementById('paypalInt').checked){
								payFee= (totalSale * 0.039)+ 0.3;
								document.getElementById("custom").style.display = 'none';
							}
							else{
								payFee= (totalSale * 0.029)+ 0.3;
								document.getElementById("custom").style.display = 'none';
							}
						}
						
						if($('#paypalDrop').val()==2){
						
							if(document.getElementById('paypalInt').checked){
								payFee= (totalSale * 0.035)+ 0.3;
								document.getElementById("custom").style.display = 'none';
							}
							else{
								payFee= (totalSale * 0.025)+ 0.3;
								document.getElementById("custom").style.display = 'none';
							}
						}
						
						if($('#paypalDrop').val()==3){
						
							if(document.getElementById('paypalInt').checked){
								payFee= (totalSale * 0.032)+ 0.3;
								document.getElementById("custom").style.display = 'none';
							}
							else{
								payFee= (totalSale * 0.022)+ 0.3;
								document.getElementById("custom").style.display = 'none';
							}
						}
						
						if($('#paypalDrop').val()==4){
						
							if(document.getElementById('paypalInt').checked){
								payFee= (totalSale * 0.029)+ 0.3;
								document.getElementById("custom").style.display = 'none';
							}
							else{
								payFee= (totalSale * 0.019)+ 0.3;
								document.getElementById("custom").style.display = 'none';
							}
						}
						
						if($('#paypalDrop').val()==5){
						
							if(document.getElementById('paypalInt').checked){
								payFee= (totalSale * 0.06)+ 0.05;
								document.getElementById("custom").style.display = 'none';
							}
							else{
								payFee= (totalSale * 0.05)+ 0.05;
								document.getElementById("custom").style.display = 'none';
							}
						}
						
						if($('#paypalDrop').val()==6){
							document.getElementById("paypalInt").checked = false;
							document.getElementById("paypalInt").disabled = true;
							document.getElementById("custom").style.display = 'block';
							payFee = (parseFloat($('#customFlat').val())|| 0)+(($('#customPer').val()/100)* totalSale);
						}
						
					}
					
					if($('#paymentMethod').val()==2){
						document.getElementById("paypal").style.display = 'none';
						document.getElementById("custom").style.display = 'block';
						payFee = (parseFloat($('#customFlat').val())|| 0)+(($('#customPer').val()/100)* totalSale);	
						}
					
					combinedFees = totalFees + payFee;
					netProfit = totalSale - payFee - totalFees - itemCost - actualSH;
	
					$('#outInsert').html(parseFloat(insertFees).toFixed(2));
					$('#outUpgrades').html(parseFloat(upgrades).toFixed(2));
					$('#outFinal').html(parseFloat(finalFee).toFixed(2));
					$('#outTotal').html(parseFloat(totalFees).toFixed(2));
					$('#outPayment').html(parseFloat(payFee).toFixed(2));
					$('#outFees').html(parseFloat(combinedFees).toFixed(2));
					$('#outProfit').html(parseFloat(netProfit).toFixed(2));                      
	 		}
                
      
				
