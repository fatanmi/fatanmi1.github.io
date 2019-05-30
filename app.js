let selectCourse = document.querySelectorAll("#select-list");
// console.log(selectCourse);
document.body.addEventListener("click", action);
afterload();

document.getElementById("loader").style.display = "none";
document.getElementById("result").style.display = "none";
function afterload() {
  const course = [
    "General Biology",
    "General Mathematics",
    "Experimental Physics",
  ];
  selectCourse.forEach(element => {
    course.forEach(cour => {
      let c = document.createElement("option");
      c.text = cour;
      element.appendChild(c);
      // console.log(c);
    });
  });
  let selectUnit = document.querySelectorAll("#select-unit");
  // console.log(selectUnit);
  const course2 = ["1", "2", "3", "4", "5", "6", "7"];
  selectUnit.forEach(element => {
    course2.forEach(cour => {
      let c = document.createElement("option");
      c.text = cour;
      element.appendChild(c);
      // console.log(c);
    });
  });
}
function action(e) {
  if (e.target.classList.contains("addmore")) {
    console.log(`${e.target}`);
    console.log("addmore");

    addmore();
  } else if (e.target.classList.contains("submit")) {
    console.log("submit");
    document.getElementById("loader").style.display = "block";
    document.getElementById("result").style.display = "none";
    setTimeout(submit,2000);
    
  }
  e.preventDefault;
}
// console.log(`${e.target.classList}`);

function addmore() {
  const table = document.querySelector("#myTable");
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  cell1.innerHTML = `<td scope="col">*</td>`;
  cell2.innerHTML = `<select
       class="form-control col-sm-9"
       name=""
       id="select-list"
     >
       <option id="course-list" value="">Select</option>
     </select>`;
  cell3.innerHTML = `<select
     class="form-control col-sm-7"
     name=""
     id="select-unit"
   >
     <option value="">Unit</option>`;
  cell4.innerHTML = `<input
     id="my-input"
     class="form-control col-sm-4"
     type="text"
     name=""
   />`;

  // console.log(table);
  // const tr = document.createElement("tr");
  // const tdnum = document.createElement("td");
  // const text = document.createTextNode(1);
  // tdnum.appendChild(text);

  // const tdcourse = document.createElement("td");
  // const tdselect = document.createElement("select");
  // tdselect.className = "form-control col-sm-9";
  // tdselect.id = "select-list";
  // tdselect.innerHTML = `<option id="course-list" value="">Select</option>`;

  // const tdunit = document.createElement("td");
  // const tdselectUnit = document.createElement("select");
  // tdselectUnit.className = "form-control col-sm-7";
  // tdselectUnit.id = "select-unit";

  // tbody.appendChildren(tdnum,tdselect,tdselectUnit);
  // // tbody.appendChild(tdselect);
  // // tbody.appendChild(tdselectUnit);
  // console.log(tdselect);
}
function submit() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("result").style.display = "block";
  let score = document.querySelectorAll("#score");
  let unit = document.querySelectorAll("#select-unit");
  let arrayScore = [];
  let arrayUnit = [];
  let point=[];
  // console.log(score.length);
  for (let index = 0; index < score.length; index++) {
    arrayScore[index] = score[index].value;
    arrayUnit[index] = unit[index].value;
  }
  for (let index = 0; index < arrayScore.length; index++) {
    
    console.log(arrayScore[index])
    // console.log('i am here')
    if (arrayScore[index]>=70) {
      
        point[index]=arrayUnit[index]*5;
    }
    else if(arrayScore[index]>=60 && arrayScore[index]<70) {
        point[index]=arrayUnit[index]*4;
    }
    else if(arrayScore[index]>=50 && arrayScore[index]<60) {
        point[index]=arrayUnit[index]*3;
    }
    else if(arrayScore[index]>=45 && arrayScore[index]<50) {
        point[index]=arrayUnit[index]*2;
    }
    else if(arrayScore[index]>=40 && arrayScore[index]<45) {
        point[index]=arrayUnit[index]*1;
    }
    else{
      point[index]=arrayUnit[index]*0;
    }
    // const element = arrayScore[index];
    
  }
  let totalPoint =point.reduce((a, b) => Number(a) + Number(b),0); 
  let totalUnit =arrayUnit.reduce((a, b) => Number(a) + Number(b),0); 
  // console.log(sumb); 
  console.log(`Total Point=${totalPoint}`); 
  console.log(`Total Unit=${totalUnit}`); 
  let GPA= (totalPoint/totalUnit).toFixed(2);
  const gpa = document.getElementById("gpa");
        gpa.value=GPA;
  
  console.log(GPA);
  // console.log(arrayUnit);
  // console.log(point);
  // console.log(arrayScore.length);
  // console.log(arrayUnit);
  
  // console.log(unit);
}
//     });

//     courseList.innerText='a';
//     console.log(courseList);
// });
// console.log(course);
// console.log(courseList[1]);
