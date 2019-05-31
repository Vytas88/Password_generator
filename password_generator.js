/*
Sequence for generated password:
1. Last character of the service name
2. Character of service at index of vowels count of service (1-based, if no vowels, take first character)
3. Full ‘Basic’ password
4. Number of non-vowel characters of service
5. Service name first character
Example for testing:passGenerator('password', 'netflix') // result: ‘xepassword5n'
*/



document.getElementById("submit_button").addEventListener("click", function(){


      var basic_password = document.getElementById("basic_password").value;
      var service_name = document.getElementById("service_name").value;
      let output = document.getElementById("output");

      // 1. Last character of service name
      var lastChar = service_name.substring(service_name.length - 1);
      console.log(lastChar + " is the last letter of the Service Name");

      //2. Character of service at index of vowels count of service (1-based, if no vowels, take first character

      var matches = service_name.match(/[aeiou]/gi);
      var count = matches ? matches.length - 1 : 0;
      console.log(count + " vowel(s) in the Service Name");

      var convertedArray  = [...service_name];
      console.log(convertedArray);
      var letterCount = convertedArray[count];
      console.log(convertedArray[count]);

      //4. Count consonants

      var consonants = service_name.match(/[bcdfgjklmnpqrstvwxz]/gi);
      var count2 = consonants ? consonants.length : 0;
      console.log(count2 + " consonant(s) in the Service Name");

      //5. Service name first character

      var firstChar = service_name.charAt(0);
      console.log(service_name.charAt(0) + " is the first character of the Service Name");
      //Output

      var par1 = document.createElement("span");
      var par2 = document.createElement("span");
      var par3 = document.createElement("span");
      var par4 = document.createElement("span");
      var par5 = document.createElement("span");
      par1.textContent = lastChar;
      par2.textContent = letterCount;
      par3.textContent = basic_password;
      par4.textContent = count2;
      par5.textContent = firstChar;
      output.appendChild(par1);
      output.appendChild(par2);
      output.appendChild(par3);
      output.appendChild(par4);
      output.appendChild(par5);


      //labas. dvi a raides, tureciau grazinti pirmaja a raide nes yra dvi balses a ir gaunasi
      //skaicius 2, kuria reikia grazinti nuo pradzios
      //ernestas. 3balses, tureciau grazint 3cia raide is vardo, tokia kiek tu raidziu yra, tai grazins n

});
