
const yargs = require('yargs')

const notes = require('./student')
//const xx = require('./task2')

yargs.command({
    command:'add',
    describe:'add student',
    builder:{
        id:{
            describe:'this is id',
            demandOption:true,
            type:'number'
        },
        name:{
            describe:'this is name',
            demandOption:true,
            type:'string'
        },
        grades:{
            describe:'this is grades',
            demandOption:true,
            type:'array'
        }
    },
    handler:(x)=>{
        notes.addstudent(x.id,x.name,x.grades)
        //console.log(x.grades)
    }
})
yargs.command({
    command:'delete',
    describe:'delete student',
    builder:{
            id:{
                describe:'this is id',
                demandOption:true,
                type:'number'
            }
    },
    handler:(x)=>{
        notes.deleteStudent(x.id)
    }
})

yargs.command({
    command:'read',
    describe:'read student',
    builder:{
        id:{
            describe:'this is title',
            demandOption:true,
            type:'number'
        },
    },
    handler:(x)=>{
        notes.readStudent(x.id)
    }
})
yargs.command({
    command:'list',
    describe:'list notes',
    builder:{
        id:{
            describe:'this is id',
            demandOption:true,
            type:'number'
        },
    },
    handler:(x)=>{
        notes.listStudent(x.id)
    }
})

yargs.parse()