var taObj = new Array();
   taObj = ["",-1,0,"",0,"",""];
   var ta_val = slctn = ta_s1 = ta_s2 = newValue = "";
   var ta_ss = ta_se = sl = 0;



function st_lmnt(){
   var ndx = document.getElementById("ndx_slct_0").selectedIndex;
   var pts = document.getElementById("ndx_slct_0").options;
   st_crsr_pstn();
   pst(taObj,pts[ndx].text);
}



function st_crsr_pstn(){
   var ta = document.getElementById("ndx_ta_0");
   ta_val = ta.value;
   ta_ss = ta.selectionStart;
   ta_se = ta.selectionEnd;
   slctn = ta_val.substring(ta_ss, ta_se);

   rgxp_wrdcnt_slctn(slctn);

   sl = slctn.length;
   ta_s1 = ta_val.slice(0,ta_ss);
   ta_s2 = ta_val.slice(ta_se,ta_val.length);
   taObj = [ta_val, ta_ss, ta_se, slctn, sl, ta_s1, ta_s2];
   document.getElementById("ndx_inp_0").value = taObj[1];
   document.getElementById("ndx_inp_1").value = taObj[2];
   document.getElementById("ndx_inp_2").value = taObj[4];
   document.getElementById("ndx_ta_1").value = taObj[5];
   document.getElementById("ndx_ta_2").value = taObj[3];
   document.getElementById("ndx_ta_3").value = taObj[6];
   return;
}



function pst(taObj, txt){

   if (taObj[2] == 0){
      newValue = txt + taObj[0];
      taObj[1] = -1;
      taObj[2] = 0; alert(taObj[0].slice(0,taObj[2]));
      taObj[5] = taObj[0].slice(0,taObj[2]);
   }
   else if (taObj[1] == taObj[2]){
      newValue = taObj[5] + txt + taObj[6];
      taObj[5]=taObj[0].slice(0,taObj[2]);
   }
   else if (taObj[1] < taObj[2]){
      newValue = taObj[5] + txt + taObj[6];
      taObj[5]=taObj[0].slice(0,taObj[2]);
   }

   document.getElementById("ndx_ta_0").value = taObj[0] = newValue;

   // taObj = [0,	1,	2,	3,	4,	5,	6];
   // taObj = [ta_val,	ta_ss,	ta_se,	slctn,	sl,	ta_s1,	ta_s2];

   var valMsg1 = "Selection: " + taObj[3] + "\nStart: " + taObj[1] + "\nEnd: " + taObj[2] + "\nLength: " + taObj[4] + "\nTag: " + txt + "\nTag Length: " + txt.length;

   // alert(valMsg1);


// Update Start, End, Length
//   taObj[1] = taObj[5].length;
//   taObj[2] = taObj[5].length + txt.length;
//   document.getElementById("ndx_inp_0").value = taObj[2];
//   document.getElementById("ndx_inp_1").value = taObj[2];
//   document.getElementById("ndx_inp_2").value = taObj[2];
   return;
}


function rgxp_wrdcnt_txt(){
   var txt = document.getElementById("ndx_ta_0").value;
   var inp_wrd_cnt = document.getElementById("ndx_inp_wrds_cnt");
   inp_wrd_cnt.value = txt.match(/\w+/g).length;
   return;
}

function rgxp_wrdcnt_slctn(slctn){
   var inp_wrd_cnt = document.getElementById("ndx_inp_3");
   inp_wrd_cnt.value = slctn.match(/\w+/g).length;
   return;
}
