function Convert_Temp(){
    let val = document.getElementById("input_value");
    let result = document.getElementById("result");
    let input = document.getElementById("input");
    let output = document.getElementById("output");

    val.addEventListener("keyup",Convert_Temp);
    input.addEventListener("change",Convert_Temp);
    output.addEventListener("change",Convert_Temp);

    let inputValue = input.value;
    let outputValue = output.value;

    // Celsius Conversion
    if(inputValue === "celsius" && outputValue === "fahrenheit"){
        result.value = Number((val.value)* 9/5)+ 32;
    } else if(inputValue === "celsius" && outputValue === "kelvin"){
        result.value = Number(val.value)+ 273.15;
    } else if(inputValue === "celsius" && outputValue === "celsius"){
        result.value = val.value;
    }

    // Fahrenheit Conversion
    if(inputValue === "fahrenheit" && outputValue === "celsius"){
        result.value = Number((val.value - 32)* 5)/ 9;
    } else if(inputValue === "fahrenheit" && outputValue === "kelvin"){
        result.value = Number((val.value - 32)* 5/ 9)+ 273.15;
    } else if(inputValue === "fahrenheit" && outputValue === "fahrenheit"){
        result.value = val.value;
    }
    
    // Kelvin Conversion
    if(inputValue === "kelvin" && outputValue === "celsius"){
        result.value = Number(val.value)- 273.15 ;
    } else if(inputValue === "kelvin" && outputValue === "fahrenheit"){
        result.value = Number((val.value - 273.15)* 9/ 5)+ 32;
    } else if(inputValue === "kelvin" && outputValue === "kelvin"){
        result.value = val.value;
    }

    }
    function reset(){
        Convert_Temp();
    }
