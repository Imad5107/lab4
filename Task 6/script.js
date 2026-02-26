// Implement student grade sheet where the user should enter registration number, name, 
// semester, subject marks such as Web Engineering, computer programming, object oriented 
// programming, Data Structures and Algorithms and Artificial intelligence. The system should 
// calculate the percentage of the student based on 500 marks and return the grades such as A, B, 
// C, D or F. Set your own grading criteria. The output should be displayed in tabular format depicting 
// the registration number, name, individual subject marks, obtained marks and final grade. 


function gradeSheet(){
    var regNo=prompt("Enter your registration number: ");
    var name=prompt("Enter your name: ");
    var semester=prompt("Enter yours semester: ");
    var webEng=Number(prompt("Enter your marks in Web Engineering: "));
    var compProg=Number(prompt("Enter your marks in Computer Programming: "));
    var oop=Number(prompt("Enter your marks in Object Oriented Programming: "));
    var dsa=Number(prompt("Enter your marks in Data Structures and Algorithms: "));
    var ai=Number(prompt("Enter your marks in Artificial Intelligence: "));
    var totalMarks=webEng+compProg+oop+dsa+ai;
    var percentage=(totalMarks/500)*100;
    var grade;
    if(percentage>=90){
        grade="A";

    }
    else if(percentage>=80){
        grade="B";
        
    }
    else if(percentage>=70){
        grade="C";
        
    }
    else if(percentage>=60){
        grade="D";
        
    }
    else{
        grade="F";
        
    }
    document.write("<table border='1'><tr><th>Registration Number</th><th>Name</th><th>Semester</th><th>Web Engineering</th><th>Computer Programming</th><th>Object Oriented Programming</th><th>Data Structures and Algorithms</th><th>Artificial Intelligence</th><th>Total Marks</th><th>Percentage</th><th>Grade</th></tr>");
    document.write("<tr><td>"+regNo+"</td><td>"+name+"</td><td>"+semester+"</td><td>"+webEng+"</td><td>"+compProg+"</td><td>"+oop+"</td><td>"+dsa+"</td><td>"+ai+"</td><td>"+totalMarks+"</td><td>"+percentage.toFixed(2)+"%</td><td>"+grade+"</td></tr>");
    document.write("</table>");
    

    
}

gradeSheet();