const fs =require('fs')

const addstudent=(id,name,grades)=>{
    const students=loadstudents() 

    const daplicateId = students.filter((student)=>{ 
        return student.id===id
    })
    console.log(daplicateId)
    if(daplicateId.length == 0){
        students.push({ 
            id:id,
            name,
            grades,
            total : grades.reduce(function(acc, current, index, arr){
                return acc + current
            },0)
        })

        saveStudent(students) 
        console.log('save success')
    }else{
        console.log('error daplicate id')
    }
}

const deleteStudent=(id)=>{
    const students = loadstudents()
    const deleteItem = students.filter((student)=>{
        return student.id !== id
    })
    //console.log(students.length)
    //console.log(deleteItem.length)
    if(students.length !==deleteItem.length){
        saveStudent(deleteItem)
        console.log('done delete')
    }else{
        console.log('Student is not found PLZ.. try again')
    }
}

const readStudent =(id)=>{
    const students = loadstudents()
    const readItem =students.find((student)=>{
     return   student.id == id

    })
    console.log(readItem.name,readItem.grades,readItem.total)
}

const listStudent =(id)=>{
    const students = loadstudents()
    const readItem =students.find((student)=>{
     return   student.id == id

    })
    console.log(readItem.name,readItem.grades)
}




loadstudents=()=>{
    try{
        const dataBuffer=fs.readFileSync('dataStudent.json').toString()
        return JSON.parse(dataBuffer)
    }
    catch(e){
        return[]
    }
};

saveStudent=(students)=>{
    const saveee=JSON.stringify(students)
    fs.writeFileSync('dataStudent.json',saveee)
}
module.exports={addstudent,deleteStudent,readStudent,listStudent }
