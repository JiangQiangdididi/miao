var jiangqiangdididi={
  chunk:(array,num=1)=>{
    var newArray=[];
    for(var i=0;i<array.length;i+=num){
       newArray.push(array.slice(i,i+num));
    }
    return newArray;
  },
  compact:(array)=>{
    var result=[];
     for(var i=0;i<array.length;i++){
       if(array[i]){
        result.push(array[i]);
       }
     }
     return result;
  },
  concat:(array,...value)=>{
      for(var i=0;i<value.length;i++){
        array.push(value[i]);
      }
      return array;
  },
  difference:(array,...value)=>{
    var result=[];
    var state=1;
    for(var i=0;i<array.length;i++){
      for(var s=0;s<value.length;s++){
        if(value[s].indexOf(array[i])>0){
          state=1;
          break;
        }
      }
      if(state===0){
        result.push(array[i]);
      }
      state=0;
    }
    return result;
  }
}
  
 

