  function* createdGenerator() {
    let count = 0;
    while (count < 1000){
        yield count++;
    }
  }

   const idGenerator = createdGenerator();
   console.log(idGenerator.next().value)
   console.log(idGenerator.next().value)
   console.log(idGenerator.next().value)
   console.log(idGenerator.next().value)
   console.log(idGenerator.next().value)
   console.log(idGenerator.next().value)
   console.log(idGenerator.next().value)

  function* newFontGenerator(baseSize){
    let size = baseSize;
    while(true){
      val = yield size;
    if (val === "up"){
       size=size+2;
    }
    else if(val === "down"){
       size=size-2;
    }
  }}
  const fontGenerator = newFontGenerator(14);
  console.log(fontGenerator.next("up").value);
  console.log(fontGenerator.next("up").value);
  console.log(fontGenerator.next("up").value);
  console.log(fontGenerator.next().value);
  console.log(fontGenerator.next("down").value);
  console.log(fontGenerator.next("down").value);
  console.log(fontGenerator.next("down").value);
  console.log(fontGenerator.next().value);