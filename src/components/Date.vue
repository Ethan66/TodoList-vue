<template>
  <div id="date">
    <!--<img src="../assets/mountain.jpeg" />-->
    <div class="e-img">
      <!--<p class="e-showDate">
          <i class="e-arrow e-left"><</i>
          <span class='e-show'>2017-08</span>
          <i class="e-arrow e-right">></i>
      </p>-->
    </div>
    <div class="e-date">
      <!--<table class="e-table">
      <tr>
      <th>日</th>
      <th>一</th>
      <th>二</th>
      <th>三</th>
      <th>四</th>
      <th>五</th>
      <th>六</th>
      </tr>
      <tr>
      <td data-date="31"><span>31</span></td>
      <td class="cur-month" data-date="1"><span>1</span></td>
      <td class="cur-month current" data-date="1"><span>2</span></td>
      <td class="cur-month" data-date="2"><span>3</span></td>
      <td class="cur-month" data-date="3"><span>4</span></td>
      <td class="cur-month" data-date="4"><span>5</span></td>
      <td class="cur-month" data-date="5"><span>6</span></td>
      </tr>
      <tr>
      <td class="cur-month" data-date="7"><span>7</span></td>
      <td class="cur-month" data-date="8"><span>8</span></td>
      <td class="cur-month" data-date="9"><span>9</span></td>
      <td class="cur-month" data-date="10"><span>10</span></td>
      <td class="cur-month" data-date="11"><span>11</span></td>
      <td class="cur-month" data-date="12"><span>12</span></td>
      <td class="cur-month" data-date="13"><span>13</span></td>
      </tr>
      <tr>
      <td class="cur-month" data-date="31"><span>31</span></td>
      <td class="cur-month" data-date="1"><span>1</span></td>
      <td class="cur-month"><span class="current">2</span></td>
      <td class="cur-month" data-date="2"><span>3</span></td>
      <td class="cur-month" data-date="3"><span>4</span></td>
      <td class="cur-month" data-date="4"><span>5</span></td>
      <td class="cur-month" data-date="5"><span>6</span></td>
      </tr>
      <tr>
      <td class="cur-month" data-date="7"><span>7</span></td>
      <td class="cur-month" data-date="8"><span>8</span></td>
      <td class="cur-month" data-date="9"><span>9</span></td>
      <td class="cur-month" data-date="10"><span>10</span></td>
      <td class="cur-month" data-date="11"><span>11</span></td>
      <td class="cur-month" data-date="12"><span>12</span></td>
      <td class="cur-month" data-date="13"><span>13</span></td>
      </tr>
      </table>-->
    </div>
  </div>
</template>

