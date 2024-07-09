let students = [
    {
      "studentId": "neco2024",
      "password": "muideen@pass",
      "Candidate_name": "Akinroye Muideen Olawale",
      "Date_of_Birth": "2003-05-15",
      "Registration_Number": "RN12345",
      "Exam_Year": 2024,
      "Exam_Type": "SSCE_INT",
      "Centre_Number": 10165757,
      "Centre_Name": "Osogbo Grammar School",
      "Subjects": [
        {"name": "Mathematics", "grade": "A1", "remark": "EXCELLENT"},
        {"name": "Physics", "grade": "B2", "remark": "GOOD"},
        {"name": "Chemistry", "grade": "A1", "remark": "EXCELLENT"},
        {"name": "Biology", "grade": "E8", "remark": "PASS"},
        {"name": "English", "grade": "A1", "remark": "EXCELLENT"},
      ]
    },
   {
      "studentId": "neco2024",
      "password": "abiola@pass",
      "Candidate_name": "Abiola Olayanju",
      "Date_of_Birth": "2003-11-05",
      "Registration_Number": "RN13579",
      "Exam_Year": 2024,
      "Exam_Type": "Final",
      "Centre_Number": 105858585,
      "Centre_Name": "Ataoja Grammar School",
      "Subjects": [
        {"name": "Mathematics", "grade": "C5", "remark": "CREDIT"},
        {"name": "Physics", "grade": "C5", "remark": "CREDIT"},
        {"name": "Chemistry", "grade": "C6", "remark": "CREDIT"},
        {"name": "Biology", "grade": "E8", "remark": "PASS"},
        {"name": "English", "grade": "A1", "remark": "EXCELLENT"},
      ]
    }
  ];

  //console.log(students[0])

  let btn = document.querySelector('#submit')
  btn.addEventListener("click", function(){
    // alert("hello")
    let studentIdInput = document.querySelector("input[type='text']")
    let passwordInput = document.querySelector("input[type='password']");
    let OutputDiv = document.querySelector(".output");
    let resultInfo = document.querySelector(".result-info");
    let formContainer = document.querySelector(".result-container");
    let validCredentials = false;
   for(let i =0; i < students.length; i++) {
    //console.log(students[i])
    if(students[i].studentId ===studentIdInput.value && students[i].password === passwordInput.value){
      validCredentials = true;
      resultInfo.innerHTML =
      `
      <style>
        table {
          width: 100%;
          border-collapse: collapse;
        }
        td {
          padding: 4px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        em {
          display: block;
          font-style: italic;
          color: #666;
        }
      </style>
      <table>
        <tr>
          <td><b>${students[i].Candidate_name}</b><br><em>Candidate Name</em></td>
          <td><b>${students[i].Date_of_Birth}</b><br><em>Date of Birth</em></td>
        </tr>
        <tr>
          <td><b>${students[i].Registration_Number}</b><br><em>Registration Number</em></td>
          <td><b>${students[i].Exam_Year}</b><br><em>Exam Year</em></td>
          <td><b>${students[i].Exam_Type}</b><br><em>Exam Type</em></td>
        </tr>
        <tr>
          <td><b>${students[i].Centre_Number}</b><br><em>Centre Number</em></td>
          <td><b>${students[i].Centre_Name}</b><br><em>Center Name</em></td>
        </tr>
      </table>
      <table>
            <tr>
              <th style="background: #BCB0AD; color: white; text-align:left;padding: 8px; border: 1px solid #ddd;">S/N</th>
              <th style="background: #BCB0AD; color: white; text-align:left;padding: 8px; border: 1px solid #ddd;">SUBJECT</th>
              <th style="background: #BCB0AD; color: white; text-align:left;padding: 8px; border: 1px solid #ddd;">GRADE</th>
              <th style="background: #BCB0AD; color: white; text-align:left;padding: 8px; border: 1px solid #ddd;"">REMARKS</th>
            </tr>
            ${students[i].Subjects.map((subject, index) => `
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">${index + 1}</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${subject.name}</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${subject.grade}</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${subject.remark}</td>
            </tr>
          ` ).join("")}

          </table>
      `
    }
    }
    if(validCredentials){
     OutputDiv.style.display = "block"
      formContainer.style.display ="none"
    }
    else{
      alert("inavaild studentId and password combination")
    }
  

     
    //console.log(studentIdInput.value)
    //console.log(passwordInput.value)
  })  