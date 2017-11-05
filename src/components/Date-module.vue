<template>

</template>

<script>
  const DateGenerate=(function(){
      let DateGenerate1=function(){
        this.init()
      }
      DateGenerate1.prototype={
        init:function(){
          this.current=new Date()
          this.watchDate=new Date()
          this.dateArr=[]
          this.setRelativeDate(this.watchDate)
          this.setData()
        },
        setRelativeDate:function(watchDate){
          this.firstDate=this.getMonthFirstDate(watchDate)
          this.lastDate=this.getMonthLastDate(watchDate)
          this.preMonthDate=this.getPreMonth(watchDate)
          this.nextMonthDate=this.getNextMonth(watchDate)
        },
        getMonthFirstDate:function(date){
          return new Date(date.getFullYear(),date.getMonth(),1);
        },
        getMonthLastDate:function(date){
          var year=date.getFullYear();
          var month=date.getMonth()+1;
          if(month>11){
            month=0; year++;
          }
          var date1=new Date(year,month,1);
          var newDay=new Date(Date.parse(date1)-24*60*60*1000);
          return new Date(date.getFullYear(),date.getMonth(),newDay.getDate());
        },
        getPreMonth:function(date){
          var year=date.getFullYear();
          var month=date.getMonth()-1;
          if(month<0){
            month=11; year--;
          }
          return new Date(year,month,1);
        },
        getNextMonth:function(date){
          var year=date.getFullYear();
          var month=date.getMonth()+1;
          if(month>11){
            month=0; year++;
          }
          return new Date(year,month,1);
        },
        setData:function(){
          this.dateArr=[];
          var day=this.firstDate.getDay();
          var lastDate=this.lastDate.getDate();
          var lastDay=this.lastDate.getDay();
          var year=this.firstDate.getFullYear();
          var month=this.firstDate.getMonth();
          var preMonthYear=this.preMonthDate.getFullYear();
          var preMonth=this.preMonthDate.getMonth();
          var nextMonthYear=this.nextMonthDate.getFullYear();
          var nextMonth=this.nextMonthDate.getMonth();

          if(this.current.getFullYear()===year && this.current.getMonth()===month){
            var nowMonth=true;
            var nowDate=this.current.getDate();
          }

          var preLastDay=this.getMonthLastDate(this.preMonthDate).getDate();
          for(var i=0;i<day;i++){
            var p=preLastDay-day+i+1;
            this.dateArr.push({type:"",date:p,fullDate:this.getYYMMDD(preMonthYear,preMonth,p)});
          }
          for(var i=0;i<lastDate;i++){
            this.dateArr.push({type:"cur-month",date:i+1,fullDate:this.getYYMMDD(year,month,i+1)});
            if(nowMonth){
              if(i+1-day===nowDate){
                this.dateArr[i]["type"]+=" current";
              }
            }
          }
          for(var i=lastDay,j=1; i<6;i++,j++){
            this.dateArr.push({type:"",date:j,fullDate:this.getYYMMDD(nextMonthYear,nextMonth,j)});
          }
          // console.log(this.dateArr);
        },
        getYYMMDD:function(year,month,date){
          month++;
          return year+"/"+month+"/"+date;
        }
      }
      return {
          init: function(){
              return new DateGenerate1()
          }
      }
  })();
  export default{
      dateConstructor:DateGenerate.init(),
  }
</script>
