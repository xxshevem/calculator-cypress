TC1:  
Given There is https://www.calculator.net/conversion-calculator.html website  
When I select Length   
And I convert 10 Meter to Centimeter  
Then The result is:  10 Meter = 1000 Centimeter  

TC2:  
Given There is https://www.calculator.net/conversion-calculator.html website  
When I select Temperature   
And I convert ‘!"№%:,.;()_)(;.’ value  
Then Next message appeared “Please provide a valid number!”   

TC3:  
Given There is https://www.calculator.net/conversion-calculator.html website  
When I select the length   
And I convert 1000000000000000000000 Meter to Meter  
Then The result is: 1.E+21 Meter (Result: 1000000000000000000000 Meter = 1.E+21 Meter)  

TC4:    
Given There is https://www.calculator.net/conversion-calculator.html website    
When I select the length       
And I convert -1 Meter to Kilometer   
Then The result is: -1 Meter = -0.001 Kilometer  

TC5:      
Given There is https://www.calculator.net/conversion-calculator.html website    
When I select the length       
And I convert 0.00000001 Yard to Kilometer     
Then The result is: 0.00000001 Yard = 9.144E-12 Kilometer    

TC6:      
Given There is https://www.calculator.net/conversion-calculator.html website    
When I select the length       
And I convert 0 Inch to Kilometer   
Then The result is: 0 Inch = 0 Kilometer  

TC7:      
Given There is https://www.calculator.net/conversion-calculator.html website      
When I select the length         
And I convert 1.E-11 Foot to Light Year     
Then The result is: 1.E-11 Foot = 3.22176254E-28 Light Year  

TC8:      
Given There is https://www.calculator.net/conversion-calculator.html website        
When I select the temperature           
And I convert 1.E-11 Fahrenheit to Kelvin       
Then The result is: 1.E-11 Fahrenheit = 255.37222222 Kelvin  

TC9:  
Given There is https://www.calculator.net/conversion-calculator.html website        
When I select the length             
And I convert 1000000000000000000000000000000000000000000000000000000000000000000000000000000000 Meter to Kilometer       
Then The outcome text fits in the form's borders  


![image](https://github.com/xxshevem/calculator-cypress/assets/145334564/07e007de-beba-49d6-a8d4-e9d8419cde36)



