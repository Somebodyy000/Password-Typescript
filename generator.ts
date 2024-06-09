interface PasswordGeneratorProps {
  type: 'all' | 'l' | 'ln' | 'ls' | 'ns',
  size: number,
  quantity: number,
}

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ['!', '@', '#', '$', '%', '&', '*'];

const all = [...letters, ...numbers, ...symbols];
const ln = [...letters, ...numbers];
const ls = [...letters, ...symbols];
const ns = [...numbers, ...symbols];

const generatePassword = ({ type, size, quantity }: PasswordGeneratorProps): string[] => {
    let password = [];
  
    if (type !== 'all' && type !== 'ln' && type !== 'ls' && type !== 'ns') {
        return "Choose between this types: 'all', 'ln', 'ls', 'ns'.";
    } else if (typeof size !== 'number' || size <= 0) {
        return 'Something seems wrong with the size chosen, please specify the size.';
    } else if (typeof quantity !== 'number' || quantity <= 0) {
        return 'Something seems wrong with the quantity chosen, please specify the quantity.';
    }

    for (let i = 0; i < quantity; i++) {
      if (type === "all") {
        for (let j = 0; j < size; j++) {
          let random = Math.floor(Math.random() * 43);
    
          if (random < 26) { // It is a letter
            let booleanValue = Math.floor(Math.random() * 2); // 1 = true / 0 = false
    
            if (booleanValue) {
              password.push(letters[random].toUpperCase());
            } else {
              password.push(letters[random]);
            }
          } else if (random > 26) {
            password.push(all[random]);
          }
        }
      }
    
      if (type === "l") {
        for (let j = 0; j < size; j++) {
          let random = Math.floor(Math.random() * 26);
          let booleanValue = Math.floor(Math.random() * 2);
  
          if (booleanValue) {
            password.push(letters[random].toUpperCase())
          }
          password.push(letters[random])
        }
      }
  
      if (type === "ln") {
        for (let j = 0; j < size; j++) {
          let random = Math.floor(Math.random() * 36);
    
          if (random < 26) {
            let booleanValue = Math.floor(Math.random() * 2);
    
            if (booleanValue) {
              password.push(letters[random].toUpperCase());
            } else {
              password.push(letters[random]);
            }
          } else if (random > 26) {
            password.push(ln[random]);
          }
        }
      }
  
      if (type === "ls") {
        for (let j = 0; j < size; j++) {
          let random = Math.floor(Math.random() * 33);
    
          if (random < 26) {
            let booleanValue = Math.floor(Math.random() * 2);
    
            if (booleanValue) {
              password.push(letters[random].toUpperCase());
            } else {
              password.push(letters[random]);
            }
          } else if (random > 26) {
            password.push(ls[random]);
          }
        }
      }
  
      if (type === "ns") {
        for (let j = 0; j < size; j++) {
          let random = Math.floor(Math.random() * 17);
    
          password.push(ns[random]);
        }
      }
      
      console.log(password.join(""));
      password = [];
    }
  
  return quantity > 1 ? `Finished ${quantity} options of passwords with ${size} characters` : `Finished ${quantity} option of password with ${size} characters`;
}
