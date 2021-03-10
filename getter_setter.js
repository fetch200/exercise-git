// 从fullName 和 fullName2 的用法和使用体验上来看，getter 和 setter 像函数调用的语法糖
const user = {
    name:"John",
    surname:"Smith",
    get fullName(){
        return `${this.name} ${this.surname}`
    },
    set fullName(value){
      [this.name,this.surname] = value.split(" ")
    },
    fullName2(){
        return `${this.name} ${this.surname}`
    },
    fullName3:{
        get:function(){
            return `${this.name} ${this.surname}`
        }
    }

}
console.log(user.fullName)
console.log(user.fullName2())
console.log(user.fullName)