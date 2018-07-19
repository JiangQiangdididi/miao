var jiangqiangdididi={
  chunk:function(array,num=1){
    var newArray=[];
    for(var i=0;i<array.length;i+=num){
       newArray.push(array.slice(i,i+num));
    }
    return newArray;
  },
  compact:function(array){
    var result=[];
     for(var i=0;i<array.length;i++){
       if(array[i]){
        result.push(array[i]);
       }
     }
     return result;
  },
  concat:function(array,...value){
      for(var i=0;i<value.length;i++){
        array.push(value[i]);
      }
      return array;
  },
  difference:function(array,...value){
    var result=[];
    var state=0;
    for(var i=0;i<array.length;i++){
      for(var s=0;s<value.length;s++){
        if(value[s].indexOf(array[i])>=0){
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
  },
  /**
   * 
   */
  differenceby:function(array,[values],[iteratee=_.identity]){
      var result;
      
  },
  drop:function(array,n=1){
    for(var s=0;s<n;s++){
      array.shift();
    }
    return array;
  },
  dropRight:function(array,n=1){
    for(var s=0;s<n;s++){
      array.pop();
    }
    return array;
  },
  dropRightWhile:function(array,select){
    array.filter((x)=>{
      return x
    })
    return array;
  },
  /**
   *使用一个值填充数组
   */
  fill:function(array,value,start=0,end=array.length){
    for(var i=start;i<end;i++){
      array[i]=value;
    }
  },
  /**
   * 用predicate过滤，从头查找符合条件的第一个索引
   */
  findIndex:function(array,predicate=this.identity,fromIndex=0){
    var result=0;
    for (let index = fromIndex; index < array.length; index++) {
      if(predicate)
       return index;
    }
    return -1;
  },
    /**
   * 用predicate过滤，从头查找符合条件的最后一个一个索引
   */
  findLastIndex:function(array,predicate=this.identity,fromIndex=array.length){
    var result=0;
    for (let index = fromIndex; index > 0; index--) {
      if(predicate)
       return index;
    }
    return -1;
  },
  property:function(propName){
      return function(obj){
        return obj.propName;
      }
  },
  sum:function(ary){
    return this.sumBy(ary,value=>value);
  },  
  /**
   * 被迭代方法还没写
   */
  sumBy:function(ary,iteratee){
    var result=0;
    for(var i=0;i<ary.length;i++){
      result+=iteratee(ary[i]);
    }
    return result;
  },  
  /**
   * 基本工具类的实现
   */
  identity:function(value){
      return value;
  }
}
  
 