<script>
  import $ from "jquery"

  export default{
      mounted(){
        var DatePicker=(function(){

          var Date1=function($ct,$ctPrev){
            this.init($ct,$ctPrev);
            this.bind();
          }
          Date1.prototype.init=function($ct,$ctPrev){
            this.$ct=$ct;
            this.$ctPrev=$ctPrev;
            this.current=new Date();
            this.watchDate=new Date();
            this.dateArr=[];
            this.setRelativeDate(this.watchDate);
            this.setData();
            this.renderShow(this.$ctPrev);
            this.renderDate(this.$ct);
          }
          Date1.prototype.setRelativeDate=function(watchDate){
            this.firstDate=this.getMonthFirstDate(watchDate);
            this.lastDate=this.getMonthLastDate(watchDate);
            this.preMonthDate=this.getPreMonth(watchDate);
            this.nextMonthDate=this.getNextMonth(watchDate);
          }
          Date1.prototype.bind=function(){
            var self=this;
            self.$ctPrev.on("click",".e-left",function(){
              self.watchDate=self.preMonthDate;
              self.setRelativeDate(self.watchDate);
              self.setData();
              self.renderShow(self.$ctPrev);
              self.renderDate(self.$ct);
            });
            self.$ctPrev.on("click",".e-right",function(){
              self.watchDate=self.nextMonthDate;
              self.setRelativeDate(self.watchDate);
              self.setData();
              self.renderShow(self.$ctPrev);
              self.renderDate(self.$ct);
            });
          }

          Date1.prototype.getMonthFirstDate=function(date){
            return new Date(date.getFullYear(),date.getMonth(),1);
          }
          Date1.prototype.getMonthLastDate=function(date){
            var year=date.getFullYear();
            var month=date.getMonth()+1;
            if(month>11){
              month=0; year++;
            }
            var date1=new Date(year,month,1);
            var newDay=new Date(Date.parse(date1)-24*60*60*1000);
            return new Date(date.getFullYear(),date.getMonth(),newDay.getDate());
          }
          Date1.prototype.getPreMonth=function(date){
            var year=date.getFullYear();
            var month=date.getMonth()-1;
            if(month<0){
              month=11; year--;
            }
            return new Date(year,month,1);
          }
          Date1.prototype.getNextMonth=function(date){
            var year=date.getFullYear();
            var month=date.getMonth()+1;
            if(month>11){
              month=0; year++;
            }
            return new Date(year,month,1);
          }
          Date1.prototype.setData=function(){
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
                if(i+1===nowDate){
                  this.dateArr[i]["type"]+=" current";
                }
              }
            }
            for(var i=lastDay,j=1; i<6;i++,j++){
              this.dateArr.push({type:"",date:j,fullDate:this.getYYMMDD(nextMonthYear,nextMonth,j)});
            }
            // console.log(this.dateArr);
          }
          Date1.prototype.getYYMMDD=function(year,month,date){
            month++;
            return year+"/"+month+"/"+date;
          }
          Date1.prototype.renderShow=function($ctPre){
            var year=this.watchDate.getFullYear();
            var month=this.watchDate.getMonth()+1;
            var html="<p class='e-showDate'><i class='e-arrow e-left'><</i><span class='e-show'>"+year+"-"+month+"</span><i class='e-arrow e-right'>></i></p>";
           // console.log(html);
            $ctPre.html(html);
          }
          Date1.prototype.renderDate=function($ct){
            var html="<table class='e-table'><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>";
            for(var i=0;i<this.dateArr.length;i++){
              if(i==0){
                html+="<tr><td class='"+this.dateArr[i].type+"'>"+this.dateArr[i].date+"</td>";
              }
              else{
                html+="<td class='"+this.dateArr[i].type+"'>"+this.dateArr[i].date+"</td>";
                if(i%7==6){
                  html+="</tr><tr>";
                }
              }
            }
            html+='</tr>';
            html=html.slice(0,-9);
            // console.log(html);
            $ct.html(html);
          }
          return {
            init: function($ct){
              $ct.each(function(index,value){
                new Date1($(this),$(this).prev());
              })
            }
          }
        })();
        DatePicker.init($(".e-date"));
      }
  }
</script>

<style lang='scss'>
  #date{
    background: #fff; overflow: hidden;
    >.e-img{
      padding: 85px 0 55px; background: url(../assets/mountain.jpeg) no-repeat; background-position: -300px -180px;
      margin-top: -20px;
    }
    .e-showDate{
      text-align: center; color: #fff; font-size: 28px; position: relative;
      span{
        text-shadow: 0 3px 3px rgba(0,0,0,.6);
      }
      .e-arrow{
        display: block; width: 26px; height: 26px; line-height: 26px; border-radius: 50%; font-size: 18px; background: rgba(0,0,0,.2); color: #fff;
        position: absolute; top: 2px; left: 60px; cursor: pointer; transition: all .4s;
        &:hover{
          background: rgba(0,0,0,.4);
        }
        &.e-right{
          left: auto; right: 60px; top: 1px;
        }
      }
    }
    .e-date{
      padding: 8px 16px;
      .e-table{
        width: 100%;
        th{
          color: #B4B4B4; width: 14.2857142857%; line-height: 50px; font-weight: normal;
        }
        td{
          text-align: center; line-height: 48px; font-size: 18px; color: #B4B4B4;
          &.cur-month{
            color: #333;
          }
          &.current{
            display: block; width: 36px; height: 36px; line-height: 38px; margin: 7px auto 0; color: #fff; background: #31C1FD; border-radius: 50%;
          }
        }


      }
    }
  }
</style>
