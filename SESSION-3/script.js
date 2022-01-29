let hello = (name) => {
    //body of function
  
      let template=`Hello  <span class="name">${name}</span>`;
      return template;

  };

let Na=hello("Arturo");
document.write(Na);